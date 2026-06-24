/* global React, ReactDOM */

const SA_TOWNS = [
  { name: 'Barnstable / Hyannis', slug: 'hyannis-web-design.html', desc: 'The commercial hub of Cape Cod. Our most active market for retail, healthcare, hospitality, and professional services.' },
  { name: 'Bourne', slug: 'bourne-web-design.html', desc: 'Gateway to the Cape. Home to the Bourne and Sagamore bridges — and a growing year-round business community.' },
  { name: 'Brewster', slug: 'brewster-web-design.html', desc: 'Bed & breakfasts, galleries, and local services anchored by Nickerson State Park and the Cape Cod Rail Trail.' },
  { name: 'Chatham', slug: 'chatham-web-design.html', desc: 'The Cape\'s most upscale destination town — inns, fine dining, galleries, and boutiques with a discerning clientele.' },
  { name: 'Dennis', slug: 'dennis-web-design.html', desc: 'Home to the Cape Playhouse and a strong mix of seasonal and year-round businesses along Route 28 and Route 6A.' },
  { name: 'Eastham', slug: 'eastham-web-design.html', desc: 'Our home base since 2006. A gateway to the National Seashore with a tight-knit community of year-round businesses.', home: true },
  { name: 'Falmouth', slug: 'falmouth-web-design.html', desc: 'Cape Cod\'s second-largest town. Home to Woods Hole, a thriving arts scene, and diverse year-round and seasonal businesses.' },
  { name: 'Harwich', slug: 'harwich-web-design.html', desc: 'The cranberry capital of the Cape. A mix of working waterfront, seasonal tourism, and service businesses.' },
  { name: 'Mashpee', slug: 'mashpee-web-design.html', desc: 'One of the fastest-growing towns on the Cape, anchored by Mashpee Commons and the Wampanoag cultural heritage.' },
  { name: 'Orleans', slug: 'orleans-web-design.html', desc: 'Where Route 6 meets Route 28 — the commercial crossroads of the Lower Cape and a year-round business hub.' },
  { name: 'Provincetown', slug: 'provincetown-web-design.html', desc: 'The tip of the Cape. Intensely competitive for hospitality, tourism, and arts businesses — online presence is everything.' },
  { name: 'Sandwich', slug: 'sandwich-web-design.html', desc: 'The oldest town on Cape Cod. Route 6A antiques and history tourism alongside a growing residential and service base.' },
  { name: 'Truro', slug: 'truro-web-design.html', desc: 'Small, artsy, and closely tied to Provincetown. Wineries, artists, and a community that values authenticity.' },
  { name: 'Wellfleet', slug: 'wellfleet-web-design.html', desc: 'Oysters, art galleries, and a working waterfront. One of the most distinctive communities on the Outer Cape.' },
  { name: 'Yarmouth', slug: 'yarmouth-web-design.html', desc: 'A major Route 28 commercial corridor with strong motel, retail, and service business density.' },
];

const SA_BEYOND = [
  { name: 'Martha\'s Vineyard', note: 'Remote + occasional on-site visits', href: 'marthas-vineyard-web-design.html' },
  { name: 'Nantucket', note: 'Remote + occasional on-site visits', href: 'nantucket-web-design.html' },
  { name: 'Plymouth, MA', note: 'Remote service available', href: 'plymouth-web-design.html' },
  { name: 'New Bedford, MA', note: 'Remote service available' },
  { name: 'All of Massachusetts', note: 'Remote design and development' },
];

