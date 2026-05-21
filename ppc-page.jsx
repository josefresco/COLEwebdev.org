/* global React, ReactDOM */

const PPC_SERVICES = [
  {
    icon: '◎',
    bg: 'rgba(242,107,31,0.14)',
    color: '#D05A12',
    name: 'Campaign Architecture',
    body: 'Campaigns structured around tightly themed ad groups — not one broad campaign that bleeds budget across loosely matched searches.',
  },
  {
    icon: '✦',
    bg: 'rgba(14,42,74,0.10)',
    color: '#0E2A4A',
    name: 'Keyword Strategy',
    body: 'Exact, phrase, and broad match types used intentionally — with a negative keyword list built before launch and expanded every week.',
  },
  {
    icon: '◇',
    bg: 'rgba(123,192,67,0.14)',
    color: '#5DA02E',
    name: 'Ad Copy & Testing',
    body: 'Responsive search ads written with message match in mind. Headline and description variations tested systematically, not randomly.',
  },
  {
    icon: '⌘',
    bg: 'rgba(242,107,31,0.14)',
    color: '#D05A12',
    name: 'Landing Page Design',
    body: 'Purpose-built pages for each campaign — fast load, headline that mirrors the ad, single CTA. No generic homepage sends.',
  },
  {
    icon: '↗',
    bg: 'rgba(14,42,74,0.10)',
    color: '#0E2A4A',
    name: 'Conversion Tracking',
    body: 'GA4 and Google Ads conversion events configured before campaigns go live. Calls, forms, and purchases all attributed correctly.',
  },
  {
    icon: '↻',
    bg: 'rgba(123,192,67,0.14)',
    color: '#5DA02E',
    name: 'Bid Management',
    body: 'Manual and Smart bidding strategies applied based on what the conversion data supports. Bids are reviewed and adjusted weekly.',
  },
  {
    icon: '◐',
    bg: 'rgba(242,107,31,0.14)',
    color: '#D05A12',
    name: 'Negative Keyword Management',
    body: 'Weekly search term reviews to find and block irrelevant queries. This is where most agencies fail — and where most budgets leak.',
  },
  {
    icon: '⚙',
    bg: 'rgba(14,42,74,0.10)',
    color: '#0E2A4A',
    name: 'Monthly Reporting',
    body: 'Cost-per-click, cost-per-conversion, and call attribution presented plainly so you know exactly what your ad spend is producing.',
  },
];

const PPC_PILLARS = [
  {
    num: '01',
    title: 'Stop the waste with negative keywords.',
    body: 'Every Google Ads account running broad or phrase match keywords will attract clicks from irrelevant searches. Without active negative keyword management, you pay for searchers who were never going to convert.',
    detail: 'A Cape Cod landscaper targeting "lawn care" without negatives pays for clicks from "lawn care jobs," "DIY lawn care tips," and "lawn care Midwest." We build negative lists from day one and review search term reports weekly — the work most campaigns never get.',
  },
  {
    num: '02',
    title: 'Send clicks to a page built to convert.',
    body: "If a searcher who clicked \"web design Cape Cod\" lands on your homepage, you've broken message match. They expected a specific answer; they got a general page. Most of them leave — and you paid for the click.",
    detail: 'Every campaign we run gets a dedicated landing page: fast on mobile, headline that mirrors the ad, one clear call to action. We also add call tracking so every phone conversion is captured and attributed back to the right campaign.',
  },
  {
    num: '03',
    title: 'Track every conversion before spending a dollar.',
    body: "Most small business Google Ads accounts run with incomplete or broken conversion tracking. That means Google's bidding algorithms optimize toward nothing — and reporting can't tell you what's actually working.",
    detail: 'We configure GA4 goals, Google Ads conversion actions, and call tracking before the first ad goes live. Form submissions, phone calls, and purchases are all measured. Without this data, every optimization decision is a guess.',
  },
];

