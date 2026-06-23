# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Project guidance for Claude Code. Keep this file current whenever the architecture changes.

---

## Stack Overview

**No build tooling.** This is a client-side React 18 SPA using CDN-loaded React, ReactDOM, and Babel Standalone (in-browser JSX transpilation). There is no `package.json`, no npm scripts, no bundler, no `.gitignore` needed.

To develop locally, serve the directory over HTTP:
```
python -m http.server 8080
# or: npx serve .
# then open http://localhost:8080
```

There are no lint, test, or build commands. What you edit is what ships.

---

## Project Scale

- **~90 HTML pages** — homepage, 10+ service pages, 26 whitepaper guides, 16 town landing pages, 11 industry pages, utility pages
- **~47 JSX files** — one per page plus shared parts
- **~70 assets** in `assets/` — local brand images (logos, team photos, hero images)
- **1 global stylesheet** — `styles.css` (~55KB); page-specific styles live in inline `<style>` blocks inside each HTML file
- **External images** — portfolio/blog photos are hosted on `colewebdev.com` (WordPress), referenced by full URL

---

## Entry Points & Load Order

### Homepage (`index.html`)
Scripts load in this exact order — later files depend on earlier ones:

1. `tweaks-panel.jsx` — `useTweaks` hook + `TweaksPanel` dev UI
2. `parts-hero.jsx` — `Header`, `Hero`, `Trust`
3. `parts-services.jsx` — `Services`
4. `parts-rest.jsx` — `Estimator`, `AIShowcase`, `Process`, `Portfolio`, `CTA`, `Testimonial`, `News`, `NewsletterBanner`, `Footer`
5. `app.jsx` — root `App` component, mounts to `<div id="root">`

### All other pages
Each page loads:
1. `tweaks-panel.jsx`
2. `parts-hero.jsx` (provides `Header`)
3. `parts-services.jsx`
4. `parts-rest.jsx` (provides `NewsletterBanner`, `Footer`)
5. Any data file the page needs (e.g. `whitepapers-data.jsx`, `locations-data.jsx`)
6. The page-specific JSX file (e.g. `wordpress-page.jsx`)

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
- React CDN scripts + Babel
- Shared JSX `<script>` tags
- Page-specific JSX `<script>` tag
- Optional `window.CURRENT_*` variable (for shared renderers)

**`page-name-page.jsx`** — the React component:
- Imports nothing (no ES modules) — everything is global via CDN/script order
- Renders `<Header />`, page content, `<NewsletterBanner />`, `<Footer />`
- Calls `ReactDOM.createRoot(document.getElementById('root')).render(...)`

### Data-driven shared renderers
Two page types use a single renderer with per-page data injected via a global variable:

**Whitepaper guides** (`wp-*.html` + `whitepaper-page.jsx`):
- Data lives in `whitepapers-data.jsx` → `window.WHITEPAPERS_DATA` (array of 26 objects)
- Each guide HTML sets `window.CURRENT_WP_ID = 'guide-id'` before loading the renderer
- The listing page (`whitepapers.html`) uses `whitepapers-page.jsx` (separate renderer)

**Town landing pages** (`*-web-design.html` + `location-page.jsx`):
- Data lives in `locations-data.jsx` → `window.LOCATIONS_DATA` (array of 16 town objects)
- Each town HTML sets `window.CURRENT_LOCATION_ID = 'town-id'` before loading the renderer
- `cape-cod-web-design.html` also uses this renderer (id `'cape-cod'`)

**Industry landing pages** (`cape-cod-*-web-design.html` + `industry-page.jsx`):
- Data lives in `industry-data.jsx` → `window.INDUSTRY_DATA` (array of 11 industry objects)
- Each industry HTML sets `window.CURRENT_INDUSTRY_ID = 'industry-id'` before loading the renderer
- Industry data shape differs from location data: includes `whyCards`, `features`, `relatedIndustries`, `metaTitle`, `metaDesc` (no `nearbyTowns`)
- `maine-web-design.html` is a standalone page with its own dedicated `maine-page.jsx` (not a shared renderer)

### News page
`news-page.jsx` fetches live posts from the WordPress REST API:
```
https://www.colewebdev.com/wp-json/wp/v2/posts
```
A `FALLBACK_POSTS` array is used if the API call fails (CORS, offline, etc.). Update the fallback when the real posts drift more than a few months behind.

### App-level controls (homepage only)
`app.jsx` uses `useTweaks` (from `tweaks-panel.jsx`) to manage:
- `density`: `"comfortable"` | `"compact"` — sets `data-density` on `<html>`, triggering CSS variable overrides for spacing
- `heroVariant`: `"orb"` | `"marquee"` | `"grid"` — switches the `<Hero>` visualization

The `TweaksPanel` UI activates via browser `postMessage('__activate_edit_mode')`. State persists in `localStorage`.

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
- **JSX cache-busting** — GitHub Pages CDN caches `.jsx` files. When you update a page-specific JSX file, bump the `?v=N` version string on its `<script src>` tag in the corresponding HTML file (e.g. `src="services-page.jsx?v=2"`). Currently at `v=2` on `services.html`, `process.html`, `news.html`.

---

## Hosting & Deployment

**Platform:** GitHub Pages
**Repository:** `https://github.com/josefresco/COLEwebdev.org` (branch: `main`)
**Live site:** `https://colewebdev.org`
**DNS:** A `CNAME` file in the repo root maps the custom domain. Do not delete or modify it.

### How deployment works
Push to `main` → GitHub Pages automatically serves the updated files. There is no build step, no CI pipeline, no cache invalidation to trigger. Static files are served directly from the repo root. Propagation is typically under 60 seconds.

### Git workflow
```
git pull origin main          # always pull before starting work
# ... make changes ...
git add <specific files>
git commit -m "feat(scope): description"
git push origin main          # this is the deploy
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
- End with `ReactDOM.createRoot(document.getElementById('root')).render(<NewServicePage />);`

**Step 2 — Create `new-service.html`:**
- Copy an existing service page HTML shell
- Update all meta, schema, OG tags
- `<script type="text/babel" src="new-service-page.jsx"></script>` as the last script

**Step 3 — Add to `sitemap.xml`** with an appropriate `priority` (0.75–0.9 for services).

**Step 4 — Wire into navigation** in `parts-hero.jsx` (desktop dropdown + mobile nav).

**Step 5 — Add internal links** from related pages (services.html, relevant service pages, CTAs).

---

### 5. Update the homepage news teaser

The homepage shows 3 hardcoded news items in `parts-rest.jsx` → `News()` function (around line 287). Update this manually when new blog posts publish on `colewebdev.com`:

```js
{ t: 't-tide', tag: 'NEW LAUNCH', date: 'May 24, 2026',
  title: 'Article Title Here',
  body: 'One-sentence excerpt.',
  href: 'https://www.colewebdev.com/article-slug/',
  img: 'https://www.colewebdev.com/wp-content/uploads/YYYY/MM/image.jpg' }
```

Theme classes for the thumbnail: `t-tide` (blue), `t-coast` (light), `t-sun` (warm). Keep 3 items max.

Also update the `FALLBACK_POSTS` array in `news-page.jsx` to stay within ~3 months of the live WP blog.

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
- [ ] Add to `sitemap.xml`
