/* global React, ReactDOM */

const FAQ_CATEGORIES = [
  {
    id: 'cost',
    label: 'Cost & Pricing',
    glyph: '$',
    color: 'green',
    questions: [
      {
        q: 'How much does a website cost?',
        a: 'Our websites typically range from $1,500 for a simple brochure site to $8,000+ for a fully custom e-commerce build. The honest answer is: it depends on what you need. We start every project with a free consultation to scope the work and give you a real number before anything is signed. No surprises, no hidden fees.',
      },
      {
        q: 'Are there ongoing costs after launch?',
        a: 'Yes. Hosting, domain registration, and optional care plan maintenance are recurring costs. Managed hosting includes daily backups, security monitoring, WordPress updates, and a real person to email. We walk you through every ongoing cost before your project starts so you know exactly what you\'re committing to.',
      },
      {
        q: 'Do you offer payment plans?',
        a: 'Yes. We split projects into two or three installments tied to milestones: a deposit to kick things off, a payment at design approval, and a final payment at launch. We can work with you on a schedule that fits your budget.',
      },
    ],
  },
  {
    id: 'timeline',
    label: 'Timeline',
    glyph: '◷',
    color: 'blue',
    questions: [
      {
        q: 'How long does it take to build a website?',
        a: 'Most projects take 4–8 weeks from kickoff to launch. Simple brochure sites can move faster; custom builds with e-commerce or integrations take longer. The biggest variable is almost always how quickly we receive content (copy, photos, and your logo) from you.',
      },
      {
        q: 'What slows a project down?',
        a: 'Content. The number one delay on nearly every project is waiting on text and images from the client. We help with this (we can write copy, source stock photography, and do a professional photo shoot), but the faster you can provide what we need, the faster your site goes live.',
      },
      {
        q: 'Can I see the site before it goes live?',
        a: 'Absolutely. Every project includes a staging environment where you can review the full site, request revisions, and sign off before anything goes public. We don\'t flip the switch until you\'re happy.',
      },
    ],
  },
  {
    id: 'editing',
    label: 'Editing & Ownership',
    glyph: '✎',
    color: 'orange',
    questions: [
      {
        q: 'Can I edit my website myself after it\'s built?',
        a: 'Yes, if you want to. WordPress builds include a straightforward admin dashboard where you can update text, add blog posts, swap images, and more without touching code. If you\'d rather hand that off, our Updates service handles one-off changes, or our Care Plans cover ongoing maintenance so the site stays healthy without you thinking about it.',
      },
      {
        q: 'Who owns the website when it\'s done?',
        a: 'You do. Full stop. When your project is complete, you own the design, the code, and all the content. We never hold your site hostage or lock you into proprietary systems. If you ever want to move to a different host or developer, we\'ll help you make that transition.',
      },
      {
        q: 'What if I need changes after launch?',
        a: 'Small tweaks are part of normal life. We get it. You can hire us for one-off updates, or add a Care Plan that covers WordPress maintenance, security monitoring, backups, and uptime alerts on a Bi-Annual, Quarterly, or Monthly schedule. Either way, you\'re never stranded.',
      },
    ],
  },
  {
    id: 'ecommerce',
    label: 'Selling Online',
    glyph: '◐',
    color: 'navy',
    questions: [
      {
        q: 'Can you build me an online store?',
        a: 'Yes. We build e-commerce sites on WooCommerce (WordPress) and Shopify. Both let you sell products, take payments, manage inventory, and handle shipping. We\'ll recommend the right platform based on how many products you have, how you plan to manage orders, and what your budget looks like.',
      },
      {
        q: 'What does an online store cost?',
        a: 'E-commerce builds start around $3,500 and go up depending on the number of products, custom features, and payment integrations. There are also platform fees to factor in: Shopify starts at $29/month, while WooCommerce is free but requires hosting. We\'ll lay out the full picture before you commit.',
      },
      {
        q: 'Can I sell services and take deposits online?',
        a: 'Yes. We set up booking flows, deposit collection, and service packages regularly, especially for Cape Cod hospitality, tourism, and service businesses. If you want customers to pay, schedule, or sign up online, we can build that.',
      },
    ],
  },
  {
    id: 'seo',
    label: 'SEO & Google',
    glyph: '⚡',
    color: 'green',
    questions: [
      {
        q: 'Will my new website show up on Google?',
        a: 'Every site we build is SEO-ready out of the box: proper page titles, meta descriptions, fast load times, mobile-first design, and structured data markup. That\'s a solid foundation. Getting to the top of Google for competitive searches takes ongoing SEO work, which we offer as a separate monthly service.',
      },
      {
        q: 'Do you offer SEO services?',
        a: 'Yes. We offer local SEO packages built specifically for Cape Cod small businesses: optimizing your Google Business Profile, building local citations, writing keyword-targeted content, and tracking your rankings month over month. We focus on the searches that actually bring in customers, not vanity metrics.',
      },
      {
        q: 'How long does SEO take to work?',
        a: 'Honest answer: 3–6 months before you see meaningful movement, 6–12 months to build real momentum. SEO is a long game. Anyone promising first-page rankings in 30 days is selling you something. We\'d rather set realistic expectations and actually deliver.',
      },
    ],
  },
  {
    id: 'social',
    label: 'Social Media',
    glyph: '↗',
    color: 'blue',
    questions: [
      {
        q: 'Do you manage social media?',
        a: 'We don\'t offer ongoing social media management. That\'s a full-time job and outside our wheelhouse. What we do: connect your website to your social profiles, add sharing tools, and make sure your site is the hub everything points back to. For hands-on social management, we\'re happy to refer you to someone we trust.',
      },
      {
        q: 'How does my website connect to social media?',
        a: 'Your website is your home base. Social drives people to it. We make sure your site has Open Graph tags so links you share on Facebook, Instagram, and LinkedIn preview correctly. We can also wire up your blog or news feed so new posts are easy to share, and set up tracking so you know which social channels actually send you traffic.',
      },
      {
        q: 'Should I even have a website if I have a Facebook page?',
        a: 'Yes, and this matters. Facebook owns your audience. If they change their algorithm, suspend your account, or shut down tomorrow, you lose everything. Your website is the one place online that you own outright. Social media is a tool to drive people there, not a replacement for it.',
      },
    ],
  },
  {
    id: 'hosting',
    label: 'Hosting & Maintenance',
    glyph: '↻',
    color: 'green',
    questions: [
      {
        q: 'What does a website care plan include?',
        a: 'Our care plans cover everything that keeps a WordPress site healthy: core, theme, and plugin updates applied each visit, daily automated backups to off-site storage, security monitoring, uptime alerts, speed checks, and a front-end review after every update cycle. Plans come in Bi-Annual, Quarterly, and Monthly frequencies — no long-term contracts.',
      },
      {
        q: 'What happens if my site gets hacked?',
        a: 'Hacks happen, even on well-maintained sites. If you\'re on one of our care plans, we handle the cleanup: removing malicious code, restoring from a clean backup, identifying the attack vector, and patching the vulnerability. For sites not on a plan, cleanup is billed as an emergency service. Prevention is dramatically cheaper, which is why we recommend ongoing maintenance for any site that handles customer contact or business data.',
      },
      {
        q: 'Can I move my site to a different host later?',
        a: 'Yes, and we\'ll help you. You own your site and we\'ll never hold it hostage to our hosting. If you want to move to a different provider, we\'ll migrate your files, database, and DNS settings. We do ask for notice so we can do it cleanly during a low-traffic period.',
      },
    ],
  },
  {
    id: 'wordpress',
    label: 'WordPress',
    glyph: '◇',
    color: 'orange',
    questions: [
      {
        q: 'Does my business need WordPress, or will a simpler site work?',
        a: 'It depends on how often your content changes and who needs to update it. WordPress is the right choice when you want to update pages yourself without a developer, when you\'re running a blog or news section, or when you need a plugin ecosystem (booking, forms, e-commerce). For businesses with stable content that rarely changes, a leaner hand-coded site can be faster and easier to maintain. We build both and recommend what actually fits your situation.',
      },
      {
        q: 'I\'ve heard WordPress sites are slow. Is that true?',
        a: 'A poorly built WordPress site can be slow: bloated themes, too many plugins, no caching, unoptimized images. A well-built WordPress site, properly configured with server-side caching, a lightweight theme, and optimized assets, is fast. Our WordPress builds score 90+ on Google PageSpeed. The platform isn\'t the problem; the implementation is.',
      },
      {
        q: 'Do WordPress updates break things?',
        a: 'They can, if applied carelessly. The right workflow is: take a backup first, update in a staging environment before pushing to production, and test the key pages after each update cycle. This is exactly what our WordPress care plans do. Done properly, updates almost never cause problems. When they do, a fresh backup makes recovery a matter of minutes, not days.',
      },
    ],
  },
  {
    id: 'performance',
    label: 'Performance & Speed',
    glyph: '◈',
    color: 'navy',
    questions: [
      {
        q: 'Why is my website slow, and does it matter?',
        a: 'The most common culprits: large unoptimized images, bloated plugins or themes, no server-side caching, and too many third-party scripts (analytics, chat widgets, ad tags). Speed matters because 53% of mobile visitors abandon a page that takes more than 3 seconds to load. Google also uses page speed as a ranking signal. A slow site loses traffic at both ends: fewer visitors find it, and more of the ones who do leave before seeing your content.',
      },
      {
        q: 'What are Core Web Vitals and why should I care?',
        a: 'Core Web Vitals are three specific performance metrics Google measures on your site: Largest Contentful Paint (how fast the main content appears), Cumulative Layout Shift (whether the page jumps around while loading), and Interaction to Next Paint (how quickly the page responds to clicks). Since 2021, these are official Google ranking signals; sites that score well have a measurable advantage in search results over slower competitors.',
      },
      {
        q: 'Can you fix my existing site\'s speed, or does it need to be rebuilt?',
        a: 'Often fixable without a rebuild. A WordPress speed optimization audit typically covers image compression, enabling proper caching, removing unused plugins, deferring render-blocking scripts, and switching to a faster hosting environment. Many sites go from a PageSpeed score in the 40s to the 80s or 90s without any design changes. We assess first and quote specifically. We won\'t recommend a rebuild if an optimization pass will achieve the goal.',
      },
    ],
  },
  {
    id: 'accessibility',
    label: 'Accessibility & Compliance',
    glyph: '◑',
    color: 'blue',
    questions: [
      {
        q: 'Does my business website need to be ADA accessible?',
        a: 'Likely yes. Courts have increasingly ruled that business websites are "places of public accommodation" under Title III of the ADA, meaning businesses that operate online can be subject to ADA accessibility claims. Over 4,500 ADA website lawsuits were filed in 2023, most targeting small and medium businesses in retail, hospitality, food service, and healthcare. The legal exposure is real, and the cost of retrofitting an inaccessible site is significantly higher than building it correctly from the start.',
      },
      {
        q: 'What is WCAG and what level do we need to meet?',
        a: 'WCAG (the Web Content Accessibility Guidelines) is the international standard for web accessibility, published by the W3C. It\'s organized into levels A, AA, and AAA. Level AA is the standard used by most courts, regulators, and government requirements when evaluating compliance. Meeting WCAG 2.1 AA means your site works for users with visual, auditory, motor, and cognitive disabilities, including those using screen readers, keyboard-only navigation, or screen magnification.',
      },
      {
        q: 'Can\'t I just install an accessibility widget to be compliant?',
        a: 'No, and this is important. Accessibility overlay products (AccessiBe, UserWay, and others) that add a toolbar to your site do not achieve real WCAG compliance. The National Federation of the Blind, blind users, and independent testers have all documented that these tools fail to address the substantive issues affecting actual disabled users. Courts have ruled against defendants whose only accommodation was an overlay. Real compliance requires an audit and remediation in the underlying code.',
      },
    ],
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={'faq-item' + (open ? ' is-open' : '')}>
      <button
        className="faq-q"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <span className="faq-chevron" aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="faq-a">{a}</div>}
    </div>
  );
}

