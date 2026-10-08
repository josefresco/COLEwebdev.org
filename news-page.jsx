/* global React, ReactDOM */

const WP_API = 'https://www.colewebdev.com/wp-json/wp/v2/posts';
const PER_PAGE = 9;

/* Fallback posts used only if the API call fails (CORS, offline, etc.) */
const FALLBACK_POSTS = [
  {
    id: 11151, link: 'https://www.colewebdev.com/a-fresh-look-for-pierce-plumbing-new-logo-website-launch/',
    date: '2026-10-08T09:49:41',
    title: { rendered: 'A Fresh Look for Pierce Plumbing: New Logo &amp; Website Launch' },
    excerpt: { rendered: 'We&#8217;re excited to announce the launch of a brand-new website and logo for Pierce Plumbing, a trusted plumbing company serving Cape Cod.' },
    _embedded: { 'wp:featuredmedia': [{ source_url: 'https://www.colewebdev.com/wp-content/uploads/2026/01/COLEwebdev-Website-Launch-Pierce-Plumbing-SM.jpg' }], 'wp:term': [[{ name: 'New Website Launch' }]] },
  },
  {
    id: 11050, link: 'https://www.colewebdev.com/introducing-the-new-cape-side-music-website/',
    date: '2026-09-24T15:05:41',
    title: { rendered: 'Introducing the New Cape Side Music Website' },
    excerpt: { rendered: 'Based on Cape Cod, Thom Dutton is an accomplished harpist who shares his love of music through performances, published works, and recordings.' },
    _embedded: { 'wp:featuredmedia': [{ source_url: 'https://www.colewebdev.com/wp-content/uploads/2026/09/COLEwebdev-Website-Launch-csm.jpg' }], 'wp:term': [[{ name: 'New Website Launch' }]] },
  },
  {
    id: 10997, link: 'https://www.colewebdev.com/how-to-add-colewebdev-as-a-delegate-user-in-network-solutions/',
    date: '2026-09-11T11:40:59',
    title: { rendered: 'How to Add COLEwebdev as a Delegate User in Network Solutions' },
    excerpt: { rendered: 'Learn how to securely add COLEwebdev as a delegate user in Network Solutions so our team can manage your website, domain, and DNS without needing your password.' },
    _embedded: { 'wp:featuredmedia': [{ source_url: 'https://www.colewebdev.com/wp-content/uploads/2026/09/add-delegate-user-network-solutions.jpg' }], 'wp:term': [[{ name: 'Resources' }]] },
  },
  {
    id: 10906, link: 'https://www.colewebdev.com/why-were-building-all-new-websites-with-divi-5/',
    date: '2026-08-28T10:31:42',
    title: { rendered: 'Why We&#8217;re Building All New Websites with Divi 5' },
    excerpt: { rendered: 'Divi 5 has been rebuilt from the ground up with performance and flexibility in mind. The new architecture allows us to create custom websites that are lean, efficient, and designed to generate results.' },
    _embedded: { 'wp:featuredmedia': [{ source_url: 'https://www.colewebdev.com/wp-content/uploads/2026/08/divi4-divi-5.jpg' }], 'wp:term': [[{ name: 'News' }]] },
  },
  {
    id: 10769, link: 'https://www.colewebdev.com/taking-a-short-break-to-recharge/',
    date: '2026-08-11T08:52:00',
    title: { rendered: 'Taking a Short Break to Recharge' },
    excerpt: { rendered: 'At COLEwebdev, we believe our best work comes from staying energized and inspired.' },
    _embedded: { 'wp:featuredmedia': [{ source_url: 'https://www.colewebdev.com/wp-content/uploads/2026/07/jamaica-vacation-2026.jpg' }], 'wp:term': [[{ name: 'News' }]] },
  },
  {
    id: 10821, link: 'https://www.colewebdev.com/new-website-launch-for-idle-time-bike-shop-cycling-club/',
    date: '2026-08-05T10:15:43',
    title: { rendered: 'New Website Launch for Idle Time Bike Shop Cycling Club' },
    excerpt: { rendered: 'We&#8217;re excited to announce the launch of a brand-new website for the Idle Time Bike Shop Cycling Club!' },
    _embedded: { 'wp:featuredmedia': [{ source_url: 'https://www.colewebdev.com/wp-content/uploads/2026/08/COLEwebdev-Website-Launch-Idle-Times-Bike-Shop-Club-500.jpg' }], 'wp:term': [[{ name: 'New Website Launch' }]] },
  },
  {
    id: 10688, link: 'https://www.colewebdev.com/update-your-website-to-stay-ai-competitive/',
    date: '2026-07-27T08:22:55',
    title: { rendered: 'Update Your Website to Stay AI Competitive' },
    excerpt: { rendered: 'In the age of AI, frequent updates are more important than ever.' },
    _embedded: { 'wp:featuredmedia': [{ source_url: 'https://www.colewebdev.com/wp-content/uploads/2026/07/Update-Your-Website-to-Stay-AI-Competitive.jpg' }], 'wp:term': [[{ name: 'Resources' }]] },
  },
  {
    id: 10673, link: 'https://www.colewebdev.com/colewebdev-launches-new-website-for-animal-hospital-of-orleans/',
    date: '2026-07-22T11:49:25',
    title: { rendered: 'COLEwebdev Launches New Website for Animal Hospital of Orleans' },
    excerpt: { rendered: 'It was time for an update that reflected the high level of care and professionalism that Animal Hospital of Orleans provides every day.' },
    _embedded: { 'wp:featuredmedia': [{ source_url: 'https://www.colewebdev.com/wp-content/uploads/2025/06/animal-hospital-orleans-website-design-build-small.jpg' }], 'wp:term': [[{ name: 'New Website Launch' }]] },
  },
  {
    id: 10654, link: 'https://www.colewebdev.com/how-to-find-a-local-website-designer/',
    date: '2026-07-08T09:32:56',
    title: { rendered: 'How to find a local website designer?' },
    excerpt: { rendered: 'Finding the right person to build your digital storefront can feel overwhelming. You need someone who understands your business goals, your market, and the technical side of development.' },
    _embedded: { 'wp:featuredmedia': [{ source_url: 'https://www.colewebdev.com/wp-content/uploads/2026/07/how-to-find-a-local-website-designer.jpg' }], 'wp:term': [[{ name: 'News' }]] },
  },
];

