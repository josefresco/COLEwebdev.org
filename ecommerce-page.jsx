/* global React, ReactDOM */

const EC_PLATFORMS = [
  {
    name: 'WooCommerce',
    desc: 'Built on WordPress, WooCommerce is the right choice when you want full ownership of your store — your server, your data, your code. We recommend it for businesses that already have (or want) a WordPress site and need flexibility.',
    features: [
      'Seamlessly integrated with your WordPress site',
      'Full control over design and checkout flow',
      'No monthly platform fees beyond hosting',
      'Hundreds of extensions for subscriptions, bookings, and more',
      'Ideal for physical goods, digital downloads, and services',
    ],
    tag: 'Best for: WordPress sites · Custom requirements · Full ownership',
  },
  {
    name: 'Shopify',
    desc: 'A hosted platform built specifically for selling. Shopify handles security, hosting, and PCI compliance so you can focus entirely on products and customers. We recommend it for businesses that want a proven, low-maintenance storefront.',
    features: [
      'Hosted and maintained by Shopify — nothing to update',
      'Built-in abandoned cart recovery and marketing tools',
      'Point-of-sale integration for brick-and-mortar shops',
      'Extensive app store for any feature you need',
      'Ideal for product-focused businesses with large catalogs',
    ],
    tag: 'Best for: Product-first stores · Retail · Low maintenance',
  },
];

const EC_FEATURES = [
  { icon: '◇', bg: 'rgba(123,192,67,0.14)', color: '#5DA02E', title: 'Product Setup', body: 'We configure your catalog, variants, and pricing — including digital downloads, variable products, and subscriptions.' },
  { icon: '⌘', bg: 'rgba(14,42,74,0.10)', color: '#0E2A4A', title: 'Payment Processing', body: 'Stripe, PayPal, Square, and local payment methods configured and tested. PCI compliance handled at the platform level.' },
  { icon: '↻', bg: 'rgba(123,192,67,0.14)', color: '#5DA02E', title: 'Shipping & Tax', body: 'Live shipping rates from UPS, FedEx, and USPS. Tax rules configured for Massachusetts and other states as needed.' },
  { icon: '✦', bg: 'rgba(242,107,31,0.14)', color: '#F26B1F', title: 'Inventory Management', body: 'Stock levels, low-inventory alerts, and backorder handling so you\'re never selling what you don\'t have.' },
  { icon: '↗', bg: 'rgba(14,42,74,0.10)', color: '#0E2A4A', title: 'Mobile Checkout', body: 'A checkout experience optimized for phones — where over 60% of e-commerce traffic comes from. Fast, friction-free, and accessible.' },
  { icon: '◎', bg: 'rgba(242,107,31,0.14)', color: '#F26B1F', title: 'Analytics & Reporting', body: 'Sales dashboards, conversion funnels, and customer reports connected to Google Analytics 4 and your platform\'s native tools.' },
  { icon: '◐', bg: 'rgba(123,192,67,0.14)', color: '#5DA02E', title: 'SEO for Products', body: 'Product titles, descriptions, schema markup, and sitemap configuration so your items show up in Google Shopping and organic search.' },
  { icon: '⚡', bg: 'rgba(14,42,74,0.10)', color: '#0E2A4A', title: 'Training & Handoff', body: 'A recorded walkthrough of your store admin so you can add products, run promotions, and fulfill orders confidently on day one.' },
];

const EC_PAYMENTS = [
  {
    icon: '⌘',
    bg: 'rgba(14,42,74,0.10)',
    color: '#0E2A4A',
    title: 'Payment Gateways',
    desc: 'We set up, configure, and test the payment processor that fits your business — handling the technical work so you start accepting payments without the headaches.',
    features: [
      'Stripe — cards, Apple Pay, Google Pay, ACH',
      'PayPal & PayPal Checkout',
      'Square — online and in-person',
      'Authorize.net for established merchants',
      'Webhook configuration and testing',
      'Multi-currency and regional settings',
    ],
    tag: 'Works with: WooCommerce · Shopify · Standalone forms',
  },
  {
    icon: '✦',
    bg: 'rgba(242,107,31,0.14)',
    color: '#F26B1F',
    title: 'Donations & Payment Forms',
    desc: 'Not every payment needs a full storefront. We build standalone forms for donations, event fees, deposits, and memberships — embedded directly in your site.',
    features: [
      'One-time and recurring donation pages',
      'Event registration with fee collection',
      'Deposit and retainer forms',
      'Membership and annual renewal payments',
      'Custom confirmation emails and receipts',
      'Compatible with GiveWP, Gravity Forms, and Stripe',
    ],
    tag: 'Ideal for: Nonprofits · Events · Service businesses · Clubs',
  },
];

