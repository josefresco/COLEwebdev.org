import pkg from './node_modules/playwright-core/index.js';
const { chromium } = pkg;
import { CHECKLISTS } from './checklists-data.mjs';
import { mkdirSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '..', 'assets', 'checklists');
mkdirSync(OUT_DIR, { recursive: true });

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderHtml(checklist) {
  const sectionsHtml = checklist.sections.map(sec => `
    <div class="section">
      <div class="section-hd">${esc(sec.heading)}</div>
      <ul class="items">
        ${sec.items.map(item => `<li><span class="box"></span><span class="txt">${esc(item)}</span></li>`).join('\n')}
      </ul>
    </div>
  `).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@500;600&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
<style>
  @page { size: Letter; margin: 0; }
  * { box-sizing: border-box; }
  html, body {
    margin: 0; padding: 0;
    font-family: 'Geist', system-ui, -apple-system, sans-serif;
    color: #0F2A44;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .page {
    width: 8.5in;
    min-height: 11in;
    padding: 0.55in 0.6in 0.45in;
    display: flex;
    flex-direction: column;
  }
  .topbar {
    height: 5px;
    background: linear-gradient(90deg, #2192BC, #5CC035);
    margin: -0.55in -0.6in 22px;
  }
  .brandrow {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 22px;
  }
  .brand-name {
    font-weight: 700;
    font-size: 13px;
    letter-spacing: -0.01em;
    color: #14385C;
  }
  .brand-name span { color: #5CC035; }
  .brand-url {
    font-family: 'Geist Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.04em;
    color: #6B7A91;
  }
  .hero {
    display: flex;
    align-items: center;
    gap: 18px;
    margin-bottom: 28px;
  }
  .glyph-badge {
    flex-shrink: 0;
    width: 56px; height: 56px;
    border-radius: 14px;
    background: #14385C;
    color: #5CC035;
    display: flex; align-items: center; justify-content: center;
    font-size: 28px;
  }
  h1 {
    font-family: 'Instrument Serif', 'Times New Roman', serif;
    font-weight: 400;
    font-size: 30px;
    line-height: 1.1;
    margin: 0 0 6px;
    color: #0F2A44;
  }
  .subtitle {
    font-size: 13px;
    line-height: 1.5;
    color: #2A3A52;
    max-width: 58ch;
    margin: 0;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: start;
    gap: 28px 32px;
  }
  .section { break-inside: avoid; }
  .section-hd {
    font-family: 'Geist Mono', monospace;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #2192BC;
    border-bottom: 1.5px solid #E8DFCB;
    padding-bottom: 6px;
    margin-bottom: 10px;
  }
  ul.items { list-style: none; margin: 0; padding: 0; }
  ul.items li {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    margin-bottom: 8px;
    break-inside: avoid;
  }
  .box {
    flex-shrink: 0;
    width: 11px; height: 11px;
    border: 1.4px solid #14385C;
    border-radius: 3px;
    margin-top: 2px;
  }
  .txt {
    font-size: 11.5px;
    line-height: 1.45;
    color: #0F2A44;
  }
  .footer {
    margin-top: auto;
    padding-top: 14px;
    border-top: 1px solid #E8DFCB;
    text-align: center;
  }
  .footer-cta {
    font-size: 11.5px;
    color: #14385C;
    margin: 0 0 3px;
  }
  .footer-cta strong { color: #2192BC; }
  .footer-tag {
    font-family: 'Geist Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #6B7A91;
    margin: 0;
  }
</style>
</head>
<body>
  <div class="page">
    <div class="topbar"></div>
    <div class="brandrow">
      <div class="brand-name">COLE<span>webdev</span></div>
      <div class="brand-url">colewebdev.org</div>
    </div>
    <div class="hero">
      <div class="glyph-badge">${checklist.glyph}</div>
      <div>
        <h1>${esc(checklist.title)}</h1>
        <p class="subtitle">${esc(checklist.subtitle)}</p>
      </div>
    </div>
    <div class="grid">
      ${sectionsHtml}
    </div>
    <div class="footer">
      <p class="footer-cta">Need a hand with this? <strong>Free consultation</strong> at colewebdev.org/quote.html · 508.413.2043</p>
      <p class="footer-tag">COLEwebdev · Cape Cod Web Design · Since 2006</p>
    </div>
  </div>
</body>
</html>`;
}

const browser = await chromium.launch();
const page = await browser.newPage();

for (const checklist of CHECKLISTS) {
  const html = renderHtml(checklist);
  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  const outPath = path.join(OUT_DIR, `${checklist.slug}.pdf`);
  await page.pdf({
    path: outPath,
    format: 'Letter',
    printBackground: true,
    margin: { top: '0', bottom: '0', left: '0', right: '0' },
  });
  console.log('Generated', outPath);
}

await browser.close();
console.log(`Done. ${CHECKLISTS.length} PDFs written to ${OUT_DIR}`);
