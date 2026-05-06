/* global React, ReactDOM */

const AI_BUILDS = [
  {
    icon: '◇',
    bg: 'rgba(123,192,67,0.14)',
    color: '#5DA02E',
    title: 'Booking & Scheduling',
    body: 'Replace phone-tag with a smart booking flow. Customers pick times, answer intake questions, and get confirmations automatically — 24 hours a day.',
    tag: 'Appointments · Reservations',
  },
  {
    icon: '⌘',
    bg: 'rgba(14,42,74,0.10)',
    color: '#0E2A4A',
    title: 'Intake & Lead Forms',
    body: 'Multi-step forms that qualify leads before they reach your inbox. Conditional logic, file uploads, digital signatures, and instant email notifications.',
    tag: 'Quotes · Applications · Intake',
  },
  {
    icon: '◎',
    bg: 'rgba(242,107,31,0.14)',
    color: '#F26B1F',
    title: 'On-Site Search',
    body: 'AI-powered search that understands what visitors mean, not just what they type. Works across your products, services, FAQs, and blog content.',
    tag: 'Search · Discovery · FAQs',
  },
  {
    icon: '↗',
    bg: 'rgba(123,192,67,0.14)',
    color: '#5DA02E',
    title: 'AI Chat & Assistant',
    body: 'A conversational assistant trained on your business — answers common questions, captures contact info, and hands off to you when a human is needed.',
    tag: 'Chat · Support · Lead Capture',
  },
  {
    icon: '✦',
    bg: 'rgba(14,42,74,0.10)',
    color: '#0E2A4A',
    title: 'Custom Calculators',
    body: 'Quote estimators, pricing tools, ROI calculators — give visitors an instant, personalized answer that moves them closer to a decision.',
    tag: 'Estimators · Pricing · ROI',
  },
  {
    icon: '↻',
    bg: 'rgba(242,107,31,0.14)',
    color: '#F26B1F',
    title: 'Workflow Automation',
    body: 'Connect your site to the tools you already use — CRMs, email platforms, Google Sheets, Zapier. Data flows where it needs to go without manual entry.',
    tag: 'CRM · Email · Integrations',
  },
];

const HOW_STEPS = [
  {
    n: '01',
    title: 'Conversation',
    body: 'A free call to understand your workflow, your bottlenecks, and what a win looks like. We scope a single focused app — nothing bloated.',
  },
  {
    n: '02',
    title: 'Design & Spec',
    body: 'A written spec with the exact screens, logic, and integrations. You approve before a single line of code is written.',
  },
  {
    n: '03',
    title: 'Build',
    body: 'Most apps ship in two weeks. You see a working prototype by day five. Real feedback, real iterations — no black box.',
  },
  {
    n: '04',
    title: 'Launch & Support',
    body: 'We deploy, train your team, and stay available. Most clients add a monthly Care Plan so the app keeps up as your needs evolve.',
  },
];

const USE_CASES = [
  { text: 'Appointment booking with intake questionnaire', industry: 'Health & Wellness' },
  { text: 'Reservation system with deposit collection', industry: 'Hospitality' },
  { text: 'Quote request form with instant estimate', industry: 'Contractors' },
  { text: 'AI assistant answering product questions', industry: 'Retail' },
  { text: 'Lead capture with CRM integration', industry: 'Services' },
  { text: 'Camp registration with waiver signing', industry: 'Recreation' },
  { text: 'On-site search across services + blog', industry: 'Any' },
  { text: 'Membership application & renewal flow', industry: 'Nonprofits' },
];

