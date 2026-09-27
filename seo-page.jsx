/* global React, ReactDOM */

const SEO_OFFERINGS = [
  {
    type: 'Free',
    icon: '◎',
    name: 'SEO Snapshot',
    desc: 'A quick outside-in review of your site and Google Business Profile. We flag the most obvious problems and tell you plainly whether a full audit is worth it.',
    includes: [
      'Indexing and crawlability spot check',
      'Title, meta, and heading review of key pages',
      'Google Business Profile check',
      'Mobile speed check',
      'Short written summary, no obligation',
    ],
  },
  {
    type: 'One-time · paid',
    featured: true,
    icon: '⚙',
    name: 'Full SEO Audit',
    desc: 'An in-depth audit built on your own Google Analytics and Search Console data, plus a full-site crawl. Every issue is ranked by severity so you know what to fix first.',
    includes: [
      'Technical crawl of every page',
      'Search Console indexing and query analysis',
      'On-page, content, and internal link review',
      'Local SEO: profile, citations, service areas',
      'Core Web Vitals and schema review',
      'Prioritized report: critical, serious, moderate',
    ],
  },
  {
    type: 'One-time · scoped',
    icon: '↗',
    name: 'Remediation',
    desc: 'We fix what the audit found, directly on your site, in priority order. Then we verify each fix in Search Console instead of assuming it worked.',
    includes: [
      'Fixes implemented, not just recommended',
      'Critical and serious issues first',
      'Redirects, indexing, and crawl errors resolved',
      'Titles, headings, schema, and internal links rewritten',
      'Verification and re-indexing requests in Search Console',
    ],
  },
];

const SEO_COVERAGE = [
  { icon: '⚙', name: 'Technical', items: ['Indexing and crawl errors', 'Robots.txt and XML sitemaps', 'Redirect chains and broken links', 'Duplicate and canonical issues'] },
  { icon: '◇', name: 'On-page', items: ['Titles and meta descriptions', 'Heading structure', 'Internal linking', 'Image alt text'] },
  { icon: '◎', name: 'Local', items: ['Google Business Profile', 'Name, address, phone consistency', 'Service area and town pages', 'Local citations'] },
  { icon: '✎', name: 'Content', items: ['Thin and duplicate pages', 'Keyword gaps vs. competitors', 'Pages competing for the same term', 'Search queries you almost rank for'] },
  { icon: '↗', name: 'Speed', items: ['Largest Contentful Paint', 'Interaction to Next Paint', 'Cumulative Layout Shift', 'Mobile performance'] },
  { icon: '⌘', name: 'Schema & AI readiness', items: ['Structured data errors', 'Business and service schema', 'FAQ markup', 'Content AI answers can cite'] },
];

const SEO_STEPS = [
  { n: '01', label: 'Snapshot', body: 'A free first look at your site and Google Business Profile. If a full audit will not pay for itself, we will tell you.' },
  { n: '02', label: 'Audit', body: 'We connect to Analytics and Search Console, crawl the site, and deliver a prioritized report with every issue ranked by severity.' },
  { n: '03', label: 'Remediate', body: 'We fix the issues on your site in priority order, starting with anything that keeps pages out of Google.' },
  { n: '04', label: 'Verify', body: 'We confirm each fix in Search Console, request re-indexing, and hand you a summary of what changed.' },
];

const SEO_FAQ = [
  {
    q: "What is the difference between the free SEO snapshot and the full audit?",
    a: "The free snapshot is a quick outside-in review of your site and Google Business Profile that flags the most obvious problems. The full audit is a paid, in-depth engagement: we connect to your Google Analytics and Search Console data, crawl the whole site, and deliver a prioritized report of every issue we find.",
  },
  {
    q: "Do you fix the problems or just report them?",
    a: "We fix them. Remediation is a separate engagement after the audit: we work through the report in priority order, fix the issues directly on your site, and verify each fix in Search Console.",
  },
  {
    q: "Do you need access to my Google accounts?",
    a: "For the full audit, yes: read access to Google Analytics and Search Console lets us diagnose problems from your real traffic and indexing data instead of guesses. The free snapshot needs no access at all.",
  },
  {
    q: "Do you offer monthly SEO retainers?",
    a: "No. We focus on audits and remediation: find what is holding your site back, fix it, and verify the fix. Many clients come back for a fresh audit after a redesign, a platform move, or a drop in traffic.",
  },
  {
    q: "How long does it take to see results after remediation?",
    a: "Technical fixes like indexing and crawl errors can show up in Search Console within weeks. Ranking changes usually take longer and depend on your competition. Our guide on how long SEO takes covers realistic timelines.",
  },
];

