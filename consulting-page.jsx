/* global React, ReactDOM */

const CN_OFFERS = [
  {
    icon: '↗',
    bg: 'rgba(14,42,74,0.10)',
    color: '#0E2A4A',
    title: 'Website Strategy',
    body: 'Not sure where to start — or whether to rebuild, redesign, or stay put? We help you map a clear path forward: platform selection, content architecture, user flows, and launch sequencing so you build the right site from the start.',
    features: [
      'Platform recommendations (WordPress, Shopify, custom)',
      'Content and information architecture planning',
      'Competitive landscape review',
      'Project scoping and timeline planning',
      'Budget guidance and priority sequencing',
    ],
  },
  {
    icon: '◎',
    bg: 'rgba(123,192,67,0.14)',
    color: '#5DA02E',
    title: 'Website Audits',
    body: 'A thorough, honest review of your existing site — covering performance, SEO, user experience, content quality, and missed conversion opportunities. You leave with a prioritized action list, not a vague report.',
    features: [
      'Page speed and Core Web Vitals analysis',
      'SEO and local search gap review',
      'UX and navigation assessment',
      'Content quality and messaging audit',
      'Prioritized recommendations with clear next steps',
    ],
  },
  {
    icon: '◇',
    bg: 'rgba(242,107,31,0.14)',
    color: '#F26B1F',
    title: 'Business Consulting',
    body: 'Josiah and Desiree Cole are entrepreneurs — they\'ve built, grown, and run businesses on Cape Cod for over two decades. That lived experience translates into practical, grounded advice for business owners who need a second opinion, a sounding board, or a concrete plan.',
    features: [
      'Growth strategy for established businesses',
      'Web presence planning for new ventures',
      'Digital marketing direction and channel selection',
      'Vendor and technology evaluation',
      'Honest second opinions before major decisions',
    ],
  },
  {
    icon: '⚙',
    bg: 'rgba(14,42,74,0.10)',
    color: '#0E2A4A',
    title: 'Training & Coaching',
    body: 'You shouldn\'t need to call a developer every time you want to update a page or publish a post. We train business owners and their teams to manage their own sites confidently — on their schedule, at their pace.',
    features: [
      'WordPress and WooCommerce admin training',
      'Content publishing and media management',
      'SEO basics for non-technical users',
      'One-on-one and small group sessions',
      'Recorded walkthroughs for future reference',
    ],
  },
];

const CN_WHO = [
  {
    glyph: '◇',
    title: 'Established businesses ready to grow',
    body: 'You have a site that\'s working — but you know it could work harder. You need a clear strategy, not another round of guesswork.',
  },
  {
    glyph: '↗',
    title: 'Entrepreneurs planning something new',
    body: 'You\'re building from scratch and want to get the platform, structure, and budget right the first time. We\'ve been there.',
  },
  {
    glyph: '◎',
    title: 'Organizations that need a second opinion',
    body: 'You\'ve received proposals or advice that doesn\'t feel right. We\'ll give you an honest read — no upsell, no agenda.',
  },
  {
    glyph: '⚙',
    title: 'Teams that need hands-on training',
    body: 'Your site is built, but your staff can\'t update it confidently. We\'ll close that gap with practical, role-specific coaching.',
  },
];

const CN_STATS = [
  { num: '35+', label: 'Combined years of web and business experience between Josiah and Desiree Cole' },
  { num: '700+', label: 'Client projects delivered since COLEwebdev was founded in 2006' },
  { num: '2006', label: 'Founded in Eastham, MA — still here, still answering the phone' },
];

const CN_STEPS = [
  {
    num: '01',
    title: 'Schedule',
    body: 'Book a free intro call. Tell us what you\'re working on and what\'s not working. No forms to fill out, no prep required.',
  },
  {
    num: '02',
    title: 'Assess',
    body: 'We review your site, your goals, and your current situation — asking the questions that surface what\'s actually holding you back.',
  },
  {
    num: '03',
    title: 'Advise',
    body: 'You get clear, prioritized, actionable recommendations — not a 40-page report. Just what to do next, and why.',
  },
  {
    num: '04',
    title: 'Follow up',
    body: 'We\'re available if questions come up after the session. Consulting doesn\'t end when the call does.',
  },
];