const EC_STATS = [
  { num: '60%+', label: 'of e-commerce purchases now happen on a mobile device' },
  { num: '$6.3T', label: 'global e-commerce revenue projected for 2024 — small businesses are part of it' },
  { num: '26 yrs', label: 'of COLEwebdev experience building storefronts across Cape Cod and beyond' },
];

function EcommercePage() {
  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="ec-hero">
        <div className="ec-hero-bg" aria-hidden="true" />
        <div className="ec-hero-content">
          <div className="shell">
            <span className="eyebrow ec-eyebrow">Services · E-Commerce</span>
            <h1 className="ec-hero-hl">
              A store that <em>works as hard</em><br />as you do.
            </h1>
            <p className="ec-hero-sub">
              WooCommerce and Shopify storefronts built to sell — with clean design, fast checkout, and all the setup done for you. We build it, you run it.
            </p>
            <div className="ec-hero-actions">
              <a className="btn btn--accent" href="contact.html">
                Start a store <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost ec-ghost" href="tel:5084132043">
                508.413.2043
              </a>
            </div>
            <div className="ec-platform-tags">
              {['WooCommerce', 'Shopify', 'Stripe', 'PayPal', 'Square', 'Authorize.net', 'USPS / UPS / FedEx', 'Google Shopping'].map(t => (
                <span key={t} className="ec-platform-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Platforms */}
      <section className="ec-platforms">
        <div className="shell">
          <div className="ec-platforms-hd">
            <span className="eyebrow">Platforms</span>
            <h2 className="ec-platforms-hl">WooCommerce or Shopify — we'll help you choose.</h2>
          </div>
          <div className="ec-platforms-grid">
            {EC_PLATFORMS.map(p => (
              <div key={p.name} className="ec-platform-card">
                <div className="ec-platform-name">{p.name}</div>
                <div className="ec-platform-desc">{p.desc}</div>
                <ul className="ec-platform-list">
                  {p.features.map(f => <li key={f}>{f}</li>)}
                </ul>
                <div className="ec-platform-tag-strip">{p.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we handle */}
      <section className="ec-features">
        <div className="shell">
          <div className="ec-features-hd">
            <span className="eyebrow">What we handle</span>
            <h2 className="ec-features-hl">Everything from products to payments to training.</h2>
          </div>
          <div className="ec-features-grid">
            {EC_FEATURES.map(f => (
              <div key={f.title} className="ec-feat-card">
                <div className="ec-feat-icon" style={{ background: f.bg, color: f.color }}>{f.icon}</div>
                <div className="ec-feat-title">{f.title}</div>
                <div className="ec-feat-body">{f.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payments */}
      <section className="ec-pay">
        <div className="shell">
          <div className="ec-pay-hd">
            <span className="eyebrow">Payments &amp; forms</span>
            <h2 className="ec-pay-hl">Beyond the storefront.</h2>
          </div>
          <div className="ec-pay-grid">
            {EC_PAYMENTS.map(p => (
              <div key={p.title} className="ec-pay-card">
                <div className="ec-pay-card-head">
                  <div className="ec-pay-icon" style={{ background: p.bg, color: p.color }}>{p.icon}</div>
                  <div className="ec-pay-name">{p.title}</div>
                  <div className="ec-pay-desc">{p.desc}</div>
                </div>
                <ul className="ec-pay-list">
                  {p.features.map(f => <li key={f}>{f}</li>)}
                </ul>
                <div className="ec-pay-tag">{p.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="ec-stats">
        <div className="shell ec-stats-row">
          {EC_STATS.map(s => (
            <div key={s.num} className="ec-stat">
              <span className="ec-stat-num">{s.num}</span>
              <span className="ec-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="ec-cta">
        <div className="shell ec-cta-inner">
          <div>
            <h2 className="ec-cta-hl">Ready to start selling online?</h2>
            <p className="ec-cta-sub">Tell us what you sell and we'll recommend the right platform and scope a project from there.</p>
          </div>
          <a className="btn btn--accent" href="contact.html">
            Start a conversation <span className="arrow">→</span>
          </a>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}

const ecRoot = ReactDOM.createRoot(document.getElementById('root'));
ecRoot.render(<EcommercePage />);
