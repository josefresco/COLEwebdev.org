/* global React, ReactDOM */

const BR_WHAT = [
  { icon: '◇', bg: 'rgba(242,107,31,0.14)', color: '#F26B1F', title: 'Logo Design', body: 'A mark built for your business — wordmarks, icons, and combination logos designed to work everywhere from a business card to a billboard.' },
  { icon: '✦', bg: 'rgba(242,107,31,0.14)', color: '#F26B1F', title: 'Color System', body: 'A primary palette plus supporting tints and neutrals. Every color chosen for accessibility, emotion, and consistency across print and screen.' },
  { icon: '◐', bg: 'rgba(14,42,74,0.10)', color: '#0E2A4A', title: 'Typography', body: 'Font pairings selected to match your brand voice — and licensed for web, print, and digital use.' },
  { icon: '↗', bg: 'rgba(242,107,31,0.14)', color: '#F26B1F', title: 'Print Collateral', body: 'Business cards, letterhead, envelopes, flyers, and menus — designed to match your digital presence and ready to send to any printer.' },
  { icon: '⌘', bg: 'rgba(14,42,74,0.10)', color: '#0E2A4A', title: 'Brand Guidelines', body: 'A single document your whole team can reference — logo usage rules, color codes, type specs, and do/don\'t examples.' },
  { icon: '↻', bg: 'rgba(242,107,31,0.14)', color: '#F26B1F', title: 'Brand Refresh', body: 'Already have a logo but it feels dated? We modernize what you have — keeping the equity you\'ve built while bringing it up to current standards.' },
];

const BR_STEPS = [
  { n: '01', title: 'Discovery', body: 'We learn your business, your audience, your competitors, and what makes you different. A brand brief captures it all before design begins.' },
  { n: '02', title: 'Concepts', body: 'Two to three distinct directions — each with logo, color, and type applied to a real context. Not abstract mood boards.' },
  { n: '03', title: 'Refinement', body: 'You choose a direction and we sharpen it. Two rounds of revisions to get the details exactly right.' },
  { n: '04', title: 'Delivery', body: 'Final files in every format you\'ll ever need — SVG, PNG, PDF, and EPS.' },
];

const LOGO_PORTFOLIO = [
  { name: 'Pierce Plumbing', img: 'https://www.colewebdev.com/wp-content/uploads/2025/09/logo-branding-design-cape-cod-pierce-plumbing.jpg' },
  { name: 'In Nature Hair Studio', img: 'https://www.colewebdev.com/wp-content/uploads/2025/09/logo-branding-design-cape-cod-in-nature-hair-studio.jpg' },
  { name: 'The Center at Nauset', img: 'https://www.colewebdev.com/wp-content/uploads/2025/09/the-center-at-nauset-logo-design-cape-cod.jpg' },
  { name: 'Dream Chaser Mobile Bar', img: 'https://www.colewebdev.com/wp-content/uploads/2025/09/dream-chaser-mobile-bar-logo-design-cape-cod.jpg' },
  { name: 'BioActive Technology', img: 'https://www.colewebdev.com/wp-content/uploads/2025/11/bioactive-technology-logo-design-cape-cod-small.jpg' },
  { name: 'Inn Advisors', img: 'https://www.colewebdev.com/wp-content/uploads/2025/09/logo-branding-design-inn-advisors.jpg' },
  { name: 'Paws Dream Doggie Daycare', img: 'https://www.colewebdev.com/wp-content/uploads/2024/07/paws-dream-custom-logo-design-cape-cod-small.jpg' },
  { name: 'Behavioral Health Innovators', img: 'https://www.colewebdev.com/wp-content/uploads/2024/06/custom-logo-design-cape-cod-bhi.jpg' },
  { name: 'The Teacher Toolbox', img: 'https://www.colewebdev.com/wp-content/uploads/2023/09/the-teacher-toolbox-custom-logo-jpg.webp' },
  { name: 'Caribbean Millwork', img: 'https://www.colewebdev.com/wp-content/uploads/2022/12/caribbean-millwork-logo-design.png' },
  { name: 'GROW SMART Cape Cod', img: 'https://www.colewebdev.com/wp-content/uploads/2022/01/grow-smart-cape-cod-logo-design.jpg' },
  { name: 'Cape Cod Native Plants', img: 'https://www.colewebdev.com/wp-content/uploads/2021/03/cape-cod-logo-design-simple.jpg' },
  { name: 'Nauset Interfaith Association', img: 'https://www.colewebdev.com/wp-content/uploads/2021/09/nauset-interfaith-logo-simple.jpg' },
  { name: 'Dr. Mary Coakley-Welch', img: 'https://www.colewebdev.com/wp-content/uploads/2022/02/logo-design-cape-cod-202-1.jpg' },
  { name: 'Bayshore & Chandler House', img: 'https://www.colewebdev.com/wp-content/uploads/2022/02/logo-design-cape-cod-202-2.jpg' },
  { name: 'Cape Mediation', img: 'https://www.colewebdev.com/wp-content/uploads/2020/02/cape-mediation-logo-design.jpg' },
  { name: 'Berkshire Health Group', img: 'https://www.colewebdev.com/wp-content/uploads/2019/10/cape-cod-logo-design-bhg.jpg' },
  { name: 'M.T. Drywall & Plastering', img: 'https://www.colewebdev.com/wp-content/uploads/2019/10/cape-cod-logo-design-mtd.jpg' },
  { name: 'George J. MacKoul', img: 'https://www.colewebdev.com/wp-content/uploads/2019/10/cape-cod-logo-design-gm.jpg' },
  { name: 'Massachusetts Strategic Health Group', img: 'https://www.colewebdev.com/wp-content/uploads/2019/10/cape-cod-logo-design-mshg.jpg' },
  { name: 'SH Emerald Rental', img: 'https://www.colewebdev.com/wp-content/uploads/2024/06/disney-vacation-rental-kissimmee-florida.jpg' },
  { name: 'Cape Shores Vacation Rentals', img: 'https://www.colewebdev.com/wp-content/uploads/2019/11/cape-shores-website-logo-design.jpg' },
];

