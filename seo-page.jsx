/* global React, ReactDOM */

const SEO_SERVICES = [
  {
    icon: '◎',
    name: 'Keyword Research & Strategy',
    body: 'We find the exact terms your local customers use — not just high-volume guesses. Every campaign starts with research grounded in your market, your geography, and your competition.',
  },
  {
    icon: '◇',
    name: 'On-Page Optimization',
    body: 'Titles, meta descriptions, heading structure, schema markup, and internal linking — the technical foundation that search engines read before anything else.',
  },
  {
    icon: '◐',
    name: 'Google Business Profile',
    body: 'Setup, optimization, and ongoing management of your GBP listing — the card that appears in Google Maps and the local pack when customers search near you.',
  },
  {
    icon: '✦',
    name: 'Local Citations',
    body: 'Consistent Name, Address, and Phone number across directories, review sites, and local listings signals trust to Google. We audit and fix inconsistencies that quietly hurt rankings.',
  },
  {
    icon: '✎',
    name: 'Content Strategy',
    body: 'New service pages, location pages, and blog posts written to rank for terms your customers actually search for — and to convert the visitors who land on them.',
  },
  {
    icon: '↗',
    name: 'Monthly Reporting',
    body: 'Clear, plain-English reports showing keyword rankings, organic traffic, and what we worked on — no jargon, no vanity metrics, just the numbers that connect to your business.',
  },
];

const HOW_STEPS = [
  {
    n: '01',
    label: 'Audit',
    body: 'We start with a full review of your current rankings, site health, Google Business Profile, and local citation landscape.',
  },
  {
    n: '02',
    label: 'Strategy',
    body: 'A written plan with target keywords, priority pages, and a 90-day roadmap — specific to your business and your Cape Cod market.',
  },
  {
    n: '03',
    label: 'Execute',
    body: 'On-page fixes, content creation, citation building, and GBP updates — implemented consistently, month after month.',
  },
  {
    n: '04',
    label: 'Report',
    body: "Monthly ranking and traffic reports with plain-English takeaways and next steps. You always know exactly what's happening.",
  },
];

const COMMITMENTS = [
  { icon: '✓', label: 'White-hat only', desc: 'Ethical tactics that build lasting rankings — no tricks that risk a Google penalty.' },
  { icon: '✓', label: 'No long-term contracts', desc: 'Month-to-month. We earn your business every month, not just once.' },
  { icon: '✓', label: 'Local focus', desc: "Cape Cod is our backyard. We understand the seasonal rhythms and local intent that generic agencies miss." },
  { icon: '✓', label: 'Real communication', desc: 'A person answers when you call. Reports come with explanations, not just numbers.' },
];

