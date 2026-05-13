/* global React, ReactDOM */

function NotFoundPage() {
  return (
    <React.Fragment>
      <Header />

      <section className="nf-hero">
        <div className="nf-hero-bg" aria-hidden="true" />
        <div className="nf-hero-content">
          <div className="shell">
            <div className="nf-inner">
              <div className="nf-code" aria-hidden="true">404</div>
              <div className="nf-body">
                <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>Page not found</span>
                <h1 className="nf-hl">We can't find that page.</h1>
                <p className="nf-sub">
                  The URL may have changed, been removed, or never existed. Let's get you somewhere useful.
                </p>
                <div className="nf-actions">
                  <a className="btn btn--accent" href="index.html">Back to Home <span className="arrow">→</span></a>
                  <a className="btn btn--ghost" href="services.html">View Services</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="nf-links-section">
        <div className="shell">
          <p className="nf-links-label">Popular pages</p>
          <div className="nf-links-grid">
            <a className="nf-link-card" href="website-design.html">
              <span className="nf-link-glyph">◇</span>
              <div>
                <div className="nf-link-title">Web Design</div>
                <div className="nf-link-desc">Modern, mobile-first websites.</div>
              </div>
            </a>
            <a className="nf-link-card" href="seo.html">
              <span className="nf-link-glyph">⚡</span>
              <div>
                <div className="nf-link-title">SEO & Local Search</div>
                <div className="nf-link-desc">Show up when neighbors search.</div>
              </div>
            </a>
            <a className="nf-link-card" href="portfolio.html">
              <span className="nf-link-glyph">✦</span>
              <div>
                <div className="nf-link-title">Portfolio</div>
                <div className="nf-link-desc">Recent client work across Cape Cod.</div>
              </div>
            </a>
            <a className="nf-link-card" href="contact.html">
              <span className="nf-link-glyph">→</span>
              <div>
                <div className="nf-link-title">Contact</div>
                <div className="nf-link-desc">Start a conversation with us.</div>
              </div>
            </a>
            <a className="nf-link-card" href="whitepapers.html">
              <span className="nf-link-glyph">⌘</span>
              <div>
                <div className="nf-link-title">Whitepapers</div>
                <div className="nf-link-desc">Free guides on web design strategy.</div>
              </div>
            </a>
            <a className="nf-link-card" href="sitemap.html">
              <span className="nf-link-glyph">◐</span>
              <div>
                <div className="nf-link-title">Site Map</div>
                <div className="nf-link-desc">Every page on colewebdev.org.</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}

const nfRoot = ReactDOM.createRoot(document.getElementById('root'));
nfRoot.render(<NotFoundPage />);
