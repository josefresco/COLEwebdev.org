/* global React, ReactDOM */

const TACTICS = [
  {
    glyph: '◇',
    color: 'green',
    title: 'Structured Content',
    desc: 'Organizing pages so AI systems can extract, summarize, and cite your information accurately — not just index it.',
  },
  {
    glyph: '⚙',
    color: 'navy',
    title: 'Schema Markup',
    desc: 'Machine-readable structured data that tells AI exactly what your business does, who it serves, and where it operates.',
  },
  {
    glyph: '✦',
    color: 'green',
    title: 'E-E-A-T Signals',
    desc: 'Experience, Expertise, Authoritativeness, and Trust — the signals AI systems use to decide whether to recommend you.',
  },
  {
    glyph: '◎',
    color: 'orange',
    title: 'Entity Optimization',
    desc: 'Establishing your business as a recognized, distinct entity across the web — so AI systems know who you are with confidence.',
  },
  {
    glyph: '↗',
    color: 'navy',
    title: 'FAQ & Q&A Structuring',
    desc: 'Formatting answers to the exact questions your customers ask — in the structure AI engines prefer to cite.',
  },
  {
    glyph: '◐',
    color: 'orange',
    title: 'Citation Building',
    desc: 'Building the authority signals and consistent web presence that make AI systems choose you as a trusted source.',
  },
  {
    glyph: '↻',
    color: 'green',
    title: 'Content Freshness',
    desc: 'Keeping your content current and accurate — AI systems deprioritize stale information and can actively mislead users with it.',
  },
  {
    glyph: '⌘',
    color: 'navy',
    title: 'Clarity & Directness',
    desc: 'Removing ambiguity from your copy so AI systems accurately summarize and recommend you — not a paraphrased version of you.',
  },
];

const GLYPHCOLOR = {
  green:  { bg: 'rgba(123,192,67,0.14)',  color: '#5DA02E' },
  orange: { bg: 'rgba(242,107,31,0.14)',  color: '#D05A12' },
  navy:   { bg: 'rgba(14,42,74,0.10)',    color: '#0E2A4A' },
};

const VS = [
  { label: 'Goal',        seo: 'Rank in search results',         aieo: 'Get cited by AI answers' },
  { label: 'Audience',    seo: 'Search engine crawlers',         aieo: 'AI language models' },
  { label: 'Format',      seo: 'Keyword-optimized pages',        aieo: 'Answer-structured content' },
  { label: 'Signal',      seo: 'Backlinks & domain authority',   aieo: 'E-E-A-T & entity clarity' },
  { label: 'Result',      seo: 'Blue link on a results page',    aieo: 'Cited source in an AI answer' },
];

