/* global React, ReactDOM */

function TeamPage() {
  const id = window.CURRENT_TEAM_ID;
  const team = window.TEAM_DATA || [];
  const person = team.find(function(t) { return t.id === id; });
  const guides = (window.WHITEPAPERS_DATA || []).filter(function(w) { return w.author === id; });

  if (!person) {
    return (
      <React.Fragment>
        <Header />
        <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ marginBottom: 16, color: 'var(--ink-2)' }}>Team member not found.</p>
            <a className="btn btn--primary" href="about.html">← About COLEwebdev</a>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="tp-hero">
        <div className="shell">
          <a href="about.html" className="tp-breadcrumb">← About COLEwebdev</a>
          <div className="tp-hero-row">
            <img className="tp-hero-photo" src={person.photo} alt={person.name} />
            <div>
              <span className="eyebrow tp-eyebrow">Meet the team</span>
              <h1 className="tp-hero-name">{person.name}</h1>
              <p className="tp-hero-role">{person.jobTitle}</p>
              <p className="tp-hero-sub">{person.heroSub}</p>
              <div className="tp-hero-contact">
                <a className="tp-contact-link" href={'mailto:' + person.email}>{person.email}</a>
                {person.sameAs.map(function(url) {
                  const label = url.includes('linkedin') ? 'LinkedIn' : url.includes('facebook') ? 'Facebook' : url.includes('instagram') ? 'Instagram' : 'Profile';
                  return (
                    <a key={url} className="tp-contact-link" href={url} target="_blank" rel="noopener noreferrer">{label}</a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bio */}
      <section className="tp-bio">
        <div className="shell tp-bio-grid">
          <div>
            {person.bio.map(function(p, i) {
              return <p key={i} className="tp-bio-p">{p}</p>;
            })}
          </div>
          <div className="tp-expertise-card">
            <span className="tp-expertise-label">Areas of expertise</span>
            <div className="tp-expertise-tags">
              {person.expertise.map(function(tag) {
                return <span key={tag} className="tp-expertise-tag">{tag}</span>;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Guides authored */}
      {guides.length > 0 && (
        <section className="tp-guides">
          <div className="shell">
            <div className="tp-guides-hd">
              <span className="eyebrow">Written by {person.name.split(' ')[0]}</span>
              <h2 className="tp-guides-hl">{guides.length} guide{guides.length !== 1 ? 's' : ''} on the COLEwebdev whitepapers library.</h2>
            </div>
            <div className="tp-guides-grid">
              {guides.map(function(g) {
                return (
                  <a key={g.id} href={'wp-' + g.id + '.html'} className="tp-guide-card">
                    <span className="tp-guide-num">{g.num}</span>
                    <div>
                      <div className="tp-guide-title">{g.title}</div>
                      <div className="tp-guide-sub">{g.subtitle}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="tp-cta">
        <div className="shell">
          <div className="tp-cta-card">
            <div>
              <h2 className="tp-cta-hl">Want to work with {person.name.split(' ')[0]}?</h2>
              <p className="tp-cta-sub">Tell us about your project — we'll get back to you quickly with a real scope and a fair price.</p>
            </div>
            <div className="tp-cta-actions">
              <a className="btn btn--accent" href="contact.html">
                Start a conversation <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost tp-ghost" href="tel:5084132043">
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

const teamRoot = ReactDOM.createRoot(document.getElementById('root'));
teamRoot.render(<TeamPage />);
