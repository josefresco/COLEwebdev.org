/* global React, ReactDOM */

const SM_SERVICES = [
  {
    icon: '✎',
    name: 'Content Strategy',
    body: 'We build a content calendar tailored to your business, your audience, and the Cape Cod calendar — leaning into seasonal peaks, local events, and the stories that resonate with your community.',
  },
  {
    icon: '◇',
    name: 'Post Creation',
    body: 'Captions, graphics concepts, and copy written in your brand voice — consistent, professional posts that reflect who you are rather than looking like a template run through a generator.',
  },
  {
    icon: '↻',
    name: 'Scheduling & Publishing',
    body: 'We handle the logistics of publishing at the right times for your audience across each platform, so your feed stays active without you lifting a finger.',
  },
  {
    icon: '◍',
    name: 'Community Management',
    body: 'Comments, DMs, and reviews responded to promptly and in your voice. We keep your pages feeling human and approachable — because social media that goes silent loses trust fast.',
  },
  {
    icon: '◎',
    name: 'Hashtag & Keyword Research',
    body: "We identify the tags and terms your target customers — both locals and visitors — actually use to find Cape Cod businesses like yours. Not guesses, research.",
  },
  {
    icon: '↗',
    name: 'Monthly Reporting',
    body: 'Plain-English reports covering follower growth, reach, engagement, and top-performing content. You see what worked, what to do more of, and where the audience is coming from.',
  },
];

const SM_PLATFORMS = [
  {
    icon: '◍',
    name: 'Facebook',
    body: 'Still the dominant platform for Cape Cod locals. Events, community groups, and local recommendations all happen here. Essential for businesses serving year-round residents and the seasonal summer crowd.',
  },
  {
    icon: '◇',
    name: 'Instagram',
    body: "The visual showcase for Cape Cod's natural beauty, food, and lifestyle. Ideal for restaurants, shops, lodging, and any business whose work looks good — which on the Cape, is most of them.",
  },
  {
    icon: '✦',
    name: 'LinkedIn',
    body: 'The right channel for B2B services, contractors, professionals, and nonprofits looking to build credibility and reach decision-makers rather than the general public.',
  },
  {
    icon: '◎',
    name: 'Google Business',
    body: 'Not a social network, but your Google Business Profile posts and Q&A appear in search and Maps results. Keeping it active signals to Google — and customers — that your business is current and responsive.',
  },
];

const SM_REASONS = [
  {
    icon: '↗',
    label: 'Seasonal reach',
    desc: "Cape Cod's summer population swells to over 500,000. Tourists plan trips months in advance and follow local businesses on social to decide where to eat, shop, and stay.",
  },
  {
    icon: '◍',
    label: 'Local community trust',
    desc: 'Year-round residents choose businesses they see showing up consistently in the community. An active, authentic social presence signals you are here to stay — not just here for the season.',
  },
  {
    icon: '◇',
    label: 'Visual storytelling',
    desc: "The Cape's landscape, food, and lifestyle are inherently photogenic. Social media is the natural medium for the kind of place-based storytelling that builds loyalty and word-of-mouth.",
  },
  {
    icon: '◎',
    label: 'Paid precision',
    desc: 'Facebook and Instagram ads let you target by ZIP code, interest, and even visitor behavior — reaching exactly the right people at the right moment in the Cape Cod travel cycle.',
  },
];

const SM_PAID_STEPS = [
  {
    n: '01',
    label: 'Audience',
    body: 'We define who to reach — local residents, seasonal visitors, specific interests — and build targeting that puts your ads in front of the right people.',
  },
  {
    n: '02',
    label: 'Creative',
    body: 'Ad copy and creative direction that fits the platform and moves the needle — not recycled organic posts with a budget attached.',
  },
  {
    n: '03',
    label: 'Launch',
    body: 'Campaigns set up correctly from the start: pixel tracking, conversion goals, budget pacing, and proper account structure.',
  },
  {
    n: '04',
    label: 'Optimize',
    body: 'Weekly review of what the data says — pausing underperformers, scaling winners, and a monthly plain-English report on what your spend delivered.',
  },
];

