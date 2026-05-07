/* global React */
const { useState: useStateS, useEffect: useEffectS, useRef: useRefS } = React;

/* ============================================================
   Services bento
   ============================================================ */
function Services() {
  return (
    <section className="section bg-dots" id="services">
      <div className="shell">
        <div className="s-head">
          <div className="left">
            <span className="eyebrow">What we do</span>
            <h2>A small studio with a <span className="italic">deep</span> bench.</h2>
            <p className="lede">
              From custom websites to ongoing care, search, ads, and email — one team that picks up the phone. We pick the right tool for the job and stick around to make sure it keeps working.
            </p>
          </div>
          <a className="btn btn--ghost" href="#services">All services <span className="arrow">→</span></a>
        </div>

        <div className="bento">
          {/* Flagship: Custom Websites */}
          <div className="card svc-card feature xl">
            <div>
              <span className="tag" style={{ background: 'rgba(255,255,255,0.08)', color: 'white', borderColor: 'rgba(255,255,255,0.15)' }}>FLAGSHIP</span>
            </div>
            <h3>Custom websites built by people who pick up the phone.</h3>
            <p>From a 4-page coastal contractor site to a 60-page nonprofit hub — we design, build, and maintain it end to end. No outsourcing. No tickets. Just Cole.</p>
            <div className="meta-row">
              <div className="stack">
                <span className="tag" style={{ background: 'rgba(255,255,255,0.08)', color: 'white', borderColor: 'rgba(255,255,255,0.15)' }}>WORDPRESS</span>
                <span className="tag" style={{ background: 'rgba(255,255,255,0.08)', color: 'white', borderColor: 'rgba(255,255,255,0.15)' }}>NEXT.JS</span>
                <span className="tag" style={{ background: 'rgba(255,255,255,0.08)', color: 'white', borderColor: 'rgba(255,255,255,0.15)' }}>SHOPIFY</span>
              </div>
              <span className="arrow-pill">→</span>
            </div>
          </div>

          {/* Web Design */}
          <div className="card svc-card sm">
            <div className="icon green">◇</div>
            <h3>Web Design</h3>
            <p>Modern, mobile-first layouts that look like your business — not a template.</p>
            <div className="meta-row">
              <span>From $2,400</span>
              <span className="arrow-pill" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>→</span>
            </div>
          </div>

          {/* SEO */}
          <div className="card svc-card sm">
            <div className="icon navy">⚡</div>
            <h3>SEO &amp; Local Search</h3>
            <p>Show up when your neighbor searches for what you sell. Ethical, measurable, no smoke.</p>
            <div className="meta-row">
              <span>Monthly Care</span>
              <span className="arrow-pill" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>→</span>
            </div>
          </div>

          {/* Google Ads */}
          <div className="card svc-card sm">
            <div className="icon green">◎</div>
            <h3>Google Ads</h3>
            <p>Targeted campaigns that bring in calls and clicks — managed monthly, with real reporting.</p>
            <div className="meta-row">
              <span>Pay-per-click</span>
              <span className="arrow-pill" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>→</span>
            </div>
          </div>

          {/* Social Media Consulting */}
          <div className="card svc-card sm">
            <div className="icon navy">◍</div>
            <h3>Social Media Consulting</h3>
            <p>A plan you can actually keep up with — content cadence, voice, and tools to make posting easy.</p>
            <div className="meta-row">
              <span>Coaching · Audits</span>
              <span className="arrow-pill" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>→</span>
            </div>
          </div>

          {/* Hosting + Care (slightly larger — keeps signature service prominent) */}
          <div className="card svc-card lg">
            <div className="icon green">↻</div>
            <h3>Hosting + Care Plans</h3>
            <p>WP Engine, static, or our own — plus weekly backups, security, updates, and a human who answers when you email.</p>
            <div className="meta-row">
              <span>From $39/mo</span>
              <span className="arrow-pill" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>→</span>
            </div>
          </div>

          {/* Website Updates */}
          <div className="card svc-card sm">
            <div className="icon navy">✎</div>
            <h3>Website Updates</h3>
            <p>Quick-turn edits, new pages, and content refreshes — billed by the hour or by the block.</p>
            <div className="meta-row">
              <span>By request</span>
              <span className="arrow-pill" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>→</span>
            </div>
          </div>

          {/* Speed Optimization */}
          <div className="card svc-card sm">
            <div className="icon green">↑</div>
            <h3>Speed Optimization</h3>
            <p>Faster pages, better Core Web Vitals, fewer bounces. We measure first, then tune.</p>
            <div className="meta-row">
              <span>One-time tune-up</span>
              <span className="arrow-pill" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>→</span>
            </div>
          </div>

          {/* E-Commerce */}
          <div className="card svc-card sm">
            <div className="icon green">◐</div>
            <h3>E-Commerce</h3>
            <p>WooCommerce &amp; Shopify storefronts that ship the order and not your time.</p>
            <div className="meta-row">
              <span>Catalog ready</span>
              <span className="arrow-pill" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>→</span>
            </div>
          </div>

          {/* Branding */}
          <div className="card svc-card sm">
            <div className="icon navy">✦</div>
            <h3>Branding</h3>
            <p>Logos, color systems, print collateral — so the website fits the rest of you.</p>
            <div className="meta-row">
              <span>Project-based</span>
              <span className="arrow-pill" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>→</span>
            </div>
          </div>

          {/* AI Web Apps — minimized */}
          <div className="card svc-card sm">
            <div className="icon green">⌘</div>
            <h3>AI Web Apps <span className="tag" style={{ marginLeft: 6, verticalAlign: 'middle', background: 'rgba(33,146,188,0.12)', color: 'var(--brand-blue)', borderColor: 'rgba(33,146,188,0.2)' }}>NEW</span></h3>
            <p>Booking assistants, smart search, content drafting — practical AI woven into your site.</p>
            <div className="meta-row">
              <span>Add-on</span>
              <span className="arrow-pill" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>→</span>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

/* ============================================================
   AI Quote Estimator (live, uses window.claude)
   ============================================================ */
const PROJECT_TYPES = [
'5-page small business site',
'WordPress redesign',
'E-commerce / Shopify',
'Nonprofit hub',
'Booking / scheduling',
'AI assistant on existing site',
'Custom web app'];


function Estimator() {
  const [active, setActive] = useStateS(PROJECT_TYPES[0]);
  const [desc, setDesc] = useStateS('');
  const [loading, setLoading] = useStateS(false);
  const [result, setResult] = useStateS(null);
  const [error, setError] = useStateS(null);

  const ask = async () => {
    setError(null);
    if (!window.claude || !window.claude.complete) {
      setError('AI estimator is offline — please request a manual quote below.');
      return;
    }
    setLoading(true);
    setResult(null);
    try {
      const prompt = `You are a friendly Cape Cod web design estimator for COLEwebdev. The user has selected project type: "${active}".\nTheir description: "${desc || '(no extra detail)'}".\n\nRespond ONLY with valid JSON, no preamble or code fences. Schema:\n{\n  "low": <integer USD>,\n  "high": <integer USD>,\n  "headline": "<one short line — friendly, plainspoken, not jargon>",\n  "includes": ["<3-5 short bullets of what's typically included>"],\n  "timeline": "<rough timeline in weeks>",\n  "next": "<one-sentence call to action>"\n}\n\nGuidelines: Small biz brochure $2400-4800. Custom WordPress redesign $4000-9000. Shopify $5000-12000. Nonprofit hub $6000-14000. Booking $5000-10000. AI add-on $2500-6000. Custom web app $9000-25000. Adjust by complexity in description. Use real-feeling numbers.`;
      const txt = await window.claude.complete(prompt);
      // try to extract JSON
      let parsed;
      try {
        parsed = JSON.parse(txt);
      } catch {
        const m = txt.match(/\{[\s\S]*\}/);
        if (m) parsed = JSON.parse(m[0]);
      }
      if (!parsed) throw new Error('Could not parse estimate');
      setResult(parsed);
    } catch (e) {
      setError("We couldn't reach the estimator just now. Hit “Request a quote” below and we'll get back to you within a day.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section" id="estimate" style={{ padding: "120px 0px" }}>
      <div className="shell">
        <div className="estimator">
          <div className="estimator-grid">
            <div>
              <span className="eyebrow">Start a website project</span>
              <h2 style={{ marginTop: 14 }}>Tell us about your <span className="italic">website.</span></h2>
              <p className="lede" style={{ marginTop: 16 }}>
                Whether it's a fresh build, a redesign of a tired site, or a small fix — drop us a note. We'll reply within one business day with next steps and a ballpark.
              </p>
              <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ display: 'flex', gap: 0 }}>
                  {[
                  { src: 'https://www.colewebdev.com/wp-content/uploads/2021/04/josiah-cole-cape-cod-website-designer.jpg', alt: 'Josiah Cole', ring: '#5CC035' },
                  { src: 'https://www.colewebdev.com/wp-content/uploads/2021/04/desiree-cole-webdiva-cape-cod-website-designer.jpg', alt: 'Desiree Cole', ring: '#2192BC' }].
                  map((p, i) =>
                  <img
                    key={i}
                    src={p.src}
                    alt={p.alt}
                    style={{
                      width: 52, height: 52, borderRadius: '50%',
                      objectFit: 'cover', objectPosition: 'center top',
                      border: `3px solid var(--paper-2)`,
                      boxShadow: `0 0 0 2px ${p.ring}, 0 4px 10px rgba(14,42,74,0.12)`,
                      marginLeft: i === 0 ? 0 : -12,
                      background: 'var(--paper-2)',
                      display: 'block'
                    }} />

                  )}
                </div>
                <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.4 }}>
                  Every project goes through Josiah &amp; Desiree.<br />You'll always talk to a real human — that's the deal.
                </div>
              </div>
            </div>

            <LeadForm />
          </div>
        </div>
      </div>
    </section>);

}

