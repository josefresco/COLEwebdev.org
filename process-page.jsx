/* global React, ReactDOM */

const STEPS = [
  {
    n: '01',
    name: 'Consultation',
    title: 'A real conversation. No confusing buzzwords.',
    img: 'assets/consultation-colewebdev.jpg',
    badge: '1 hour · free',
    body: [
      'It all begins with a real, down-to-earth conversation between you and the web experts at COLEwebdev. We offer every business 1 free hour of consultation time.',
      'We use this conversation to learn more about your business, your goals and your challenges — so we can figure out together what will actually move the needle.',
    ],
  },
  {
    n: '02',
    name: 'Proposal',
    title: 'A fixed price. In writing. No surprises.',
    img: 'assets/planning-colewebdev.jpg',
    badge: 'fixed price',
    body: [
      'Based on the information gathered from the initial consultation we create a written proposal — a concise, easy-to-understand breakdown of exactly what we\'ll build and what it costs.',
      'No scope creep. You know the number before we start.',
    ],
  },
  {
    n: '03',
    name: 'Planning',
    title: 'Every detail scheduled before a pixel moves.',
    img: 'assets/proposal-colewebdev.jpg',
    body: [
      'Once the proposal is agreed upon and a deposit made, we begin planning. Meetings, photoshoots, content creation tasks — everything gets a date on the calendar.',
      'We\'ve done this enough times to know that a well-planned project is a fast project.',
    ],
  },
  {
    n: '04',
    name: 'Design',
    title: '100% custom. Built around your brand.',
    img: 'assets/website-design-build-cape-cod-colewebdev.jpg',
    badge: '100% custom',
    body: [
      'The first and most important project element to begin is the design. Based on the current state of your logo and branding, COLEwebdev works with you to create something attractive and effective.',
      'Design proofs are supplied for feedback and approval — smartphone and tablet versions included — until a final cohesive look-and-feel is locked in. Our focus: visually striking, usable, and built to last.',
    ],
  },
  {
    n: '05',
    name: 'Content',
    title: 'Your voice. Our expertise. Great copy.',
    img: 'assets/content-website-build-cape-cod.jpg',
    body: [
      'You\'re the expert in your business — and your site needs to sound like it. While we\'re hard at work designing, we need you to gather and create content: copy, photography, and supporting media.',
      'Where you need help, we bring in our trusted network of photographers and copywriters to fill the gaps.',
    ],
  },
  {
    n: '06',
    name: 'Production',
    title: 'Built right the first time.',
    img: 'assets/colewebdev-production-website.jpg',
    body: [
      'With an approved design and content in hand, we move into the production phase. This is where the project gets detailed — and where COLEwebdev\'s two-plus decades of experience make the difference.',
      'Both the client and our team stay in close contact throughout. You see progress weekly, and nothing goes live without your sign-off.',
    ],
  },
];

const PHASES = [
  {
    title: 'Security',
    img: 'assets/security-website-cape-cod-1.png',
    body: 'SSL certificates, secure password practices, and software hardening. We\'ve defended against every type of web security issue — and we make sure you won\'t face them.',
  },
  {
    title: 'Pre-Launch',
    img: 'assets/website-pre-launch-cape-cod-circle.png',
    body: 'Email setup, visitor tracking, third-party integrations, and social media connections — all the details that make the actual launch day smooth.',
  },
  {
    title: 'Launch',
    img: 'assets/website-launch-cape-cod-circle.png',
    body: 'At an agreed-upon date the website goes live. Where it makes sense, we\'ll plan a soft launch first — giving us room for final tweaks before the public announcement.',
  },
  {
    title: 'Post-Launch',
    img: 'assets/website-post-launch-cape-cod-circle.png',
    body: 'Training, search engine registration, old-page redirects, and everything else that can only happen after the site is live. We don\'t disappear at the finish line.',
  },
];

