/* global React, ReactDOM */

const CASE_STUDIES = [
  {
    client: 'Cape Cod Aquatics',
    location: 'South Yarmouth, MA',
    industry: 'Wellness & Fitness',
    industryHref: null,
    glyph: '✦',
    summary: "A full site redesign built around Cape Cod Aquatics' wellness-first brand — swim lessons, therapy pools, and community programs presented with a calmer, more approachable visual identity than the previous site.",
    ctaLabel: 'Read the case study',
    ctaHref: 'https://www.colewebdev.com/a-wellness-focused-website-redesign-for-cape-cod-aquatics/',
  },
  {
    client: "Dyer's Beach House",
    location: 'Cape Cod, MA',
    industry: 'Vacation Rental',
    industryHref: 'cape-cod-vacation-rental-web-design.html',
    glyph: '◐',
    summary: "A coastal-themed refresh giving this vacation rental property a booking-ready site that matches the feel of a stay on the water.",
    ctaLabel: 'Read the case study',
    ctaHref: 'https://www.colewebdev.com/dyers-beach-house-website-redesign-a-coastal-refresh/',
  },
  {
    client: 'SVdP Cape Cod',
    location: 'Hyannis, MA',
    industry: 'Nonprofit',
    industryHref: 'cape-cod-nonprofit-web-design.html',
    glyph: '◇',
    summary: "A new WordPress site for the Society of St. Vincent de Paul's Cape Cod chapter, built to make donating, volunteering, and finding help easier for the community they serve.",
    ctaLabel: 'Visit the live site',
    ctaHref: 'https://www.svdpcapecod.com/',
  },
  {
    client: 'The Cape Cod Towel Company',
    location: 'Cape Cod, MA',
    industry: 'Retail / E-Commerce',
    industryHref: 'cape-cod-retail-web-design.html',
    glyph: '◐',
    summary: "An e-commerce build for this Cape Cod retail brand, giving a beach-town product line a real online storefront instead of relying on in-person and marketplace sales alone.",
    ctaLabel: 'Visit the live site',
    ctaHref: 'https://capecodtowelco.com/',
  },
  {
    client: 'Sylvestre Outdoors',
    location: 'Cape Cod, MA',
    industry: 'Outdoor Recreation',
    industryHref: null,
    glyph: '◇',
    summary: "A WordPress site built around Sylvestre Outdoors' fly-fishing guide business — trip booking info, gear, and local expertise front and center.",
    ctaLabel: 'Visit the live site',
    ctaHref: 'https://www.sylvestreoutdoors.com/',
  },
  {
    client: 'Truro Historical Society',
    location: 'Truro, MA',
    industry: 'Nonprofit',
    industryHref: 'cape-cod-nonprofit-web-design.html',
    glyph: '◇',
    summary: "A new website giving the Truro Historical Society a modern home for its exhibits, events, and membership program.",
    ctaLabel: 'Visit the live site',
    ctaHref: 'https://trurohistoricalsociety.org/',
  },
  {
    client: 'Hog Island Beer Co.',
    location: 'Orleans, MA',
    industry: 'Hospitality',
    industryHref: 'cape-cod-hospitality-web-design.html',
    glyph: '◎',
    summary: "A brewery site built to handle what breweries actually need: current tap lists, an event calendar, and a straightforward way to find the taproom.",
    ctaLabel: 'Visit the live site',
    ctaHref: 'https://hogislandbeerco.com/',
  },
  {
    client: 'Idle Times Bike Shop',
    location: 'Wellfleet, MA',
    industry: 'Retail / E-Commerce',
    industryHref: 'cape-cod-retail-web-design.html',
    glyph: '◐',
    summary: "An online rental and retail presence for this longtime Cape Cod bike shop, letting visitors reserve rentals ahead of a Cape trip.",
    ctaLabel: 'Visit the live site',
    ctaHref: 'https://rentals.idletimesbikes.com/bike-rentals/',
  },
  {
    client: 'Center for Coastal Studies',
    location: 'Provincetown, MA',
    industry: 'Nonprofit',
    industryHref: 'cape-cod-nonprofit-web-design.html',
    glyph: '⚙',
    summary: "A website redesign for this marine research and conservation nonprofit, built to present scientific research and conservation programs to both funders and the public.",
    ctaLabel: 'Visit the live site',
    ctaHref: 'https://coastalstudies.org/',
  },
  {
    client: 'Falmouth Jazz',
    location: 'Falmouth, MA',
    industry: 'Arts & Nonprofit',
    industryHref: 'cape-cod-nonprofit-web-design.html',
    glyph: '✎',
    summary: "A new site for the Falmouth Jazz festival and concert series, giving this arts nonprofit a modern hub for tickets, schedules, and season info.",
    ctaLabel: 'Visit the live site',
    ctaHref: 'https://falmouthjazz.org/',
  },
];

function CsCard({ study, index }) {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setVisible(true), index * 40 + 80);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <article className={`cs-card${visible ? ' in' : ''}`}>
      <div className="cs-card-hd">
        <span className="cs-card-glyph" aria-hidden="true">{study.glyph}</span>
        {study.industryHref
          ? <a href={study.industryHref} className="cs-card-industry cs-card-industry--link">{study.industry}</a>
          : <span className="cs-card-industry">{study.industry}</span>
        }
      </div>
      <h3 className="cs-card-title">{study.client}</h3>
      <div className="cs-card-loc">{study.location}</div>
      <p className="cs-card-summary">{study.summary}</p>
      <a href={study.ctaHref} target="_blank" rel="noopener" className="cs-card-cta">
        {study.ctaLabel} <span className="arrow">→</span>
      </a>
    </article>
  );
}

function CaseStudiesPage() {
  return (
    <React.Fragment>
      <Header />

      <section className="cs-hero">
        <div className="shell">
          <span className="eyebrow">Real Clients, Real Work</span>
          <h1 className="cs-hero-hl">Case Studies</h1>
          <p className="cs-hero-sub">
            A sampling of the small businesses and nonprofits we've built for on Cape Cod —
            across wellness, hospitality, retail, and nonprofit work. Full portfolio archive
            available on the <a href="portfolio.html">Portfolio</a> page.
          </p>
        </div>
      </section>

      <section className="cs-section">
        <div className="shell">
          <div className="cs-grid">
            {CASE_STUDIES.map((study, i) => (
              <CsCard key={study.client} study={study} index={i} />
            ))}
          </div>

          <div className="cs-more">
            <p className="cs-more-text">
              Want to see your business <em>here next?</em>
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

const csRoot = ReactDOM.createRoot(document.getElementById('root'));
csRoot.render(<CaseStudiesPage />);