const PPC_STEPS = [
  {
    n: '01',
    label: 'Audit',
    body: 'We review your existing campaigns — analyzing search terms, quality scores, conversion setup, and wasted spend. Most accounts have problems we can identify and fix immediately.',
  },
  {
    n: '02',
    label: 'Build',
    body: 'Campaign architecture, keyword and negative lists, ad copy, and landing pages — fully built before anything goes live. No learning waste from a poorly structured start.',
  },
  {
    n: '03',
    label: 'Optimize',
    body: 'Weekly search term reviews, A/B ad testing, bid adjustments, and negative expansions. Optimization is ongoing — not a quarterly check-in.',
  },
  {
    n: '04',
    label: 'Report',
    body: 'Monthly reporting with cost-per-click, cost-per-conversion, and what we worked on. No jargon, no vanity metrics — just what your ad spend produced.',
  },
];

const PPC_COMMITMENTS = [
  {
    icon: '✓',
    label: 'No markup on ad spend',
    desc: 'Your ad budget goes directly to Google. We charge a flat management fee — not a percentage of spend, which creates an incentive to grow your budget regardless of return.',
  },
  {
    icon: '✓',
    label: 'You own your accounts',
    desc: 'Google Ads, Analytics, and Tag Manager accounts are yours. We work inside them — never inside an agency account that disappears if you leave.',
  },
  {
    icon: '✓',
    label: 'No long-term contracts',
    desc: "Month-to-month. If the results aren't there, you shouldn't be locked in. We keep clients because the work produces a measurable return.",
  },
  {
    icon: '✓',
    label: 'Local market expertise',
    desc: "Cape Cod search behavior has seasonal patterns national agencies miss. We know when to push budget, when to pull back, and which terms your local customers actually use.",
  },
];

