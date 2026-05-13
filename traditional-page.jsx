/* global React, ReactDOM */

const TR_WHAT_CARDS = [
  {
    icon: '◇',
    bg: 'rgba(108,142,191,0.14)',
    color: '#4A72A8',
    title: 'Small Business Sites',
    body: 'Contractors, service providers, restaurants, and local shops. Fast, focused sites that answer the right questions and get customers to call.',
  },
  {
    icon: '✦',
    bg: 'rgba(123,192,67,0.14)',
    color: '#5DA02E',
    title: 'Landing Pages',
    body: 'Single-purpose pages for campaigns, events, or product launches. No CMS overhead — just clean, focused HTML that loads in under a second.',
  },
  {
    icon: '◐',
    bg: 'rgba(108,142,191,0.14)',
    color: '#4A72A8',
    title: 'Portfolio + Brochure Sites',
    body: 'Showcase work, credentials, and services with precision. Designed to impress on every device without the complexity of a database-driven CMS.',
  },
  {
    icon: '⌘',
    bg: 'rgba(123,192,67,0.14)',
    color: '#5DA02E',
    title: 'Microsites',
    body: 'Standalone sites for a specific campaign, location, or brand extension — built independently from your main site and deployed in days.',
  },
  {
    icon: '↗',
    bg: 'rgba(108,142,191,0.14)',
    color: '#4A72A8',
    title: 'Redesigns & Migrations',
    body: 'Stuck with a slow WordPress site that you never update? We\'ll convert it to clean, maintainable HTML — faster and easier to own long-term.',
  },
  {
    icon: '◎',
    bg: 'rgba(123,192,67,0.14)',
    color: '#5DA02E',
    title: 'Event & Seasonal Sites',
    body: 'Temporary sites for festivals, fundraisers, or seasonal promotions. Spun up quickly, shut down cleanly — no plugin updates, no hosting overhead.',
  },
];

const TR_PORTFOLIO = [
  'Lower Cape Ice',
  'Jonathan Rice Landscaping',
  'Art Hultin & Co Inc',
  'Catherine Detrick',
  'Psychology Associates',
  'Jared Colley Irrigation',
  'Arthur Reis Landscaping',
  'Just Breathe Salt Spa',
  'Ryder & Wilcox',
  'Clipper Landscape',
  'Baer Carpentry',
  'Cape & Islands Construction',
  'Eastward Companies',
  'Horgan Insurance Agency',
  'Jon Fuller Locksmith',
  'Cape Cod Biochemical',
];

const TR_ADVANTAGES = [
  {
    n: '01',
    title: 'Blazing fast',
    body: 'No PHP, no database queries, no plugin chain. A traditional site loads in under a second on any connection — and Google notices.',
  },
  {
    n: '02',
    title: 'Zero attack surface',
    body: 'No WordPress core to exploit, no plugins to go stale, no admin login to brute-force. Static HTML has no known vulnerabilities.',
  },
  {
    n: '03',
    title: 'Own it forever',
    body: 'Your site is a folder of files. No subscription, no platform lock-in. Host it anywhere, hand it off to anyone, copy it with a single zip.',
  },
  {
    n: '04',
    title: 'Precise control',
    body: 'Every pixel, every interaction coded by hand — not constrained by a theme framework or a page builder\'s idea of what\'s possible.',
  },
];

