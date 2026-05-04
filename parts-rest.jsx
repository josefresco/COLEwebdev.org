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
                Free 20-minute call. No pitch deck, no salesperson — just a conversation about what you're trying to do, with someone who's been doing this since 2000.
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
              <li><a href="index.html">About</a></li>
              <li><a href="process.html">Process</a></li>
              <li><a href="portfolio.html">Portfolio</a></li>
              <li><a href="news.html">News</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5>Services</h5>
            <ul>
              <li><a href="index.html#services">Web Design</a></li>
              <li><a href="index.html#services">SEO &amp; Local</a></li>
              <li><a href="index.html#services">AI Studio</a></li>
              <li><a href="index.html#services">Hosting + Care</a></li>
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
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2006–2026 COLEwebdev · Made on Cape Cod</span>
          <span style={{ display: 'flex', gap: 18 }}>
            <a href="#">Privacy</a>
            <a href="#">Sitemap</a>
            <a href="#">Accessibility</a>
          </span>
        </div>
      </div>
    </footer>);

}

Object.assign(window, { Process, Portfolio, Testimonial, News, CTA, Footer });