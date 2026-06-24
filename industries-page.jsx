/* global React, ReactDOM */

function IndustryCard({ industry }) {
  return (
    <a href={industry.slug + '.html'} className="ih-card">
      <div className="ih-card-body">
        <h3 className="ih-card-name">{industry.industry}</h3>
        <p className="ih-card-desc">{industry.metaDesc}</p>
      </div>
      <span className="ih-card-arrow">→</span>
    </a>
  );
}

function IndustriesPage() {
  const industries = window.INDUSTRY_DATA;

  return (
    <React.Fragment>
      <Header />

      <div className="ih-hero">
        <div className="ih-hero-bg" aria-hidden="true" />
        <div className="ih-hero-content">
          <div className="shell">
            <span className="eyebrow ih-eyebrow">By Industry</span>
            <h1 className="ih-hero-hl">Web Design by <em>Industry</em></h1>
            <p className="ih-hero-sub">
              Every industry has different website needs. We build sites tailored to how customers in each sector actually search, compare, and contact. Select your industry below to see what's included, who we've built for, and what makes your category different.
            </p>
          </div>
        </div>
      </div>

      <section className="ih-body">
        <div className="shell">
          <div className="ih-grid">
            {industries.map(ind => (
              <IndustryCard key={ind.id} industry={ind} />
            ))}
          </div>
        </div>
      </section>

      <section className="ih-cta-section">
        <div className="shell">
          <div className="ih-cta">
            <div>
              <h2 className="ih-cta-hl">Don't see your industry?</h2>
              <p className="ih-cta-sub">
                We work with Cape Cod businesses of every kind. If your category isn't listed, we've almost certainly built something similar — get in touch and we'll tell you exactly what your site needs.
              </p>
            </div>
            <div className="ih-cta-actions">
              <a className="btn btn--primary" href="contact.html">Get in touch <span className="arrow">→</span></a>
              <a className="btn btn--ghost" href="services.html" style={{ color: 'rgba(255,255,255,0.7)', borderColor: 'rgba(255,255,255,0.2)' }}>All services</a>
            </div>
          </div>
        </div>
      </section>

      <NewsletterBanner />
      <Footer />
    </React.Fragment>
  );
}

const ihRoot = ReactDOM.createRoot(document.getElementById('root'));
ihRoot.render(<IndustriesPage />);
