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
    body: 'Fast, installable web applications that feel native — without App Store gatekeeping or platform-specific development costs.',
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
    logo: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Anthropic">
        <path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z"/>
      </svg>
    ),
  },
  {
    name: 'OpenAI ChatGPT',
    desc: 'GPT-4o and the broader OpenAI API for creative tasks, image analysis, and integrations where OpenAI\'s ecosystem has a clear edge.',
    logo: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="OpenAI">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.376-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.497v2.999l-2.597 1.5-2.607-1.5z"/>
      </svg>
    ),
  },
  {
    name: 'Google Gemini',
    desc: 'Gemini Pro and Flash for multimodal tasks, Google Workspace integrations, and continuous evaluation as the model landscape shifts.',
    logo: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Google Gemini">
        <path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"/>
      </svg>
    ),
  },
];

function NeuralCanvas() {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const NODE_COUNT = 65;
    const MAX_DIST = 180;
    const SIGNAL_INTERVAL = 1600;

    let animId;
    let nodes = [];
    let signals = [];
    let lastSignal = 0;

    function resize() {
      const p = canvas.parentElement;
      const r = p.getBoundingClientRect();
      canvas.width  = Math.round(r.width)  || p.offsetWidth  || 800;
      canvas.height = Math.round(r.height) || p.offsetHeight || 400;
    }

    function mkNodes() {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2.5 + 1.5,
        phase: Math.random() * Math.PI * 2,
        speed: 0.02 + Math.random() * 0.02,
        bright: Math.random() > 0.78,
      }));
    }

    function spawnSignal(now) {
      const candidates = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          if (dx * dx + dy * dy < MAX_DIST * MAX_DIST) candidates.push([i, j]);
        }
      }
      if (!candidates.length) return;
      const [a, b] = candidates[Math.floor(Math.random() * candidates.length)];
      signals.push({ from: a, to: b, t: 0, speed: 0.014 + Math.random() * 0.014 });
    }

    function draw(now) {
      try {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Connections
        for (let i = 0; i < nodes.length; i++) {
          const ni = nodes[i];
          for (let j = i + 1; j < nodes.length; j++) {
            const nj = nodes[j];
            const dx = ni.x - nj.x;
            const dy = ni.y - nj.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < MAX_DIST) {
              const a = (1 - dist / MAX_DIST) * 0.5;
              ctx.strokeStyle = `rgba(123,192,67,${a})`;
              ctx.lineWidth = 0.9;
              ctx.beginPath();
              ctx.moveTo(ni.x, ni.y);
              ctx.lineTo(nj.x, nj.y);
              ctx.stroke();
            }
          }
        }

        // Data pulse signals
        if (now - lastSignal > SIGNAL_INTERVAL) { spawnSignal(now); lastSignal = now; }
        signals = signals.filter(s => s.t <= 1);
        for (const s of signals) {
          s.t += s.speed;
          const from = nodes[s.from];
          const to   = nodes[s.to];
          if (!from || !to) continue;
          const px = from.x + (to.x - from.x) * s.t;
          const py = from.y + (to.y - from.y) * s.t;
          const trailLen = 0.2;
          const t0 = Math.max(0, s.t - trailLen);
          const tx = from.x + (to.x - from.x) * t0;
          const ty = from.y + (to.y - from.y) * t0;
          // Avoid zero-length gradient (degenerate case at t=0)
          if (Math.abs(px - tx) > 0.5 || Math.abs(py - ty) > 0.5) {
            const grad = ctx.createLinearGradient(tx, ty, px, py);
            grad.addColorStop(0, 'rgba(123,192,67,0)');
            grad.addColorStop(1, 'rgba(123,192,67,0.9)');
            ctx.strokeStyle = grad;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(tx, ty);
            ctx.lineTo(px, py);
            ctx.stroke();
          }
          // Leading dot
          const grd = ctx.createRadialGradient(px, py, 0, px, py, 6);
          grd.addColorStop(0, 'rgba(200,255,120,1)');
          grd.addColorStop(1, 'rgba(123,192,67,0)');
          ctx.fillStyle = grd;
          ctx.beginPath();
          ctx.arc(px, py, 6, 0, Math.PI * 2);
          ctx.fill();
        }

        // Nodes
        for (const n of nodes) {
          n.x += n.vx;
          n.y += n.vy;
          n.phase += n.speed;
          if (n.x < 0) n.x = canvas.width;
          if (n.x > canvas.width) n.x = 0;
          if (n.y < 0) n.y = canvas.height;
          if (n.y > canvas.height) n.y = 0;

          const pulse = 0.6 + Math.sin(n.phase) * 0.3;
          const alpha = (n.bright ? 1.0 : 0.7) * pulse;

          if (n.bright) {
            const glowR = n.r * 9;
            const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowR);
            g.addColorStop(0, `rgba(123,192,67,${0.35 * pulse})`);
            g.addColorStop(1, 'rgba(123,192,67,0)');
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(n.x, n.y, glowR, 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.fillStyle = `rgba(180,230,100,${alpha})`;
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
          ctx.fill();
        }
      } catch (e) { /* keep loop alive on any draw error */ }

      animId = requestAnimationFrame(draw);
    }

    // Defer to next rAF so layout is complete before we read dimensions
    animId = requestAnimationFrame(() => {
      resize();
      mkNodes();
      animId = requestAnimationFrame(draw);
    });

    const ro = new ResizeObserver(() => { resize(); mkNodes(); });
    ro.observe(canvas.parentElement);

    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, []);

  return <canvas ref={canvasRef} className="ai-hero-canvas" aria-hidden="true" />;
}

function AiAppsPage() {
  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="ai-hero">
        <div className="ai-hero-bg" aria-hidden="true" />
        <NeuralCanvas />
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
                <div className="ai-model-logo">{m.logo}</div>
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
