/* global React, ReactDOM */

function PrivacyPage() {
  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="pp-hero">
        <div className="pp-hero-bg" aria-hidden="true" />
        <div className="pp-hero-content">
          <div className="shell">
            <span className="eyebrow pp-eyebrow">Legal</span>
            <h1 className="pp-hero-hl">Privacy Policy</h1>
            <p className="pp-hero-meta">Last updated: May 13, 2026</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <section className="pp-body">
        <div className="shell">
          <div className="pp-layout">

            {/* TOC */}
            <nav className="pp-toc" aria-label="Page contents">
              <span className="pp-toc-label">On this page</span>
              <ul className="pp-toc-list">
                <li><a href="#what-we-collect">What we collect</a></li>
                <li><a href="#how-we-use">How we use it</a></li>
                <li><a href="#third-parties">Third-party services</a></li>
                <li><a href="#analytics">Analytics &amp; cookies</a></li>
                <li><a href="#email">Email &amp; newsletter</a></li>
                <li><a href="#retention">Data retention</a></li>
                <li><a href="#your-rights">Your rights</a></li>
                <li><a href="#contact">Contact us</a></li>
              </ul>
            </nav>

            {/* Content */}
            <div className="pp-content">

              <div className="pp-section">
                <p className="pp-p">
                  COLEwebdev ("we," "us," "our") is a web design and development studio located in Eastham, MA. This policy explains what information we collect when you visit <strong>colewebdev.org</strong>, how we use it, and your rights regarding that information.
                </p>
                <p className="pp-p">
                  We keep this simple and honest — the same way we try to do everything else.
                </p>
              </div>

              <div className="pp-section" id="what-we-collect">
                <h2 className="pp-section-hl">What we collect</h2>
                <p className="pp-p">We only collect information you voluntarily provide through one of our contact forms.</p>

                <p className="pp-p"><strong>Contact form</strong> — when you reach out via our general contact page, we collect:</p>
                <ul className="pp-list">
                  <li>Name and company name</li>
                  <li>Email address and phone number</li>
                  <li>Current website URL <em>(optional)</em></li>
                  <li>Your message or question</li>
                  <li>Newsletter opt-in preference</li>
                </ul>

                <p className="pp-p"><strong>Quote request form</strong> — when you submit a project quote request, we additionally collect:</p>
                <ul className="pp-list">
                  <li>How you found us and who referred you <em>(optional)</em></li>
                  <li>Services you are interested in</li>
                  <li>Reference website URLs for design direction <em>(optional)</em></li>
                  <li>Project budget range <em>(optional)</em></li>
                  <li>Project description and details</li>
                </ul>

                <p className="pp-p"><strong>Home page inquiry form</strong> — a shorter version of the contact form collecting name, email, phone, project type, and message.</p>

                <div className="pp-callout">
                  <p>We do not collect payment information. We do not create user accounts. We do not use tracking pixels or ad retargeting.</p>
                </div>
              </div>

              <div className="pp-section" id="how-we-use">
                <h2 className="pp-section-hl">How we use it</h2>
                <p className="pp-p">The information you submit is used solely to:</p>
                <ul className="pp-list">
                  <li><strong>Respond to your inquiry</strong> — we reply to contact form submissions within one business day</li>
                  <li><strong>Prepare a project proposal</strong> — quote request details inform our scope and pricing</li>
                  <li><strong>Send our newsletter</strong> — only if you explicitly opt in; you can unsubscribe at any time</li>
                </ul>
                <p className="pp-p">We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
              </div>

              <div className="pp-section" id="third-parties">
                <h2 className="pp-section-hl">Third-party services</h2>
                <p className="pp-p">Form submissions are transmitted to and stored by <strong>Formspree</strong> (formspree.io), a third-party form backend service. Formspree receives all fields you submit and forwards them to our email inbox. Their privacy policy is available at <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">formspree.io/legal/privacy-policy</a>.</p>
                <p className="pp-p">This site loads the following resources from external CDNs at page load:</p>
                <ul className="pp-list">
                  <li><strong>Google Fonts</strong> — Geist, Geist Mono, and Instrument Serif typefaces (fonts.googleapis.com)</li>
                  <li><strong>unpkg.com</strong> — React, ReactDOM, and Babel Standalone JavaScript libraries</li>
                </ul>
                <p className="pp-p">These CDN requests may log your IP address as part of standard server logging, subject to each provider's own privacy policy. We do not control or receive that data.</p>
              </div>

              <div className="pp-section" id="analytics">
                <h2 className="pp-section-hl">Analytics &amp; cookies</h2>
                <p className="pp-p">COLEwebdev does not currently use any analytics tracking on this website. No Google Analytics, no pixel tracking, no session recording tools are installed.</p>
                <p className="pp-p">We do not set any cookies of our own. Third-party CDN providers (Google Fonts, unpkg) may set cookies subject to their own policies; we have no control over this.</p>
              </div>

              <div className="pp-section" id="email">
                <h2 className="pp-section-hl">Email &amp; newsletter</h2>
                <p className="pp-p">If you opt in to our newsletter on any form, you will receive our quarterly COLEwebdev eNewsletter — periodic updates about web design, launches, and Cape Cod business topics. We send no more than four issues per year.</p>
                <p className="pp-p">You can unsubscribe at any time by replying to any newsletter email with "unsubscribe" or by emailing us directly at <a href="mailto:info@colewebdev.com">info@colewebdev.com</a>.</p>
                <p className="pp-p">We do not send promotional emails to contacts who have not opted in.</p>
              </div>

              <div className="pp-section" id="retention">
                <h2 className="pp-section-hl">Data retention</h2>
                <p className="pp-p">Form submissions are retained in our Formspree account and email system for as long as necessary to respond to your inquiry and maintain business records. If you would like your information removed, contact us and we will delete it from our records within 30 days.</p>
              </div>

              <div className="pp-section" id="your-rights">
                <h2 className="pp-section-hl">Your rights</h2>
                <p className="pp-p">Regardless of where you are located, you have the right to:</p>
                <ul className="pp-list">
                  <li>Request a copy of the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt out of newsletter communications at any time</li>
                </ul>
                <p className="pp-p">To exercise any of these rights, contact us using the information below.</p>
              </div>

              <div className="pp-section" id="contact">
                <h2 className="pp-section-hl">Contact us</h2>
                <p className="pp-p">Questions about this policy or how we handle your data? Reach us directly:</p>
                <div className="pp-contact-block">
                  <div className="pp-contact-row">
                    <span className="pp-contact-label">Email</span>
                    <span className="pp-contact-val"><a href="mailto:info@colewebdev.com">info@colewebdev.com</a></span>
                  </div>
                  <div className="pp-contact-row">
                    <span className="pp-contact-label">Phone</span>
                    <span className="pp-contact-val"><a href="tel:5084132043">508.413.2043</a></span>
                  </div>
                  <div className="pp-contact-row">
                    <span className="pp-contact-label">Address</span>
                    <span className="pp-contact-val">3960 State Hwy, Unit 4 · Eastham, MA 02642</span>
                  </div>
                </div>
                <p className="pp-p" style={{ marginTop: 20, fontSize: 13, color: 'var(--muted)' }}>
                  We may update this policy from time to time. Material changes will be noted with a revised "Last updated" date above. Continued use of the site after changes constitutes acceptance of the updated policy.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}

const ppRoot = ReactDOM.createRoot(document.getElementById('root'));
ppRoot.render(<PrivacyPage />);