function SocialMediaPage() {
  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="sm-hero">
        <div className="sm-hero-bg" aria-hidden="true" />
        <div className="sm-hero-content">
          <div className="shell">
            <span className="eyebrow sm-eyebrow">Services · Grow &amp; Market</span>
            <h1 className="sm-hero-hl">
              Cape Cod Social Media <em>Marketing.</em>
            </h1>
            <p className="sm-hero-sub">
              Facebook, Instagram, and LinkedIn management for Cape Cod small businesses — content that builds your audience and drives real results.
            </p>
            <div className="sm-hero-actions">
              <a className="btn btn--accent" href="index.html#cta">
                Start the conversation <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost sm-ghost" href="tel:5084132043">
                508.413.2043
              </a>
            </div>
          </div>
        </div>
      </div>

      <SummaryStrip
        summary="Social media management for Cape Cod businesses — strategy, content, community, and paid ads handled by a local team that knows the Cape's rhythms."
        points={['Content Creation', 'Community Management', 'Paid Social Ads', 'Monthly Reporting']}
      />

      {/* What's included */}
      <section className="sm-services">
        <div className="shell">
          <div className="sm-services-hd">
            <span className="eyebrow">What's included</span>
            <h2 className="sm-services-hl">Everything your social presence needs.</h2>
            <p className="sm-services-sub">
              From strategy to scheduling to community — we handle the full social media workflow so you can focus on running your business.
            </p>
          </div>
          <div className="sm-services-grid">
            {SM_SERVICES.map(svc => (
              <div key={svc.name} className="sm-svc-card">
                <div className="sm-svc-icon">{svc.icon}</div>
                <h3 className="sm-svc-name">{svc.name}</h3>
                <p className="sm-svc-body">{svc.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="sm-platforms">
        <div className="shell">
          <div className="sm-platforms-hd">
            <span className="eyebrow">Platforms</span>
            <h2 className="sm-platforms-hl">
              The right channels for <em>your audience.</em>
            </h2>
            <p className="sm-platforms-sub">
              We don't push you onto every platform — we focus on the ones where your customers actually spend time.
            </p>
          </div>
          <div className="sm-platforms-grid">
            {SM_PLATFORMS.map(p => (
              <div key={p.name} className="sm-platform-card">
                <div className="sm-platform-icon">{p.icon}</div>
                <h3 className="sm-platform-name">{p.name}</h3>
                <p className="sm-platform-body">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why social matters for Cape Cod */}
      <section className="sm-why">
        <div className="shell sm-why-grid">
          <div className="sm-why-body">
            <span className="eyebrow">Why it matters</span>
            <h2 className="sm-why-hl">
              Social media and Cape Cod are a <em>natural fit.</em>
            </h2>
            <p className="sm-body">
              Cape Cod businesses operate in one of the most visually compelling, community-driven markets in New England. The combination of seasonal tourism, tight-knit year-round communities, and a landscape people love to photograph makes social media uniquely effective here.
            </p>
            <p className="sm-body">
              The challenge is consistency. Most small business owners know they should be posting — and start strong in May — but by July the feed goes quiet because running the actual business takes over. That's where a managed service pays for itself.
            </p>
            <p className="sm-body">
              COLEwebdev has built websites and run marketing for Cape Cod businesses since 2000. We know the seasonal calendar, the local audiences, and what kinds of content perform here — because we live and work in this market too.
            </p>
          </div>
          <div className="sm-why-reasons">
            {SM_REASONS.map(r => (
              <div key={r.label} className="sm-reason">
                <div className="sm-reason-icon">{r.icon}</div>
                <div>
                  <div className="sm-reason-label">{r.label}</div>
                  <p className="sm-reason-desc">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paid Social */}
      <section className="sm-paid">
        <div className="shell">
          <div className="sm-paid-hd">
            <span className="eyebrow">Paid social ads</span>
            <h2 className="sm-paid-hl">Reach further with a budget that works harder.</h2>
            <p className="sm-paid-sub">
              Organic content builds your community over time. Paid ads accelerate it — targeting the exact people most likely to become customers.
            </p>
          </div>
          <div className="sm-paid-steps">
            {SM_PAID_STEPS.map(step => (
              <div key={step.n} className="sm-paid-step">
                <div className="sm-paid-num">{step.n}</div>
                <div className="sm-paid-label">{step.label}</div>
                <p className="sm-paid-body">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="sm-testi">
        <div className="shell">
          <div className="sm-testi-inner">
            <span className="sm-quote-mark" aria-hidden="true">"</span>
            <blockquote className="sm-quote">
              Josiah and Desiree do great work with a personal touch. From the initial proposal through the design process, to maintenance and service once the site was up and running — the folks at COLEwebdev have always been there to answer all our questions and solve any problems.
            </blockquote>
            <div className="sm-testi-meta">
              <img
                className="sm-testi-img"
                src="assets/womr-website-design-build-wordpress-ecommerce-cape-cod-xsmall.jpg"
                alt="WOMR"
                loading="lazy"
              />
              <div>
                <div className="sm-testi-name">Matty Dread</div>
                <div className="sm-testi-role">WOMR · womr.org</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sm-cta-section">
        <div className="shell">
          <div className="sm-cta">
            <div>
              <h2 className="sm-cta-hl">
                Ready to grow your <em>Cape Cod audience?</em>
              </h2>
              <p className="sm-cta-sub">
                Tell us about your business and where you want to grow. We'll put together a social media plan built around your goals, your market, and the Cape Cod calendar.
              </p>
              <p className="sm-area-note">
                Serving businesses across all 15 Cape Cod towns.{' '}
                <a href="service-area.html">See our full service area →</a>
              </p>
              <div className="sm-related">
                <span className="sm-related-label">Related:</span>
                <a href="marketing.html" className="sm-related-link">Full digital marketing services</a>
                <a href="seo.html" className="sm-related-link">SEO & local search</a>
                <a href="ppc.html" className="sm-related-link">Google Ads / PPC</a>
                <a href="website-design.html" className="sm-related-link">Web design that converts</a>
              </div>
            </div>
            <div className="sm-cta-actions">
              <a className="btn btn--primary" href="index.html#cta">
                Let's talk social <span className="arrow">→</span>
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

ReactDOM.createRoot(document.getElementById('root')).render(<SocialMediaPage />);
