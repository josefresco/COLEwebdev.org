/* global React, ReactDOM */

const NEWSLETTER_ISSUES = [
  // 2026
  { title: 'Does AI change my website marketing strategy?', date: 'May 12, 2026', year: 2026, href: 'https://www.colewebdev.com/does-ai-change-my-website-marketing-strategy/' },
  { title: 'Do People Still Hire Web Designers?', date: 'Apr 15, 2026', year: 2026, href: 'https://www.colewebdev.com/do-people-still-hire-web-designers/' },
  { title: 'What is the average cost of a web designer?', date: 'Mar 19, 2026', year: 2026, href: 'https://www.colewebdev.com/what-is-the-average-cost-of-a-web-designer/' },
  { title: 'Celebrating 20 Years of Website Development — And We\'re Just Getting Started', date: 'Feb 20, 2026', year: 2026, href: 'https://www.colewebdev.com/celebrating-20-years-of-website-development-and-were-just-getting-started/' },
  { title: 'Form February: Please Test Your Contact Forms', date: 'Feb 4, 2026', year: 2026, href: 'https://www.colewebdev.com/form-february-please-test-your-contact-forms/' },
  { title: 'COLEwebdev 2025 Year in Review', date: 'Jan 6, 2026', year: 2026, href: 'https://www.colewebdev.com/colewebdev-2025-year-in-review/' },
  // 2025
  { title: 'Year-End Web Design Showcase', date: 'Dec 3, 2025', year: 2025, href: 'https://www.colewebdev.com/year-end-web-design-showcase/' },
  { title: 'Inn Advisors Unveils a Modern New Website', date: 'Nov 19, 2025', year: 2025, href: 'https://www.colewebdev.com/inn-advisors-unveils-a-modern-new-website/' },
  { title: 'Promote your Business with a Giveaway', date: 'Oct 6, 2025', year: 2025, href: 'https://www.colewebdev.com/promote-your-business-with-a-giveaway/' },
  { title: 'Logo Design & Branding Services', date: 'Sep 10, 2025', year: 2025, href: 'https://www.colewebdev.com/logo-design-branding-services/' },
  { title: 'New Wheels, New Look: Spot Us on the Road!', date: 'Jul 25, 2025', year: 2025, href: 'https://www.colewebdev.com/new-wheels-new-look-spot-us-on-the-road/' },
  { title: 'A Decade Later — and Still Going Strong!', date: 'May 28, 2025', year: 2025, href: 'https://www.colewebdev.com/a-decade-later-and-still-going-strong/' },
  { title: 'Will You Be My Valentine?', date: 'Feb 7, 2025', year: 2025, href: 'https://www.colewebdev.com/will-you-be-my-valentine/' },
  // 2024
  { title: 'Year End Review 2024', date: 'Jan 9, 2025', year: 2024, href: 'https://www.colewebdev.com/year-end-review-2024/' },
  { title: 'New Service – Printful Quick Store Setup', date: 'Oct 2, 2024', year: 2024, href: 'https://www.colewebdev.com/new-service-printful-quick-store-setup/' },
  { title: 'Advantages of Having a Website', date: 'Sep 17, 2024', year: 2024, href: 'https://www.colewebdev.com/advantages-of-having-a-website/' },
  { title: '*NEW* High Top Website Tutor Space', date: 'Apr 24, 2024', year: 2024, href: 'https://www.colewebdev.com/new-high-top-website-tutor-space/' },
  { title: 'Taking a Break: Our Team Heads to Mexico for Some Well-Deserved R&R', date: 'Feb 20, 2024', year: 2024, href: 'https://www.colewebdev.com/vacation-to-mexico/' },
  // 2023
  { title: 'Year End Review 2023', date: 'Jan 11, 2024', year: 2023, href: 'https://www.colewebdev.com/year-end-review-2023/' },
  { title: 'Branding & Promotion: Custom Stickers', date: 'Sep 28, 2023', year: 2023, href: 'https://www.colewebdev.com/branding-promotion-custom-stickers/' },
  // 2022
  { title: 'Balance Ball® Chair', date: 'Jan 16, 2023', year: 2022, href: 'https://www.colewebdev.com/classic-balance-ball-chair-by-gaiam/' },
  { title: 'Year in Review 2022', date: 'Dec 28, 2022', year: 2022, href: 'https://www.colewebdev.com/year-in-review-2022/' },
  { title: 'Snow Effect for your Website', date: 'Dec 12, 2022', year: 2022, href: 'https://www.colewebdev.com/snow-effect-for-your-website/' },
  { title: 'Website Accessibility', date: 'Oct 24, 2022', year: 2022, href: 'https://www.colewebdev.com/website-accessibility/' },
  // 2021
  { title: 'Year in Review 2021', date: 'Dec 7, 2021', year: 2021, href: 'https://www.colewebdev.com/year-in-review-2021/' },
  { title: 'Summer WORKation', date: 'Sep 3, 2021', year: 2021, href: 'https://www.colewebdev.com/summer-workation/' },
  { title: '2021 Photo Shoot', date: 'Jul 7, 2021', year: 2021, href: 'https://www.colewebdev.com/2021-photo-shoot/' },
  { title: 'Website Edits', date: 'May 27, 2021', year: 2021, href: 'https://www.colewebdev.com/website-edits/' },
  { title: '7 Years Ago Today', date: 'Mar 24, 2021', year: 2021, href: 'https://www.colewebdev.com/7-years-ago-today/' },
  { title: 'Website Scavenger Hunt', date: 'Mar 2, 2021', year: 2021, href: 'https://www.colewebdev.com/website-scavenger-hunt/' },
  { title: 'Enter to WIN 1 Hour of Website Updates', date: 'Feb 5, 2021', year: 2021, href: 'https://www.colewebdev.com/website-updates-giveaway/' },
  { title: 'Celebrating 15 Years', date: 'Feb 1, 2021', year: 2021, href: 'https://www.colewebdev.com/celebrating-15-years/' },
  // 2020
  { title: 'The state of COLEwebdev in 2020 is .. strong!', date: 'Dec 22, 2020', year: 2020, href: 'https://www.colewebdev.com/the-state-of-colewebdev-in-2020-is-strong/' },
  { title: 'WordPress News', date: 'Dec 18, 2020', year: 2020, href: 'https://www.colewebdev.com/wordpress-news/' },
  { title: 'Deck the Halls with COLEwebdev', date: 'Dec 16, 2020', year: 2020, href: 'https://www.colewebdev.com/deck-the-halls-with-colewebdev/' },
  { title: 'Our NEW Way of Working', date: 'Jun 19, 2020', year: 2020, href: 'https://www.colewebdev.com/our-new-way-of-working/' },
  { title: 'Clearing Your Browser Cache', date: 'Mar 1, 2020', year: 2020, href: 'https://www.colewebdev.com/clearing-your-browser-cache/' },
];

