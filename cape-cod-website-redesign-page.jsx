/* global React, ReactDOM */

const WR_HERO_IMG = 'assets/portfolio-hero.jpg';

const SIGNS_ITEMS = [
  {
    icon: '↗',
    label: 'Slow load times',
    body: 'If your site takes more than 3 seconds to load, visitors leave — and Google drops your rankings. Speed is no longer optional.',
  },
  {
    icon: '◇',
    label: 'Not mobile-friendly',
    body: 'Over 60% of Cape Cod searches happen on phones. If your site doesn\'t work well on mobile, you\'re invisible to most of your market.',
  },
  {
    icon: '✦',
    label: 'Looks dated',
    body: 'First impressions happen in under a second. An old-looking site signals that your business is behind — even when it isn\'t.',
  },
  {
    icon: '◎',
    label: 'Poor conversions',
    body: 'Visitors land but don\'t call, don\'t fill out forms, don\'t buy. The design isn\'t guiding them to take action.',
  },
  {
    icon: '✎',
    label: 'Hard to update',
    body: 'If every text change requires calling your old developer, you\'ve lost control of your own business presence.',
  },
  {
    icon: '⚙',
    label: 'Not showing up in search',
    body: 'Old sites often have weak technical SEO — missing meta tags, no schema markup, poor page structure. A rebuild fixes all of it.',
  },
];

const REDESIGN_DIFFERENCES = [
  {
    label: 'Content to migrate',
    body: 'You\'ve built up years of copy, photography, and pages. We audit everything, decide what to keep, and move it cleanly to the new site.',
  },
  {
    label: 'Redirects required',
    body: 'Every URL that changes needs a 301 redirect. Miss one and you lose the SEO equity that page has accumulated over the years.',
  },
  {
    label: 'SEO equity to protect',
    body: 'Your existing rankings are an asset. We map your current URL structure before we touch anything and protect every page that drives traffic.',
  },
  {
    label: 'Brand continuity',
    body: 'A redesign doesn\'t mean starting from zero. We keep what\'s working — your colors, your logo, your voice — and modernize everything else.',
  },
];

const REDESIGN_PROCESS = [
  {
    num: '01',
    label: 'Site Audit',
    body: 'We crawl your existing site, catalog every URL, check page speed, review rankings, and identify what to keep, improve, or retire.',
  },
  {
    num: '02',
    label: 'Define Goals',
    body: 'What do you need the new site to do differently? We get specific about conversion goals, audience, and the problems the redesign has to solve.',
  },
  {
    num: '03',
    label: 'Design',
    body: 'Mockups built from scratch — not from a template. We present for review, refine with your feedback, and finalize before a single line of code is written.',
  },
  {
    num: '04',
    label: 'Build',
    body: 'Custom development against your approved designs. Mobile-first, fast, and built to the technical SEO standards your site needs.',
  },
  {
    num: '05',
    label: 'Migrate Content',
    body: 'Copy, images, testimonials, and existing pages moved cleanly. We edit and improve along the way — not just copy-paste.',
  },
  {
    num: '06',
    label: 'Redirect Setup',
    body: '301 redirects configured for every URL that\'s changing. Google keeps giving your new pages credit for the work your old ones did.',
  },
  {
    num: '07',
    label: 'Launch',
    body: 'We handle the DNS switch, verify all redirects, run a final checklist, and stay available after go-live for anything that comes up.',
  },
];

const PRESERVE_ITEMS = [
  {
    icon: '↗',
    label: 'Google Rankings',
    body: '301 redirects are configured for every URL that changes. Search engines pass ranking credit from your old pages to your new ones.',
  },
  {
    icon: '✎',
    label: 'Existing Copy',
    body: 'Your service descriptions, team bios, and page content come with us — updated and improved, not discarded.',
  },
  {
    icon: '✦',
    label: 'Photography & Media',
    body: 'All existing photos, videos, and media are migrated, optimized, and given proper alt text for accessibility and SEO.',
  },
  {
    icon: '◎',
    label: 'Reviews & Social Proof',
    body: 'Testimonials and Google review embeds carry over. The trust you\'ve built stays front and center on the new site.',
  },
];

