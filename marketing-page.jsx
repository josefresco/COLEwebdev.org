/* global React, ReactDOM */

const MKG_SERVICES = [
  { glyph: '↗', color: 'green',  title: 'SEO',            desc: 'Rank for the searches your customers are running — local, seasonal, and intent-driven.',                   anchor: '#seo' },
  { glyph: '◎', color: 'orange', title: 'PPC / Google Ads',desc: 'Paid search built for measurable return. Every dollar tracked, every click accounted for.',               href: 'ppc.html' },
  { glyph: '✦', color: 'navy',   title: 'Social Media',    desc: 'Content strategy and paid social on the platforms where your customers actually spend time.',               anchor: '#social' },
  { glyph: '⌘', color: 'orange', title: 'Landing Pages',   desc: 'Purpose-built pages tied to specific campaigns — fast, focused, and built for a single action.',           anchor: '#leads' },
  { glyph: '◇', color: 'green',  title: 'Lead Capture',    desc: 'Forms, funnels, and CTAs that turn visitors into actionable leads.',                                        anchor: '#leads' },
  { glyph: '⚙', color: 'navy',   title: 'Analytics',       desc: 'Know exactly what is working — GA4, GTM, and attribution reporting configured correctly.',                 anchor: '#analytics' },
  { glyph: '↻', color: 'green',  title: 'Tracking',        desc: 'Full attribution — GA4, Google Tag Manager, Meta Pixel — so every campaign has a measurable source.',      anchor: '#analytics' },
  { glyph: '◐', color: 'orange', title: 'Consulting',       desc: 'Marketing strategy and direction without the agency overhead. We help you prioritize and stop wasting budget.', href: 'consulting.html' },
  { glyph: '◇', color: 'navy',   title: 'Design',           desc: 'Ads, graphics, and campaign visuals built to convert — not just look good.',                               anchor: '#social' },
];

const GLYPHCOLOR = {
  green:  { bg: 'rgba(123,192,67,0.14)', color: '#5DA02E' },
  orange: { bg: 'rgba(242,107,31,0.14)', color: '#D05A12' },
  navy:   { bg: 'rgba(14,42,74,0.10)',   color: '#0E2A4A' },
};

const REASONS = [
  { n: '01', title: 'Local market knowledge',  body: 'Cape Cod has a seasonal economy, specific search behavior, and a tight community. We know the market because we work in it.' },
  { n: '02', title: 'No lock-in contracts',     body: 'Month-to-month engagements. We keep clients because the work is good, not because the contract makes it painful to leave.' },
  { n: '03', title: 'Full transparency',        body: 'You own your accounts — Google Ads, Analytics, everything. We never hold access hostage.' },
  { n: '04', title: 'Accountable reporting',    body: 'Real numbers on a real schedule. No polished PDFs that obscure performance — just clear data and honest analysis.' },
];

const SEO_ITEMS = [
  { icon: '◎', name: 'Keyword Research & Strategy', body: 'We find the exact terms your local customers use — not just high-volume guesses. Every campaign starts with research grounded in your market, your geography, and your competition.' },
  { icon: '◇', name: 'On-Page Optimization',        body: 'Titles, meta descriptions, heading structure, schema markup, and internal linking — the technical foundation that search engines read before anything else.' },
  { icon: '◐', name: 'Google Business Profile',     body: 'Setup, optimization, and ongoing management of your GBP listing — the card that appears in Google Maps and the local pack when customers search near you.' },
  { icon: '✦', name: 'Local Citations',              body: 'Consistent NAP across directories, review sites, and local listings signals trust to Google. We audit and fix inconsistencies that quietly hurt rankings.' },
  { icon: '✎', name: 'Content Strategy',             body: 'Service pages, location pages, and blog posts written to rank for terms your customers actually search for — and convert the visitors who land on them.' },
  { icon: '↗', name: 'Monthly Reporting',            body: 'Plain-English reports showing keyword rankings, organic traffic, and what we worked on. No jargon — just the numbers that connect to your business.' },
];

