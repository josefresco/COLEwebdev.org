/* global React */
const { useState, useEffect, useRef } = React;

/* ============================================================
   Analytics — GA4 (G-6BC2DK7FDY)
   Stub is synchronous (< 1ms, no network). gtag.js loads after idle.
   Form submit events fire per-form in their own success handlers.
   ============================================================ */
(function () {
  var G = 'G-6BC2DK7FDY';

  // Preconnect so DNS + TLS are ready before the script loads
  ['https://www.googletagmanager.com', 'https://www.google-analytics.com'].forEach(function (h) {
    var l = document.createElement('link');
    l.rel = 'preconnect';
    l.href = h;
    document.head.appendChild(l);
  });

  // Synchronous stub — queues all calls until gtag.js arrives, zero network cost
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', G);

  // Load gtag.js only after the page is idle — never competes with critical resources
  function loadGA() {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + G;
    document.head.appendChild(s);
  }
  if ('requestIdleCallback' in window) {
    requestIdleCallback(loadGA, { timeout: 2000 });
  } else {
    window.addEventListener('load', function () { setTimeout(loadGA, 200); });
  }

  // Single delegated listener — one handler for all tel: and mailto: links on every page
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href]');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (href.startsWith('tel:')) {
      window.gtag('event', 'phone_call', { event_category: 'engagement', event_label: href.replace('tel:', '') });
    } else if (href.startsWith('mailto:')) {
      window.gtag('event', 'email_click', { event_category: 'engagement', event_label: href.replace('mailto:', '') });
    }
  });
}());

/* ============================================================
   Logo / brand W mark
   ============================================================ */
/* Standalone "W" mark — used in small spots */
function WMark({ size = 28, color = '#7BC043' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 5 L9 27 L13 13 L16 22 L19 13 L23 27 L29 5 L25 5 L22 19 L18 7 L14 7 L10 19 L7 5 Z" fill={color} />
    </svg>);

}

/* Full "COLEwebdev" wordmark — uses the official PNG */
function ColeLogo({ height = 34, dark = false }) {
  return (
    <img
      src="assets/colewebdev-logo.png"
      alt="COLEwebdev — Ask more of your website"
      style={{
        height,
        width: 'auto',
        display: 'block',
        filter: dark ? 'brightness(0) invert(1)' : 'none',
        opacity: dark ? 0.95 : 1
      }} />);


}

/* ============================================================
   Header
   ============================================================ */
const SERVICE_LINKS = [
  { groupLabel: 'Design & Build' },
  { href: 'website-design.html', title: 'Web Design + Build' },
  { href: 'wordpress.html', title: 'WordPress Design' },
  { href: 'traditional.html', title: 'Traditional Web Design' },
  { href: 'ecommerce.html', title: 'E-Commerce' },
  { groupLabel: 'Grow & Market' },
  { href: 'seo.html', title: 'SEO & Local Search' },
  { href: 'ppc.html', title: 'PPC & Google Ads' },
  { href: 'marketing.html', title: 'Marketing' },
  { href: 'branding.html', title: 'Branding' },
  { href: 'ai-apps.html', title: 'AI Studio', pill: 'NEW' },
  { href: 'aieo.html', title: 'AI Engine Optimization', pill: 'NEW' },
  { groupLabel: 'Care & Support' },
  { href: 'hosting.html', title: 'Hosting + Care Plans' },
  { href: 'wordpress-speed.html', title: 'WordPress Speed' },
  { href: 'web-accessibility.html', title: 'Web Accessibility' },
  { href: 'updates.html', title: 'Updates & Maintenance' },
  { href: 'consulting.html', title: 'Consulting' },
  { groupLabel: 'By Industry' },
  { href: 'cape-cod-restaurant-web-design.html', title: 'Restaurants' },
  { href: 'cape-cod-hospitality-web-design.html', title: 'Hospitality' },
  { href: 'cape-cod-contractor-web-design.html', title: 'Contractors' },
  { href: 'cape-cod-marine-web-design.html', title: 'Marine & Charters' },
  { href: 'cape-cod-real-estate-web-design.html', title: 'Real Estate' },
  { href: 'cape-cod-health-web-design.html', title: 'Health & Wellness' },
  { href: 'cape-cod-wedding-web-design.html', title: 'Weddings & Events' },
  { href: 'cape-cod-vacation-rental-web-design.html', title: 'Vacation Rentals' },
  { href: 'industries.html', title: 'All Industries →' },
];

/* ============================================================
   Site search data — all indexed pages
   ============================================================ */
