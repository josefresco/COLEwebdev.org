# colewebdev.org — Comprehensive Site Review
**Date:** June 2026 | **Reviewer:** Claude Code

---

## TL;DR

The site is well-built and content-rich. The critical gaps are:  
(1) every page loads React development builds instead of production — biggest performance issue on the site,  
(2) the star rating is inconsistent across pages (4.8 vs 5.0★ — the schema and testimonials page are right; several components are wrong),  
(3) five complete service pages are invisible in the nav,  
(4) no favicon on any page.  
Everything below P0 is real but not urgent.

---

## P0 — Fix Immediately (Broken or Misleading)

### 1. React + Babel development builds on every page
All 90 HTML files load `react.development.js` and `react-dom.development.js`. These include full warning logic, prop-type checks, and devtools hooks. The production builds (`react.production.min.js`) are ~30% smaller and meaningfully faster.

**Impact:** Core Web Vitals / LCP on every page.

**Fix:** In every HTML file, swap:
```html
<!-- Before -->
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" ...>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" ...>

<!-- After -->
<script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js" ...>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js" ...>
```
Update the `integrity` SRI hashes to match the production builds (fetch the new hashes from unpkg or the React CDN docs).

---

### 2. Star rating inconsistency — 5.0★ vs 4.8 across the same site
The authoritative number is **4.8** (per the JSON-LD schema in `index.html`, the testimonials page, the nav dropdown, `website-design-page.jsx`, `marketing-page.jsx`, and `location-page.jsx`).

The following show **5.0★** incorrectly:
- `parts-hero.jsx:706` — homepage hero stats block
- `parts-rest.jsx:227`, `:237` — homepage testimonial section
- `service-area-page.jsx:136` — service area stats
- `cape-cod-marketing-page.jsx:187` — marketing page stats

A visitor who reads "5.0★ Google rating" on the homepage then checks Google and sees 4.8 loses trust. Fix all instances to `4.8★`.

---

### 3. "26 Years on the job" vs "since 2006" contradiction in the hero
`parts-hero.jsx` hero kicker says **"since 2006"** (20 years) while the stat block immediately below says **26 Years**. The trust strip says "2000 → today" explaining the 26 — Josiah's career start, not the company's founding.

A first-time visitor reads both in 2 seconds and gets confused. Pick one narrative:
- Option A: Change stat to `20` with label "Years as COLEwebdev" (company story)
- Option B: Change kicker to "Building websites since 2000" and keep 26 (career story)
- Option C: Keep both but clarify with `20 yrs as COLEwebdev · 26 yrs in the craft` sub-label

---

## P1 — High Priority (Pages Nobody Can Find)

### 4. Five complete service pages not in the nav dropdown
These pages exist, are production-quality, and are indexed in SEARCH_DATA — but are invisible in the `SERVICE_LINKS` dropdown and mobile nav. Users cannot discover them through navigation.

| Page | File | Should appear under |
|---|---|---|
| PPC & Google Ads | `ppc.html` | Grow & Market |
| AI Engine Optimization | `aieo.html` | Grow & Market |
| WordPress Speed Optimization | `wordpress-speed.html` | Care & Support (or Design & Build) |
| Web Accessibility (WCAG) | `web-accessibility.html` | Care & Support |
| WordPress Hosting | `wordpress-hosting.html` | Care & Support |

The nav is already showing 12 items in 3 groups; adding these 5 would make it 17. Consider either:
- Adding PPC and AIEO (highest revenue/search intent) and linking to a "See all services" row at the bottom of the dropdown that hits `services.html`
- Grouping wordpress-speed, web-accessibility, and wordpress-hosting under a "Specialized" dropdown group with a collapsed or "More →" pattern

At minimum: PPC and AIEO need to be discoverable without using site search.

---

### 5. Cape Cod Marketing page not wired into Services
`cape-cod-marketing.html` + `cape-cod-marketing-page.jsx` exists with full content (stats, services, local case data) but is not in the Services dropdown, SERVICE_LINKS, or mobile nav. It's only findable via SEARCH_DATA.

