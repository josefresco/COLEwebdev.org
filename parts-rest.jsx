/* global React */

/* ============================================================
   Process
   ============================================================ */
function Process() {
  const steps = [
  { n: '01', title: 'Conversation', body: 'A free 20-min call. We learn your business; you learn how we work. No pitch deck.', tags: ['DISCOVERY'] },
  { n: '02', title: 'Plan & Price', body: 'A simple, written scope and a fixed price. We start when you say go.', tags: ['SCOPE', 'FIXED'] },
  { n: '03', title: 'Design & Build', body: 'You see progress every Friday. We use real content, not Lorem Ipsum.', tags: ['WEEKLY DEMO'] },
  { n: '04', title: 'Launch & Care', body: 'Go-live, training, and a Care Plan that keeps things working — not a hand-off and ghost.', tags: ['ONGOING'] }];

  return (
    <section className="section bg-shapes" id="process">
      <span className="shape s1"></span>
      <span className="shape s2"></span>
      <div className="shell">
        <div className="s-head">
          <div className="left">
            <span className="eyebrow">How we work</span>
            <h2>A four-step <span className="italic">no-surprises</span> process.</h2>
          </div>
          <p className="lede" style={{ alignSelf: 'end', maxWidth: 380 }}>Twenty years of doing this has taught us one thing: small businesses need affordable, & modern web solutions. We deliver.

          </p>
        </div>

        <div className="process">
          {steps.map((s, i) =>
          <div className="card proc-card" key={i}>
              <div className="num">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <div className="stack">
                {s.tags.map((t, j) => <span className="tag" key={j}>{t}</span>)}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ============================================================
   Portfolio teaser — real COLEwebdev clients
   ============================================================ */
function Portfolio() {
  const items = [
  {
    span: 'span-7', t: 't-tide',
    img: 'https://www.colewebdev.com/wp-content/uploads/2025/10/cape-cod-aquatics-website-design-build-small.jpg',
    tags: [{ label: 'NEW LAUNCH', cls: 'tag--navy' }, { label: 'WELLNESS' }, { label: 'WORDPRESS' }],
    title: 'Cape Cod Aquatics — a wellness-focused redesign.',
    meta: 'Cape Cod, MA · 2026',
    href: 'https://capecodaquatics.com/',
    cta: 'Read case study →',
    ctaHref: 'https://www.colewebdev.com/a-wellness-focused-website-redesign-for-cape-cod-aquatics/'
  },
  {
    span: 'span-5', t: 't-pine',
    img: 'https://www.colewebdev.com/wp-content/uploads/2025/04/svdp-cape-cod-website-design-build-500.jpg',
    tags: [{ label: 'NONPROFIT', cls: 'tag--green' }, { label: 'WORDPRESS' }],
    title: 'SVdP Cape Cod',
    meta: 'Hyannis, MA',
    href: 'https://www.svdpcapecod.com/',
    cta: 'View site →'
  },
  {
    span: 'span-4', t: 't-sun',
    img: 'https://www.colewebdev.com/wp-content/uploads/2024/07/cape-cod-towel-company-website-design-xsmll.jpg',
    tags: [{ label: 'E-COMMERCE', cls: 'tag--orange' }, { label: 'RETAIL' }],
    title: 'The Cape Cod Towel Company',
    meta: 'Cape Cod, MA',
    href: 'https://capecodtowelco.com/',
    cta: 'View site →'
  },
  {
    span: 'span-4', t: 't-coast',
    img: 'https://www.colewebdev.com/wp-content/uploads/2025/04/sylvestre-fly-fishing-website-design-build-cape-cod-500.jpg',
    tags: [{ label: 'OUTDOORS', cls: 'tag--navy' }, { label: 'WORDPRESS' }],
    title: 'Sylvestre Outdoors',
    meta: 'Cape Cod, MA',
    href: 'https://www.sylvestreoutdoors.com/',
    cta: 'View site →'
  },
  {
    span: 'span-4', t: 't-dune',
    img: 'https://www.colewebdev.com/wp-content/uploads/2025/09/dyers-beach-house-website-design-build-wordpress-cape-cod-500.jpg',
    tags: [{ label: 'HOSPITALITY' }, { label: 'RENTALS' }],
    title: "Dyer's Beach House",
    meta: 'Cape Cod, MA',
    href: 'https://www.colewebdev.com/dyers-beach-house-website-redesign-a-coastal-refresh/',
    cta: 'Read case study →'
  },
  {
    span: 'span-4', t: 't-paper',
    img: 'https://www.colewebdev.com/wp-content/uploads/2025/05/truro-historical-society-custom-website-launch-cape-cod-small.jpg',
    tags: [{ label: 'NONPROFIT', cls: 'tag--green' }, { label: 'WORDPRESS' }],
    title: 'Truro Historical Society',
    meta: 'Truro, MA',
    href: 'https://trurohistoricalsociety.org/',
    cta: 'View site →'
  },
  {
    span: 'span-4', t: 't-tide',
    img: 'https://www.colewebdev.com/wp-content/uploads/2024/01/hog-island-beer-website-launch-cape-cod-smll-jpg.webp',
    tags: [{ label: 'HOSPITALITY' }, { label: 'BREWERY' }],
    title: 'Hog Island Beer Co.',
    meta: 'Orleans, MA',
    href: 'https://hogislandbeerco.com/',
    cta: 'View site →'
  },
  {
    span: 'span-4', t: 't-pine',
    img: 'https://www.colewebdev.com/wp-content/uploads/2024/11/idle-times-bike-shop-website-revamp-cape-cod-2024-smll.jpg',
    tags: [{ label: 'E-COMMERCE', cls: 'tag--orange' }, { label: 'RETAIL' }],
    title: 'Idle Times Bike Shop',
    meta: 'Outer Cape, MA',
    href: 'https://www.idletimesbikes.com/',
    cta: 'View site →'
  }];


  return (
    <section className="section bg-topo" id="work">
      <div className="shell">
        <div className="s-head">
          <div className="left">
            <span className="eyebrow">Recent work</span>
            <h2>700 sites later, <span className="italic">still picky.</span></h2>
            <p className="lede" style={{ marginTop: 16 }}>
              A small slice of what we've shipped — for restaurants, contractors, nonprofits, retailers, and outfitters across the Cape and Islands.
            </p>
          </div>
          <a className="btn btn--ghost" href="https://www.colewebdev.com/portfolio/">View full portfolio <span className="arrow">→</span></a>
        </div>

        <div className="portfolio">
          {items.map((it, i) =>
          <div className={`pf-card ${it.span}`} key={i}>
              <div className={`thumb ${it.t}`}>
                <img className="thumb-img" src={it.img} alt={it.title} loading="lazy" />
                <span className="ph-label">[ {it.title.toUpperCase()} ]</span>
              </div>
              <div className="body">
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {it.tags.map((tg, j) =>
                <span className={`tag ${tg.cls || ''}`} key={j}>{tg.label}</span>
                )}
                </div>
                <h4>{it.title}</h4>
                <div className="row">
                  <span>{it.meta}</span>
                  <a href={it.ctaHref || it.href} target="_blank" rel="noopener" style={{ color: 'var(--orange)', textDecoration: 'none' }}>{it.cta}</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ============================================================
   Testimonial — rotating carousel
   ============================================================ */
const TESTIMONIALS = [
  {
    quote: "I've worked with COLEwebdev for years. They are incredibly responsive and professional and do top quality work. They are friendly, reasonably priced, and don't mind taking the time to explain complicated issues. Can't recommend highly enough.",
    initials: 'JM',
    name: 'Joseph Moldover',
    role: 'Dr. Moldover · drmoldover.com',
  },
  {
    quote: "Cole built our site, hosts it, updates it, and answers the phone when something breaks. After twenty years of dealing with web people, I finally found one who actually cares.",
    initials: 'KC',
    name: 'Kathy C.',
    role: 'Cape Cod Aquatics',
  },
  {
    quote: "Friendly, fast, and fair. They redesigned our site, set up SEO, and walked us through everything in plain English. We get more calls now than we ever did from the old site.",
    initials: 'TS',
    name: 'Tom S.',
    role: 'Sylvestre Outdoors',
  },
  {
    quote: "We're a small nonprofit, so every dollar matters. The team was patient, generous with their time, and built us a site that finally feels like us. Five stars and then some.",
    initials: 'AR',
    name: 'Anne R.',
    role: 'Truro Historical Society',
  },
  {
    quote: "Reliable, creative, local. Cole has been our go-to for years for everything web — design, hosting, the occasional emergency. We trust them completely.",
    initials: 'MD',
    name: 'Mike D.',
    role: "Dyer's Beach House",
  },
];

function Testimonial() {
  const [i, setI] = React.useState(0);
  const len = TESTIMONIALS.length;
  const next = React.useCallback(() => setI(p => (p + 1) % len), [len]);
  const prev = () => setI(p => (p - 1 + len) % len);

  React.useEffect(() => {
    const id = setInterval(next, 6500);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="section section--tight bg-orbs">
      <div className="shell">
        <div style={{ marginBottom: 22, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <span className="eyebrow">What clients say</span>
            <h2 style={{ marginTop: 14, fontSize: 'clamp(28px, 3vw, 42px)' }}>Twenty years of <span className="italic">happy neighbors.</span></h2>
          </div>
          <div className="testi-stat" style={{ minWidth: 180 }}>
            <div className="num" style={{ fontSize: 36 }}>5.0★</div>
            <div className="label">Google · 60+ reviews</div>
          </div>
        </div>

        <div className="testi-carousel">
          {TESTIMONIALS.map((t, idx) => (
            <div className={`testi-slide ${idx === i ? 'is-active' : ''}`} key={idx}>
              <div className="testi-aside">
                <div className="testi-stat">
                  <div className="num">5.0★</div>
                  <div className="label">Google reviewed</div>
                </div>
                <div className="testi-stat">
                  <div className="num">700+</div>
                  <div className="label">Sites launched</div>
                </div>
              </div>
              <div>
                <blockquote>
                  <span className="mark">"</span>{t.quote}<span className="mark">"</span>
                </blockquote>
                <div className="testi-meta">
                  <div className="testi-avatar">{t.initials}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testi-controls">
          <div className="testi-dots" role="tablist" aria-label="Testimonial pagination">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                className={`testi-dot ${idx === i ? 'is-active' : ''}`}
                onClick={() => setI(idx)}
                aria-label={`Show testimonial ${idx + 1}`}
                aria-selected={idx === i}
                role="tab"
              />
            ))}
          </div>
          <div className="testi-arrows">
            <button className="testi-arrow" onClick={prev} aria-label="Previous testimonial">←</button>
            <button className="testi-arrow" onClick={next} aria-label="Next testimonial">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   News
   ============================================================ */
function News() {
  const items = [
  { t: 't-coast', tag: 'NEWS', date: 'Apr 15, 2026', title: 'Do People Still Hire Web Designers?', body: 'Short answer: yes—more than ever. But why people hire them, and what they expect, has evolved.', href: 'https://www.colewebdev.com/do-people-still-hire-web-designers/', img: 'https://www.colewebdev.com/wp-content/uploads/2021/06/colewebdev-photo-shoot-2021-4.jpg' },
  { t: 't-tide', tag: 'NEW LAUNCH', date: 'Apr 8, 2026', title: 'A Wellness-Focused Redesign for Cape Cod Aquatics', body: 'The redesigned site reflects what they do best — helping customers invest in health and wellness.', href: 'https://www.colewebdev.com/a-wellness-focused-website-redesign-for-cape-cod-aquatics/', img: 'https://www.colewebdev.com/wp-content/uploads/2025/10/cape-cod-aquatics-website-design-build-small.jpg' },
  { t: 't-sun', tag: 'NEWS', date: 'Feb 20, 2026', title: 'Celebrating 20 Years of Website Development', body: 'Built on custom design, powered by performance. 20 years strong — and always evolving.', href: 'https://www.colewebdev.com/celebrating-20-years-of-website-development-and-were-just-getting-started/', img: 'https://www.colewebdev.com/wp-content/uploads/2026/02/20-years-colewebdev.jpg' }];

  return (
    <section className="section bg-stripes" id="news">
      <div className="shell">
        <div className="s-head">
          <div className="left">
            <span className="eyebrow">News &amp; Resources</span>
            <h2>Reading from <span className="italic">the studio.</span></h2>
          </div>
          <a className="btn btn--ghost" href="#">All articles <span className="arrow">→</span></a>
        </div>

        <div className="news-grid">
          {items.map((n, i) =>
          <article className="news-card" key={i}>
              <div className={`thumb ${n.t}`}>
                <img className="thumb-img" src={n.img} alt={n.title} loading="lazy" />
                <span className="ph-label" style={{ position: 'absolute', bottom: 12, left: 12, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.08em', color: n.t === 't-tide' ? 'rgba(255,255,255,0.7)' : 'var(--muted)' }}>[ ARTICLE HERO ]</span>
              </div>
              <div className="body">
                <div className="row">
                  <span>{n.tag}</span>
                  <span>{n.date}</span>
                </div>
                <h4><a href={n.href} target="_blank" rel="noopener" style={{ color: 'inherit', textDecoration: 'none' }}>{n.title}</a></h4>
                <p className="ex">{n.body}</p>
                <span className="more">Read article <span className="arrow">→</span></span>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>);

}

/* ============================================================
   CTA
   ============================================================ */
function CTA() {
  return (
    <section className="section section--tight" id="cta">
      <div className="shell">
        <div className="cta">
          <div className="cta-grid">
            <div>
              <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.85)' }}>Ready when you are</span>
              <h2 style={{ marginTop: 14 }}>Let's build something <span className="italic">your customers</span> will love.</h2>
              <p style={{ marginTop: 16, maxWidth: '52ch' }}>
                Call us today, no commitment.
              </p>
              <div className="actions">
                <a className="btn btn--primary" href="#">Schedule a call <span className="arrow">→</span></a>
                <a className="btn btn--ghost" href="tel:5084132043">Or call 508.413.2043</a>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(6px)', borderRadius: 16, padding: 18, border: '1px solid rgba(255,255,255,0.15)' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 8 }}>Studio · Eastham, MA</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 22, lineHeight: 1.2 }}>3960 State Hwy, Unit 4<br />Eastham, MA 02642</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(6px)', borderRadius: 16, padding: 18, border: '1px solid rgba(255,255,255,0.15)' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 8 }}>Hours</div>
                <div style={{ fontSize: 15, lineHeight: 1.6 }}>Mon–Fri · 9am–5pm<br />Sat · 10am–2pm by appt.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

/* ============================================================
   Newsletter Banner
   ============================================================ */
function NewsletterBanner() {
  return (
    <section className="nl-banner">
      <div className="shell">
        <div className="nl-inner">
          <div className="nl-icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <polyline points="2,4 12,13 22,4" />
            </svg>
          </div>
          <div className="nl-text">
            <p className="nl-hl">
              Stay in the loop.
              <span className="nl-badge">Quarterly</span>
            </p>
            <p className="nl-sub">Web design tips, project launches, and Cape Cod business news — four times a year. No spam, ever.</p>
          </div>
          <a
            className="btn btn--primary nl-btn"
            href="https://enewsletter.colewebdev.com/signup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Subscribe Free <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Footer
   ============================================================ */
function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <ColeLogo height={42} dark />
            </div>
            <p>Modern, friendly, search-ready websites and AI web apps for small businesses on Cape Cod and the Islands.</p>
            <div className="footer-locale">
              <span style={{ width: 6, height: 6, borderRadius: 999, background: '#7BC043' }}></span>
              3960 State Hwy, Unit 4 · Eastham, MA 02642
            </div>
          </div>
          <div>
            <h5>Studio</h5>
            <ul>
              <li><a href="about.html">About Us</a></li>
              <li><a href="process.html">Process</a></li>
              <li><a href="portfolio.html">Portfolio</a></li>
              <li><a href="whitepapers.html">Whitepapers</a></li>
              <li><a href="news.html">News</a></li>
              <li><a href="newsletter.html">Newsletter Archive</a></li>
              <li><a href="faq.html">FAQ</a></li>
              <li><a href="shop.html">Shop</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5>Services</h5>
            <ul>
              <li><a href="website-design.html">Web Design</a></li>
              <li><a href="seo.html">SEO &amp; Local</a></li>
              <li><a href="ai-apps.html">AI Studio</a></li>
              <li><a href="hosting.html">Hosting + Care</a></li>
              <li><a href="branding.html">Branding</a></li>
              <li><a href="ecommerce.html">E-Commerce</a></li>
              <li><a href="wordpress.html">WordPress Design</a></li>
              <li><a href="traditional.html">Traditional Web Design</a></li>
            </ul>
          </div>
          <div>
            <h5>Connect</h5>
            <ul>
              <li><a href="tel:5084132043">508.413.2043</a></li>
              <li><a href="mailto:info@colewebdev.com">info@colewebdev.com</a></li>
              <li>
                <a href="https://www.facebook.com/colewebdev" target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
                  </svg>
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/colewebdev" target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://x.com/colewebdev" target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.26 5.632 5.904-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  X / Twitter
                </a>
              </li>
              <li>
                <a href="https://bsky.app/profile/colewebdev.bsky.social" target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <svg width="14" height="14" viewBox="0 0 568 501" fill="currentColor" aria-hidden="true">
                    <path d="M123.121 33.664C188.241 82.553 258.281 181.68 284 234.873c25.719-53.193 95.759-152.32 160.879-201.209C491.866-1.611 568-28.906 568 57.947c0 17.346-9.945 145.713-15.778 166.555-20.275 72.453-94.155 90.933-159.875 79.748C507.222 323.8 536.444 407.458 432 427.8c-83.952 16.232-124.963-41.285-142.303-98.01-.955-3.051-1.546-5.417-1.697-6.357C286.003 334.49 232.666 411.587 136 427.8 31.556 407.458 60.778 323.8 175.653 304.25 110.333 315.435 36.453 296.955 16.178 224.502 10.345 203.66.4 75.293.4 57.947.4-28.906 76.534-1.611 123.121 33.664z" />
                  </svg>
                  Bluesky
                </a>
              </li>
              <li>
                <a href="https://mastodon.social/@colewebdev" target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <svg width="14" height="14" viewBox="0 0 74 79" fill="currentColor" aria-hidden="true">
                    <path d="M73.7014 17.4323C72.5616 9.05152 65.1774 2.4469 56.424 1.1671C54.9472 0.950843 49.3518 0.163818 36.3901 0.163818H36.2933C23.3281 0.163818 20.5465 0.950843 19.0697 1.1671C10.56 2.41145 2.78877 8.34604 0.903306 16.826C-0.00357854 21.0022 -0.100361 25.6322 0.068112 29.8793C0.308275 35.9699 0.354874 42.0498 0.91406 48.1156C1.30064 52.1448 1.97502 56.1419 2.93215 60.0769C4.72441 67.3445 11.9795 73.3925 19.0876 75.86C26.6979 78.4332 34.8821 78.8603 42.724 77.0937C43.5866 76.8952 44.4398 76.6647 45.2833 76.4024C47.1867 75.8033 49.4199 75.1332 51.0616 73.9562C51.0841 73.9397 51.1026 73.9184 51.1156 73.8937C51.1286 73.869 51.1359 73.8415 51.1368 73.8135V67.9481C51.1364 67.9228 51.1302 67.8979 51.1185 67.8752C51.1068 67.8525 51.0898 67.8327 51.0691 67.8172C51.0484 67.8017 51.0245 67.7908 50.999 67.7854C50.9735 67.78 50.9472 67.7803 50.9218 67.7862C46.4704 68.8513 41.9084 69.3782 37.3318 69.3556C29.2862 69.3556 27.1585 65.5309 26.5457 63.9905C26.0523 62.6983 25.7458 61.3411 25.6363 59.9624C25.6357 59.9364 25.6415 59.9107 25.6532 59.8874C25.6648 59.8641 25.682 59.8439 25.7031 59.8285C25.7242 59.813 25.7486 59.8027 25.7745 59.7983C25.8004 59.7939 25.8269 59.7956 25.852 59.8031C30.2064 60.8582 34.6653 61.3936 39.1384 61.4002C40.2079 61.4002 41.2768 61.4002 42.3457 61.3715C46.8586 61.2439 51.6201 61.0108 56.0507 60.1648C56.1567 60.1437 56.2628 60.1226 56.3588 60.0969C63.4844 58.6686 70.2288 54.2388 70.8453 44.9015C70.8703 44.5022 70.9323 40.7487 70.9323 40.3334C70.9409 38.8776 71.3701 31.1622 70.8453 23.5234C70.843 23.4952 70.8333 23.468 70.8173 23.4446C70.8012 23.4213 70.7792 23.4027 70.7534 23.3908L73.7014 17.4323Z" />
                    <path d="M61.4217 31.1927V49.8596H54.5847V31.6552C54.5847 27.8875 52.9389 25.9699 49.6306 25.9699C46.0001 25.9699 44.1808 28.2643 44.1808 32.7964V43.1467H37.3867V32.7964C37.3867 28.2643 35.5631 25.9699 31.9326 25.9699C28.6469 25.9699 26.9973 27.8875 26.9973 31.6552V49.8596H20.1602V31.1927C20.1602 27.4263 21.0892 24.4281 22.9531 22.1981C24.8718 19.968 27.4368 18.8269 30.6709 18.8269C34.4077 18.8269 37.2378 20.2636 39.0971 23.1376L40.784 26.0085L42.4709 23.1376C44.3302 20.2636 47.1603 18.8269 50.8972 18.8269C54.1271 18.8269 56.6921 19.968 58.6157 22.1981C60.4753 24.4281 61.4217 27.4263 61.4217 31.1927Z" fill="white" />
                  </svg>
                  Mastodon
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2006–2026 COLEwebdev · Made on Cape Cod</span>
          <span style={{ display: 'flex', gap: 18 }}>
            <a href="privacy.html">Privacy</a>
            <a href="sitemap.html">Sitemap</a>
            <a href="accessibility.html">Accessibility</a>
          </span>
        </div>
      </div>
    </footer>);

}

Object.assign(window, { Process, Portfolio, Testimonial, News, CTA, NewsletterBanner, Footer });