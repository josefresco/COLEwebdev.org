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

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);

  const path = window.location.pathname;
  const on = (page) => path.endsWith(page) ? ' is-active' : '';
  const onHome = (path === '/' || path === '' || path.endsWith('index.html')) ? ' is-active' : '';

  const close = () => { setMenuOpen(false); setServicesOpen(false); };

  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
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
            <a className={'nav-link' + (on('about.html') || on('process.html'))} href="about.html">About Us <span className="caret">▾</span></a>
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
            </div>
          </div>
          <a className={'nav-link' + on('news.html')} href="news.html">News</a>
          <a className={'nav-link' + on('contact.html')} href="contact.html">Contact</a>
        </div>
        <div className="nav-cta">
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
    </header>);
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
        <h3>From idea to <i style={{ color: '#FFC79A' }}>working app</i><br />in two weeks.</h3>
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