function LeadForm() {
  const [submitted, setSubmitted] = useStateS(false);
  const [form, setForm] = useStateS({ name: '', email: '', phone: '', project: PROJECT_TYPES[0], message: '' });
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  if (submitted) {
    return (
      <div className="estimator-form">
        <div style={{ padding: '20px 4px' }}>
          <div style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(123,192,67,0.18)', color: 'var(--green-deep)', display: 'grid', placeItems: 'center', fontSize: 22, marginBottom: 16 }}>✓</div>
          <h4 style={{ fontFamily: 'var(--serif)', fontSize: 28, marginBottom: 8 }}>Thanks, {form.name.split(' ')[0] || 'there'}!</h4>
          <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.55, marginBottom: 16 }}>
            We got your note and will get back to you within one business day. If it's urgent, give us a ring at <b>508.413.2043</b>.
          </p>
          <button className="btn btn--ghost btn--sm" onClick={() => setSubmitted(false)} type="button">Send another →</button>
        </div>
      </div>);

  }
  return (
    <form className="estimator-form" onSubmit={submit}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div>
          <label>Name</label>
          <input className="lf-input" type="text" required value={form.name} onChange={update('name')} placeholder="Jane Smith" />
        </div>
        <div>
          <label>Phone</label>
          <input className="lf-input" type="tel" value={form.phone} onChange={update('phone')} placeholder="508 ···" />
        </div>
      </div>
      <div style={{ marginTop: 12 }}>
        <label>Email</label>
        <input className="lf-input" type="email" required value={form.email} onChange={update('email')} placeholder="you@business.com" />
      </div>
      <div style={{ marginTop: 12 }}>
        <label>Project type</label>
        <select className="lf-input" value={form.project} onChange={update('project')}>
          {PROJECT_TYPES.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      <div style={{ marginTop: 12 }}>
        <label>Tell us about it</label>
        <textarea required value={form.message} onChange={update('message')} placeholder="A few sentences about your business and what you need." />
      </div>
      <div className="estimator-actions">
        <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          We reply within 1 business day
        </span>
        <button className="btn btn--accent btn--sm" type="submit">Send it <span className="arrow">→</span></button>
      </div>
    </form>);

}

/* ============================================================
   AI Showcase
   ============================================================ */
function AIShowcase() {
  return (
    <section className="section section--tight" id="ai" style={{ padding: "20px 0px 140px", height: "255px" }}>
      <div className="shell">
        <div className="ai-strip">
          <div className="ai-strip-lead">
            <span className="ai-strip-tag">New · AI Studio</span>
            <p className="ai-strip-copy">
              Practical AI add-ons for small businesses — booking assistants, smart search, content co-pilots. Built, hosted, explained in plain English.
            </p>
          </div>
          <a className="ai-strip-link" href="#">
            See live demos <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>);

}

Object.assign(window, { Services, Estimator, AIShowcase });