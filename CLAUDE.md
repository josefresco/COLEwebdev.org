# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Project guidance for Claude Code. Keep this file current whenever the architecture changes.

---

## Stack Overview

**One small build step, no bundler.** This is a React 18 site using CDN-loaded React and ReactDOM. JSX source files (`*.jsx`) are compiled ahead of time by esbuild into `js/*.js`, and every page is pre-rendered to static HTML so crawlers, AI bots, and link previews see real content. In the browser, React hydrates that markup instead of rebuilding it. There is no Babel Standalone and no in-browser transpilation.

Tooling lives in `build/` (its own `package.json`; `build/node_modules/` is gitignored):
```
cd build
npm install        # first time only
npm run build      # compile JSX → js/, rewrite script tags, pre-render all pages
npm run verify     # load every page with React's dev build and report hydration mismatches
```

**Run `npm run build` and `npm run verify` after every `.jsx` or `.html` change and commit the results** (`js/*.js` and the updated `*.html`) together with your source edits. The deploy Action rebuilds from source anyway (see Hosting & Deployment), so a forgotten build still ships correctly, but committing the output keeps the repo, local previews, and PR diffs truthful. The build is idempotent: a re-run with no source changes modifies nothing.

To preview locally, serve the repo root over HTTP after building:
```
python -m http.server 8080
# then open http://localhost:8080
```

### How the build works (`build/build.mjs`)
1. **Compile** every root-level `*.jsx` to a minified `js/<name>.js`. Output stays a plain (non-module) script, so top-level names are shared globals across files, as before.
2. **Rewrite** each `*.html`: removes any Babel `<script>`, turns `<script type="text/babel" src="x.jsx">` into `<script defer src="js/x.js?v=<content-hash>">`, and makes sure `js/mount.js` loads first. The `?v=` hash is automatic cache-busting; never edit it by hand.
3. **Pre-render** each page in headless Chromium: the page's mount call hands its root element to `ReactDOMServer.renderToString`, and the markup is written into `<div id="root">…</div><!--/root-->`. Never hand-edit anything between those two markers; it is overwritten on every build. Everything outside them (meta tags, JSON-LD, inline styles) is yours to edit.

Redirect stubs (pages with `<meta http-equiv="refresh">`) are skipped and keep an empty root.

### Rules the build depends on
- **Unique top-level names across all scripts a page loads.** Files share one global scope, so two files declaring `const useState` (or any same top-level `const`/`let`) is a `SyntaxError` and the build fails with "Identifier '…' has already been declared". Reuse the existing global or rename. (`parts-hero.jsx` already declares `useState`, `useEffect`, `useRef` for every page.)
- **Mount with `createAppRoot`, not `ReactDOM.createRoot`** (see `mount.jsx`).
- **Structured data built from page data goes in the render, not an effect.** Use `<JsonLd data={...} />` (and `faqPageSchema(items)` for FAQs) from `parts-rest.jsx`. Anything a `useEffect` adds to `<head>` is invisible to the pre-renderer, so crawlers that don't run JavaScript never see it.
- **The first render must be deterministic.** It runs at build time and again in the visitor's browser, and the two must match. Read `localStorage`, `window.innerWidth`, `matchMedia`, the current time, `Math.random()`, or fetched data inside `useEffect`, never during render. `npm run verify` catches violations; production React silently keeps mismatched attributes, so don't skip it after nontrivial component changes.

---

## Project Scale

- **~115 HTML pages** — homepage, 10+ service pages, 27 whitepaper guides, 16 town landing pages + 1 village page, 22 industry pages, utility pages
- **~60 JSX files** — one per page plus shared parts (compiled to `js/*.js`)
- **~70 assets** in `assets/` — local brand images (logos, team photos, hero images)
- **1 global stylesheet** — `styles.css` (~55KB); page-specific styles live in inline `<style>` blocks inside each HTML file
- **External images** — portfolio/blog photos are hosted on `colewebdev.com` (WordPress), referenced by full URL

---

## Entry Points & Load Order

### Homepage (`index.html`)
Scripts load in this exact order — later files depend on earlier ones:

1. `mount.jsx` — `createAppRoot` (hydrate pre-rendered markup)
2. `tweaks-panel.jsx` — `useTweaks` hook + `TweaksPanel` dev UI
3. `parts-hero.jsx` — `Header`, `Hero`, `Trust`
4. `parts-services.jsx` — `Services`
5. `parts-rest.jsx` — `Estimator`, `AIShowcase`, `Process`, `Portfolio`, `CTA`, `Testimonial`, `News`, `NewsletterBanner`, `Footer`
6. `app.jsx` — root `App` component, mounts to `<div id="root">`

