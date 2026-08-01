/* global React, ReactDOM */

const EM_WHATS_INCLUDED = [
  {
    icon: '✎',
    name: 'Campaign Strategy',
    body: 'We map out your email calendar for the year — which campaigns to run, when to send them, and what each one should accomplish. Strategy first, send second.',
  },
  {
    icon: '◇',
    name: 'Template Design',
    body: 'Custom-designed email templates that match your brand — responsive, dark-mode-friendly, and built to render correctly in every major email client.',
  },
  {
    icon: '✎',
    name: 'Copywriting',
    body: 'Subject lines that get opened, body copy that gets read, and calls to action that convert. Every word is written for your specific audience and goal.',
  },
  {
    icon: '⚙',
    name: 'List Segmentation',
    body: 'Sending the same email to your entire list wastes potential. We segment by customer type, purchase history, location, and engagement level so the right message reaches the right person.',
  },
  {
    icon: '◐',
    name: 'A/B Testing',
    body: 'Subject line testing, send-time testing, CTA button copy testing — we run controlled experiments so your list teaches us how to improve every campaign.',
  },
  {
    icon: '↗',
    name: 'Performance Reporting',
    body: 'Monthly reports covering open rates, click rates, unsubscribes, and revenue attributed to email — with plain-English takeaways and recommendations for next month.',
  },
];

const EM_PLATFORMS = [
  {
    name: 'Mailchimp',
    icon: '✦',
    body: 'The industry standard for small businesses. Great automation tools, solid analytics, and a generous free tier for getting started. We build and manage campaigns natively inside your account.',
  },
  {
    name: 'Klaviyo',
    icon: '✦',
    body: 'The go-to platform for e-commerce and product businesses. Klaviyo\'s revenue tracking and behavioral triggers make it the most powerful option for shops with online sales.',
  },
  {
    name: 'Constant Contact',
    icon: '✦',
    body: 'A reliable choice for nonprofits, event-driven businesses, and organizations that need simple, predictable tools. Strong event management integration and easy-to-use editor.',
  },
];

const EM_SEASONAL_CAMPAIGNS = [
  { icon: '◇', label: 'Summer Activation', desc: 'Welcome back seasonal customers with opening announcements, summer menus, and early-bird specials that land before the crowds arrive.' },
  { icon: '↗', label: 'Shoulder-Season Promos', desc: 'May and September are competitive months. Email campaigns keep your best customers engaged when foot traffic naturally dips.' },
  { icon: '◐', label: 'Winter Stays', desc: 'Year-round businesses use winter campaigns to remind the Cape Cod community that you\'re open — and to reward locals with off-season offers.' },
  { icon: '⌘', label: 'Re-engagement Series', desc: 'Automated sequences that wake up subscribers who haven\'t opened in 90 days — before you lose them to the unsubscribe button.' },
];