const SEARCH_DATA = [
  { title: 'Home', desc: 'COLEwebdev — Cape Cod web design since 2006.', category: 'Company', href: 'index.html' },
  { title: 'Services', desc: 'Full overview of web design, SEO, hosting, and AI services.', category: 'Company', href: 'services.html' },
  { title: 'Contact', desc: 'Start a project or ask a question.', category: 'Company', href: 'contact.html' },
  { title: 'Portfolio', desc: 'Recent websites and client work.', category: 'Company', href: 'portfolio.html' },
  { title: 'Case Studies', desc: 'Real project outcomes for Cape Cod clients.', category: 'Company', href: 'case-studies.html' },
  { title: 'Free Resources', desc: 'Printable marketing checklists for small business owners.', category: 'Company', href: 'resources.html' },
  { title: 'Testimonials', desc: 'What Cape Cod business owners say about working with us.', category: 'Company', href: 'testimonials.html' },
  { title: 'About Us', desc: 'Our team, story, and community roots.', category: 'Company', href: 'about.html' },
  { title: 'Our Process', desc: 'How we scope, build, and hand off every project.', category: 'Company', href: 'process.html' },
  { title: 'News & Blog', desc: 'Web design tips, updates, and articles.', category: 'Company', href: 'news.html' },
  { title: 'Social News', desc: 'Live updates from our Bluesky feed.', category: 'Company', href: 'social-news.html' },
  { title: 'Request a Quote', desc: 'Get a fast, no-obligation project estimate.', category: 'Company', href: 'quote.html' },
  { title: 'Merch Shop', desc: 'COLEwebdev branded apparel and accessories, printed on demand.', category: 'Company', href: 'shop.html' },
  { title: 'Web Design', desc: 'Modern, mobile-first websites built for your business.', category: 'Services', href: 'website-design.html' },
  { title: 'Marketing', desc: 'SEO, Google Ads, social media, analytics, and lead capture — one local team.', category: 'Services', href: 'marketing.html' },
  { title: 'PPC & Google Ads', desc: 'Paid search management — negatives, landing pages, and conversion tracking.', category: 'Services', href: 'ppc.html' },
  { title: 'AI Studio', desc: 'Chatbots, plugins, PWAs, extensions, and custom business tools.', category: 'Services', href: 'ai-apps.html' },
  { title: 'AI Engine Optimization', desc: 'Get cited by ChatGPT, Perplexity, Gemini, and Claude — AIEO for Cape Cod businesses.', category: 'Services', href: 'aieo.html' },
  { title: 'Consulting', desc: 'Website strategy, audits, business advice, and training.', category: 'Services', href: 'consulting.html' },
  { title: 'Hosting + Care Plans', desc: 'Backups, security, updates — and a human to email.', category: 'Services', href: 'hosting.html' },
  { title: 'Updates & Maintenance', desc: 'Hourly content edits — text, images, pages, forms. No monthly commitment.', category: 'Services', href: 'updates.html' },
  { title: 'Branding', desc: 'Logos, color, print — so the site fits the rest of you.', category: 'Services', href: 'branding.html' },
  { title: 'E-Commerce', desc: 'WooCommerce and Shopify storefronts that ship.', category: 'Services', href: 'ecommerce.html' },
  { title: 'WordPress Design', desc: 'Custom WordPress builds that are easy to manage.', category: 'Services', href: 'wordpress.html' },
  { title: 'WordPress Speed Optimization', desc: 'Core Web Vitals, image optimization, caching, and plugin audits.', category: 'Services', href: 'wordpress-speed.html' },
  { title: 'Web Accessibility (WCAG)', desc: 'WCAG 2.1 AA audits, remediation, and ADA compliance for business websites.', category: 'Services', href: 'web-accessibility.html' },
  { title: 'Traditional Web Design', desc: 'Static HTML/CSS sites — fast, secure, no CMS needed.', category: 'Services', href: 'traditional.html' },
  { title: 'What Web Design Actually Does', desc: 'How a professional website drives real business results.', category: 'Whitepapers', href: 'wp-what-web-design-does.html' },
  { title: 'Is a Website Worth the Investment?', desc: 'A clear-eyed look at ROI for small business websites.', category: 'Whitepapers', href: 'wp-investment-value.html' },
  { title: 'DIY vs. Professional Web Design', desc: 'When to build it yourself and when to hire a pro.', category: 'Whitepapers', href: 'wp-diy-vs-pro.html' },
  { title: 'Three Types of Small Business Websites', desc: 'Brochure, lead gen, or e-commerce — which fits you?', category: 'Whitepapers', href: 'wp-three-types.html' },
  { title: 'Seven Golden Rules of Web Design', desc: 'Time-tested principles for sites people actually use.', category: 'Whitepapers', href: 'wp-seven-golden-rules.html' },
  { title: 'Five Principles of Effective Web Design', desc: 'The fundamentals behind every great site we build.', category: 'Whitepapers', href: 'wp-five-principles.html' },
  { title: 'The Seven Cs of Web Design', desc: 'A framework for evaluating and improving any website.', category: 'Whitepapers', href: 'wp-seven-cs.html' },
  { title: 'Web Design FAQ Guide', desc: 'Answers to the questions clients ask most often.', category: 'Whitepapers', href: 'wp-faq-guide.html' },
  { title: 'Google Ads Waste Guide', desc: 'Why most Google Ads accounts waste budget — and how to fix it.', category: 'Whitepapers', href: 'wp-google-ads-guide.html' },
  { title: 'How to Choose a Web Designer', desc: 'What to look for, what to ask, and what to avoid when hiring.', category: 'Whitepapers', href: 'wp-how-to-choose.html' },
  { title: 'What Makes a Good Website?', desc: 'The elements that separate sites that work from sites that don\'t.', category: 'Whitepapers', href: 'wp-what-makes-good-website.html' },
  { title: 'How Much Does a Website Cost?', desc: 'What drives price up or down — and how to evaluate value.', category: 'Whitepapers', href: 'wp-website-cost.html' },
  { title: 'Why Is Web Design So Expensive?', desc: 'What you\'re actually buying when you hire a professional.', category: 'Whitepapers', href: 'wp-web-design-expensive.html' },
  { title: 'How Long Does a Website Take to Build?', desc: 'Realistic timelines and what usually causes delays.', category: 'Whitepapers', href: 'wp-how-long-website.html' },
  { title: 'When Should I Redesign My Website?', desc: 'Data-driven signs it\'s time — and how to plan it right.', category: 'Whitepapers', href: 'wp-when-to-redesign.html' },
  { title: 'Do I Need a Website If I Have Social Media?', desc: 'Why owned property beats rented land every time.', category: 'Whitepapers', href: 'wp-website-vs-social.html' },
  { title: 'WordPress vs. Squarespace', desc: 'An honest comparison for small business owners.', category: 'Whitepapers', href: 'wp-wordpress-vs-squarespace.html' },
  { title: 'Web Design vs. Web Development', desc: 'Two distinct disciplines — and why the best work combines both.', category: 'Whitepapers', href: 'wp-design-vs-development.html' },
  { title: 'Why Isn\'t My Website on Google?', desc: 'Four fixable problems behind most visibility issues.', category: 'Whitepapers', href: 'wp-not-showing-on-google.html' },
  { title: 'How Long Does SEO Take to Work?', desc: 'Realistic timelines and what good SEO looks like in progress.', category: 'Whitepapers', href: 'wp-how-long-seo.html' },
  { title: 'How Do I Know If My Website Is Working?', desc: 'The right metrics — and what "working" actually means.', category: 'Whitepapers', href: 'wp-is-my-website-working.html' },
  { title: 'Shopify vs. WooCommerce', desc: 'A practical e-commerce comparison for small businesses.', category: 'Whitepapers', href: 'wp-shopify-vs-woocommerce.html' },
  { title: 'What Are Core Web Vitals?', desc: 'LCP, CLS, and INP explained — and how they affect your Google rankings.', category: 'Whitepapers', href: 'wp-core-web-vitals.html' },
  { title: 'Website Accessibility & ADA Compliance', desc: 'What WCAG 2.1 means, the legal exposure, and how to build a compliant site.', category: 'Whitepapers', href: 'wp-website-accessibility.html' },
  { title: 'How to Improve Your Google Maps Ranking', desc: 'Google Business Profile, reviews, citations, and local schema — what moves the needle.', category: 'Whitepapers', href: 'wp-google-maps-ranking.html' },
  { title: 'What Is WordPress Maintenance?', desc: 'Updates, backups, security monitoring — and the real cost of skipping it.', category: 'Whitepapers', href: 'wp-wordpress-maintenance.html' },
  { title: 'Nonprofit Web Design', desc: 'Donation integration, volunteer intake, and accessible sites for Cape Cod nonprofits.', category: 'Industry', href: 'cape-cod-nonprofit-web-design.html' },
  { title: 'Church Website Design', desc: 'Service schedules, sermon archives, and online giving for Cape Cod churches.', category: 'Industry', href: 'cape-cod-church-web-design.html' },
  { title: 'Hospitality Web Design', desc: 'Direct booking, room pages, and local SEO for Cape Cod inns and B&Bs.', category: 'Industry', href: 'cape-cod-hospitality-web-design.html' },
  { title: 'Restaurant Web Design', desc: 'Mobile-first menus, reservations, and online ordering for Cape Cod restaurants.', category: 'Industry', href: 'cape-cod-restaurant-web-design.html' },
  { title: 'Real Estate Web Design', desc: 'IDX integration, lead capture, and neighborhood guides for Cape Cod agents.', category: 'Industry', href: 'cape-cod-real-estate-web-design.html' },
  { title: 'Chamber of Commerce Website', desc: 'Member directories, event calendars, and business spotlights for Cape Cod chambers.', category: 'Industry', href: 'cape-cod-chamber-web-design.html' },
  { title: 'Contractor Web Design', desc: 'Project galleries, service area pages, and local SEO for Cape Cod builders, plumbers, and roofers.', category: 'Industry', href: 'cape-cod-contractor-web-design.html' },
  { title: 'Landscaping Web Design', desc: 'Before-and-after galleries and local SEO to fill your spring calendar on Cape Cod.', category: 'Industry', href: 'cape-cod-landscaping-web-design.html' },
  { title: 'Health & Wellness Web Design', desc: 'Online booking, provider profiles, and local SEO for Cape Cod fitness studios and practices.', category: 'Industry', href: 'cape-cod-health-web-design.html' },
  { title: 'Law Firm Web Design', desc: 'Credibility-first sites for Cape Cod attorneys, consultants, and professional service firms.', category: 'Industry', href: 'cape-cod-legal-web-design.html' },
  { title: 'Marine & Charter Web Design', desc: 'Online booking and photography-led design for Cape Cod fishing charters and boat tours.', category: 'Industry', href: 'cape-cod-marine-web-design.html' },
  { title: 'Retail Web Design', desc: 'E-commerce, product catalogs, and local SEO for Cape Cod boutiques, gift shops, and specialty stores.', category: 'Industry', href: 'cape-cod-retail-web-design.html' },
  { title: 'Automotive Web Design', desc: 'Service pages, online scheduling, and local SEO for Cape Cod auto repair shops and dealerships.', category: 'Industry', href: 'cape-cod-automotive-web-design.html' },
  { title: 'Photography Web Design', desc: 'Portfolio websites, online booking, and local SEO for Cape Cod photographers.', category: 'Industry', href: 'cape-cod-photography-web-design.html' },
  { title: 'Wedding & Event Web Design', desc: 'Portfolio galleries, inquiry forms, and local SEO for Cape Cod venues, planners, caterers, and florists.', category: 'Industry', href: 'cape-cod-wedding-web-design.html' },
  { title: 'Salon & Spa Web Design', desc: 'Online booking, portfolio galleries, and local SEO for Cape Cod salons and spas.', category: 'Industry', href: 'cape-cod-salon-web-design.html' },
  { title: 'Winery & Brewery Web Design', desc: 'Online shop, events calendar, and local SEO for Cape Cod wineries and craft breweries.', category: 'Industry', href: 'cape-cod-winery-web-design.html' },
  { title: 'Pet Care Web Design', desc: 'Online booking, facility pages, and local SEO for Cape Cod vets, groomers, and kennels.', category: 'Industry', href: 'cape-cod-pet-care-web-design.html' },
  { title: 'Vacation Rental Web Design', desc: 'Direct booking, property photography, and local SEO to cut Airbnb commissions on Cape Cod.', category: 'Industry', href: 'cape-cod-vacation-rental-web-design.html' },
  { title: 'Industries We Serve', desc: 'Web design for 19 Cape Cod industries — find your category.', category: 'Industry', href: 'industries.html' },
  { title: 'Maine Web Design', desc: 'Web design for Maine businesses — Farmington roots, Aroostook County presence.', category: 'Location', href: 'maine-web-design.html' },
  { title: 'Cape Cod Web Design', desc: 'Local web design studio serving all 15 Cape Cod towns since 2006.', category: 'Location', href: 'cape-cod-web-design.html' },
  { title: 'Eastham Web Design', desc: 'COLEwebdev is based in Eastham — your local web design studio.', category: 'Location', href: 'eastham-web-design.html' },
  { title: 'Orleans Web Design', desc: 'Custom websites for Orleans, MA businesses.', category: 'Location', href: 'orleans-web-design.html' },
  { title: 'Wellfleet Web Design', desc: 'Websites for Wellfleet restaurants, galleries, and nonprofits.', category: 'Location', href: 'wellfleet-web-design.html' },
  { title: 'Provincetown Web Design', desc: 'Web design for Provincetown hospitality, tourism, and arts businesses.', category: 'Location', href: 'provincetown-web-design.html' },
  { title: 'Truro Web Design', desc: 'Websites for Truro vineyards, galleries, vacation rentals, and nonprofits.', category: 'Location', href: 'truro-web-design.html' },
  { title: 'Brewster Web Design', desc: 'Web design for Brewster inns, shops, and Route 6A businesses.', category: 'Location', href: 'brewster-web-design.html' },
  { title: 'Harwich Web Design', desc: 'Websites for Harwich Port restaurants, marine businesses, and contractors.', category: 'Location', href: 'harwich-web-design.html' },
  { title: 'Dennis Web Design', desc: 'Web design for Dennis restaurants, accommodations, and Mid-Cape businesses.', category: 'Location', href: 'dennis-web-design.html' },
  { title: 'Chatham Web Design', desc: 'Polished websites for Chatham\'s hospitality, boutique retail, and arts businesses.', category: 'Location', href: 'chatham-web-design.html' },
  { title: 'Yarmouth Web Design', desc: 'Websites for Yarmouth Route 28 businesses — motels, restaurants, retailers.', category: 'Location', href: 'yarmouth-web-design.html' },
  { title: 'Hyannis Web Design', desc: 'Web design for the Cape\'s commercial hub — retail, medical, and hospitality.', category: 'Location', href: 'hyannis-web-design.html' },
  { title: 'Mashpee Web Design', desc: 'Websites for Mashpee Commons retailers, restaurants, and local services.', category: 'Location', href: 'mashpee-web-design.html' },
  { title: 'Falmouth Web Design', desc: 'Web design for Falmouth arts, healthcare, legal, and hospitality businesses.', category: 'Location', href: 'falmouth-web-design.html' },
  { title: 'Sandwich Web Design', desc: 'Websites for Sandwich heritage attractions, Route 6A shops, and local services.', category: 'Location', href: 'sandwich-web-design.html' },
  { title: 'Bourne Web Design', desc: 'Web design for Bourne marine, retail, and gateway-to-the-Cape businesses.', category: 'Location', href: 'bourne-web-design.html' },
  { title: 'Privacy Policy', desc: 'How we collect and use your data.', category: 'Legal', href: 'privacy.html' },
  { title: 'Accessibility Statement', desc: 'Our WCAG 2.1 AA commitment and features.', category: 'Legal', href: 'accessibility.html' },
  { title: 'Site Map', desc: 'Every page on colewebdev.org, organized.', category: 'Legal', href: 'sitemap.html' },
];

