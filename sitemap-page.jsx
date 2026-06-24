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
      { title: 'Shop', href: 'shop.html', desc: 'COLEwebdev branded merch — tees, hoodies, hats, and tote bags' },
      { title: 'Contact', href: 'contact.html', desc: 'Get in touch — phone, email, studio address' },
      { title: 'Request a Quote', href: 'quote.html', desc: 'Start a project — tell us what you need' },
    ],
  },
  {
    label: 'Services',
    links: [
      { title: 'All Services', href: 'services.html', desc: 'Overview of everything we offer' },
      { title: 'Industries We Serve', href: 'industries.html', desc: 'Web design for 19 Cape Cod industries — restaurants, contractors, nonprofits, hospitality, and more' },
      { title: 'Website Design', href: 'website-design.html', desc: 'Custom web design for Cape Cod businesses' },
      { title: 'WordPress Design', href: 'wordpress.html', desc: 'WordPress sites built for performance and ease of use' },
      { title: 'Traditional Web Design', href: 'traditional.html', desc: 'Hand-coded HTML/CSS sites — fast, secure, no CMS overhead' },
      { title: 'E-Commerce', href: 'ecommerce.html', desc: 'Online stores that convert browsers into buyers' },
      { title: 'SEO & Local', href: 'seo.html', desc: 'Search engine optimization for local Cape Cod businesses' },
      { title: 'Cape Cod Marketing', href: 'cape-cod-marketing.html', desc: 'SEO, Google Ads, social media, analytics, and lead capture for Cape Cod businesses' },
      { title: 'AIEO', href: 'aieo.html', desc: 'AI Engine Optimization — get cited by ChatGPT, Perplexity, Gemini, and Claude' },
      { title: 'Hosting + Care', href: 'hosting.html', desc: 'Premium managed WordPress hosting and maintenance' },
      { title: 'Branding', href: 'branding.html', desc: 'Logo design and brand identity for small businesses' },
      { title: 'AI Studio', href: 'ai-apps.html', desc: 'Custom AI tools — chatbots, plugins, PWAs, and browser extensions' },
    ],
  },
  {
    label: 'Location Pages',
    links: [
      { title: 'Service Area Overview', href: 'service-area.html', desc: 'Cape Cod, the Islands, and Greater Plymouth — all areas served by COLEwebdev' },
      { title: 'Cape Cod Web Design', href: 'cape-cod-web-design.html', desc: 'Web design services for Cape Cod businesses' },
      { title: 'Hyannis Web Design', href: 'hyannis-web-design.html', desc: 'Web design in Hyannis, MA' },
      { title: 'Falmouth Web Design', href: 'falmouth-web-design.html', desc: 'Web design in Falmouth, MA' },
      { title: 'Chatham Web Design', href: 'chatham-web-design.html', desc: 'Web design in Chatham, MA' },
      { title: 'Dennis Web Design', href: 'dennis-web-design.html', desc: 'Web design in Dennis, MA' },
      { title: 'Harwich Web Design', href: 'harwich-web-design.html', desc: 'Web design in Harwich, MA' },
      { title: 'Brewster Web Design', href: 'brewster-web-design.html', desc: 'Web design in Brewster, MA' },
      { title: 'Yarmouth Web Design', href: 'yarmouth-web-design.html', desc: 'Web design in Yarmouth, MA' },
      { title: 'Sandwich Web Design', href: 'sandwich-web-design.html', desc: 'Web design in Sandwich, MA' },
      { title: 'Bourne Web Design', href: 'bourne-web-design.html', desc: 'Web design in Bourne, MA' },
      { title: 'Mashpee Web Design', href: 'mashpee-web-design.html', desc: 'Web design in Mashpee, MA' },
      { title: 'Truro Web Design', href: 'truro-web-design.html', desc: 'Web design in Truro, MA' },
      { title: 'Eastham Web Design', href: 'eastham-web-design.html', desc: 'Web design in Eastham, MA' },
      { title: 'Orleans Web Design', href: 'orleans-web-design.html', desc: 'Web design in Orleans, MA' },
      { title: 'Wellfleet Web Design', href: 'wellfleet-web-design.html', desc: 'Web design in Wellfleet, MA' },
      { title: 'Provincetown Web Design', href: 'provincetown-web-design.html', desc: 'Web design in Provincetown, MA' },
      { title: "Martha's Vineyard Web Design", href: 'marthas-vineyard-web-design.html', desc: "Web design for MV's hospitality, restaurants, retail, and year-round service businesses" },
      { title: 'Nantucket Web Design', href: 'nantucket-web-design.html', desc: "Web design for Nantucket's hospitality, retail, and service businesses" },
      { title: 'Plymouth Web Design', href: 'plymouth-web-design.html', desc: 'Web design in Plymouth, MA — tourism, restaurants, contractors, and local services' },
    ],
  },
  {
    label: 'Industry Pages',
    links: [
      { title: 'Nonprofit Web Design', href: 'cape-cod-nonprofit-web-design.html', desc: 'Donation integration, volunteer intake, and accessible sites for Cape Cod nonprofits' },
      { title: 'Church Website Design', href: 'cape-cod-church-web-design.html', desc: 'Service schedules, sermon archives, and online giving for Cape Cod churches' },
      { title: 'Hospitality Web Design', href: 'cape-cod-hospitality-web-design.html', desc: 'Direct booking, room pages, and local SEO for Cape Cod inns and B&Bs' },
      { title: 'Restaurant Web Design', href: 'cape-cod-restaurant-web-design.html', desc: 'Mobile-first menus, reservations, and online ordering for Cape Cod restaurants' },
      { title: 'Real Estate Web Design', href: 'cape-cod-real-estate-web-design.html', desc: 'IDX integration, lead capture, and neighborhood guides for Cape Cod agents' },
      { title: 'Chamber of Commerce Website', href: 'cape-cod-chamber-web-design.html', desc: 'Member directories, event calendars, and business spotlights for Cape Cod chambers' },
      { title: 'Contractor Web Design', href: 'cape-cod-contractor-web-design.html', desc: 'Project galleries, service area pages, and local SEO for Cape Cod builders, plumbers, and roofers' },
      { title: 'Landscaping Web Design', href: 'cape-cod-landscaping-web-design.html', desc: 'Before-and-after galleries and local SEO to fill your spring calendar on Cape Cod' },
      { title: 'Health & Wellness Web Design', href: 'cape-cod-health-web-design.html', desc: 'Online booking, provider profiles, and local SEO for Cape Cod fitness studios and practices' },
      { title: 'Law Firm Web Design', href: 'cape-cod-legal-web-design.html', desc: 'Credibility-first sites for Cape Cod attorneys, consultants, and professional service firms' },
      { title: 'Marine & Charter Web Design', href: 'cape-cod-marine-web-design.html', desc: 'Online booking and photography-led design for Cape Cod fishing charters and boat tours' },
      { title: 'Retail Web Design', href: 'cape-cod-retail-web-design.html', desc: 'E-commerce, product catalogs, and local SEO for Cape Cod boutiques, gift shops, and specialty stores' },
      { title: 'Automotive Web Design', href: 'cape-cod-automotive-web-design.html', desc: 'Service pages, online scheduling, and local SEO for Cape Cod auto repair shops and dealerships' },
      { title: 'Photography Web Design', href: 'cape-cod-photography-web-design.html', desc: 'Portfolio websites, online booking, and local SEO for Cape Cod photographers' },
      { title: 'Wedding & Event Web Design', href: 'cape-cod-wedding-web-design.html', desc: 'Portfolio galleries, inquiry forms, and local SEO for Cape Cod venues, planners, and florists' },
      { title: 'Salon & Spa Web Design', href: 'cape-cod-salon-web-design.html', desc: 'Online booking, portfolio galleries, and local SEO for Cape Cod salons and spas' },
      { title: 'Winery & Brewery Web Design', href: 'cape-cod-winery-web-design.html', desc: 'Online shop, events calendar, and local SEO for Cape Cod wineries and craft breweries' },
      { title: 'Pet Care Web Design', href: 'cape-cod-pet-care-web-design.html', desc: 'Online booking, facility pages, and local SEO for Cape Cod vets, groomers, and kennels' },
      { title: 'Vacation Rental Web Design', href: 'cape-cod-vacation-rental-web-design.html', desc: 'Direct booking, property photography, and local SEO to cut Airbnb commissions' },
    ],
  },
  {
    label: 'Whitepapers',
    links: [
      { title: 'All Whitepapers', href: 'whitepapers.html', desc: '26 free guides on web design strategy for business owners' },
      { title: '01 · What Does Web Design Do?', href: 'wp-what-web-design-does.html', desc: 'How web design shapes trust, navigation, and conversions' },
      { title: '02 · Is Web Design Worth the Investment?', href: 'wp-investment-value.html', desc: 'A business case for professional web design' },
      { title: '03 · DIY vs. Hiring a Professional', href: 'wp-diy-vs-pro.html', desc: 'How to know which path is right for your business' },
      { title: '04 · The 3 Types of Web Design', href: 'wp-three-types.html', desc: 'Static, dynamic, and responsive — which fits your needs' },
      { title: '05 · The 7 Golden Rules of Web Design', href: 'wp-seven-golden-rules.html', desc: 'Timeless principles for sites that actually work' },
      { title: '06 · 5 Essential Principles of Effective Web Design', href: 'wp-five-principles.html', desc: 'The foundations every business website needs' },
      { title: "07 · The 7 C's of Web Design", href: 'wp-seven-cs.html', desc: 'A framework for building complete digital experiences' },
      { title: '08 · Building a Better FAQ', href: 'wp-faq-guide.html', desc: 'Questions that convert — and get found on Google' },
      { title: 'Google Ads Waste Guide', href: 'wp-google-ads-guide.html', desc: 'Why most Google Ads accounts waste budget — and how to fix it' },
      { title: '09 · How to Choose a Web Designer', href: 'wp-how-to-choose.html', desc: 'What to look for, what to ask, and what to avoid' },
      { title: '10 · What Makes a Good Website?', href: 'wp-what-makes-good-website.html', desc: 'The elements that separate sites that work from sites that don\'t' },
      { title: '12 · How Much Does a Website Cost?', href: 'wp-website-cost.html', desc: 'What drives price up or down — and how to evaluate value' },
      { title: '13 · Why Is Web Design So Expensive?', href: 'wp-web-design-expensive.html', desc: 'What you\'re actually buying when you hire a professional' },
      { title: '14 · How Long Does a Website Take to Build?', href: 'wp-how-long-website.html', desc: 'Realistic timelines and what usually causes delays' },
      { title: '15 · When Should I Redesign My Website?', href: 'wp-when-to-redesign.html', desc: 'Data-driven signs it\'s time — and how to plan it right' },
      { title: '16 · Do I Need a Website If I Have Social Media?', href: 'wp-website-vs-social.html', desc: 'Why owned property beats rented land every time' },
      { title: '17 · WordPress vs. Squarespace', href: 'wp-wordpress-vs-squarespace.html', desc: 'An honest comparison for small business owners' },
      { title: '18 · Web Design vs. Web Development', href: 'wp-design-vs-development.html', desc: 'Two distinct disciplines — and why the best work combines both' },
      { title: '19 · Why Isn\'t My Website on Google?', href: 'wp-not-showing-on-google.html', desc: 'Four fixable problems behind most visibility issues' },
      { title: '20 · How Long Does SEO Take to Work?', href: 'wp-how-long-seo.html', desc: 'Realistic timelines and what good SEO looks like in progress' },
      { title: '21 · How Do I Know If My Website Is Working?', href: 'wp-is-my-website-working.html', desc: 'The right metrics — and what "working" actually means' },
      { title: '22 · Shopify vs. WooCommerce', href: 'wp-shopify-vs-woocommerce.html', desc: 'A practical e-commerce comparison for small businesses' },
      { title: '23 · What Are Core Web Vitals?', href: 'wp-core-web-vitals.html', desc: 'LCP, CLS, and INP explained — and how they affect your Google rankings' },
      { title: '24 · Website Accessibility & ADA Compliance', href: 'wp-website-accessibility.html', desc: 'What WCAG 2.1 means, the legal exposure, and how to build a compliant site' },
      { title: '25 · How to Improve Your Google Maps Ranking', href: 'wp-google-maps-ranking.html', desc: 'Google Business Profile, reviews, citations, and local schema — what moves the needle' },
      { title: '26 · What Is WordPress Maintenance?', href: 'wp-wordpress-maintenance.html', desc: 'Updates, backups, security monitoring — and the real cost of skipping it' },
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
