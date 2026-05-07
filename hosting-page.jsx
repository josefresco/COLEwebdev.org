/* global React, ReactDOM */

const HC_INCLUDES = [
  { icon: '◇', bg: 'rgba(123,192,67,0.14)', color: '#5DA02E', title: 'Managed Hosting', body: 'Fast, secure WordPress hosting on servers tuned for performance. We handle the infrastructure so you never have to think about it.' },
  { icon: '↻', bg: 'rgba(14,42,74,0.10)', color: '#0E2A4A', title: 'Daily Backups', body: 'Automated daily backups stored off-site. If something ever goes wrong, we restore your site to a clean state — fast.' },
  { icon: '✦', bg: 'rgba(242,107,31,0.14)', color: '#F26B1F', title: 'Security Monitoring', body: 'Malware scanning, firewall rules, and login protection running 24/7. We catch threats before they become problems.' },
  { icon: '⌘', bg: 'rgba(123,192,67,0.14)', color: '#5DA02E', title: 'WordPress Updates', body: 'Core, theme, and plugin updates applied and tested each month. No more "update available" banners you\'re afraid to click.' },
  { icon: '◎', bg: 'rgba(14,42,74,0.10)', color: '#0E2A4A', title: 'Uptime Monitoring', body: 'We\'re alerted the moment your site goes down — usually before you notice. Most issues are resolved before customers see them.' },
  { icon: '↗', bg: 'rgba(242,107,31,0.14)', color: '#F26B1F', title: 'Speed Optimization', body: 'Image compression, caching, and CDN delivery keep your Core Web Vitals green and your pages loading fast on any device.' },
  { icon: '◐', bg: 'rgba(123,192,67,0.14)', color: '#5DA02E', title: 'Monthly Reports', body: 'A plain-English email each month covering uptime, updates applied, and anything we noticed. No jargon, no fluff.' },
  { icon: '⚡', bg: 'rgba(14,42,74,0.10)', color: '#0E2A4A', title: 'Priority Support', body: 'A real person to email when something looks off. Care Plan clients jump the queue — you\'re not waiting behind new project work.' },
];

const PLANS = [
  {
    name: 'Bi-Annual',
    freq: 'Twice a year',
    desc: 'A twice-yearly checkup for stable sites that don\'t change often.',
    features: [
      'Full site and navigation review',
      'Core, theme, and plugin updates',
      'Backup verification',
      'Security scan and report',
      'Performance check',
      'Written summary after each visit',
    ],
  },
  {
    name: 'Quarterly',
    freq: 'Four times a year',
    featured: true,
    desc: 'Our most popular plan — consistent maintenance with support between scheduled visits.',
    features: [
      'Everything in Bi-Annual',
      'Page, form, and link testing',
      'Content accuracy review',
      'Uptime and speed monitoring',
      'Analytics summary',
      'Priority email support',
    ],
  },
  {
    name: 'Monthly',
    freq: 'Every month',
    desc: 'Hands-on, ongoing care for businesses that rely on their site every day.',
    features: [
      'Everything in Quarterly',
      'Monthly written report',
      'SEO health monitoring',
      'E-commerce review (if applicable)',
      'Phone + email support',
      'Strategy check-in each visit',
    ],
  },
];

const WHY_STATS = [
  { num: '43%', label: 'of WordPress sites using outdated software have been compromised at some point' },
  { num: '88%', label: 'of users won\'t return to a site after a bad experience caused by downtime or slow load times' },
  { num: '< 1hr', label: 'average response time for Care Plan clients reporting an issue' },
];

function HostingPage() {
  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="hc-hero">
        <div className="hc-hero-bg" aria-hidden="true" />
        <div className="hc-hero-content">
          <div className="shell">
            <span className="eyebrow hc-eyebrow">Services · Hosting + Care Plans</span>
            <h1 className="hc-hero-hl">
              Your site, <em>taken care of.</em>
            </h1>
            <p className="hc-hero-sub">
              Managed WordPress hosting, daily backups, security monitoring, and a real person to call — so you can run your business without worrying about your website.
            </p>
            <div className="hc-hero-actions">
              <a className="btn btn--accent" href="contact.html">
                Ask about Care Plans <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost hc-ghost" href="tel:5084132043">
                508.413.2043
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* What's included */}
      <section className="hc-includes">
        <div className="shell">
          <div className="hc-includes-hd">
            <span className="eyebrow">What's covered</span>
            <h2 className="hc-includes-hl">Eight things we handle so you don't have to.</h2>
          </div>
          <div className="hc-includes-grid">
            {HC_INCLUDES.map(item => (
              <div key={item.title} className="hc-inc-card">
                <div className="hc-inc-icon" style={{ background: item.bg, color: item.color }}>{item.icon}</div>
                <div className="hc-inc-title">{item.title}</div>
                <div className="hc-inc-body">{item.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="hc-plans">
        <div className="shell">
          <div className="hc-plans-hd">
            <span className="eyebrow">Care Plans</span>
            <h2 className="hc-plans-hl">Pick the level of care that fits.</h2>
            <p className="hc-plans-sub">Choose the frequency that fits your site and your schedule. No long-term contracts.</p>
          </div>
          <div className="hc-plans-grid">
            {PLANS.map(plan => (
              <div key={plan.name} className={`hc-plan${plan.featured ? ' is-featured' : ''}`}>
                <div className="hc-plan-head">
                  {plan.featured && <div className="hc-plan-badge">Most popular</div>}
                  <div className="hc-plan-name">{plan.name}</div>
                  <div className="hc-plan-freq">{plan.freq}</div>
                  <div className="hc-plan-desc">{plan.desc}</div>
                </div>
                <div className="hc-plan-body">
                  <ul className="hc-plan-features">
                    {plan.features.map(f => (
                      <li key={f} className="hc-plan-feature">
                        <span className="hc-plan-check">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a className={`btn ${plan.featured ? 'btn--accent' : 'btn--ghost'}`} href="contact.html">
                    Get started <span className="arrow">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why care */}
      <section className="hc-why">
        <div className="shell hc-why-grid">
          <div>
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.55)' }}>Why it matters</span>
            <h2 className="hc-why-hl">A neglected site is a liability, not just an annoyance.</h2>
            <p className="hc-why-p">
              Outdated plugins are the number-one vector for WordPress hacks. A compromised site can redirect your visitors, tank your search rankings, and take days to clean up — if you catch it at all.
            </p>
            <p className="hc-why-p">
              Our Care Plans keep your site updated, backed up, and monitored so that the worst-case scenario stays hypothetical.
            </p>
            <a className="btn btn--accent" href="contact.html">
              Start a Care Plan <span className="arrow">→</span>
            </a>
          </div>
          <div className="hc-why-stats">
            {WHY_STATS.map(s => (
              <div key={s.num} className="hc-why-stat">
                <span className="hc-why-stat-num">{s.num}</span>
                <span className="hc-why-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hc-cta">
        <div className="shell hc-cta-inner">
          <div>
            <h2 className="hc-cta-hl">Already have a site with us?</h2>
            <p className="hc-cta-sub">Adding a Care Plan to an existing project takes one conversation.</p>
          </div>
          <a className="btn btn--accent" href="contact.html">
            Talk to us <span className="arrow">→</span>
          </a>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}

const hcRoot = ReactDOM.createRoot(document.getElementById('root'));
hcRoot.render(<HostingPage />);
