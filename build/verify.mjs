// Hydration check: load every built page with React's *development* build, which
// reports any mismatch between the pre-rendered HTML and the first client render
// (production React silently keeps mismatched attributes). Run after `npm run build`.
//
//   cd build && npm run verify            # all pages
//   cd build && npm run verify about.html # just these

import { chromium } from 'playwright';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { serve } from './serve.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NM = path.join(ROOT, 'build', 'node_modules');
const CONCURRENCY = 6;

const DEV_BUILDS = {
  'react.production.min.js': 'react/umd/react.development.js',
  'react-dom.production.min.js': 'react-dom/umd/react-dom.development.js',
};

async function checkPage(context, origin, file) {
  const page = await context.newPage();
  const problems = [];
  page.on('pageerror', (e) => problems.push(`error: ${e.message}`));
  page.on('console', (m) => {
    if (!['error', 'warning'].includes(m.type())) return;
    const text = m.text();
    // Blocked external requests (fonts, images, APIs) are expected offline.
    if (/Failed to load resource|ERR_FAILED|Failed to fetch|NetworkError|net::/.test(text)) return;
    problems.push(`${m.type()}: ${text.split('\n')[0].slice(0, 300)}`);
  });
  try {
    await page.route('**/*', async (route) => {
      const req = route.request();
      const url = req.url();
      if (url.startsWith('https://unpkg.com/')) {
        const dev = DEV_BUILDS[url.split('/').pop()];
        return dev ? route.fulfill({ path: path.join(NM, dev), contentType: 'text/javascript' }) : route.abort();
      }
      if (url.startsWith(origin) && req.resourceType() === 'document') {
        // Dev builds don't match the production SRI hashes; drop integrity for this check only.
        const res = await route.fetch();
        const body = (await res.text()).replace(/ integrity="[^"]*"/g, '');
        return route.fulfill({ response: res, body });
      }
      if (url.startsWith(origin)) return route.continue();
      return route.abort();
    });
    await page.goto(`${origin}/${file === 'index.html' ? '' : file}`, { waitUntil: 'load' });
    await page.waitForTimeout(300);
    const hydrated = await page.evaluate(() => {
      const el = document.getElementById('root').firstElementChild;
      return !!el && Object.keys(el).some((k) => k.startsWith('__reactFiber'));
    });
    if (!hydrated) problems.push('not hydrated: #root has no React-owned content');
  } finally {
    await page.close();
  }
  return problems;
}

async function main() {
  const only = process.argv.slice(2);
  const all = (await readdir(ROOT)).filter((f) => f.endsWith('.html')).sort();
  const pages = [];
  for (const f of only.length ? only : all) {
    const html = await readFile(path.join(ROOT, f), 'utf8');
    if (/<div id="root"><[^/]/.test(html)) pages.push(f); // has pre-rendered markup
  }

  const server = await serve(ROOT);
  const origin = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const report = {};
  try {
    const queue = [...pages];
    await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
      while (queue.length) {
        const f = queue.shift();
        const problems = await checkPage(context, origin, f).catch((e) => [`check failed: ${e.message}`]);
        if (problems.length) report[f] = problems;
      }
    }));
  } finally {
    await browser.close();
    server.close();
  }

  const bad = Object.keys(report).sort();
  for (const f of bad) console.log(`\n${f}\n  ${[...new Set(report[f])].join('\n  ')}`);
  console.log(`\n${pages.length - bad.length}/${pages.length} pages hydrate cleanly`);
  if (bad.length) process.exit(1);
}

main().catch((e) => { console.error(e); process.exit(1); });
