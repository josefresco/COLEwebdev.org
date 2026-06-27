/* global React, ReactDOM */

const GL_FORM_ENDPOINT = 'https://formspree.io/f/xnjwgqld';

const GL_STATS = [
  { num: '20+', label: 'Years on Cape Cod' },
  { num: '700+', label: 'Websites launched' },
  { num: '5★', label: 'Google rating' },
  { num: '70+', label: 'Client reviews' },
];

const GL_TESTIMONIALS = [
  {
    quote: 'We struck gold with Josiah. Finding smart, responsive website help can be difficult on Cape Cod. Not any more. Josiah and COLEwebdev have been the best thing to happen to Ring Bros. Marketplace.',
    name: 'Lori Flanagan',
    role: 'Ring Bros. Marketplace',
    initials: 'LF',
  },
  {
    quote: 'COLEwebdev did an outstanding job designing our website. As our business grows they have seamlessly updated our site to reflect our new services. Very easy to work with and accommodates changes quickly. We highly recommend them!',
    name: 'Kegan Berner',
    role: 'Oyster River Boatyard',
    initials: 'KB',
  },
  {
    quote: "Working with Desiree and Joe was a breeze. They completely overhauled my business website. I receive compliments regularly from customers about the site. We are beyond happy with the finished product and the results it has generated for us!",
    name: 'Amberlyn Tubman',
    role: 'Brewster Sand & Gravel',
    initials: 'AT',
  },
  {
    quote: "I've worked with COLEwebdev for years. They are incredibly responsive and professional and do top quality work. They are friendly, reasonably priced, and don't mind taking the time to explain complicated issues. Can't recommend highly enough.",
    name: 'Joseph Moldover',
    role: 'Dr. Moldover · drmoldover.com',
    initials: 'JM',
  },
];

const GL_CLIENTS = [
  'Ring Bros. Marketplace',
  'Oyster River Boatyard',
  'Cape Cod Aquatics',
  "Dyer's Beach House",
  'Truro Historical Society',
  'Brewster Sand & Gravel',
  'Cornerstone Fundraising',
  'Eastham Turnip Festival',
  'Dr. Moldover',
  'WOMR Radio',
  'Sylvestre Outdoors',
  'Cape Cod Winery',
];

const GL_SERVICES = [
  {
    icon: '◇',
    title: 'Custom Web Design',
    body: 'Every site is built from scratch — no templates, no page builders. Designed to match your brand and convert visitors into customers.',
  },
  {
    icon: '⌘',
    title: 'AI-Powered Features',
    body: 'We integrate the latest AI tools into real client projects — smart search, chatbots, content automation — tested in production, not just demonstrated.',
  },
  {
    icon: '↗',
    title: 'SEO & Performance',
    body: 'Fast-loading, mobile-first, and built for Google from day one. Technical SEO, schema markup, and Core Web Vitals are part of every build.',
  },
  {
    icon: '↻',
    title: 'Hosting & Care Plans',
    body: 'We host and maintain every site we build. Updates, backups, security monitoring, and support — all handled by the team that built it.',
  },
];

/* ── Form ── */
function GlForm() {
  const [fields, setFields] = React.useState({
    name: '', email: '', phone: '', website: '', message: '',
  });
  const [status, setStatus] = React.useState('idle');

  function set(k) {
    return function(e) { setFields(function(p) { return Object.assign({}, p, {[k]: e.target.value}); }); };
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    fetch(GL_FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(Object.assign({ _subject: 'Cape Cod Web Design — Landing Page Inquiry' }, fields)),
    })
      .then(function(res) { setStatus(res.ok ? 'success' : 'error'); })
      .catch(function() { setStatus('error'); });
  }

  if (status === 'success') {
    return (
      <div className="gl-form-success">
        <div className="gl-success-icon" aria-hidden="true">✦</div>
        <h3 className="gl-success-hl">Got it — we'll be in touch.</h3>
        <p className="gl-success-p">
          Josiah or Desiree will reach out within one business day.
          If you need us sooner, call{' '}
          <a href="tel:5084132043">508.413.2043</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="gl-form" onSubmit={handleSubmit} noValidate>
      <div className="gl-form-row">
        <div className="gl-field">
          <label className="gl-label">Name <span className="gl-req">*</span></label>
          <input
            className="gl-input"
            type="text"
            required
            value={fields.name}
            onChange={set('name')}
            placeholder="Your name"
          />
        </div>
        <div className="gl-field">
          <label className="gl-label">Email <span className="gl-req">*</span></label>
          <input
            className="gl-input"
            type="email"
            required
            value={fields.email}
            onChange={set('email')}
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div className="gl-form-row">
        <div className="gl-field">
          <label className="gl-label">Phone</label>
          <input
            className="gl-input"
            type="tel"
            value={fields.phone}
            onChange={set('phone')}
            placeholder="508-xxx-xxxx"
          />
        </div>
        <div className="gl-field">
          <label className="gl-label">Current website <span className="gl-opt">(optional)</span></label>
          <input
            className="gl-input"
            type="url"
            value={fields.website}
            onChange={set('website')}
            placeholder="https://"
          />
        </div>
      </div>
      <div className="gl-field">
        <label className="gl-label">Tell us about your project</label>
        <textarea
          className="gl-textarea"
          rows={3}
          value={fields.message}
          onChange={set('message')}
          placeholder="New site, redesign, SEO, something else?"
        />
      </div>
      {status === 'error' && (
        <p className="gl-form-err">Something went wrong. Please try again or call 508.413.2043.</p>
      )}
      <button className="gl-submit" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Get a Free Quote →'}
      </button>
      <p className="gl-form-note">No spam. No obligation. We respond within 1 business day.</p>
    </form>
  );
}

