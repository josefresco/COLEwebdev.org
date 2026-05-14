/* global React, ReactDOM */

const SERVICES = [
  {
    glyph: '↗',
    color: 'green',
    title: 'SEO',
    desc: 'Rank in Google for the searches your customers are actually running — local, seasonal, and intent-driven.',
  },
  {
    glyph: '◎',
    color: 'orange',
    title: 'PPC / Google Ads',
    desc: 'Paid search campaigns built for measurable return. Every dollar tracked, every click accounted for.',
  },
  {
    glyph: '✦',
    color: 'navy',
    title: 'Social Media',
    desc: 'Platform presence that builds real audiences — content strategy, scheduling, and paid social where it makes sense.',
  },
  {
    glyph: '◇',
    color: 'green',
    title: 'Design',
    desc: 'Creative assets that look right and work hard — ads, graphics, and campaign visuals built to convert.',
  },
  {
    glyph: '⌘',
    color: 'orange',
    title: 'Landing Pages',
    desc: 'Purpose-built pages tied to specific campaigns. Fast, focused, and optimized for a single action.',
  },
  {
    glyph: '◐',
    color: 'navy',
    title: 'Consulting',
    desc: 'Marketing strategy and direction without the agency overhead. We help you prioritize, plan, and stop wasting budget.',
  },
  {
    glyph: '⚙',
    color: 'green',
    title: 'Analytics',
    desc: 'Know exactly what is working and what is not. We set up reporting that gives you real answers, not vanity metrics.',
  },
  {
    glyph: '◇',
    color: 'orange',
    title: 'Lead Capture',
    desc: 'Turn traffic into leads and leads into customers. Forms, funnels, and conversion optimization built into your site.',
  },
  {
    glyph: '↻',
    color: 'navy',
    title: 'Tracking',
    desc: 'Full attribution — GA4, Google Tag Manager, Meta Pixel, conversion events — so every campaign has a source.',
  },
];

const GLYPHCOLOR = {
  green: { bg: 'rgba(123,192,67,0.14)', color: '#5DA02E' },
  orange: { bg: 'rgba(242,107,31,0.14)', color: '#D05A12' },
  navy: { bg: 'rgba(14,42,74,0.10)', color: '#0E2A4A' },
};

const REASONS = [
  { n: '01', title: 'Local market knowledge', body: 'Cape Cod has a seasonal economy, specific search behavior, and a tight community. We know the market because we work in it.' },
  { n: '02', title: 'No lock-in contracts', body: 'Month-to-month engagements. We keep clients because the work is good, not because the contract makes it painful to leave.' },
  { n: '03', title: 'Full transparency', body: 'You own your accounts — Google Ads, Analytics, everything. We never hold access hostage.' },
  { n: '04', title: 'Accountable reporting', body: 'Real numbers on a real schedule. No polished PDFs that obscure performance — just clear data and honest analysis.' },
];

function CapeCodeMarketingPage() {
  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="mkt-hero">
        <div className="mkt-hero-bg" aria-hidden="true" />
        <div className="mkt-hero-content">
          <div className="shell">
            <span className="eyebrow mkt-eyebrow">COLEwebdev · Cape Cod Marketing</span>
            <h1 className="mkt-hero-hl">
              Marketing that works<br />for <em>Cape Cod businesses.</em>
            </h1>
            <p className="mkt-hero-sub">
              Search, paid ads, social, design, and analytics — all under one roof,
              with a local team that knows your market, your seasons, and your customers.
              No agency mystery. Just results you can measure.
            </p>
            <div className="mkt-hero-actions">
              <a className="btn btn--accent" href="quote.html">
                Get a free consultation <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost mkt-ghost" href="tel:5084132043">
                508.413.2043
              </a>
            </div>
            <div className="mkt-hero-tags">
              {['SEO', 'Google Ads', 'Social', 'Landing Pages', 'Analytics', 'Lead Capture'].map(t => (
                <span key={t} className="mkt-hero-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="mkt-services">
        <div className="shell">
          <div className="mkt-services-hd">
            <span className="eyebrow">What we offer</span>
            <h2 className="mkt-services-hl">Nine marketing services. One local team.</h2>
            <p className="mkt-services-sub">
              We don't push services you don't need. Every engagement starts with a conversation
              about your goals — then we recommend only what will actually move the needle.
            </p>
          </div>
          <div className="mkt-services-grid">
            {SERVICES.map(s => {
              const c = GLYPHCOLOR[s.color];
              return (
                <div key={s.title} className="mkt-service-card">
                  <div className="mkt-service-icon" style={{ background: c.bg, color: c.color }}>
                    {s.glyph}
                  </div>
                  <div className="mkt-service-title">{s.title}</div>
                  <div className="mkt-service-desc">{s.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why COLEwebdev */}
      <section className="mkt-why">
        <div className="shell">
          <div className="mkt-why-grid">
            <div className="mkt-why-left">
              <span className="eyebrow mkt-why-eyebrow">Why us</span>
              <h2 className="mkt-why-hl">A local marketing partner — not a distant agency.</h2>
              <p className="mkt-why-body">
                Most marketing agencies on Cape Cod are either national shops with no local
                knowledge or solo freelancers with limited capacity. COLEwebdev sits in between:
                a dedicated local studio with the range to run full campaigns and the accountability
                of a team that lives and works in the same market as your customers.
              </p>
              <p className="mkt-why-body">
                We've been working with Cape Cod businesses since 2006. We understand the
                summer-winter swing, the local search landscape, and what drives a Cape Cod
                customer to act. That context shapes every campaign we run.
              </p>
              <a className="btn btn--accent" href="quote.html">
                Start a conversation <span className="arrow">→</span>
              </a>
            </div>
            <div className="mkt-why-right">
              {REASONS.map(r => (
                <div key={r.n} className="mkt-reason">
                  <div className="mkt-reason-n">{r.n}</div>
                  <div>
                    <div className="mkt-reason-title">{r.title}</div>
                    <div className="mkt-reason-body">{r.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <div className="mkt-stats">
        <div className="shell mkt-stats-grid">
          {[
            { num: '2006', label: 'Working with Cape Cod businesses' },
            { num: '700+', label: 'Websites launched on the Cape and Islands' },
            { num: '5.0★', label: 'Google rating from real local clients' },
          ].map(s => (
            <div key={s.num} className="mkt-stat">
              <div className="mkt-stat-num">{s.num}</div>
              <div className="mkt-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="mkt-cta">
        <div className="shell">
          <div className="mkt-cta-inner">
            <div>
              <h2 className="mkt-cta-hl">Ready to grow your Cape Cod business?</h2>
              <p className="mkt-cta-sub">
                Tell us where you are and where you want to be. We'll build a plan that gets you there.
              </p>
            </div>
            <div className="mkt-cta-actions">
              <a className="btn btn--accent" href="quote.html">
                Get a free consultation <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost mkt-ghost" href="tel:5084132043">
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

const mktRoot = ReactDOM.createRoot(document.getElementById('root'));
mktRoot.render(<CapeCodeMarketingPage />);