### All other pages
Each page loads:
1. `mount.jsx`
2. `tweaks-panel.jsx`
3. `parts-hero.jsx` (provides `Header`)
4. `parts-services.jsx`
5. `parts-rest.jsx` (provides `NewsletterBanner`, `Footer`)
6. Any data file the page needs (e.g. `whitepapers-data.jsx`, `locations-data.jsx`)
7. The page-specific JSX file (e.g. `wordpress-page.jsx`)

In the built HTML these appear as `<script defer src="js/<name>.js?v=<hash>">` tags; the list above names the source files.

---

## Architecture

### Shared components (available on every page)
Defined in `parts-hero.jsx` and `parts-rest.jsx`:
- `Header` — main nav with dropdowns, search, mobile hamburger
- `Footer` — links, contact, legal
- `NewsletterBanner` — email signup strip above footer

### Page pattern
Every page follows the same structure:

**`page-name.html`** — the HTML shell:
- `<meta>` tags, `<title>`, canonical URL
- `<script type="application/ld+json">` — Schema.org structured data
- OG tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`)
- Inline `<style>` block for page-specific CSS
- `<div id="root">…</div><!--/root-->` holding the pre-rendered markup (generated)
- React CDN scripts
- Shared `<script defer src="js/…">` tags (generated from the `.jsx` sources)
- Page-specific script tag
- Optional `window.CURRENT_*` variable (for shared renderers)

**`page-name-page.jsx`** — the React component:
- Imports nothing (no ES modules) — everything is global via CDN/script order
- Renders `<Header />`, page content, `<NewsletterBanner />`, `<Footer />`
- Calls `createAppRoot(document.getElementById('root')).render(...)`

### Data-driven shared renderers
Two page types use a single renderer with per-page data injected via a global variable:

**Whitepaper guides** (`wp-*.html` + `whitepaper-page.jsx`):
- Data lives in `whitepapers-data.jsx` → `window.WHITEPAPERS_DATA` (array of 27 objects)
- Each guide HTML sets `window.CURRENT_WP_ID = 'guide-id'` before loading the renderer
- The listing page (`whitepapers.html`) uses `whitepapers-page.jsx` (separate renderer)

**Town landing pages** (`*-web-design.html` + `location-page.jsx`):
- Data lives in `locations-data.jsx` → `window.LOCATIONS_DATA` (array of 17 objects: 16 towns plus the Osterville & Centerville village page)
- Each town HTML sets `window.CURRENT_LOCATION_ID = 'town-id'` before loading the renderer
- `cape-cod-web-design.html` also uses this renderer (id `'cape-cod'`), as does the village page `osterville-centerville-web-design.html` (id `'osterville'`)
- Village pages are added only where real client work exists in that village (doorway-page risk; see `site-plan-2026.md`). Woods Hole was skipped for that reason.
- The "Why us" section links every town page to the seasonal-business guide (`wp-seasonal-business.html`)

**Industry landing pages** (`cape-cod-*-web-design.html` + `industry-page.jsx`):
- Data lives in `industry-data.jsx` → `window.INDUSTRY_DATA` (array of 22 industry objects)
- Each industry HTML sets `window.CURRENT_INDUSTRY_ID = 'industry-id'` before loading the renderer
- Industry data shape differs from location data: includes `whyCards`, `features`, `relatedIndustries`, `metaTitle`, `metaDesc` (no `nearbyTowns`)
- `maine-web-design.html` is a standalone page with its own dedicated `maine-page.jsx` (not a shared renderer)

### News page
`news-page.jsx` fetches live posts from the WordPress REST API:
```
https://www.colewebdev.com/wp-json/wp/v2/posts
```
The page renders `FALLBACK_POSTS` first (that's what the pre-rendered HTML and crawlers see), then swaps in live posts from the API; the fallback also stays if the API call fails. Keep it to the latest 9 posts and refresh it when real posts drift more than a few months ahead.

### App-level controls (homepage only)
`app.jsx` uses `useTweaks` (from `tweaks-panel.jsx`) to manage:
- `density`: `"comfortable"` | `"compact"` — sets `data-density` on `<html>`, triggering CSS variable overrides for spacing
- `heroVariant`: `"orb"` | `"marquee"` | `"grid"` — switches the `<Hero>` visualization

The `TweaksPanel` UI activates via browser `postMessage('__activate_edit_mode')` (deactivate with `'__deactivate_edit_mode'`). State persists in `localStorage`. The default tweak values in `app.jsx` are wrapped in `/*EDITMODE-BEGIN*/ ... /*EDITMODE-END*/` comments — leave these markers in place when editing defaults.

---

## Styling

### Global styles — `styles.css`
All shared styles live here. Never create a separate CSS file. Never use CSS-in-JS.

**Design tokens (CSS variables):**
| Token | Value |
|---|---|
| `--brand-blue` | `#0073AA` |
| `--brand-green` | `#5CC035` |
| `--navy` | `#0E2A4A` |
| `--paper` | Light background |
| `--ink` | Primary text |
| `--serif` | Instrument Serif |
| `--sans` | Geist |
| `--mono` | Geist Mono |
| `--pad-section` | Section vertical padding |
| `--r-xl`, `--r-lg` | Border radii |
| `--shadow-sm`, `--shadow-md` | Box shadows |