/* ── Testimonial rotator ── */
function GlTestimonials() {
  const [i, setI] = React.useState(0);
  const len = GL_TESTIMONIALS.length;

  React.useEffect(function() {
    var id = setInterval(function() { setI(function(p) { return (p + 1) % len; }); }, 5500);
    return function() { clearInterval(id); };
  }, [len]);

  var t = GL_TESTIMONIALS[i];

  return (
    <div className="gl-testi-wrap">
      <div className="gl-testi-card">
        <div className="gl-testi-stars" aria-label="5 out of 5 stars">★★★★★</div>
        <blockquote className="gl-testi-quote">"{t.quote}"</blockquote>
        <div className="gl-testi-attr">
          <div className="gl-testi-avatar" aria-hidden="true">{t.initials}</div>
          <div>
            <div className="gl-testi-name">{t.name}</div>
            <div className="gl-testi-role">{t.role}</div>
          </div>
        </div>
      </div>
      <div className="gl-testi-dots" role="group" aria-label="Review navigation">
        {GL_TESTIMONIALS.map(function(_, idx) {
          return (
            <button
              key={idx}
              className={'gl-dot' + (i === idx ? ' is-active' : '')}
              onClick={function() { setI(idx); }}
              aria-label={'Review ' + (idx + 1)}
            />
          );
        })}
      </div>
    </div>
  );
}

