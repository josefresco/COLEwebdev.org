/* global React, ReactDOM */

const BUILD_TYPES = [
  {
    icon: '⚙',
    bg: 'rgba(14,42,74,0.10)',
    color: '#0E2A4A',
    title: 'WordPress Plugins',
    body: 'Custom functionality built directly into your WordPress site — no third-party subscriptions, no plugin bloat. Exactly what you need, nothing you don\'t.',
  },
  {
    icon: '◇',
    bg: 'rgba(123,192,67,0.14)',
    color: '#5DA02E',
    title: 'AI Chatbots',
    body: 'Conversational assistants trained on your business. They answer questions, capture leads, and hand off to a human when the conversation calls for it.',
  },
  {
    icon: '↗',
    bg: 'rgba(242,107,31,0.14)',
    color: '#F26B1F',
    title: 'Progressive Web Apps',
    body: 'Fast, installable web applications that work offline and feel native — without App Store gatekeeping or platform-specific development costs.',
  },
  {
    icon: '◎',
    bg: 'rgba(123,192,67,0.14)',
    color: '#5DA02E',
    title: 'Browser Extensions',
    body: 'Tools that live inside the browser — automating repetitive tasks, enhancing existing workflows, or surfacing the right information at the right moment.',
  },
  {
    icon: '⌘',
    bg: 'rgba(242,107,31,0.14)',
    color: '#F26B1F',
    title: 'Hosted Business Apps',
    body: 'Custom web applications for internal teams or client-facing workflows. Hosted and maintained by us, built around your exact processes — not a software company\'s idea of them.',
  },
  {
    icon: '✦',
    bg: 'rgba(14,42,74,0.10)',
    color: '#0E2A4A',
    title: 'Personal & Specialty Apps',
    body: 'One-of-a-kind tools for specific needs — portfolio tools, research assistants, niche utilities, passion projects. If you can describe it clearly, we can probably build it.',
  },
];

const PROCESS_USES = [
  { glyph: '◎', label: 'Coding', detail: 'AI-assisted development accelerates builds and catches errors before they ship.' },
  { glyph: '✦', label: 'Copywriting', detail: 'AI drafts, humans edit. Faster first drafts, better final copy.' },
  { glyph: '◇', label: 'Image Editing', detail: 'Background removal, retouching, and generative asset creation.' },
  { glyph: '↗', label: 'Speed Optimization', detail: 'Automated performance analysis surfaces what actually matters.' },
  { glyph: '⚙', label: 'SEO & AIEO', detail: 'AI-powered keyword research, content auditing, and AI-engine readiness.' },
  { glyph: '⌘', label: 'Log & Data Analysis', detail: 'Parsing server logs and user data to find patterns humans would miss.' },
];

const MODELS = [
  {
    name: 'Anthropic Claude',
    desc: 'Our primary model for coding, reasoning, and long-context analysis. Claude powers most of the AI tools we build for clients, and drives much of our internal workflow.',
    dot: '#7BC043',
  },
  {
    name: 'OpenAI ChatGPT',
    desc: 'GPT-4o and the broader OpenAI API for creative tasks, image analysis, and integrations where OpenAI\'s ecosystem has a clear edge.',
    dot: '#F26B1F',
  },
  {
    name: 'Google Gemini',
    desc: 'Gemini Pro and Flash for multimodal tasks, Google Workspace integrations, and continuous evaluation as the model landscape shifts.',
    dot: '#0E2A4A',
  },
];

