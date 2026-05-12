/* global React, ReactDOM */

const QUOTE_ENDPOINT = 'https://formspree.io/f/xnjwgqld';

const SERVICES_OPTIONS = [
  'Website Design',
  'Website Redesign',
  'E-Commerce',
  'Premium WordPress Hosting',
  'Logo & Branding',
  'Website Move',
  'Other',
];

const BUDGET_OPTIONS = [
  '$1,000 – $1,500',
  '$1,500 – $2,000',
  '$2,000 – $3,000',
  '$3,000 – $4,000',
  '$5,000+',
  'No budget set',
];

const HEARD_OPTIONS = [
  'Web Search',
  'Referral / Recommendation',
  'Social Media',
  'Other',
];

const INITIAL = {
  name: '', company: '', email: '', phone: '', website: '',
  heard: '', referrer: '',
  services: [], serviceOther: '',
  refSite1: '', refSite2: '',
  budget: '', details: '',
  newsletter: false,
};

function QuotePage() {
  const [form, setForm] = React.useState(INITIAL);
  const [status, setStatus] = React.useState('idle'); // idle | submitting | success | error

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const setCheck = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.checked }));

  const toggleService = (val) => {
    setForm(f => ({
      ...f,
      services: f.services.includes(val)
        ? f.services.filter(s => s !== val)
        : [...f.services, val],
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const payload = {
        _subject: 'Quote Request — COLEwebdev',
        name: form.name,
        company: form.company,
        email: form.email,
        phone: form.phone,
        website: form.website,
        'how_heard': form.heard,
        referrer: form.referrer,
        services: form.services.join(', '),
        services_other: form.serviceOther,
        reference_site_1: form.refSite1,
        reference_site_2: form.refSite2,
        budget: form.budget,
        details: form.details,
        newsletter: form.newsletter ? 'Yes' : 'No',
      };
      const res = await fetch(QUOTE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <React.Fragment>
        <Header />
        <div className="rq-success">
          <div className="shell">
            <div className="rq-success-inner">
              <div className="rq-success-icon">✓</div>
              <h1 className="rq-success-hl">Quote request received.</h1>
              <p className="rq-success-sub">
                Thanks, {form.name.split(' ')[0] || 'there'}! We'll review your project details and get back to you within one business day. If it's urgent, call us at <strong>508.413.2043</strong>.
              </p>
              <a className="btn btn--primary" href="index.html">Back to home <span className="arrow">→</span></a>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="rq-hero">
        <div className="rq-hero-bg" aria-hidden="true" />
        <div className="rq-hero-content">
          <div className="shell">
            <span className="eyebrow rq-eyebrow">Get Started</span>
            <h1 className="rq-hero-hl">Request a <em>Quote.</em></h1>
            <p className="rq-hero-sub">
              Tell us about your project and we'll get back to you within one business day with a real scope and a fair price.
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <section className="rq-section">
        <div className="shell">
          <div className="rq-layout">

            {/* Sidebar */}
            <aside className="rq-sidebar">
              <div className="rq-sidebar-card">
                <div className="rq-sidebar-avatars">
                  <img src="assets/josiah-cole-cape-cod-website-designer.jpg" alt="Josiah Cole" className="rq-avatar" />
                  <img src="assets/desiree-cole-webdiva-cape-cod-website-designer.jpg" alt="Desiree Cole" className="rq-avatar" />
                </div>
                <p className="rq-sidebar-note">Every quote goes through Josiah & Desiree directly. No sales team, no runaround.</p>
                <div className="rq-sidebar-divider" />
                <div className="rq-sidebar-item">
                  <span className="rq-sidebar-label">Response time</span>
                  <span className="rq-sidebar-val">1 business day</span>
                </div>
                <div className="rq-sidebar-item">
                  <span className="rq-sidebar-label">First consultation</span>
                  <span className="rq-sidebar-val">Free — no commitment</span>
                </div>
                <div className="rq-sidebar-item">
                  <span className="rq-sidebar-label">Phone</span>
                  <a className="rq-sidebar-val rq-sidebar-link" href="tel:5084132043">508.413.2043</a>
                </div>
                <div className="rq-sidebar-item">
                  <span className="rq-sidebar-label">Email</span>
                  <a className="rq-sidebar-val rq-sidebar-link" href="mailto:info@colewebdev.com">info@colewebdev.com</a>
                </div>
              </div>
            </aside>

            {/* Form body */}
            <form className="rq-form" onSubmit={submit} noValidate>

              {/* Section 1: Contact info */}
              <div className="rq-form-section">
                <h2 className="rq-form-section-hl">Your information</h2>
                <div className="rq-grid-2">
                  <div className="rq-field">
                    <label className="rq-label" htmlFor="rq-name">Name <span className="rq-req">*</span></label>
                    <input id="rq-name" className="rq-input" type="text" required value={form.name} onChange={set('name')} placeholder="First Last" />
                  </div>
                  <div className="rq-field">
                    <label className="rq-label" htmlFor="rq-company">Company <span className="rq-req">*</span></label>
                    <input id="rq-company" className="rq-input" type="text" required value={form.company} onChange={set('company')} placeholder="Your business name" />
                  </div>
                </div>
                <div className="rq-grid-2">
                  <div className="rq-field">
                    <label className="rq-label" htmlFor="rq-email">Email <span className="rq-req">*</span></label>
                    <input id="rq-email" className="rq-input" type="email" required value={form.email} onChange={set('email')} placeholder="you@business.com" />
                  </div>
                  <div className="rq-field">
                    <label className="rq-label" htmlFor="rq-phone">Phone <span className="rq-req">*</span></label>
                    <input id="rq-phone" className="rq-input" type="tel" required value={form.phone} onChange={set('phone')} placeholder="508 ···" />
                  </div>
                </div>
                <div className="rq-field">
                  <label className="rq-label" htmlFor="rq-website">Current website <span className="rq-optional">(optional)</span></label>
                  <input id="rq-website" className="rq-input" type="url" value={form.website} onChange={set('website')} placeholder="https://yoursite.com" />
                </div>
              </div>

              {/* Section 2: How did you hear */}
              <div className="rq-form-section">
                <h2 className="rq-form-section-hl">How did you find us?</h2>
                <div className="rq-radio-group">
                  {HEARD_OPTIONS.map(opt => (
                    <label key={opt} className="rq-radio-label">
                      <input
                        type="radio"
                        name="heard"
                        value={opt}
                        checked={form.heard === opt}
                        onChange={set('heard')}
                        className="rq-radio"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
                {form.heard === 'Referral / Recommendation' && (
                  <div className="rq-field rq-field--mt">
                    <label className="rq-label" htmlFor="rq-referrer">Who referred or recommended us?</label>
                    <input id="rq-referrer" className="rq-input" type="text" value={form.referrer} onChange={set('referrer')} placeholder="Name or business" />
                  </div>
                )}
              </div>

              {/* Section 3: Services */}
              <div className="rq-form-section">
                <h2 className="rq-form-section-hl">Services you're interested in</h2>
                <div className="rq-check-group">
                  {SERVICES_OPTIONS.map(opt => (
                    <label key={opt} className="rq-check-label">
                      <input
                        type="checkbox"
                        value={opt}
                        checked={form.services.includes(opt)}
                        onChange={() => toggleService(opt)}
                        className="rq-check"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
                {form.services.includes('Other') && (
                  <div className="rq-field rq-field--mt">
                    <label className="rq-label" htmlFor="rq-svc-other">Please describe</label>
                    <input id="rq-svc-other" className="rq-input" type="text" value={form.serviceOther} onChange={set('serviceOther')} placeholder="Tell us what you need" />
                  </div>
                )}
              </div>

              {/* Section 4: Design references */}
              <div className="rq-form-section">
                <h2 className="rq-form-section-hl">Design references <span className="rq-optional">(optional)</span></h2>
                <p className="rq-form-section-desc">Share links to websites whose design, feel, or functionality you admire. These help us understand your aesthetic direction.</p>
                <div className="rq-grid-2">
                  <div className="rq-field">
                    <label className="rq-label" htmlFor="rq-ref1">Reference site</label>
                    <input id="rq-ref1" className="rq-input" type="url" value={form.refSite1} onChange={set('refSite1')} placeholder="https://…" />
                  </div>
                  <div className="rq-field">
                    <label className="rq-label" htmlFor="rq-ref2">Another reference</label>
                    <input id="rq-ref2" className="rq-input" type="url" value={form.refSite2} onChange={set('refSite2')} placeholder="https://…" />
                  </div>
                </div>
              </div>

              {/* Section 5: Budget */}
              <div className="rq-form-section">
                <h2 className="rq-form-section-hl">Project budget</h2>
                <div className="rq-radio-group rq-radio-group--wrap">
                  {BUDGET_OPTIONS.map(opt => (
                    <label key={opt} className="rq-radio-label rq-radio-label--pill">
                      <input
                        type="radio"
                        name="budget"
                        value={opt}
                        checked={form.budget === opt}
                        onChange={set('budget')}
                        className="rq-radio"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Section 6: Project details */}
              <div className="rq-form-section">
                <h2 className="rq-form-section-hl">Project details <span className="rq-req">*</span></h2>
                <p className="rq-form-section-desc">Tell us about your business, what you're trying to accomplish, and anything that will help us understand the scope.</p>
                <div className="rq-field">
                  <textarea
                    id="rq-details"
                    className="rq-input rq-textarea"
                    required
                    rows={6}
                    value={form.details}
                    onChange={set('details')}
                    placeholder="A few sentences about your business and what you need. The more detail, the better our quote."
                  />
                </div>
              </div>

              {/* Newsletter + submit */}
              <div className="rq-form-footer">
                <label className="rq-check-label rq-newsletter">
                  <input type="checkbox" className="rq-check" checked={form.newsletter} onChange={setCheck('newsletter')} />
                  <span>Subscribe to our quarterly newsletter — tips, launches, and Cape Cod web news.</span>
                </label>
                {status === 'error' && (
                  <p className="rq-error">Something went wrong — please try again or call us at 508.413.2043.</p>
                )}
                <div className="rq-submit-row">
                  <span className="rq-submit-note">We reply within 1 business day</span>
                  <button className="btn btn--primary" type="submit" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending…' : <>Submit quote request <span className="arrow">→</span></>}
                  </button>
                </div>
              </div>

            </form>
          </div>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}

const rqRoot = ReactDOM.createRoot(document.getElementById('root'));
rqRoot.render(<QuotePage />);
