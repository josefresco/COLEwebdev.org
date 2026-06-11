/* global React, ReactDOM */

const IND_FORM_ENDPOINT = 'https://formspree.io/f/xnjwgqld';

const IND_REVIEWS = [
  {
    name: 'Ann Mahoney',
    quote: "If I could, I would give COLEweb 10 stars! Desiree and Josiah were absolutely amazing from start to finish. I couldn't be happier with how everything came together.",
  },
  {
    name: 'Martina Mehl',
    quote: "I am a huge fan of the team at COLEwebdev. They created an incredible website for my practice that has truly impressed my clients.",
  },
  {
    name: 'Stephen Clark',
    quote: "Desiree and the Cole group did a fantastic job building our website. Very professional, personal, and communicative. Wouldn't go anywhere else.",
  },
];

function IndLeadForm({ industry }) {
  const [form, setForm] = React.useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = React.useState('idle');

  const set = (k) => (e) => setForm(function(f) { return Object.assign({}, f, { [k]: e.target.value }); });

  const submit = async function(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch(IND_FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: industry + ' Lead — COLEwebdev',
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      if (window.gtag) window.gtag('event', 'form_submit', { event_category: 'lead', form_name: 'industry_lead', industry: industry });
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="ind-lead-card ind-lead-success">
        <div className="ind-lead-success-icon">✓</div>
        <p className="ind-lead-success-hl">Got it, thanks!</p>
        <p className="ind-lead-success-sub">We'll be in touch quickly.</p>
      </div>
    );
  }

  return (
    <form className="ind-lead-card" onSubmit={submit} noValidate>
      <p className="ind-lead-card-hl">Get a Free Quote</p>
      <p className="ind-lead-card-sub">No obligation. We reply fast.</p>
      <div className="ind-lead-fields">
        <input className="ind-lead-input" type="text" placeholder="Your name *" required value={form.name} onChange={set('name')} />
        <input className="ind-lead-input" type="email" placeholder="Email address *" required value={form.email} onChange={set('email')} />
        <input className="ind-lead-input" type="tel" placeholder="Phone number" value={form.phone} onChange={set('phone')} />
        <textarea className="ind-lead-input ind-lead-textarea" placeholder="Tell us about your project..." rows={3} value={form.message} onChange={set('message')} />
      </div>
      {status === 'error' && <p className="ind-lead-error">Something went wrong — please try again or call 508.413.2043.</p>}
      <button className="btn btn--accent ind-lead-btn" type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : <React.Fragment>Request a Quote <span className="arrow">→</span></React.Fragment>}
      </button>
      <p className="ind-lead-footer-note">Or call <a href="tel:5084132043">508.413.2043</a></p>
      <p className="form-privacy">By submitting, you agree to our <a href="privacy.html">Privacy Policy</a>.</p>
    </form>
  );
}

function IndFAQItem({ q, a }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={'ind-faq-item' + (open ? ' is-open' : '')}>
      <button className="ind-faq-q" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{q}</span>
        <span className="ind-faq-chevron" aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="ind-faq-a">{a}</div>}
    </div>
  );
}

