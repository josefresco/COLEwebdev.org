/* global React, ReactDOM */

const AB_STATS = [
  { num: '20+', label: 'Years of experience' },
  { num: '700+', label: 'Website launches' },
  { num: '2006', label: 'Year founded' },
  { num: '5★', label: 'Google rating · 70+ reviews' },
];

const AB_AWARDS = [
  { year: '2018', title: 'Nauset Strong Award', org: 'Nauset Schools Community' },
  { year: '2017', title: 'Networker of the Year', org: 'Eastham Chamber of Commerce · Desiree Cole' },
  { year: '2014', title: '40 Under 40', org: 'Cape & Plymouth Business · Desiree Cole' },
  { year: '2013', title: '40 Under 40', org: 'Cape & Plymouth Business · Josiah Cole' },
  { year: '2012', title: 'Build a Better Mousetrap Award', org: 'Cape Cod Young Professionals' },
  { year: '2012', title: 'Featured Business', org: "Barnstable Patriot's Flagship Newsletter" },
];

const AB_CHAMBERS = [
  'Cape Cod Canal Region Chamber of Commerce',
  'Eastham Chamber of Commerce',
  'Provincetown Chamber of Commerce',
  'Truro Chamber of Commerce',
  'Wellfleet Chamber of Commerce',
];