function ServiceAreaPage() {
  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="sa-hero">
        <div className="sa-hero-bg" aria-hidden="true" />
        <div className="sa-hero-content">
          <div className="shell">
            <span className="eyebrow sa-eyebrow">Cape Cod Web Design · Service Area</span>
            <h1 className="sa-hero-hl">
              We serve <em>all of Cape Cod.</em>
            </h1>
            <p className="sa-hero-sub">
              COLEwebdev is based in Eastham and has built websites for businesses in every one of the Cape's 15 towns since 2006. All 700+ projects have gone through the same two people — Josiah and Desiree Cole.
            </p>
            <div className="sa-hero-actions">
              <a className="btn btn--accent" href="quote.html">Get a free quote <span className="arrow">→</span></a>
              <a className="btn btn--ghost sa-ghost" href="tel:5084132043">508.413.2043</a>
            </div>
          </div>
        </div>
      </div>

      {/* All 15 towns */}
      <section className="sa-towns">
        <div className="shell">
          <div className="sa-towns-hd">
            <span className="eyebrow">All 15 towns</span>
            <h2 className="sa-towns-hl">From Bourne to Provincetown — we know this market.</h2>
            <p className="sa-towns-sub">Click any town for a dedicated page about web design in that community.</p>
          </div>
          <div className="sa-towns-grid">
            {SA_TOWNS.map(t => (
              <a key={t.name} href={t.slug} className={'sa-town-card' + (t.home ? ' sa-town-card--home' : '')}>
                <div className="sa-town-name">
                  {t.name}
                  {t.home && <span className="sa-home-pill">Our home</span>}
                </div>
                <div className="sa-town-desc">{t.desc}</div>
                <span className="sa-town-link">View page →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond the Cape */}
      <section className="sa-beyond">
        <div className="shell">
          <div className="sa-beyond-hd">
            <span className="eyebrow">Beyond the Cape</span>
            <h2 className="sa-beyond-hl">We work remotely with clients anywhere.</h2>
            <p className="sa-beyond-sub">The majority of our work is done remotely — video calls, screen shares, and email. Geography is rarely a barrier.</p>
          </div>
          <div className="sa-beyond-list">
            {SA_BEYOND.map(b => b.href ? (
              <a key={b.name} href={b.href} className="sa-beyond-item sa-beyond-item--link">
                <span className="sa-beyond-name">{b.name}</span>
                <span className="sa-beyond-note">{b.note}</span>
              </a>
            ) : (
              <div key={b.name} className="sa-beyond-item">
                <span className="sa-beyond-name">{b.name}</span>
                <span className="sa-beyond-note">{b.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="sa-svcs">
        <div className="shell">
          <div className="sa-svcs-hd">
            <span className="eyebrow">What we offer</span>
            <h2 className="sa-svcs-hl">Everything Cape Cod businesses need online.</h2>
          </div>
          <div className="sa-svcs-grid">
            {[
              { title: 'Web Design', desc: 'Custom, mobile-first websites built from scratch.', href: 'website-design.html', glyph: '◇' },
              { title: 'SEO & Local Search', desc: 'Show up in Google when Cape Cod customers search.', href: 'seo.html', glyph: '↗' },
              { title: 'E-Commerce', desc: 'Sell online with WooCommerce or Shopify.', href: 'ecommerce.html', glyph: '◐' },
              { title: 'Branding', desc: 'Logos, color systems, and print that holds together.', href: 'branding.html', glyph: '✦' },
              { title: 'Hosting + Care Plans', desc: 'Backups, updates, and a human to call.', href: 'hosting.html', glyph: '↻' },
              { title: 'Consulting', desc: 'Strategy, audits, and advice from two Cape Cod founders.', href: 'consulting.html', glyph: '◎' },
            ].map(s => (
              <a key={s.title} href={s.href} className="sa-svc-card">
                <span className="sa-svc-glyph">{s.glyph}</span>
                <div className="sa-svc-title">{s.title}</div>
                <div className="sa-svc-desc">{s.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why local matters */}
      <section className="sa-why">
        <div className="shell sa-why-grid">
          <div>
            <span className="eyebrow">Why it matters</span>
            <h2 className="sa-why-hl">Local knowledge isn't a nice-to-have. It's a competitive advantage.</h2>
            <p className="sa-why-body">We've been doing business on Cape Cod since 2006. We know the seasonal rhythms, the local Google search patterns, the industries that drive each town's economy, and the community reputations that clients bring to every project.</p>
            <p className="sa-why-body">That context shapes everything — from how we write your homepage headline to which keywords we build your SEO strategy around. A national agency can't replicate it.</p>
            <a className="btn btn--accent" href="about.html">Meet the team <span className="arrow">→</span></a>
          </div>
          <div className="sa-stats">
            {[
              { num: '700+', label: 'Sites launched across Cape Cod and beyond' },
              { num: '15', label: 'Cape Cod towns served since 2006' },
              { num: '4.8★', label: 'Google rating from Cape Cod business owners' },
            ].map(s => (
              <div key={s.num} className="sa-stat">
                <div className="sa-stat-num">{s.num}</div>
                <div className="sa-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sa-cta">
        <div className="shell sa-cta-inner">
          <div>
            <h2 className="sa-cta-hl">Ready to talk about your project?</h2>
            <p className="sa-cta-sub">We'd love to hear about your business. No forms, no pressure — just a real conversation.</p>
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

const saRoot = ReactDOM.createRoot(document.getElementById('root'));
saRoot.render(<ServiceAreaPage />);