/* ── Main page ── */
function LandingPage() {
  return (
    <React.Fragment>

      {/* ── Minimal header ── */}
      <header className="gl-header">
        <div className="gl-header-inner gl-shell">
          <a href="index.html" className="gl-logo-link" aria-label="COLEwebdev — home">
            <img src="assets/colewebdev-logo.png" alt="COLEwebdev" className="gl-logo-img" />
          </a>
          <a href="tel:5084132043" className="gl-header-phone">
            <span className="gl-phone-label">Call us free</span>
            <span className="gl-phone-num">508.413.2043</span>
          </a>
        </div>
      </header>

      {/* ── Hero + Form ── */}
      <section className="gl-hero">
        <div className="gl-hero-inner gl-shell">
          <div className="gl-hero-copy">
            <span className="gl-eyebrow">Cape Cod · Est. 2006 · Eastham, MA</span>
            <h1 className="gl-hero-hl">
              Cape Cod web design that <em>actually works.</em>
            </h1>
            <p className="gl-hero-sub">
              Josiah and Desiree Cole have been building websites for Cape Cod businesses for over 20 years.
              No agency markup, no account managers, no templates — you work directly with the people doing the work.
            </p>
            <ul className="gl-trust-list" aria-label="Why choose COLEwebdev">
              <li><span className="gl-check" aria-hidden="true">✦</span> 20+ years of experience on Cape Cod</li>
              <li><span className="gl-check" aria-hidden="true">✦</span> 700+ websites built and launched</li>
              <li><span className="gl-check" aria-hidden="true">✦</span> 5★ Google rating with 70+ local reviews</li>
              <li><span className="gl-check" aria-hidden="true">✦</span> You talk directly with Josiah &amp; Desiree</li>
            </ul>
            <a href="tel:5084132043" className="gl-hero-callout">
              <span className="gl-callout-icon" aria-hidden="true">◎</span>
              <span>Prefer to call? <strong>508.413.2043</strong></span>
            </a>
          </div>

          <div className="gl-hero-form-col">
            <div className="gl-form-card">
              <div className="gl-form-card-hd">
                <h2 className="gl-form-hl">Get a free quote</h2>
                <p className="gl-form-sub">Tell us about your project — we respond within 1 business day.</p>
              </div>
              <GlForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="gl-stats" aria-label="COLEwebdev by the numbers">
        <div className="gl-stats-inner gl-shell">
          {GL_STATS.map(function(s) {
            return (
              <div key={s.label} className="gl-stat">
                <span className="gl-stat-num">{s.num}</span>
                <span className="gl-stat-label">{s.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Testimonials ── */}
      <section className="gl-social">
        <div className="gl-shell">
          <div className="gl-social-inner">
            <div className="gl-social-hd">
              <span className="gl-eyebrow">What clients say</span>
              <h2 className="gl-section-hl">Trusted by Cape Cod businesses <em>for two decades.</em></h2>
              <a
                href="https://www.google.com/maps/place/COLEwebdev"
                target="_blank"
                rel="noopener noreferrer"
                className="gl-google-badge"
              >
                <span className="gl-google-stars" aria-hidden="true">★★★★★</span>
                <span>4.8 on Google · 70+ reviews</span>
              </a>
            </div>
            <GlTestimonials />
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="gl-team">
        <div className="gl-shell">
          <div className="gl-team-hd">
            <span className="gl-eyebrow">The team</span>
            <h2 className="gl-section-hl">You'll work with us. <em>Directly.</em></h2>
            <p className="gl-team-sub">
              No account managers. No handoffs to offshore developers.
              Josiah and Desiree Cole are on every project — from first conversation to launch day and beyond.
            </p>
          </div>
          <div className="gl-team-grid">
            <div className="gl-person">
              <img
                className="gl-person-img"
                src="assets/josiah-cole-cape-cod-website-designer.jpg"
                alt="Josiah Cole, Co-Founder and CTO of COLEwebdev"
                loading="lazy"
              />
              <div className="gl-person-body">
                <h3 className="gl-person-name">Josiah Cole</h3>
                <span className="gl-person-role">Co-Founder · CTO · Webmaster</span>
                <p className="gl-person-bio">
                  20+ years building websites professionally — from the early days of the web through every platform shift since.
                  He handles design, development, hosting infrastructure, and anything that requires getting into the code.
                  An early adopter by nature, he continuously invests in new technology so clients don't have to figure it out themselves.
                </p>
                <div className="gl-person-tags">
                  <span className="gl-tag">Web Development</span>
                  <span className="gl-tag">AI &amp; Automation</span>
                  <span className="gl-tag">Hosting</span>
                </div>
              </div>
            </div>
            <div className="gl-person">
              <img
                className="gl-person-img"
                src="assets/desiree-cole-webdiva-cape-cod-website-designer.jpg"
                alt="Desiree Cole, Co-Founder and CEO of COLEwebdev"
                loading="lazy"
              />
              <div className="gl-person-body">
                <h3 className="gl-person-name">Desiree Cole</h3>
                <span className="gl-person-role">Co-Founder · CEO · Web Diva</span>
                <p className="gl-person-bio">
                  20+ years of web design, marketing, and business development.
                  She leads client relationships, drives the creative direction, and makes sure every site actually serves the business goals behind it.
                  Twice named 40 Under 40 by Cape &amp; Plymouth Business — she's the reason clients keep coming back, and keep referring their friends.
                </p>
                <div className="gl-person-tags">
                  <span className="gl-tag">Creative Direction</span>
                  <span className="gl-tag">Client Strategy</span>
                  <span className="gl-tag">Marketing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What we build ── */}
      <section className="gl-services">
        <div className="gl-shell">
          <div className="gl-svc-hd">
            <span className="gl-eyebrow">What we build</span>
            <h2 className="gl-section-hl">Cutting-edge solutions, <em>built for Cape Cod.</em></h2>
          </div>
          <div className="gl-svc-grid">
            {GL_SERVICES.map(function(s) {
              return (
                <div key={s.title} className="gl-svc-card">
                  <span className="gl-svc-icon" aria-hidden="true">{s.icon}</span>
                  <h3 className="gl-svc-title">{s.title}</h3>
                  <p className="gl-svc-body">{s.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Client roster ── */}
      <section className="gl-clients">
        <div className="gl-shell">
          <span className="gl-eyebrow gl-eyebrow--light">Client roster</span>
          <h2 className="gl-section-hl gl-section-hl--light">Businesses that trust us <em>to represent them online.</em></h2>
          <div className="gl-clients-grid">
            {GL_CLIENTS.map(function(name) {
              return (
                <div key={name} className="gl-client-pill">
                  <span className="gl-client-dot" aria-hidden="true" />
                  {name}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="gl-cta">
        <div className="gl-shell">
          <div className="gl-cta-inner">
            <span className="gl-eyebrow">Ready to get started?</span>
            <h2 className="gl-cta-hl">Let's build something great together.</h2>
            <p className="gl-cta-sub">Fill out the form above — or just give us a call. We're local, we're available, and we'd love to hear about your project.</p>
            <a href="tel:5084132043" className="gl-cta-btn">
              Call 508.413.2043 →
            </a>
          </div>
        </div>
      </section>

      {/* ── Minimal footer ── */}
      <footer className="gl-footer">
        <div className="gl-footer-inner gl-shell">
          <span className="gl-footer-copy">© 2006–2026 COLEwebdev · Eastham, MA</span>
          <div className="gl-footer-links">
            <a href="index.html" className="gl-footer-link">Full website</a>
            <a href="privacy.html" className="gl-footer-link">Privacy</a>
          </div>
        </div>
      </footer>

    </React.Fragment>
  );
}

const glRoot = ReactDOM.createRoot(document.getElementById('root'));
glRoot.render(<LandingPage />);
