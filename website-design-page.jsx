/* global React, ReactDOM */

const WD_HERO_IMG = 'assets/website-design-wordpress-cape-cod-website-6.jpg';

const DEVELOPMENT_POINTS = [
  {
    label: 'Copy',
    body: 'Written for real people and search engines alike. Strong copy is the foundation of organic rankings — and the reason visitors stay.',
  },
  {
    label: 'Photography',
    body: 'The single biggest influence on perceived quality. Professional images raise the bar instantly — there\'s no shortcut around it.',
  },
  {
    label: 'Audio & Video',
    body: 'Table stakes for competitive businesses. We embed media cleanly without adding load time.',
  },
  {
    label: 'Custom Graphics',
    body: 'An extension of your brand, not decoration. The right graphics guide visitors and tie the whole site together.',
  },
];

const PROCESS_STEPS = [
  {
    num: '01',
    label: 'Free Consultation',
    body: 'We start with a no-cost conversation to understand your goals, audience, and timeline. No pitch — just a real look at what you need.',
  },
  {
    num: '02',
    label: 'Design & Build',
    body: 'We design from scratch, present mockups, refine with your feedback, then build to production. One fixed price, no surprise invoices.',
  },
  {
    num: '03',
    label: 'Launch & Support',
    body: 'We handle the launch and stay available for questions, updates, and ongoing care after the site goes live.',
  },
];

const RECENT_POSTS = [
  {
    type: 'Recent Website Launch',
    title: 'A Fresh Look for the Truro Historical Society Website',
    date: 'Apr 30, 2026',
    category: 'New Website Launch',
    img: 'assets/truro-historical-society-custom-website-launch-cape-cod-small.jpg',
    excerpt: 'The Truro Historical Society recently received a much-needed website redesign that brings new life to its online presence while honoring the town\'s rich history.',
    href: 'https://www.colewebdev.com/a-fresh-look-for-the-truro-historical-society-website/',
    cta: 'View our portfolio',
  },
  {
    type: 'News + Resources',
    title: 'Do People Still Hire Web Designers?',
    date: 'Apr 15, 2026',
    category: 'News',
    img: 'assets/colewebdev-photo-shoot-2021-4.jpg',
    excerpt: 'Short answer: yes — more than ever. But why people hire them, and what they expect, has evolved.',
    href: 'https://www.colewebdev.com/do-people-still-hire-web-designers/',
    cta: 'Read more',
  },
];

