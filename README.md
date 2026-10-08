# COLEwebdev.org

A React 18 site that showcases the services and portfolio of **Cole Web Development**. JSX is compiled ahead of time with esbuild and every page is pre-rendered to static HTML, which React then hydrates in the browser. There is no bundler and no in-browser transpilation.

---

## Stack Overview

- **Frontend**: React 18 (via CDN), plain JavaScript JSX compiled to `js/*.js` by esbuild.
- **Pre-rendering**: `build/build.mjs` renders each page to static HTML in headless Chromium so content is visible without JavaScript.
- **Styling**: All styles are defined in a single `styles.css` file using CSS variables for colors, typography, and spacing.
- **Build**: one small step in `build/` (`npm run build`). Its output (`js/` and the updated `*.html`) is committed, and GitHub Pages serves the repo as-is.

---

## Development

1. **Build** (first time: `npm install` in `build/`):
   ```bash
   cd build && npm run build && npm run verify
   ```
   `verify` loads every page with React's development build and reports hydration mismatches.

2. **Serve the project** (Python example):
   ```bash
   python -m http.server 8080
   ```
   Then open <http://localhost:8080> in a browser.

3. You can also use VS Code Live Server, `npx serve`, or any static file server.

4. Edit the source `*.jsx` files, then re-run `npm run build` to see changes. Never edit `js/` or the markup inside `<div id="root">` directly; both are generated.

---

## Architecture

- **Entry point** – `index.html` loads scripts in a strict order:
  0. `mount.jsx` – `createAppRoot`, which hydrates the pre-rendered markup.
  1. `tweaks-panel.jsx` – defines the `useTweaks` hook and the `TweaksPanel` UI.
  2. `parts-hero.jsx` – components `Header`, `Hero`, `Trust`.
  3. `parts-services.jsx` – `Services` component.
  4. `parts-rest.jsx` – contains static data and components such as `Estimator`, `AIShowcase`, `Process`, `Portfolio`, `CTA`, `Testimonial`, `News`, and `Footer`.
  5. `app.jsx` – root `App` component mounted to `<div id="root">`.

- **Tweaks system** – `useTweaks` stores UI tweaks (`density` and `heroVariant`) in `localStorage`. The `TweaksPanel` can be toggled via `postMessage` events (`__activate_edit_mode` / `__deactivate_edit_mode`). The relevant code in `app.jsx` is wrapped by `// EDITMODE-BEGIN` / `// EDITMODE-END` comments.

- **Static data** – Component arrays (portfolio items, testimonials, process steps) are hard‑coded in `parts-rest.jsx`. No external API calls or environment variables are used.

---

## Styling

All styles live in `styles.css` (~42 KB). The design system relies on CSS variables:

- **Colors** – `--brand-blue`, `--brand-green`, `--navy`, `--paper`, `--ink`.
- **Typography** – `--serif` (Instrument Serif), `--sans` (Geist), `--mono` (Geist Mono).
- **Spacing** – `--pad-section`, `--pad-card`, `--gap-card`; these are overridden by the `data-density` attribute on `<html>` for the *comfortable* vs *compact* layouts.
- **Layout** – max‑width 1280 px shell, fluid type with `clamp()`, bento/grid layouts.

> **Note**: Do not add additional CSS files or use CSS‑in‑JS; keep all styling in `styles.css`.

---

## Contributing

Contributions are straightforward:

1. Fork the repo.
2. Make changes to the `.jsx` or `styles.css` files.
3. Run `npm run build && npm run verify` in `build/` and test locally.
4. Open a pull request describing the changes.

---

## License

This project is open source. See the repository’s `LICENSE` file for details.