function TraditionalPage() {
  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="tr-hero">
        <div className="tr-hero-bg" aria-hidden="true" />
        <div className="tr-hero-content">
          <div className="shell">
            <span className="eyebrow tr-eyebrow">Services · Traditional Website Design</span>
            <h1 className="tr-hero-hl">
              Hand-built. <em>No CMS.</em><br />No compromise.
            </h1>
            <p className="tr-hero-sub">
              Pure HTML, CSS, and JavaScript — crafted line by line for businesses that want maximum speed, security, and design precision without the overhead of a content management system.
            </p>
            <div className="tr-hero-actions">
              <a className="btn btn--accent" href="contact.html">
                Start a project <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost tr-ghost" href="tel:5084132043">
                508.413.2043
              </a>
            </div>
            <div className="tr-hero-tags">
              <span className="tr-hero-tag">HTML</span>
              <span className="tr-hero-tag">CSS</span>
              <span className="tr-hero-tag">JavaScript</span>
              <span className="tr-hero-tag">No CMS</span>
              <span className="tr-hero-tag">No Plugins</span>
              <span className="tr-hero-tag">Static</span>
            </div>
          </div>
        </div>
      </div>

      {/* Why Traditional */}
      <section className="tr-why">
        <div className="shell">
          <div className="tr-why-grid">
            <div>
              <span className="eyebrow">Why traditional</span>
              <h2 className="tr-why-hl">
                Sometimes the <em>right tool</em> is the simplest one.
              </h2>
              <p className="tr-why-p">
                WordPress is excellent for sites that need frequent content updates, complex navigation, or team-managed publishing. But not every business needs that. Many of the best-performing sites we've built are pure HTML — no database, no admin panel, nothing to update or patch.
              </p>
              <p className="tr-why-p">
                For a focused brochure site, a landing page, or a portfolio, a hand-coded site is faster to load, harder to hack, and cheaper to host. We've been building them since 2000 and they still outperform most CMS-driven sites on Core Web Vitals.
              </p>
              <a className="btn btn--primary" href="portfolio.html">
                See our work <span className="arrow">→</span>
              </a>
            </div>
            <div className="tr-code-block" aria-hidden="true">
              <div><span className="tr-code-comment">&lt;!-- No plugins. No admin. Just code. --&gt;</span></div>
              <div>&nbsp;</div>
              <div><span className="tr-code-tag">&lt;section</span> <span className="tr-code-attr">class</span>=<span className="tr-code-val">"hero"</span><span className="tr-code-tag">&gt;</span></div>
              <div>&nbsp; <span className="tr-code-tag">&lt;h1&gt;</span>Cape Cod Web Design<span className="tr-code-tag">&lt;/h1&gt;</span></div>
              <div>&nbsp; <span className="tr-code-tag">&lt;p&gt;</span>Built for your business.<span className="tr-code-tag">&lt;/p&gt;</span></div>
              <div>&nbsp; <span className="tr-code-tag">&lt;a</span> <span className="tr-code-attr">href</span>=<span className="tr-code-val">"contact.html"</span><span className="tr-code-tag">&gt;</span></div>
              <div>&nbsp;&nbsp;&nbsp; Get started →</div>
              <div>&nbsp; <span className="tr-code-tag">&lt;/a&gt;</span></div>
              <div><span className="tr-code-tag">&lt;/section&gt;</span></div>
              <div>&nbsp;</div>
              <div><span className="tr-code-comment">&lt;!-- Loads in &lt; 1 second. No exceptions. --&gt;</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="tr-what">
        <div className="shell">
          <div className="tr-what-hd">
            <span className="eyebrow">What we build</span>
            <h2 className="tr-what-hl">The right fit for your project.</h2>
          </div>
          <div className="tr-what-grid">
            {TR_WHAT_CARDS.map(card => (
              <div key={card.title} className="tr-what-card">
                <div className="tr-what-icon" style={{ background: card.bg, color: card.color }}>
                  {card.icon}
                </div>
                <div className="tr-what-title">{card.title}</div>
                <div className="tr-what-body">{card.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="tr-portfolio">
        <div className="shell">
          <div className="tr-portfolio-hd">
            <span className="eyebrow">Traditional portfolio</span>
            <h2 className="tr-portfolio-hl">Sites built the right way.</h2>
          </div>
          <div className="tr-portfolio-grid">
            {TR_PORTFOLIO.map(name => (
              <div key={name} className="tr-portfolio-item">
                <div className="tr-portfolio-dot" aria-hidden="true" />
                <div className="tr-portfolio-name">{name}</div>
              </div>
            ))}
          </div>
          <div className="tr-portfolio-footer">
            <a className="btn btn--ghost" href="portfolio.html">
              View full portfolio <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="tr-adv">
        <div className="shell">
          <div className="tr-adv-hd">
            <span className="eyebrow">Advantages</span>
            <h2 className="tr-adv-hl">Four reasons to go traditional.</h2>
          </div>
          <div className="tr-adv-grid">
            {TR_ADVANTAGES.map(adv => (
              <div key={adv.n} className="tr-adv-card">
                <div className="tr-adv-num">{adv.n}</div>
                <div className="tr-adv-title">{adv.title}</div>
                <div className="tr-adv-body">{adv.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="tr-testi">
        <div className="shell">
          <div className="tr-testi-inner">
            <span className="tr-quote-mark" aria-hidden="true">"</span>
            <blockquote className="tr-quote">
              "The COLEwebdev team were a pleasure to work with and exceeded expectations. The process was easy and met every goal for quality and timeliness."
            </blockquote>
            <div className="tr-testi-meta">
              <div>
                <div className="tr-testi-name">Carol Edmondson</div>
                <div className="tr-testi-role">Inn Advisors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WordPress nudge */}
      <section className="tr-trad-nudge">
        <div className="shell">
          <div className="tr-trad-nudge-inner">
            <div className="tr-trad-nudge-left">
              <span className="tr-trad-nudge-tag">Also available</span>
              <span className="tr-trad-nudge-text">
                Need a CMS your team can edit? We build WordPress sites too — custom themes, lean plugin stack, no bloat.
              </span>
            </div>
            <a className="btn btn--ghost btn--sm tr-trad-nudge-link" href="wordpress.html">
              WordPress Design <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="tr-cta-section">
        <div className="shell">
          <div className="tr-cta">
            <div>
              <h2 className="tr-cta-hl">
                Ready for a site that's <em>fast by design?</em>
              </h2>
              <p className="tr-cta-sub">
                The first hour is free. No pitch deck, no commitment — just a conversation about what you need, with people who've been hand-coding sites since 2000.
              </p>
            </div>
            <div className="tr-cta-actions">
              <a className="btn btn--accent" href="contact.html">
                Start a project <span className="arrow">→</span>
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

      <NewsletterBanner />
      <Footer />
    </React.Fragment>
  );
}

const trRoot = ReactDOM.createRoot(document.getElementById('root'));
trRoot.render(<TraditionalPage />);
