/* global React, ReactDOM */

const WPH_FEATURES = [
  {
    icon: '↗',
    bg: 'rgba(242,107,31,0.12)',
    color: '#F26B1F',
    title: 'WordPress-Optimized Infrastructure',
    body: 'Servers purpose-built for WordPress — not shared with e-commerce platforms, forums, or generic apps. Every layer of the stack is tuned for WordPress performance from the ground up.',
  },
  {
    icon: '◎',
    bg: 'rgba(14,42,74,0.10)',
    color: '#0E2A4A',
    title: 'Global CDN Included',
    body: 'Your images, CSS, and scripts are delivered from the server closest to your visitor — not from a single data center. Fast in Falmouth. Fast in Phoenix. Fast everywhere.',
  },
  {
    icon: '◧',
    bg: 'rgba(123,192,67,0.14)',
    color: '#5DA02E',
    title: 'Staging Environment',
    body: 'Every site gets a private staging copy. We test updates, design changes, and new features there before anything touches your live site. No surprises for your customers.',
  },
  {
    icon: '↻',
    bg: 'rgba(14,42,74,0.10)',
    color: '#0E2A4A',
    title: 'Automated Daily Backups',
    body: 'Your site is backed up every day and stored off-site. Point-in-time restore means we can roll back to any clean version — not just the most recent one.',
  },
  {
    icon: '✦',
    bg: 'rgba(242,107,31,0.12)',
    color: '#F26B1F',
    title: 'Enterprise-Grade Security',
    body: 'DDoS mitigation, Web Application Firewall, malware scanning, and intrusion detection run continuously. Threats are blocked before they reach WordPress.',
  },
  {
    icon: '◇',
    bg: 'rgba(123,192,67,0.14)',
    color: '#5DA02E',
    title: 'Server-Level Caching',
    body: 'Page caching handled at the server layer — not by a plugin that can conflict with your theme. Pages load in milliseconds even under traffic spikes.',
  },
  {
    icon: '⬡',
    bg: 'rgba(14,42,74,0.10)',
    color: '#0E2A4A',
    title: 'Modern PHP & Auto-Scaling',
    body: 'Always running the latest stable PHP version for maximum speed and security. Infrastructure that scales automatically so a surge in traffic doesn\'t take your site offline.',
  },
  {
    icon: '◐',
    bg: 'rgba(123,192,67,0.14)',
    color: '#5DA02E',
    title: 'Free SSL on Every Site',
    body: 'SSL certificates provisioned and renewed automatically — no renewal reminders, no expired cert warnings, no configuration headaches. HTTPS out of the box.',
  },
];

const WPH_SPECS = [
  { label: 'Uptime SLA', value: '99.95%' },
  { label: 'Backups retained', value: '30 days' },
  { label: 'CDN locations', value: 'Global' },
  { label: 'PHP versions', value: '8.x' },
  { label: 'SSL renewals', value: 'Automatic' },
  { label: 'Staging sites', value: 'Included' },
];

const WPH_VS = [
  {
    label: 'Shared hosting',
    items: [
      'Your site shares a server with thousands of others',
      'One bad neighbor can slow or crash your site',
      'No staging environment',
      'Plugin-level caching only',
      'Manual SSL setup and renewal',
    ],
    bad: true,
  },
  {
    label: 'COLEwebdev hosting',
    items: [
      'Isolated WordPress environment, dedicated resources',
      'Performance that isn\'t affected by other sites',
      'Full staging site included on every plan',
      'Server-level caching built in',
      'SSL provisioned and renewed automatically',
    ],
    bad: false,
  },
];