function PpcPage() {
  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="ppc-hero">
        <div className="ppc-hero-bg" aria-hidden="true" />
        <div className="ppc-hero-content">
          <div className="shell">
            <span className="eyebrow ppc-eyebrow">Services · PPC &amp; Google Ads</span>
            <h1 className="ppc-hero-hl">
              Paid ads that stop <em>wasting</em> your budget.
            </h1>
            <p className="ppc-hero-sub">
              Most Google Ads campaigns spend 30–60% of their budget on clicks that were never going to convert. COLEwebdev builds campaigns around the three things that prevent waste: tight negative keyword management, purpose-built landing pages, and real conversion tracking.
            </p>
            <div className="ppc-hero-actions">
              <a className="btn btn--accent" href="quote.html">
                Get a free audit <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost ppc-ghost" href="tel:5084132043">
                508.413.2043
              </a>
            </div>
            <div className="ppc-tags">
              {['Google Ads', 'Negative Keywords', 'Landing Pages', 'Conversion Tracking', 'Cape Cod PPC'].map(t => (
                <span key={t} className="ppc-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* The problem */}
      <section className="ppc-problem">
        <div className="shell ppc-problem-grid">
          <div>
            <span className="eyebrow">The problem</span>
            <h2 className="ppc-problem-hl">
              Most Google Ads accounts are <em>bleeding money.</em>
            </h2>
            <p className="ppc-problem-body">
              A typical small business Google Ads account is set up once and left to run. Keywords are too broad, negatives are empty, the ad sends clicks to the homepage, and conversion tracking was never configured correctly. The result: spend without returns.
            </p>
            <p className="ppc-problem-body">
              The fix isn't a bigger budget — it's fixing the three structural problems that cause most of the waste. That's where every engagement with us starts.
            </p>
            <a className="btn btn--primary" href="wp-google-ads-guide.html" style={{ marginTop: '8px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Read our Google Ads waste guide <span className="arrow">→</span>
            </a>
          </div>
          <div className="ppc-stats">
            <div className="ppc-stat">
              <div className="ppc-stat-num">30–60%</div>
              <div className="ppc-stat-label">of the average small business Google Ads budget is wasted on irrelevant clicks</div>
            </div>
            <div className="ppc-stat">
              <div className="ppc-stat-num">2–5×</div>
              <div className="ppc-stat-label">better conversion rates on dedicated landing pages versus generic homepage sends</div>
            </div>
            <div className="ppc-stat">
              <div className="ppc-stat-num">~70%</div>
              <div className="ppc-stat-label">of small business Google Ads accounts have conversion tracking that is missing or misconfigured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="ppc-svcs">
        <div className="shell">
          <div className="ppc-svcs-hd">
            <span className="eyebrow">What we manage</span>
            <h2 className="ppc-svcs-hl">Eight things we handle every month.</h2>
            <p className="ppc-svcs-sub">
              Paid search isn't a one-time setup. These are the tasks that need active attention — not quarterly reviews.
            </p>
          </div>
          <div className="ppc-svcs-grid">
            {PPC_SERVICES.map(s => (
              <div key={s.name} className="ppc-svc-card">
                <div className="ppc-svc-icon" style={{ background: s.bg, color: s.color }}>{s.icon}</div>
                <div className="ppc-svc-name">{s.name}</div>
                <div className="ppc-svc-body">{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="ppc-pillars">
        <div className="shell">
          <div className="ppc-pillars-hd">
            <span className="eyebrow">Three pillars</span>
            <h2 className="ppc-pillars-hl">Fix these and you fix most of the waste.</h2>
          </div>
          <div className="ppc-pillars-grid">
            {PPC_PILLARS.map(p => (
              <div key={p.num} className="ppc-pillar">
                <span className="ppc-pillar-num">Pillar {p.num}</span>
                <div className="ppc-pillar-title">{p.title}</div>
                <div className="ppc-pillar-body">{p.body}</div>
                <div className="ppc-pillar-detail">{p.detail}</div>
              </div>
            ))}
          </div>
          <div className="ppc-pillars-guide">
            <p className="ppc-guide-note">
              <strong>Want the full breakdown?</strong> We wrote a complete guide on these three problems — with examples, practical steps, and what to check in your own account before spending another dollar.
            </p>
            <a className="btn btn--accent" href="wp-google-ads-guide.html">
              Read: Why Your Google Ads Are Wasting Money <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="ppc-how">
        <div className="shell">
          <div className="ppc-how-hd">
            <span className="eyebrow">How we work</span>
            <h2 className="ppc-how-hl">A clean process with no wasted runway.</h2>
          </div>
          <div className="ppc-how-steps">
            {PPC_STEPS.map(s => (
              <div key={s.n} className="ppc-step">
                <div className="ppc-step-num">{s.n}</div>
                <div className="ppc-step-label">{s.label}</div>
                <div className="ppc-step-body">{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="ppc-commit">
        <div className="shell">
          <div className="ppc-commit-hd">
            <span className="eyebrow">Our commitments</span>
            <h2 className="ppc-commit-hl">What you can always <em>count on.</em></h2>
          </div>
          <div className="ppc-commit-grid">
            {PPC_COMMITMENTS.map(c => (
              <div key={c.label} className="ppc-commit-card">
                <div className="ppc-commit-check">{c.icon}</div>
                <div>
                  <div className="ppc-commit-label">{c.label}</div>
                  <p className="ppc-commit-desc">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ppc-cta-section">
        <div className="shell">
          <div className="ppc-cta">
            <div>
              <h2 className="ppc-cta-hl">Ready to stop wasting ad spend <em>and start measuring?</em></h2>
              <p className="ppc-cta-sub">We'll audit your current campaigns for free — identifying waste, missing negatives, and conversion tracking gaps before we quote a management fee.</p>
              <p className="ppc-area-note">Serving Cape Cod businesses and beyond. <a href="service-area.html">See our full service area →</a></p>
              <div className="ppc-related">
                <span className="ppc-related-label">Related:</span>
                <a href="seo.html" className="ppc-related-link">Prefer organic search?</a>
                <a href="cape-cod-marketing.html" className="ppc-related-link">Full marketing services</a>
              </div>
            </div>
            <div className="ppc-cta-actions">
              <a className="btn btn--accent" href="quote.html">
                Get a free audit <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost ppc-ghost" href="tel:5084132043">
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

const ppcRoot = ReactDOM.createRoot(document.getElementById('root'));
ppcRoot.render(<PpcPage />);
