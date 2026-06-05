/* global React, ReactDOM */

const MN_SERVICES = [
  { icon: '◇', bg: 'rgba(0,115,170,0.12)', color: '#0073AA', title: 'Web Design', body: 'Custom-built websites from scratch — no templates, no page builders. Designed to perform on mobile and rank in search.' },
  { icon: '↻', bg: 'rgba(123,192,67,0.14)', color: '#5DA02E', title: 'WordPress', body: 'The world\'s most flexible CMS, configured lean and handed off so your team can manage content without calling a developer.' },
  { icon: '◎', bg: 'rgba(0,115,170,0.12)', color: '#0073AA', title: 'E-Commerce', body: 'WooCommerce storefronts built for real inventory, real shipping logic, and real customers — wherever they are.' },
  { icon: '↗', bg: 'rgba(123,192,67,0.14)', color: '#5DA02E', title: 'SEO & Local Search', body: 'Show up when your customers search. Local SEO, structured data, and content strategy that builds long-term visibility.' },
  { icon: '⌘', bg: 'rgba(0,115,170,0.12)', color: '#0073AA', title: 'Hosting + Care Plans', body: 'Managed WordPress hosting, daily backups, security, and updates — with a real person to call when something needs attention.' },
  { icon: '✦', bg: 'rgba(123,192,67,0.14)', color: '#5DA02E', title: 'AI Integrations', body: 'Chatbots, booking tools, and custom AI features that save your team time and serve your customers around the clock.' },
];

const MN_INDUSTRIES = [
  { glyph: '◎', bg: 'rgba(0,115,170,0.10)', color: '#0073AA', title: 'Campgrounds & Outdoor Recreation', body: 'Reservation-ready sites for campgrounds, outfitters, guides, and seasonal recreation businesses that fill up fast and need to look credible online before a guest commits to booking.' },
  { glyph: '↗', bg: 'rgba(123,192,67,0.12)', color: '#5DA02E', title: 'Fishing, Marine & Agriculture', body: 'From lobster wharves to potato operations in The County — businesses with complex seasonal patterns that need year-round web presence and clear, functional information for buyers and visitors.' },
  { glyph: '✦', bg: 'rgba(0,115,170,0.10)', color: '#0073AA', title: 'Tourism & Hospitality', body: 'Inns, lodges, vacation rentals, and restaurants serving a mix of locals and summer visitors. We know how to build for both audiences without alienating either.' },
  { glyph: '◇', bg: 'rgba(123,192,67,0.12)', color: '#5DA02E', title: 'Small Business & Retail', body: 'Main Street retailers, specialty shops, and service businesses in small Maine towns that want to compete online without losing the local identity that sets them apart.' },
  { glyph: '↻', bg: 'rgba(0,115,170,0.10)', color: '#0073AA', title: 'Nonprofits & Community Orgs', body: 'Donation pages, event calendars, member portals, and resource sites for organizations doing real work in Maine communities, from the midcoast to The County.' },
  { glyph: '⌘', bg: 'rgba(123,192,67,0.12)', color: '#5DA02E', title: 'Contractors & Trades', body: 'Builders, electricians, plumbers, and service contractors who need their phone to ring — and need Google to send the right calls, not job seekers or people two states away.' },
];

const MN_FAQ = [
  {
    q: 'Do you build websites for Maine businesses?',
    a: 'Yes — COLEwebdev founder Josiah Cole grew up in Farmington, Maine, and the studio works regularly with Maine businesses, particularly in Aroostook County and the Houlton area. We understand Maine\'s seasonal economy, its rural market dynamics, and the trust that comes from working with someone who knows the state firsthand. Remote collaboration is how we\'ve always operated — our Cape Cod and Maine clients get the same quality of work regardless of geography.',
  },
  {
    q: 'What kinds of Maine businesses do you typically work with?',
    a: 'We\'ve built sites for campgrounds, hospitality businesses, outdoor recreation companies, nonprofits, contractors, and small retailers across Maine. Duck Puddle Campground is one of our Maine clients. If you need a website that brings in customers and holds up under peak-season traffic — from a studio that has been doing this since 2006 — that\'s exactly what we build.',
  },
  {
    q: 'How do I get started working with COLEwebdev?',
    a: 'Request a quote or give us a call at 508.413.2043. The first conversation is free, no commitment required. We\'ll ask about your business, your current site (if any), your goals, and your timeline — and give you a straight answer about what we\'d recommend and what it would cost.',
  },
];

