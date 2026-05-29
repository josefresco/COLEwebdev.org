/* global React, ReactDOM */

const UM_EDIT_TYPES = [
  { icon: '✎', title: 'Text & Copy Edits', body: 'Update page copy, headlines, bios, service descriptions, pricing, hours, addresses. Any text on any page.' },
  { icon: '◻', title: 'Image Swaps', body: 'Replace photos, swap a hero image, upload new headshots or product images. We handle resizing and optimization.' },
  { icon: '+', title: 'New Pages & Sections', body: 'Add a new service page, a team member section, a landing page, or a content block to an existing page.' },
  { icon: '⊟', title: 'Form Changes', body: 'Update contact form fields, add a new form, change where submissions go, or wire up a new notification email.' },
  { icon: '≡', title: 'Navigation Updates', body: 'Add, remove, or rename nav items. Reorganize menus. Add a dropdown or mobile nav link.' },
  { icon: '◈', title: 'Plugin Configuration', body: 'Update plugin settings, install a new plugin, configure a widget, or troubleshoot a broken extension.' },
  { icon: '↗', title: 'Link & Button Updates', body: 'Fix broken links, update URLs after a rebrand, change button destinations, add or remove CTAs.' },
  { icon: '◇', title: 'Layout Adjustments', body: 'Move a section, adjust spacing, change a column layout, or make design tweaks that don\'t require a full redesign.' },
];

const UM_PROCESS = [
  {
    num: '01',
    title: 'Submit your request',
    body: 'Email or call with what needs to change. A quick list or a screenshot with annotations. Whatever is easiest for you.',
  },
  {
    num: '02',
    title: 'We estimate the time',
    body: 'We\'ll confirm how long it\'ll take before we start. No surprise bills. If scope changes mid-task, we tell you first.',
  },
  {
    num: '03',
    title: 'Done and confirmed',
    body: 'Changes are made, you review, and we invoice for actual time spent.',
  },
];

const UM_OPT_SERVICES = [
  {
    href: 'wordpress-speed.html',
    icon: '⚡',
    color: '#5CC035',
    bg: 'rgba(92,192,53,0.1)',
    title: 'WordPress Speed Optimization',
    body: 'If your site feels slow, one-off edits won\'t fix it. We audit Core Web Vitals, image compression, caching, and plugin bloat to get your PageSpeed score where it should be.',
    cta: 'See Speed Optimization',
  },
  {
    href: 'web-accessibility.html',
    icon: '◑',
    color: '#0073AA',
    bg: 'rgba(0,115,170,0.1)',
    title: 'WCAG Accessibility Audit',
    body: 'An accessible site reaches more users and reduces ADA legal exposure. We audit against WCAG 2.1 AA, report every issue by severity, and remediate in code.',
    cta: 'See Accessibility Services',
  },
];

