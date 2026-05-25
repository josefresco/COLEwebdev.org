/* global React, ReactDOM */

const SERVICES = [
  { glyph: '◇', color: 'green', title: 'Web Design', desc: 'Modern, mobile-first websites built from scratch — no templates.', href: 'website-design.html' },
  { glyph: '⚡', color: 'orange', title: 'SEO & Local Search', desc: 'Show up when your neighbors search for what you do.', href: 'seo.html' },
  { glyph: '↻', color: 'green', title: 'Hosting + Care Plans', desc: 'Backups, security, and updates — with a human to call.', href: 'hosting.html' },
  { glyph: '◐', color: 'navy', title: 'E-Commerce', desc: 'Sell online with WooCommerce or Shopify.', href: 'ecommerce.html' },
  { glyph: '✦', color: 'orange', title: 'Branding', desc: 'Logos, color systems, and print that matches your site.', href: 'branding.html' },
  { glyph: '⌘', color: 'navy', title: 'AI Studio', desc: 'Chatbots, booking tools, and custom AI integrations for your site.', href: 'ai-apps.html' },
  { glyph: '◎', color: 'green', title: 'Consulting', desc: 'Website strategy, audits, and business advice from two Cape Cod founders.', href: 'consulting.html' },
];

function LocationPage() {
  const loc = (window.LOCATIONS_DATA || []).find(l => l.id === window.CURRENT_LOCATION_ID);
  if (!loc) return <div style={{ padding: 40 }}>Location not found.</div>;

  React.useEffect(() => {
    if (!loc.faq || loc.faq.length === 0) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'lp-faq-schema';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: loc.faq.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    });
    document.head.appendChild(script);
    return () => { const el = document.getElementById('lp-faq-schema'); if (el) el.remove(); };
  }, []);

  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="lp-hero">
        <div className="lp-hero-bg" aria-hidden="true" />
        <div className="lp-hero-content">
          <div className="shell">
            <span className="eyebrow lp-eyebrow">
              Cape Cod Web Design · {loc.city}, {loc.state}
            </span>
            <h1 className="lp-hero-hl">{loc.heroHeadline}</h1>
            <p className="lp-hero-sub">{loc.heroSub}</p>
            <div className="lp-hero-actions">
              <a className="btn btn--accent" href="quote.html">Get a Free Quote <span className="arrow">→</span></a>
              <a className="btn btn--ghost lp-ghost" href="tel:5084132043">508.413.2043</a>
            </div>
          </div>
        </div>
      </div>

      {/* Intro + context */}
      <section className="lp-intro">
        <div className="shell">
          <div className="lp-intro-grid">
            <div className="lp-intro-main">
              <p className="lp-intro-lead">{loc.intro}</p>
              <p className="lp-intro-body">{loc.localContext}</p>
              {loc.industries && loc.industries.length > 0 && (
                <div className="lp-industries">
                  {loc.industries.map((ind, i) => (
                    <span key={i} className="lp-industry-chip">{ind}</span>
                  ))}
                </div>
              )}
              <div className="lp-intro-stats">
                <div className="lp-stat">
                  <div className="lp-stat-num">20</div>
                  <div className="lp-stat-label">Years on the job</div>
                </div>
                <div className="lp-stat">
                  <div className="lp-stat-num">700+</div>
                  <div className="lp-stat-label">Sites launched</div>
                </div>
                <div className="lp-stat">
                  <div className="lp-stat-num">4.8★</div>
                  <div className="lp-stat-label">Google rating</div>
                </div>
              </div>
            </div>
            <aside className="lp-intro-sidebar">
              <div className="lp-cta-card">
                <p className="lp-cta-label">Start a project</p>
                <p className="lp-cta-hl">Get a free estimate in 24 hours.</p>
                <p className="lp-cta-note">No commitment. Just a real conversation about your project.</p>
                <a className="btn btn--accent lp-cta-btn" href="quote.html">
                  Request a Quote <span className="arrow">→</span>
                </a>
                <a className="lp-cta-phone" href="tel:5084132043">508.413.2043</a>
                <p className="lp-cta-hours">Mon–Fri · 9am–5pm ET</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Founder personal connection */}
      {loc.founderStory && (
        <section className="lp-founder">
          <div className="shell">
            <div className="lp-founder-grid">
              <div className="lp-founder-img-wrap">
                <img
                  src={loc.founderStory.img}
                  alt={loc.founderStory.name}
                  className="lp-founder-img"
                  loading="lazy"
                />
              </div>
              <div className="lp-founder-body">
                <span className="eyebrow lp-founder-eyebrow">From the founders</span>
                <h2 className="lp-founder-hl">{loc.founderStory.headline}</h2>
                {loc.founderStory.body.map((p, i) => (
                  <p key={i} className="lp-founder-p">{p}</p>
                ))}
                <div className="lp-founder-byline">
                  <span className="lp-founder-name">{loc.founderStory.name}</span>
                  <span className="lp-founder-role">{loc.founderStory.role}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Local clients */}
      {loc.clients && loc.clients.length > 0 && (
        <section className="lp-clients">
          <div className="shell">
            <p className="lp-section-label">Local work</p>
            <h2 className="lp-section-hl">{loc.city} businesses we've built for.</h2>
            <div className="lp-client-grid">
              {loc.clients.map((c, i) => (
                <a
                  key={i}
                  className="lp-client-card"
                  href={c.href && c.href !== '#' ? c.href : undefined}
                  target={c.href && c.href !== '#' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  style={!c.href || c.href === '#' ? { cursor: 'default', pointerEvents: 'none' } : {}}
                >
                  <span className="lp-client-type">{c.type}</span>
                  <span className="lp-client-name">{c.name}</span>
                  {c.href && c.href !== '#' && <span className="lp-client-arrow">→</span>}
                </a>
              ))}
            </div>
            <p className="lp-clients-note">
              Plus hundreds more across Cape Cod.{' '}
              <a href="portfolio.html">See the full portfolio →</a>
            </p>
          </div>
        </section>
      )}

      {/* Services */}
      <section className="lp-services">
        <div className="shell">
          <p className="lp-section-label">What we offer</p>
          <h2 className="lp-section-hl">Full-service web design for {loc.city}.</h2>
          <div className="lp-services-grid">
            {SERVICES.map((s, i) => (
              <a key={i} className="lp-service-card" href={s.href}>
                <span className={'lp-service-glyph lp-glyph--' + s.color}>{s.glyph}</span>
                <div>
                  <div className="lp-service-title">{s.title}</div>
                  <div className="lp-service-desc">{s.desc}</div>
                </div>
              </a>
            ))}
          </div>
          <div className="lp-services-cta">
            <a href="services.html" className="btn btn--ghost">View all services <span className="arrow">→</span></a>
          </div>
        </div>
      </section>

      {/* Why COLEwebdev */}
      <section className="lp-why">
        <div className="shell">
          <div className="lp-why-grid">
            <div>
              <p className="lp-section-label">Why us</p>
              <h2 className="lp-why-hl">A real local studio — not a national agency.</h2>
              <p className="lp-why-body">
                When you work with COLEwebdev, you're talking directly to the people building your site.
                No account managers, no handoffs to offshore teams. Josiah and Desiree Cole have been
                designing and building websites from right here on Cape Cod since 2006 — and every
                project still goes through them personally.
              </p>
              <p className="lp-why-body">
                We know the Cape Cod market because we live and work in it. We understand seasonal
                business patterns, local Google search behavior, and what Cape Cod customers expect
                from a business website. That context shapes every site we build.
              </p>
              <a href="about.html" className="lp-why-link">Meet the team →</a>
            </div>
            <div className="lp-why-details">
              {[
                { label: 'Studio location', val: 'Eastham, MA 02642' },
                { label: 'In business since', val: '2006' },
                { label: 'Sites launched', val: '700+' },
                { label: 'Google rating', val: '4.8 ★' },
                { label: 'Response time', val: '1 business day' },
              ].map((item, i) => (
                <div key={i} className="lp-why-row">
                  <span className="lp-why-row-label">{item.label}</span>
                  <span className="lp-why-row-val">{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nearby towns */}
      {loc.nearbyTowns && loc.nearbyTowns.some(t => t.href) && (
        <section className="lp-nearby">
          <div className="shell">
            <p className="lp-section-label">Also serving</p>
            <div className="lp-nearby-list">
              {loc.nearbyTowns.map((t, i) => (
                t.href ? (
                  <a key={i} className="lp-nearby-link" href={t.href}>{t.name} Web Design</a>
                ) : (
                  <span key={i} className="lp-nearby-plain">{t.name}</span>
                )
              ))}
              <a className="lp-nearby-link" href="cape-cod-web-design.html">All of Cape Cod</a>
              <a className="lp-nearby-link lp-nearby-area" href="service-area.html">Full service area →</a>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {loc.faq && loc.faq.length > 0 && (
        <section className="lp-faq">
          <div className="shell">
            <p className="lp-section-label">FAQ</p>
            <h2 className="lp-section-hl">Common questions from {loc.city} businesses.</h2>
            <div className="lp-faq-list">
              {loc.faq.map((item, i) => (
                <div key={i} className="lp-faq-item">
                  <h3 className="lp-faq-q">{item.q}</h3>
                  <p className="lp-faq-a">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <NewsletterBanner />
      <Footer />
    </React.Fragment>
  );
}

const lpRoot = ReactDOM.createRoot(document.getElementById('root'));
lpRoot.render(<LocationPage />);