function MainePage() {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'mn-faq-schema';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: MN_FAQ.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    });
    document.head.appendChild(script);
    return () => { const el = document.getElementById('mn-faq-schema'); if (el) el.remove(); };
  }, []);

  return (
    <React.Fragment>
      <Header />

      {/* Hero — mountain photo background */}
      <div className="mn-hero">
        <div className="mn-hero-img" aria-hidden="true" />
        <div className="mn-hero-overlay" aria-hidden="true" />
        <div className="mn-hero-content">
          <div className="shell">
            <span className="eyebrow mn-eyebrow">COLEwebdev · Maine Web Design</span>
            <h1 className="mn-hero-hl">
              Maine web design,<br />from <em>people who know it.</em>
            </h1>
            <p className="mn-hero-sub">
              Josiah Cole grew up in Farmington. We work regularly in Aroostook County and beyond.
              When you hire COLEwebdev, you're not working with a distant agency — you're working
              with a studio with genuine Maine roots and 20 years of experience.
            </p>
            <div className="mn-hero-actions">
              <a className="btn btn--accent" href="quote.html">
                Get a free estimate <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost mn-ghost" href="tel:5084132043">
                508.413.2043
              </a>
            </div>
            <div className="mn-hero-tags">
              {['Farmington, ME', 'Aroostook County', 'Web Design', 'WordPress', 'E-Commerce', 'SEO'].map(t => (
                <span key={t} className="mn-hero-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Maine roots */}
      <section className="mn-roots">
        <div className="shell">
          <div className="mn-roots-grid">
            <div>
              <span className="eyebrow">Maine roots</span>
              <h2 className="mn-roots-hl">Not a national agency. <em>We know Maine.</em></h2>
              <p className="mn-roots-body">
                COLEwebdev founder Josiah Cole grew up in Farmington — western Maine, Franklin County,
                along the Sandy River. He knows what it means to run a small business in a small Maine
                town, where word-of-mouth still matters and your website is often the first impression
                you make on someone who found you through Google.
              </p>
              <p className="mn-roots-body">
                COLEwebdev spends considerable time in northern Maine, working with businesses in and
                around Houlton and Aroostook County — The County, with its own rhythms, agriculture,
                and customer base unlike anywhere else in New England. That firsthand knowledge shapes
                how we approach Maine projects.
              </p>
              <p className="mn-roots-body">
                We've been building websites since 2006 — remote work isn't a workaround for us,
                it's how we've always operated. Our Cape Cod and Maine clients get the same level
                of care and the same quality of work.
              </p>
              <a className="btn btn--primary" href="about.html">
                Meet the team <span className="arrow">→</span>
              </a>
            </div>
            <aside>
              <div className="mn-facts-card">
                <p className="mn-facts-label">Studio at a glance</p>
                {[
                  { label: "Josiah's hometown", val: 'Farmington, ME' },
                  { label: 'Northern Maine base', val: 'Houlton / Aroostook Co.' },
                  { label: 'In business since', val: '2006' },
                  { label: 'Sites launched', val: '700+' },
                  { label: 'Google rating', val: '4.8 ★' },
                  { label: 'Response time', val: 'FAST' },
                ].map((f, i) => (
                  <div key={i} className="mn-fact-row">
                    <span className="mn-fact-label">{f.label}</span>
                    <span className="mn-fact-val">{f.val}</span>
                  </div>
                ))}
                <a className="btn btn--accent mn-facts-cta" href="quote.html">
                  Request a quote <span className="arrow">→</span>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mn-services">
        <div className="shell">
          <div className="mn-services-hd">
            <span className="eyebrow">What we build</span>
            <h2 className="mn-services-hl">Full-service web design for Maine businesses.</h2>
            <p className="mn-services-sub">
              Every project starts with a free conversation — no templates, no packages pushed on you.
              We scope around what your business actually needs.
            </p>
          </div>
          <div className="mn-services-grid">
            {MN_SERVICES.map(s => (
              <div key={s.title} className="mn-service-card">
                <div className="mn-service-icon" style={{ background: s.bg, color: s.color }}>{s.icon}</div>
                <div className="mn-service-title">{s.title}</div>
                <div className="mn-service-body">{s.body}</div>
              </div>
            ))}
          </div>
          <div className="mn-services-more">
            <a href="services.html" className="btn btn--ghost">View all services <span className="arrow">→</span></a>
          </div>
        </div>
      </section>

      {/* Client spotlight — Duck Puddle Campground */}
      <section className="mn-spotlight">
        <div className="shell">
          <div className="mn-spotlight-inner">
            <div className="mn-spotlight-left">
              <span className="eyebrow">Maine client</span>
              <h2 className="mn-spotlight-hl">Duck Puddle Campground</h2>
              <p className="mn-spotlight-body">
                Duck Puddle Campground is a COLEwebdev client based in Maine. A campground that
                needed a website capable of earning the trust of families and outdoor enthusiasts
                who haven't been there before — communicating amenities clearly, handling online
                inquiries, and making a strong first impression at the moment it matters most.
              </p>
              <p className="mn-spotlight-body">
                Maine's outdoor recreation industry runs on reputation and visibility. A well-built
                website — fast-loading, mobile-first, and clearly organized — is the difference
                between filling your season early and scrambling for bookings. We build sites that
                do the former.
              </p>
              <a className="btn btn--primary" href="portfolio.html">
                View our full portfolio <span className="arrow">→</span>
              </a>
            </div>
            <div className="mn-spotlight-right">
              <div className="mn-spotlight-card">
                <div className="mn-spotlight-glyph">◎</div>
                <div className="mn-spotlight-name">Duck Puddle Campground</div>
                <div className="mn-spotlight-type">Campground · Maine</div>
                <div className="mn-spotlight-tags">
                  <span className="mn-spotlight-tag">Web Design</span>
                  <span className="mn-spotlight-tag">WordPress</span>
                  <span className="mn-spotlight-tag">Outdoor Rec</span>
                </div>
                <p className="mn-spotlight-quote">
                  "A site that earns trust before a guest ever arrives."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="mn-industries">
        <div className="shell">
          <div className="mn-industries-hd">
            <span className="eyebrow">Industries we serve</span>
            <h2 className="mn-industries-hl">Built for the way Maine businesses work.</h2>
          </div>
          <div className="mn-industries-grid">
            {MN_INDUSTRIES.map(ind => (
              <div key={ind.title} className="mn-industry-card">
                <div className="mn-industry-icon" style={{ background: ind.bg, color: ind.color }}>{ind.glyph}</div>
                <div className="mn-industry-title">{ind.title}</div>
                <div className="mn-industry-body">{ind.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mn-faq">
        <div className="shell">
          <span className="eyebrow">FAQ</span>
          <h2 className="mn-faq-hl">Questions from Maine businesses.</h2>
          <div className="mn-faq-list">
            {MN_FAQ.map((item, i) => (
              <div key={i} className="mn-faq-item">
                <h3 className="mn-faq-q">{item.q}</h3>
                <p className="mn-faq-a">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mn-cta">
        <div className="shell">
          <div className="mn-cta-inner">
            <div>
              <h2 className="mn-cta-hl">
                Ready to build something <em>that works?</em>
              </h2>
              <p className="mn-cta-sub">
                The first hour is free. No commitment, no pitch — a real conversation about what
                your Maine business needs from a website, with people who've been doing this since 2006.
              </p>
              <div className="mn-cta-related">
                <span className="mn-cta-related-label">Further reading:</span>
                <a href="website-design.html" className="mn-cta-related-link">Website Design + Build →</a>
                <a href="wordpress.html" className="mn-cta-related-link">WordPress →</a>
                <a href="hosting.html" className="mn-cta-related-link">Hosting + Care Plans →</a>
              </div>
            </div>
            <div className="mn-cta-actions">
              <a className="btn btn--accent" href="quote.html">
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

const mnRoot = ReactDOM.createRoot(document.getElementById('root'));
mnRoot.render(<MainePage />);
