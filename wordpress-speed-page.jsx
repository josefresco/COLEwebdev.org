/* global React, ReactDOM */

const WPS_OPTIMIZATIONS = [
  {
    icon: '◎',
    bg: 'rgba(14,42,74,0.10)',
    color: '#0E2A4A',
    title: 'Image Optimization',
    body: 'Convert to WebP, lazy-load off-screen images, resize to display dimensions, and serve from CDN. Images are usually the single biggest drag on load time.',
  },
  {
    icon: '↗',
    bg: 'rgba(242,107,31,0.12)',
    color: '#F26B1F',
    title: 'Server-Level Caching',
    body: 'Page cache, object cache, and browser cache configured at the server layer, not through a conflicting plugin. Pages load in milliseconds for returning visitors.',
  },
  {
    icon: '◧',
    bg: 'rgba(123,192,67,0.14)',
    color: '#5DA02E',
    title: 'Code Minification',
    body: 'CSS, JavaScript, and HTML stripped of whitespace and comments. Render-blocking scripts deferred or loaded asynchronously so the browser paints immediately.',
  },
  {
    icon: '◇',
    bg: 'rgba(14,42,74,0.10)',
    color: '#0E2A4A',
    title: 'Plugin Audit',
    body: 'Most WordPress slowdowns trace back to poorly-coded plugins. We audit every active plugin, remove unnecessary ones, and replace heavy ones with lighter alternatives.',
  },
  {
    icon: '↻',
    bg: 'rgba(242,107,31,0.12)',
    color: '#F26B1F',
    title: 'Database Optimization',
    body: 'Clean out post revisions, spam comments, orphaned data, and expired transients. A lean database is a fast database, especially for dynamic pages.',
  },
  {
    icon: '✦',
    bg: 'rgba(123,192,67,0.14)',
    color: '#5DA02E',
    title: 'Core Web Vitals',
    body: 'LCP, INP, and CLS addressed specifically, not just overall PageSpeed. Google uses these signals in ranking, and they directly affect how visitors perceive your site.',
  },
  {
    icon: '⬡',
    bg: 'rgba(14,42,74,0.10)',
    color: '#0E2A4A',
    title: 'CDN Configuration',
    body: 'Static assets (images, CSS, fonts, JS) delivered from global edge nodes closest to your visitors. Fewer round trips, faster everything.',
  },
  {
    icon: '◐',
    bg: 'rgba(123,192,67,0.14)',
    color: '#5DA02E',
    title: 'Hosting Upgrade Path',
    body: 'Sometimes the bottleneck is the server itself. If your current host is the problem, we can migrate you to purpose-built WordPress infrastructure. No downtime.',
  },
];

const WPS_VITALS = [
  {
    key: 'LCP',
    name: 'Largest Contentful Paint',
    target: '< 2.5s',
    desc: 'How fast the main content loads. The metric most closely tied to perceived speed, and the one visitors notice first.',
  },
  {
    key: 'INP',
    name: 'Interaction to Next Paint',
    target: '< 200ms',
    desc: 'How responsive the page feels when a visitor clicks or taps. Google\'s primary measure of interactivity since 2024.',
  },
  {
    key: 'CLS',
    name: 'Cumulative Layout Shift',
    target: '< 0.1',
    desc: 'Whether elements jump around as the page loads. Low CLS means a stable, professional-feeling experience for every visitor.',
  },
];

const WPS_PROCESS = [
  {
    num: '01',
    title: 'Audit',
    body: 'PageSpeed Insights, GTmetrix, and manual profiling to identify every bottleneck: not just what automated tools flag, but what\'s actually slowing your specific site.',
  },
  {
    num: '02',
    title: 'Prioritize',
    body: 'Ranked by effort vs. impact. We tackle the high-value changes first so you see real score improvement quickly, not just a long to-do list.',
  },
  {
    num: '03',
    title: 'Optimize',
    body: 'Images reprocessed, cache layers configured, scripts deferred, plugins swapped. Every change tested on staging before touching production.',
  },
  {
    num: '04',
    title: 'Report',
    body: 'Before-and-after scores with plain-English explanation of what changed and why. You\'ll know exactly what was done and what it means.',
  },
];

const WPS_SPECS = [
  { label: 'Avg. PageSpeed gain', value: '40+' },
  { label: 'Target LCP', value: '<2.5s' },
  { label: 'Core Web Vitals', value: 'Pass' },
  { label: 'Staging tested', value: 'Always' },
];

