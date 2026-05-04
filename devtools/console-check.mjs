/**
 * console-check.mjs
 * Usage: node devtools/console-check.mjs <url> [wait_ms]
 *
 * Opens the URL in a headless Chromium browser, waits for JS to
 * execute (including Babel transpilation), then prints all console
 * messages and page errors to stdout.
 */

import { chromium } from 'playwright';

const url = process.argv[2] || 'http://localhost:8080';
const waitMs = parseInt(process.argv[3] || '5000', 10);

const browser = await chromium.launch();
const page = await browser.newPage();

const messages = [];

page.on('console', msg => {
  messages.push({ type: msg.type(), text: msg.text() });
});

page.on('pageerror', err => {
  messages.push({ type: 'pageerror', text: err.message });
});

page.on('requestfailed', req => {
  messages.push({ type: 'requestfailed', text: `${req.failure()?.errorText} — ${req.url()}` });
});

console.log(`\nLoading: ${url} (waiting ${waitMs}ms for JS...)\n`);

try {
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
  await page.waitForTimeout(waitMs);
} catch (e) {
  console.error('Navigation error:', e.message);
}

await browser.close();

if (messages.length === 0) {
  console.log('✓ No console errors or warnings.');
} else {
  const errors   = messages.filter(m => m.type === 'error' || m.type === 'pageerror');
  const warnings = messages.filter(m => m.type === 'warning');
  const logs     = messages.filter(m => m.type === 'log');
  const failed   = messages.filter(m => m.type === 'requestfailed');

  if (errors.length) {
    console.log(`\n── ERRORS (${errors.length}) ──────────────────────`);
    errors.forEach(m => console.log(`  ✗ [${m.type}] ${m.text}`));
  }
  if (warnings.length) {
    console.log(`\n── WARNINGS (${warnings.length}) ─────────────────────`);
    warnings.forEach(m => console.log(`  ⚠ ${m.text}`));
  }
  if (failed.length) {
    console.log(`\n── FAILED REQUESTS (${failed.length}) ──────────────────`);
    failed.forEach(m => console.log(`  ✗ ${m.text}`));
  }
  if (logs.length) {
    console.log(`\n── LOGS (${logs.length}) ──────────────────────────`);
    logs.forEach(m => console.log(`  · ${m.text}`));
  }
}

console.log('\n─────────────────────────────────────────────\n');