function WPHostingPage() {
  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="wph-hero">
        <div className="wph-hero-bg" aria-hidden="true" />
        <div className="wph-hero-content">
          <div className="shell">
            <span className="eyebrow wph-eyebrow">Services · WordPress Hosting</span>
            <h1 className="wph-hero-hl">
              Hosting built for <em>WordPress.</em>
            </h1>
            <p className="wph-hero-sub">
              Not shared hosting with a WordPress installer bolted on. Purpose-built infrastructure — isolated environments, global CDN, staging, and enterprise security — managed entirely by us.
            </p>
            <div className="wph-hero-actions">
              <a className="btn btn--accent" href="quote.html">
                Ask about hosting <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost wph-ghost" href="hosting.html">
                See Care Plans <span className="arrow">→</span>
              </a>
            </div>
            <div className="wph-spec-strip">
              {WPH_SPECS.map(function(s) {
                return (
                  <div key={s.label} className="wph-spec">
                    <span className="wph-spec-val">{s.value}</span>
                    <span className="wph-spec-label">{s.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <SummaryStrip
        summary="Purpose-built WordPress infrastructure — isolated environments, global CDN, daily backups, staging, and enterprise security. Not shared hosting with a WordPress installer bolted on."
        points={['Isolated Hosting', 'Global CDN', 'Staging Included', 'Daily Backups']}
      />

      {/* Features grid */}
      <section className="wph-features">
        <div className="shell">
          <div className="wph-features-hd">
            <span className="eyebrow">What's included</span>
            <h2 className="wph-features-hl">Everything your WordPress site needs to run well.</h2>
            <p className="wph-features-sub">
              Every site we host gets the full stack — no add-ons, no tiers, no features gated behind an upgrade.
            </p>
          </div>
          <div className="wph-features-grid">
            {WPH_FEATURES.map(function(f) {
              return (
                <div key={f.title} className="wph-feat-card">
                  <div className="wph-feat-icon" style={{ background: f.bg, color: f.color }}>{f.icon}</div>
                  <div className="wph-feat-title">{f.title}</div>
                  <div className="wph-feat-body">{f.body}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why it matters — shared vs premium */}
      <section className="wph-vs">
        <div className="shell">
          <div className="wph-vs-hd">
            <span className="eyebrow">Why it matters</span>
            <h2 className="wph-vs-hl">There's a real difference between cheap hosting and WordPress hosting.</h2>
            <p className="wph-vs-sub">
              Most shared hosts are built to cram as many sites as possible onto a single server. That works fine until it doesn't — then you're on hold with a support queue while your site is down.
            </p>
          </div>
          <div className="wph-vs-grid">
            {WPH_VS.map(function(col) {
              return (
                <div key={col.label} className={'wph-vs-col' + (col.bad ? ' is-bad' : ' is-good')}>
                  <div className="wph-vs-col-label">{col.label}</div>
                  <ul className="wph-vs-list">
                    {col.items.map(function(item) {
                      return (
                        <li key={item} className="wph-vs-item">
                          <span className="wph-vs-icon">{col.bad ? '✕' : '✓'}</span>
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Staging callout */}
      <section className="wph-staging">
        <div className="shell wph-staging-inner">
          <div className="wph-staging-text">
            <span className="eyebrow wph-staging-eyebrow">Staging environments</span>
            <h2 className="wph-staging-hl">Test everything before it goes live.</h2>
            <p className="wph-staging-body">
              Every site we host comes with a private staging environment — a live copy of your site where we can test plugin updates, theme changes, or new features without touching what your customers see.
            </p>
            <p className="wph-staging-body">
              When we're satisfied, we push the changes to production. One click, zero downtime, no crossed fingers.
            </p>
          </div>
          <div className="wph-staging-card">
            <div className="wph-stage-item wph-stage-item--live">
              <span className="wph-stage-dot" />
              <span className="wph-stage-label">Live site</span>
              <span className="wph-stage-url">yourcapecodbusiness.com</span>
            </div>
            <div className="wph-stage-arrow">↕</div>
            <div className="wph-stage-item wph-stage-item--staging">
              <span className="wph-stage-dot wph-stage-dot--staging" />
              <span className="wph-stage-label">Staging</span>
              <span className="wph-stage-url">staging.yourcapecodbusiness.com</span>
            </div>
            <p className="wph-stage-note">Changes tested here first, then pushed live when ready.</p>
          </div>
        </div>
      </section>

      {/* Care plans tie-in */}
      <section className="wph-care">
        <div className="shell wph-care-inner">
          <div>
            <span className="eyebrow">Hosting + Care Plans</span>
            <h2 className="wph-care-hl">Hosting is the foundation. Care Plans keep everything running.</h2>
            <p className="wph-care-body">
              Great hosting handles the infrastructure — servers, CDN, backups, uptime. Our Care Plans layer on top: monthly WordPress updates, security monitoring, priority support, and a real person watching over your site.
            </p>
            <p className="wph-care-body">
              Most of our clients combine both. It's the difference between a site that's technically hosted and a site that's actively maintained.
            </p>
            <a className="btn btn--primary" href="hosting.html">
              See Care Plans <span className="arrow">→</span>
            </a>
          </div>
          <div className="wph-care-checklist">
            <div className="wph-care-col">
              <div className="wph-care-col-label">Hosting includes</div>
              {['Isolated WordPress environment','Global CDN','Daily automated backups','Staging site','SSL certificates','DDoS + WAF protection','Server-level caching','99.95% uptime SLA'].map(function(item) {
                return <div key={item} className="wph-care-item"><span className="wph-care-check wph-care-check--blue">✓</span>{item}</div>;
              })}
            </div>
            <div className="wph-care-col">
              <div className="wph-care-col-label">Care Plans add</div>
              {['WordPress core & plugin updates','Monthly security scans','Uptime monitoring & alerts','Priority support queue','Monthly plain-English report','Forms & link testing','Speed optimization reviews','A real person to call'].map(function(item) {
                return <div key={item} className="wph-care-item"><span className="wph-care-check wph-care-check--green">✓</span>{item}</div>;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Speed optimization tie-in */}
      <section className="wph-speed">
        <div className="shell wph-speed-inner">
          <div className="wph-speed-badge">↗</div>
          <div className="wph-speed-text">
            <span className="eyebrow wph-speed-eyebrow">Also available</span>
            <h2 className="wph-speed-hl">Need a faster WordPress site?</h2>
            <p className="wph-speed-body">
              Great hosting is the foundation — but if your site is still slow after moving to proper infrastructure, that's a code problem, not a server problem. Our WordPress Speed Optimization service digs into Core Web Vitals, image compression, plugin bloat, and database cleanup to get your PageSpeed score where it should be.
            </p>
            <a className="btn btn--primary" href="wordpress-speed.html">
              WordPress Speed Optimization <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="wph-cta">
        <div className="shell wph-cta-inner">
          <div>
            <h2 className="wph-cta-hl">Ready to move your site to hosting that actually works?</h2>
            <p className="wph-cta-sub">We handle the migration. No downtime, no DNS headaches, no lost content.</p>
            <div className="wph-cta-related">
              <span className="wph-cta-related-label">Related:</span>
              <a href="hosting.html" className="wph-cta-related-link">Care Plans →</a>
              <a href="wordpress.html" className="wph-cta-related-link">WordPress Design →</a>
              <a href="wp-wordpress-vs-squarespace.html" className="wph-cta-related-link">WordPress vs. Squarespace →</a>
            </div>
          </div>
          <div className="wph-cta-actions">
            <a className="btn btn--accent" href="quote.html">
              Request a Quote <span className="arrow">→</span>
            </a>
            <a className="btn btn--ghost wph-cta-ghost" href="tel:5084132043">
              508.413.2043
            </a>
          </div>
        </div>
      </section>

      <NewsletterBanner />
      <Footer />
    </React.Fragment>
  );
}

const wphRoot = ReactDOM.createRoot(document.getElementById('root'));
wphRoot.render(<WPHostingPage />);
