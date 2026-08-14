/* global React, ReactDOM */

const GBP_OPTIMIZE_ITEMS = [
  {
    icon: '⚙',
    name: 'Business Info & Categories',
    body: 'We ensure your business name, address, phone, website, and categories are complete and match your other directory listings exactly — inconsistencies are a known ranking drag.',
  },
  {
    icon: '◎',
    name: 'Service Areas',
    body: 'For service-area businesses, we configure your coverage zones so Google surfaces your profile for the right towns across Cape Cod — not just your home address.',
  },
  {
    icon: '↗',
    name: 'Photos & Visual Content',
    body: 'Profiles with photos receive 42% more requests for directions and 35% more website clicks. We manage your photo library, flag outdated images, and recommend new shots.',
  },
  {
    icon: '✎',
    name: 'Posts & Updates',
    body: 'Monthly Google Business Posts keep your profile active and signal relevance to Google. We write and publish posts covering offers, events, seasonal promos, and news.',
  },
  {
    icon: '◇',
    name: 'Products & Services',
    body: 'The Products and Services sections give Google more signals about what you offer — and give customers a preview of your menu, rates, or offerings before they ever visit your site.',
  },
  {
    icon: '◐',
    name: 'Q&A Monitoring',
    body: 'Anyone can ask — and anyone can answer — questions on your GBP. We monitor and answer questions promptly, and seed the Q&A with the questions customers actually ask.',
  },
];

const GBP_REVIEW_STEPS = [
  {
    n: '01',
    label: 'Get More Reviews',
    body: 'We build you a custom review-request process — email templates, SMS follow-ups, QR codes for in-person asks — so asking becomes part of your workflow, not an afterthought.',
  },
  {
    n: '02',
    label: 'Review Velocity',
    body: 'Google rewards a steady stream of reviews over time. A burst of 30 reviews followed by silence raises flags. We help you build consistent, month-over-month review growth.',
  },
  {
    n: '03',
    label: 'Respond to Every Review',
    body: 'Businesses that respond to reviews are seen as more credible — by customers and by Google. We write professional responses to all reviews, including the negative ones.',
  },
  {
    n: '04',
    label: 'Handle Negative Reviews',
    body: 'One bad review hurts less when you have 40 good ones. We guide you through response strategy for difficult reviews and flag fake reviews for Google removal.',
  },
];

const GBP_MANAGEMENT = [
  { icon: '✎', label: 'Monthly Posts', desc: 'Fresh GBP posts every month — offers, events, seasonal content — to keep your profile active and current.' },
  { icon: '↗', label: 'Photo Refreshes', desc: 'Quarterly photo audits. We flag outdated images, prompt for new ones, and publish them to your profile.' },
  { icon: '◐', label: 'Q&A Monitoring', desc: 'Weekly checks on your Q&A section. Customer questions get fast, accurate answers — from you, not a random user.' },
  { icon: '⚙', label: 'Spam Fighting', desc: 'Competitor spam in the local pack is more common than most businesses realize. We identify and report it.' },
];

