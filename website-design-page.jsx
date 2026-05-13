/* global React, ReactDOM */

const WD_HERO_IMG = 'assets/website-design-wordpress-cape-cod-website-6.jpg';

const DEVELOPMENT_POINTS = [
  {
    label: 'Copy',
    body: 'Must be well written for both the actual human visitor and for the search bots from Google, Yahoo, and Microsoft. Having a well-formatted copy with a balance of keywords is essential for high search rank.',
  },
  {
    label: 'Photography',
    body: 'Imagery used must be as professional and high quality as possible. Photography is the most critical factor in good design, and the customer\'s perception of your business is greatly affected by this one element.',
  },
  {
    label: 'Audio & Video',
    body: 'Rich media are becoming standard practice for even small businesses. Featuring video or audio using progressive delivery systems adds a competitive edge to any website.',
  },
  {
    label: 'Custom Graphics',
    body: 'Should be an extension of the design and of your business branding. Graphics help the consumer navigate the site, and give a nice final touch to the design of a professional site.',
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
              100% custom design solutions — no templates, no shortcuts. Built to look great, navigate easily, and close the sale.
            </p>
          </div>
        </div>
      </div>

      {/* Website Design section */}
      <section className="wd-section">
        <div className="shell wd-split">
          <div className="wd-split-text">
            <span className="eyebrow">Website Design</span>
            <h2 className="wd-section-hl">
              Design that looks great and <em>works harder.</em>
            </h2>
            <p className="wd-body">
              The design of a website must achieve several things in order to accomplish the desired response from a customer. Most importantly it needs to <strong>look great</strong> — the design must reflect the nature of the company's image and relate to the desired customer.
            </p>
            <p className="wd-body">
              Second, the design must be well laid out, logical, and allow for easy navigation throughout the entire site. And lastly, the design must be effective at closing the sale — whether that's a sale of a product, a completed inquiry form, or a logged email address.
            </p>
            <p className="wd-body">
              COLEwebdev offers <strong>100% custom design solutions</strong>, with no templates or low-cost shortcuts that don't fit your business image and branding. We take great effort to create a unique design for your website that is beautiful and functional.
            </p>
            <p className="wd-body">
              Our <strong>experience</strong> in web design, user interfaces, and graphic design means we can assist you in coordinating your online and offline branding to ensure each element works in a cohesive manner. Logo design, banner ad creation, eNewsletter layout, and custom social media graphics are all available to COLEwebdev clients.
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

      {/* Website Development section */}
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
            <span className="eyebrow">Website Development</span>
            <h2 className="wd-section-hl">
              Production built on <em>content that converts.</em>
            </h2>
            <p className="wd-body">
              Website production includes all elements essential to building and updating a website and its features — the copy, images, video, audio, and custom graphics that support the design. The content that fills your site is an essential factor in how well it performs.
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
            <p className="wd-testi-note">
              Are you a happy client? Please write a{' '}
              <a href="https://tinyurl.com/ybhyf3jp" target="_blank" rel="noopener noreferrer">
                Google Review
              </a>{' '}
              to let others know how you feel.
            </p>
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