function WPSpeedPage() {
  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="wps-hero">
        <div className="wps-hero-bg" aria-hidden="true" />
        <div className="wps-hero-content">
          <div className="shell">
            <span className="eyebrow wps-eyebrow">Services · WordPress Speed Optimization</span>
            <h1 className="wps-hero-hl">
              Your WordPress site, <em>faster.</em>
            </h1>
            <p className="wps-hero-sub">
              Most WordPress sites leave 40–60 PageSpeed points on the table. We audit and fix what's actually slowing yours down: images, caching, plugins, code, and Core Web Vitals.
            </p>
            <div className="wps-hero-actions">
              <a className="btn btn--accent" href="quote.html">
                Get a speed audit <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost wps-ghost" href="wordpress-hosting.html">
                See WordPress Hosting <span className="arrow">→</span>
              </a>
            </div>
            <div className="wps-spec-strip">
              {WPS_SPECS.map(function(s) {
                return (
                  <div key={s.label} className="wps-spec">
                    <span className="wps-spec-val">{s.value}</span>
                    <span className="wps-spec-label">{s.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <SummaryStrip
        summary="We audit and fix the real bottlenecks: images, caching, plugins, code, and Core Web Vitals. Faster sites rank better and convert more."
        points={['Core Web Vitals', 'Image Optimization', 'Plugin Audit', 'Staging Tested']}
      />

      {/* Core Web Vitals */}
      <section className="wps-vitals">
        <div className="shell">
          <div className="wps-vitals-hd">
            <span className="eyebrow">Why it matters</span>
            <h2 className="wps-vitals-hl">Google ranks fast sites higher. Visitors leave slow ones.</h2>
            <p className="wps-vitals-sub">
              Core Web Vitals are the three metrics Google uses to measure page experience. A poor score hurts your search rankings and your conversion rate at the same time. We target all three.
            </p>
          </div>
          <div className="wps-vitals-grid">
            {WPS_VITALS.map(function(v) {
              return (
                <div key={v.key} className="wps-vital-card">
                  <div className="wps-vital-key">{v.key}</div>
                  <div className="wps-vital-target">{v.target}</div>
                  <div className="wps-vital-name">{v.name}</div>
                  <p className="wps-vital-desc">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Optimizations */}
      <section className="wps-opts">
        <div className="shell">
          <div className="wps-opts-hd">
            <span className="eyebrow">What we optimize</span>
            <h2 className="wps-opts-hl">Every layer of the stack, not just the obvious stuff.</h2>
            <p className="wps-opts-sub">
              Speed isn't one fix. It's a stack of small improvements that compound. We address all of them.
            </p>
          </div>
          <div className="wps-opts-grid">
            {WPS_OPTIMIZATIONS.map(function(o) {
              return (
                <div key={o.title} className="wps-opt-card">
                  <div className="wps-opt-icon" style={{ background: o.bg, color: o.color }}>{o.icon}</div>
                  <div className="wps-opt-title">{o.title}</div>
                  <div className="wps-opt-body">{o.body}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="wps-process">
        <div className="shell">
          <div className="wps-process-hd">
            <span className="eyebrow">How it works</span>
            <h2 className="wps-process-hl">Audit to report in four steps.</h2>
          </div>
          <div className="wps-process-steps">
            {WPS_PROCESS.map(function(step) {
              return (
                <div key={step.num} className="wps-step">
                  <div className="wps-step-num">{step.num}</div>
                  <div className="wps-step-title">{step.title}</div>
                  <p className="wps-step-body">{step.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hosting tie-in */}
      <section className="wps-hosting">
        <div className="shell wps-hosting-inner">
          <div>
            <span className="eyebrow wps-hosting-eyebrow">Speed + Hosting</span>
            <h2 className="wps-hosting-hl">The fastest optimization is the right infrastructure.</h2>
            <p className="wps-hosting-body">
              No amount of code minification overcomes a slow server. If your hosting is the root cause, optimization fixes the symptoms but doesn't cure the problem.
            </p>
            <p className="wps-hosting-body">
              Our WordPress Hosting pairs server-level caching, a global CDN, and purpose-built infrastructure with every speed optimization we do. The gains stick.
            </p>
            <a className="btn btn--primary" href="wordpress-hosting.html">
              See WordPress Hosting <span className="arrow">→</span>
            </a>
          </div>
          <div className="wps-hosting-panel">
            <div className="wps-hosting-row">
              <span className="wps-hosting-check">✓</span>
              <span>Server-level page caching</span>
            </div>
            <div className="wps-hosting-row">
              <span className="wps-hosting-check">✓</span>
              <span>Global CDN on every site</span>
            </div>
            <div className="wps-hosting-row">
              <span className="wps-hosting-check">✓</span>
              <span>Isolated WordPress environments</span>
            </div>
            <div className="wps-hosting-row">
              <span className="wps-hosting-check">✓</span>
              <span>Modern PHP 8.x, always current</span>
            </div>
            <div className="wps-hosting-row">
              <span className="wps-hosting-check">✓</span>
              <span>Auto-scaling under traffic spikes</span>
            </div>
            <div className="wps-hosting-row">
              <span className="wps-hosting-check">✓</span>
              <span>Staging site included for safe testing</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="wps-cta">
        <div className="shell wps-cta-inner">
          <div>
            <h2 className="wps-cta-hl">Ready to find out what's slowing your site down?</h2>
            <p className="wps-cta-sub">We'll audit your site and tell you exactly what's hurting your score, and what it'll take to fix it.</p>
            <div className="wps-cta-related">
              <span className="wps-cta-related-label">Related:</span>
              <a href="wordpress-hosting.html" className="wps-cta-related-link">WordPress Hosting →</a>
              <a href="wordpress.html" className="wps-cta-related-link">WordPress Design →</a>
              <a href="hosting.html" className="wps-cta-related-link">Care Plans →</a>
            </div>
          </div>
          <div className="wps-cta-actions">
            <a className="btn btn--accent" href="quote.html">
              Request a Speed Audit <span className="arrow">→</span>
            </a>
            <a className="btn btn--ghost wps-cta-ghost" href="tel:5084132043">
              508.413.2043
            </a>
          </div>
        </div>
      </section>

      <NewsletterBanner />
      <Footer />
    </React.Fragment>
  );
}

const wpsRoot = ReactDOM.createRoot(document.getElementById('root'));
wpsRoot.render(<WPSpeedPage />);
