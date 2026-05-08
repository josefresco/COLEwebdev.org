/* global React, ReactDOM */

const FILTERS = [
  { key: 'all',         label: 'All Work' },
  { key: 'wordpress',   label: 'WordPress' },
  { key: 'ecommerce',   label: 'E-Commerce' },
  { key: 'hospitality', label: 'Hospitality' },
  { key: 'nonprofit',   label: 'Nonprofit' },
  { key: 'services',    label: 'Professional' },
];

const PROJECTS = [
  /* ── With real images ──────────────────────────────────── */
  {
    title: 'Cape Cod Aquatics',
    meta: 'Cape Cod, MA · 2026',
    cat: 'wordpress',
    tags: [{ label: 'NEW LAUNCH', cls: 'tag--navy' }, { label: 'WELLNESS' }, { label: 'WORDPRESS' }],
    img: 'https://www.colewebdev.com/wp-content/uploads/2025/10/cape-cod-aquatics-website-design-build-small.jpg',
    href: 'https://capecodaquatics.com/',
    ctaLabel: 'Read case study',
    ctaHref: 'https://www.colewebdev.com/a-wellness-focused-website-redesign-for-cape-cod-aquatics/',
  },
  {
    title: 'SVdP Cape Cod',
    meta: 'Hyannis, MA',
    cat: 'nonprofit',
    tags: [{ label: 'NONPROFIT', cls: 'tag--green' }, { label: 'WORDPRESS' }],
    img: 'https://www.colewebdev.com/wp-content/uploads/2025/04/svdp-cape-cod-website-design-build-500.jpg',
    href: 'https://www.svdpcapecod.com/',
    ctaLabel: 'View site',
  },
  {
    title: 'The Cape Cod Towel Co.',
    meta: 'Cape Cod, MA',
    cat: 'ecommerce',
    tags: [{ label: 'E-COMMERCE', cls: 'tag--orange' }, { label: 'RETAIL' }],
    img: 'https://www.colewebdev.com/wp-content/uploads/2024/07/cape-cod-towel-company-website-design-xsmll.jpg',
    href: 'https://capecodtowelco.com/',
    ctaLabel: 'View site',
  },
  {
    title: 'Sylvestre Outdoors',
    meta: 'Cape Cod, MA',
    cat: 'wordpress',
    tags: [{ label: 'OUTDOORS', cls: 'tag--navy' }, { label: 'WORDPRESS' }],
    img: 'https://www.colewebdev.com/wp-content/uploads/2025/04/sylvestre-fly-fishing-website-design-build-cape-cod-500.jpg',
    href: 'https://www.sylvestreoutdoors.com/',
    ctaLabel: 'View site',
  },
  {
    title: "Dyer's Beach House",
    meta: 'Cape Cod, MA',
    cat: 'hospitality',
    tags: [{ label: 'HOSPITALITY' }, { label: 'RENTALS' }],
    img: 'https://www.colewebdev.com/wp-content/uploads/2025/09/dyers-beach-house-website-design-build-wordpress-cape-cod-500.jpg',
    href: 'https://www.colewebdev.com/dyers-beach-house-website-redesign-a-coastal-refresh/',
    ctaLabel: 'Read case study',
  },
  {
    title: 'Truro Historical Society',
    meta: 'Truro, MA',
    cat: 'nonprofit',
    tags: [{ label: 'NONPROFIT', cls: 'tag--green' }, { label: 'WORDPRESS' }],
    img: 'https://www.colewebdev.com/wp-content/uploads/2025/05/truro-historical-society-custom-website-launch-cape-cod-small.jpg',
    href: 'https://trurohistoricalsociety.org/',
    ctaLabel: 'View site',
  },
  {
    title: 'Hog Island Beer Co.',
    meta: 'Orleans, MA',
    cat: 'hospitality',
    tags: [{ label: 'HOSPITALITY' }, { label: 'BREWERY' }],
    img: 'https://www.colewebdev.com/wp-content/uploads/2024/01/hog-island-beer-website-launch-cape-cod-smll-jpg.webp',
    href: 'https://hogislandbeerco.com/',
    ctaLabel: 'View site',
  },
  {
    title: 'Idle Times Bike Shop',
    meta: 'Outer Cape, MA',
    cat: 'ecommerce',
    tags: [{ label: 'E-COMMERCE', cls: 'tag--orange' }, { label: 'RETAIL' }],
    img: 'https://www.colewebdev.com/wp-content/uploads/2024/11/idle-times-bike-shop-website-revamp-cape-cod-2024-smll.jpg',
    href: 'https://www.idletimesbikes.com/',
    ctaLabel: 'View site',
  },

  /* ── With scraped images ────────────────────────────────── */
  {
    title: 'Dolphin Fleet Whale Watch',
    meta: 'Provincetown, MA',
    cat: 'wordpress',
    tags: [{ label: 'TOURISM' }, { label: 'WORDPRESS' }],
    img: 'https://www.colewebdev.com/wp-content/uploads/2018/09/dolphin-fleet-whale-watch-website-design-1.jpg',
    href: 'https://whalewatch.com/',
    ctaLabel: 'View site',
  },
  {
    title: 'Truro Vineyards',
    meta: 'Truro, MA',
    cat: 'hospitality',
    tags: [{ label: 'HOSPITALITY' }, { label: 'WINERY' }],
    img: 'https://www.colewebdev.com/wp-content/uploads/2021/05/truro-vineyards-website-design-cape-cod-xsmall.jpg',
    href: 'https://trurovineyardsofcapecod.com/',
    ctaLabel: 'View site',
  },
  {
    title: 'Wellfleet Chamber of Commerce',
    meta: 'Wellfleet, MA',
    cat: 'wordpress',
    tags: [{ label: 'LOCAL ORG' }, { label: 'WORDPRESS' }],
    img: 'https://www.colewebdev.com/wp-content/uploads/2019/05/wellfleet-chamber-cape-cod-website.jpg',
    href: 'https://wellfleetchamber.com/',
    ctaLabel: 'View site',
  },
  {
    title: 'Safe Harbor Law',
    meta: 'Cape Cod, MA',
    cat: 'services',
    tags: [{ label: 'LEGAL' }, { label: 'WORDPRESS' }],
    img: 'https://www.colewebdev.com/wp-content/uploads/2023/04/safe-harbor-law-website-design-cape-cod-xsmall-jpg.webp',
    href: 'https://safeharborlaw.com/',
    ctaLabel: 'View site',
  },
  {
    title: 'Long Point Wealth Mgmt.',
    meta: 'Cape Cod, MA',
    cat: 'services',
    tags: [{ label: 'FINANCIAL' }, { label: 'WORDPRESS' }],
    img: 'https://www.colewebdev.com/wp-content/uploads/2020/04/long-point-wealth-management-website-cape-cod-small.jpg',
    href: 'https://longpointwm.com/',
    ctaLabel: 'View site',
  },
  {
    title: 'Cape Mediation',
    meta: 'Cape Cod, MA',
    cat: 'services',
    tags: [{ label: 'LEGAL' }, { label: 'NONPROFIT', cls: 'tag--green' }],
    img: 'https://www.colewebdev.com/wp-content/uploads/2020/03/cape-mediation-wordpress-website-design.jpg',
    href: 'https://capemediation.org/',
    ctaLabel: 'View site',
  },
  {
    title: 'Dr. Moldover',
    meta: 'Cape Cod, MA',
    cat: 'services',
    tags: [{ label: 'MEDICAL' }, { label: 'WORDPRESS' }],
    img: 'https://www.colewebdev.com/wp-content/uploads/2020/04/dr-moldover-website-launch-small.jpg',
    href: 'https://drmoldover.com/',
    ctaLabel: 'View site',
  },
  {
    title: 'Ptown Bachelorette',
    meta: 'Provincetown, MA',
    cat: 'hospitality',
    tags: [{ label: 'HOSPITALITY' }, { label: 'EVENTS' }],
    img: 'https://www.colewebdev.com/wp-content/uploads/2025/05/bachelorette-party-website-design-build-cape-cod-provincetown-xsmall.jpg',
    href: 'https://ptownbachelorette.com/',
    ctaLabel: 'View site',
  },
  {
    title: 'Basco Grill',
    meta: 'Cape Cod, MA',
    cat: 'hospitality',
    tags: [{ label: 'RESTAURANT' }, { label: 'WORDPRESS' }],
    img: 'https://www.colewebdev.com/wp-content/uploads/2020/04/basco-grill-website-design-cape-cod-small.jpg',
    href: 'https://bascogrill.com/',
    ctaLabel: 'View site',
  },
  {
    title: 'The Marshside',
    meta: 'Dennis, MA',
    cat: 'hospitality',
    tags: [{ label: 'RESTAURANT' }, { label: 'WORDPRESS' }],
    img: 'https://www.colewebdev.com/wp-content/uploads/2018/09/marshside-restaurant-web-design-cape-cod.jpg',
    href: 'https://themarshside.com/',
    ctaLabel: 'View site',
  },
  {
    title: "Cuffy's of Cape Cod",
    meta: 'Cape Cod, MA',
    cat: 'ecommerce',
    tags: [{ label: 'E-COMMERCE', cls: 'tag--orange' }, { label: 'RETAIL' }],
    img: 'https://www.colewebdev.com/wp-content/uploads/2018/09/cuffys-cape-cod-website-design.jpg',
    href: 'https://cuffys.com/',
    ctaLabel: 'View site',
  },
  {
    title: 'Nauset Disposal',
    meta: 'Eastham, MA',
    cat: 'wordpress',
    tags: [{ label: 'LOCAL SERVICE' }, { label: 'WORDPRESS' }],
    img: 'https://www.colewebdev.com/wp-content/uploads/2021/03/nauset-disposal-website-launch-2021-3.jpg',
    href: 'https://nausetdisposal.com/',
    ctaLabel: 'View site',
  },
  {
    title: 'TPC Contracting',
    meta: 'Cape Cod, MA',
    cat: 'wordpress',
    tags: [{ label: 'CONSTRUCTION' }, { label: 'WORDPRESS' }],
    img: 'https://www.colewebdev.com/wp-content/uploads/2023/07/tpc-contracting-cape-cod-website-design-xsmall-jpg.webp',
    href: 'https://tpconstructioncapecod.com/',
    ctaLabel: 'View site',
  },
  {
    title: 'Ryley Construction',
    meta: 'Cape Cod, MA',
    cat: 'wordpress',
    tags: [{ label: 'CONSTRUCTION' }, { label: 'WORDPRESS' }],
    img: 'https://www.colewebdev.com/wp-content/uploads/2020/07/ryley-custom-building-med.jpg',
    href: 'https://ryleyconstruction.com/',
    ctaLabel: 'View site',
  },
  {
    title: 'Grassroots Irrigation',
    meta: 'Cape Cod, MA',
    cat: 'wordpress',
    tags: [{ label: 'HOME & GARDEN' }, { label: 'WORDPRESS' }],
    img: 'https://www.colewebdev.com/wp-content/uploads/2023/01/grassroots-irrigation-cape-cod-website-design-small.jpg',
    href: 'https://grassrootsirrigationinc.com/',
    ctaLabel: 'View site',
  },
  {
    title: 'Cape Dreams Building Design',
    meta: 'Cape Cod, MA',
    cat: 'wordpress',
    tags: [{ label: 'ARCHITECTURE' }, { label: 'WORDPRESS' }],
    img: 'https://www.colewebdev.com/wp-content/uploads/2024/07/Cape-Dreams-Building-Design-Website-Build-xsmll.jpg',
    href: 'https://capedreamsbd.com/',
    ctaLabel: 'View site',
  },
  {
    title: 'Center for Coastal Studies',
    meta: 'Provincetown, MA',
    cat: 'nonprofit',
    tags: [{ label: 'NONPROFIT', cls: 'tag--green' }, { label: 'RESEARCH' }],
    img: 'https://www.colewebdev.com/wp-content/uploads/2025/05/coastal-studies-website-design-build-cape-cod-small.jpg',
    href: 'https://coastalstudies.org/',
    ctaLabel: 'View site',
  },
  {
    title: 'APCC',
    meta: 'Cape Cod, MA',
    cat: 'nonprofit',
    tags: [{ label: 'NONPROFIT', cls: 'tag--green' }, { label: 'ENVIRONMENT' }],
    img: 'https://www.colewebdev.com/wp-content/uploads/2020/07/apcc-new-website-launch-design-cape-cod.jpg',
    href: 'https://apcc.org/',
    ctaLabel: 'View site',
  },
  {
    title: 'Cape Cod Foundation',
    meta: 'Yarmouth Port, MA',
    cat: 'nonprofit',
    tags: [{ label: 'NONPROFIT', cls: 'tag--green' }, { label: 'COMMUNITY' }],
    img: 'https://www.colewebdev.com/wp-content/uploads/2020/03/cape-cod-foundation-website-build-cape-cod-2.png',
    href: 'https://capecodfoundation.org/',
    ctaLabel: 'View site',
  },
  {
    title: 'Carver Public Schools',
    meta: 'Carver, MA',
    cat: 'nonprofit',
    tags: [{ label: 'EDUCATION' }, { label: 'WORDPRESS' }],
    img: 'https://www.colewebdev.com/wp-content/uploads/2019/10/website-build-carver-public-schools.jpg',
    href: 'https://carver.org/',
    ctaLabel: 'View site',
  },
  {
    title: 'Falmouth Jazz',
    meta: 'Falmouth, MA',
    cat: 'nonprofit',
    tags: [{ label: 'ARTS & CULTURE' }, { label: 'NONPROFIT', cls: 'tag--green' }],
    img: 'https://www.colewebdev.com/wp-content/uploads/2025/10/falmouth-jazz-website-design-build-small.jpg',
    href: 'https://falmouthjazz.org/',
    ctaLabel: 'View site',
  },
  {
    title: 'Jobi Pottery',
    meta: 'Cape Cod, MA',
    cat: 'wordpress',
    tags: [{ label: 'ARTS & CRAFTS' }, { label: 'WORDPRESS' }],
    img: 'https://www.colewebdev.com/wp-content/uploads/2021/04/jobi-pottery-website-launch-cape-cod-designer-1.jpg',
    href: 'https://jobipottery.com/',
    ctaLabel: 'View site',
  },
  {
    title: 'The Wicked Oyster',
    meta: 'Wellfleet, MA',
    cat: 'hospitality',
    tags: [{ label: 'RESTAURANT' }, { label: 'E-COMMERCE', cls: 'tag--orange' }],
    img: 'https://www.colewebdev.com/wp-content/uploads/2024/07/wicked-oyster-restaurant-website-design-cape-cod-xsmll.jpg',
    href: 'https://thewickedo.com/',
    ctaLabel: 'View site',
  },
  {
    title: 'The Southfleet',
    meta: 'South Wellfleet, MA',
    cat: 'hospitality',
    tags: [{ label: 'LODGING' }, { label: 'RESERVATIONS' }],
    img: 'https://www.colewebdev.com/wp-content/uploads/2019/04/southfleet-new-website-cape-cod-motel-1.jpg',
    href: 'https://southfleetmotorinn.com/',
    ctaLabel: 'View site',
  },
];