function ProcessStep({ step, index }) {
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="proc-step"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      <span className="proc-watermark" aria-hidden="true">{step.n}</span>
      <div className="shell">
        <div className="proc-step-inner">
          <div className="proc-step-text">
            <div className="proc-step-num">Step {step.n} — {step.name}</div>
            <h2 className="proc-step-title">{step.title}</h2>
            {step.body.map((p, i) => (
              <p key={i} className="proc-step-body">{p}</p>
            ))}
            {step.badge && (
              <span className="proc-step-badge">✓ {step.badge}</span>
            )}
          </div>
          <div className="proc-step-media">
            <img
              className="proc-step-img"
              src={step.img}
              alt={step.name}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessPage() {
  const heroRef = React.useRef(null);

  React.useEffect(() => {
    const img = new Image();
    img.src = 'assets/colewebdev-website-design-build-cape-cod-sunrise-2020-2.jpg';
    img.onload = () => {
      if (heroRef.current) heroRef.current.classList.add('loaded');
    };
  }, []);

  return (
    <React.Fragment>
      <Header />

      {/* ── Hero ── */}
      <div className="proc-hero">
        <div ref={heroRef} className="proc-hero-img" />
        <div className="proc-hero-text">
          <div className="shell">
            <span className="eyebrow">How we work</span>
            <h1 className="proc-hero-hl">
              A process built on <em>honesty</em> and craft.
            </h1>
            <p className="proc-hero-sub">
              Each project is unique — many take varying paths to a successful launch. But this is the process we've refined over 20 years that works best for our clients: transparent, collaborative, and always moving forward.
            </p>
          </div>
        </div>
      </div>

      {/* ── Steps 1–6 ── */}
      {STEPS.map((step, i) => (
        <ProcessStep key={step.n} step={step} index={i} />
      ))}

      {/* ── Production phases ── */}
      <section className="proc-production">
        <div className="shell" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow">Inside production</span>
          <h2 className="proc-production-hl">
            Four things that happen before — and after — we hit publish.
          </h2>
          <p className="proc-production-sub">
            Production isn't just building pages. It's every detail that separates a site that works from one that doesn't.
          </p>
          <div className="proc-phases">
            {PHASES.map((ph, i) => (
              <div key={i} className="proc-phase">
                <img className="proc-phase-img" src={ph.img} alt={ph.title} loading="lazy" />
                <div className="proc-phase-title">{ph.title}</div>
                <p className="proc-phase-body">{ph.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="proc-testi">
        <div className="shell">
          <div className="proc-quote-wrap">
            <span className="proc-quote-mark" aria-hidden="true">"</span>
            <blockquote className="proc-quote">
              Desiree did a fantastic job developing the site for our home rental. Her designs and suggestions were exactly in line with what we wanted. The site came out beautifully and has continually generated business. We were quite pleased.
            </blockquote>
            <div className="proc-testi-meta">
              <img
                className="proc-testi-img"
                src="assets/disney-vacation-rental-website-design-build-cape-cod-xsmll.jpg"
                alt="SH Emerald Rental"
                loading="lazy"
              />
              <div>
                <div className="proc-testi-name">Shaun Harrington</div>
                <div className="proc-testi-role">SH Emerald Rental · shemeraldrental.com</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="proc-cta-section">
        <div className="shell">
          <div className="proc-cta">
            <div>
              <h2 className="proc-cta-hl">
                Ready to start step <em>one?</em>
              </h2>
              <p className="proc-cta-sub">
                The first hour is free. No commitment, no sales pitch — just a conversation about what you're trying to build, with someone who's been doing this since 2000.
              </p>
            </div>
            <div className="proc-cta-actions">
              <a className="btn btn--primary" href="index.html#cta">
                Schedule a call <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost" href="tel:5084132043" style={{ color: 'rgba(255,255,255,0.7)', borderColor: 'rgba(255,255,255,0.2)' }}>
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

const procRoot = ReactDOM.createRoot(document.getElementById('root'));
procRoot.render(<ProcessPage />);