function AieoPage() {
  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="aieo-hero">
        <div className="aieo-hero-bg" aria-hidden="true" />
        <div className="aieo-hero-content">
          <div className="shell">
            <span className="eyebrow aieo-eyebrow">Services · AI Engine Optimization</span>
            <h1 className="aieo-hero-hl">
              Get found by<br /><em>AI search.</em>
            </h1>
            <p className="aieo-hero-sub">
              ChatGPT, Perplexity, Google Gemini, and Claude now answer questions directly
              — pulling from websites to do it. AIEO is how you make sure your business
              is the one they cite.
            </p>
            <div className="aieo-hero-actions">
              <a className="btn btn--accent" href="quote.html">
                Start a conversation <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost aieo-ghost" href="tel:5084132043">
                508.413.2043
              </a>
            </div>
            <div className="aieo-hero-tags">
              {['Structured Content', 'Schema Markup', 'E-E-A-T', 'Entity Optimization', 'Citation Building'].map(t => (
                <span key={t} className="aieo-hero-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* What is AIEO */}
      <section className="aieo-what">
        <div className="shell aieo-what-grid">
          <div>
            <span className="eyebrow">What is AIEO?</span>
            <h2 className="aieo-what-hl">Search is changing. Most businesses aren't ready.</h2>
            <p className="aieo-what-p">
              For decades, the goal was simple: rank on page one of Google. But a growing
              share of searches never reach a results page at all. Users ask ChatGPT, talk
              to Gemini, or query Perplexity — and get a direct answer with cited sources.
              The businesses cited are the ones that win those customers.
            </p>
            <p className="aieo-what-p">
              AI Engine Optimization is the practice of structuring your web presence so
              AI systems can understand, trust, and recommend you. It's complementary to
              SEO but distinct from it — different signals, different formatting, different
              goals. And right now, most small businesses haven't started.
            </p>
          </div>
          <div className="aieo-what-aside">
            <div className="aieo-engines">
              <p className="aieo-engines-label">AI search engines we optimize for</p>
              {['ChatGPT / OpenAI', 'Google Gemini', 'Perplexity AI', 'Anthropic Claude', 'Microsoft Copilot'].map(e => (
                <div key={e} className="aieo-engine-row">
                  <span className="aieo-engine-dot" />
                  <span className="aieo-engine-name">{e}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tactics */}
      <section className="aieo-tactics">
        <div className="shell">
          <div className="aieo-tactics-hd">
            <span className="eyebrow">What we do</span>
            <h2 className="aieo-tactics-hl">Eight AIEO tactics — applied to your site.</h2>
            <p className="aieo-tactics-sub">
              We audit your current content against each of these signals, identify the gaps,
              and implement the changes. No fluff. Only the techniques that demonstrably affect
              how AI systems read, interpret, and cite your content.
            </p>
          </div>
          <div className="aieo-tactics-grid">
            {TACTICS.map(t => {
              const c = GLYPHCOLOR[t.color];
              return (
                <div key={t.title} className="aieo-tactic-card">
                  <div className="aieo-tactic-icon" style={{ background: c.bg, color: c.color }}>{t.glyph}</div>
                  <div className="aieo-tactic-title">{t.title}</div>
                  <div className="aieo-tactic-desc">{t.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AIEO vs SEO */}
      <section className="aieo-vs">
        <div className="shell">
          <div className="aieo-vs-hd">
            <span className="eyebrow">How they differ</span>
            <h2 className="aieo-vs-hl">AIEO and SEO are not the same thing.</h2>
            <p className="aieo-vs-sub">They work together — but optimizing for one does not guarantee success with the other.</p>
          </div>
          <div className="aieo-vs-table">
            <div className="aieo-vs-header">
              <div />
              <div className="aieo-vs-col-label">Traditional SEO</div>
              <div className="aieo-vs-col-label aieo-vs-col-label--aieo">AIEO</div>
            </div>
            {VS.map(row => (
              <div key={row.label} className="aieo-vs-row">
                <div className="aieo-vs-row-label">{row.label}</div>
                <div className="aieo-vs-cell">{row.seo}</div>
                <div className="aieo-vs-cell aieo-vs-cell--aieo">{row.aieo}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why now */}
      <section className="aieo-now">
        <div className="shell aieo-now-inner">
          <div className="aieo-now-badge">Early mover advantage</div>
          <h2 className="aieo-now-hl">The window to get ahead is open — but not for long.</h2>
          <p className="aieo-now-p">
            Right now, the number of businesses actively optimizing for AI search is small.
            That means the cost of entry is low and the advantage of moving first is high.
            In two years, AIEO will be as competitive as SEO is today. The businesses that
            act now are the ones that will hold the citation positions when the market catches up.
          </p>
          <p className="aieo-now-p">
            COLEwebdev is already applying AIEO techniques to our own presence and to client
            projects — led by Josiah Cole, who tracks AI model updates and search behavior
            changes as part of ongoing R&amp;D. We're not selling a trend. We're applying
            what we've tested.
          </p>
          <a className="btn btn--accent" href="quote.html">
            Ask about AIEO for your business <span className="arrow">→</span>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="aieo-cta">
        <div className="shell">
          <div className="aieo-cta-inner">
            <div>
              <h2 className="aieo-cta-hl">Ready to be found by AI search?</h2>
              <p className="aieo-cta-sub">
                We'll audit your current presence and show you exactly where the gaps are.
              </p>
            </div>
            <div className="aieo-cta-actions">
              <a className="btn btn--accent" href="quote.html">
                Get a free AIEO audit <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost aieo-ghost" href="tel:5084132043">
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

const aieoRoot = ReactDOM.createRoot(document.getElementById('root'));
aieoRoot.render(<AieoPage />);