/* ============================================================
   Cookie Consent Banner (EU / CA only — timezone detection)
   ============================================================ */
function CookieBanner() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem('ck_consent')) return;
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (tz.startsWith('Europe/') || tz === 'America/Los_Angeles') {
      setVisible(true);
    }
  }, []);

  const dismiss = (val) => {
    localStorage.setItem('ck_consent', val);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="ck-banner" role="region" aria-label="Cookie consent">
      <div className="ck-inner">
        <p className="ck-msg">
          We use essential cookies to keep the site working. No tracking or advertising cookies are used.{' '}
          <a href="privacy.html">Privacy Policy</a>
        </p>
        <div className="ck-actions">
          <button className="ck-btn ck-btn--accept" onClick={() => dismiss('accepted')}>Accept</button>
          <button className="ck-btn ck-btn--decline" onClick={() => dismiss('declined')}>Decline</button>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Site Search Modal (Fuse.js, lazy-loaded)
   ============================================================ */
function SearchModal({ onClose }) {
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState([]);
  const [fuse, setFuse] = React.useState(null);
  const [activeIdx, setActiveIdx] = React.useState(0);
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    const init = () => setFuse(new window.Fuse(SEARCH_DATA, { keys: ['title', 'desc', 'category'], threshold: 0.35 }));
    if (window.Fuse) { init(); return; }
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/fuse.js@7.0.0/dist/fuse.min.js';
    s.onload = init;
    document.head.appendChild(s);
  }, []);

  React.useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  const handleInput = (e) => {
    const q = e.target.value;
    setQuery(q);
    setActiveIdx(0);
    if (!fuse || !q.trim()) { setResults([]); return; }
    setResults(fuse.search(q).slice(0, 8).map(r => r.item));
  };

  const handleKey = (e) => {
    if (!results.length) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setActiveIdx(i => Math.min(i + 1, results.length - 1)); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setActiveIdx(i => Math.max(i - 1, 0)); }
    if (e.key === 'Enter' && results[activeIdx]) { window.location.href = results[activeIdx].href; }
  };

  return (
    <div className="srch-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }} role="dialog" aria-modal="true" aria-label="Search">
      <div className="srch-modal">
        <div className="srch-header">
          <div className="srch-input-wrap">
            <span className="srch-icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M10 10L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </span>
            <input
              ref={inputRef}
              className="srch-input"
              type="search"
              placeholder="Search pages, services, guides…"
              value={query}
              onChange={handleInput}
              onKeyDown={handleKey}
              aria-label="Search site"
              autoComplete="off"
            />
          </div>
          <button className="srch-close" onClick={onClose} aria-label="Close search">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <div className="srch-results" role="listbox">
          {!query.trim() ? (
            <div className="srch-empty">Type to search pages, services, and guides.</div>
          ) : results.length === 0 ? (
            <div className="srch-empty">No results for "<strong>{query}</strong>"</div>
          ) : (
            results.map((r, i) => (
              <a
                key={r.href}
                className={'srch-result' + (i === activeIdx ? ' is-active' : '')}
                href={r.href}
                role="option"
                aria-selected={i === activeIdx}
                onMouseEnter={() => setActiveIdx(i)}
              >
                <span className="srch-result-cat">{r.category}</span>
                <span className="srch-result-title">{r.title}</span>
                <span className="srch-result-desc">{r.desc}</span>
              </a>
            ))
          )}
        </div>
        <div className="srch-footer">
          <span className="srch-hint">↑↓ navigate</span>
          <span className="srch-hint">↵ open</span>
          <span className="srch-hint">esc close</span>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Header
   ============================================================ */
function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);

  const path = window.location.pathname;
  const on = (page) => path.endsWith(page) ? ' is-active' : '';
  const onHome = (path === '/' || path === '' || path.endsWith('index.html')) ? ' is-active' : '';

  const close = () => { setMenuOpen(false); setServicesOpen(false); };

  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <React.Fragment>
      <div className="site-ghost" aria-hidden="true" />
      <CookieBanner />
      <header className="site-header">
      <nav className="nav">
        <a href="index.html" className="nav-logo" aria-label="COLEwebdev — home">
          <ColeLogo height={32} />
        </a>
        <div className="nav-links">
          <a className={'nav-link' + onHome} href="index.html">Home</a>
          <div className="nav-item-dropdown">
            <a className={'nav-link' + on('services.html')} href="services.html">Services <span className="caret">▾</span></a>
            <div className="nav-dropdown" role="menu">
              {/* Design & Build */}
              <div className="nav-dd-group">Design &amp; Build</div>
              <a href="website-design.html" className="nav-dd-item">
                <span className="nav-dd-glyph green">◇</span>
                <div>
                  <div className="nav-dd-title">Web Design + Build</div>
                  <div className="nav-dd-desc">Custom sites built around your brand, not a template.</div>
                </div>
              </a>
              <a href="wordpress.html" className="nav-dd-item">
                <span className="nav-dd-glyph navy">◐</span>
                <div>
                  <div className="nav-dd-title">WordPress Design</div>
                  <div className="nav-dd-desc">Custom themes, lean plugin stack, client-managed.</div>
                </div>
              </a>
              <a href="traditional.html" className="nav-dd-item">
                <span className="nav-dd-glyph blue">◇</span>
                <div>
                  <div className="nav-dd-title">Traditional Web Design</div>
                  <div className="nav-dd-desc">Hand-coded HTML/CSS — fast, secure, no CMS needed.</div>
                </div>
              </a>
              <a href="ecommerce.html" className="nav-dd-item">
                <span className="nav-dd-glyph navy">◎</span>
                <div>
                  <div className="nav-dd-title">E-Commerce</div>
                  <div className="nav-dd-desc">WooCommerce &amp; Shopify storefronts that sell.</div>
                </div>
              </a>

              {/* Grow & Market */}
              <div className="nav-dd-group nav-dd-group--sep">Grow &amp; Market</div>
              <a href="seo.html" className="nav-dd-item">
                <span className="nav-dd-glyph orange">↗</span>
                <div>
                  <div className="nav-dd-title">SEO &amp; Local Search</div>
                  <div className="nav-dd-desc">Show up when neighbors search for what you sell.</div>
                </div>
              </a>
              <a href="ppc.html" className="nav-dd-item">
                <span className="nav-dd-glyph orange">◎</span>
                <div>
                  <div className="nav-dd-title">PPC &amp; Google Ads</div>
                  <div className="nav-dd-desc">Paid search campaigns that convert — not just clicks.</div>
                </div>
              </a>
              <a href="marketing.html" className="nav-dd-item">
                <span className="nav-dd-glyph orange">↗</span>
                <div>
                  <div className="nav-dd-title">Marketing</div>
                  <div className="nav-dd-desc">Paid ads, social, email, analytics, and lead capture.</div>
                </div>
              </a>
              <a href="branding.html" className="nav-dd-item">
                <span className="nav-dd-glyph orange">✦</span>
                <div>
                  <div className="nav-dd-title">Branding</div>
                  <div className="nav-dd-desc">Logos, color, print — so the site fits the rest of you.</div>
                </div>
              </a>
              <a href="ai-apps.html" className="nav-dd-item">
                <span className="nav-dd-glyph navy">⌘</span>
                <div>
                  <div className="nav-dd-title">AI Studio <span className="nav-dd-pill">NEW</span></div>
                  <div className="nav-dd-desc">Chatbots, intake forms, booking tools, and custom apps.</div>
                </div>
              </a>
              <a href="aieo.html" className="nav-dd-item">
                <span className="nav-dd-glyph navy">⌘</span>
                <div>
                  <div className="nav-dd-title">AI Engine Optimization <span className="nav-dd-pill">NEW</span></div>
                  <div className="nav-dd-desc">Get cited by ChatGPT, Perplexity, and Gemini.</div>
                </div>
              </a>

              {/* Care & Support */}
              <div className="nav-dd-group nav-dd-group--sep">Care &amp; Support</div>
              <a href="hosting.html" className="nav-dd-item">
                <span className="nav-dd-glyph green">↻</span>
                <div>
                  <div className="nav-dd-title">Hosting + Care Plans</div>
                  <div className="nav-dd-desc">Managed hosting with a human on the other end.</div>
                </div>
              </a>
              <a href="wordpress-speed.html" className="nav-dd-item">
                <span className="nav-dd-glyph orange">↗</span>
                <div>
                  <div className="nav-dd-title">WordPress Speed</div>
                  <div className="nav-dd-desc">Core Web Vitals, caching, and image optimization.</div>
                </div>
              </a>
              <a href="web-accessibility.html" className="nav-dd-item">
                <span className="nav-dd-glyph navy">⚙</span>
                <div>
                  <div className="nav-dd-title">Web Accessibility (WCAG)</div>
                  <div className="nav-dd-desc">WCAG 2.1 AA audits and ADA compliance remediation.</div>
                </div>
              </a>
              <a href="updates.html" className="nav-dd-item">
                <span className="nav-dd-glyph blue">✎</span>
                <div>
                  <div className="nav-dd-title">Updates &amp; Maintenance</div>
                  <div className="nav-dd-desc">Quick-turn edits — text, images, pages, forms.</div>
                </div>
              </a>
              <a href="consulting.html" className="nav-dd-item">
                <span className="nav-dd-glyph green">◇</span>
                <div>
                  <div className="nav-dd-title">Consulting</div>
                  <div className="nav-dd-desc">Strategy sessions, site audits, and CMS training.</div>
                </div>
              </a>

              {/* By Industry */}
              <div className="nav-dd-group nav-dd-group--sep">By Industry</div>
              <a href="cape-cod-restaurant-web-design.html" className="nav-dd-item">
                <span className="nav-dd-glyph orange">◎</span>
                <div>
                  <div className="nav-dd-title">Restaurants</div>
                  <div className="nav-dd-desc">Menus, reservations, and local SEO for Cape Cod dining.</div>
                </div>
              </a>
              <a href="cape-cod-hospitality-web-design.html" className="nav-dd-item">
                <span className="nav-dd-glyph blue">◷</span>
                <div>
                  <div className="nav-dd-title">Hospitality</div>
                  <div className="nav-dd-desc">Direct booking websites for inns, B&Bs, and hotels.</div>
                </div>
              </a>
              <a href="cape-cod-contractor-web-design.html" className="nav-dd-item">
                <span className="nav-dd-glyph navy">⚙</span>
                <div>
                  <div className="nav-dd-title">Contractors</div>
                  <div className="nav-dd-desc">Project galleries and local SEO for trades businesses.</div>
                </div>
              </a>
              <a href="cape-cod-marine-web-design.html" className="nav-dd-item">
                <span className="nav-dd-glyph blue">◇</span>
                <div>
                  <div className="nav-dd-title">Marine &amp; Charters</div>
                  <div className="nav-dd-desc">Online booking for fishing charters and boat tours.</div>
                </div>
              </a>
              <a href="cape-cod-real-estate-web-design.html" className="nav-dd-item">
                <span className="nav-dd-glyph green">↗</span>
                <div>
                  <div className="nav-dd-title">Real Estate</div>
                  <div className="nav-dd-desc">IDX integration and lead capture for Cape Cod agents.</div>
                </div>
              </a>
              <a href="cape-cod-wedding-web-design.html" className="nav-dd-item">
                <span className="nav-dd-glyph orange">✦</span>
                <div>
                  <div className="nav-dd-title">Weddings &amp; Events</div>
                  <div className="nav-dd-desc">Portfolio galleries and inquiry forms for venues and planners.</div>
                </div>
              </a>
              <a href="cape-cod-vacation-rental-web-design.html" className="nav-dd-item">
                <span className="nav-dd-glyph navy">◐</span>
                <div>
                  <div className="nav-dd-title">Vacation Rentals</div>
                  <div className="nav-dd-desc">Direct booking sites that cut what you pay Airbnb.</div>
                </div>
              </a>
              <a href="industries.html" className="nav-dd-item">
                <span className="nav-dd-glyph green">≡</span>
                <div>
                  <div className="nav-dd-title">All 19 Industries</div>
                  <div className="nav-dd-desc">Full industry listing — find your category.</div>
                </div>
              </a>
            </div>
          </div>
          <a className={'nav-link' + on('portfolio.html')} href="portfolio.html">Portfolio</a>
          <a className={'nav-link' + on('case-studies.html')} href="case-studies.html">Case Studies</a>
          <div className="nav-item-dropdown">
            <a className={'nav-link' + (on('about.html') || on('process.html') || on('testimonials.html'))} href="about.html">About Us <span className="caret">▾</span></a>
            <div className="nav-dropdown nav-dropdown--sm" role="menu">
              <a href="about.html" className="nav-dd-item">
                <span className="nav-dd-glyph green">◇</span>
                <div>
                  <div className="nav-dd-title">About Us</div>
                  <div className="nav-dd-desc">Our team, story, and community roots.</div>
                </div>
              </a>
              <a href="process.html" className="nav-dd-item">
                <span className="nav-dd-glyph navy">⌘</span>
                <div>
                  <div className="nav-dd-title">Our Process</div>
                  <div className="nav-dd-desc">How we scope, build, and hand off every project.</div>
                </div>
              </a>
              <a href="testimonials.html" className="nav-dd-item">
                <span className="nav-dd-glyph orange">★</span>
                <div>
                  <div className="nav-dd-title">Testimonials</div>
                  <div className="nav-dd-desc">4.8 stars across 72 Google reviews.</div>
                </div>
              </a>
            </div>
          </div>
          <a className={'nav-link' + on('whitepapers.html')} href="whitepapers.html">Whitepapers</a>
          <a className={'nav-link' + on('resources.html')} href="resources.html">Free Resources</a>
          <div className="nav-item-dropdown">
            <a className={'nav-link' + (on('news.html') || on('social-news.html') || on('newsletter.html'))} href="news.html">News <span className="caret">▾</span></a>
            <div className="nav-dropdown nav-dropdown--sm" role="menu">
              <a href="news.html" className="nav-dd-item">
                <span className="nav-dd-glyph green">◇</span>
                <div>
                  <div className="nav-dd-title">News &amp; Blog</div>
                  <div className="nav-dd-desc">Web design tips, updates, and articles.</div>
                </div>
              </a>
              <a href="social-news.html" className="nav-dd-item">
                <span className="nav-dd-glyph navy">✦</span>
                <div>
                  <div className="nav-dd-title">Social News</div>
                  <div className="nav-dd-desc">Live updates from our Bluesky feed.</div>
                </div>
              </a>
              <a href="newsletter.html" className="nav-dd-item">
                <span className="nav-dd-glyph orange">↻</span>
                <div>
                  <div className="nav-dd-title">Newsletter Archive</div>
                  <div className="nav-dd-desc">Browse every issue of the COLEwebdev newsletter.</div>
                </div>
              </a>
            </div>
          </div>
          <a className={'nav-link' + on('contact.html')} href="contact.html">Contact</a>
        </div>
        <div className="nav-cta">
          <button className="nav-search-btn" onClick={() => setSearchOpen(true)} aria-label="Search site">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M10 10L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <a className="btn btn--ghost btn--sm" href="tel:5084132043">508.413.2043</a>
          <a className="btn btn--accent btn--sm" href="contact.html">Start a Project <span className="arrow">→</span></a>
        </div>
        <button
          className={'nav-hamburger' + (menuOpen ? ' is-open' : '')}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu" onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
          <div className="mobile-menu-inner">
            <button className="mobile-menu-close" onClick={close} aria-label="Close menu">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="1" y1="1" x2="17" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="17" y1="1" x2="1" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <nav className="mobile-nav">
              <a className="mobile-nav-link" href="index.html" onClick={close}>Home</a>

              <div className="mobile-nav-section">
                <button
                  className={'mobile-nav-link mobile-nav-toggle' + (servicesOpen ? ' is-open' : '')}
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Services
                  <span className="mobile-nav-caret">▾</span>
                </button>
                {servicesOpen && (
                  <div className="mobile-nav-sub">
                    {SERVICE_LINKS.map((s, i) => s.groupLabel ? (
                      <div key={s.groupLabel} className={'mobile-nav-group' + (i > 0 ? ' mobile-nav-group--sep' : '')}>{s.groupLabel}</div>
                    ) : (
                      <a key={s.href} className="mobile-nav-sub-link" href={s.href} onClick={close}>
                        {s.title}
                        {s.pill && <span className="mobile-nav-pill">{s.pill}</span>}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a className="mobile-nav-link" href="portfolio.html" onClick={close}>Portfolio</a>
              <a className="mobile-nav-link" href="case-studies.html" onClick={close}>Case Studies</a>
              <a className="mobile-nav-link" href="testimonials.html" onClick={close}>Testimonials</a>
              <a className="mobile-nav-link" href="about.html" onClick={close}>About Us</a>
              <a className="mobile-nav-link" href="process.html" onClick={close}>Our Process</a>
              <a className="mobile-nav-link" href="newsletter.html" onClick={close}>Newsletter Archive</a>
              <a className="mobile-nav-link" href="whitepapers.html" onClick={close}>Whitepapers</a>
              <a className="mobile-nav-link" href="resources.html" onClick={close}>Free Resources</a>
              <a className="mobile-nav-link" href="news.html" onClick={close}>News &amp; Blog</a>
              <a className="mobile-nav-link" href="social-news.html" onClick={close}>Social News</a>
              <a className="mobile-nav-link" href="contact.html" onClick={close}>Contact</a>
            </nav>
            <div className="mobile-menu-cta">
              <a className="btn btn--accent" href="contact.html" onClick={close}>
                Start a Project <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost mobile-menu-phone" href="tel:5084132043" onClick={close}>
                508.413.2043
              </a>
            </div>
          </div>
        </div>
      )}
      </header>
      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </React.Fragment>);
}

/* ============================================================
   Hero — three variants, switchable via tweak
   ============================================================ */
function HeroOrb() {
  return (
    <div className="hero-scene">
      <img
        className="hero-scene-img"
        src="assets/hero-cwb-scene.png"
        alt="COLEwebdev — CWB monogram with Cape Cod mountains and sun" />
      
    </div>);

}

function HeroMarquee() {
  const items = [
  { name: 'Cape Cod Aquatics', tag: 'CASE STUDY', t: 't-tide' },
  { name: 'Lower Cape Outreach', tag: 'NONPROFIT', t: 't-pine' },
  { name: 'Dolphin Fleet Whale Watch', tag: 'TOURISM', t: 't-coast' },
  { name: 'Ryley Construction', tag: 'CONTRACTOR', t: 't-dune' },
  { name: 'Idle Times Bike Shop', tag: 'RETAIL', t: 't-pine' },
  { name: 'Wellfleet Chamber', tag: 'COMMUNITY', t: 't-coast' },
  { name: 'Nauset Beach Inn', tag: 'HOSPITALITY', t: 't-sun' },
  { name: 'WOMR Radio', tag: 'NONPROFIT', t: 't-tide' }];

  return (
    <div className="hero-marquee-wrap">
      <div className="hero-marquee-head">
        <span className="tag dot tag--green">Live · 700+ launches</span>
        <span className="tag">Recent work</span>
      </div>
      <div className="marquee-row">
        {[...items, ...items].map((it, i) =>
        <div key={'a' + i} className="marquee-card">
            <div className={`ph thumb ${it.t}`}>{it.tag}</div>
            <div className="meta">{it.name}</div>
          </div>
        )}
      </div>
      <div className="marquee-row r2">
        {[...items.slice().reverse(), ...items.slice().reverse()].map((it, i) =>
        <div key={'b' + i} className="marquee-card">
            <div className={`ph thumb ${it.t}`}>{it.tag}</div>
            <div className="meta">{it.name}</div>
          </div>
        )}
      </div>
    </div>);

}

function HeroGridCards() {
  return (
    <div className="hero-grid-cards" style={{ height: '100%' }}>
      <div className="gc feature">
        <span className="tag" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.15)' }}>NEW · AI WEB APPS</span>
        <h3>From idea to <i style={{ color: '#FFC79A' }}>working app</i><br />in record time.</h3>
      </div>
      <div className="gc">
        <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(123,192,67,0.18)', color: '#5DA02E', display: 'grid', placeItems: 'center' }}>◇</div>
        <div>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 22 }}>Web Design</div>
          <div style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--mono)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>100% CUSTOM</div>
        </div>
      </div>
      <div className="gc">
        <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(242,107,31,0.14)', color: '#F26B1F', display: 'grid', placeItems: 'center' }}>↗</div>
        <div>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 22 }}>SEO + Care</div>
          <div style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--mono)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>Monthly</div>
        </div>
      </div>
      <div className="gc">
        <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(14,42,74,0.08)', color: '#0E2A4A', display: 'grid', placeItems: 'center' }}>⌘</div>
        <div>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 22 }}>Hosting</div>
          <div style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--mono)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>WP / Static</div>
        </div>
      </div>
      <div className="gc">
        <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(123,192,67,0.18)', color: '#5DA02E', display: 'grid', placeItems: 'center' }}>✦</div>
        <div>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 22 }}>Branding</div>
          <div style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--mono)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>Logos · Print</div>
        </div>
      </div>
    </div>);

}

