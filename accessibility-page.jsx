/* global React, ReactDOM */

function AccessibilityPage() {
  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="ac-hero">
        <div className="ac-hero-bg" aria-hidden="true" />
        <div className="ac-hero-content">
          <div className="shell">
            <span className="eyebrow ac-eyebrow">Inclusion</span>
            <h1 className="ac-hero-hl">Accessibility Statement</h1>
            <p className="ac-hero-meta">Last updated: May 13, 2026</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <section className="ac-body">
        <div className="shell">
          <div className="ac-layout">

            {/* TOC */}
            <nav className="ac-toc" aria-label="Page contents">
              <span className="ac-toc-label">On this page</span>
              <ul className="ac-toc-list">
                <li><a href="#commitment">Our commitment</a></li>
                <li><a href="#standards">Standards</a></li>
                <li><a href="#features">Accessibility features</a></li>
                <li><a href="#limitations">Known limitations</a></li>
                <li><a href="#feedback">Feedback</a></li>
                <li><a href="#third-party">Third-party content</a></li>
              </ul>
            </nav>

            {/* Content */}
            <div className="ac-content">

              <div className="ac-section" id="commitment">
                <h2 className="ac-section-hl">Our commitment</h2>
                <p className="ac-p">
                  COLEwebdev is committed to ensuring that <strong>colewebdev.org</strong> is accessible to all visitors, including people with visual, auditory, motor, or cognitive disabilities. Accessibility is not an afterthought — it is a core principle in how we build websites, both for our own site and for the clients we serve.
                </p>
                <p className="ac-p">
                  We believe that everyone deserves equal access to information and services on the web. We continuously work to improve the accessibility of this site and to remove barriers where they exist.
                </p>
              </div>

              <div className="ac-section" id="standards">
                <h2 className="ac-section-hl">Standards we follow</h2>
                <p className="ac-p">
                  We aim to conform to the <strong>Web Content Accessibility Guidelines (WCAG) 2.1, Level AA</strong>. These guidelines, published by the World Wide Web Consortium (W3C), are the internationally recognized standard for web accessibility. They are organized around four principles:
                </p>
                <ul className="ac-list">
                  <li><strong>Perceivable</strong> — Information and user interface components are presentable to users in ways they can perceive.</li>
                  <li><strong>Operable</strong> — User interface components and navigation are operable.</li>
                  <li><strong>Understandable</strong> — Information and the operation of the user interface are understandable.</li>
                  <li><strong>Robust</strong> — Content can be interpreted reliably by a wide variety of user agents, including assistive technologies.</li>
                </ul>
              </div>

              <div className="ac-section" id="features">
                <h2 className="ac-section-hl">Accessibility features</h2>
                <p className="ac-p">This site includes the following accessibility features:</p>
                <ul className="ac-list">
                  <li><strong>Semantic HTML</strong> — Pages use proper heading structure, landmark elements (<code>nav</code>, <code>main</code>, <code>footer</code>), and lists to communicate content structure to assistive technologies.</li>
                  <li><strong>Keyboard navigation</strong> — All interactive elements — links, buttons, and form inputs — are reachable and operable using a keyboard alone.</li>
                  <li><strong>Alt text</strong> — All meaningful images include descriptive <code>alt</code> attributes. Decorative images use empty alt text (<code>alt=""</code>) and <code>aria-hidden="true"</code> where appropriate.</li>
                  <li><strong>Color contrast</strong> — Text and interactive elements meet or exceed WCAG AA contrast ratio requirements (4.5:1 for normal text, 3:1 for large text).</li>
                  <li><strong>Responsive design</strong> — The site adapts to any screen size, including mobile devices, tablets, and large displays. Content remains readable at up to 200% zoom.</li>
                  <li><strong>Focus indicators</strong> — Visible focus styles are maintained for keyboard users throughout the site.</li>
                  <li><strong>Form labels</strong> — All form inputs have associated labels and clear error messages that do not rely on color alone.</li>
                  <li><strong>ARIA labels</strong> — Where native HTML semantics are insufficient, ARIA attributes are used to communicate roles and states to assistive technologies.</li>
                  <li><strong>No time limits</strong> — No content on this site requires interaction within a time limit.</li>
                  <li><strong>No seizure-inducing content</strong> — Animations and transitions are subtle and do not flash more than three times per second.</li>
                </ul>
              </div>

              <div className="ac-section" id="limitations">
                <h2 className="ac-section-hl">Known limitations</h2>
                <p className="ac-p">While we strive for full WCAG 2.1 AA conformance, some areas of this site may not yet fully meet that standard:</p>
                <ul className="ac-list">
                  <li><strong>Third-party embedded content</strong> — Some content loaded from external sources (such as social media embeds or third-party widgets) may not meet our accessibility standards. We do not control the accessibility of third-party content.</li>
                  <li><strong>Legacy media</strong> — Older images pulled from our WordPress archive may lack descriptive alt text. We are working to address these incrementally.</li>
                </ul>
                <p className="ac-p">We are actively working to resolve these issues. If you encounter a specific barrier, please let us know.</p>
              </div>

              <div className="ac-section" id="feedback">
                <h2 className="ac-section-hl">Feedback and contact</h2>
                <p className="ac-p">
                  We welcome feedback on the accessibility of this site. If you experience a barrier, find content you cannot access, or have suggestions for improvement, please contact us:
                </p>
                <div className="ac-contact-block">
                  <div className="ac-contact-row">
                    <span className="ac-contact-label">Email</span>
                    <span className="ac-contact-val"><a href="mailto:info@colewebdev.com">info@colewebdev.com</a></span>
                  </div>
                  <div className="ac-contact-row">
                    <span className="ac-contact-label">Phone</span>
                    <span className="ac-contact-val"><a href="tel:5084132043">508.413.2043</a></span>
                  </div>
                  <div className="ac-contact-row">
                    <span className="ac-contact-label">Address</span>
                    <span className="ac-contact-val">3960 State Hwy, Unit 4 · Eastham, MA 02642</span>
                  </div>
                </div>
                <p className="ac-p" style={{ marginTop: 20 }}>
                  We aim to respond to accessibility feedback within <strong>2 business days</strong>. We will work to provide the information or functionality you need through an accessible alternative if necessary.
                </p>
              </div>

              <div className="ac-section" id="third-party">
                <h2 className="ac-section-hl">Third-party content</h2>
                <p className="ac-p">
                  This website loads fonts from Google Fonts and JavaScript libraries from unpkg.com. These third-party resources are outside our direct control. We have selected them for their wide browser support and performance characteristics, and we review them periodically.
                </p>
                <p className="ac-p">
                  Links to external websites — including client sites, social media profiles, and news articles — are provided for reference. We cannot guarantee the accessibility of external sites.
                </p>
                <p className="ac-p" style={{ fontSize: 13, color: 'var(--muted)', marginTop: 32 }}>
                  This statement was last reviewed on May 13, 2026. We review and update it at least annually.
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

const acRoot = ReactDOM.createRoot(document.getElementById('root'));
acRoot.render(<AccessibilityPage />);
