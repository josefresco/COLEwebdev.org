/* global React, ReactDOM */

/* Update to the direct Printful Quick Store URL once known */
const SHOP_URL = 'https://www.colewebdev.com/shop/';

const CATEGORIES = [
  {
    name: 'T-Shirts',
    desc: 'Soft, breathable tees for every season.',
    icon: '◇',
    bg: 'rgba(123,192,67,0.14)',
    color: '#5DA02E',
  },
  {
    name: 'Hoodies',
    desc: 'Cozy fleece built for Cape Cod mornings.',
    icon: '◐',
    bg: 'rgba(14,42,74,0.10)',
    color: '#0E2A4A',
  },
  {
    name: 'Hats',
    desc: 'Classic fits, all-season wearability.',
    icon: '▲',
    bg: 'rgba(242,107,31,0.14)',
    color: '#F26B1F',
  },
  {
    name: 'Tote Bags',
    desc: "Sturdy canvas, perfect for the Farmers' Market.",
    icon: '✦',
    bg: 'rgba(123,192,67,0.14)',
    color: '#5DA02E',
  },
];

const POD_FEATURES = [
  { icon: '◇', label: 'Printed on demand' },
  { icon: '↗', label: 'Ships to your door' },
  { icon: '↻', label: 'No minimums' },
  { icon: '⌘', label: 'High-quality blanks' },
];

function ShopPage() {
  return (
    <React.Fragment>
      <Header />

      {/* Intro */}
      <section className="sh-intro">
        <div className="shell">
          <span className="eyebrow">COLEwebdev Merch</span>
          <h1 className="sh-intro-hl">The Shop.</h1>
        </div>
      </section>

      {/* Hero */}
      <section className="sh-hero">
        <div className="shell sh-hero-grid">
          <div className="sh-hero-img-wrap">
            <img
              src="https://www.colewebdev.com/wp-content/uploads/2024/09/colewebdev-merch.jpg"
              alt="COLEwebdev branded merchandise"
              className="sh-hero-img"
              loading="eager"
            />
          </div>
          <div className="sh-hero-body">
            <span className="tag dot tag--green">NEW · Branded merch</span>
            <h2 className="sh-hero-hl">
              COLEwebdev is now<br />offering{' '}
              <em style={{ color: 'var(--brand-green)' }}>merch!</em>
            </h2>
            <p className="sh-hero-p">
              We've launched an online store through Printful's Quick Store service, making it
              easier than ever to get your hands on high-quality branded gear. Every order is
              printed on demand and shipped directly to your doorstep — no minimums, no hassle.
            </p>
            <div>
              <a
                className="btn btn--accent"
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Shop online <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Print-on-demand features strip */}
      <div className="sh-pod">
        <div className="shell sh-pod-inner">
          {POD_FEATURES.map(f => (
            <div key={f.label} className="sh-pod-item">
              <div className="sh-pod-icon">{f.icon}</div>
              <span className="sh-pod-label">{f.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <section className="sh-cats">
        <div className="shell">
          <div className="sh-cats-hd">
            <h2 className="sh-cats-hl">What's in the store</h2>
            <p className="sh-cats-sub">Click any category to browse &amp; order</p>
          </div>
          <div className="sh-cats-grid">
            {CATEGORIES.map(cat => (
              <a
                key={cat.name}
                className="sh-cat-card"
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="sh-cat-icon"
                  style={{ background: cat.bg, color: cat.color }}
                >
                  {cat.icon}
                </div>
                <div>
                  <div className="sh-cat-name">{cat.name}</div>
                  <div className="sh-cat-desc">{cat.desc}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sh-cta">
        <div className="shell sh-cta-inner">
          <p className="sh-cta-text">
            Don't miss out — show off your support for COLEwebdev in style.
          </p>
          <a
            className="btn btn--accent"
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop online <span className="arrow">→</span>
          </a>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}

const shRoot = ReactDOM.createRoot(document.getElementById('root'));
shRoot.render(<ShopPage />);