function Hero({ variant }) {
  return (
    <section className="hero bg-orbs">
      <div className="shell">
        <div className="hero-grid">
          <div>
            <div className="hero-kicker">
              <span className="pulse"></span>
              <span>Cape Cod Web design with passion since 2006</span>
            </div>
            <h1 style={{ color: "rgb(15, 42, 68)" }}>
              Websites that <span className="accent-w" style={{ color: "rgb(128, 196, 28)" }}>work</span> as hard as you do.
            </h1>
            <p className="lede">We build modern, friendly, search-ready websites small businesses and organizations across Cape Cod and beyond. Real people. Real conversations. Real results.

            </p>
            <div className="hero-actions">
              <a className="btn btn--accent" href="#estimate">Start a conversation <span className="arrow">→</span></a>
              <a className="btn btn--ghost" href="#work">See recent work</a>
            </div>
            <div className="hero-meta">
              <div>
                <div className="stat-num">20</div>
                <div className="stat-label">Years as COLEwebdev</div>
              </div>
              <div>
                <div className="stat-num">700+</div>
                <div className="stat-label">Sites launched</div>
              </div>
              <div>
                <div className="stat-num">4.8★</div>
                <div className="stat-label">Google rating</div>
              </div>
            </div>
          </div>
          <div>
            <div className={`hero-variant ${variant === 'orb' ? 'is-active' : ''}`}><HeroOrb /></div>
            <div className={`hero-variant ${variant === 'marquee' ? 'is-active' : ''}`}><HeroMarquee /></div>
            <div className={`hero-variant ${variant === 'grid' ? 'is-active' : ''}`}><HeroGridCards /></div>
          </div>
        </div>
      </div>
    </section>);

}

