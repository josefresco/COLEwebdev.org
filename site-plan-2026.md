# colewebdev.org — Outstanding Improvement Plan
**Last updated:** July 2026

All P0–P4 items from the June 2026 site review are complete except those listed below.

**Status check (July 2026):** Industry and location pages have grown ahead of this plan — `industry-data.jsx` now has 19 entries (was 11) and `locations-data.jsx` now has 19 entries (was 16). See the updated notes in P5 below for what's still actually missing.

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

### Case study index on colewebdev.org — DONE
**Update (July 2026):** Built `case-studies.html` + `case-studies-page.jsx`, listing 10 featured projects (title, client, location, industry, outcome summary, CTA). Two entries (Cape Cod Aquatics, Dyer's Beach House) link to their real `colewebdev.com` case-study articles; the rest link to the live client site since no case-study article exists for them yet. Wired into desktop + mobile nav (right after Portfolio), site search data, and `sitemap.xml`. Added a "Read case studies →" cross-link from `portfolio.html`.

**Still open:** Only 2 of 10 projects have a real narrative case-study article on `colewebdev.com`. Writing case-study articles for the other 8 would let their cards upgrade from "Visit the live site" to "Read the case study" with real outcome detail.

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
**Update (July 2026):** `locations-data.jsx` now has 19 entries — the original 15 Cape towns + Cape Cod overall, plus Nantucket, Martha's Vineyard, and Plymouth (broader regional expansion, not village-level). The village-level gap below is unaffected and still open:

| Village | Why it matters |
|---|---|
| Barnstable Village | Courthouse, historic district — distinct from Hyannis |
| Woods Hole | Research/scientific community, very different from general Falmouth |
| Cotuit / Osterville / Centerville | Barnstable village clusters with distinct commercial identities |

**Implementation:** Add data objects to `locations-data.jsx`, copy any existing `*-web-design.html` shell, add to sitemap and nav.

---

### Additional industry pages
**Update (July 2026):** 19 industry pages now exist: nonprofit, church, hospitality, restaurant, real estate, chamber, contractor, landscaping, health, legal, marine, retail, automotive, photography, wedding, salon, winery, pet-care, vacation-rental. Retail (previously flagged as missing) is done.

**Still missing, real Cape Cod client volume:**

| Industry | Notes |
|---|---|
| Arts & Galleries | Significant in Wellfleet, Provincetown, Chatham |
| Fitness / Wellness | Yoga studios, personal trainers — distinct from the Health (medical) page |
| Education | Private schools, tutors, educational nonprofits |

**Implementation:** Add data objects to `industry-data.jsx`, copy any existing `cape-cod-*-web-design.html` shell, add to sitemap and industry cross-links.

---

### Email capture on whitepaper pages — DONE
**Update (July 2026):** Already implemented (commit `68358ab`). `whitepaper-page.jsx` has a "Quarterly newsletter" sidebar card (`.wpa-card--nl`) on desktop and an inline "Subscribe to Newsletter →" CTA in `.wpa-mobile-ctas` on mobile, both placed before the generic `NewsletterBanner`. No further action needed.

---

## Apple Touch Icon
The SVG favicon covers all modern browsers. For iOS home screen saves, a 180×180 PNG `apple-touch-icon.png` is also needed in `assets/` with:
```html
<link rel="apple-touch-icon" sizes="180x180" href="assets/apple-touch-icon.png" />
```
This is a one-line add to all HTML files once the PNG exists. Use the W-mark or full COLEwebdev logo on a `#0E2A4A` navy background.
