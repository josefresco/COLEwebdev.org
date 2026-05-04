# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack Overview

**No build tooling.** This is a client-side React 18 SPA using CDN-loaded React, ReactDOM, and Babel Standalone (in-browser JSX transpilation). There is no `package.json`, no npm scripts, no bundler.

To develop locally, serve the directory over HTTP and open `COLEwebdev Homepage.html`:
```
python -m http.server 8080
# or use VS Code Live Server, npx serve, etc.
```

There are no lint, test, or build commands.

## Entry Point & Load Order

`COLEwebdev Homepage.html` is the sole HTML file. It loads scripts in this exact order (order matters — later scripts depend on earlier ones):

1. `tweaks-panel.jsx` — defines `useTweaks` hook and `TweaksPanel` component
2. `parts-hero.jsx` — `Header`, `Hero`, `Trust`
3. `parts-services.jsx` — `Services`
4. `parts-rest.jsx` — `Estimator`, `AIShowcase`, `Process`, `Portfolio`, `CTA`, `Testimonial`, `News`, `Footer`
5. `app.jsx` — root `App` component, mounts to `<div id="root">`

## Architecture

**`app.jsx`** is the root. It uses `useTweaks` to manage two live design controls:
- `density`: `"comfortable"` | `"compact"` — sets `data-density` on `<html>`, which triggers CSS variable overrides for spacing
- `heroVariant`: `"orb"` | `"marquee"` | `"grid"` — switches the `<Hero>` visualization

**Tweaks system** (`tweaks-panel.jsx`): `useTweaks(defaults)` stores state in `localStorage`. The `TweaksPanel` UI activates/deactivates via `postMessage` events (`__activate_edit_mode` / `__deactivate_edit_mode`). Tweaks are bounded by `// EDITMODE-BEGIN` / `// EDITMODE-END` comments in `app.jsx`.

**Data is hardcoded** in component arrays inside `parts-rest.jsx` (portfolio items, testimonials, process steps). No API calls, no `.env`, no secrets.

## Styling

All styles live in `styles.css` (~42KB). The design system uses CSS variables:
- **Colors:** `--brand-blue`, `--brand-green`, `--navy`, `--paper`, `--ink`
- **Typography:** `--serif` (Instrument Serif), `--sans` (Geist), `--mono` (Geist Mono)
- **Spacing:** `--pad-section`, `--pad-card`, `--gap-card` (overridden by `data-density`)
- **Layout:** max-width 1280px shell, `clamp()` for fluid type, bento/grid layouts

Avoid introducing a separate CSS file or CSS-in-JS; keep all styles in `styles.css`.

## Conventions

- **2-space indentation** throughout `.jsx` and `.css`
- JSX components use React Hooks only (`useState`, `useEffect`, `useRef`)
- No TypeScript — plain JavaScript with minimal JSDoc
- External images are hosted on `colewebdev.com` (WordPress); `assets/` holds local brand images
- No `node_modules`, no `.gitignore` needed (no package manager)
