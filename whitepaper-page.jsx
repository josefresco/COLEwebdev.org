/* global React, ReactDOM */

const WP_RELATED_LINKS = {
  'what-web-design-does':    [{ text: 'Website Design + Build', href: 'website-design.html' }, { text: 'Our Process', href: 'process.html' }],
  'investment-value':        [{ text: 'Request a Quote', href: 'quote.html' }, { text: 'Website Design + Build', href: 'website-design.html' }],
  'diy-vs-pro':              [{ text: 'WordPress Design', href: 'wordpress.html' }, { text: 'Traditional Design', href: 'traditional.html' }, { text: 'Request a Quote', href: 'quote.html' }],
  'three-types':             [{ text: 'WordPress Design', href: 'wordpress.html' }, { text: 'Traditional Design', href: 'traditional.html' }, { text: 'E-Commerce', href: 'ecommerce.html' }],
  'seven-golden-rules':      [{ text: 'Website Design + Build', href: 'website-design.html' }, { text: 'Our Process', href: 'process.html' }],
  'five-principles':         [{ text: 'Website Design + Build', href: 'website-design.html' }, { text: 'SEO & Local Search', href: 'seo.html' }],
  'seven-cs':                [{ text: 'Website Design + Build', href: 'website-design.html' }, { text: 'Cape Cod Marketing', href: 'cape-cod-marketing.html' }],
  'faq-guide':               [{ text: 'Our Services', href: 'services.html' }, { text: 'Contact Us', href: 'contact.html' }],
  'how-to-choose':           [{ text: 'Our Process', href: 'process.html' }, { text: 'Portfolio', href: 'portfolio.html' }, { text: 'Contact Us', href: 'contact.html' }],
  'what-makes-good-website': [{ text: 'Website Design + Build', href: 'website-design.html' }, { text: 'Our Process', href: 'process.html' }],
  'google-ads-guide':        [{ text: 'PPC & Google Ads', href: 'ppc.html' }, { text: 'Cape Cod Marketing', href: 'cape-cod-marketing.html' }],
  'website-cost':            [{ text: 'Request a Quote', href: 'quote.html' }, { text: 'Website Design + Build', href: 'website-design.html' }],
  'web-design-expensive':    [{ text: 'Request a Quote', href: 'quote.html' }, { text: 'Website Design + Build', href: 'website-design.html' }, { text: 'Our Process', href: 'process.html' }],
  'how-long-website':        [{ text: 'Our Process', href: 'process.html' }, { text: 'Request a Quote', href: 'quote.html' }],
  'when-to-redesign':        [{ text: 'Website Design + Build', href: 'website-design.html' }, { text: 'Request a Quote', href: 'quote.html' }],
  'website-vs-social':       [{ text: 'Website Design + Build', href: 'website-design.html' }, { text: 'Cape Cod Marketing', href: 'cape-cod-marketing.html' }],
  'wordpress-vs-squarespace':[{ text: 'WordPress Design', href: 'wordpress.html' }, { text: 'Request a Quote', href: 'quote.html' }],
  'design-vs-development':   [{ text: 'Website Design + Build', href: 'website-design.html' }, { text: 'Our Process', href: 'process.html' }],
  'not-showing-on-google':   [{ text: 'SEO & Local Search', href: 'seo.html' }, { text: 'Cape Cod Marketing', href: 'cape-cod-marketing.html' }],
  'how-long-seo':            [{ text: 'SEO & Local Search', href: 'seo.html' }, { text: 'Cape Cod Marketing', href: 'cape-cod-marketing.html' }],
  'is-my-website-working':   [{ text: 'SEO & Local Search', href: 'seo.html' }, { text: 'Cape Cod Marketing', href: 'cape-cod-marketing.html' }, { text: 'Request a Quote', href: 'quote.html' }],
  'shopify-vs-woocommerce':  [{ text: 'E-Commerce', href: 'ecommerce.html' }, { text: 'WordPress Design', href: 'wordpress.html' }, { text: 'Request a Quote', href: 'quote.html' }],
};

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function WhitepaperPage() {
  const id = window.CURRENT_WP_ID;
  const all = window.WHITEPAPERS_DATA || [];
  const idx = all.findIndex(function(w) { return w.id === id; });
  const wp = all[idx];
  const prev = idx > 0 ? all[idx - 1] : null;
  const next = idx < all.length - 1 ? all[idx + 1] : null;
  const relatedLinks = WP_RELATED_LINKS[id] || [];
  const [open, setOpen] = React.useState(true);

  React.useEffect(function() {
    if (!wp) return;
    var faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: wp.sections.map(function(sec) {
        return {
          '@type': 'Question',
          name: sec.heading,
          acceptedAnswer: { '@type': 'Answer', text: sec.body.join(' ') },
        };
      }),
    };
    var script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'wpa-faq-schema';
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return function() {
      var el = document.getElementById('wpa-faq-schema');
      if (el) el.remove();
    };
  }, [wp ? wp.id : null]);

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
            <a href={wp.backHref || 'whitepapers.html'} className="wpa-breadcrumb">← {wp.backLabel || 'Web Design Whitepapers'}</a>
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

      {/* Guide Panel — TL;DR + jump links */}
      <div className="wpa-guide-wrap">
        <div className="shell">
          <div className="wpa-guide-panel">
            <button
              className="wpa-guide-toggle"
              onClick={function() { setOpen(function(o) { return !o; }); }}
              aria-expanded={open}
            >
              <div className="wpa-guide-toggle-left">
                <span className="wpa-guide-toggle-label">In this guide</span>
                <span className="wpa-guide-count">{wp.sections.length} sections</span>
              </div>
              <svg
                className={'wpa-guide-chevron' + (open ? ' open' : '')}
                width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6,9 12,15 18,9" />
              </svg>
            </button>
            <div className={'wpa-guide-body' + (open ? ' open' : '')}>
              <div className="wpa-guide-body-inner">
                <p className="wpa-guide-tldr">{wp.summary}</p>
                <ol className="wpa-guide-links">
                  {wp.sections.map(function(sec, i) {
                    return (
                      <li key={i}>
                        <a className="wpa-guide-link" href={'#' + slugify(sec.heading)}>
                          <span className="wpa-guide-link-num">{String(i + 1).padStart(2, '0')}</span>
                          {sec.heading}
                        </a>
                      </li>
                    );
                  })}
                </ol>
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
                  <div key={i} className="wpa-section" id={slugify(sec.heading)}>
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
                {relatedLinks.length > 0 && (
                  <div className="wpa-mobile-related">
                    <p className="wpa-mobile-related-label">Related services</p>
                    {relatedLinks.map(function(link) {
                      return (
                        <a key={link.href} href={link.href} className="wpa-related-link">
                          {link.text} <span className="arrow">→</span>
                        </a>
                      );
                    })}
                  </div>
                )}
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

              {/* Related services */}
              {relatedLinks.length > 0 && (
                <div className="wpa-card wpa-card--links">
                  <p className="wpa-card-eyebrow">Related services</p>
                  <ul className="wpa-related-list">
                    {relatedLinks.map(function(link) {
                      return (
                        <li key={link.href}>
                          <a href={link.href} className="wpa-related-link">
                            {link.text} <span className="arrow">→</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

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
