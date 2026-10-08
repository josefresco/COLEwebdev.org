// Convert images to WebP, optionally downscaling. Writes <name>.webp next to
// each source and leaves the original in place (social previews and JSON-LD
// may still point at the JPG/PNG).
//
//   cd build && npm run images -- ../assets/photo.jpg --width 1200
//   cd build && npm run images -- ../assets/a.png ../assets/b.png --quality 85
//
// --width    max output width in px (never upscales). Rule of thumb: twice the
//            largest width the image is displayed at on the site.
// --quality  WebP quality, default 80. Use 85–90 for text-heavy graphics.

import sharp from 'sharp';
import { stat } from 'node:fs/promises';

const args = process.argv.slice(2);
const opt = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  if (i === -1) return fallback;
  const [, value] = args.splice(i, 2);
  return Number(value);
};
const width = opt('width', undefined);
const quality = opt('quality', 80);
const files = args;

if (!files.length) {
  console.error('usage: npm run images -- <file...> [--width N] [--quality Q]');
  process.exit(1);
}

const kb = (n) => `${Math.round(n / 1024)}KB`;
let before = 0, after = 0;
for (const file of files) {
  const out = file.replace(/\.(png|jpe?g)$/i, '.webp');
  if (out === file) { console.error(`skip ${file}: not a PNG or JPG`); continue; }
  const img = sharp(file);
  const { width: w0, height: h0 } = await img.metadata();
  const info = await img
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 6, smartSubsample: true })
    .toFile(out);
  const s0 = (await stat(file)).size;
  before += s0; after += info.size;
  console.log(`${file} ${w0}x${h0} ${kb(s0)} → ${out} ${info.width}x${info.height} ${kb(info.size)}`);
}
if (files.length > 1) console.log(`total ${kb(before)} → ${kb(after)}`);