/* ============================================================
   Trust strip
   ============================================================ */
function Trust() {
  const marks = [
    { name: 'Cape Cod Aquatics', italic: true },
    { name: 'LOWER CAPE OUTREACH', italic: false },
    { name: 'TRURO VINEYARDS', italic: false },
    { name: 'DENNIS CHAMBER', italic: false },
    { name: 'SVdP Cape Cod', italic: true },
    { name: 'HOG ISLAND BEER', italic: false },
    { name: 'Idle Times Bike Shop', italic: true },
    { name: "Dyer's Beach House", italic: true },
    { name: 'TRURO HIST. SOCIETY', italic: false },
    { name: 'Sylvestre Outdoors', italic: true },
    { name: 'CAPE COD TOWEL CO.', italic: false },
    { name: 'Dr. Moldover', italic: true },
    { name: 'WOMR Radio', italic: false },
    { name: 'Nauset Beach Inn', italic: true },
  ];

  // duplicate for seamless loop
  const looped = [...marks, ...marks];

  return (
    <div className="trust">
      <div className="shell">
        <div className="trust-row">
          <span className="trust-label">Trusted by 700+ small businesses · 2000 → today</span>
          <div className="trust-marquee" aria-label="Client logos">
            <div className="trust-marquee-track">
              {looped.map((m, i) => (
                <span key={i} className={`trust-mark ${m.italic ? '' : 'bold'}`}>{m.name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { WMark, ColeLogo, Header, Hero, Trust });