function decodeHtml(str) {
  return str
    .replace(/<[^>]*>/g, '')
    .replace(/&#8217;/g, '’')
    .replace(/&#8216;/g, '‘')
    .replace(/&#8220;/g, '“')
    .replace(/&#8221;/g, '”')
    .replace(/&#8212;/g, '—')
    .replace(/&#8211;/g, '–')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .trim();
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function getPostMeta(post) {
  const img = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;
  const cats = post._embedded?.['wp:term']?.[0] || [];
  const cat = cats[0]?.name || 'News';
  return { img, cat };
}

function NewsCard({ post }) {
  const { img, cat } = getPostMeta(post);
  const title = decodeHtml(post.title.rendered);
  const excerpt = decodeHtml(post.excerpt.rendered);

  return (
    <a
      className="ns-card"
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="ns-card-img">
        {img
          ? <img src={img} alt={title} loading="lazy" />
          : <div className="ns-card-img-ph" />}
      </div>
      <div className="ns-card-body">
        <div className="ns-card-meta">
          <span className="ns-cat">{cat}</span>
          <span className="ns-date">{formatDate(post.date)}</span>
        </div>
        <h2 className="ns-card-title">{title}</h2>
        <p className="ns-card-excerpt">{excerpt}</p>
        <span className="ns-read-more">Read post <span className="arrow">→</span></span>
      </div>
    </a>
  );
}

function NewsPage() {
  /* Start from the fallback so the pre-rendered page (and crawlers) get real
     posts instead of a loading state; the live API replaces them on load. */
  const [posts, setPosts] = React.useState(FALLBACK_POSTS);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [status, setStatus] = React.useState('ready'); /* loading | ready | error */
  const [loadingMore, setLoadingMore] = React.useState(false);
  const [filter, setFilter] = React.useState('All');
  const [categories, setCategories] = React.useState(() => extractCats(FALLBACK_POSTS));

  function extractCats(data, existing = ['All']) {
    const s = new Set(existing);
    data.forEach(p => (p._embedded?.['wp:term']?.[0] || []).forEach(c => s.add(c.name)));
    return [...s];
  }

  React.useEffect(() => {
    fetch(`${WP_API}?per_page=${PER_PAGE}&page=1&_embed=1`)
      .then(res => {
        const tp = parseInt(res.headers.get('X-WP-TotalPages') || '1', 10);
        setTotalPages(tp);
        return res.json();
      })
      .then(data => {
        if (!Array.isArray(data) || data.length === 0) throw new Error('empty');
        setPosts(data);
        setCategories(extractCats(data));
        setStatus('ready');
      })
      .catch(() => {
        setPosts(FALLBACK_POSTS);
        setCategories(extractCats(FALLBACK_POSTS));
        setTotalPages(1);
        setStatus('ready');
      });
  }, []);

  async function loadMore() {
    const next = page + 1;
    setLoadingMore(true);
    try {
      const res = await fetch(`${WP_API}?per_page=${PER_PAGE}&page=${next}&_embed=1`);
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        setPosts(prev => {
          const merged = [...prev, ...data];
          setCategories(extractCats(merged));
          return merged;
        });
        setPage(next);
      }
    } finally {
      setLoadingMore(false);
    }
  }

  const visible = filter === 'All'
    ? posts
    : posts.filter(p => (p._embedded?.['wp:term']?.[0] || []).some(c => c.name === filter));

  return (
    <React.Fragment>
      <Header />

      {/* ── Intro ── */}
      <section className="ns-intro">
        <div className="shell">
          <span className="eyebrow">Studio Journal</span>
          <h1 className="ns-intro-hl">News &amp; launches.</h1>
        </div>
      </section>

      {/* ── Feed ── */}
      <section className="ns-main">
        <div className="shell">

          {/* Filters */}
          {status === 'ready' && (
            <div className="ns-filters" role="group" aria-label="Filter by category">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`ns-filter-btn${filter === cat ? ' is-active' : ''}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {status === 'loading' && (
            <div className="ns-state">
              <span className="ns-state-dot" />
              Loading posts…
            </div>
          )}

          {status === 'ready' && (
            <React.Fragment>
              {visible.length === 0 ? (
                <div className="ns-state">No posts in this category yet.</div>
              ) : (
                <div className="ns-grid">
                  {visible.map((post) => <NewsCard key={post.id} post={post} />)}
                </div>
              )}

              {filter === 'All' && page < totalPages && (
                <div className="ns-load-more">
                  <button className="btn btn--ghost" onClick={loadMore} disabled={loadingMore}>
                    {loadingMore ? 'Loading…' : 'Load more posts'}
                  </button>
                </div>
              )}
            </React.Fragment>
          )}

        </div>
      </section>

      <NewsletterBanner />
      <Footer />
    </React.Fragment>
  );
}

const nsRoot = createAppRoot(document.getElementById('root'));
nsRoot.render(<NewsPage />);