function IndustryPage() {
  const ind = (window.INDUSTRY_DATA || []).find(function(i) { return i.id === window.CURRENT_INDUSTRY_ID; });
  if (!ind) return <div style={{ padding: 40 }}>Industry not found.</div>;

  React.useEffect(function() {
    if (!ind.faq || ind.faq.length === 0) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'ind-faq-schema';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: ind.faq.map(function(item) {
        return {
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        };
      }),
    });
    document.head.appendChild(script);
    return function() { const el = document.getElementById('ind-faq-schema'); if (el) el.remove(); };
  }, []);

  return (
    <React.Fragment>
      <Header />

      {/* Hero — two-column with inline lead form */}
      <div className="ind-hero">
        <div className="ind-hero-bg" aria-hidden="true" />
        <div className="ind-hero-content">
          <div className="shell">
            <div className="ind-hero-grid">
              <div className="ind-hero-left">
                <span className="eyebrow ind-eyebrow">Industries · {ind.industry}</span>
                <h1 className="ind-hero-hl">{ind.heroHeadline}</h1>
                <p className="ind-hero-sub">{ind.heroSub}</p>
                <div className="ind-hero-chips">
                  <span className="ind-chip">20 Years Experience</span>
                  <span className="ind-chip">200+ Active Sites</span>
                  <span className="ind-chip">4.8★ Google</span>
                  <span className="ind-chip">Cape Cod Local</span>
                </div>
              </div>
              <IndLeadForm industry={ind.industry} />
            </div>
          </div>
        </div>
      </div>

      <SummaryStrip
        summary={'COLEwebdev has been building websites for Cape Cod ' + ind.industry.toLowerCase() + ' since 2006. Custom-built, mobile-first, and built to rank.'}
        points={['Local Studio', '20 Years Experience', '200+ Sites Managed', '4.8★ Google']}
      />

      {/* Why it matters */}
      <section className="ind-why">
        <div className="shell">
          <div className="ind-why-hd">
            <span className="eyebrow">Why it matters</span>
            <h2 className="ind-why-hl">What a strong website does for {ind.industry.toLowerCase()}.</h2>
            <p className="ind-why-intro">{ind.intro}</p>
          </div>
          <div className="ind-why-grid">
            {ind.whyCards.map(function(card) {
              return (
                <div key={card.title} className="ind-why-card">
                  <div className="ind-why-icon">{card.icon}</div>
                  <h3 className="ind-why-title">{card.title}</h3>
                  <p className="ind-why-body">{card.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="ind-features">
        <div className="shell">
          <div className="ind-features-hd">
            <span className="eyebrow">What we build</span>
            <h2 className="ind-features-hl">Built for how {ind.industry.toLowerCase()} actually operate.</h2>
          </div>
          <div className="ind-features-grid">
            {ind.features.map(function(f) {
              return (
                <div key={f.title} className="ind-feature-card">
                  <div className="ind-feature-icon">{f.icon}</div>
                  <div className="ind-feature-title">{f.title}</div>
                  <p className="ind-feature-body">{f.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clients */}
      {ind.clients && ind.clients.length > 0 && (
        <section className="ind-clients">
          <div className="shell">
            <div className="ind-clients-hd">
              <span className="eyebrow">Our work</span>
              <h2 className="ind-clients-hl">Cape Cod {ind.industry.toLowerCase()} we have built for.</h2>
            </div>
            <div className="ind-clients-grid">
              {ind.clients.map(function(c) {
                return (
                  <a
                    key={c.name}
                    href={c.href}
                    className="ind-client-card"
                    target={c.href !== '#' ? '_blank' : undefined}
                    rel={c.href !== '#' ? 'noopener' : undefined}
                  >
                    <div className="ind-client-name">{c.name}</div>
                    <div className="ind-client-type">{c.type}</div>
                    {c.href !== '#' && <span className="ind-client-arrow">↗</span>}
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Reviews */}
      <section className="ind-reviews">
        <div className="shell">
          <div className="ind-reviews-hd">
            <span className="eyebrow ind-reviews-eyebrow">What clients say</span>
            <h2 className="ind-reviews-hl">Trusted by Cape Cod businesses for 20 years.</h2>
          </div>
          <div className="ind-reviews-grid">
            {IND_REVIEWS.map(function(r) {
              return (
                <div key={r.name} className="ind-review-card">
                  <div className="ind-review-stars">★★★★★</div>
                  <p className="ind-review-quote">"{r.quote}"</p>
                  <p className="ind-review-name">— {r.name}</p>
                </div>
              );
            })}
          </div>
          <div className="ind-reviews-footer">
            <a href="testimonials.html" className="ind-reviews-link">Read all 70+ Google reviews →</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ind-faq">
        <div className="shell">
          <div className="ind-faq-hd">
            <span className="eyebrow">Common questions</span>
            <h2 className="ind-faq-hl">What {ind.industry.toLowerCase()} ask us most.</h2>
          </div>
          <div className="ind-faq-list">
            {ind.faq.map(function(item, i) {
              return <IndFAQItem key={i} q={item.q} a={item.a} />;
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ind-cta">
        <div className="shell ind-cta-inner">
          <div>
            <h2 className="ind-cta-hl">Ready to talk about your project?</h2>
            <p className="ind-cta-sub">Free consultation, written quote, no obligation. We have been building for Cape Cod {ind.industry.toLowerCase()} since 2006.</p>
            {ind.relatedIndustries && ind.relatedIndustries.length > 0 && (
              <div className="ind-cta-related">
                <span className="ind-cta-related-label">Also:</span>
                {ind.relatedIndustries.map(function(r) {
                  return (
                    <a key={r.name} href={r.href} className="ind-cta-related-link">{r.name} →</a>
                  );
                })}
                <a href="cape-cod-web-design.html" className="ind-cta-related-link">All Cape Cod towns →</a>
              </div>
            )}
          </div>
          <div className="ind-cta-actions">
            <a className="btn btn--accent" href="quote.html">Request a Quote <span className="arrow">→</span></a>
            <a className="btn btn--ghost ind-cta-ghost" href="contact.html">Contact Us <span className="arrow">→</span></a>
          </div>
        </div>
      </section>

      <NewsletterBanner />
      <Footer />
    </React.Fragment>
  );
}

const indRoot = ReactDOM.createRoot(document.getElementById('root'));
indRoot.render(<IndustryPage />);
