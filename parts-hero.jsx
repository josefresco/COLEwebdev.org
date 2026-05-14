/* global React */
const { useState, useEffect, useRef } = React;

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
  { href: 'website-design.html', title: 'Web Design' },
  { href: 'seo.html', title: 'SEO & Local Search' },
  { href: 'ai-apps.html', title: 'AI Web Apps', pill: 'NEW' },
  { href: 'hosting.html', title: 'Hosting + Care Plans' },
  { href: 'branding.html', title: 'Branding' },
  { href: 'ecommerce.html', title: 'E-Commerce' },
  { href: 'wordpress.html', title: 'WordPress Design' },
  { href: 'traditional.html', title: 'Traditional Web Design' },
];

/* ============================================================
   Site search data — all indexed pages
   ============================================================ */
const SEARCH_DATA = [
  { title: 'Home', desc: 'COLEwebdev — Cape Cod web design since 2006.', category: 'Company', href: 'index.html' },
  { title: 'Services', desc: 'Full overview of web design, SEO, hosting, and AI services.', category: 'Company', href: 'services.html' },
  { title: 'Contact', desc: 'Start a project or ask a question.', category: 'Company', href: 'contact.html' },
  { title: 'Portfolio', desc: 'Recent websites and client work.', category: 'Company', href: 'portfolio.html' },
  { title: 'About Us', desc: 'Our team, story, and community roots.', category: 'Company', href: 'about.html' },
  { title: 'Our Process', desc: 'How we scope, build, and hand off every project.', category: 'Company', href: 'process.html' },
  { title: 'News', desc: 'Web design tips, updates, and articles.', category: 'Company', href: 'news.html' },
  { title: 'Request a Quote', desc: 'Get a fast, no-obligation project estimate.', category: 'Company', href: 'quote.html' },
  { title: 'Web Design', desc: 'Modern, mobile-first websites built for your business.', category: 'Services', href: 'website-design.html' },
  { title: 'SEO & Local Search', desc: 'Show up when neighbors search for what you sell.', category: 'Services', href: 'seo.html' },
  { title: 'AI Web Apps', desc: 'Booking, intake, and on-site search powered by AI.', category: 'Services', href: 'ai-apps.html' },
  { title: 'Hosting + Care Plans', desc: 'Backups, security, updates — and a human to email.', category: 'Services', href: 'hosting.html' },
  { title: 'Branding', desc: 'Logos, color, print — so the site fits the rest of you.', category: 'Services', href: 'branding.html' },
  { title: 'E-Commerce', desc: 'WooCommerce and Shopify storefronts that ship.', category: 'Services', href: 'ecommerce.html' },
  { title: 'WordPress Design', desc: 'Custom WordPress builds that are easy to manage.', category: 'Services', href: 'wordpress.html' },
  { title: 'Traditional Web Design', desc: 'Static HTML/CSS sites — fast, secure, no CMS needed.', category: 'Services', href: 'traditional.html' },
  { title: 'What Web Design Actually Does', desc: 'How a professional website drives real business results.', category: 'Whitepapers', href: 'wp-what-web-design-does.html' },
  { title: 'Is a Website Worth the Investment?', desc: 'A clear-eyed look at ROI for small business websites.', category: 'Whitepapers', href: 'wp-investment-value.html' },
  { title: 'DIY vs. Professional Web Design', desc: 'When to build it yourself and when to hire a pro.', category: 'Whitepapers', href: 'wp-diy-vs-pro.html' },
  { title: 'Three Types of Small Business Websites', desc: 'Brochure, lead gen, or e-commerce — which fits you?', category: 'Whitepapers', href: 'wp-three-types.html' },
  { title: 'Seven Golden Rules of Web Design', desc: 'Time-tested principles for sites people actually use.', category: 'Whitepapers', href: 'wp-seven-golden-rules.html' },
  { title: 'Five Principles of Effective Web Design', desc: 'The fundamentals behind every great site we build.', category: 'Whitepapers', href: 'wp-five-principles.html' },
  { title: 'The Seven Cs of Web Design', desc: 'A framework for evaluating and improving any website.', category: 'Whitepapers', href: 'wp-seven-cs.html' },
  { title: 'Web Design FAQ Guide', desc: 'Answers to the questions clients ask most often.', category: 'Whitepapers', href: 'wp-faq-guide.html' },
  { title: 'How to Choose a Web Designer', desc: 'What to look for, what to ask, and what to avoid when hiring.', category: 'Whitepapers', href: 'wp-how-to-choose.html' },
  { title: 'What Makes a Good Website?', desc: 'The elements that separate sites that work from sites that don\'t.', category: 'Whitepapers', href: 'wp-what-makes-good-website.html' },
  { title: 'Cape Cod Web Design', desc: 'Local web design studio serving all 15 Cape Cod towns since 2006.', category: 'Location', href: 'cape-cod-web-design.html' },
  { title: 'Eastham Web Design', desc: 'COLEwebdev is based in Eastham — your local web design studio.', category: 'Location', href: 'eastham-web-design.html' },
  { title: 'Orleans Web Design', desc: 'Custom websites for Orleans, MA businesses.', category: 'Location', href: 'orleans-web-design.html' },
  { title: 'Wellfleet Web Design', desc: 'Websites for Wellfleet restaurants, galleries, and nonprofits.', category: 'Location', href: 'wellfleet-web-design.html' },
  { title: 'Provincetown Web Design', desc: 'Web design for Provincetown hospitality, tourism, and arts businesses.', category: 'Location', href: 'provincetown-web-design.html' },
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
              <a href="website-design.html" className="nav-dd-item">
                <span className="nav-dd-glyph green">◇</span>
                <div>
                  <div className="nav-dd-title">Web Design</div>
                  <div className="nav-dd-desc">Modern, mobile-first sites built for your business.</div>
                </div>
              </a>
              <a href="seo.html" className="nav-dd-item">
                <span className="nav-dd-glyph orange">⚡</span>
                <div>
                  <div className="nav-dd-title">SEO &amp; Local Search</div>
                  <div className="nav-dd-desc">Show up when neighbors search for what you sell.</div>
                </div>
              </a>
              <a href="ai-apps.html" className="nav-dd-item">
                <span className="nav-dd-glyph navy">⌘</span>
                <div>
                  <div className="nav-dd-title">AI Web Apps <span className="nav-dd-pill">NEW</span></div>
                  <div className="nav-dd-desc">Booking, intake, on-site search powered by AI.</div>
                </div>
              </a>
              <a href="hosting.html" className="nav-dd-item">
                <span className="nav-dd-glyph green">↻</span>
                <div>
                  <div className="nav-dd-title">Hosting + Care Plans</div>
                  <div className="nav-dd-desc">Backups, security, updates — and a human to email.</div>
                </div>
              </a>
              <a href="branding.html" className="nav-dd-item">
                <span className="nav-dd-glyph orange">✦</span>
                <div>
                  <div className="nav-dd-title">Branding</div>
                  <div className="nav-dd-desc">Logos, color, print — so the site fits the rest of you.</div>
                </div>
              </a>
              <a href="ecommerce.html" className="nav-dd-item">
                <span className="nav-dd-glyph navy">◐</span>
                <div>
                  <div className="nav-dd-title">E-Commerce</div>
                  <div className="nav-dd-desc">WooCommerce &amp; Shopify storefronts that ship.</div>
                </div>
              </a>
            </div>
          </div>
          <a className={'nav-link' + on('portfolio.html')} href="portfolio.html">Portfolio</a>
          <div className="nav-item-dropdown">
            <a className={'nav-link' + (on('about.html') || on('process.html') || on('newsletter.html'))} href="about.html">About Us <span className="caret">▾</span></a>
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
              <a href="newsletter.html" className="nav-dd-item">
                <span className="nav-dd-glyph orange">↻</span>
                <div>
                  <div className="nav-dd-title">Newsletter Archive</div>
                  <div className="nav-dd-desc">Browse every issue of the COLEwebdev newsletter.</div>
                </div>
              </a>
            </div>
          </div>
          <a className={'nav-link' + on('whitepapers.html')} href="whitepapers.html">Whitepapers</a>
          <a className={'nav-link' + on('news.html')} href="news.html">News</a>
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
                    {SERVICE_LINKS.map(s => (
                      <a key={s.href} className="mobile-nav-sub-link" href={s.href} onClick={close}>
                        {s.title}
                        {s.pill && <span className="mobile-nav-pill">{s.pill}</span>}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a className="mobile-nav-link" href="portfolio.html" onClick={close}>Portfolio</a>
              <a className="mobile-nav-link" href="about.html" onClick={close}>About Us</a>
              <a className="mobile-nav-link" href="process.html" onClick={close}>Our Process</a>
              <a className="mobile-nav-link" href="newsletter.html" onClick={close}>Newsletter Archive</a>
              <a className="mobile-nav-link" href="whitepapers.html" onClick={close}>Whitepapers</a>
              <a className="mobile-nav-link" href="news.html" onClick={close}>News</a>
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
                <div className="stat-num">26</div>
                <div className="stat-label">Years on the job</div>
              </div>
              <div>
                <div className="stat-num">700+</div>
                <div className="stat-label">Sites launched</div>
              </div>
              <div>
                <div className="stat-num">5.0★</div>
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