/* global React, ReactDOM */

const BSKY_HANDLE = 'colewebdev.bsky.social';
const BSKY_API = 'https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed';

function timeAgo(isoString) {
  const diff = Date.now() - new Date(isoString).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days}d ago`;
  const d = new Date(isoString);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function postUrl(post) {
  const rkey = post.uri.split('/').pop();
  return `https://bsky.app/profile/${post.author.handle}/post/${rkey}`;
}

function safeHostname(uri) {
  try { return new URL(uri).hostname; } catch { return uri; }
}

function PostEmbed({ embed }) {
  if (!embed) return null;
  const type = embed.$type;

  if (type === 'app.bsky.embed.images#view' && embed.images?.length) {
    return (
      <div className="sn-embed-imgs">
        {embed.images.slice(0, 4).map((img, i) => (
          <img key={i} src={img.thumb} alt={img.alt || ''} className="sn-embed-img" loading="lazy" />
        ))}
      </div>
    );
  }

  if (type === 'app.bsky.embed.external#view' && embed.external) {
    const ext = embed.external;
    return (
      <a href={ext.uri} target="_blank" rel="noopener noreferrer" className="sn-embed-link">
        {ext.thumb && <img src={ext.thumb} alt="" className="sn-embed-link-img" loading="lazy" />}
        <div className="sn-embed-link-body">
          {ext.title && <div className="sn-embed-link-title">{ext.title}</div>}
          {ext.description && <div className="sn-embed-link-desc">{ext.description}</div>}
          <div className="sn-embed-link-uri">{safeHostname(ext.uri)}</div>
        </div>
      </a>
    );
  }

  return null;
}

function SocialSidebar() {
  return (
    <aside className="sn-sidebar">
      <div className="sn-social-card">
        <p className="sn-social-card-hl">Not on Bluesky?</p>
        <p className="sn-social-card-sub">
          Find us on Instagram, Facebook, or Mastodon — we post there too.
        </p>
        <div className="sn-social-links">
          <a href="https://www.instagram.com/colewebdev" target="_blank" rel="noopener noreferrer" className="sn-social-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            Instagram
          </a>
          <a href="https://www.facebook.com/colewebdev" target="_blank" rel="noopener noreferrer" className="sn-social-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
            </svg>
            Facebook
          </a>
          <a href="https://x.com/colewebdev" target="_blank" rel="noopener noreferrer" className="sn-social-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.26 5.632 5.904-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            X / Twitter
          </a>
          <a href="https://mastodon.social/@colewebdev" target="_blank" rel="noopener noreferrer" className="sn-social-link">
            <svg width="18" height="18" viewBox="0 0 74 79" fill="currentColor" aria-hidden="true">
              <path d="M73.7014 17.4323C72.5616 9.05152 65.1774 2.4469 56.424 1.1671C54.9472 0.950843 49.3518 0.163818 36.3901 0.163818H36.2933C23.3281 0.163818 20.5465 0.950843 19.0697 1.1671C10.56 2.41145 2.78877 8.34604 0.903306 16.826C-0.00357854 21.0022 -0.100361 25.6322 0.068112 29.8793C0.308275 35.9699 0.354874 42.0498 0.91406 48.1156C1.30064 52.1448 1.97502 56.1419 2.93215 60.0769C4.72441 67.3445 11.9795 73.3925 19.0876 75.86C26.6979 78.4332 34.8821 78.8603 42.724 77.0937C43.5866 76.8952 44.4398 76.6647 45.2833 76.4024C47.1867 75.8033 49.4199 75.1332 51.0616 73.9562C51.0841 73.9397 51.1026 73.9184 51.1156 73.8937C51.1286 73.869 51.1359 73.8415 51.1368 73.8135V67.9481C51.1364 67.9228 51.1302 67.8979 51.1185 67.8752C51.1068 67.8525 51.0898 67.8327 51.0691 67.8172C51.0484 67.8017 51.0245 67.7908 50.999 67.7854C50.9735 67.78 50.9472 67.7803 50.9218 67.7862C46.4704 68.8513 41.9084 69.3782 37.3318 69.3556C29.2862 69.3556 27.1585 65.5309 26.5457 63.9905C26.0523 62.6983 25.7458 61.3411 25.6363 59.9624C25.6357 59.9364 25.6415 59.9107 25.6532 59.8874C25.6648 59.8641 25.682 59.8439 25.7031 59.8285C25.7242 59.813 25.7486 59.8027 25.7745 59.7983C25.8004 59.7939 25.8269 59.7956 25.852 59.8031C30.2064 60.8582 34.6653 61.3936 39.1384 61.4002C40.2079 61.4002 41.2768 61.4002 42.3457 61.3715C46.8586 61.2439 51.6201 61.0108 56.0507 60.1648C56.1567 60.1437 56.2628 60.1226 56.3588 60.0969C63.4844 58.6686 70.2288 54.2388 70.8453 44.9015C70.8703 44.5022 70.9323 40.7487 70.9323 40.3334C70.9409 38.8776 71.3701 31.1622 70.8453 23.5234C70.843 23.4952 70.8333 23.468 70.8173 23.4446C70.8012 23.4213 70.7792 23.4027 70.7534 23.3908L73.7014 17.4323Z" />
              <path d="M61.4217 31.1927V49.8596H54.5847V31.6552C54.5847 27.8875 52.9389 25.9699 49.6306 25.9699C46.0001 25.9699 44.1808 28.2643 44.1808 32.7964V43.1467H37.3867V32.7964C37.3867 28.2643 35.5631 25.9699 31.9326 25.9699C28.6469 25.9699 26.9973 27.8875 26.9973 31.6552V49.8596H20.1602V31.1927C20.1602 27.4263 21.0892 24.4281 22.9531 22.1981C24.8718 19.968 27.4368 18.8269 30.6709 18.8269C34.4077 18.8269 37.2378 20.2636 39.0971 23.1376L40.784 26.0085L42.4709 23.1376C44.3302 20.2636 47.1603 18.8269 50.8972 18.8269C54.1271 18.8269 56.6921 19.968 58.6157 22.1981C60.4753 24.4281 61.4217 27.4263 61.4217 31.1927Z" fill="white" />
            </svg>
            Mastodon
          </a>
        </div>
      </div>
    </aside>
  );
}

