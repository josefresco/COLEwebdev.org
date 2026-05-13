/* global React, ReactDOM */

const WP_API = 'https://www.colewebdev.com/wp-json/wp/v2/posts';
const PER_PAGE = 9;

/* Fallback posts used only if the API call fails (CORS, offline, etc.) */
const FALLBACK_POSTS = [
  {
    id: 10216, link: 'https://www.colewebdev.com/a-fresh-look-for-the-truro-historical-society-website/',
    date: '2026-04-30T09:53:54',
    title: { rendered: 'A Fresh Look for the Truro Historical Society Website' },
    excerpt: { rendered: 'The Truro Historical Society recently received a much-needed website redesign that brings new life to its online presence while honoring the town&#8217;s rich history.' },
    _embedded: { 'wp:featuredmedia': [{ source_url: 'https://www.colewebdev.com/wp-content/uploads/2025/05/truro-historical-society-custom-website-launch-cape-cod-small.jpg' }], 'wp:term': [[{ name: 'New Website Launch' }]] },
  },
  {
    id: 10357, link: 'https://www.colewebdev.com/do-people-still-hire-web-designers/',
    date: '2026-04-15T09:45:48',
    title: { rendered: 'Do People Still Hire Web Designers?' },
    excerpt: { rendered: 'Short answer: yes&#8212;more than ever. But why people hire them, and what they expect, has evolved.' },
    _embedded: { 'wp:featuredmedia': [{ source_url: 'https://www.colewebdev.com/wp-content/uploads/2021/06/colewebdev-photo-shoot-2021-4.jpg' }], 'wp:term': [[{ name: 'News' }]] },
  },
  {
    id: 10214, link: 'https://www.colewebdev.com/a-wellness-focused-website-redesign-for-cape-cod-aquatics/',
    date: '2026-04-08T09:39:59',
    title: { rendered: 'A Wellness-Focused Website Redesign for Cape Cod Aquatics' },
    excerpt: { rendered: 'The redesigned website now reflects what Cape Cod Aquatics does best: helping customers invest in their health and wellness with high-quality products and reliable service.' },
    _embedded: { 'wp:featuredmedia': [{ source_url: 'https://www.colewebdev.com/wp-content/uploads/2025/10/cape-cod-aquatics-website-design-build-small.jpg' }], 'wp:term': [[{ name: 'New Website Launch' }]] },
  },
  {
    id: 10212, link: 'https://www.colewebdev.com/dyers-beach-house-website-redesign-a-coastal-refresh/',
    date: '2026-03-25T09:24:17',
    title: { rendered: 'Dyer&#8217;s Beach House Website Redesign: A Coastal Refresh' },
    excerpt: { rendered: 'Our goal was to create a modern, unified website that captures the unique character of Dyer&#8217;s Beach House while making it easier for visitors to explore the properties and book their stay.' },
    _embedded: { 'wp:featuredmedia': [{ source_url: 'https://www.colewebdev.com/wp-content/uploads/2025/09/dyers-beach-house-website-design-build-wordpress-cape-cod-500.jpg' }], 'wp:term': [[{ name: 'New Website Launch' }]] },
  },
  {
    id: 10255, link: 'https://www.colewebdev.com/what-is-the-average-cost-of-a-web-designer/',
    date: '2026-03-19T12:37:31',
    title: { rendered: 'What is the average cost of a web designer?' },
    excerpt: { rendered: 'If you&#8217;re a business owner in Eastham, Wellfleet, or anywhere on Cape Cod, you&#8217;ve probably asked the same question: &#8220;What should a website actually cost?&#8221;' },
    _embedded: { 'wp:featuredmedia': [{ source_url: 'https://www.colewebdev.com/wp-content/uploads/2026/03/What-is-the-average-cost-of-a-web-designer.jpg' }], 'wp:term': [[{ name: 'News' }]] },
  },
  {
    id: 10208, link: 'https://www.colewebdev.com/a-modern-refresh-for-cornerstone-fundraising/',
    date: '2026-03-11T09:23:28',
    title: { rendered: 'A Modern Refresh for Cornerstone Fundraising' },
    excerpt: { rendered: 'We partnered with Cornerstone Fundraising to transform their outdated WordPress site into a modern, flexible platform designed to better represent their brand.' },
    _embedded: { 'wp:featuredmedia': [{ source_url: 'https://www.colewebdev.com/wp-content/uploads/2026/03/cornerstone-fundraising-website-design-cape-cod-small.jpg' }], 'wp:term': [[{ name: 'New Website Launch' }]] },
  },
  {
    id: 10190, link: 'https://www.colewebdev.com/celebrating-20-years-of-website-development-and-were-just-getting-started/',
    date: '2026-02-20T00:00:00',
    title: { rendered: 'Celebrating 20 Years of Website Development &#8212; And We&#8217;re Just Getting Started' },
    excerpt: { rendered: 'Built on Custom Design, Powered by Performance. 20 Years Strong &#8212; And Always Evolving.' },
    _embedded: { 'wp:featuredmedia': [{ source_url: 'https://www.colewebdev.com/wp-content/uploads/2026/02/20-years-colewebdev.jpg' }], 'wp:term': [[{ name: 'News' }]] },
  },
  {
    id: 10185, link: 'https://www.colewebdev.com/form-february-please-test-your-contact-forms/',
    date: '2026-02-04T00:00:00',
    title: { rendered: 'Form February: Please Test Your Contact Forms' },
    excerpt: { rendered: 'Our annual reminder: test your website contact forms today. It takes two minutes and could save you months of missed leads.' },
    _embedded: { 'wp:featuredmedia': [{ source_url: 'https://www.colewebdev.com/wp-content/uploads/2026/02/formfeb.png' }], 'wp:term': [[{ name: 'News' }]] },
  },
  {
    id: 10180, link: 'https://www.colewebdev.com/colewebdev-2025-year-in-review/',
    date: '2026-01-06T00:00:00',
    title: { rendered: 'COLEwebdev 2025 Year in Review' },
    excerpt: { rendered: 'We continued designing effective websites that help businesses and organizations expand their reach and grow their brands across Cape Cod and beyond.' },
    _embedded: { 'wp:featuredmedia': [{ source_url: 'https://www.colewebdev.com/wp-content/uploads/2026/01/colewebdev-2025-recap.jpg' }], 'wp:term': [[{ name: 'News' }]] },
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

function NewsCard({ post, index }) {
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const t = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } },
        { threshold: 0.08 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, index * 60);
    return () => clearTimeout(t);
  }, [index]);

  const { img, cat } = getPostMeta(post);
  const title = decodeHtml(post.title.rendered);
  const excerpt = decodeHtml(post.excerpt.rendered);

  return (
    <a
      ref={ref}
      className="ns-card"
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease ${index * 0.04}s, transform 0.5s ease ${index * 0.04}s`,
      }}
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
  const [posts, setPosts] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [status, setStatus] = React.useState('loading'); /* loading | ready | error */
  const [loadingMore, setLoadingMore] = React.useState(false);
  const [filter, setFilter] = React.useState('All');
  const [categories, setCategories] = React.useState(['All']);

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
                  {visible.map((post, i) => <NewsCard key={post.id} post={post} index={i} />)}
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

const nsRoot = ReactDOM.createRoot(document.getElementById('root'));
nsRoot.render(<NewsPage />);
