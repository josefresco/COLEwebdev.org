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
        </div>
      </main>

      <NewsletterBanner />
      <Footer />
    </React.Fragment>
  );
}

const snRoot = ReactDOM.createRoot(document.getElementById('root'));
snRoot.render(<SocialNewsPage />);
