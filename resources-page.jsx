/* global React, ReactDOM */

const CHECKLISTS = [
  { slug: 'seo-checklist', glyph: '↗', title: 'Small Business SEO Checklist', desc: 'The on-page, technical, and local factors that get a small business site found on Google.' },
  { slug: 'aio-checklist', glyph: '⌘', title: 'AI Search Optimization Checklist', desc: 'What it takes to get cited by ChatGPT, Perplexity, and Google AI Overviews.' },
  { slug: 'nap-checklist', glyph: '◎', title: 'NAP & Local Citation Checklist', desc: 'Name, address, and phone consistency — the quiet foundation of local search trust.' },
  { slug: 'blog-checklist', glyph: '✎', title: 'Small Business Blog Checklist', desc: 'What separates a blog post that earns traffic from one that just fills space.' },
  { slug: 'social-checklist', glyph: '◍', title: 'Social Media Presence Checklist', desc: 'Fewer platforms, done consistently, beats being everywhere and nowhere at once.' },
  { slug: 'newsletter-checklist', glyph: '↻', title: 'Email Newsletter Checklist', desc: 'The mechanics that keep an email list healthy, deliverable, and worth sending to.' },
  { slug: 'gsc-checklist', glyph: '⚙', title: 'Google Search Console Checklist', desc: 'The free tool most small business owners never open — and what to check when they do.' },
  { slug: 'analytics-checklist', glyph: '✦', title: 'Google Analytics (GA4) Checklist', desc: 'Setting up GA4 so it answers real business questions, not just counts visitors.' },
  { slug: 'ads-checklist', glyph: '◐', title: 'Paid Ads Launch Checklist', desc: 'What to confirm before spending a single dollar on Google or Meta ads.' },
  { slug: 'tracking-checklist', glyph: '◇', title: 'Conversion Tracking Setup Checklist', desc: 'The plumbing behind every marketing decision — if it’s broken, everything on top of it is guessing.' },
];

function ResourcesPage() {
  return (
    <React.Fragment>
      <Header />

      <section className="res-hero">
        <div className="shell">
          <span className="eyebrow">Free Resources</span>
          <h1 className="res-hero-hl">Marketing checklists for Cape Cod small businesses.</h1>
          <p className="res-hero-sub">
            Ten printable, one-page PDF checklists covering the marketing fundamentals we see small
            business owners struggle with most — SEO, AI search, local citations, analytics, ads, and more.
            No email required.
          </p>
        </div>
      </section>

      <section className="res-section">
        <div className="shell">
          <div className="res-grid">
            {CHECKLISTS.map((c) => (
              <div key={c.slug} className="res-card">
                <span className="res-card-glyph" aria-hidden="true">{c.glyph}</span>
                <h3 className="res-card-title">{c.title}</h3>
                <p className="res-card-desc">{c.desc}</p>
                <a
                  href={`assets/checklists/${c.slug}.pdf`}
                  target="_blank"
                  rel="noopener"
                  className="res-card-cta"
                >
                  Download PDF <span className="arrow">→</span>
                </a>
              </div>
            ))}
          </div>

          <div className="res-more">
            <p className="res-more-text">
              Rather have us just <em>handle it?</em>
            </p>
            <a className="btn btn--primary" href="quote.html">
              Request a Quote <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      <NewsletterBanner />
      <Footer />
    </React.Fragment>
  );
}

const resRoot = ReactDOM.createRoot(document.getElementById('root'));
resRoot.render(<ResourcesPage />);