function EmailMarketingPage() {
  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="em-hero">
        <div className="em-hero-bg" aria-hidden="true" />
        <div className="em-hero-content">
          <div className="shell">
            <span className="eyebrow em-eyebrow">Services · Grow &amp; Market</span>
            <h1 className="em-hero-hl">
              Cape Cod Email <em>Marketing.</em>
            </h1>
            <p className="em-hero-sub">
              Email campaigns and newsletters for Cape Cod small businesses — built in Mailchimp or Klaviyo, designed to open, and written to convert.
            </p>
            <div className="em-hero-actions">
              <a className="btn btn--accent" href="index.html#cta">
                Talk about your list <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost em-ghost" href="tel:5084132043">
                508.413.2043
              </a>
            </div>
          </div>
        </div>
      </div>

      <SummaryStrip
        summary="Email campaigns and newsletters for Cape Cod businesses — strategy, design, copy, and monthly sends that keep your list engaged and your revenue growing."
        points={['Campaign Strategy', 'Template Design', 'List Management', 'Performance Reporting']}
      />

      {/* What's included */}
      <section className="em-included">
        <div className="shell">
          <div className="em-included-hd">
            <span className="eyebrow">What's included</span>
            <h2 className="em-included-hl">Everything your email program needs.</h2>
            <p className="em-included-sub">
              Most businesses have an email list they're not using. We turn that dormant asset into a reliable channel that generates bookings, sales, and repeat visits.
            </p>
          </div>
          <div className="em-included-grid">
            {EM_WHATS_INCLUDED.map(item => (
              <div key={item.name} className="em-inc-card">
                <div className="em-inc-icon">{item.icon}</div>
                <h3 className="em-inc-name">{item.name}</h3>
                <p className="em-inc-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why email outperforms social */}
      <section className="em-why">
        <div className="shell em-why-grid">
          <div className="em-why-stats">
            <div className="em-stat">
              <span className="em-stat-num">$36</span>
              <span className="em-stat-label">average return for every $1 spent on email</span>
            </div>
            <div className="em-stat">
              <span className="em-stat-num">4×</span>
              <span className="em-stat-label">higher purchase rate than social media posts</span>
            </div>
            <div className="em-stat">
              <span className="em-stat-num">100%</span>
              <span className="em-stat-label">of your list sees your email — algorithm not required</span>
            </div>
          </div>
          <div className="em-why-body">
            <span className="eyebrow">Why email outperforms social</span>
            <h2 className="em-why-hl">
              You own your list. <em>No algorithm can take it away.</em>
            </h2>
            <p className="em-body">
              Every social media platform throttles organic reach. A Facebook post might reach 3% of your followers. An Instagram story disappears in 24 hours. The algorithm decides who sees what — and it increasingly favors paid posts over organic ones.
            </p>
            <p className="em-body">
              Your email list is different. You own every address. When you send a campaign, it lands in the inbox of everyone who signed up — no pay-to-play, no reach throttling, no third-party risk. If a platform shuts down tomorrow, your list survives intact.
            </p>
            <p className="em-body">
              Email also converts at a higher rate than social because subscribers have already raised their hand — they asked to hear from you. That opt-in intent is worth more than any algorithmically served ad impression.
            </p>
          </div>
        </div>
      </section>

      {/* Platforms we work with */}
      <section className="em-platforms">
        <div className="shell">
          <div className="em-platforms-hd">
            <span className="eyebrow">Platforms we work with</span>
            <h2 className="em-platforms-hl">The right tool for your business.</h2>
            <p className="em-platforms-sub">
              We work natively inside your existing platform — or help you choose one if you're starting from scratch. No proprietary tools, no lock-in.
            </p>
          </div>
          <div className="em-platforms-grid">
            {EM_PLATFORMS.map(platform => (
              <div key={platform.name} className="em-platform-card">
                <div className="em-platform-icon">{platform.icon}</div>
                <h3 className="em-platform-name">{platform.name}</h3>
                <p className="em-platform-body">{platform.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cape Cod seasonal angle */}
      <section className="em-seasonal">
        <div className="shell">
          <div className="em-seasonal-hd">
            <span className="eyebrow">The Cape Cod angle</span>
            <h2 className="em-seasonal-hl">
              Seasonal businesses run on <em>email timing.</em>
            </h2>
            <p className="em-seasonal-sub">
              Cape Cod's seasonal rhythms create natural email moments that mainland businesses never think about. We've built campaigns around every phase of the Cape Cod calendar — and we know which ones drive bookings and which ones go unread.
            </p>
          </div>
          <div className="em-seasonal-grid">
            {EM_SEASONAL_CAMPAIGNS.map(item => (
              <div key={item.label} className="em-season-card">
                <div className="em-season-icon">{item.icon}</div>
                <div>
                  <div className="em-season-label">{item.label}</div>
                  <p className="em-season-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="em-cta-section">
        <div className="shell">
          <div className="em-cta">
            <div>
              <h2 className="em-cta-hl">
                Let's put your list <em>to work.</em>
              </h2>
              <p className="em-cta-sub">
                Whether you have a list of 200 or 20,000, we'll show you what a consistent email program could do for your business — starting with a free strategy conversation, no commitment required.
              </p>
              <p className="em-area-note">
                Serving businesses across all 15 Cape Cod towns.{' '}
                <a href="service-area.html">See our full service area →</a>
              </p>
            </div>
            <div className="em-cta-actions">
              <a className="btn btn--primary" href="index.html#cta">
                Start the conversation <span className="arrow">→</span>
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

ReactDOM.createRoot(document.getElementById('root')).render(<EmailMarketingPage />);
