/* global React, ReactDOM */

/* Replace with your Formspree endpoint once set up at formspree.io */
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

const INITIAL = {
  name: '', company: '', email: '', phone: '',
  website: '', message: '', newsletter: false, captcha: '',
};

function ContactPage() {
  const [fields, setFields] = React.useState(INITIAL);
  const [errors, setErrors] = React.useState({});
  const [status, setStatus] = React.useState('idle'); /* idle | submitting | success | error */

  function set(key, val) {
    setFields(f => ({ ...f, [key]: val }));
    setErrors(e => ({ ...e, [key]: undefined }));
  }

  function validate() {
    const e = {};
    if (!fields.name.trim())    e.name    = 'Name is required.';
    if (!fields.company.trim()) e.company = 'Company is required.';
    if (!fields.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      e.email = 'A valid email is required.';
    if (!fields.phone.trim())   e.phone   = 'Phone is required.';
    if (!fields.message.trim()) e.message = 'Please include a message.';
    if (fields.captcha.trim() !== '2')
      e.captcha = 'Hint: there are two bridges.';
    return e;
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }

    setStatus('submitting');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name:       fields.name,
          company:    fields.company,
          email:      fields.email,
          phone:      fields.phone,
          website:    fields.website,
          message:    fields.message,
          newsletter: fields.newsletter ? 'Yes' : 'No',
        }),
      });
      if (res.ok) {
        setStatus('success');
        setFields(INITIAL);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <React.Fragment>
      <Header />

      {/* ── Intro ── */}
      <section className="ct-intro">
        <div className="shell">
          <span className="eyebrow">Get in touch</span>
          <h1 className="ct-intro-hl">Let's talk.</h1>
        </div>
      </section>

      {/* ── Main ── */}
      <section className="ct-main">
        <div className="shell">
          <div className="ct-grid">

            {/* ── Contact info ── */}
            <aside className="ct-info">
              <div className="ct-info-block">
                <div className="ct-info-label">Phone</div>
                <a className="ct-phone" href="tel:5084132043">508.413.2043</a>
              </div>

              <div className="ct-info-block">
                <div className="ct-info-label">Email</div>
                <p className="ct-detail">
                  <a href="mailto:info@colewebdev.com">info@colewebdev.com</a>
                </p>
              </div>

              <div className="ct-info-block">
                <div className="ct-info-label">Studio</div>
                <p className="ct-detail">
                  3960 State Hwy, Unit 4<br />Eastham, MA 02642
                </p>
              </div>

              <div className="ct-info-block">
                <div className="ct-info-label">Mailing</div>
                <p className="ct-detail">
                  PO Box 423<br />North Eastham, MA 02651
                </p>
              </div>

              <div className="ct-info-block">
                <div className="ct-info-label">Hours</div>
                <div className="ct-hours-row">
                  <span className="ct-hours-label">Mon – Fri</span>
                  <span>9 am – 5 pm</span>
                </div>
                <div className="ct-hours-row">
                  <span className="ct-hours-label">Sat</span>
                  <span>2 – 5 pm by appt.</span>
                </div>
                <span className="ct-bronco">If you see our Bronco, we're here</span>
              </div>
            </aside>

            {/* ── Form ── */}
            <div className="ct-form-wrap">
              {status === 'success' ? (
                <div className="ct-success">
                  <div className="ct-success-icon">✓</div>
                  <h2 className="ct-success-hl">Message received.</h2>
                  <p className="ct-success-body">
                    Thanks for reaching out — we'll be in touch within one business day.
                  </p>
                </div>
              ) : (
                <React.Fragment>
                  <h2 className="ct-form-title">Questions or comments?</h2>
                  <p className="ct-form-sub">
                    Use this form for general inquiries. For a project quote, use our{' '}
                    <a href="https://www.colewebdev.com/request-a-quote/" target="_blank" rel="noopener">
                      Request a Quote
                    </a>{' '}
                    form.
                  </p>

                  <form className="ct-form" onSubmit={handleSubmit} noValidate>

                    <div className="ct-row">
                      <div className="ct-field">
                        <label className="ct-label" htmlFor="ct-name">
                          Name <span className="req">*</span>
                        </label>
                        <input
                          id="ct-name"
                          className={`ct-input${errors.name ? ' error' : ''}`}
                          type="text"
                          placeholder="First Last"
                          value={fields.name}
                          onChange={e => set('name', e.target.value)}
                        />
                        {errors.name && <span className="ct-error-msg">{errors.name}</span>}
                      </div>

                      <div className="ct-field">
                        <label className="ct-label" htmlFor="ct-company">
                          Company <span className="req">*</span>
                        </label>
                        <input
                          id="ct-company"
                          className={`ct-input${errors.company ? ' error' : ''}`}
                          type="text"
                          value={fields.company}
                          onChange={e => set('company', e.target.value)}
                        />
                        {errors.company && <span className="ct-error-msg">{errors.company}</span>}
                      </div>
                    </div>

                    <div className="ct-row">
                      <div className="ct-field">
                        <label className="ct-label" htmlFor="ct-email">
                          Email <span className="req">*</span>
                        </label>
                        <input
                          id="ct-email"
                          className={`ct-input${errors.email ? ' error' : ''}`}
                          type="email"
                          value={fields.email}
                          onChange={e => set('email', e.target.value)}
                        />
                        {errors.email && <span className="ct-error-msg">{errors.email}</span>}
                      </div>

                      <div className="ct-field">
                        <label className="ct-label" htmlFor="ct-phone">
                          Phone <span className="req">*</span>
                        </label>
                        <input
                          id="ct-phone"
                          className={`ct-input${errors.phone ? ' error' : ''}`}
                          type="tel"
                          value={fields.phone}
                          onChange={e => set('phone', e.target.value)}
                        />
                        {errors.phone && <span className="ct-error-msg">{errors.phone}</span>}
                      </div>
                    </div>

                    <div className="ct-field">
                      <label className="ct-label" htmlFor="ct-website">Website</label>
                      <input
                        id="ct-website"
                        className="ct-input"
                        type="url"
                        placeholder="https://"
                        value={fields.website}
                        onChange={e => set('website', e.target.value)}
                      />
                    </div>

                    <div className="ct-field">
                      <label className="ct-label" htmlFor="ct-message">
                        Questions / Comments <span className="req">*</span>
                      </label>
                      <textarea
                        id="ct-message"
                        className={`ct-textarea${errors.message ? ' error' : ''}`}
                        rows={5}
                        value={fields.message}
                        onChange={e => set('message', e.target.value)}
                      />
                      {errors.message && <span className="ct-error-msg">{errors.message}</span>}
                    </div>

                    <label className="ct-check-wrap">
                      <input
                        className="ct-check"
                        type="checkbox"
                        checked={fields.newsletter}
                        onChange={e => set('newsletter', e.target.checked)}
                      />
                      <span className="ct-check-label">
                        Sign me up for the COLEwebdev quarterly eNewsletter.
                      </span>
                    </label>

                    <div className="ct-captcha">
                      <p className="ct-captcha-q">
                        <strong>Quick local check:</strong> How many vehicle bridges connect Cape Cod to the mainland?{' '}
                        <span className="req" style={{ color: 'var(--brand-blue)' }}>*</span>
                      </p>
                      <input
                        className={`ct-captcha-input${errors.captcha ? ' error' : ''}`}
                        type="number"
                        min="0"
                        max="9"
                        value={fields.captcha}
                        onChange={e => set('captcha', e.target.value)}
                        aria-label="Spam prevention answer"
                      />
                      {errors.captcha && <span className="ct-error-msg">{errors.captcha}</span>}
                    </div>

                    {status === 'error' && (
                      <p className="ct-error-msg" style={{ fontSize: 14 }}>
                        Something went wrong. Please try again or call us at{' '}
                        <a href="tel:5084132043">508.413.2043</a>.
                      </p>
                    )}

                    <div className="ct-submit-row">
                      <button
                        className="btn btn--primary"
                        type="submit"
                        disabled={status === 'submitting'}
                      >
                        {status === 'submitting' ? 'Sending…' : 'Send message'}
                        {status !== 'submitting' && <span className="arrow"> →</span>}
                      </button>
                      <span className="ct-submit-note">
                        We respond within one business day.
                      </span>
                    </div>

                  </form>
                </React.Fragment>
              )}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}

const ctRoot = ReactDOM.createRoot(document.getElementById('root'));
ctRoot.render(<ContactPage />);
