/**
 * screenshot-check.mjs
 * Takes mobile + desktop screenshots of key pages and saves to devtools/screenshots/
 * Usage: node devtools/screenshot-check.mjs [base_url]
 */

import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dir, 'screenshots');
mkdirSync(outDir, { recursive: true });

const base = (process.argv[2] || 'https://colewebdev.org').replace(/\/$/, '');
const WAIT = 4000;

const pages = [
  { name: 'home',    path: '/',            fullPage: true },
  { name: 'quote',   path: '/quote.html',  fullPage: true },
  { name: 'contact', path: '/contact.html', fullPage: false },
];

const browser = await chromium.launch();

for (const { name, path, fullPage } of pages) {
  const url = base + path;

  // Mobile
  const mob = await browser.newPage();
  await mob.setViewportSize({ width: 390, height: 844 });
  await mob.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000 });
  await mob.waitForTimeout(WAIT);
  await mob.screenshot({ path: join(outDir, `${name}-mobile.png`), fullPage });
  console.log(`✓ ${name} mobile`);
  await mob.close();

  // Desktop
  const desk = await browser.newPage();
  await desk.setViewportSize({ width: 1280, height: 900 });
  await desk.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000 });
  await desk.waitForTimeout(WAIT);
  await desk.screenshot({ path: join(outDir, `${name}-desktop.png`), fullPage });
  console.log(`✓ ${name} desktop`);
  await desk.close();
}

await browser.close();
console.log(`\nScreenshots saved to devtools/screenshots/`);
