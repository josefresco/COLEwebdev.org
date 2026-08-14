/* global React, ReactDOM */

const WM_INCLUDES = [
  { icon: '⌘', bg: 'rgba(0,115,170,0.12)', color: '#0073AA', title: 'Core Updates', body: 'WordPress core updated to the latest stable release, tested for conflicts before applying to your live site.' },
  { icon: '◇', bg: 'rgba(14,42,74,0.10)', color: '#0E2A4A', title: 'Plugin & Theme Updates', body: 'All plugins and themes updated and verified. Incompatibilities caught before they break your site.' },
  { icon: '✦', bg: 'rgba(0,115,170,0.12)', color: '#0073AA', title: 'Security Scan', body: 'Malware scan and file integrity check each month. Threats flagged and addressed before they escalate.' },
  { icon: '↻', bg: 'rgba(14,42,74,0.10)', color: '#0E2A4A', title: 'Backup Verification', body: 'A fresh backup taken and confirmed restorable every month. You\'ll know your data is safe before anything else happens.' },
  { icon: '◎', bg: 'rgba(0,115,170,0.12)', color: '#0073AA', title: 'Broken Link Check', body: 'Crawl for 404s, dead links, and missing assets. Your visitors — and search engines — find what they\'re looking for.' },
  { icon: '↗', bg: 'rgba(14,42,74,0.10)', color: '#0E2A4A', title: 'Speed Test', body: 'Page speed benchmarked and light optimizations applied. Core Web Vitals stay healthy month to month.' },
  { icon: '⚙', bg: 'rgba(0,115,170,0.12)', color: '#0073AA', title: 'Console Error Check', body: 'Browser console reviewed for JavaScript errors and asset failures. Problems caught before customers notice them.' },
];

const WHY_STATS = [
  { num: '43%', label: 'of hacked WordPress sites were running outdated software at the time of compromise' },
  { num: '8%', label: 'of WordPress sites are hacked within 12 months of launch — most due to deferred maintenance' },
  { num: '56%', label: 'of WordPress attacks exploit plugin vulnerabilities — exactly what monthly updates prevent' },
];

const RISKS = [
  { icon: '✦', title: 'Security Breaches', body: 'Unpatched plugins are the number-one attack vector. A hacked site can redirect visitors, expose customer data, and take days to clean up — if you catch it at all.' },
  { icon: '◇', title: 'Broken Functionality', body: 'WordPress, plugins, and PHP version mismatches accumulate over time. What worked last year quietly stops working — often at the worst possible moment.' },
  { icon: '⚙', title: 'Plugin Conflicts', body: 'Skipping updates means skipping compatibility fixes. Eventually a forced update cascades into a broken checkout, contact form, or gallery.' },
  { icon: '↗', title: 'SEO Penalties from Downtime', body: 'Search engines demote sites that go down or serve errors. A single security incident can erase months of ranking progress.' },
];