function SeoPage() {
  return (
    <React.Fragment>
      <Header />

      {/* Hero — CSS gradient, no image dependency */}
      <div className="seo-hero">
        <div className="seo-hero-bg" aria-hidden="true" />
        <div className="seo-hero-content">
          <div className="shell">
            <span className="eyebrow seo-eyebrow">Services · SEO &amp; Local Search</span>
            <h1 className="seo-hero-hl">
              Get found where your<br />customers are <em>searching.</em>
            </h1>
            <p className="seo-hero-sub">
              Ethical, measurable local SEO for small businesses on Cape Cod. No smoke, no mirrors — just higher rankings, more calls, and results you can actually see.
            </p>
            <div className="seo-hero-actions">
              <a className="btn btn--accent" href="index.html#cta">
                Start with a free audit <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost seo-ghost" href="tel:5084132043">
                508.413.2043
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Why local search matters */}
      <section className="seo-why">
        <div className="shell seo-why-grid">
          <div className="seo-why-stats">
            <div className="seo-stat">
              <span className="seo-stat-num">46%</span>
              <span className="seo-stat-label">of all Google searches have local intent</span>
            </div>
            <div className="seo-stat">
              <span className="seo-stat-num">78%</span>
              <span className="seo-stat-label">of local mobile searches result in an offline purchase</span>
            </div>
            <div className="seo-stat">
              <span className="seo-stat-num">#1</span>
              <span className="seo-stat-label">the position where over 27% of all clicks go</span>
            </div>
          </div>
          <div className="seo-why-body">
            <span className="eyebrow">Why it matters</span>
            <h2 className="seo-why-hl">
              Local search is how your neighbors <em>find you.</em>
            </h2>
            <p className="seo-body">
              When someone in Brewster searches "plumber near me" or a Provincetown visitor looks for "best clam chowder Cape Cod" — your position in those results directly determines whether your phone rings.
            </p>
            <p className="seo-body">
              Most small businesses have an SEO problem they don't know about: inconsistent listings, unoptimized Google Business Profiles, pages with no clear keyword focus. These are fixable problems with measurable payoffs.
            </p>
            <p className="seo-body">
              COLEwebdev has been building websites on Cape Cod since 2000. We understand the seasonal search patterns, the local competition, and the specific terms your customers type — because this is our market too.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="seo-services">
        <div className="shell">
          <div className="seo-services-hd">
            <span className="eyebrow">What we do</span>
            <h2 className="seo-services-hl">Six things that move the needle.</h2>
            <p className="seo-services-sub">
              Local SEO isn't one tactic — it's a system. These are the levers we pull every month.
            </p>
          </div>
          <div className="seo-services-grid">
            {SEO_SERVICES.map(svc => (
              <div key={svc.name} className="seo-svc-card">
                <div className="seo-svc-icon">{svc.icon}</div>
                <h3 className="seo-svc-name">{svc.name}</h3>
                <p className="seo-svc-body">{svc.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="seo-how">
        <div className="shell">
          <div className="seo-how-hd">
            <span className="eyebrow">How we work</span>
            <h2 className="seo-how-hl">A repeatable process, not a one-time fix.</h2>
          </div>
          <div className="seo-how-steps">
            {HOW_STEPS.map(step => (
              <div key={step.n} className="seo-how-step">
                <div className="seo-how-num">{step.n}</div>
                <div className="seo-how-label">{step.label}</div>
                <p className="seo-how-body">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="seo-commit">
        <div className="shell">
          <div className="seo-commit-hd">
            <span className="eyebrow">Our commitments</span>
            <h2 className="seo-commit-hl">
              What you can always <em>count on.</em>
            </h2>
          </div>
          <div className="seo-commit-grid">
            {COMMITMENTS.map(c => (
              <div key={c.label} className="seo-commit-card">
                <div className="seo-commit-check">{c.icon}</div>
                <div>
                  <div className="seo-commit-label">{c.label}</div>
                  <p className="seo-commit-desc">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="seo-testi">
        <div className="shell">
          <div className="seo-testi-inner">
            <span className="seo-quote-mark" aria-hidden="true">"</span>
            <blockquote className="seo-quote">
              Josiah and Desiree do great work with a personal touch. From the initial proposal through the design process, to maintenance and service once the site was up and running — the folks at COLEwebdev have always been there to answer all our questions and solve any problems.
            </blockquote>
            <div className="seo-testi-meta">
              <img
                className="seo-testi-img"
                src="https://www.colewebdev.com/wp-content/uploads/2020/04/womr-website-design-build-wordpress-ecommerce-cape-cod-xsmall.jpg"
                alt="WOMR"
                loading="lazy"
              />
              <div>
                <div className="seo-testi-name">Matty Dread</div>
                <div className="seo-testi-role">WOMR · womr.org</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="seo-cta-section">
        <div className="shell">
          <div className="seo-cta">
            <div>
              <h2 className="seo-cta-hl">
                Start with a free <em>SEO audit.</em>
              </h2>
              <p className="seo-cta-sub">
                We'll take a look at your current rankings, your Google Business Profile, and your biggest opportunities — at no charge. No commitment required.
              </p>
            </div>
            <div className="seo-cta-actions">
              <a className="btn btn--primary" href="index.html#cta">
                Request free audit <span className="arrow">→</span>
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

const seoRoot = ReactDOM.createRoot(document.getElementById('root'));
seoRoot.render(<SeoPage />);