**Layout:** 1280px max-width `.shell` container. `clamp()` for fluid type. CSS Grid for most layouts.

### Images
Page images are WebP, sized to about **twice the largest width they display at** (e.g. an image shown at 600px wide → 1200px file). Convert new photos and graphics with:
```
cd build
npm run images -- ../assets/new-photo.jpg --width 1200            # photos
npm run images -- ../assets/new-chart.png --width 1800 --quality 85  # text-heavy graphics
```
This writes `assets/new-photo.webp` next to the original; reference the `.webp` in JSX and CSS.

- **Keep the JPG/PNG original** when it's used for `og:image`, `twitter:image`, or JSON-LD. Social platforms and structured-data consumers handle JPG/PNG more reliably than WebP, so those tags stay on the original file.
- **Below-the-fold images** get `loading="lazy"`; the hero / first visible image does not.
- **Large content images** should carry `width` and `height` attributes matching the file's intrinsic size (with CSS `height: auto`) so the page doesn't jump while they load. See `WP_IMAGES` in `whitepaper-page.jsx`.

### Page-specific styles
Each page HTML file has an inline `<style>` block. All selectors for that page are namespaced with a 2–3 letter prefix (e.g., `.wh-` for whitepapers, `.lp-` for location pages, `.wp-` for WordPress page, `.hc-` for hosting+care).

### Icon / glyph system
The site uses **Unicode text symbols** as icons and glyphs — never emoji. Emoji render inconsistently across platforms and are a known "AI slop" tell.

