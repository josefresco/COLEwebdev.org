/* global React, ReactDOM */

const WP_WHAT_CARDS = [
  {
    icon: '◇',
    bg: 'rgba(0,115,170,0.12)',
    color: '#0073AA',
    title: 'Business & Service Sites',
    body: 'Local businesses, contractors, healthcare practices, and nonprofits. Built to be easy to manage from day one — your team can update content without touching a developer.',
  },
  {
    icon: '◎',
    bg: 'rgba(123,192,67,0.14)',
    color: '#5DA02E',
    title: 'E-Commerce Stores',
    body: 'WooCommerce storefronts built for real inventory, real shipping logic, and real customers. We set up products, payments, and the backend so you can focus on selling.',
  },
  {
    icon: '↻',
    bg: 'rgba(0,115,170,0.12)',
    color: '#0073AA',
    title: 'Nonprofit & Community',
    body: 'Donation pages, event calendars, member portals, and resource libraries. WordPress handles the complexity; your visitors see something clean and welcoming.',
  },
  {
    icon: '✦',
    bg: 'rgba(123,192,67,0.14)',
    color: '#5DA02E',
    title: 'Portfolio & Media',
    body: 'Galleries, case studies, project archives, and press rooms. WordPress gives editors full control to add and organize content without asking IT for help.',
  },
  {
    icon: '⌘',
    bg: 'rgba(0,115,170,0.12)',
    color: '#0073AA',
    title: 'Membership Sites',
    body: 'Gated content, member directories, and tiered access built with purpose-fit plugins — not kludged together from generic page builders.',
  },
  {
    icon: '↗',
    bg: 'rgba(123,192,67,0.14)',
    color: '#5DA02E',
    title: 'Redesigns & Migrations',
    body: 'Bring over your content, keep your SEO equity, and start fresh with a clean theme and a lean plugin stack. We audit what you have and rebuild what actually matters.',
  },
];

const WP_PORTFOLIO = [
  'Dolphin Fleet Whale Watch',
  'Wellfleet Chamber of Commerce',
  'Center for Coastal Studies',
  'Seamen\'s Bank',
  'Cape Cod Foundation',
  'Cape Cod Aquatics',
  'Cape Cod Chamber Music Festival',
  'Eastham Public Library',
  'APCC',
  'Silver Oak Wealth Advisors',
  'Carver Public Schools',
  'Bird Watchers General Store',
  'Idle Times Bike Shop',
  'Friendly Fisherman',
  'Nauset Beach Inn',
  'Jobi Pottery',
  'Cuffy\'s of Cape Cod',
  'Long Point Wealth Management',
  'Wellfleet Food Pantry',
  'The Marshside',
  'Navajo Nation',
  'Cape Mediation',
  'Ryley Construction',
  'Sampson Fund',
];

const WP_ADVANTAGES = [
  {
    n: '01',
    title: 'You own the content',
    body: 'WordPress gives non-technical editors a real interface for managing pages, posts, images, and menus — no developer required for routine updates.',
  },
  {
    n: '02',
    title: 'Scales with you',
    body: 'Start with five pages, grow to five hundred. WordPress handles e-commerce, events, memberships, and multi-author publishing without switching platforms.',
  },
  {
    n: '03',
    title: 'Built for search',
    body: 'Proper heading structure, schema markup, XML sitemaps, and fast load times baked in from the start. We build sites Google can read and rank.',
  },
  {
    n: '04',
    title: 'Done right, stays right',
    body: 'We use a lean plugin stack and custom themes — not page builders that bloat and break. Sites we launch in 2020 still run clean in 2026.',
  },
];