function SeoHeroViz() {
  const rows = [
    ['crit', 'Critical', '14 pages blocked from indexing'],
    ['crit', 'Critical', 'Redirect loop on /services'],
    ['ser', 'Serious', '22 duplicate title tags'],
    ['ser', 'Serious', 'Business name differs across listings'],
    ['mod', 'Moderate', 'Missing alt text on 38 images'],
  ];
  return (
    <figure className="seo-hviz" aria-label="Illustration: an SEO audit report with issues ranked by severity">
      <div className="seo-hviz-card">
        <div className="seo-hviz-head">
          <span className="seo-hviz-title">SEO audit</span>
          <span className="seo-hviz-site">yourbusiness.com</span>
        </div>
        <div className="seo-hviz-sum">
          <div className="is-crit"><b>2</b><span>Critical</span></div>
          <div className="is-ser"><b>2</b><span>Serious</span></div>
          <div className="is-mod"><b>1</b><span>Moderate</span></div>
        </div>
        <ul className="seo-hviz-rows">
          {rows.map(([sev, label, text]) => (
            <li key={text}>
              <span className={'seo-sev seo-sev--' + sev}>{label}</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="seo-hviz-chip seo-hviz-chip--a">
        <span className="seo-hviz-dot" aria-hidden="true" /> Search Console connected
      </div>
      <div className="seo-hviz-chip seo-hviz-chip--b">
        <span className="seo-hviz-dot" aria-hidden="true" /> Google Analytics connected
      </div>
      <figcaption className="seo-hviz-cap">Illustrative example</figcaption>
    </figure>
  );
}

function SeoPage() {
  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="seo-hero">
        <div className="seo-hero-bg" aria-hidden="true" />
        <div className="seo-hero-content">
          <div className="shell seo-hero-grid">
            <div className="seo-hero-copy">
              <span className="eyebrow seo-eyebrow">Services · SEO Audits &amp; Remediation</span>
              <h1 className="seo-hero-hl">
                Cape Cod SEO audits that <em>end in fixes.</em>
              </h1>
              <p className="seo-hero-sub">
                We find what is keeping your site out of Google, rank every issue by severity, and then fix it on your site. No monthly retainer and no report that sits in a drawer.
              </p>
              <div className="seo-hero-actions">
                <a className="btn btn--accent" href="quote.html">
                  Get a free SEO snapshot <span className="arrow">→</span>
                </a>
                <a className="btn btn--ghost seo-ghost" href="tel:5084132043">
                  508.413.2043
                </a>
              </div>
              <div className="seo-tags">
                {['SEO Audit', 'Technical SEO', 'Local SEO', 'Search Console', 'Remediation'].map(t => (
                  <span key={t} className="seo-tag">{t}</span>
                ))}
              </div>
            </div>
            <SeoHeroViz />
          </div>
        </div>
      </div>

      <SummaryStrip
        summary="SEO audits built on your own Analytics and Search Console data, followed by hands-on fixes verified in Search Console. Start with a free snapshot."
        points={['SEO Audits', 'Remediation', 'Local SEO', 'Cape Cod']}
      />

      <ServiceSideNav group="grow" current="seo.html">
        <SvcSnapshot
          accent="#0073AA"
          eyebrow="At a glance"
          title="Find it, fix it, prove it."
          intro="Most SEO problems are fixable and specific: pages Google cannot index, duplicate titles, listings that disagree. We audit, fix, and verify."
          points={[
            'Free snapshot to see if a full audit is worth it',
            'Full audit built on your Analytics and Search Console data',
            'Remediation done on your site, not handed back as homework',
            'Every fix verified in Search Console',
          ]}
          link={{ href: 'wp-not-showing-on-google.html', text: "Read: why your site isn't showing on Google" }}
        >
          <SvsWindow title="Engagement">
            <SvsFlow steps={[
              { k: 'Snapshot', v: 'Free first look' },
              { k: 'Audit', v: 'Prioritized report' },
              { k: 'Remediation', v: 'Fixed and verified' },
            ]} />
          </SvsWindow>
        </SvcSnapshot>
      </ServiceSideNav>

      {/* The problem */}
      <section className="seo-problem">
        <div className="shell seo-problem-grid">
          <div>
            <span className="eyebrow">The problem</span>
            <h2 className="seo-problem-hl">
              Most sites have SEO problems <em>nobody mentioned.</em>
            </h2>
            <p className="seo-problem-body">
              A page accidentally set to noindex. A redirect that loops. Twenty pages sharing one title tag. A business name spelled three different ways across directories. None of it shows up when you look at your own site, and all of it costs you rankings.
            </p>
            <p className="seo-problem-body">
              An audit turns "we should do some SEO" into a specific, ranked list of problems. Remediation turns that list into fixes.
            </p>
            <a className="btn btn--primary" href="wp-how-long-seo.html" style={{ marginTop: '8px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Read: how long SEO takes to work <span className="arrow">→</span>
            </a>
          </div>
          <div className="seo-stats">
            <div className="seo-stat">
              <div className="seo-stat-num">46%</div>
              <div className="seo-stat-label">of all Google searches have local intent</div>
            </div>
            <div className="seo-stat">
              <div className="seo-stat-num">78%</div>
              <div className="seo-stat-label">of local mobile searches result in an offline purchase</div>
            </div>
            <div className="seo-stat">
              <div className="seo-stat-num">27%</div>
              <div className="seo-stat-label">of all clicks go to the #1 organic result</div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="seo-offerings">
        <div className="shell">
          <div className="seo-offerings-hd">
            <span className="eyebrow">Services</span>
            <h2 className="seo-offerings-hl">Three steps, no retainer.</h2>
            <p className="seo-offerings-sub">
              Start free. Commission a full audit if the snapshot shows it is worth it. Then have us fix what we find.
            </p>
          </div>
          <div className="seo-offerings-grid">
            {SEO_OFFERINGS.map(o => (
              <div key={o.name} className={['seo-offering-card', o.featured && 'seo-offering-card--featured'].filter(Boolean).join(' ')}>
                <div className="seo-offering-top">
                  <span className={'seo-offering-type' + (o.featured ? ' seo-offering-type--featured' : '')}>{o.type}</span>
                  {o.featured && <span className="seo-offering-rec">Most thorough</span>}
                </div>
                <div className="seo-offering-name">
                  <span className="seo-offering-icon" aria-hidden="true">{o.icon}</span>
                  {o.name}
                </div>
                <div className="seo-offering-desc">{o.desc}</div>
                <ul className="seo-offering-list">
                  {o.includes.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit coverage */}
      <section className="seo-cover">
        <div className="shell">
          <div className="seo-cover-hd">
            <span className="eyebrow">What the full audit covers</span>
            <h2 className="seo-cover-hl">Six areas, one ranked report.</h2>
            <p className="seo-cover-sub">Every finding gets a severity (critical, serious, or moderate) and a plain-English explanation of what it costs you.</p>
          </div>
          <div className="seo-cover-grid">
            {SEO_COVERAGE.map(c => (
              <div key={c.name} className="seo-cover-card">
                <div className="seo-cover-top">
                  <span className="seo-offering-icon" aria-hidden="true">{c.icon}</span>
                  <span className="seo-cover-name">{c.name}</span>
                </div>
                <ul className="seo-cover-list">
                  {c.items.map(i => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="seo-cover-data">
            <strong>Built on your real data.</strong> With read access to Google Analytics and Search Console, we diagnose from your actual traffic, queries, and indexing reports, not a generic checklist.
          </div>
        </div>
      </section>

      {/* Remediation */}
      <section className="seo-fix">
        <div className="shell seo-fix-grid">
          <div>
            <span className="eyebrow">Remediation</span>
            <h2 className="seo-fix-hl">We fix it. Then we prove it.</h2>
            <p className="seo-fix-p">
              An audit is only useful if someone acts on it. Remediation works through the report in priority order, starting with anything that keeps pages out of Google entirely.
            </p>
            <p className="seo-fix-p">
              Each fix is checked in Search Console, and we request re-indexing where it helps. If slow pages are part of the problem, our <a href="wordpress-speed.html">WordPress speed work</a> picks up where the audit leaves off.
            </p>
          </div>
          <div aria-hidden="true">
            <SvsWindow title="Remediation log">
              <ul className="seo-fixlist">
                {[
                  ['crit', 'Critical', 'Removed noindex from 14 service pages'],
                  ['crit', 'Critical', 'Fixed redirect loop on /services'],
                  ['ser', 'Serious', 'Rewrote 22 duplicate title tags'],
                  ['ser', 'Serious', 'Matched business name across listings'],
                  ['mod', 'Moderate', 'Added alt text to 38 images'],
                ].map(([sev, label, text]) => (
                  <li key={text}>
                    <span className={'seo-sev seo-sev--' + sev}>{label}</span>
                    <span>{text}</span>
                    <span className="seo-fixed">✓ Verified</span>
                  </li>
                ))}
              </ul>
            </SvsWindow>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="seo-how">
        <div className="shell">
          <div className="seo-how-hd">
            <span className="eyebrow">How it works</span>
            <h2 className="seo-how-hl">From first look to verified fix.</h2>
          </div>
          <div className="seo-how-steps">
            {SEO_STEPS.map(s => (
              <div key={s.n} className="seo-step">
                <div className="seo-step-num">{s.n}</div>
                <div className="seo-step-label">{s.label}</div>
                <div className="seo-step-body">{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AIEO cross-link */}
      <section className="seo-aieo">
        <div className="shell">
          <div className="seo-aieo-card">
            <div>
              <span className="eyebrow">Beyond the blue link</span>
              <h2 className="seo-aieo-hl">SEO gets you ranked. AIEO gets you <em>cited.</em></h2>
              <p className="seo-aieo-p">
                ChatGPT, Perplexity, Gemini, and Claude now answer questions directly and name their sources. AI Engine Optimization builds on a clean SEO foundation so AI answers recommend you too.
              </p>
            </div>
            <a className="btn btn--accent" href="aieo.html">
              Explore AIEO <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="seo-faq">
        <div className="shell seo-faq-inner">
          <span className="eyebrow">Common questions</span>
          <h2 className="seo-faq-hl">Snapshot, audit, remediation: answered.</h2>
          <div className="seo-faq-list">
            {SEO_FAQ.map(f => (
              <details key={f.q} className="seo-faq-item">
                <summary className="seo-faq-q">{f.q}</summary>
                <p className="seo-faq-a">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="seo-cta-section">
        <div className="shell">
          <div className="seo-cta">
            <div>
              <h2 className="seo-cta-hl">Start with a free <em>SEO snapshot.</em></h2>
              <p className="seo-cta-sub">We will look at your site and Google Business Profile, flag the biggest problems, and tell you honestly whether a full audit is worth it.</p>
              <p className="seo-area-note">Serving Cape Cod businesses and beyond. <a href="service-area.html">See our full service area →</a></p>
              <div className="seo-related">
                <span className="seo-related-label">Related:</span>
                <a href="aieo.html" className="seo-related-link">AI Engine Optimization</a>
                <a href="cape-cod-google-business-profile.html" className="seo-related-link">Google Business Profile</a>
                <a href="ppc.html" className="seo-related-link">Need traffic now? Google Ads</a>
              </div>
            </div>
            <div className="seo-cta-actions">
              <a className="btn btn--accent" href="quote.html">
                Get a free SEO snapshot <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost seo-ghost" href="tel:5084132043">
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

const seoRoot = ReactDOM.createRoot(document.getElementById('root'));
seoRoot.render(<SeoPage />);
