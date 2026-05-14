/* global React, ReactDOM */

const SITE_MAP = [
  {
    label: 'Company',
    links: [
      { title: 'Home', href: 'index.html', desc: 'Welcome, services overview, and portfolio highlights' },
      { title: 'About Us', href: 'about.html', desc: 'Our story, team, awards, and chamber memberships' },
      { title: 'Our Process', href: 'process.html', desc: 'How a COLEwebdev project works, start to finish' },
      { title: 'Portfolio', href: 'portfolio.html', desc: 'Past projects and client work' },
      { title: 'News', href: 'news.html', desc: 'Project launches, articles, and studio updates' },
      { title: 'Newsletter Archive', href: 'newsletter.html', desc: 'Every quarterly newsletter issue since 2020' },
      { title: 'FAQ', href: 'faq.html', desc: 'Straight answers to the questions we get asked most' },
      { title: 'Shop', href: 'shop.html', desc: 'Web-related products and resources' },
      { title: 'Contact', href: 'contact.html', desc: 'Get in touch — phone, email, studio address' },
      { title: 'Request a Quote', href: 'quote.html', desc: 'Start a project — tell us what you need' },
    ],
  },
  {
    label: 'Services',
    links: [
      { title: 'All Services', href: 'services.html', desc: 'Overview of everything we offer' },
      { title: 'Website Design', href: 'website-design.html', desc: 'Custom web design for Cape Cod businesses' },
      { title: 'WordPress Design', href: 'wordpress.html', desc: 'WordPress sites built for performance and ease of use' },
      { title: 'Traditional Web Design', href: 'traditional.html', desc: 'Hand-coded HTML/CSS sites — fast, secure, no CMS overhead' },
      { title: 'E-Commerce', href: 'ecommerce.html', desc: 'Online stores that convert browsers into buyers' },
      { title: 'SEO & Local', href: 'seo.html', desc: 'Search engine optimization for local Cape Cod businesses' },
      { title: 'Hosting + Care', href: 'hosting.html', desc: 'Premium managed WordPress hosting and maintenance' },
      { title: 'Branding', href: 'branding.html', desc: 'Logo design and brand identity for small businesses' },
      { title: 'AI Studio', href: 'ai-apps.html', desc: 'AI-powered web applications and tools' },
    ],
  },
  {
    label: 'Whitepapers',
    links: [
      { title: 'All Whitepapers', href: 'whitepapers.html', desc: 'Eight free guides on web design strategy for business owners' },
      { title: '01 · What Does Web Design Do?', href: 'wp-what-web-design-does.html', desc: 'How web design shapes trust, navigation, and conversions' },
      { title: '02 · Is Web Design Worth the Investment?', href: 'wp-investment-value.html', desc: 'A business case for professional web design' },
      { title: '03 · DIY vs. Hiring a Professional', href: 'wp-diy-vs-pro.html', desc: 'How to know which path is right for your business' },
      { title: '04 · The 3 Types of Web Design', href: 'wp-three-types.html', desc: 'Static, dynamic, and responsive — which fits your needs' },
      { title: '05 · The 7 Golden Rules of Web Design', href: 'wp-seven-golden-rules.html', desc: 'Timeless principles for sites that actually work' },
      { title: '06 · 5 Essential Principles of Effective Web Design', href: 'wp-five-principles.html', desc: 'The foundations every business website needs' },
      { title: "07 · The 7 C's of Web Design", href: 'wp-seven-cs.html', desc: 'A framework for building complete digital experiences' },
      { title: '08 · Building a Better FAQ', href: 'wp-faq-guide.html', desc: 'Questions that convert — and get found on Google' },
    ],
  },
  {
    label: 'Legal & Info',
    links: [
      { title: 'Privacy Policy', href: 'privacy.html', desc: 'How we collect, use, and protect your information' },
      { title: 'Accessibility Statement', href: 'accessibility.html', desc: 'Our commitment to an inclusive, accessible website' },
    ],
  },
];

function SitemapSection({ section }) {
  return (
    <div className="sm-section">
      <h2 className="sm-section-hl">{section.label}</h2>
      <ul className="sm-list">
        {section.links.map(link => (
          <li key={link.href} className="sm-item">
            <a href={link.href} className="sm-link">{link.title}</a>
            <span className="sm-desc">{link.desc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SitemapPage() {
  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="sm-hero">
        <div className="sm-hero-bg" aria-hidden="true" />
        <div className="sm-hero-content">
          <div className="shell">
            <span className="eyebrow sm-eyebrow">Navigation</span>
            <h1 className="sm-hero-hl">Site Map</h1>
            <p className="sm-hero-sub">Every page on colewebdev.org, organized by category.</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <section className="sm-body">
        <div className="shell">
          <div className="sm-grid">
            {SITE_MAP.map(section => (
              <SitemapSection key={section.label} section={section} />
            ))}
          </div>
        </div>
      </section>

      <NewsletterBanner />
      <Footer />
    </React.Fragment>
  );
}

const smRoot = ReactDOM.createRoot(document.getElementById('root'));
smRoot.render(<SitemapPage />);
