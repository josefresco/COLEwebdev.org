/* global React, ReactDOM */

const SHOP_URL = 'https://colewebdev.printful.me/';
const QUOTE_URL = 'https://www.colewebdev.com/printful-quick-store/';

const CDN = 'https://cdn.printful.me/t/quick-stores/products/w400/';

const PRODUCTS = [
  { name: 'Handwritten COLEwebdev Crop Top', price: 'From $22.50', img: CDN + '14375022-666-68da7d8400f2e__360' },
  { name: '80/20 CWD Retro',                 price: 'From $53.00', img: CDN + '5716-602-68518a4729ed9__360' },
  { name: 'Retro CWD',                        price: 'From $22.00', img: CDN + '14375022-71-6851889b54d02__360' },
  { name: 'Modern CWD',                       price: 'From $18.50', img: CDN + '14375022-71-685187b6616ce__360' },
  { name: 'CWD Racing Crop Top',              price: 'From $22.50', img: CDN + '14375022-666-685186468666b__360' },
  { name: '80/20 CWD Oversized Hoodie',       price: 'From $61.50', img: CDN + '14375022-734-66ec32046e595__360' },
  { name: '80/20 CWD Comfort Hoodie',         price: 'From $53.00', img: CDN + '5716-602-66ec2f0b6d45f__360' },
  { name: '80/20 CWD Rocks Hoodie',           price: 'From $74.50', img: CDN + '5716-765-66ec2f556ad7c__360' },
  { name: 'CWD Ask More of Your Website Hoodie', price: 'From $52.50', img: CDN + '14375022-380-66eae8207ee8a__360' },
  { name: 'CWD Hoodie',                       price: 'From $57.50', img: CDN + '14375022-380-66eae77891c43__360' },
  { name: 'CWD Rocks V-Neck T-Shirt',         price: 'From $32.50', img: CDN + '14375022-782-66e9e642bf4cc__360' },
  { name: 'CWD Rocks Zip Hoodie',             price: 'From $53.00', img: CDN + '14375022-692-66e9e529a24ec__360' },
  { name: 'CWD Tote Bag',                     price: 'From $30.00', img: CDN + '14375022-367-66e9e3e6bd158__360' },
  { name: 'CWD Rocks Trucker Cap',            price: 'From $25.00', img: CDN + '14375022-100-66e9e2f19fca2__360' },
  { name: 'CWD Retro T-Shirt',               price: 'From $25.00', img: CDN + '14375022-71-66e9e1ccc88ce__360' },
  { name: 'CWD Retro Crop Top',              price: 'From $29.50', img: CDN + '14375022-666-66e9e12fc1646__360' },
  { name: 'CWD Rocks Black T-Shirt',         price: 'From $34.00', img: CDN + '14375022-733-66e9dfe05e659__360' },
  { name: 'CWD Rocks',                        price: 'From $64.50', img: CDN + '5716-294-66e9e0433df44__360' },
];

const POD_FEATURES = [
  { icon: '◇', label: 'Printed on demand' },
  { icon: '↗', label: 'Ships to your door' },
  { icon: '↻', label: 'No minimums' },
  { icon: '⌘', label: 'High-quality blanks' },
];

const BENEFITS = [
  {
    icon: '⚡',
    bg: 'rgba(242,107,31,0.14)',
    color: '#F26B1F',
    title: 'Fast Setup',
    body: 'We can get your Quick Store set up and ready for orders within 1–2 weeks.',
  },
  {
    icon: '◇',
    bg: 'rgba(123,192,67,0.14)',
    color: '#5DA02E',
    title: 'All-in-One',
    body: 'Printing, shipping, and payments are all handled through Printful — nothing to manage.',
  },
  {
    icon: '↻',
    bg: 'rgba(14,42,74,0.10)',
    color: '#0E2A4A',
    title: 'Zero Capital',
    body: 'No inventory to buy, store, or ship. Orders are produced and sent only when placed.',
  },
  {
    icon: '✦',
    bg: 'rgba(123,192,67,0.14)',
    color: '#5DA02E',
    title: '355+ Products',
    body: 'Add your logo to apparel, hats, accessories, home goods, and more.',
  },
  {
    icon: '⌘',
    bg: 'rgba(14,42,74,0.10)',
    color: '#0E2A4A',
    title: 'Get Paid Securely',
    body: 'Printful connects directly with Stripe for fast, secure online payments.',
  },
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
              src="assets/colewebdev-merch.jpg"
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

      {/* Product grid */}
      <section className="sh-prods">
        <div className="shell">
          <div className="sh-prods-hd">
            <h2 className="sh-prods-hl">All products</h2>
            <p className="sh-prods-sub">{PRODUCTS.length} items · Printed on demand · Ships to your door</p>
          </div>
          <div className="sh-prods-grid">
            {PRODUCTS.map(p => (
              <a
                key={p.name}
                className="sh-prod-card"
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="sh-prod-img-wrap">
                  <img
                    className="sh-prod-img"
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    width="400"
                    height="400"
                  />
                </div>
                <div className="sh-prod-info">
                  <div className="sh-prod-name">{p.name}</div>
                  <div className="sh-prod-price">{p.price}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Printful */}
      <section className="sh-why">
        <div className="shell">
          <div className="sh-why-hd">
            <span className="eyebrow">Powered by Printful</span>
            <h2 className="sh-why-hl">Why Printful Quick Store?</h2>
          </div>
          <div className="sh-why-grid">
            {BENEFITS.map(b => (
              <div key={b.title} className="sh-why-card">
                <div className="sh-why-icon" style={{ background: b.bg, color: b.color }}>
                  {b.icon}
                </div>
                <div className="sh-why-title">{b.title}</div>
                <div className="sh-why-body">{b.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Want your own store */}
      <section className="sh-own">
        <div className="shell sh-own-inner">
          <div className="sh-own-body">
            <span className="eyebrow" style={{ color: 'var(--brand-green)' }}>For businesses</span>
            <h2 className="sh-own-hl">Want a Printful store for <em>your</em> brand?</h2>
            <p className="sh-own-p">
              We set up Printful Quick Stores for businesses across Cape Cod and beyond.
              Sell branded apparel with your logo — no inventory, no shipping, no hassle.
              Ready in 1–2 weeks.
            </p>
            <a
              className="btn btn--accent"
              href={QUOTE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Request a quote <span className="arrow">→</span>
            </a>
          </div>
          <div className="sh-own-steps">
            {['Store Setup', 'Product Design', 'Pricing & Details', 'Connect Stripe', 'Launch'].map((s, i) => (
              <div key={s} className="sh-own-step">
                <span className="sh-own-step-n">{String(i + 1).padStart(2, '0')}</span>
                <span className="sh-own-step-label">{s}</span>
              </div>
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
