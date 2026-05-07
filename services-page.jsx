/* global React, ReactDOM */

const SERVICES = [
  {
    id: 'design-build',
    n: '01',
    icon: '◇',
    name: 'Website Design + Build',
    tag: 'Flagship',
    headline: '100% custom — built around your brand, not a template.',
    img: 'https://www.colewebdev.com/wp-content/uploads/2020/06/website-design-build-cape-cod-colewebdev.jpg',
    body: [
      'From a 4-page coastal contractor site to a 60-page nonprofit hub — we design, build, and launch it end to end. No outsourcing. No page builders. Just a site that looks and works exactly like your business.',
      'Every project starts with a real consultation, ends with hands-on training, and includes everything: design proofs, mobile layout, CMS setup, and a thorough hand-off.',
    ],
    detail: 'From $2,400 · Fixed price · 100% custom',
    href: 'https://www.colewebdev.com/services/website-design-build/',
  },
  {
    id: 'wordpress',
    n: '02',
    icon: '◐',
    name: 'WordPress Websites',
    headline: "The world's most powerful CMS, built right.",
    img: 'https://www.colewebdev.com/wp-content/uploads/2020/06/consultation-colewebdev.jpg',
    body: [
      "WordPress powers over 40% of the web for a reason. We build clean, fast, maintainable WordPress sites — not bloated, plugin-heavy ones that slow down over time.",
      "You'll be able to edit your own content from day one. We build editor experiences that make sense for people who aren't developers.",
    ],
    detail: 'Easy to manage · Plugin-lite · Fast &amp; secure',
    href: 'https://www.colewebdev.com/services/wordpress/',
  },
  {
    id: 'updates',
    n: '03',
    icon: '✎',
    name: 'Website Updates',
    headline: 'Keep your site current — without the headache.',
    img: 'https://www.colewebdev.com/wp-content/uploads/2020/06/content-website-build-cape-cod.jpg',
    body: [
      'Got a site that just needs new photos, updated hours, or a fresh page? We handle quick-turn edits, new pages, and content refreshes — billed by the hour or by a block of time.',
      'Already a hosting client? Many routine updates are included. Just send us an email.',
    ],
    detail: 'Billed by the hour · Fast turnaround · No contracts',
    href: 'https://www.colewebdev.com/services/updates/',
  },
  {
    id: 'ecommerce',
    n: '04',
    icon: '◎',
    name: 'e-Commerce',
    headline: 'Storefronts that sell — without the complexity.',
    img: 'https://www.colewebdev.com/wp-content/uploads/2020/06/colewebdev-production-website.jpg',
    body: [
      "WooCommerce and Shopify storefronts built to convert browsers into buyers. We handle products, payment setup, shipping rules, and the thousand small details that make or break an online store.",
      "We've launched stores from 10 products to 1,000+. Whatever the scale, the goal is the same: make it effortless for your customers to buy.",
    ],
    detail: 'WooCommerce · Shopify · Printful · Stripe',
    href: 'https://www.colewebdev.com/services/e-commerce-website-design/',
  },
  {
    id: 'hosting',
    n: '05',
    icon: '↻',
    name: 'Website Hosting',
    headline: 'Managed hosting with a human on the other end.',
    img: 'https://www.colewebdev.com/wp-content/uploads/2020/06/security-website-cape-cod-1.png',
    body: [
      'Fast, secure hosting backed by people who actually pick up the phone. We offer managed WordPress hosting — with daily backups, SSL, and ongoing core updates included.',
      'No annual contracts. Cancel any time.',
    ],
    detail: 'Daily backups · SSL included · No contracts',
    href: 'https://www.colewebdev.com/services/hosting-domains/',
  },
  {
    id: 'consulting',
    n: '06',
    icon: '⌘',
    name: 'Website Consulting',
    headline: 'Get an outside expert in your corner.',
    img: 'https://www.colewebdev.com/wp-content/uploads/2020/06/planning-colewebdev.jpg',
    body: [
      "Not sure what your next move should be? Have a site that isn't performing? We offer focused consulting sessions to review your current site, identify opportunities, and give you a concrete plan — with no obligation to hire us for anything else.",
      "We've been building websites since 2000. We've seen every problem — and we know what actually fixes them.",
    ],
    detail: 'Hourly · Site audits · Strategy sessions · CMS training',
    href: 'https://www.colewebdev.com/services/consulting/',
  },
  {
    id: 'marketing',
    n: '07',
    icon: '↗',
    name: 'Website Marketing',
    headline: 'Get found. Get called. Get customers.',
    img: 'https://www.colewebdev.com/wp-content/uploads/2020/06/proposal-colewebdev.jpg',
    body: [
      'A beautiful website only works if people can find it. We offer SEO, Google Ads, and social media consulting — focused on local, measurable results that actually matter for small businesses on Cape Cod.',
      'Ethical, transparent, no smoke and mirrors. You see exactly what is happening and why — every month.',
    ],
    detail: 'SEO · Google Ads · Social media · Email campaigns',
    href: 'https://www.colewebdev.com/services/marketing/',
  },
];

