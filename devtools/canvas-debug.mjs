/**
 * canvas-debug.mjs — diagnose NeuralCanvas on ai-apps.html
 */
import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dir, 'screenshots');
mkdirSync(outDir, { recursive: true });

const URL = (process.argv[2] || 'https://colewebdev.org') + '/ai-apps.html';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 900 });

// Capture console + errors
const logs = [];
page.on('console', m => logs.push(`[${m.type()}] ${m.text()}`));
page.on('pageerror', e => logs.push(`[pageerror] ${e.message}`));

console.log('Loading:', URL);
await page.goto(URL, { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(3000);

// Screenshot before evaluation
await page.screenshot({ path: join(outDir, 'ai-apps-hero.png'), clip: { x: 0, y: 0, width: 1280, height: 500 } });
console.log('Screenshot saved: ai-apps-hero.png');

// Inspect canvas state
const info = await page.evaluate(() => {
  const canvas = document.querySelector('.ai-hero-canvas');
  if (!canvas) return { error: 'canvas element not found in DOM' };

  const ctx = canvas.getContext('2d');

  // 1. Manual draw test — can we write pixels at all?
  ctx.fillStyle = 'rgba(255,0,0,1)';
  ctx.fillRect(10, 10, 20, 20);
  const afterManual = ctx.getImageData(20, 20, 1, 1).data;
  const manualDrawWorks = afterManual[0] > 200;

  // 2. Clear and scan 500 random pixels for any non-transparent content
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let nonTransparentCount = 0;
  const w = canvas.width, h = canvas.height;
  for (let i = 0; i < 500; i++) {
    const x = Math.floor(Math.random() * w);
    const y = Math.floor(Math.random() * h);
    const d = ctx.getImageData(x, y, 1, 1).data;
    if (d[3] > 0) nonTransparentCount++;
  }

  // 3. Force one draw cycle by calling rAF and yielding
  // (we'll check again via a separate evaluate after waiting)

  return {
    canvasW: canvas.width,
    canvasH: canvas.height,
    manualDrawWorks,
    nonTransparentPixelsBeforeClear: nonTransparentCount,
  };
});

console.log('\n── Canvas diagnostics ──');
console.log(JSON.stringify(info, null, 2));

// Draw an unmissable test rectangle and screenshot to check stacking
await page.evaluate(() => {
  const canvas = document.querySelector('.ai-hero-canvas');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(255, 0, 0, 0.85)';
  ctx.fillRect(50, 50, 300, 120);
  ctx.fillStyle = 'white';
  ctx.font = 'bold 28px sans-serif';
  ctx.fillText('CANVAS VISIBLE', 70, 120);
});
await page.screenshot({ path: join(outDir, 'ai-apps-canvas-test.png'), clip: { x: 0, y: 0, width: 1280, height: 300 } });
console.log('Test screenshot saved: ai-apps-canvas-test.png');

// Clear test rect and let animation run
await page.evaluate(() => {
  const canvas = document.querySelector('.ai-hero-canvas');
  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
});

await page.waitForTimeout(1000);

const afterWait = await page.evaluate(() => {
  const canvas = document.querySelector('.ai-hero-canvas');
  const ctx = canvas.getContext('2d');
  const w = canvas.width, h = canvas.height;

  let nonTransparent = 0;
  let maxAlpha = 0;
  let maxPixel = null;
  // dense 40x40 grid
  for (let xi = 0; xi < 40; xi++) {
    for (let yi = 0; yi < 40; yi++) {
      const x = Math.floor((xi / 39) * (w - 1));
      const y = Math.floor((yi / 39) * (h - 1));
      const d = ctx.getImageData(x, y, 1, 1).data;
      if (d[3] > 0) nonTransparent++;
      if (d[3] > maxAlpha) { maxAlpha = d[3]; maxPixel = { x, y, r: d[0], g: d[1], b: d[2], a: d[3] }; }
    }
  }
  return { nonTransparentIn1600Grid: nonTransparent, maxAlpha, maxPixel };
});

console.log('\n── Canvas diagnostics ──');
console.log(JSON.stringify(info, null, 2));

console.log('\n── After-wait pixel scan (1600 pts) ──');
console.log(JSON.stringify(afterWait, null, 2));

if (logs.length) {
  console.log('\n── Console / errors ──');
  logs.forEach(l => console.log(l));
} else {
  console.log('\n── No console messages ──');
}

await browser.close();