function SocialNewsPage() {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [cursor, setCursor] = React.useState(null);
  const [loadingMore, setLoadingMore] = React.useState(false);

  function fetchPosts(cur) {
    const params = new URLSearchParams({ actor: BSKY_HANDLE, limit: 20 });
    if (cur) params.set('cursor', cur);
    return fetch(`${BSKY_API}?${params}`)
      .then(res => {
        if (!res.ok) throw new Error(`API error ${res.status}`);
        return res.json();
      });
  }

  React.useEffect(() => {
    fetchPosts()
      .then(data => {
        setPosts(data.feed.filter(item => item.post?.record != null));
        setCursor(data.cursor || null);
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  function loadMore() {
    if (!cursor || loadingMore) return;
    setLoadingMore(true);
    fetchPosts(cursor)
      .then(data => {
        setPosts(prev => [...prev, ...data.feed.filter(item => item.post?.record != null)]);
        setCursor(data.cursor || null);
      })
      .catch(e => setError(e.message))
      .finally(() => setLoadingMore(false));
  }

  return (
    <React.Fragment>
      <Header />

      <div className="sn-intro">
        <div className="shell">
          <span className="eyebrow">Social News</span>
          <h1 className="sn-intro-hl">From our <em>Bluesky.</em></h1>
          <p className="sn-intro-sub">
            Live from the COLEwebdev team.{' '}
            <a
              href={`https://bsky.app/profile/${BSKY_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="sn-follow-link"
            >
              Follow us on Bluesky →
            </a>
          </p>
        </div>
      </div>

      <main className="sn-main">
        <div className="shell">
          <div className="sn-layout">
          <div className="sn-feed">

            {loading && (
              <div className="sn-state">
                <div className="sn-state-dot" />
                Loading feed…
              </div>
            )}

            {error && (
              <div className="sn-state">Could not load feed — {error}</div>
            )}

            {!loading && !error && posts.length === 0 && (
              <div className="sn-state">No posts found.</div>
            )}

            {posts.map((item, idx) => {
              const post = item.post;
              const isRepost = !!item.reason;
              const text = post.record?.text || '';
              return (
                <article key={post.uri + idx} className="sn-post">
                  {isRepost && (
                    <div className="sn-repost-label">↻ Reposted</div>
                  )}
                  <div className="sn-post-header">
                    {post.author.avatar && (
                      <img src={post.author.avatar} alt="" className="sn-avatar" loading="lazy" />
                    )}
                    <div className="sn-author">
                      <div className="sn-author-name">{post.author.displayName || post.author.handle}</div>
                      <div className="sn-author-handle">@{post.author.handle}</div>
                    </div>
                    <time className="sn-time" dateTime={post.record.createdAt}>
                      {timeAgo(post.record.createdAt)}
                    </time>
                  </div>
                  {text ? <p className="sn-post-text">{text}</p> : null}
                  <PostEmbed embed={post.embed} />
                  <div className="sn-post-footer">
                    <div className="sn-stats">
                      <span className="sn-stat">♥ {post.likeCount || 0}</span>
                      <span className="sn-stat">↻ {post.repostCount || 0}</span>
                      <span className="sn-stat">↩ {post.replyCount || 0}</span>
                    </div>
                    <a href={postUrl(post)} target="_blank" rel="noopener noreferrer" className="sn-view-link">
                      View on Bluesky →
                    </a>
                  </div>
                </article>
              );
            })}

            {cursor && !loading && (
              <div className="sn-load-more">
                <button className="btn btn--primary" onClick={loadMore} disabled={loadingMore}>
                  {loadingMore ? 'Loading…' : 'Load more'}
                </button>
              </div>
            )}

          </div>
          <SocialSidebar />
          </div>
        </div>
      </main>

      <NewsletterBanner />
      <Footer />
    </React.Fragment>
  );
}

const snRoot = ReactDOM.createRoot(document.getElementById('root'));
snRoot.render(<SocialNewsPage />);