It appears to be the geo-targeted marketing service page for Cape Cod specifically, distinct from the general `marketing.html`. Either:
- Add it to the nav under "Grow & Market" as the primary Marketing link (replacing or alongside the generic `marketing.html`)
- Link it from `marketing.html` as a "Cape Cod Marketing →" CTA

---

### 6. Shop page (`shop.html`) not linked anywhere
`shop.html` exists with 18 merch products fulfilled via Printful. It is:
- Not in the nav (no dropdown, no utility link)
- Not in the footer
- Only discoverable via site search

This page also serves as a live demo of the Printful Quick Store service. Consider:
- Footer link: "COLEwebdev Merch →" in a small utility row
- Link from `shop-page.jsx` back to the Printful service offering (it already mentions this at the bottom)

---

## P2 — Infrastructure Gaps

### 7. No favicon on any page
There is no `favicon.ico`, no `apple-touch-icon`, and no web app manifest in the project root or referenced from any HTML file. Every browser tab shows a blank/generic icon.

**Fix:**
1. Add `favicon.ico` to the project root (32×32 and 16×16 embedded)
2. Add to every HTML `<head>`:
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
```
A 180×180 PNG of the W-mark or COLEwebdev logo works for apple-touch-icon.

---

### 8. `robots.txt` disallows two deleted files
```
Disallow: /badge-preview.html
Disallow: /process-hero-preview.html
```
Both files were deleted (they appear as `D` in git status). The Disallow rules are harmless but are dead references that could confuse crawlers inspecting the file.

**Fix:** Remove both Disallow lines (the `.gitignore` already prevents `*-preview.html` files from being committed, so no replacement rules are needed).

---

### 9. `llms.txt` is significantly out of date
The `llms.txt` AI-visibility file says:
- **"Eight in-depth guides"** — there are **26** whitepaper guides
- **"5★ (70+ reviews)"** — actual rating is 4.8 / 72 reviews
- Doesn't mention AIEO, shop, social-news, industry pages, or maine-web-design
- Portfolio count says 32 featured projects (may be stale)

This file is specifically read by AI crawlers (ChatGPT, Perplexity, Claude) to understand the site. Stale or wrong data here directly affects AI citation accuracy — which is ironic given the site now offers an AIEO service.

**Fix:** Rewrite `llms.txt` to reflect current state: 26 guides, 4.8 / 72 reviews, all service pages, correct nav structure.

---

## P3 — Schema & SEO

### 10. No `Review` schema on the Testimonials page
`testimonials-page.jsx` renders 23 testimonials as static HTML cards. None have JSON-LD `Review` schema. Google can potentially rich-snippet these if marked up.

**Fix:** Add a `<script type="application/ld+json">` block to `testimonials.html` with an `ItemList` of `Review` items, or add `AggregateRating` + individual `Review` entries for the top 5–10. This also strengthens the `LocalBusiness` entity's review signals.

---

### 11. No `BreadcrumbList` schema on inner pages
None of the 89 non-homepage pages have `BreadcrumbList` schema. For a site with this many pages (service pages, location pages, whitepaper guides), breadcrumb rich results in SERPs are an easy win.

**Example for a service page:**
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://colewebdev.org/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://colewebdev.org/services.html" },
    { "@type": "ListItem", "position": 3, "name": "SEO & Local Search", "item": "https://colewebdev.org/seo.html" }
  ]
}
```

Priority pages: all service pages, all location pages, all whitepaper guides.

---

### 12. No `Person` schema for Josiah and Desiree
The About page has full team bios, LinkedIn/social links, and photos — but no structured data. `Person` schema on `about.html` would help establish them as E-E-A-T entities tied to the business.

```json
{
  "@type": "Person",
  "@id": "https://colewebdev.org/about.html#josiah",
  "name": "Josiah Cole",
  "jobTitle": "Co-Founder, CTO",
  "worksFor": { "@id": "https://colewebdev.org/#business" },
  "sameAs": ["https://www.linkedin.com/in/josiahcole/"]
}
```

---