const PH_CLASS = {
  wordpress:   'ph-wp',
  ecommerce:   'ph-ec',
  hospitality: 'ph-ho',
  nonprofit:   'ph-np',
  services:    'ph-sv',
};

function getInitials(title) {
  const words = title.replace(/[^a-zA-Z\s]/g, '').split(/\s+/).filter(Boolean);
  if (words.length >= 2) return words[0][0].toUpperCase() + words[1][0].toUpperCase();
  return (words[0] || '?')[0].toUpperCase();
}

function PfCard({ project, index }) {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setVisible(true), index * 40 + 80);
    return () => clearTimeout(t);
  }, [index]);

  const href = project.ctaHref || project.href;

  return (
    <article className={`pf-card${visible ? ' in' : ''}`}>
      <div className="pf-thumb">
        {project.img
          ? <img src={project.img} alt={project.title} loading="lazy" />
          : (
            <div className={`pf-ph ${PH_CLASS[project.cat] || 'ph-wp'}`}>
              <span className="pf-init">{getInitials(project.title)}</span>
            </div>
          )
        }
      </div>
      <div className="pf-body">
        <div className="pf-tags-row">
          {project.tags.map((t, i) => (
            <span key={i} className={`tag ${t.cls || ''}`}>{t.label}</span>
          ))}
        </div>
        <h3 className="pf-title">{project.title}</h3>
        {project.meta && <div className="pf-loc">{project.meta}</div>}
        <a href={href} target="_blank" rel="noopener" className="pf-cta">
          {project.ctaLabel} <span className="pf-arrow">→</span>
        </a>
      </div>
    </article>
  );
}