function AboutPage() {
  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="ab-hero">
        <div className="ab-hero-bg" aria-hidden="true" />
        <div className="ab-hero-content">
          <div className="shell">
            <span className="eyebrow ab-eyebrow">About Us</span>
            <h1 className="ab-hero-hl">
              Cape Cod's web team, <em>since 2006.</em>
            </h1>
            <p className="ab-hero-sub">
              A husband-and-wife studio based in Eastham, MA — building websites for small businesses, nonprofits, and communities across the Outer Cape and beyond for over two decades.
            </p>
            <div className="ab-hero-actions">
              <a className="btn btn--accent" href="contact.html">
                Work with us <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost ab-ghost" href="tel:5084132043">
                508.413.2043
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="ab-stats">
        <div className="shell">
          <div className="ab-stats-inner">
            {AB_STATS.map(s => (
              <div key={s.label} className="ab-stat">
                <span className="ab-stat-num">{s.num}</span>
                <span className="ab-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="ab-story">
        <div className="shell">
          <div className="ab-story-grid">
            <div>
              <span className="eyebrow">Our story</span>
              <h2 className="ab-story-hl">
                Built on the Cape. <em>Built for the long haul.</em>
              </h2>
              <p className="ab-story-p">
                COLEwebdev was founded in 2006 by Josiah and Desiree Cole in Eastham, Massachusetts. What started as a small local web shop has grown into a full-service digital studio — one that still answers the phone, still shows up in person, and still treats every client like a neighbor.
              </p>
              <p className="ab-story-p">
                We've built websites for contractors and nonprofits, restaurants and retail shops, healthcare practices and harbor masters. Our clients range from single-person operations to organizations with reach across the country — but the work ethic is the same for all of them.
              </p>
              <p className="ab-story-p">
                We're not a faceless agency. There's no account manager between you and the people doing the work. You talk to us directly, and we stay involved from brief to launch to everything that comes after.
              </p>
              <a className="btn btn--primary" href="process.html">
                How we work <span className="arrow">→</span>
              </a>
            </div>
            <div className="ab-story-media">
              <img
                className="ab-story-img"
                src="assets/website-design-deveopment-cape-cod-2021.jpg"
                alt="COLEwebdev team"
                loading="lazy"
              />
              <div className="ab-story-badge">
                <span className="ab-story-badge-num">2006</span>
                <span className="ab-story-badge-label">Est. Eastham, MA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="ab-team">
        <div className="shell">
          <div className="ab-team-hd">
            <span className="eyebrow">The team</span>
            <h2 className="ab-team-hl">Two people. Every project.</h2>
          </div>
          <div className="ab-team-grid">
            <div className="ab-person">
              <img
                className="ab-person-img"
                src="assets/josiah-cole-cape-cod-website-designer.jpg"
                alt="Josiah Cole"
                loading="lazy"
              />
              <div className="ab-person-body">
                <h3 className="ab-person-name">Josiah Cole</h3>
                <span className="ab-person-role">Co-Founder · CTO · Webmaster</span>
                <p className="ab-person-bio">
                  Josiah has been building websites professionally for over 20 years — since the early days of the web, through every platform shift since. He handles design, development, hosting infrastructure, and anything that requires getting into the code. An early adopter by nature, he continuously invests in new technology so clients don't have to figure it out themselves.
                </p>
                <div className="ab-person-contact">
                  <a className="ab-person-link" href="mailto:josiah@colewebdev.com">josiah@colewebdev.com</a>
                  <a className="ab-person-link" href="https://www.linkedin.com/in/josiahcole/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
              </div>
            </div>
            <div className="ab-person">
              <img
                className="ab-person-img"
                src="assets/desiree-cole-webdiva-cape-cod-website-designer.jpg"
                alt="Desiree Cole"
                loading="lazy"
              />
              <div className="ab-person-body">
                <h3 className="ab-person-name">Desiree Cole</h3>
                <span className="ab-person-role">Co-Founder · CEO · Web Diva</span>
                <p className="ab-person-bio">
                  Desiree brings 20+ years of web design, marketing, and business development to every project. She leads client relationships, drives the creative direction, and makes sure every site actually serves the business goals behind it. Recognized by the Cape Cod business community for her work both in and outside the studio, she's the reason clients keep coming back — and referring their friends.
                </p>
                <div className="ab-person-contact">
                  <a className="ab-person-link" href="mailto:desiree@colewebdev.com">desiree@colewebdev.com</a>
                  <a className="ab-person-link" href="https://www.facebook.com/colewebdev" target="_blank" rel="noopener noreferrer">Facebook</a>
                  <a className="ab-person-link" href="https://www.instagram.com/colewebdev" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="ab-awards">
        <div className="shell">
          <div className="ab-awards-hd">
            <span className="eyebrow">Recognition</span>
            <h2 className="ab-awards-hl">Honored by the community we serve.</h2>
          </div>
          <div className="ab-awards-grid">
            {AB_AWARDS.map(a => (
              <div key={a.title + a.year} className="ab-award-card">
                <div className="ab-award-year">{a.year}</div>
                <div className="ab-award-title">{a.title}</div>
                <div className="ab-award-org">{a.org}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chamber memberships */}
      <section className="ab-chambers">
        <div className="shell">
          <div className="ab-chambers-hd">
            <span className="eyebrow">Community</span>
            <h2 className="ab-chambers-hl">Active members of the Cape Cod business community.</h2>
          </div>
          <div className="ab-chambers-grid">
            {AB_CHAMBERS.map(name => (
              <div key={name} className="ab-chamber-pill">
                <div className="ab-chamber-dot" aria-hidden="true" />
                <span className="ab-chamber-name">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="ab-testi">
        <div className="shell">
          <div className="ab-testi-inner">
            <span className="ab-quote-mark" aria-hidden="true">"</span>
            <blockquote className="ab-quote">
              "Desiree doesn't use a cookie cutter approach. She created a custom site capturing the whimsical nature of our harvest celebration."
            </blockquote>
            <div className="ab-testi-meta">
              <div>
                <div className="ab-testi-name">Marianne</div>
                <div className="ab-testi-role">Eastham Turnip Festival</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ab-cta-section">
        <div className="shell">
          <div className="ab-cta">
            <div>
              <h2 className="ab-cta-hl">
                Ready to work with a team that <em>actually knows you?</em>
              </h2>
              <p className="ab-cta-sub">
                The first hour is free. No commitment, no pitch deck — just a real conversation with the people who will build your site, with you, from start to finish.
              </p>
            </div>
            <div className="ab-cta-actions">
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

const abRoot = ReactDOM.createRoot(document.getElementById('root'));
abRoot.render(<AboutPage />);
