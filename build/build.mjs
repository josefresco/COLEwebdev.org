// Site build: compile JSX ahead of time, then pre-render every page to static HTML.
//
//   cd build && npm install && npm run build
//
// 1. Compile   — every root-level *.jsx → js/*.js (esbuild, minified). Files stay
//                classic scripts that share globals, same as the old Babel setup.
// 2. Rewrite   — in every root-level *.html: drop Babel Standalone, point script
//                tags at js/*.js with a content-hash ?v= for cache-busting.
// 3. Pre-render — load each page in headless Chromium, take the element the page
//                would mount (see mount.jsx), renderToString it, and write the
//                markup into <div id="root">…</div><!--/root-->. In the browser,
//                createAppRoot() then hydrates that markup instead of rebuilding it.
//
// The HTML files are both source and output: the build is idempotent and safe to
// re-run after any edit. Commit the updated *.html and js/ together.

import { transform } from 'esbuild';
import { chromium } from 'playwright';
import { createHash } from 'node:crypto';
import { readFile, writeFile, readdir, mkdir, unlink } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { serve } from './serve.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'js');
const NM = path.join(ROOT, 'build', 'node_modules');
const CONCURRENCY = 6;

const BABEL_TAG = /[ \t]*<script src="https:\/\/unpkg\.com\/@babel\/standalone@[^"]*"[^>]*><\/script>\r?\n?/;
// Matches both the source form and the built form so the rewrite is idempotent.
const SCRIPT_TAG = /<script (?:type="text\/babel" src="([\w-]+)\.jsx(?:\?v=\w+)?"|defer src="js\/([\w-]+)\.js(?:\?v=\w+)?")><\/script>/g;
const ROOT_UNMARKED = /<div id="root"><\/div>(?!<!--\/root-->)/;
const ROOT_BUILT = /<div id="root">[\s\S]*?<\/div>(?:<!--\/root-->)+/; // tolerate repeated end markers from older builds

// unpkg URL → local file, so pre-rendering is offline and uses the exact same
// React build the live pages load (verified identical via the SRI hashes).
const CDN_LOCAL = {
  'https://unpkg.com/react@18.3.1/umd/react.production.min.js': 'react/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js': 'react-dom/umd/react-dom.production.min.js',
};

const hash = (s) => createHash('sha256').update(s).digest('hex').slice(0, 8);

// ── 1. Compile ──────────────────────────────────────────────────────────────
async function compile() {
  await mkdir(OUT, { recursive: true });
  const files = (await readdir(ROOT)).filter((f) => f.endsWith('.jsx'));
  const versions = {};
  for (const f of files) {
    const name = f.slice(0, -4);
    const src = await readFile(path.join(ROOT, f), 'utf8');
    // No `format`: output stays a plain script, so top-level names remain
    // shared globals across files and esbuild leaves them un-renamed.
    const { code } = await transform(src, {
      loader: 'jsx', jsx: 'transform', minify: true, target: 'es2019',
      legalComments: 'none', sourcefile: f,
    });
    const out = path.join(OUT, `${name}.js`);
    if (!existsSync(out) || (await readFile(out, 'utf8')) !== code) await writeFile(out, code);
    versions[name] = hash(code);
  }
  for (const f of await readdir(OUT)) {
    if (f.endsWith('.js') && !versions[f.slice(0, -3)]) await unlink(path.join(OUT, f));
  }
  console.log(`compiled ${files.length} JSX files → js/`);
  return versions;
}

