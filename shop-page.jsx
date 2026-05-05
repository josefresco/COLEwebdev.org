/* global React, ReactDOM */

const SHOP_URL = 'https://colewebdev.printful.me/';
const QUOTE_URL = 'https://www.colewebdev.com/printful-quick-store/#quote';

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

const SERVICE_STEPS = [
  'Store Setup',
  'Product Design',
  'Set Product Details & Pricing',
  'Connect Store to Stripe for Payments',
  'Launch Quick Store',
];

const WHY_FEATURES = [
  { icon: '⚡', label: 'Fast Setup', desc: 'We can get your Quick Store setup and ready for orders within 1–2 weeks!' },
  { icon: '⌘', label: 'All-in-One', desc: 'Printing, shipping and payments are all handled through Printful.' },
  { icon: '◎', label: 'Zero Capital', desc: 'No inventory. No worries.' },
  { icon: '✦', label: '355 Products', desc: 'Add your logo to apparel, hats, accessories, home goods and more!' },
  { icon: '↗', label: 'Get Paid', desc: 'Printful connects with Stripe for secure online payments.' },
];

const EXAMPLES = [
  'Buckies Biscotti',
  'The Southfleet',
  'Life Cape Cod',
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

      {/* Service pitch — Quick Store setup for other businesses */}
      <section className="sh-service">
        <div className="shell sh-service-grid">
          <div className="sh-service-img-wrap">
            <img
              src="https://www.colewebdev.com/wp-content/uploads/2024/09/printful-quick-store.jpg"
              alt="Printful Quick Store setup by COLEwebdev"
              className="sh-service-img"
              loading="lazy"
            />
          </div>
          <div className="sh-service-body">
            <span className="eyebrow">For Your Business</span>
            <h2 className="sh-service-hl">
              Get your own<br />
              <em style={{ color: 'var(--brand-green)' }}>Quick Store.</em>
            </h2>
            <p className="sh-service-p">
              Looking to sell products for your business without the hassle of managing inventory,
              printing, or shipping? Printful's Quick Store service makes it easy for small
              businesses to offer merch online — without the complexities and costs of a full
              eCommerce platform.
            </p>
            <p className="sh-service-p">
              Let COLEwebdev set up a Quick Store for you! We'll take care of everything, from
              setup to launch, so your products are ready to sell with zero stress.
            </p>
            <ul className="sh-service-list">
              {SERVICE_STEPS.map(step => (
                <li key={step} className="sh-service-step">
                  <span className="sh-service-check">✓</span>
                  {step}
                </li>
              ))}
            </ul>
            <div>
              <a
                className="btn btn--accent"
                href={QUOTE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Request a Quote <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Printful Quick Store */}
      <section className="sh-why">
        <div className="shell">
          <div className="sh-why-hd">
            <h2 className="sh-why-hl">Why Printful Quick Store?</h2>
          </div>
          <div className="sh-why-grid">
            {WHY_FEATURES.map(f => (
              <div key={f.label} className="sh-why-card">
                <div className="sh-why-icon">{f.icon}</div>
                <div className="sh-why-name">{f.label}</div>
                <div className="sh-why-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Store Examples */}
      <section className="sh-examples">
        <div className="shell">
          <div className="sh-examples-hd">
            <h2 className="sh-examples-hl">Quick Store Examples</h2>
            <p className="sh-examples-sub">A few stores we've helped launch</p>
          </div>
          <div className="sh-examples-row">
            {EXAMPLES.map(name => (
              <div key={name} className="sh-ex-card">
                <span className="sh-ex-name">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="sh-cta sh-cta--quote">
        <div className="shell sh-cta-inner">
          <p className="sh-cta-text">
            Ready to launch your own store? Let's make it happen.
          </p>
          <a
            className="btn btn--accent"
            href={QUOTE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Request a Quote <span className="arrow">→</span>
          </a>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}

const shRoot = ReactDOM.createRoot(document.getElementById('root'));
shRoot.render(<ShopPage />);
