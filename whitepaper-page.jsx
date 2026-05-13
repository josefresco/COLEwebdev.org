/* global React, ReactDOM */

function WhitepaperPage() {
  const id = window.CURRENT_WP_ID;
  const all = window.WHITEPAPERS_DATA || [];
  const idx = all.findIndex(function(w) { return w.id === id; });
  const wp = all[idx];
  const prev = idx > 0 ? all[idx - 1] : null;
  const next = idx < all.length - 1 ? all[idx + 1] : null;

  if (!wp) {
    return (
      <React.Fragment>
        <Header />
        <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ marginBottom: 16, color: 'var(--ink-2)' }}>Guide not found.</p>
            <a className="btn btn--primary" href="whitepapers.html">← All Whitepapers</a>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="wpa-hero">
        <div className="wpa-hero-bg" aria-hidden="true" />
        <div className="wpa-hero-content">
          <div className="shell">
            <a href="whitepapers.html" className="wpa-breadcrumb">← Web Design Whitepapers</a>
            <div className="wpa-hero-row">
              <span className="wpa-hero-num" aria-hidden="true">{wp.num}</span>
              <div>
                <span className="eyebrow wpa-eyebrow">Whitepaper {wp.num} of {all.length}</span>
                <h1 className="wpa-hero-hl">{wp.title}</h1>
                <p className="wpa-hero-sub">{wp.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <section className="wpa-body">
        <div className="shell">
          <div className="wpa-layout">

            {/* Article */}
            <article className="wpa-article">
              <p className="wpa-summary">{wp.summary}</p>

              {wp.sections.map(function(sec, i) {
                return (
                  <div key={i} className="wpa-section">
                    <h2 className="wpa-section-hl">{sec.heading}</h2>
                    {sec.body.map(function(p, j) {
                      return <p key={j} className="wpa-section-p">{p}</p>;
                    })}
                  </div>
                );
              })}

              <div className="wpa-takeaway">
                <span className="wpa-takeaway-label">Key Takeaway</span>
                <p className="wpa-takeaway-body">{wp.takeaway}</p>
              </div>

              {/* Mobile CTAs — visible only below 900px */}
              <div className="wpa-mobile-ctas">
                <a href="quote.html" className="btn btn--primary" style={{ textAlign: 'center' }}>
                  Request a Quote <span className="arrow">→</span>
                </a>
                <a
                  href="https://enewsletter.colewebdev.com/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--ghost"
                  style={{ textAlign: 'center' }}
                >
                  Subscribe to Newsletter <span className="arrow">→</span>
                </a>
                {(prev || next) && (
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    {prev && (
                      <a href={'wp-' + prev.id + '.html'} className="btn btn--ghost" style={{ flex: 1, textAlign: 'center', fontSize: 13 }}>
                        ← {prev.title}
                      </a>
                    )}
                    {next && (
                      <a href={'wp-' + next.id + '.html'} className="btn btn--ghost" style={{ flex: 1, textAlign: 'center', fontSize: 13 }}>
                        {next.title} →
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="wpa-sidebar">
              <a href="whitepapers.html" className="wpa-back">← All Guides</a>

              {/* Quote CTA */}
              <div className="wpa-card wpa-card--quote">
                <p className="wpa-card-eyebrow">Ready to build?</p>
                <h2 className="wpa-card-hl">Put this into practice.</h2>
                <p className="wpa-card-sub">Tell us about your project — we'll get back to you within one business day with a real scope and a fair price.</p>
                <a href="quote.html" className="btn btn--primary wpa-card-btn">
                  Request a Quote <span className="arrow">→</span>
                </a>
                <div className="wpa-card-note">First consultation is free</div>
              </div>

              {/* Newsletter CTA */}
              <div className="wpa-card wpa-card--nl">
                <p className="wpa-card-eyebrow">Stay current</p>
                <h2 className="wpa-card-hl">Quarterly newsletter.</h2>
                <p className="wpa-card-sub">Web design tips, project launches, and Cape Cod business news — four times a year. No spam, ever.</p>
                <a
                  href="https://enewsletter.colewebdev.com/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wpa-nl-btn"
                >
                  Subscribe Free <span className="arrow">→</span>
                </a>
              </div>

              {/* Prev / Next */}
              {(prev || next) && (
                <nav className="wpa-nav" aria-label="Whitepaper navigation">
                  {prev && (
                    <a href={'wp-' + prev.id + '.html'} className="wpa-nav-item">
                      <span className="wpa-nav-dir">← Previous</span>
                      <span className="wpa-nav-title">{prev.title}</span>
                    </a>
                  )}
                  {next && (
                    <a href={'wp-' + next.id + '.html'} className="wpa-nav-item">
                      <span className="wpa-nav-dir">Next →</span>
                      <span className="wpa-nav-title">{next.title}</span>
                    </a>
                  )}
                </nav>
              )}
            </aside>

          </div>
        </div>
      </section>

      <NewsletterBanner />
      <Footer />
    </React.Fragment>
  );
}

const wpaRoot = ReactDOM.createRoot(document.getElementById('root'));
wpaRoot.render(<WhitepaperPage />);
