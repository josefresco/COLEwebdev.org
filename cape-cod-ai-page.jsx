/* global React, ReactDOM */

const CAI_USES = [
  {
    icon: '⌘',
    bg: 'rgba(14,42,74,0.10)',
    color: '#0E2A4A',
    title: 'Custom AI Tools',
    body: 'Rapid design prototypes, custom WordPress plugins, chatbots, and internal apps — built around your exact workflow, faster and at lower cost than traditional development.',
    href: 'ai-apps.html',
    linkLabel: 'See AI Studio',
  },
  {
    icon: '↗',
    bg: 'rgba(242,107,31,0.14)',
    color: '#F26B1F',
    title: 'AI-Powered SEO Audits',
    body: "A real technical SEO audit built on your actual Google Analytics and Search Console data — not a generic checklist, but a diagnosis of what's really affecting your traffic and rankings.",
    href: 'ai-apps.html',
    linkLabel: 'See SEO audits',
  },
  {
    icon: '↗',
    bg: 'rgba(123,192,67,0.14)',
    color: '#5DA02E',
    title: 'AI Engine Optimization',
    body: 'Structure your site so ChatGPT, Perplexity, Gemini, and Claude can find, understand, and recommend your business.',
    href: 'aieo.html',
    linkLabel: 'See AIEO',
  },
  {
    icon: '◇',
    bg: 'rgba(242,107,31,0.14)',
    color: '#F26B1F',
    title: 'AI-Ready Websites',
    body: 'Clean markup, real schema, and fast pages — the technical foundation every AI system and search engine reads first.',
    href: 'website-design.html',
    linkLabel: 'See web design',
  },
];

const CAI_FAQ = [
  {
    q: 'Do you build your own AI models?',
    a: "No — and you don't want us to. We're AI integrators: we take proven models from Anthropic, OpenAI, and Google and put them to work on a specific problem in your business. That's faster, cheaper, and more reliable than training a model from scratch, which isn't something a small business needs anyway.",
  },
  {
    q: 'What does "AI web development" actually mean?',
    a: 'For us, it covers two things: building custom AI-powered tools (chatbots, automations, internal apps) into your website, and structuring your site so AI search engines like ChatGPT and Perplexity can read and cite it accurately. Most agencies only do one or the other — we do both.',
  },
  {
    q: 'Is this relevant for a small Cape Cod business, or just tech companies?',
    a: "It's most relevant for small businesses. A restaurant, contractor, or inn doesn't need a research lab — it needs one working chatbot that answers booking questions, or a site that shows up when someone asks an AI assistant for a recommendation. We scope AI work to be practical and non-critical, not experimental.",
  },
  {
    q: 'Do you build with a specific AI model?',
    a: "We work across Anthropic Claude, OpenAI's GPT models, and Google Gemini, choosing whichever fits the task and your budget. We're not tied to one vendor, and we re-evaluate as the model landscape shifts.",
  },
  {
    q: 'How is this different from regular SEO?',
    a: "Traditional SEO optimizes for ranking in a list of blue links. AI Engine Optimization (AIEO) optimizes for being the answer an AI assistant gives directly — different signals, different structure. We handle both, and they reinforce each other.",
  },
];