function AiAppsPage() {
  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="ai-hero">
        <div className="ai-hero-bg" aria-hidden="true" />
        <div className="ai-hero-content">
          <div className="shell">
            <span className="eyebrow ai-eyebrow">Services · AI Studio</span>
            <h1 className="ai-hero-hl">
              AI built around<br /><em>your</em> business.
            </h1>
            <p className="ai-hero-sub">
              No generic tools. No off-the-shelf templates. Every app we build is custom — scoped to your exact workflow, built to solve a real problem. We translate the bleeding edge of AI into practical tools small business owners can actually use and rely on.
            </p>
            <div className="ai-hero-actions">
              <a className="btn btn--accent" href="contact.html">
                Start a conversation <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost ai-ghost" href="tel:5084132043">
                508.413.2043
              </a>
            </div>
            <div className="ai-hero-tags">
              {['WordPress Plugins', 'AI Chatbots', 'Progressive Web Apps', 'Browser Extensions', 'Hosted Apps'].map(t => (
                <span key={t} className="ai-hero-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <section className="ai-phil">
        <div className="shell ai-phil-grid">
          <div className="ai-phil-main">
            <span className="eyebrow">Our philosophy</span>
            <h2 className="ai-phil-hl">Simple apps. Focused scope. Built for how you actually work.</h2>
            <p className="ai-phil-p">
              The best AI tools aren't the most ambitious ones. The ones that get used — and deliver real value — are focused, non-critical, and solve exactly one problem well. We start there. We scope tight, ship a working version fast, and let you experience it before we go further.
            </p>
            <p className="ai-phil-p">
              Getting to 90% is fast. That first working version often surprises clients — it's already doing the job. But pushing to 100% is where projects transform. That last iteration is where the tool stops feeling like software and starts feeling like it was always part of how you work. We know how to get you there.
            </p>
          </div>
          <div className="ai-phil-aside">
            <div className="ai-phil-pull">
              <div className="ai-phil-quote">"Getting to 90% is fast. Getting to 100% changes everything."</div>
              <div className="ai-phil-attr">— Josiah Cole, AI Lead</div>
            </div>
            <div className="ai-phil-principles">
              {[
                { n: '01', text: 'Start simple and non-critical' },
                { n: '02', text: 'Ship a working version quickly' },
                { n: '03', text: 'Refine with real feedback' },
                { n: '04', text: 'Push to 100% when value is clear' },
              ].map(p => (
                <div key={p.n} className="ai-phil-principle">
                  <span className="ai-phil-n">{p.n}</span>
                  <span className="ai-phil-text">{p.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="ai-builds">
        <div className="shell">
          <div className="ai-builds-hd">
            <span className="eyebrow">What we build</span>
            <h2 className="ai-builds-hl">Six types of custom AI tools.</h2>
          </div>
          <div className="ai-builds-grid">
            {BUILD_TYPES.map(b => (
              <div key={b.title} className="ai-build-card">
                <div className="ai-build-icon" style={{ background: b.bg, color: b.color }}>
                  {b.icon}
                </div>
                <div className="ai-build-title">{b.title}</div>
                <div className="ai-build-body">{b.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI in our own process */}
      <section className="ai-process">
        <div className="shell">
          <div className="ai-process-hd">
            <span className="eyebrow">How we work</span>
            <h2 className="ai-process-hl">We use AI in our own process, too.</h2>
            <p className="ai-process-p">
              We don't just build AI tools for clients — we use AI throughout our own work every day. That makes us real practitioners, not vendors pitching a technology we've only read about. Every technique we recommend is one we've already stress-tested in production.
            </p>
          </div>
          <div className="ai-process-grid">
            {PROCESS_USES.map(u => (
              <div key={u.label} className="ai-process-card">
                <span className="ai-process-glyph">{u.glyph}</span>
                <div className="ai-process-label">{u.label}</div>
                <div className="ai-process-detail">{u.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Models */}
      <div className="ai-models">
        <div className="shell">
          <div className="ai-models-hd">
            <span className="eyebrow">Under the hood</span>
            <h2 className="ai-models-hl">The models we use — and know deeply.</h2>
            <p className="ai-models-sub">We evaluate new models continuously. These are the three we actively build with today.</p>
          </div>
          <div className="ai-models-grid">
            {MODELS.map(m => (
              <div key={m.name} className="ai-model-card">
                <div className="ai-model-dot" style={{ background: m.dot }} />
                <div className="ai-model-name">{m.name}</div>
                <div className="ai-model-desc">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Josiah profile */}
      <section className="ai-lead">
        <div className="shell ai-lead-grid">
          <div className="ai-lead-photo-wrap">
            <img
              className="ai-lead-photo"
              src="assets/josiah-cole-cape-cod-website-designer.jpg"
              alt="Josiah Cole, AI Lead at COLEwebdev"
              width="240"
              height="240"
            />
          </div>
          <div className="ai-lead-content">
            <span className="eyebrow">AI leadership</span>
            <h2 className="ai-lead-hl">Josiah Cole leads AI R&amp;D at COLEwebdev.</h2>
            <p className="ai-lead-p">
              Josiah has spent the last several years at the intersection of web development and applied AI — not as a researcher, but as a builder. He evaluates new models and tools as they emerge, runs experiments on real client problems, and decides what's production-ready versus what's still hype.
            </p>
            <p className="ai-lead-p">
              His filter is a practical one: if it doesn't work reliably for a small business owner who has zero patience for broken software, it doesn't go into a client project. The result is a practice that's more current than most agencies and more grounded than most AI consultants — one that weeds out the noise and delivers techniques that actually work.
            </p>
            <div className="ai-lead-tags">
              {['Anthropic Claude', 'OpenAI API', 'Google Gemini', 'Applied AI Research', 'AI Product Dev'].map(t => (
                <span key={t} className="ai-lead-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AIEO cross-sell */}
      <section className="ai-aieo">
        <div className="shell">
          <div className="ai-aieo-inner">
            <div className="ai-aieo-top">
              <span className="ai-aieo-pill">New service</span>
              <span className="eyebrow ai-aieo-eyebrow">Also from COLEwebdev</span>
            </div>
            <h2 className="ai-aieo-hl">AIEO — AI Engine Optimization.</h2>
            <p className="ai-aieo-p">
              Search is changing fast. ChatGPT, Perplexity, Google Gemini, and Claude are now answering questions directly — and they're pulling from web content to do it. The businesses that get cited by AI search are the ones that structured their content to be found, understood, and recommended by AI systems.
            </p>
            <p className="ai-aieo-p">
              AIEO is how we prepare your website for that shift. We strip out the fluff, structure your content around how AI engines read and summarize, and position your business as an authoritative source. It's the next frontier of search optimization — and most small businesses haven't started yet.
            </p>
            <a className="btn btn--accent" href="contact.html">
              Ask about AIEO <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ai-cta">
        <div className="shell">
          <div className="ai-cta-card">
            <div>
              <h2 className="ai-cta-hl">Ready to put AI to work?</h2>
              <p className="ai-cta-sub">
                Tell us what you're trying to automate, improve, or build. We'll tell you what's realistic — and what's still hype.
              </p>
            </div>
            <div className="ai-cta-actions">
              <a className="btn btn--accent" href="contact.html">
                Start a conversation <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost ai-ghost" href="tel:5084132043">
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

const aiRoot = ReactDOM.createRoot(document.getElementById('root'));
aiRoot.render(<AiAppsPage />);