function PortfolioPage() {
  const [active, setActive] = React.useState('all');

  const counts = React.useMemo(() => {
    const c = { all: PROJECTS.length };
    PROJECTS.forEach(p => { c[p.cat] = (c[p.cat] || 0) + 1; });
    return c;
  }, []);

  const filtered = React.useMemo(
    () => active === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === active),
    [active]
  );

  const filterLabel = FILTERS.find(f => f.key === active)?.label || 'All Work';

  return (
    <React.Fragment>
      <Header />

      <section className="pfhero">
        <div className="shell">
          <div className="pfhero-grid">
            <div>
              <span className="eyebrow">Our Work</span>
              <p className="pfhero-num">700<sup>+</sup></p>
              <p className="pfhero-sub">
                Sites launched for small businesses on Cape Cod &amp; the Islands since 2006.
              </p>
            </div>
            <div className="pfhero-right">
              <p className="pfhero-label">Filter by category</p>
              <div className="pf-filters">
                {FILTERS.map(f => (
                  <button
                    key={f.key}
                    className={`pf-filter${active === f.key ? ' active' : ''}`}
                    onClick={() => setActive(f.key)}
                  >
                    {f.label}
                    {counts[f.key] != null && (
                      <span className="ct">{counts[f.key]}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pf-section">
        <div className="shell">
          <div className="pf-meta-row">
            <span className="pf-count">
              Showing {filtered.length} of {PROJECTS.length} projects
              {active !== 'all' ? ` · ${filterLabel}` : ''}
            </span>
            <
              href="https://www.colewebdev.com/portfolio/"
              target="_blank"
              rel="noopener"
              className="pf-cta"
              style={{ fontSize: 12 }}
            >
              Full archive on colewebdev.com <span className="pf-arrow">→</span>
            </a>
          </div>

          <div className="pf-grid">
            {filtered.map((p, i) => (
              <PfCard key={`${p.title}-${active}`} project={p} index={i} />
            ))}
          </div>

          <div className="pf-more">
            <p className="pf-more-text">
              Ready to build something your customers will <em>remember?</em>
            </p>
            <a className="btn btn--primary" href="index.html#cta">
              Start a project <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}

const pfRoot = ReactDOM.createRoot(document.getElementById('root'));
pfRoot.render(<PortfolioPage />);