const SEO_STEPS = [
  { n: '01', label: 'Audit',    body: 'A full review of your current rankings, site health, Google Business Profile, and local citation landscape.' },
  { n: '02', label: 'Strategy', body: 'A written plan with target keywords, priority pages, and a 90-day roadmap specific to your business.' },
  { n: '03', label: 'Execute',  body: 'On-page fixes, content creation, citation building, and GBP updates — implemented consistently, month after month.' },
  { n: '04', label: 'Report',   body: 'Monthly ranking and traffic reports with plain-English takeaways and next steps. You always know exactly what\'s happening.' },
];

const PAID_POINTS = [
  'Tight negative keyword management stops wasted spend',
  'Purpose-built landing pages matched to each campaign',
  'Conversion tracking configured from day one',
  'Monthly plain-English performance reports',
  'You own all accounts — we never hold access hostage',
];

const ANALYTICS_ITEMS = [
  { icon: '⚙', title: 'GA4 Setup & Configuration', body: 'Full Google Analytics 4 implementation with goals, events, and e-commerce tracking wired correctly from the start.' },
  { icon: '↻', title: 'Google Tag Manager',         body: 'GTM container setup so tags, pixels, and tracking scripts are managed cleanly in one place — no developer needed for changes.' },
  { icon: '◇', title: 'Lead Capture Optimization',  body: 'Forms, CTAs, and conversion funnels built to turn traffic into real inquiries. Tested for performance, not just aesthetics.' },
  { icon: '✦', title: 'Attribution & Reporting',    body: 'Know which channel drives calls, form fills, and purchases. Real dashboards that answer real business questions.' },
];