### 13. Schema on `aieo.html` doesn't communicate the service clearly
The AIEO page is a service page but is missing from `index.html`'s `hasOfferCatalog`. Since it's a new service targeting a fast-growing search category ("AI SEO"), getting the schema right early compounds over time.

**Fix:** Add `"AI Engine Optimization"` to the `hasOfferCatalog` in `index.html`, and add a `Service` schema block to `aieo.html` with `areaServed`, `description`, and `provider`.

---

### 14. OG images — almost all pages use the same fallback
`assets/portfolio-hero.jpg` is the default OG image for most pages. When these URLs are shared on social or cited in AI responses, the same generic image appears regardless of content.

High-priority pages that could use unique OG images:
- Service pages (web-design, wordpress, seo, ppc, aieo, ecommerce)
- The about page (team photo)
- Whitepaper guides (any text-based card image with guide title)
- Industry pages

This doesn't require a photo shoot — text-on-background card images per service category work well and can be done in Canva.

---

## P4 — Conversion & Content Gaps

### 15. Contact form and Quote form share the same Formspree endpoint
Both `contact-page.jsx` and `quote-page.jsx` post to `https://formspree.io/f/xnjwgqld`. This means:
- Formspree can't distinguish lead quality without reading the body
- GA4 form_submit events have different `form_name` values but the backend doesn't
- No way to build separate email sequences for "curious inquiry" vs "ready to buy"

**Fix:** Create a second Formspree form for quotes (or use the `_subject` field already in the quote payload to set up separate routing rules in Formspree).

---

### 16. No pricing signals on service pages
Every service page leads to either "Contact us" or "Request a Quote" without any published pricing. The quote form shows budget tiers ($1K–$5K+) as radio options internally, but nothing is visible before the prospect fills out a form.

Competitors (local and national) increasingly publish "starting from" prices. Visitors who can't quickly calibrate whether the studio fits their budget will bounce rather than fill out a form.

**Recommendation:** Add a "Pricing" section to at least the top 4 service pages (web design, WordPress, hosting, PPC) with ranges like "Starting from $2,000" or tiered packages. The FAQ page already answers "How much does a website cost?" — bridge that answer to the service pages.

---

### 17. No scheduling / calendar integration
The contact page has hours and a form, but no way to book a call or consultation directly. The process page says "A free 20-min call" as step one, but there's no CTA to actually book that call with a date/time.

Adding a Calendly (or TidyCal, Cal.com) embed or link would remove friction from the highest-intent conversion path — a prospect who wants a call has to wait for email confirmation of an available time.

---

### 18. Contact form requires "Company" for everyone
The contact form marks `Company` as required (`*`). Several testimonials have clients with no business listed (individual authors, personal clients). An individual homeowner, freelancer, or person with a personal project is blocked unless they make something up.

**Fix:** Make Company optional or relabel it "Company / Project Name" and remove the required constraint.

---

### 19. Quote success page dead end
After submitting a quote request, the success state shows only a "Back to home" button. This is a missed opportunity when the user is at maximum engagement.

**Recommended additions:**
- "See recent work →" linking to `portfolio.html`
- "Read our process →" linking to `process.html`
- "Browse our guides →" linking to `whitepapers.html`

---