function AiAppsPage() {
  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="ai-hero">
        <div className="ai-hero-bg" aria-hidden="true" />
        <div className="ai-hero-content">
          <div className="shell">
            <span className="eyebrow ai-eyebrow">Services · AI Web Apps</span>
            <h1 className="ai-hero-hl">
              From idea to <em>working app</em><br />in two weeks.
            </h1>
            <p className="ai-hero-sub">
              Booking systems, intake forms, on-site search, and AI assistants — built into your website and trained on your business. We make the tools that free up your time.
            </p>
            <div className="ai-hero-actions">
              <a className="btn btn--accent" href="contact.html">
                Start a conversation <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost ai-ghost" href="tel:5084132043">
                508.413.2043
              </a>
            </div>
            <div className="ai-hero-tags">
              {['Booking & Scheduling', 'Lead Forms', 'AI Chat', 'On-Site Search', 'Automations'].map(t => (
                <span key={t} className="ai-hero-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* What we build */}
      <section className="ai-builds">
        <div className="shell">
          <div className="ai-builds-hd">
            <span className="eyebrow">What we build</span>
            <h2 className="ai-builds-hl">Six tools your site can do for you.</h2>
          </div>
          <div className="ai-builds-grid">
            {AI_BUILDS.map(b => (
              <div key={b.title} className="ai-build-card">
                <div className="ai-build-icon" style={{ background: b.bg, color: b.color }}>
                  {b.icon}
                </div>
                <div className="ai-build-title">{b.title}</div>
                <div className="ai-build-body">{b.body}</div>
                <div className="ai-build-tag">{b.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="ai-stats">
        <div className="shell ai-stats-grid">
          <div className="ai-stat-item">
            <span className="ai-stat-num">2 wks</span>
            <span className="ai-stat-label">Average time from kickoff call to working app in your site</span>
          </div>
          <div className="ai-stat-item">
            <span className="ai-stat-num">24 / 7</span>
            <span className="ai-stat-label">Your app handles bookings, questions, and leads while you sleep</span>
          </div>
          <div className="ai-stat-item">
            <span className="ai-stat-num">0</span>
            <span className="ai-stat-label">New software for your team to learn — it lives right in your site</span>
          </div>
        </div>
      </div>

      {/* How it works */}
      <section className="ai-how">
        <div className="shell">
          <div className="ai-how-hd">
            <span className="eyebrow">Our process</span>
            <h2 className="ai-how-hl">Scoped tight. Shipped fast.</h2>
          </div>
          <div className="ai-how-grid">
            {HOW_STEPS.map(s => (
              <div key={s.n} className="ai-how-step">
                <span className="ai-how-n">{s.n}</span>
                <div className="ai-how-title">{s.title}</div>
                <div className="ai-how-body">{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="ai-uses">
        <div className="shell ai-uses-grid">
          <div>
            <span className="eyebrow">Who it's for</span>
            <h2 className="ai-uses-hl">Built for Cape Cod businesses that are tired of doing things manually.</h2>
            <p className="ai-uses-p">
              If you're still taking bookings by phone, chasing leads through email, or losing visitors who can't find what they need — there's a better way. We've built apps for restaurants, contractors, wellness studios, nonprofits, and retailers across the Cape and Islands.
            </p>
            <a className="btn btn--accent" href="contact.html">
              Tell us what you need <span className="arrow">→</span>
            </a>
          </div>
          <div className="ai-uses-list">
            {USE_CASES.map(u => (
              <div key={u.text} className="ai-uses-item">
                <span className="ai-uses-dot" />
                <span className="ai-uses-text">{u.text}</span>
                <span className="ai-uses-industry">{u.industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ai-cta">
        <div className="shell">
          <div className="ai-cta-card">
            <div>
              <h2 className="ai-cta-hl">Ready to put your site to work?</h2>
              <p className="ai-cta-sub">
                Tell us the one manual task you wish your website handled. We'll tell you if we can build it — usually in that first call.
              </p>
            </div>
            <div className="ai-cta-actions">
              <a className="btn btn--accent" href="contact.html">
                Start a conversation <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost ai-ghost" href="tel:5084132043">
                508.413.2043
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}

const aiRoot = ReactDOM.createRoot(document.getElementById('root'));
aiRoot.render(<AiAppsPage />);