function MarketingPage() {
  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="mkg-hero">
        <div className="mkg-hero-bg" aria-hidden="true" />
        <div className="mkg-hero-content">
          <div className="shell">
            <span className="eyebrow mkg-eyebrow">COLEwebdev · Marketing Services</span>
            <h1 className="mkg-hero-hl">
              Marketing that<br /><em>grows businesses.</em>
            </h1>
            <p className="mkg-hero-sub">
              SEO, paid ads, social, analytics, and lead capture — all under one roof,
              with a local team that knows your market, your seasons, and your customers.
              No agency mystery. Just results you can measure.
            </p>
            <div className="mkg-hero-actions">
              <a className="btn btn--accent" href="quote.html">
                Get a free consultation <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost mkg-ghost" href="tel:5084132043">
                508.413.2043
              </a>
            </div>
            <div className="mkg-hero-tags">
              {['SEO', 'Google Ads', 'Social', 'Landing Pages', 'Analytics', 'Lead Capture', 'Tracking'].map(t => (
                <span key={t} className="mkg-hero-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SummaryStrip
        summary="SEO, paid ads, social media, lead capture, and analytics — all from one local team. No lock-in contracts, full account ownership, and reporting you can actually read."
        points={['SEO', 'Google Ads', 'Social Media', 'Analytics & Tracking']}
      />

      {/* Services overview */}
      <section className="mkg-services">
        <div className="shell">
          <div className="mkg-services-hd">
            <span className="eyebrow">What we offer</span>
            <h2 className="mkg-services-hl">All the channels. One team.</h2>
            <p className="mkg-services-sub">
              We don't push services you don't need. Every engagement starts with a conversation
              about your goals — then we recommend only what will actually move the needle.
            </p>
          </div>
          <div className="mkg-services-grid">
            {MKG_SERVICES.map(s => {
              const c = GLYPHCOLOR[s.color];
              const href = s.href || s.anchor;
              return (
                <a key={s.title} className="mkg-service-card" href={href}>
                  <div className="mkg-service-icon" style={{ background: c.bg, color: c.color }}>
                    {s.glyph}
                  </div>
                  <div className="mkg-service-title">{s.title}</div>
                  <div className="mkg-service-desc">{s.desc}</div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SEO ── */}
      <section className="mkg-channel" id="seo">
        <div className="shell">
          <div className="mkg-channel-hd">
            <div>
              <span className="eyebrow">Search Engine Optimization</span>
              <h2 className="mkg-channel-hl">Get found where your customers <em>are searching.</em></h2>
            </div>
            <div className="mkg-seo-stats">
              <div className="mkg-seo-stat">
                <span className="mkg-seo-num">46%</span>
                <span className="mkg-seo-lbl">of all Google searches have local intent</span>
              </div>
              <div className="mkg-seo-stat">
                <span className="mkg-seo-num">78%</span>
                <span className="mkg-seo-lbl">of local mobile searches end in a purchase</span>
              </div>
              <div className="mkg-seo-stat">
                <span className="mkg-seo-num">#1</span>
                <span className="mkg-seo-lbl">position earns 27%+ of all clicks</span>
              </div>
            </div>
          </div>
          <p className="mkg-channel-intro">
            When someone in Brewster searches "plumber near me" or a visitor in Provincetown looks for "best clam chowder" — your position in those results determines whether your phone rings.
            Most small businesses have fixable SEO problems they don't know about: inconsistent listings, an unoptimized Google Business Profile, and pages with no keyword focus.
          </p>
          <div className="mkg-seo-grid">
            {SEO_ITEMS.map(svc => (
              <div key={svc.name} className="mkg-seo-card">
                <div className="mkg-seo-icon">{svc.icon}</div>
                <h3 className="mkg-seo-name">{svc.name}</h3>
                <p className="mkg-seo-body">{svc.body}</p>
              </div>
            ))}
          </div>
          <div className="mkg-seo-steps">
            <h3 className="mkg-seo-steps-hl">A repeatable process — not a one-time fix.</h3>
            <div className="mkg-seo-steps-grid">
              {SEO_STEPS.map(step => (
                <div key={step.n} className="mkg-seo-step">
                  <div className="mkg-seo-step-n">{step.n}</div>
                  <div className="mkg-seo-step-label">{step.label}</div>
                  <p className="mkg-seo-step-body">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mkg-seo-ai-note">
            <span className="mkg-seo-ai-tag">AI Studio</span>
            <span className="mkg-seo-ai-text">
              Want a deeper technical audit? We also run AI-powered SEO audits using your live Google Analytics and Search Console data — not a generic checklist.
            </span>
            <a href="ai-apps.html" className="mkg-seo-ai-link">See AI Studio →</a>
          </div>
        </div>
      </section>

      {/* ── Paid Search ── */}
      <section className="mkg-channel mkg-channel--alt" id="paid">
        <div className="shell">
          <div className="mkg-paid-grid">
            <div>
              <span className="eyebrow">PPC &amp; Google Ads</span>
              <h2 className="mkg-channel-hl">Stop wasting your <em>ad budget.</em></h2>
              <p className="mkg-channel-body">
                Most small business Google Ads accounts spend 30–60% of their budget on clicks that
                were never going to convert. We build campaigns around the three things that prevent
                waste: tight negative keyword management, purpose-built landing pages, and real
                conversion tracking.
              </p>
              <ul className="mkg-paid-list">
                {PAID_POINTS.map(p => <li key={p}>{p}</li>)}
              </ul>
              <a href="ppc.html" className="btn btn--accent" style={{ marginTop: 28, display: 'inline-flex' }}>
                Full PPC details <span className="arrow">→</span>
              </a>
            </div>
            <div className="mkg-paid-aside">
              <div className="mkg-paid-card">
                <div className="mkg-paid-card-label">Meaningful data within</div>
                <div className="mkg-paid-card-num">30 days</div>
                <div className="mkg-paid-card-sub">of a well-structured campaign launch</div>
              </div>
              <div className="mkg-paid-card mkg-paid-card--green">
                <div className="mkg-paid-card-label">Wasted spend reduced to</div>
                <div className="mkg-paid-card-num">&lt; 10%</div>
                <div className="mkg-paid-card-sub">with tight negative keyword management</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Social + Lead Capture ── */}
      <section className="mkg-channel" id="social">
        <div className="shell">
          <div className="mkg-two-col">
            <div className="mkg-two-block">
              <span className="eyebrow">Social Media</span>
              <h2 className="mkg-two-hl">Presence that <em>builds audiences.</em></h2>
              <p className="mkg-channel-body">
                Content strategy, scheduling, and paid social where it makes sense for your business.
                We focus on the platforms where your customers actually spend time — not every platform by default.
              </p>
              <ul className="mkg-channel-list" id="leads">
                <li>Content calendar and scheduling</li>
                <li>Paid social campaigns (Meta, Instagram)</li>
                <li>Graphic design for posts and stories</li>
                <li>Monthly performance review</li>
              </ul>
            </div>
            <div className="mkg-two-block">
              <span className="eyebrow">Lead Capture &amp; Landing Pages</span>
              <h2 className="mkg-two-hl">Turn traffic into <em>real inquiries.</em></h2>
              <p className="mkg-channel-body">
                Traffic without conversion is just numbers. We build forms, funnels, and CTAs that
                turn visitors into actionable leads — and landing pages tied to specific campaigns
                so nothing slips through.
              </p>
              <ul className="mkg-channel-list">
                <li>Landing page design and build</li>
                <li>Form optimization and A/B testing</li>
                <li>Lead magnet setup and delivery</li>
                <li>CRM integration (HubSpot, Mailchimp)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Analytics & Tracking ── */}
      <section className="mkg-channel mkg-channel--alt" id="analytics">
        <div className="shell">
          <span className="eyebrow">Analytics &amp; Tracking</span>
          <h2 className="mkg-channel-hl" style={{ marginBottom: 12 }}>Know exactly what's <em>working.</em></h2>
          <p className="mkg-channel-intro" style={{ maxWidth: 640, marginBottom: 48 }}>
            Most businesses have analytics installed but not configured correctly. We set up GA4, GTM, and pixel
            tracking the right way — so every campaign has a measurable source, and you stop guessing which
            channels drive real calls, form fills, and purchases.
          </p>
          <div className="mkg-analytics-grid">
            {ANALYTICS_ITEMS.map(item => (
              <div key={item.title} className="mkg-analytics-card">
                <div className="mkg-analytics-icon">{item.icon}</div>
                <div className="mkg-analytics-title">{item.title}</div>
                <p className="mkg-analytics-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why COLEwebdev */}
      <section className="mkg-why">
        <div className="shell">
          <div className="mkg-why-grid">
            <div className="mkg-why-left">
              <span className="eyebrow mkg-why-eyebrow">Why us</span>
              <h2 className="mkg-why-hl">A local marketing partner — not a distant agency.</h2>
              <p className="mkg-why-body">
                Most marketing agencies on Cape Cod are either national shops with no local knowledge
                or solo freelancers with limited capacity. COLEwebdev sits in between: a dedicated
                local studio with the range to run full campaigns and the accountability of a team
                that lives and works in the same market as your customers.
              </p>
              <p className="mkg-why-body">
                We've been working with local businesses since 2006. We understand the summer-winter
                swing, the local search landscape, and what drives a customer to act. That context
                shapes every campaign we run.
              </p>
              <a className="btn btn--accent" href="quote.html">
                Start a conversation <span className="arrow">→</span>
              </a>
            </div>
            <div className="mkg-why-right">
              {REASONS.map(r => (
                <div key={r.n} className="mkg-reason">
                  <div className="mkg-reason-n">{r.n}</div>
                  <div>
                    <div className="mkg-reason-title">{r.title}</div>
                    <div className="mkg-reason-body">{r.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <div className="mkg-stats">
        <div className="shell mkg-stats-grid">
          {[
            { num: '2006', label: 'Year we started working with local businesses' },
            { num: '700+', label: 'Websites launched on the Cape and Islands' },
            { num: '4.8★', label: 'Google rating from real local clients' },
          ].map(s => (
            <div key={s.num} className="mkg-stat">
              <div className="mkg-stat-num">{s.num}</div>
              <div className="mkg-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="mkg-cta">
        <div className="shell">
          <div className="mkg-cta-inner">
            <div>
              <h2 className="mkg-cta-hl">Ready to grow your business?</h2>
              <p className="mkg-cta-sub">
                Tell us where you are and where you want to be. We'll build a plan that gets you there.
              </p>
              <div className="mkg-cta-guides">
                <span className="mkg-cta-guides-label">Further reading:</span>
                <a href="wp-google-ads-guide.html" className="mkg-cta-guide-link">Why your Google Ads are wasting money →</a>
                <a href="wp-how-long-seo.html" className="mkg-cta-guide-link">How long does SEO take to work? →</a>
                <a href="wp-not-showing-on-google.html" className="mkg-cta-guide-link">Why isn't my site showing on Google? →</a>
              </div>
            </div>
            <div className="mkg-cta-actions">
              <a className="btn btn--accent" href="quote.html">
                Get a free consultation <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost mkg-ghost" href="tel:5084132043">
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

const mkgRoot = ReactDOM.createRoot(document.getElementById('root'));
mkgRoot.render(<MarketingPage />);