function WPMaintenancePage() {
  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="wm-hero">
        <div className="wm-hero-bg" aria-hidden="true" />
        <div className="wm-hero-content">
          <div className="shell">
            <span className="eyebrow wm-eyebrow">Services · Care &amp; Support</span>
            <h1 className="wm-hero-hl">
              Cape Cod WordPress <em>Maintenance.</em>
            </h1>
            <p className="wm-hero-sub">
              Monthly WordPress maintenance for Cape Cod businesses — updates, backups, security, and a real person to call when something breaks.
            </p>
            <div className="wm-hero-actions">
              <a className="btn btn--accent" href="index.html#cta">
                Start your maintenance plan <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost wm-ghost" href="tel:5084132043">
                508.413.2043
              </a>
            </div>
          </div>
        </div>
      </div>

      <SummaryStrip
        summary="Monthly WordPress maintenance keeping Cape Cod sites updated, backed up, secure, and fast — with a local team you can actually reach."
        points={['Monthly Updates', 'Daily Backups', 'Security Monitoring', 'Priority Support']}
      />

      <ServiceSideNav group="care" current="wordpress-maintenance.html" />

      {/* What's included each month */}
      <section className="wm-includes">
        <div className="shell">
          <div className="wm-includes-hd">
            <span className="eyebrow">What's included each month</span>
            <h2 className="wm-includes-hl">Seven things we handle on every maintenance visit.</h2>
          </div>
          <div className="wm-includes-grid">
            {WM_INCLUDES.map(item => (
              <div key={item.title} className="wm-inc-card">
                <div className="wm-inc-icon" style={{ background: item.bg, color: item.color }}>{item.icon}</div>
                <div className="wm-inc-title">{item.title}</div>
                <div className="wm-inc-body">{item.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why maintenance matters */}
      <section className="wm-why">
        <div className="shell wm-why-grid">
          <div>
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.55)' }}>Why it matters</span>
            <h2 className="wm-why-hl">An unmaintained WordPress site is a liability waiting to happen.</h2>
            <p className="wm-why-p">
              WordPress powers 43% of the web, which makes it the most-targeted platform on the internet. The attacks are automated and relentless — outdated plugins don't get a grace period.
            </p>
            <p className="wm-why-p">
              Monthly maintenance isn't a luxury reserved for large companies. It's the responsible baseline for any site that accepts contact forms, processes payments, or shows up in search results.
            </p>
            <a className="btn btn--accent" href="index.html#cta">
              Start your maintenance plan <span className="arrow">→</span>
            </a>
          </div>
          <div className="wm-why-stats">
            {WHY_STATS.map(s => (
              <div key={s.num} className="wm-why-stat">
                <span className="wm-why-stat-num">{s.num}</span>
                <span className="wm-why-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What happens without maintenance */}
      <section className="wm-risks">
        <div className="shell">
          <div className="wm-risks-hd">
            <span className="eyebrow">The cost of skipping it</span>
            <h2 className="wm-risks-hl">What happens when maintenance gets deferred.</h2>
            <p className="wm-risks-sub">These aren't edge cases. They're the four most common outcomes we clean up for businesses who let maintenance lapse.</p>
          </div>
          <div className="wm-risks-grid">
            {RISKS.map(r => (
              <div key={r.title} className="wm-risk-card">
                <span className="wm-risk-icon">{r.icon}</span>
                <div className="wm-risk-title">{r.title}</div>
                <div className="wm-risk-body">{r.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Host-agnostic note */}
      <section className="wm-note">
        <div className="shell">
          <div className="wm-note-inner">
            <div className="wm-note-glyph" aria-hidden="true">◐</div>
            <div className="wm-note-text">
              <div className="wm-note-title">Works with any host — not just ours.</div>
              <div className="wm-note-body">
                Our WordPress maintenance service isn't tied to our hosting infrastructure. If you're already with WP Engine, SiteGround, Bluehost, GoDaddy, or anyone else, we can still handle your monthly maintenance. You keep your host; we keep your site healthy. This is the key difference between standalone maintenance and a COLEwebdev Hosting + Care Plan — maintenance is available wherever your site lives.
              </div>
              <a href="hosting.html" className="wm-note-link">Interested in managed hosting too? See our Hosting + Care Plans →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="wm-cta">
        <div className="shell wm-cta-inner">
          <div>
            <h2 className="wm-cta-hl">Ready to stop worrying about your site?</h2>
            <p className="wm-cta-sub">No long-term contracts. Cancel anytime. We serve businesses across all 15 Cape Cod towns.</p>
            <p className="wm-area-note">
              <a href="service-area.html">See our full service area →</a>
            </p>
            <div className="wm-related">
              <span className="wm-related-label">Related:</span>
              <a href="hosting.html" className="wm-related-link">Hosting + Care Plans →</a>
              <a href="updates.html" className="wm-related-link">Updates &amp; Maintenance →</a>
              <a href="wp-wordpress-maintenance.html" className="wm-related-link">What Is WordPress Maintenance? (Guide) →</a>
            </div>
          </div>
          <a className="btn btn--accent" href="index.html#cta">
            Start your maintenance plan <span className="arrow">→</span>
          </a>
        </div>
      </section>

      <NewsletterBanner />
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<WPMaintenancePage />);