// ── 2. Rewrite HTML ─────────────────────────────────────────────────────────
function rewrite(html, file, versions) {
  if (!SCRIPT_TAG.test(html)) return html;
  SCRIPT_TAG.lastIndex = 0;
  html = html.replace(BABEL_TAG, '');
  html = html.replace(SCRIPT_TAG, (_, jsxName, jsName) => {
    const name = jsxName || jsName;
    if (!versions[name]) throw new Error(`${file}: script ${name} has no matching ${name}.jsx`);
    return `<script defer src="js/${name}.js?v=${versions[name]}"></script>`;
  });
  if (!html.includes('src="js/mount.js')) {
    html = html.replace('<script defer src="js/', `<script defer src="js/mount.js?v=${versions.mount}"></script>\n<script defer src="js/`);
  }
  html = html.replace(ROOT_UNMARKED, '<div id="root"></div><!--/root-->');
  return html;
}

// ── 3. Pre-render ───────────────────────────────────────────────────────────
async function prerenderPage(context, origin, file, serverUmd) {
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  try {
    await page.route('**/*', async (route) => {
      const url = route.request().url();
      const type = route.request().resourceType();
      if (CDN_LOCAL[url]) return route.fulfill({ path: path.join(NM, CDN_LOCAL[url]), contentType: 'text/javascript' });
      if (url.startsWith(origin) && !['image', 'font', 'media'].includes(type)) return route.continue();
      return route.abort(); // analytics, fonts, images, APIs: not needed to render markup
    });
    await page.addInitScript(() => { window.__PRERENDER__ = (app) => { window.__PRERENDER_APP__ = app; }; });
    await page.goto(`${origin}/${file === 'index.html' ? '' : file}`, { waitUntil: 'load' });
    await page.waitForFunction(() => window.__PRERENDER_APP__ !== undefined, null, { timeout: 15000 })
      .catch(() => { throw new Error(`${file}: page never mounted${errors.length ? `\n  ${errors.join('\n  ')}` : ''}`); });
    await page.addScriptTag({ content: serverUmd });
    const markup = await page.evaluate(() => window.ReactDOMServer.renderToString(window.__PRERENDER_APP__));
    if (errors.length) throw new Error(`${file}: runtime errors\n  ${errors.join('\n  ')}`);
    return markup;
  } finally {
    await page.close();
  }
}

async function main() {
  const versions = await compile();
  const pages = (await readdir(ROOT)).filter((f) => f.endsWith('.html')).sort();

  const sources = {};
  for (const f of pages) {
    const before = await readFile(path.join(ROOT, f), 'utf8');
    sources[f] = { before, html: rewrite(before, f, versions) };
    // Write the rewritten shells first: the pre-render pass loads them over HTTP.
    if (sources[f].html !== before) await writeFile(path.join(ROOT, f), sources[f].html);
  }

  // Redirect stubs (meta refresh) navigate away; leave their #root empty.
  const targets = pages.filter((f) => ROOT_BUILT.test(sources[f].html) && !/http-equiv="refresh"/i.test(sources[f].html));
  const serverUmd = await readFile(path.join(NM, 'react-dom/umd/react-dom-server-legacy.browser.production.min.js'), 'utf8');
  const server = await serve(ROOT);
  const origin = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch();
  const context = await browser.newContext({ javaScriptEnabled: true });
  const failures = [];

  try {
    const queue = [...targets];
    await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
      while (queue.length) {
        const f = queue.shift();
        try {
          const markup = await prerenderPage(context, origin, f, serverUmd);
          sources[f].html = sources[f].html.replace(ROOT_BUILT, () => `<div id="root">${markup}</div><!--/root-->`);
        } catch (e) {
          failures.push(e.message);
        }
      }
    }));
  } finally {
    await browser.close();
    server.close();
  }

  let changed = 0;
  for (const f of pages) {
    const current = await readFile(path.join(ROOT, f), 'utf8');
    if (sources[f].html !== current) await writeFile(path.join(ROOT, f), sources[f].html);
    if (sources[f].html !== sources[f].before) changed++;
  }
  console.log(`pre-rendered ${targets.length - failures.length}/${targets.length} pages, ${changed} HTML files changed`);
  if (failures.length) {
    console.error(`\n${failures.length} page(s) failed:\n${failures.join('\n')}`);
    process.exit(1);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