// Group by year, newest year first
function groupByYear(issues) {
  const map = {};
  issues.forEach(issue => {
    if (!map[issue.year]) map[issue.year] = [];
    map[issue.year].push(issue);
  });
  return Object.keys(map)
    .map(Number)
    .sort((a, b) => b - a)
    .map(year => ({ year, issues: map[year] }));
}

function NewsletterPage() {
  const grouped = groupByYear(NEWSLETTER_ISSUES);
  const currentYear = grouped[0].year;

  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="na-hero">
        <div className="na-hero-bg" aria-hidden="true" />
        <div className="na-hero-content">
          <div className="shell">
            <span className="eyebrow na-eyebrow">Quarterly Newsletter</span>
            <h1 className="na-hero-hl">Newsletter Archive</h1>
            <p className="na-hero-sub">
              {NEWSLETTER_ISSUES.length} issues · {grouped[grouped.length - 1].year}–{currentYear}
            </p>
            <a
              className="btn btn--accent na-signup-btn"
              href="https://enewsletter.colewebdev.com/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe Free <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Archive body */}
      <section className="na-body">
        <div className="shell">
          <div className="na-layout">

            {/* Sidebar */}
            <aside className="na-sidebar">
              <div className="na-sidebar-card">
                <p className="na-sidebar-label">Subscribe</p>
                <p className="na-sidebar-blurb">
                  Get web design tips, Cape Cod business news, and COLEwebdev updates — quarterly, no spam.
                </p>
                <a
                  className="btn btn--accent na-sidebar-btn"
                  href="https://enewsletter.colewebdev.com/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Subscribe Free <span className="arrow">→</span>
                </a>
              </div>
              <nav className="na-year-nav" aria-label="Jump to year">
                <span className="na-year-nav-label">Jump to year</span>
                <ul className="na-year-nav-list">
                  {grouped.map(g => (
                    <li key={g.year}>
                      <a href={`#year-${g.year}`} className="na-year-nav-link">
                        {g.year}
                        <span className="na-year-nav-count">{g.issues.length}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Issue list */}
            <div className="na-issues">
              {grouped.map(g => (
                <div key={g.year} className="na-year-group" id={`year-${g.year}`}>
                  <h2 className="na-year-hl">{g.year}</h2>
                  <ul className="na-issue-list">
                    {g.issues.map((issue, i) => (
                      <li key={i} className="na-issue-item">
                        <span className="na-issue-date">{issue.date}</span>
                        <a
                          className="na-issue-title"
                          href={issue.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {issue.title}
                        </a>
                        <a
                          className="na-issue-read"
                          href={issue.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Read: ${issue.title}`}
                        >
                          Read →
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <NewsletterBanner />
      <Footer />
    </React.Fragment>
  );
}

const naRoot = ReactDOM.createRoot(document.getElementById('root'));
naRoot.render(<NewsletterPage />);