function ConsultingPage() {
  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="cn-hero">
        <img className="cn-hero-img" src="assets/consulting-hero.jpg" alt="" aria-hidden="true" />
        <div className="cn-hero-bg" aria-hidden="true" />
        <div className="cn-hero-content">
          <div className="shell">
            <span className="eyebrow cn-eyebrow">Services · Consulting</span>
            <h1 className="cn-hero-hl">
              Expert guidance for your <em>next move.</em>
            </h1>
            <p className="cn-hero-sub">
              COLEwebdev consulting puts 35+ years of hands-on web and business experience to work for you — from website strategy and platform decisions to training, audits, and one-on-one coaching for Cape Cod businesses and beyond.
            </p>
            <div className="cn-hero-actions">
              <a className="btn btn--accent" href="contact.html">
                Book a consultation <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost cn-ghost" href="tel:5084132043">
                508.413.2043
              </a>
            </div>
            <div className="cn-tags">
              {['Website Strategy', 'Business Consulting', 'Website Audits', 'Training & Coaching'].map(t => (
                <span key={t} className="cn-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SummaryStrip
        summary="35+ years of web and business experience applied to your specific challenge — strategy, audits, platform decisions, and one-on-one coaching for Cape Cod businesses."
        points={['Website Strategy', 'Website Audits', 'Business Coaching', 'Platform Advice']}
      />

      {/* What we offer */}
      <section className="cn-offers">
        <div className="shell">
          <div className="cn-offers-hd">
            <span className="eyebrow">What we offer</span>
            <h2 className="cn-offers-hl">Four ways we can help.</h2>
          </div>
          <div className="cn-offers-grid">
            {CN_OFFERS.map(o => (
              <div key={o.title} className="cn-offer-card">
                <div className="cn-offer-icon" style={{ background: o.bg, color: o.color }}>{o.icon}</div>
                <div className="cn-offer-title">{o.title}</div>
                <div className="cn-offer-body">{o.body}</div>
                <ul className="cn-offer-list">
                  {o.features.map(f => <li key={f}>{f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="cn-who">
        <div className="shell">
          <div className="cn-who-hd">
            <span className="eyebrow">Who it's for</span>
            <h2 className="cn-who-hl">Consulting works best when the problem is real.</h2>
          </div>
          <div className="cn-who-grid">
            {CN_WHO.map(w => (
              <div key={w.title} className="cn-who-card">
                <div className="cn-who-glyph">{w.glyph}</div>
                <div className="cn-who-title">{w.title}</div>
                <div className="cn-who-body">{w.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="cn-stats">
        <div className="shell cn-stats-row">
          {CN_STATS.map(s => (
            <div key={s.num} className="cn-stat">
              <span className="cn-stat-num">{s.num}</span>
              <span className="cn-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* How it works */}
      <section className="cn-how">
        <div className="shell">
          <div className="cn-how-hd">
            <span className="eyebrow">How it works</span>
            <h2 className="cn-how-hl">Simple, direct, no-nonsense.</h2>
          </div>
          <div className="cn-how-steps">
            {CN_STEPS.map(s => (
              <div key={s.num} className="cn-step">
                <div className="cn-step-num">{s.num}</div>
                <div className="cn-step-title">{s.title}</div>
                <div className="cn-step-body">{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="cn-testi">
        <div className="shell">
          <div className="cn-testi-inner">
            <span className="cn-quote-mark" aria-hidden="true">"</span>
            <blockquote className="cn-quote">
              "We've been using COLEwebdev for many years now. They've been a great resource for our retail business, working closely on redesign elements and training on website edits. They're incredibly responsive and always willing to help!"
            </blockquote>
            <div className="cn-testi-meta">
              <div className="cn-testi-name">Jessica Wile</div>
              <div className="cn-testi-role">Agway of Cape Cod</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cn-cta">
        <div className="shell cn-cta-inner">
          <div>
            <h2 className="cn-cta-hl">Ready to talk through what's next?</h2>
            <p className="cn-cta-sub">The first hour is free. No commitment — just a real conversation with the people who will actually give you straight answers.</p>
            <div className="cn-related">
              <span className="cn-related-label">Related:</span>
              <a href="website-design.html" className="cn-related-link">Ready to build?</a>
              <a href="seo.html" className="cn-related-link">Want to improve your rankings?</a>
            </div>
          </div>
          <a className="btn btn--accent" href="contact.html">
            Start a conversation <span className="arrow">→</span>
          </a>
        </div>
      </section>

      <NewsletterBanner />
      <Footer />
    </React.Fragment>
  );
}

const cnRoot = ReactDOM.createRoot(document.getElementById('root'));
cnRoot.render(<ConsultingPage />);