function WordPressPage() {
  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="wp-hero">
        <div className="wp-hero-bg" aria-hidden="true" />
        <div className="wp-hero-content">
          <div className="shell">
            <span className="eyebrow wp-eyebrow">Services · WordPress Website Design</span>
            <h1 className="wp-hero-hl">
              WordPress, built <em>the right way.</em>
            </h1>
            <p className="wp-hero-sub">
              The world's most powerful CMS — configured lean, designed custom, and handed off so you can actually run it. No bloated themes, no plugin overload, no "it was working yesterday."
            </p>
            <div className="wp-hero-actions">
              <a className="btn btn--accent" href="contact.html">
                Start a project <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost wp-ghost" href="tel:5084132043">
                508.413.2043
              </a>
            </div>
            <div className="wp-hero-tags">
              <span className="wp-hero-tag">WordPress</span>
              <span className="wp-hero-tag">WooCommerce</span>
              <span className="wp-hero-tag">Gutenberg</span>
              <span className="wp-hero-tag">Custom Themes</span>
              <span className="wp-hero-tag">Plugin-Lite</span>
              <span className="wp-hero-tag">Client-Managed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Why WordPress */}
      <section className="wp-why">
        <div className="shell">
          <div className="wp-why-grid">
            <div>
              <span className="eyebrow">Why WordPress</span>
              <h2 className="wp-why-hl">
                The CMS that powers <em>40% of the web</em> — for good reason.
              </h2>
              <p className="wp-why-p">
                WordPress isn't right for every project — but for businesses that need to manage their own content, handle e-commerce, or grow into a complex site over time, nothing comes close. It's flexible, battle-tested, and the talent pool to support it is deep.
              </p>
              <p className="wp-why-p">
                The problem isn't WordPress — it's how most agencies implement it. We build with custom themes, a deliberately short plugin list, and editor experiences designed for real people, not developers. You get all the power with none of the complexity.
              </p>
              <a className="btn btn--primary" href="portfolio.html">
                See our work <span className="arrow">→</span>
              </a>
            </div>

            {/* Dashboard mockup */}
            <div className="wp-dash" aria-hidden="true">
              <div className="wp-dash-bar">
                <div className="wp-dash-wp-logo">W</div>
                <span className="wp-dash-site-name">Your Business · WordPress Admin</span>
                <span className="wp-dash-pill">LIVE</span>
              </div>
              <div className="wp-dash-body">
                <div className="wp-dash-sidebar">
                  <div className="wp-dash-menu-item active">
                    <span className="wp-dash-menu-dot" />Pages
                  </div>
                  <div className="wp-dash-menu-item">
                    <span className="wp-dash-menu-dot" />Posts
                  </div>
                  <div className="wp-dash-menu-item">
                    <span className="wp-dash-menu-dot" />Media
                  </div>
                  <div className="wp-dash-menu-item">
                    <span className="wp-dash-menu-dot" />Products
                  </div>
                  <div className="wp-dash-menu-item">
                    <span className="wp-dash-menu-dot" />Appearance
                  </div>
                  <div className="wp-dash-menu-item">
                    <span className="wp-dash-menu-dot" />Settings
                  </div>
                </div>
                <div className="wp-dash-content">
                  <div className="wp-dash-row accent" />
                  <div className="wp-dash-row w-full" />
                  <div className="wp-dash-row w-3q" />
                  <div className="wp-dash-row w-full" />
                  <div className="wp-dash-row w-half" />
                  <div className="wp-dash-row w-2q" />
                  <div className="wp-dash-btn">Update Page →</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="wp-what">
        <div className="shell">
          <div className="wp-what-hd">
            <span className="eyebrow">What we build</span>
            <h2 className="wp-what-hl">The right fit for your project.</h2>
          </div>
          <div className="wp-what-grid">
            {WP_WHAT_CARDS.map(card => (
              <div key={card.title} className="wp-what-card">
                <div className="wp-what-icon" style={{ background: card.bg, color: card.color }}>
                  {card.icon}
                </div>
                <div className="wp-what-title">{card.title}</div>
                <div className="wp-what-body">{card.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="wp-portfolio">
        <div className="shell">
          <div className="wp-portfolio-hd">
            <span className="eyebrow">WordPress portfolio</span>
            <h2 className="wp-portfolio-hl">A few of the sites we've built.</h2>
          </div>
          <div className="wp-portfolio-grid">
            {WP_PORTFOLIO.map(name => (
              <div key={name} className="wp-portfolio-item">
                <div className="wp-portfolio-dot" aria-hidden="true" />
                <div className="wp-portfolio-name">{name}</div>
              </div>
            ))}
          </div>
          <div className="wp-portfolio-footer">
            <a className="btn btn--ghost" href="portfolio.html">
              View full portfolio <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="wp-adv">
        <div className="shell">
          <div className="wp-adv-hd">
            <span className="eyebrow">Advantages</span>
            <h2 className="wp-adv-hl">What you get when it's done right.</h2>
          </div>
          <div className="wp-adv-grid">
            {WP_ADVANTAGES.map(adv => (
              <div key={adv.n} className="wp-adv-card">
                <div className="wp-adv-num">{adv.n}</div>
                <div className="wp-adv-title">{adv.title}</div>
                <div className="wp-adv-body">{adv.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="wp-testi">
        <div className="shell">
          <div className="wp-testi-inner">
            <span className="wp-quote-mark" aria-hidden="true">"</span>
            <blockquote className="wp-quote">
              "COLEwebdev did an outstanding job designing our website and hosts it as well. As our business grows they continue to be a responsive and reliable partner."
            </blockquote>
            <div className="wp-testi-meta">
              <div>
                <div className="wp-testi-name">Kegan Berner</div>
                <div className="wp-testi-role">Oyster River Boatyard</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional nudge */}
      <section className="wp-trad-nudge">
        <div className="shell">
          <div className="wp-trad-nudge-inner">
            <div className="wp-trad-nudge-left">
              <span className="wp-trad-nudge-tag">Also available</span>
              <span className="wp-trad-nudge-text">
                Don't need a CMS? We also build hand-coded HTML/CSS sites — nothing to update, nothing to hack, loads in under a second.
              </span>
            </div>
            <a className="btn btn--ghost btn--sm wp-trad-nudge-link" href="traditional.html">
              Traditional Web Design <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="wp-cta-section">
        <div className="shell">
          <div className="wp-cta">
            <div>
              <h2 className="wp-cta-hl">
                Ready for a WordPress site that <em>actually works?</em>
              </h2>
              <p className="wp-cta-sub">
                The first hour is free. No commitment, no sales pitch — a real conversation about what you need, with people who've been building WordPress sites since version 1.0.
              </p>
            </div>
            <div className="wp-cta-actions">
              <a className="btn btn--accent" href="contact.html">
                Start a project <span className="arrow">→</span>
              </a>
              <a
                className="btn btn--ghost"
                href="tel:5084132043"
                style={{ color: 'rgba(255,255,255,0.7)', borderColor: 'rgba(255,255,255,0.2)' }}
              >
                508.413.2043
              </a>
            </div>
          </div>
        </div>
      </section>

      <NewsletterBanner />
      <Footer />
    </React.Fragment>
  );
}

const wpRoot = ReactDOM.createRoot(document.getElementById('root'));
wpRoot.render(<WordPressPage />);