function WebDesignPage() {
  const heroRef = React.useRef(null);

  React.useEffect(() => {
    const img = new Image();
    img.src = WD_HERO_IMG;
    img.onload = () => {
      if (heroRef.current) heroRef.current.classList.add('loaded');
    };
  }, []);

  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="wd-hero">
        <div ref={heroRef} className="wd-hero-img" />
        <div className="wd-hero-text">
          <div className="shell">
            <span className="eyebrow">Services</span>
            <h1 className="wd-hero-hl">Website Design <em>+ Build.</em></h1>
            <p className="wd-hero-sub">
              100% custom design solutions — no templates, no shortcuts. Built to look great, navigate easily, and get visitors to take action.
            </p>
          </div>
        </div>
      </div>

      <SummaryStrip
        summary="100% custom websites for Cape Cod businesses — no templates, no shortcuts. Design, development, mobile optimization, and launch support all included."
        points={['100% Custom Design', 'SEO-Ready', 'Fixed Price', 'Mobile-First']}
      />

      {/* Website Design section */}
      <section className="wd-section">
        <div className="shell wd-split">
          <div className="wd-split-text">
            <span className="eyebrow">Website Design</span>
            <h2 className="wd-section-hl">
              Design that looks great and <em>works harder.</em>
            </h2>
            <p className="wd-body">
              Every design reflects your business's identity and speaks directly to the customers you want to reach. Good-looking isn't enough — the layout has to be logical, easy to navigate, and built to convert.
            </p>
            <p className="wd-body">
              We build <strong>100% custom</strong> — no templates, no off-the-shelf shortcuts. Whether you're starting from scratch or coordinating a site with existing print and brand work, we take the time to make it right.
            </p>
          </div>
          <div className="wd-split-media">
            <img
              className="wd-split-img"
              src="assets/cape-cod-aquatics-website-small.jpg"
              alt="Cape Cod Website Design"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* What's Included section */}
      <section className="wd-section wd-section--alt">
        <div className="shell wd-split wd-split--rev">
          <div className="wd-split-media">
            <img
              className="wd-split-img"
              src="assets/colewebdev-team-2021.jpg"
              alt="Cape Cod Website Development"
              loading="lazy"
            />
          </div>
          <div className="wd-split-text">
            <span className="eyebrow">What's Included</span>
            <h2 className="wd-section-hl">
              Every build comes with <em>content that converts.</em>
            </h2>
            <p className="wd-body">
              Content is what makes a site work — the copy, photography, video, and graphics that fill every page. Get these right and everything else performs better.
            </p>
            <ul className="wd-points">
              {DEVELOPMENT_POINTS.map(pt => (
                <li key={pt.label} className="wd-point">
                  <span className="wd-point-label">{pt.label}</span>
                  <span className="wd-point-body">{pt.body}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process snapshot */}
      <section className="wd-process">
        <div className="shell">
          <div className="wd-process-hd">
            <span className="eyebrow">How it works</span>
            <h2 className="wd-process-hl">From first call to launch day.</h2>
          </div>
          <div className="wd-process-steps">
            {PROCESS_STEPS.map(step => (
              <div key={step.num} className="wd-process-step">
                <div className="wd-process-num">{step.num}</div>
                <div className="wd-process-info">
                  <div className="wd-process-label">{step.label}</div>
                  <p className="wd-process-body">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="wd-process-more">
            <a href="process.html" className="wd-process-link">See the full process <span className="arrow">→</span></a>
          </div>
        </div>
      </section>

      {/* Approach cards */}
      <section className="wd-approaches">
        <div className="shell">
          <div className="wd-approaches-hd">
            <span className="eyebrow">Pick your approach</span>
            <h2 className="wd-approaches-hl">Two ways to build. One standard of quality.</h2>
          </div>
          <div className="wd-approaches-grid">
            <div className="wd-approach-card wd-approach-card--wp">
              <div className="wd-approach-top">
                <span className="wd-approach-icon">◐</span>
                <span className="wd-approach-label">WordPress</span>
              </div>
              <h3 className="wd-approach-hl">Built to be <em>managed by you.</em></h3>
              <p className="wd-approach-body">
                The right choice when your team needs to update content, run an online store, or grow the site over time. Custom theme, lean plugin stack, and an editor experience built for real people.
              </p>
              <ul className="wd-approach-list">
                <li>Client-managed content</li>
                <li>WooCommerce e-commerce</li>
                <li>Scales as your business grows</li>
                <li>40% of the web — for good reason</li>
              </ul>
              <a className="btn btn--primary wd-approach-btn" href="wordpress.html">
                WordPress Design <span className="arrow">→</span>
              </a>
            </div>
            <div className="wd-approach-card wd-approach-card--tr">
              <div className="wd-approach-top">
                <span className="wd-approach-icon">◇</span>
                <span className="wd-approach-label">Traditional</span>
              </div>
              <h3 className="wd-approach-hl">Built for <em>speed and simplicity.</em></h3>
              <p className="wd-approach-body">
                Pure HTML, CSS, and JavaScript — hand-coded for businesses that want maximum performance and zero overhead. Nothing to update, nothing to patch, nothing to break.
              </p>
              <ul className="wd-approach-list">
                <li>Loads in under a second</li>
                <li>Zero attack surface</li>
                <li>Own it forever — no platform lock-in</li>
                <li>Precise design control</li>
              </ul>
              <a className="btn btn--ghost wd-approach-btn wd-approach-btn--tr" href="traditional.html">
                Traditional Design <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="wd-testi">
        <div className="shell">
          <div className="wd-testi-inner">
            <div className="wd-testi-eyebrow">What people are saying</div>
            <blockquote className="wd-quote">
              "Josiah and Desiree do great work with a personal touch. From the initial proposal, through the design process, to maintenance and service once the site was up and running, the folks at COLEwebdev have always been there to answer all our questions and solve any problems. Highly recommended for any small to medium-sized business that needs their web presence improved."
            </blockquote>
            <div className="wd-testi-meta">
              <a href="https://womr.org/" target="_blank" rel="noopener noreferrer">
                <img
                  className="wd-testi-img"
                  src="assets/womr-website-design-build-wordpress-ecommerce-cape-cod-xsmall.jpg"
                  alt="WOMR"
                  loading="lazy"
                />
              </a>
              <div>
                <div className="wd-testi-name">Matty Dread</div>
                <div className="wd-testi-role">WOMR · womr.org</div>
              </div>
            </div>
            <div className="wd-testi-stars">
              <span className="wd-stars">★★★★★</span>
              <span className="wd-stars-label">4.8 · 72 Google reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Recent launch + news */}
      <section className="wd-posts">
        <div className="shell">
          <div className="wd-posts-grid">
            {RECENT_POSTS.map(post => (
              <div key={post.title} className="wd-post-card">
                <div className="wd-post-type">{post.type}</div>
                <a href={post.href} target="_blank" rel="noopener noreferrer">
                  <img
                    className="wd-post-img"
                    src={post.img}
                    alt={post.title}
                    loading="lazy"
                  />
                </a>
                <div className="wd-post-body">
                  <div className="wd-post-meta">
                    <span className="wd-post-date">{post.date}</span>
                    <span className="wd-post-cat">{post.category}</span>
                  </div>
                  <h3 className="wd-post-title">
                    <a href={post.href} target="_blank" rel="noopener noreferrer">
                      {post.title}
                    </a>
                  </h3>
                  <p className="wd-post-excerpt">{post.excerpt}</p>
                  <a
                    className="btn btn--ghost btn--sm wd-post-link"
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {post.cta} <span className="arrow">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility callout */}
      <section className="wd-a11y">
        <div className="shell">
          <div className="wd-a11y-inner">
            <div className="wd-a11y-icon">◑</div>
            <div>
              <span className="eyebrow wd-a11y-eyebrow">Built to WCAG 2.1 AA</span>
              <h3 className="wd-a11y-hl">Every site we build is accessible from day one.</h3>
              <p className="wd-a11y-body">
                Keyboard navigation, screen reader compatibility, color contrast, and semantic HTML are part of our standard build — not an afterthought. We also offer standalone WCAG audits and remediation for existing sites built by others.
              </p>
              <a href="web-accessibility.html" className="wd-a11y-link">
                Web Accessibility Services <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="wd-industries">
        <div className="shell">
          <div className="wd-industries-hd">
            <span className="eyebrow">By industry</span>
            <h2 className="wd-industries-hl">We know your industry, not just web design.</h2>
            <p className="wd-industries-sub">Different businesses need different websites. We've built for Cape Cod's most active sectors and we understand what works in each one.</p>
          </div>
          <div className="wd-industries-grid">
            {[
              { icon: '◇', name: 'Nonprofits', href: 'cape-cod-nonprofit-web-design.html' },
              { icon: '◷', name: 'Churches', href: 'cape-cod-church-web-design.html' },
              { icon: '◎', name: 'Hospitality', href: 'cape-cod-hospitality-web-design.html' },
              { icon: '≡', name: 'Restaurants', href: 'cape-cod-restaurant-web-design.html' },
              { icon: '▣', name: 'Real Estate', href: 'cape-cod-real-estate-web-design.html' },
              { icon: '◈', name: 'Chambers of Commerce', href: 'cape-cod-chamber-web-design.html' },
              { icon: '▲', name: 'Contractors', href: 'cape-cod-contractor-web-design.html' },
            ].map(function(ind) {
              return (
                <a key={ind.name} href={ind.href} className="wd-industry-chip">
                  <span className="wd-industry-chip-icon">{ind.icon}</span>
                  <span className="wd-industry-chip-name">{ind.name}</span>
                  <span className="wd-industry-chip-arrow">→</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="wd-cta-section">
        <div className="shell">
          <div className="wd-cta">
            <div>
              <h2 className="wd-cta-hl">
                Ready to start your <em>custom build?</em>
              </h2>
              <p className="wd-cta-sub">
                The first hour is free. No commitment, no sales pitch — just a real conversation about what you need, with people who've been doing this since 2000.
              </p>
              <p className="wd-area-note">
                Serving businesses across all 15 Cape Cod towns.{' '}
                <a href="service-area.html">See our full service area →</a>
              </p>
              <div className="wd-cta-guides">
                <span className="wd-cta-guides-label">Further reading:</span>
                <a href="wp-website-cost.html" className="wd-cta-guide-link">How much does a website cost? →</a>
                <a href="wp-how-long-website.html" className="wd-cta-guide-link">How long does a website take to build? →</a>
                <a href="wp-what-web-design-does.html" className="wd-cta-guide-link">What does web design actually do? →</a>
              </div>
            </div>
            <div className="wd-cta-actions">
              <a className="btn btn--primary" href="index.html#cta">
                Request a quote <span className="arrow">→</span>
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

const wdRoot = ReactDOM.createRoot(document.getElementById('root'));
wdRoot.render(<WebDesignPage />);