function ServiceItem({ svc, index }) {
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.10 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="svc-item"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      <span className="svc-watermark" aria-hidden="true">{svc.n}</span>
      <div className="shell">
        <div className="svc-item-inner">
          <div className="svc-item-text">
            <div className="svc-item-eyebrow">
              <span className="svc-item-num">{svc.n}</span>
              <span className="svc-item-name">{svc.name}</span>
              {svc.tag && <span className="svc-item-tag">{svc.tag}</span>}
            </div>
            <h2 className="svc-item-hl">{svc.headline}</h2>
            {svc.body.map((p, i) => (
              <p key={i} className="svc-item-body">{p}</p>
            ))}
            <div className="svc-item-detail">{svc.detail}</div>
            <a
              className="btn btn--ghost svc-item-link"
              href={svc.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more <span className="arrow">→</span>
            </a>
          </div>
          <div className="svc-item-media">
            <img
              className="svc-item-img"
              src={svc.img}
              alt={svc.name}
              loading="lazy"
            />
            <div className="svc-item-icon-badge">
              <span>{svc.icon}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesPage() {
  const heroRef = React.useRef(null);

  React.useEffect(() => {
    const img = new Image();
    img.src = 'https://www.colewebdev.com/wp-content/uploads/2020/05/colewebdev-website-design-build-cape-cod-modern-mountains-1.jpg';
    img.onload = () => {
      if (heroRef.current) heroRef.current.classList.add('loaded');
    };
  }, []);

  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="svc-hero">
        <div ref={heroRef} className="svc-hero-img" />
        <div className="svc-hero-text">
          <div className="shell">
            <span className="eyebrow">What we offer</span>
            <h1 className="svc-hero-hl">
              Services built for <em>real businesses.</em>
            </h1>
            <p className="svc-hero-sub">
              From full website builds to ongoing care, e-commerce, hosting, and marketing — one team, one phone number, 20+ years on Cape Cod. We pick the right tool for the job and stick around to make sure it keeps working.
            </p>
          </div>
        </div>
      </div>

      {/* Service sections */}
      {SERVICES.map((svc, i) => (
        <ServiceItem key={svc.id} svc={svc} index={i} />
      ))}

      {/* CTA */}
      <section className="svc-cta-section">
        <div className="shell">
          <div className="svc-cta">
            <div>
              <h2 className="svc-cta-hl">
                Not sure which service you <em>need?</em>
              </h2>
              <p className="svc-cta-sub">
                The first hour is free. No commitment, no pitch — just a straightforward conversation about what you're trying to build, with someone who's been doing this since 2000.
              </p>
            </div>
            <div className="svc-cta-actions">
              <a className="btn btn--primary" href="index.html#cta">
                Schedule a call <span className="arrow">→</span>
              </a>
              <a
                className="btn btn--ghost"
                href="tel:5084132043"
                style={{ color: 'rgba(255,255,255,0.7)', borderColor: 'rgba(255,255,255,0.2)' }}
              >
                508.413.2043
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}

const svcRoot = ReactDOM.createRoot(document.getElementById('root'));
svcRoot.render(<ServicesPage />);