function GBPPage() {
  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="gbp-hero">
        <div className="gbp-hero-bg" aria-hidden="true" />
        <div className="gbp-hero-content">
          <div className="shell">
            <span className="eyebrow gbp-eyebrow">Services · Grow &amp; Market</span>
            <h1 className="gbp-hero-hl">
              Cape Cod Google Business <em>Profile Optimization.</em>
            </h1>
            <p className="gbp-hero-sub">
              Show up in Google Maps and the local pack for Cape Cod searches. We optimize and manage your Google Business Profile to put your business in front of customers actively looking for you.
            </p>
            <div className="gbp-hero-actions">
              <a className="btn btn--accent" href="index.html#cta">
                Get a free GBP audit <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost gbp-ghost" href="tel:5084132043">
                508.413.2043
              </a>
            </div>
          </div>
        </div>
      </div>

      <SummaryStrip
        summary="Full Google Business Profile optimization and ongoing management — so Cape Cod customers find you in Maps and the local pack before they find your competitors."
        points={['GBP Setup & Optimization', 'Photo Management', 'Review Strategy', 'Local Pack Rankings']}
      />

      <ServiceSideNav group="grow" current="cape-cod-google-business-profile.html" />

      {/* Why GBP matters */}
      <section className="gbp-why">
        <div className="shell gbp-why-grid">
          <div className="gbp-why-stats">
            <div className="gbp-stat">
              <span className="gbp-stat-num">46%</span>
              <span className="gbp-stat-label">of Google searches have local intent</span>
            </div>
            <div className="gbp-stat">
              <span className="gbp-stat-num">44%</span>
              <span className="gbp-stat-label">of clicks go to local 3-pack results</span>
            </div>
            <div className="gbp-stat">
              <span className="gbp-stat-num">#1</span>
              <span className="gbp-stat-label">GBP signals are the top local ranking factor</span>
            </div>
          </div>
          <div className="gbp-why-body">
            <span className="eyebrow">Why it matters</span>
            <h2 className="gbp-why-hl">
              The local 3-pack is prime real estate. <em>Is your business on it?</em>
            </h2>
            <p className="gbp-body">
              When a Falmouth resident searches "electrician near me" or a Chatham visitor types "seafood restaurant open now," Google surfaces a map and three business listings before any organic results. Those three spots — the local pack — capture nearly half of all clicks on the page.
            </p>
            <p className="gbp-body">
              Your Google Business Profile is the single most important signal Google uses to decide who lands in that pack. A complete, active, well-reviewed profile outranks competitors who set it up once and forgot about it — even if their website is better.
            </p>
            <p className="gbp-body">
              COLEwebdev has been building and marketing local businesses on Cape Cod since 2000. We know the seasonal search patterns, the competitive landscape in each town, and the exact signals that move a profile from page two into the local pack.
            </p>
          </div>
        </div>
      </section>

      {/* What we optimize */}
      <section className="gbp-optimize">
        <div className="shell">
          <div className="gbp-optimize-hd">
            <span className="eyebrow">What we optimize</span>
            <h2 className="gbp-optimize-hl">Every signal Google looks at.</h2>
            <p className="gbp-optimize-sub">
              A fully optimized Google Business Profile isn't just a completed form — it's an active, maintained listing that earns trust from Google every month.
            </p>
          </div>
          <div className="gbp-optimize-grid">
            {GBP_OPTIMIZE_ITEMS.map(item => (
              <div key={item.name} className="gbp-opt-card">
                <div className="gbp-opt-icon">{item.icon}</div>
                <h3 className="gbp-opt-name">{item.name}</h3>
                <p className="gbp-opt-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review management */}
      <section className="gbp-reviews">
        <div className="shell">
          <div className="gbp-reviews-hd">
            <span className="eyebrow">Review management</span>
            <h2 className="gbp-reviews-hl">Reviews are a ranking factor. <em>And a sales tool.</em></h2>
            <p className="gbp-reviews-sub">
              Businesses with more reviews, higher ratings, and faster response times consistently outrank those with sparse or stale review histories. We build systems that make review growth automatic.
            </p>
          </div>
          <div className="gbp-reviews-steps">
            {GBP_REVIEW_STEPS.map(step => (
              <div key={step.n} className="gbp-review-step">
                <div className="gbp-review-num">{step.n}</div>
                <div className="gbp-review-label">{step.label}</div>
                <p className="gbp-review-body">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing management */}
      <section className="gbp-manage">
        <div className="shell">
          <div className="gbp-manage-hd">
            <span className="eyebrow">Ongoing management</span>
            <h2 className="gbp-manage-hl">
              An optimized profile needs <em>an active one.</em>
            </h2>
            <p className="gbp-manage-sub">
              Google rewards profiles that are consistently updated over those that are set-and-forgotten. Our monthly management keeps your listing fresh, accurate, and competitive all year.
            </p>
          </div>
          <div className="gbp-manage-grid">
            {GBP_MANAGEMENT.map(item => (
              <div key={item.label} className="gbp-manage-card">
                <div className="gbp-manage-icon">{item.icon}</div>
                <div>
                  <div className="gbp-manage-label">{item.label}</div>
                  <p className="gbp-manage-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gbp-cta-section">
        <div className="shell">
          <div className="gbp-cta">
            <div>
              <h2 className="gbp-cta-hl">
                Start with a free <em>GBP audit.</em>
              </h2>
              <p className="gbp-cta-sub">
                We'll review your current Google Business Profile, identify what's missing, and show you exactly what it would take to rank in the local pack for your top searches — at no charge.
              </p>
              <p className="gbp-area-note">
                Serving businesses across all 15 Cape Cod towns.{' '}
                <a href="service-area.html">See our full service area →</a>
              </p>
              <div className="gbp-related">
                <span className="gbp-related-label">Related:</span>
                <a href="seo.html" className="gbp-related-link">Full Local SEO — GBP is one piece of a larger system.</a>
                <a href="ppc.html" className="gbp-related-link">Google Ads — reach customers who aren't finding you organically.</a>
              </div>
            </div>
            <div className="gbp-cta-actions">
              <a className="btn btn--primary" href="index.html#cta">
                Request free audit <span className="arrow">→</span>
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

ReactDOM.createRoot(document.getElementById('root')).render(<GBPPage />);