Current glyph vocabulary (use these; don't introduce emoji):

| Glyph | Meaning |
|---|---|
| `◇` | Web design, custom work |
| `◎` | Targeting, PPC, SEO targeting |
| `✦` | Featured, priority, branding, quality |
| `⚙` | Technical, schema, configuration |
| `↗` | SEO, growth, speed, performance |
| `✎` | Content, training, writing |
| `↻` | Recurring, hosting, care plans |
| `⌘` | AI, advanced tools, commands |
| `◐` | Consulting, partial, e-commerce |
| `◍` | Social media |
| `◇` | Diamond shapes, design |

### Design anti-patterns — do not introduce
These were audited and removed in June 2026. Do not reintroduce:

- **Emoji as UI icons** — use the Unicode glyph vocabulary above instead
- **Gradient-clipped text** — no `background: linear-gradient(...); -webkit-background-clip: text; color: transparent` on headings or display text. Use `color: var(--brand-blue)` or solid brand colors.
- **IntersectionObserver fade-in-on-scroll** — `opacity: 0 → 1` + `translateY` on scroll makes content invisible to crawlers, screenshot tools, and social preview renderers. Content must be visible on initial paint.

---

## Conventions

- **2-space indentation** throughout `.jsx` and `.css`
- JSX uses React Hooks only (`useState`, `useEffect`, `useRef`) — no class components
- No TypeScript — plain JavaScript
- No `node_modules`, no package manager
- All data is hardcoded in arrays; no API calls except the news page's WP REST fetch
- Commit messages follow Conventional Commits: `feat(scope): description`
- **JSX cache-busting** is automatic: the build stamps each `js/*.js` script tag with a content hash (`?v=<hash>`). Don't bump versions by hand.

---

## Hosting & Deployment

**Platform:** GitHub Pages
**Repository:** `https://github.com/josefresco/COLEwebdev.org` (branch: `main`)
**Live site:** `https://colewebdev.org`
**DNS:** A `CNAME` file in the repo root maps the custom domain. Do not delete or modify it.

### How deployment works
`.github/workflows/build-deploy.yml` runs on every push to `main`: it installs the tooling, runs `npm run build` and `npm run verify`, and deploys the result to GitHub Pages (Pages source must be set to **GitHub Actions** in repo settings). A hydration mismatch or build error fails the run and nothing deploys. Pull requests run the same build and check without deploying, and the run warns if the committed `js/`/`*.html` were stale.

The deployed site is assembled from the repo minus source and tooling: `*.jsx`, `*.md`, `build/`, `devtools/`, `.github/`, and dotfiles are not published. Propagation after a green run is typically under a minute.

### Git workflow
```
git pull origin main          # always pull before starting work
# ... make changes ...
(cd build && npm run build && npm run verify)
git add <specific files> js/
git commit -m "feat(scope): description"
git push origin main          # triggers the build-and-deploy Action
```

Always add specific files by name — avoid `git add .` to prevent accidentally committing preview files or local artifacts (`badge-preview.html`, `process-hero-preview.html`, the `devtools/` directory, etc.).

### After pushing
Verify the change is live by hard-refreshing the affected page in an incognito window (`Ctrl+Shift+R`). If a CSS change on the homepage isn't appearing, increment the cache-busting version in `index.html`:
```html
<link rel="stylesheet" href="styles.css?v=10" />
```
Other pages link to `styles.css` without a version string and are served fresh on each push.

---

## Content Update Procedures

### 1. Add a new whitepaper guide

**Step 1 — Add the data object to `whitepapers-data.jsx`:**
```js
{
  id: 'my-new-guide',        // kebab-case, must match HTML filename
  num: '23',                  // zero-padded, next in sequence
  title: 'My New Guide Title',
  subtitle: 'A Descriptive Subtitle',
  summary: 'One-sentence teaser shown on the listing card.',
  sections: [
    { heading: 'Section Heading', body: ['Paragraph one.', 'Paragraph two.'] },
    // ... more sections
  ],
  takeaway: 'The key insight from this guide in one sentence.',
}
```

**Step 2 — Add a related-links entry to `whitepaper-page.jsx`** in the `WP_RELATED_LINKS` object:
```js
'my-new-guide': [{ text: 'Service Name', href: 'service.html' }, ...],
```

**Step 3 — Create the HTML shell.** Copy any existing `wp-*.html` and update:
- `<title>`, `<meta name="description">`, `<link rel="canonical">`
- Schema JSON-LD: change `@type` to `"Article"`, update `name`, `url`, `description`
- OG tags: `og:title`, `og:description`, `og:url`; `og:type` must be `"article"`
- `window.CURRENT_WP_ID = 'my-new-guide';` — must match the `id` in step 1
- Filename: `wp-my-new-guide.html`

**Step 4 — Add to `sitemap.xml`:**
```xml
<url>
  <loc>https://colewebdev.org/wp-my-new-guide.html</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <changefreq>yearly</changefreq>
  <priority>0.65</priority>
</url>
```

**Step 5 — Add to `whitepapers-data.jsx` in the `CollectionPage` schema** in `whitepapers.html`'s `<script type="application/ld+json">` block.

---

### 2. Add a new town landing page

**Step 1 — Add the location object to `locations-data.jsx`** inside `window.LOCATIONS_DATA`:
```js
{
  id: 'barnstable',
  city: 'Barnstable',
  state: 'MA',
  slug: 'barnstable-web-design',
  heroHeadline: 'Barnstable Web Design',
  heroSub: 'One-sentence hero subheading.',
  intro: 'Two–three sentence intro paragraph about the town and our work there.',
  localContext: 'Two–three sentences about the local business landscape and what drives their web needs.',
  industries: ['Retail', 'Restaurants', 'Contractors', 'Marine', 'Nonprofits', 'Healthcare'],
  clients: [
    { name: 'Client Name', type: 'Business Type', href: 'https://clientsite.com/' },
    // href: '#' if no live URL
  ],
  faq: [
    { q: 'Question?', a: 'Answer.' },
    { q: 'Question?', a: 'Answer.' },
    { q: 'Question?', a: 'Answer.' },
  ],
  nearbyTowns: [
    { name: 'Sandwich', href: 'sandwich-web-design.html' },
    { name: 'Yarmouth', href: 'yarmouth-web-design.html' },
    { name: 'Dennis', href: 'dennis-web-design.html' },
  ],
}
```

**Step 2 — Create the HTML shell.** Copy any existing `*-web-design.html` and update:
- `<title>`, `<meta name="description">`, `<link rel="canonical">`
- Schema JSON-LD: update `name`, `url`, `areaServed`
- OG tags
- `window.CURRENT_LOCATION_ID = 'barnstable';`
- Filename: `barnstable-web-design.html`

**Step 3 — Add to `sitemap.xml`:**
```xml
<url>
  <loc>https://colewebdev.org/barnstable-web-design.html</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.85</priority>
</url>
```

**Step 4 — Wire into navigation.** In `parts-hero.jsx`, add a link in the locations dropdown (search for the existing town links to find the right spot).

**Step 5 — Wire into `service-area.html`** if it lists towns individually.

---

### 3. Add a new industry landing page

**Step 1 — Add the industry object to `industry-data.jsx`** inside `window.INDUSTRY_DATA`:
```js
{
  id: 'retail',
  industry: 'Retail',
  slug: 'cape-cod-retail-web-design',
  heroHeadline: 'Cape Cod Retail Web Design',
  heroSub: 'One-sentence hero subheading.',
  intro: 'Two–three sentence intro about this industry and our work in it.',
  whyCards: [
    { icon: '◇', title: 'Card title', body: 'Two-sentence explanation.' },
    { icon: '◎', title: 'Card title', body: 'Two-sentence explanation.' },
    { icon: '✦', title: 'Card title', body: 'Two-sentence explanation.' },
  ],
  features: [
    { icon: '◇', title: 'Feature', body: 'One-sentence description.' },
    // 5–6 features total
  ],
  clients: [
    { name: 'Client Name', type: 'Business Type', href: 'https://clientsite.com/' },
  ],
  faq: [
    { q: 'Question?', a: 'Answer.' },
    { q: 'Question?', a: 'Answer.' },
    { q: 'Question?', a: 'Answer.' },
  ],
  relatedIndustries: [
    { name: 'Restaurants', href: 'cape-cod-restaurant-web-design.html' },
  ],
  metaTitle: 'Cape Cod Retail Web Design — COLEwebdev',
  metaDesc: 'Under 155 chars. Include primary keyword.',
}
```

**Step 2 — Create the HTML shell.** Copy any existing `cape-cod-*-web-design.html` and update:
- `<title>`, `<meta name="description">`, `<link rel="canonical">`
- Schema JSON-LD: update `name`, `url`, `areaServed`
- OG tags
- `window.CURRENT_INDUSTRY_ID = 'retail';` — must match the `id` in step 1
- Filename: `cape-cod-retail-web-design.html`

**Step 3 — Add to `sitemap.xml`:**
```xml
<url>
  <loc>https://colewebdev.org/cape-cod-retail-web-design.html</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

**Step 4 — Add cross-links** in `relatedIndustries` of adjacent industry objects and in `service-area.html` if it lists industries.

---

### 4. Add a new service page

**Step 1 — Create `new-service-page.jsx`:**
- Follow the pattern of any existing page (e.g. `wordpress-page.jsx`)
- Render `<Header />`, page sections, `<NewsletterBanner />`, `<Footer />`
- End with `createAppRoot(document.getElementById('root')).render(<NewServicePage />);`

**Step 2 — Create `new-service.html`:**
- Copy an existing service page HTML shell
- Update all meta, schema, OG tags
- `<script type="text/babel" src="new-service-page.jsx"></script>` as the last script (the build rewrites it to `js/new-service-page.js?v=…`); a copied shell's existing script tags and pre-rendered markup are fine to leave, the build replaces them

**Step 3 — Add to `sitemap.xml`** with an appropriate `priority` (0.75–0.9 for services).

**Step 4 — Wire into navigation** in `parts-hero.jsx` (desktop dropdown + mobile nav).

**Step 5 — Add internal links** from related pages (services.html, relevant service pages, CTAs).

---

### 5. Update the homepage news teaser

The homepage `News()` teaser in `parts-rest.jsx` fetches the latest 3 posts live, but starts from the hardcoded `NEWS_FALLBACK` array, which is what the pre-rendered HTML and crawlers see. Update it when new blog posts publish on `colewebdev.com`:

```js
{ t: 't-tide', tag: 'NEW LAUNCH', date: 'May 24, 2026',
  title: 'Article Title Here',
  body: 'One-sentence excerpt.',
  href: 'https://www.colewebdev.com/article-slug/',
  img: 'https://www.colewebdev.com/wp-content/uploads/YYYY/MM/image.jpg' }
```

Theme classes for the thumbnail: `t-tide` (blue), `t-coast` (light), `t-sun` (warm). Keep 3 items max.

Also update the `FALLBACK_POSTS` array in `news-page.jsx` to stay within ~3 months of the live WP blog.

**Getting post data:** Claude's cloud sandbox can't reach `colewebdev.com` directly. Use the Pressable connector instead: `run_site_wpcli_commands` on site `1340193` (www.colewebdev.com) with read-only commands such as `post list --post_type=post --post_status=publish --posts_per_page=9 --fields=ID,post_date --format=csv`, `post get <id> --fields=post_title,post_excerpt,post_name --format=json`, `post term list <id> category --field=name`, and `post meta list <id> --keys=_thumbnail_id` (then `post list --post_type=attachment --post__in=<thumb ids> --fields=ID,guid`). Read results with `list_site_wordpress_operations`; each output is trimmed to ~500 characters, so query a few fields at a time, and keep batches small (large batches hit "too many locks, refusing").

---

### 6. Update the homepage portfolio teaser

Portfolio cards are hardcoded in `parts-rest.jsx` → `Portfolio()` function (around line 48). Each card:
```js
{
  span: 'span-7',             // grid column span: span-7, span-5, span-full, etc.
  t: 't-tide',                // thumbnail theme class
  img: 'https://www.colewebdev.com/wp-content/uploads/.../image.jpg',
  tags: [{ label: 'NEW LAUNCH', cls: 'tag--navy' }, { label: 'WORDPRESS' }],
  title: 'Client Name — brief description.',
  meta: 'Location · Year',
  href: 'https://clientsite.com/',
  cta: 'Read case study →',
  ctaHref: 'https://www.colewebdev.com/case-study-slug/',
}
```

---

### 7. Update the main navigation

All nav changes go in `parts-hero.jsx`. The file contains:
- Desktop dropdown menus (search for `nav-dd-item` class)
- Mobile nav (search for `mob-nav`)
- `SEARCH_DATA` array at the top — add an entry for any new page so it appears in site search

When adding a nav item, update **both** desktop and mobile nav to stay in sync.

---

### 8. Update the sitemap

`sitemap.xml` must stay in sync with all public pages. Update `<lastmod>` to today's date whenever a page's content changes significantly. Use these priority guidelines:

| Page type | Priority |
|---|---|
| Homepage | 1.0 |
| Core service pages | 0.85–0.9 |
| Secondary services, town pages | 0.75–0.85 |
| Utility pages (FAQ, testimonials, about) | 0.7–0.75 |
| Hosting, whitepapers listing | 0.7–0.75 |
| Whitepaper guides | 0.65 |
| Privacy, accessibility, sitemap.html | 0.3–0.4 |

---

## Schema & SEO Checklist (per new page)

- [ ] `<title>` — unique, under 60 chars, includes primary keyword
- [ ] `<meta name="description">` — under 155 chars
- [ ] `<link rel="canonical">` — absolute URL, no trailing slash issues
- [ ] `og:title`, `og:description`, `og:url`, `og:image`, `og:type`, `og:site_name`
- [ ] `og:type` — `"website"` for service/location pages, `"article"` for whitepaper guides
- [ ] `og:image` — use a page-specific image where possible; fallback is `assets/portfolio-hero.jpg`
- [ ] JSON-LD schema — match `@type` to page purpose:
  - Service pages → `Service` or `WebPage`
  - Location pages → `LocalBusiness` + `areaServed`
  - Whitepaper guides → `Article`
  - Whitepapers listing → `CollectionPage`
  - FAQ page → `FAQPage`
  - About page → `AboutPage`
  - Process page → `HowTo`
- [ ] Page-specific FAQ schema: render `<JsonLd data={faqPageSchema(faq)} />` in the component; static schema can stay in the HTML `<head>`. Don't emit the same `@type` in both places.
- [ ] Add to `sitemap.xml`