function CapeCodAiPage() {
  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="cai-hero">
        <div className="cai-hero-bg" aria-hidden="true" />
        <div className="cai-hero-content">
          <div className="shell">
            <span className="eyebrow cai-eyebrow">Cape Cod AI</span>
            <h1 className="cai-hero-hl">
              AI web development<br />for <em>Cape Cod</em> businesses.
            </h1>
            <p className="cai-hero-sub">
              We build custom AI tools, make your site legible to AI search engines, and lay the technical
              groundwork every AI system reads first — all under one local team that actually understands
              what a Cape Cod small business needs from AI, and what's still hype.
            </p>
            <div className="cai-hero-actions">
              <a className="btn btn--accent" href="contact.html">
                Talk to our AI lead <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost cai-ghost" href="tel:5084132043">
                508.413.2043
              </a>
            </div>
            <div className="cai-hero-tags">
              {['Rapid Prototyping', 'Custom WordPress Plugins', 'AI Chatbots', 'AI SEO Audits', 'AI Engine Optimization', 'AI-Ready Websites', 'Applied, Not Hype'].map(t => (
                <span key={t} className="cai-hero-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SummaryStrip
        summary="A local, applied approach to AI — custom tools, AI search visibility, and the technical foundation that makes both work. Led by Josiah Cole, our AI lead."
        points={['Custom AI Tools', 'AI Search Visibility', 'Local Team', 'No Off-the-Shelf Hype']}
      />

      {/* Why local */}
      <section className="cai-why">
        <div className="shell cai-why-grid">
          <div>
            <span className="eyebrow">Why a local AI partner</span>
            <h2 className="cai-why-hl">National AI vendors don't know your customers. We do.</h2>
            <p className="cai-why-p">
              We're AI integrators, not AI researchers — we don't build or train our own models. We use the
              same tools already out there (Claude, GPT, Gemini) and put them to work solving a specific
              problem in your business, then make sure you actually understand what the tool does and doesn't do.
            </p>
            <p className="cai-why-p">
              Generic AI agencies sell the same chatbot template to every client. We already build and host
              your website, understand your local market, and know which AI features actually get used by
              Cape Cod customers versus which ones sit unused after launch.
            </p>
            <p className="cai-why-p">
              That's the difference between "AI-powered" as a marketing buzzword and AI that quietly does a
              real job — answering a booking question at 11pm, drafting a first pass of your newsletter, or
              making sure an AI assistant recommends your business by name.
            </p>
          </div>
          <div className="cai-why-pull">
            <div className="cai-why-quote">
              "Getting to 90% with AI is fast. Getting to 100% — where it actually feels like part of how
              you work — is where we spend our time."
            </div>
            <div className="cai-why-attr">— Josiah Cole, AI Lead, COLEwebdev</div>
          </div>
        </div>
      </section>

      {/* Three pillars / hub cards */}
      <section className="cai-hub">
        <div className="shell">
          <div className="cai-hub-hd">
            <span className="eyebrow cai-hub-eyebrow">What we cover</span>
            <h2 className="cai-hub-hl">Four sides of AI web development.</h2>
          </div>
          <div className="cai-hub-grid">
            {CAI_USES.map(u => (
              <a key={u.title} href={u.href} className="cai-hub-card">
                <div className="cai-hub-icon" style={{ background: u.bg, color: u.color }}>
                  {u.icon}
                </div>
                <div className="cai-hub-title">{u.title}</div>
                <div className="cai-hub-body">{u.body}</div>
                <span className="cai-hub-link">{u.linkLabel} <span className="arrow">→</span></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="cai-faq">
        <div className="shell cai-faq-inner">
          <span className="eyebrow">Common questions</span>
          <h2 className="cai-faq-hl">Cape Cod AI, explained plainly.</h2>
          <div className="cai-faq-list">
            {CAI_FAQ.map(f => (
              <details key={f.q} className="cai-faq-item">
                <summary className="cai-faq-q">{f.q}</summary>
                <p className="cai-faq-a">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cai-cta">
        <div className="shell">
          <div className="cai-cta-card">
            <div>
              <h2 className="cai-cta-hl">Not sure where AI fits in your business?</h2>
              <p className="cai-cta-sub">
                Tell us what you're dealing with and we'll tell you honestly whether AI is the right tool —
                and if so, which of these three approaches fits.
              </p>
              <p className="cai-area-note">
                Serving businesses across all 15 Cape Cod towns.{' '}
                <a href="service-area.html">See our full service area →</a>
              </p>
            </div>
            <div className="cai-cta-actions">
              <a className="btn btn--accent" href="contact.html">
                Start a conversation <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost cai-ghost" href="tel:5084132043">
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

const capeCodAiRoot = ReactDOM.createRoot(document.getElementById('root'));
capeCodAiRoot.render(<CapeCodAiPage />);