### 20. No dedicated case study index on colewebdev.org
Individual case studies (Cape Cod Aquatics, Dyer's Beach House, etc.) live on `colewebdev.com` (WordPress). The portfolio page links to them but there's no SEO-indexable case study listing on `colewebdev.org` itself.

The portfolio page (`portfolio.html`) has cards but they link off-site. A lightweight "Case Studies" page on `colewebdev.org` that lists the 8–10 featured projects with title, client, industry, and a direct link to the case study on `colewebdev.com` would:
- Keep search equity on the org domain
- Give internal linking targets for service pages ("See a real example →")
- Rank for "[industry] web design Cape Cod" long-tails

---

## P5 — Future Opportunities

### 21. Seasonal business content
Cape Cod's economy is intensely seasonal — most clients deal with summer peaks and off-season challenges. No page on the site addresses:
- Seasonal website preparation ("Is your site ready for summer traffic?")
- Off-season marketing for shoulder-season tourism
- Seasonal business-specific considerations (hours updates, event calendars, winter closings)

A whitepaper or blog series on "web design for seasonal Cape Cod businesses" would be highly relevant and linkable from all town location pages.

---

### 22. Location page expansion — Barnstable and Upper Cape villages
The 16 town pages cover all 15 Cape Cod towns + the Cape in general. Missing are pages for:
- **Barnstable village** (distinct from Hyannis, which has its own page — Barnstable village has the courthouse and historic district)
- **Cotuit, Osterville, Centerville** (Barnstable village clusters with distinct commercial identities)
- **Falmouth villages** — Woods Hole specifically (research/scientific community, very different from general Falmouth)

These are low-effort (copy existing template, add to locations-data.jsx) and could capture long-tail "web design [village]" searches.

---

### 23. Industry page gaps
Current 11 industry pages cover: nonprofit, church, hospitality, restaurant, real estate, chamber, contractor, landscaping, health, legal, marine. Missing industries that represent real Cape Cod client volume:
- **Retail / Boutique** (significant Route 6A and Main St presence)
- **Arts & Galleries** (significant especially in Wellfleet, Provincetown, Chatham)
- **Education / Schools** (private schools, tutors, educational nonprofits)
- **Fitness / Wellness** (yoga studios, personal trainers — distinct from the Health page which covers medical)

---

### 24. No email capture / lead magnet on content pages
The whitepaper guide pages have a lot of traffic potential — someone reading "How Much Does a Website Cost?" is a high-intent prospect. None of the 26 guides have an email capture CTA ("Get the PDF version →", "Subscribe for more guides →") beyond the generic NewsletterBanner.

A lightweight inline CTA (not a popup) at the end of whitepaper guides offering a related "starter checklist" PDF or newsletter signup would improve list building.

---

## Summary Table

| # | Issue | Priority | Effort | File(s) |
|---|---|---|---|---|
| 1 | Dev React builds on all 90 pages | P0 | High | All HTML files |
| 2 | 5.0★ vs 4.8 star rating inconsistency | P0 | Low | parts-hero.jsx, parts-rest.jsx, service-area-page.jsx, cape-cod-marketing-page.jsx |
| 3 | "26 years" vs "since 2006" contradiction | P0 | Low | parts-hero.jsx |
| 4 | 5 service pages missing from nav | P1 | Medium | parts-hero.jsx |
| 5 | Cape Cod Marketing not in nav | P1 | Low | parts-hero.jsx |
| 6 | Shop page not linked anywhere | P1 | Low | parts-hero.jsx or footer |
| 7 | No favicon on any page | P2 | Low | All HTML + assets/ |
| 8 | robots.txt disallows deleted files | P2 | Trivial | robots.txt |
| 9 | llms.txt stale (8 guides listed, 26 exist) | P2 | Medium | llms.txt |
| 10 | No Review schema on testimonials page | P3 | Medium | testimonials.html |
| 11 | No BreadcrumbList schema on inner pages | P3 | High | All service/location HTML |
| 12 | No Person schema for founders | P3 | Low | about.html |
| 13 | AIEO missing from hasOfferCatalog | P3 | Low | index.html, aieo.html |
| 14 | Generic OG image on most pages | P3 | High | All HTML files |
| 15 | Contact + Quote share same Formspree endpoint | P4 | Low | quote-page.jsx |
| 16 | No pricing signals on service pages | P4 | Medium | Service JSX files |
| 17 | No scheduling / calendar link | P4 | Low | contact-page.jsx, process.html |
| 18 | Contact form requires Company field | P4 | Trivial | contact-page.jsx |
| 19 | Quote success page dead end | P4 | Low | quote-page.jsx |
| 20 | No case study index on .org domain | P4 | Medium | New page |
| 21 | No seasonal business content | P5 | High | New whitepaper / page |
| 22 | Missing location pages (villages) | P5 | Medium | locations-data.jsx + HTML |
| 23 | Missing industry pages (retail, arts) | P5 | Medium | industry-data.jsx + HTML |
| 24 | No email capture on whitepaper pages | P5 | Medium | whitepaper-page.jsx |
