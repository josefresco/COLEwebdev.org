# COLEwebdev.org

A client‑side React 18 single‑page application that showcases the services and portfolio of **Cole Web Development**. The site is built without any bundler or package manager – it runs directly in the browser using CDN‑loaded React, ReactDOM and Babel Standalone for on‑the‑fly JSX transpilation.

---

## Stack Overview

- **Frontend**: React 18 (via CDN), plain JavaScript JSX (transpiled in‑browser by Babel Standalone).
- **Styling**: All styles are defined in a single `styles.css` file using CSS variables for colors, typography, and spacing.
- **No build tooling**: There is no `package.json`, no npm scripts, and no bundler. Development is done by serving the directory over HTTP and opening `index.html`.

---

## Development

1. **Serve the project** (Python example):
   ```bash
   python -m http.server 8080
   ```
   Then open <http://localhost:8080> in a browser.

2. You can also use VS Code Live Server, `npx serve`, or any static file server.

3. Edit the JSX files (`*.jsx`) directly – changes are reflected instantly because Babel transpiles them in the browser.

---

## Architecture

- **Entry point** – `index.html` loads scripts in a strict order:
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

Because the project has no build pipeline, contributions are straightforward:

1. Fork the repo.
2. Make changes to the `.jsx` or `styles.css` files.
3. Test locally by refreshing the served page.
4. Open a pull request describing the changes.

---

## License

This project is open source. See the repository’s `LICENSE` file for details.