function UpdatesPage() {
  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="um-hero">
        <div className="um-hero-bg" aria-hidden="true" />
        <div className="um-hero-content">
          <div className="shell">
            <span className="eyebrow um-eyebrow">Services · Updates &amp; Maintenance</span>
            <h1 className="um-hero-hl">
              Need something changed? <em>We'll handle it.</em>
            </h1>
            <p className="um-hero-sub">
              Simple, hourly-rate edits for businesses that need content updated, pages added, or small changes made, without committing to a monthly plan. You tell us what to fix. We fix it.
            </p>
            <div className="um-hero-actions">
              <a className="btn btn--accent" href="contact.html">
                Submit an edit request <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost um-ghost" href="hosting.html">
                See Care Plans instead <span className="arrow">→</span>
              </a>
            </div>
            <div className="um-hero-note">
              Billed at our standard hourly rate
            </div>
          </div>
        </div>
      </div>

      <SummaryStrip
        summary="Hourly-rate website edits: text updates, image swaps, new pages, form changes, and more. No monthly commitment. You request it, we do it, we invoice for actual time."
        points={['Hourly Rate', 'No Retainer', 'Any CMS', 'No Commitment']}
      />

      {/* What we update */}
      <section className="um-edits">
        <div className="shell">
          <div className="um-edits-hd">
            <span className="eyebrow">What we can update</span>
            <h2 className="um-edits-hl">If it's on your site, we can change it.</h2>
            <p className="um-edits-sub">
              We work on WordPress, traditional HTML/CSS sites, and most common CMS platforms. If we built it, we know it. If someone else built it, we'll review it first and let you know if there are any complications.
            </p>
          </div>
          <div className="um-edits-grid">
            {UM_EDIT_TYPES.map(function(e) {
              return (
                <div key={e.title} className="um-edit-card">
                  <div className="um-edit-icon">{e.icon}</div>
                  <div className="um-edit-title">{e.title}</div>
                  <p className="um-edit-body">{e.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="um-process">
        <div className="shell">
          <div className="um-process-hd">
            <span className="eyebrow">How it works</span>
            <h2 className="um-process-hl">Request, estimate, done.</h2>
          </div>
          <div className="um-process-steps">
            {UM_PROCESS.map(function(step) {
              return (
                <div key={step.num} className="um-step">
                  <div className="um-step-num">{step.num}</div>
                  <div className="um-step-title">{step.title}</div>
                  <p className="um-step-body">{step.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Care plan upsell */}
      <section className="um-careplan">
        <div className="shell um-careplan-inner">
          <div>
            <span className="eyebrow um-careplan-eyebrow">High volume of edits?</span>
            <h2 className="um-careplan-hl">A Care Plan may be more cost-effective.</h2>
            <p className="um-careplan-body">
              If you find yourself requesting edits every month, our Care Plans bundle ongoing updates, WordPress maintenance, backups, security monitoring, and priority support into a single monthly rate, often at a lower effective hourly cost than ad-hoc billing.
            </p>
            <a className="btn btn--primary" href="hosting.html">
              See Hosting + Care Plans <span className="arrow">→</span>
            </a>
          </div>
          <div className="um-careplan-list">
            <div className="um-careplan-col-label">Care Plans include</div>
            {[
              'Monthly content edits included',
              'WordPress core + plugin updates',
              'Daily automated backups',
              'Security monitoring',
              'Uptime alerts',
              'Priority support queue',
              'Monthly plain-English report',
            ].map(function(item) {
              return (
                <div key={item} className="um-careplan-row">
                  <span className="um-careplan-check">✓</span>
                  <span>{item}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Optimization services */}
      <section className="um-opt">
        <div className="shell">
          <div className="um-opt-hd">
            <span className="eyebrow">Beyond edits</span>
            <h2 className="um-opt-hl">Some problems need more than a content update.</h2>
            <p className="um-opt-sub">
              If your site is slow, inaccessible, or falling behind on compliance, a text swap won't fix it. These services go deeper.
            </p>
          </div>
          <div className="um-opt-grid">
            {UM_OPT_SERVICES.map(function(s) {
              return (
                <div key={s.title} className="um-opt-card">
                  <div className="um-opt-icon" style={{ background: s.bg, color: s.color }}>{s.icon}</div>
                  <h3 className="um-opt-title">{s.title}</h3>
                  <p className="um-opt-body">{s.body}</p>
                  <a href={s.href} className="um-opt-link">
                    {s.cta} <span className="arrow">→</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="um-cta">
        <div className="shell um-cta-inner">
          <div>
            <h2 className="um-cta-hl">Have a list of changes? Send it over.</h2>
            <p className="um-cta-sub">Email or call with what needs to change. We'll confirm the time estimate before we start.</p>
            <div className="um-cta-related">
              <span className="um-cta-related-label">Related:</span>
              <a href="hosting.html" className="um-cta-related-link">Care Plans →</a>
              <a href="wordpress-speed.html" className="um-cta-related-link">WordPress Speed →</a>
              <a href="web-accessibility.html" className="um-cta-related-link">Accessibility Audit →</a>
            </div>
          </div>
          <div className="um-cta-actions">
            <a className="btn btn--accent" href="contact.html">
              Contact Us <span className="arrow">→</span>
            </a>
            <a className="btn btn--ghost um-cta-ghost" href="tel:5084132043">
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

const umRoot = ReactDOM.createRoot(document.getElementById('root'));
umRoot.render(<UpdatesPage />);