function WebsiteRedesignPage() {
  const heroRef = React.useRef(null);

  React.useEffect(() => {
    const img = new Image();
    img.src = WR_HERO_IMG;
    img.onload = () => {
      if (heroRef.current) heroRef.current.classList.add('loaded');
    };
  }, []);

  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="wr-hero">
        <div ref={heroRef} className="wr-hero-img" />
        <div className="wr-hero-text">
          <div className="shell">
            <span className="eyebrow">Services · Design &amp; Build</span>
            <h1 className="wr-hero-hl">Cape Cod Website <em>Redesign.</em></h1>
            <p className="wr-hero-sub">
              Your business has outgrown your old website. We rebuild it from scratch — faster, smarter, and designed for how Cape Cod customers search today.
            </p>
          </div>
        </div>
      </div>

      <SummaryStrip
        summary="We rebuild existing Cape Cod websites from scratch — preserving your SEO equity, migrating your content, and delivering a faster, more effective site at a fixed price."
        points={['Content Migration', 'SEO Preserved', 'Mobile-First', 'Fixed Price']}
      />

      {/* Signs you need a redesign */}
      <section className="wr-section">
        <div className="shell">
          <div className="wr-signs-hd">
            <span className="eyebrow">Is it time?</span>
            <h2 className="wr-section-hl">Signs your website needs a redesign.</h2>
            <p className="wr-section-sub">
              If any of these sound familiar, your current site is costing you business — not just looking old.
            </p>
          </div>
          <div className="wr-signs-grid">
            {SIGNS_ITEMS.map(item => (
              <div key={item.label} className="wr-sign-card">
                <span className="wr-sign-icon">{item.icon}</span>
                <div>
                  <div className="wr-sign-label">{item.label}</div>
                  <p className="wr-sign-body">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Redesign vs. new build */}
      <section className="wr-section wr-section--alt">
        <div className="shell wr-split">
          <div className="wr-split-text">
            <span className="eyebrow">Redesign vs. New Build</span>
            <h2 className="wr-section-hl">
              Different project. <em>Different process.</em>
            </h2>
            <p className="wr-body">
              A redesign isn't just a fresh coat of paint. You're coming in with years of content, an existing URL structure, and real search rankings. We treat those as assets, not obstacles.
            </p>
            <ul className="wr-points">
              {REDESIGN_DIFFERENCES.map(pt => (
                <li key={pt.label} className="wr-point">
                  <span className="wr-point-label">{pt.label}</span>
                  <span className="wr-point-body">{pt.body}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="wr-split-visual">
            <div className="wr-compare-card">
              <div className="wr-compare-row wr-compare-row--head">
                <span>Factor</span>
                <span>New Build</span>
                <span>Redesign</span>
              </div>
              {[
                { factor: 'Content migration', newBuild: 'Start fresh', redesign: 'Migrate existing' },
                { factor: '301 redirects', newBuild: 'Usually none', redesign: 'Every URL mapped' },
                { factor: 'SEO history', newBuild: 'Build from zero', redesign: 'Preserved and built on' },
                { factor: 'Brand continuity', newBuild: 'Fully up to you', redesign: 'Keep what works' },
              ].map(row => (
                <div key={row.factor} className="wr-compare-row">
                  <span className="wr-compare-factor">{row.factor}</span>
                  <span className="wr-compare-new">{row.newBuild}</span>
                  <span className="wr-compare-redesign">{row.redesign}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Redesign process */}
      <section className="wr-process">
        <div className="shell">
          <div className="wr-process-hd">
            <span className="eyebrow">Our process</span>
            <h2 className="wr-process-hl">From audit to launch — every step accounted for.</h2>
          </div>
          <div className="wr-process-steps">
            {REDESIGN_PROCESS.map(step => (
              <div key={step.num} className="wr-process-step">
                <div className="wr-process-num">{step.num}</div>
                <div className="wr-process-info">
                  <div className="wr-process-label">{step.label}</div>
                  <p className="wr-process-body">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="wr-process-more">
            <a href="process.html" className="wr-process-link">See the full process <span className="arrow">→</span></a>
          </div>
        </div>
      </section>

      {/* What we preserve */}
      <section className="wr-section wr-section--alt">
        <div className="shell">
          <div className="wr-preserve-hd">
            <span className="eyebrow">What carries over</span>
            <h2 className="wr-section-hl">We protect what you've already built.</h2>
            <p className="wr-section-sub">
              Years of SEO work, content, and social proof don't start over just because your design is.
            </p>
          </div>
          <div className="wr-preserve-grid">
            {PRESERVE_ITEMS.map(item => (
              <div key={item.label} className="wr-preserve-card">
                <span className="wr-preserve-icon">{item.icon}</span>
                <div className="wr-preserve-label">{item.label}</div>
                <p className="wr-preserve-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach cards */}
      <section className="wr-approaches">
        <div className="shell">
          <div className="wr-approaches-hd">
            <span className="eyebrow">Pick your platform</span>
            <h2 className="wr-approaches-hl">Two ways to rebuild. One standard of quality.</h2>
          </div>
          <div className="wr-approaches-grid">
            <div className="wr-approach-card wr-approach-card--wp">
              <div className="wr-approach-top">
                <span className="wr-approach-icon">◐</span>
                <span className="wr-approach-label">WordPress</span>
              </div>
              <h3 className="wr-approach-hl">Built to be <em>managed by you.</em></h3>
              <p className="wr-approach-body">
                The right choice when your team needs to update content, run an online store, or grow the site over time. Custom theme, lean plugin stack, and an editor experience built for real people.
              </p>
              <ul className="wr-approach-list">
                <li>Client-managed content</li>
                <li>WooCommerce e-commerce</li>
                <li>Scales as your business grows</li>
                <li>40% of the web — for good reason</li>
              </ul>
              <a className="btn btn--primary wr-approach-btn" href="wordpress.html">
                WordPress Redesign <span className="arrow">→</span>
              </a>
            </div>
            <div className="wr-approach-card wr-approach-card--tr">
              <div className="wr-approach-top">
                <span className="wr-approach-icon">◇</span>
                <span className="wr-approach-label">Traditional</span>
              </div>
              <h3 className="wr-approach-hl">Built for <em>speed and simplicity.</em></h3>
              <p className="wr-approach-body">
                Pure HTML, CSS, and JavaScript — hand-coded for businesses that want maximum performance and zero overhead. Nothing to update, nothing to patch, nothing to break.
              </p>
              <ul className="wr-approach-list">
                <li>Loads in under a second</li>
                <li>Zero attack surface</li>
                <li>Own it forever — no platform lock-in</li>
                <li>Precise design control</li>
              </ul>
              <a className="btn btn--ghost wr-approach-btn wr-approach-btn--tr" href="traditional.html">
                Traditional Redesign <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="wr-cta-section">
        <div className="shell">
          <div className="wr-cta">
            <div>
              <h2 className="wr-cta-hl">
                Start your <em>redesign conversation.</em>
              </h2>
              <p className="wr-cta-sub">
                The first hour is free. We'll review your current site together, talk through what's working and what isn't, and give you an honest assessment — no commitment required.
              </p>
              <p className="wr-area-note">
                Serving businesses across all 15 Cape Cod towns.{' '}
                <a href="service-area.html">See our full service area →</a>
              </p>
              <div className="wr-cta-guides">
                <span className="wr-cta-guides-label">Further reading:</span>
                <a href="wp-website-cost.html" className="wr-cta-guide-link">How much does a website cost? →</a>
                <a href="wp-how-long-website.html" className="wr-cta-guide-link">How long does a website take? →</a>
                <a href="website-design.html" className="wr-cta-guide-link">New website design →</a>
              </div>
            </div>
            <div className="wr-cta-actions">
              <a className="btn btn--primary" href="index.html#cta">
                Start your redesign conversation <span className="arrow">→</span>
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

ReactDOM.createRoot(document.getElementById('root')).render(<WebsiteRedesignPage />);
