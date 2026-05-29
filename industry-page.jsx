/* global React, ReactDOM */

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
  const ind = (window.INDUSTRY_DATA || []).find(i => i.id === window.CURRENT_INDUSTRY_ID);
  if (!ind) return <div style={{ padding: 40 }}>Industry not found.</div>;

  React.useEffect(() => {
    if (!ind.faq || ind.faq.length === 0) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'ind-faq-schema';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: ind.faq.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    });
    document.head.appendChild(script);
    return () => { const el = document.getElementById('ind-faq-schema'); if (el) el.remove(); };
  }, []);

  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="ind-hero">
        <div className="ind-hero-bg" aria-hidden="true" />
        <div className="ind-hero-content">
          <div className="shell">
            <span className="eyebrow ind-eyebrow">Industries · {ind.industry}</span>
            <h1 className="ind-hero-hl">{ind.heroHeadline}</h1>
            <p className="ind-hero-sub">{ind.heroSub}</p>
            <div className="ind-hero-actions">
              <a className="btn btn--accent" href="quote.html">Get a Free Quote <span className="arrow">→</span></a>
              <a className="btn btn--ghost ind-ghost" href="tel:5084132043">508.413.2043</a>
            </div>
          </div>
        </div>
      </div>

      <SummaryStrip
        summary={`COLEwebdev has been building websites for Cape Cod ${ind.industry.toLowerCase()} since 2006. Custom-built, mobile-first, and built to rank.`}
        points={['Local Studio', '20 Years Experience', '700+ Sites Built', '4.8★ Google']}
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