const SWATCHES = ['#F26B1F', '#FFC79A', '#0E2A4A', '#5DA02E', '#F5F1EB', '#1A1612'];

function BrandingPage() {
  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="br-hero">
        <div className="br-hero-bg" aria-hidden="true" />
        <div className="br-hero-content">
          <div className="shell">
            <span className="eyebrow br-eyebrow">Services · Branding</span>
            <h1 className="br-hero-hl">
              A brand <em>worth remembering.</em>
            </h1>
            <p className="br-hero-sub">
              Logos, color systems, typography, and print collateral — built to work together and built to last. We make sure your brand looks as good offline as it does online.
            </p>
            <div className="br-hero-actions">
              <a className="btn btn--accent" href="contact.html">
                Start a branding project <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost br-ghost" href="tel:5084132043">
                508.413.2043
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* What we do */}
      <section className="br-what">
        <div className="shell">
          <div className="br-what-hd">
            <span className="eyebrow">What we do</span>
            <h2 className="br-what-hl">Everything your brand needs in one place.</h2>
          </div>
          <div className="br-what-grid">
            {BR_WHAT.map(item => (
              <div key={item.title} className="br-what-card">
                <div className="br-what-icon" style={{ background: item.bg, color: item.color }}>{item.icon}</div>
                <div className="br-what-title">{item.title}</div>
                <div className="br-what-body">{item.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo portfolio */}
      <section className="br-port">
        <div className="shell">
          <div className="br-port-hd">
            <span className="eyebrow">Logo portfolio</span>
            <h2 className="br-port-hl">A few marks we're proud of.</h2>
          </div>
          <div className="br-port-grid">
            {LOGO_PORTFOLIO.map(item => (
              <div key={item.name} className="br-port-card">
                <div className="br-port-img-wrap">
                  <img src={item.img} alt={item.name} loading="lazy" className="br-port-img" />
                </div>
                <div className="br-port-name">{item.name}</div>
              </div>
            ))}
          </div>
          <div className="br-port-footer">
            <a className="btn btn--ghost" href="https://www.colewebdev.com/logo-design-portfolio/" target="_blank" rel="noopener noreferrer">
              View full logo portfolio <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Why branding */}
      <section className="br-why">
        <div className="shell br-why-grid">
          <div>
            <span className="eyebrow">Why it matters</span>
            <h2 className="br-why-hl">Your brand is the first thing customers judge you on.</h2>
            <p className="br-why-p">
              A logo slapped together in Canva, inconsistent colors across your truck, website, and business cards, and a font that came with Microsoft Word — customers notice, even if they can't name why.
            </p>
            <p className="br-why-p">
              A cohesive brand signals that you're established, professional, and worth trusting. It's not vanity — it's the difference between a referral recommending you and a prospect choosing a competitor instead.
            </p>
            <a className="btn btn--accent" href="contact.html">
              Let's talk branding <span className="arrow">→</span>
            </a>
          </div>
          <div>
            <div className="br-swatch-row">
              {SWATCHES.map(c => (
                <div key={c} className="br-swatch" style={{ background: c }} />
              ))}
            </div>
            <div style={{ background: 'white', border: '1px solid var(--line)', borderRadius: 'var(--r-xl)', padding: '32px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>Brand voice</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 32, lineHeight: 1.15, color: 'var(--ink)' }}>Local roots.<br /><em style={{ color: '#F26B1F' }}>Modern reach.</em></div>
              <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.6 }}>Approachable, confident, Cape Cod authentic — a voice that sounds like the people behind the business.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="br-process">
        <div className="shell">
          <div className="br-process-hd">
            <span className="eyebrow">Our process</span>
            <h2 className="br-process-hl">Four steps from brief to final files.</h2>
          </div>
          <div className="br-process-grid">
            {BR_STEPS.map(s => (
              <div key={s.n} className="br-step">
                <span className="br-step-n">{s.n}</span>
                <div className="br-step-title">{s.title}</div>
                <div className="br-step-body">{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="br-cta">
        <div className="shell">
          <div className="br-cta-card">
            <div>
              <h2 className="br-cta-hl">Ready to look the part?</h2>
              <p className="br-cta-sub">Tell us about your business and we'll scope a branding project that fits your goals and your budget.</p>
            </div>
            <div className="br-cta-actions">
              <a className="btn btn--accent" href="contact.html">
                Start a project <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost br-ghost" href="tel:5084132043">
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

const brRoot = ReactDOM.createRoot(document.getElementById('root'));
brRoot.render(<BrandingPage />);
