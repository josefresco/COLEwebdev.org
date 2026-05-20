import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dir, 'screenshots');
mkdirSync(outDir, { recursive: true });

const base = 'https://colewebdev.org';
const browser = await chromium.launch();

// Desktop quote page — sidebar avatars are visible here
const desk = await browser.newPage();
await desk.setViewportSize({ width: 1280, height: 900 });
await desk.goto(base + '/quote.html', { waitUntil: 'domcontentloaded', timeout: 20000 });
await desk.waitForTimeout(4000);
const avatarEl = await desk.$('.rq-sidebar-avatars');
if (avatarEl) {
  const box = await avatarEl.boundingBox();
  await desk.screenshot({
    path: join(outDir, 'avatars-quote-desktop.png'),
    clip: { x: Math.max(0, box.x - 20), y: Math.max(0, box.y - 20), width: 300, height: box.height + 120 }
  });
  console.log('✓ quote sidebar avatars (desktop)');
} else {
  console.log('✗ .rq-sidebar-avatars not found');
}
await desk.close();

// Homepage — scroll Josiah photo into view
const home = await browser.newPage();
await home.setViewportSize({ width: 390, height: 844 });
await home.goto(base + '/', { waitUntil: 'domcontentloaded', timeout: 20000 });
await home.waitForTimeout(4000);
const josiahImg = await home.$('img[src*="josiah-cole"]');
if (josiahImg) {
  await josiahImg.scrollIntoViewIfNeeded();
  await home.waitForTimeout(300);
  const box = await josiahImg.boundingBox();
  await home.screenshot({
    path: join(outDir, 'avatars-home-mobile.png'),
    clip: { x: 0, y: Math.max(0, box.y - 20), width: 390, height: box.height + 80 }
  });
  console.log('✓ home avatars (mobile)');
} else {
  console.log('✗ josiah img not found on homepage');
}
await home.close();

await browser.close();
console.log('\nDone.');
