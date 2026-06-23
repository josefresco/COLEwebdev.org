# colewebdev.org — Outstanding Improvement Plan
**Last updated:** June 2026

All P0–P4 items from the June 2026 site review are complete except those listed below.

---

## P3 — Schema & SEO

### OG Images — unique per page
Almost every page falls back to `assets/portfolio-hero.jpg` as its Open Graph image. When pages are shared on social or cited in AI responses, the same generic image appears regardless of content.

**Approach:** Text-on-background card images per category — no photo shoot needed, Canva works fine.

**Priority pages:**
- Core service pages: web design, WordPress, SEO, PPC, AIEO, e-commerce
- About page — use the team photo already in `assets/`
- Whitepaper guides — any text card with the guide title works
- Industry pages

**Implementation:** Once assets are created, update the `og:image` meta tag in each HTML file.

---

## P4 — Conversion

### Pricing signals on service pages
No service page publishes any pricing. The quote form collects a budget range internally (`$1K–$5K+`) but nothing is visible before a prospect fills out a form. Competitors increasingly publish "starting from" ranges, and visitors who can't calibrate fit will bounce rather than inquire.

**Recommended pages to add pricing first:**
1. `website-design.html` — "Custom websites starting from $X,XXX"
2. `wordpress.html` — "WordPress projects starting from $X,XXX"
3. `hosting.html` — "Hosting + care plans from $XX/month"
4. `ppc.html` — "Ad management from $XXX/month + ad spend"

**Implementation:** Add a lightweight "Investment" or "Pricing" section to each service JSX file. The FAQ page already answers "How much does a website cost?" — bridge that answer with a CTA from service pages.

**Needs from you:** Actual starting-from numbers before any code is written.

---

### Case study index on colewebdev.org
Individual case studies live on `colewebdev.com` (WordPress). The portfolio page links off-site, leaving no SEO-indexable case study listing on the `.org` domain.

**What to build:** A lightweight `case-studies.html` + `case-studies-page.jsx` listing 8–10 featured projects with title, client, industry, outcome summary, and a link to the full case study on `colewebdev.com`.

**Benefits:**
- Keeps search equity on the `.org` domain
- Gives internal linking targets from service pages ("See a real example →")
- Ranks for `[industry] web design Cape Cod` long-tails

**Implementation:** Follows the same pattern as `whitepapers.html` — hardcoded data array, shared renderer. Add to nav under Portfolio or as a footer link.

---

## P5 — Content Expansion

### Seasonal business content
No page addresses Cape Cod's defining business reality: an intensely seasonal economy. High-intent search queries like "seasonal website preparation" or "Cape Cod summer traffic" are entirely uncaptured.

**Options:**
- New whitepaper guide: "Web Design for Seasonal Cape Cod Businesses" — links naturally from all 16 town pages
- Blog post series on `colewebdev.com` with summary cards on `news.html`
- Dedicated service page: "Seasonal Business Web Design"

---

### Village-level location pages
The 16 current town pages cover all 15 Cape towns + Cape Cod overall. Missing are more granular pages for high-traffic village clusters:

| Village | Why it matters |
|---|---|
| Barnstable Village | Courthouse, historic district — distinct from Hyannis |
| Woods Hole | Research/scientific community, very different from general Falmouth |
| Cotuit / Osterville / Centerville | Barnstable village clusters with distinct commercial identities |

**Implementation:** Add data objects to `locations-data.jsx`, copy any existing `*-web-design.html` shell, add to sitemap and nav.

---

### Additional industry pages
Current 11 industry pages cover: nonprofit, church, hospitality, restaurant, real estate, chamber, contractor, landscaping, health, legal, marine.

**Missing industries with real Cape Cod client volume:**

| Industry | Notes |
|---|---|
| Retail / Boutique | Heavy Route 6A and Main St presence |
| Arts & Galleries | Significant in Wellfleet, Provincetown, Chatham |
| Fitness / Wellness | Yoga studios, personal trainers — distinct from the Health (medical) page |
| Education | Private schools, tutors, educational nonprofits |

**Implementation:** Add data objects to `industry-data.jsx`, copy any existing `cape-cod-*-web-design.html` shell, add to sitemap and industry cross-links.

---

### Email capture on whitepaper pages
All 26 whitepaper guides end with the generic `NewsletterBanner`. A visitor reading "How Much Does a Website Cost?" is a high-intent prospect — no targeted capture exists.

**What to add:** Inline CTA at the end of each guide body (before `NewsletterBanner`), inside `whitepaper-page.jsx`. Options:
- "Get the checklist →" (PDF lead magnet, requires asset creation)
- "Subscribe for more guides →" (newsletter signup, zero extra assets)

**Implementation:** Single change to `whitepaper-page.jsx` affects all 26 guides at once. The newsletter endpoint already exists.

---

## Apple Touch Icon
The SVG favicon covers all modern browsers. For iOS home screen saves, a 180×180 PNG `apple-touch-icon.png` is also needed in `assets/` with:
```html
<link rel="apple-touch-icon" sizes="180x180" href="assets/apple-touch-icon.png" />
```
This is a one-line add to all HTML files once the PNG exists. Use the W-mark or full COLEwebdev logo on a `#0E2A4A` navy background.