function FAQPage() {
  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="fq-hero">
        <div className="fq-hero-bg" aria-hidden="true" />
        <div className="fq-hero-content">
          <div className="shell">
            <span className="eyebrow fq-eyebrow">Got questions?</span>
            <h1 className="fq-hero-hl">Frequently Asked Questions</h1>
            <p className="fq-hero-sub">
              Straight answers to the things Cape Cod business owners ask us most.
            </p>
          </div>
        </div>
      </div>

      {/* Body */}
      <section className="fq-body">
        <div className="shell">
          <div className="fq-layout">

            {/* FAQ content */}
            <div className="fq-content">
              {FAQ_CATEGORIES.map(cat => (
                <div key={cat.id} className="fq-category" id={cat.id}>
                  <div className="fq-cat-header">
                    <span className={'fq-cat-glyph fq-cat-glyph--' + cat.color}>{cat.glyph}</span>
                    <h2 className="fq-cat-hl">{cat.label}</h2>
                  </div>
                  <div className="fq-items">
                    {cat.questions.map((item, i) => (
                      <FAQItem key={i} q={item.q} a={item.a} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="fq-sidebar">
              <div className="fq-sidebar-card fq-sidebar-card--dark">
                <p className="fq-sidebar-eyebrow">Ready to start?</p>
                <p className="fq-sidebar-hl">Get a free estimate from experts not salespeople</p>
                <p className="fq-sidebar-note">No pitch deck. No obligation. Just a real conversation about your project.</p>
                <a className="btn btn--accent fq-sidebar-btn" href="quote.html">
                  Request a Quote <span className="arrow">→</span>
                </a>
              </div>

              <div className="fq-sidebar-card">
                <p className="fq-sidebar-eyebrow">Prefer to talk?</p>
                <p className="fq-sidebar-hl" style={{ color: 'var(--ink)' }}>Call or text us directly.</p>
                <a className="fq-sidebar-phone" href="tel:5084132043">508.413.2043</a>
                <p className="fq-sidebar-hours">Mon–Fri · 9am–5pm ET</p>
              </div>

              <nav className="fq-jump-nav" aria-label="Jump to category">
                <span className="fq-jump-label">Categories</span>
                <ul className="fq-jump-list">
                  {FAQ_CATEGORIES.map(cat => (
                    <li key={cat.id}>
                      <a className="fq-jump-link" href={'#' + cat.id}>{cat.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

          </div>
        </div>
      </section>

      <NewsletterBanner />
      <Footer />
    </React.Fragment>
  );
}

const fqRoot = ReactDOM.createRoot(document.getElementById('root'));
fqRoot.render(<FAQPage />);
