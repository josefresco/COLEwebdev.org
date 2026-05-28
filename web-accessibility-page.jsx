/* global React, ReactDOM */

const WCA_AUDIT_ITEMS = [
  { icon: '⌨', title: 'Keyboard Navigation', body: 'Every link, button, and form element reachable and operable without a mouse. Tab order is logical and matches visual layout.' },
  { icon: '◑', title: 'Color Contrast', body: 'All text meets WCAG AA contrast ratios — 4.5:1 for normal text, 3:1 for large text. We test against all backgrounds, including gradients.' },
  { icon: '◻', title: 'Alt Text', body: 'Every meaningful image has a descriptive alt attribute. Decorative images are properly hidden from screen readers with empty alt and aria-hidden.' },
  { icon: '◈', title: 'Form Accessibility', body: 'All inputs have associated labels. Error messages are clear, specific, and don\'t rely on color alone. Required fields are explicitly marked.' },
  { icon: '▣', title: 'Focus Indicators', body: 'Visible focus styles maintained throughout. No CSS that removes the browser\'s default outline without providing a better replacement.' },
  { icon: '≡', title: 'Heading Structure', body: 'A single H1 per page, logical H2–H6 hierarchy. Headings communicate structure, not just size — screen readers use them as navigation landmarks.' },
  { icon: '◎', title: 'ARIA & Semantics', body: 'Native HTML semantics used first. ARIA attributes added only where native elements fall short — roles, states, and properties applied correctly.' },
  { icon: '↔', title: 'Zoom & Reflow', body: 'Content remains readable and usable at 200% zoom without horizontal scrolling. Text resizes without loss of content or functionality.' },
];

const WCA_BENEFITS = [
  {
    stat: '26%',
    label: 'of U.S. adults have a disability',
    body: 'One in four Americans. An inaccessible site turns away a quarter of your potential audience before they read a single word.',
  },
  {
    stat: 'ADA',
    label: 'Title III applies to websites',
    body: 'Federal courts have consistently ruled that business websites are "places of public accommodation." Inaccessible sites have triggered lawsuits against businesses of all sizes.',
  },
  {
    stat: 'SEO',
    label: 'Accessibility improves rankings',
    body: 'Alt text, semantic HTML, and logical heading structure overlap almost entirely with Google\'s on-page SEO best practices. A more accessible site is a better-ranking site.',
  },
];

const WCA_PROCESS = [
  { num: '01', title: 'Audit', body: 'Automated scan plus manual review by a developer. Automated tools catch roughly 30% of issues — the rest require human judgment. We do both.' },
  { num: '02', title: 'Report', body: 'A prioritized list of issues by severity (critical, serious, moderate) with specific fix instructions for each one. Not a generic checklist.' },
  { num: '03', title: 'Remediate', body: 'We fix the issues in code — not just flag them. Every change tested across screen readers (NVDA, VoiceOver) and keyboard-only navigation.' },
  { num: '04', title: 'Verify', body: 'Re-test after remediation and document conformance. Ongoing monitoring available as part of a Care Plan so new content doesn\'t re-introduce issues.' },
];

const WCA_LEVELS = [
  { level: 'A', label: 'Minimum', desc: 'The floor. Non-negotiable criteria that, if missing, make a site unusable for some users. Every site should pass Level A.', active: false },
  { level: 'AA', label: 'Recommended', desc: 'The standard we target for all client work. Required by most accessibility laws and regulations worldwide, including ADA enforcement guidance.', active: true },
  { level: 'AAA', label: 'Enhanced', desc: 'The highest level — aspirational for most sites. Some criteria are content-specific and not achievable for all page types.', active: false },
];

function WCAPage() {
  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="wca-hero">
        <div className="wca-hero-bg" aria-hidden="true" />
        <div className="wca-hero-content">
          <div className="shell">
            <span className="eyebrow wca-eyebrow">Services · Web Accessibility</span>
            <h1 className="wca-hero-hl">
              Websites built <em>for everyone.</em>
            </h1>
            <p className="wca-hero-sub">
              WCAG 2.1 AA compliance audits, remediation, and ongoing monitoring. Protect your business from ADA exposure, reach a broader audience, and build sites that work for all users — not just the able-bodied ones.
            </p>
            <div className="wca-hero-actions">
              <a className="btn btn--accent" href="quote.html">
                Request an accessibility audit <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost wca-ghost" href="website-design.html">
                Web Design Services <span className="arrow">→</span>
              </a>
            </div>
            <div className="wca-hero-tags">
              <span className="wca-tag">WCAG 2.1 AA</span>
              <span className="wca-tag">ADA Compliance</span>
              <span className="wca-tag">Screen Reader Testing</span>
              <span className="wca-tag">Keyboard Navigation</span>
            </div>
          </div>
        </div>
      </div>

      <SummaryStrip
        summary="WCAG 2.1 AA audits, remediation, and monitoring — so your site is usable by everyone, protected from ADA exposure, and better ranked by search engines."
        points={['WCAG 2.1 AA', 'ADA Protection', 'Screen Reader Tested', 'SEO Benefit']}
      />

      {/* Why it matters */}
      <section className="wca-why">
        <div className="shell">
          <div className="wca-why-hd">
            <span className="eyebrow">Why it matters</span>
            <h2 className="wca-why-hl">Accessibility isn't optional. For most businesses, it's a legal requirement.</h2>
          </div>
          <div className="wca-why-grid">
            {WCA_BENEFITS.map(function(b) {
              return (
                <div key={b.stat} className="wca-benefit-card">
                  <div className="wca-benefit-stat">{b.stat}</div>
                  <div className="wca-benefit-label">{b.label}</div>
                  <p className="wca-benefit-body">{b.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance levels */}
      <section className="wca-levels">
        <div className="shell">
          <div className="wca-levels-hd">
            <span className="eyebrow">WCAG conformance levels</span>
            <h2 className="wca-levels-hl">We target Level AA for all client work.</h2>
            <p className="wca-levels-sub">WCAG 2.1 defines three levels of conformance. Most legal requirements and industry standards reference Level AA.</p>
          </div>
          <div className="wca-levels-grid">
            {WCA_LEVELS.map(function(l) {
              return (
                <div key={l.level} className={'wca-level-card' + (l.active ? ' is-active' : '')}>
                  {l.active && <span className="wca-level-badge">Our standard</span>}
                  <div className="wca-level-key">Level {l.level}</div>
                  <div className="wca-level-label">{l.label}</div>
                  <p className="wca-level-desc">{l.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Audit checklist */}
      <section className="wca-audit">
        <div className="shell">
          <div className="wca-audit-hd">
            <span className="eyebrow">What we test</span>
            <h2 className="wca-audit-hl">A full audit covers every layer of the page.</h2>
            <p className="wca-audit-sub">Automated scanners catch about 30% of real issues. The rest require a developer who understands both accessibility and code.</p>
          </div>
          <div className="wca-audit-grid">
            {WCA_AUDIT_ITEMS.map(function(item) {
              return (
                <div key={item.title} className="wca-audit-card">
                  <div className="wca-audit-icon">{item.icon}</div>
                  <div className="wca-audit-title">{item.title}</div>
                  <p className="wca-audit-body">{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="wca-process">
        <div className="shell">
          <div className="wca-process-hd">
            <span className="eyebrow">How it works</span>
            <h2 className="wca-process-hl">Audit to verified in four steps.</h2>
          </div>
          <div className="wca-process-steps">
            {WCA_PROCESS.map(function(step) {
              return (
                <div key={step.num} className="wca-step">
                  <div className="wca-step-num">{step.num}</div>
                  <div className="wca-step-title">{step.title}</div>
                  <p className="wca-step-body">{step.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Built-in note */}
      <section className="wca-builtin">
        <div className="shell wca-builtin-inner">
          <div>
            <span className="eyebrow wca-builtin-eyebrow">New builds</span>
            <h2 className="wca-builtin-hl">Every new COLEwebdev site is built to WCAG 2.1 AA from day one.</h2>
            <p className="wca-builtin-body">
              Accessibility isn't a post-launch audit for the sites we build — it's a development standard. Semantic HTML, proper contrast, keyboard navigation, and screen reader compatibility are part of our build checklist on every project.
            </p>
            <p className="wca-builtin-body">
              The audit and remediation service is for existing sites built by others, or for clients who need a third-party conformance report for legal or procurement purposes.
            </p>
            <a className="btn btn--primary" href="website-design.html">
              See our Web Design service <span className="arrow">→</span>
            </a>
          </div>
          <div className="wca-builtin-checklist">
            {['Semantic HTML structure', 'WCAG AA color contrast', 'Keyboard-navigable UI', 'Screen reader tested', 'Alt text on all images', 'Form labels and errors', 'Visible focus styles', 'Responsive at 200% zoom'].map(function(item) {
              return (
                <div key={item} className="wca-builtin-row">
                  <span className="wca-builtin-check">✓</span>
                  <span>{item}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="wca-cta">
        <div className="shell wca-cta-inner">
          <div>
            <h2 className="wca-cta-hl">Not sure if your site is accessible?</h2>
            <p className="wca-cta-sub">We'll audit it and tell you exactly where it falls short — and what it takes to fix it.</p>
            <div className="wca-cta-related">
              <span className="wca-cta-related-label">Related:</span>
              <a href="website-design.html" className="wca-cta-related-link">Web Design →</a>
              <a href="wordpress-speed.html" className="wca-cta-related-link">WordPress Speed →</a>
              <a href="hosting.html" className="wca-cta-related-link">Care Plans →</a>
              <a href="accessibility.html" className="wca-cta-related-link">Our Accessibility Statement →</a>
            </div>
          </div>
          <div className="wca-cta-actions">
            <a className="btn btn--accent" href="quote.html">
              Request an Audit <span className="arrow">→</span>
            </a>
            <a className="btn btn--ghost wca-cta-ghost" href="tel:5084132043">
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

const wcaRoot = ReactDOM.createRoot(document.getElementById('root'));
wcaRoot.render(<WCAPage />);
