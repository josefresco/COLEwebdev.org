/* global React, ReactDOM */

const WHITEPAPERS = window.WHITEPAPERS_DATA || [
  {
    id: 'what-web-design-does',
    num: '01',
    title: 'What Does Web Design Do?',
    subtitle: 'A Cape Cod Business Guide',
    summary: 'Web design is more than making a website look good — it\'s a system of decisions that determines whether a visitor stays, trusts you, and calls.',
    sections: [
      {
        heading: 'More Than a Pretty Face',
        body: [
          'Ask most business owners what web design is, and they\'ll describe how a site looks. That\'s part of it — but visual design is just the surface. Great web design is a set of strategic decisions about how information is organized, how users navigate, how trust is established, and how visitors are guided toward taking action.',
          'A beautiful website that nobody can find, loads slowly, or buries the phone number three pages deep is bad design — regardless of how polished the visuals are. Design that works is design that performs.',
        ],
      },
      {
        heading: 'What Good Web Design Actually Does',
        body: [
          'A well-designed website builds trust at first glance. Users form an opinion within 0.05 seconds of landing on a page. If the design looks dated, cluttered, or amateurish, potential customers leave — not because they\'ve consciously decided you\'re unprofessional, but because the design didn\'t give them a reason to stay.',
          'It also structures information for the way people actually read online — which is to say, they mostly don\'t. They scan. Good layout uses visual hierarchy, spacing, and contrast to guide the eye toward what matters: what you do, who you serve, and what to do next.',
        ],
      },
      {
        heading: 'Design vs. Development: The Key Distinction',
        body: [
          'Web design and web development are related but distinct. Design deals with layout, typography, color, and user experience — the "how it looks and feels" layer. Development deals with code: making designs function in a browser, optimizing performance, building features.',
          'Problems arise when these are siloed: a beautiful mockup from someone who doesn\'t understand code, or a functional site from a developer with no eye for design. A good studio handles both, ensuring visual and technical decisions serve the same goals.',
        ],
      },
      {
        heading: 'Local Context: Why It Matters on Cape Cod',
        body: [
          'Web design for a Cape Cod business has specific considerations that national templates don\'t account for. Your customers are often seasonal visitors doing mobile searches from the road. Your credibility signals are local — chamber memberships, Google reviews, community involvement.',
          'At COLEwebdev, we\'ve been building websites for Cape Cod businesses since 2006. We know what makes a Wellfleet restaurant site convert differently than a Hyannis contractor site, because we\'ve seen it happen.',
        ],
      },
    ],
    takeaway: 'Web design is a strategic discipline, not just an aesthetic one. A website that looks great but fails to guide visitors toward action is underperforming — regardless of how much you paid for it.',
  },
  {
    id: 'investment-value',
    num: '02',
    title: 'Is Web Design Worth the Investment?',
    subtitle: 'A Business Case for Small Business Owners',
    summary: 'The real question isn\'t how much a website costs — it\'s how much revenue your current site is leaving on the table.',
    sections: [
      {
        heading: 'Reframing the Question',
        body: [
          'When small business owners ask "is web design expensive?", they\'re often asking the wrong question. The right question is: what is your current website costing you? A site that fails to convert visitors, doesn\'t rank in search results, or looks unprofessional on mobile is actively costing you business every day.',
          'A plumber in Brewster whose website takes 8 seconds to load on a phone is losing calls to a competitor whose site loads in 1. A contractor in Falmouth with no Google presence is invisible to customers actively searching for their services. The cost of inaction is real — it\'s just invisible.',
        ],
      },
      {
        heading: 'What You\'re Actually Paying For',
        body: [
          'A professional web design engagement includes more than code and graphics. You\'re paying for an experienced strategist who understands how users behave online, what signals build trust, and how to structure a site that aligns with your business goals. You\'re paying for SEO-aware architecture and mobile optimization that serves the majority of your visitors.',
          'You\'re also paying for time savings. A business owner who builds their own website spends dozens of hours on something that isn\'t their expertise — and often ends up with a result that looks amateur and doesn\'t perform. That time has a cost too.',
        ],
      },
      {
        heading: 'Custom vs. Template: The Real Trade-Off',
        body: [
          'Template-based platforms (Wix, Squarespace, GoDaddy) are useful for certain situations: early-stage businesses with minimal budget, or simple brochure sites with low traffic. They have real limitations — performance ceiling, SEO constraints, and the fact that every competitor can use the same template.',
          'A custom-built site is architecturally optimized for your specific needs — no bloat, no generic structure, no compromises baked in. For a business that depends on its website to generate leads, the difference shows up in the numbers.',
        ],
      },
      {
        heading: 'Thinking About Return on Investment',
        body: [
          'If a new website costs $5,000 and generates one additional client per month at an average project value of $800, it pays for itself in about 6 months. These aren\'t hypothetical numbers — they\'re the kinds of outcomes we\'ve seen for COLEwebdev clients who moved from aging DIY sites to custom-built ones.',
          'Think about what a single additional lead is worth to your business. Then ask whether a better website could realistically deliver one more per month. That\'s the right frame for the investment decision.',
        ],
      },
    ],
    takeaway: 'Treat web design as a revenue investment, not an expense. Calculate what a single additional customer is worth, then ask whether a better website could realistically deliver one more per month.',
  },
  {
    id: 'diy-vs-pro',
    num: '03',
    title: 'DIY vs. Hiring a Professional',
    subtitle: 'How to Know Which Path Is Right for You',
    summary: 'Template builders have come a long way — but so have the expectations of customers using your website. Here\'s how to make the right call.',
    sections: [
      {
        heading: 'What DIY Does Well',
        body: [
          'Self-serve website platforms — Squarespace, Wix, and others — have improved dramatically in the past decade. For the right situation, they\'re a reasonable choice. If you\'re testing a business concept and need something online within a week, they get you there. If your site serves primarily as a digital business card with no SEO ambitions, a template can work fine.',
          'DIY also makes sense when budget is genuinely the constraint. A $16/month Squarespace subscription beats nothing. The key is being honest about what you\'re getting: a starting point, not a competitive asset.',
        ],
      },
      {
        heading: 'Where DIY Falls Short',
        body: [
          'The limitations of template platforms compound over time. Performance is often poor — template platforms load generic code that hurts speed, which hurts SEO. Customization hits walls quickly: the design looks like a template because it is one.',
          'Search optimization is where DIY struggles most. SEO requires thoughtful site architecture, page speed, structured content, and proper metadata. Template platforms can handle the basics, but they\'re not optimized for competing on search — they\'re optimized for getting you online fast.',
        ],
      },
      {
        heading: 'When to Hire a Professional',
        body: [
          'The signal to hire a web professional is usually one of three things: your site isn\'t generating leads, you\'re competing in a market where online presence matters, or you\'ve outgrown what a template can do. Any of these is sufficient reason.',
          'When hiring, look for a portfolio of work in your industry or business size, a clear process (not just a deliverable list), references you can actually call, and a designer who asks about your business goals before asking about aesthetics.',
        ],
      },
      {
        heading: 'The Hybrid Approach',
        body: [
          'Many COLEwebdev clients end up with a professional-built WordPress site they manage themselves. We handle the architecture, SEO structure, performance, and visual design — then hand it off with training so the client can update content day to day.',
          'This hybrid model gives you the best of both: a professional foundation with self-serve flexibility. It\'s particularly well-suited to businesses that update their content regularly — restaurants changing menus, event organizations posting schedules, retailers managing product listings.',
        ],
      },
    ],
    takeaway: 'DIY is a valid starting point, not a permanent strategy. When your website starts affecting your ability to compete for customers, it\'s time to invest in a professional build.',
  },
  {
    id: 'three-types',
    num: '04',
    title: 'The 3 Types of Web Design',
    subtitle: 'Which Approach Is Right for Your Business?',
    summary: 'Not all websites are built the same way. Understanding the three main types helps you make smarter decisions about what your business actually needs.',
    sections: [
      {
        heading: 'Static (Traditional) Websites',
        body: [
          'A static website is built in pure HTML and CSS — no content management system, no server-side processing. Every page is a fixed file that loads exactly as written. This produces the fastest possible load times, zero attack surface for security exploits, and complete design control.',
          'Static sites are ideal for businesses that don\'t update content frequently, want maximum performance, or prefer to own their site without platform dependency. A five-page contractor site, a landing page, or a portfolio with stable content are all good candidates.',
        ],
      },
      {
        heading: 'Dynamic (CMS-Powered) Websites',
        body: [
          'A dynamic website uses a content management system — most commonly WordPress — to separate content from design. Pages are generated from a database, meaning content can be updated through an admin interface without touching code.',
          'WordPress powers over 40% of the web because it occupies the right position between power and usability. A well-built WordPress site — custom theme, lean plugin stack, proper performance optimization — can be fast, secure, and fully editable by a non-technical client.',
        ],
      },
      {
        heading: 'Responsive Design: A Requirement, Not a Type',
        body: [
          'Responsive design is sometimes listed as a "type" of web design, but it\'s more accurately a standard that applies to all modern websites. A responsive site adapts its layout fluidly to the device being used. With over 60% of web traffic coming from mobile, a non-responsive site is already failing the majority of its visitors.',
          'If a designer quotes you a "separate mobile version," that\'s outdated practice. Responsive design is the baseline — not an upgrade.',
        ],
      },
      {
        heading: 'Choosing the Right Approach',
        body: [
          'The decision between static and dynamic comes down to two questions: how often does your content change, and who needs to update it? "Rarely" and "a developer" points to static. "Frequently" and "our marketing team" points to WordPress.',
          'At COLEwebdev, we build both and make the recommendation based on what fits the business. Some clients need WordPress. Others are better served by a lean, hand-coded site. We scope the project around the actual requirement.',
        ],
      },
    ],
    takeaway: 'The "right" type of website is the one that matches how your business actually operates. Static sites excel at performance and simplicity; dynamic sites excel at content management and flexibility.',
  },
  {
    id: 'seven-golden-rules',
    num: '05',
    title: 'The 7 Golden Rules of Web Design',
    subtitle: 'Timeless Principles for Sites That Actually Work',
    summary: 'These seven principles have held up across two decades of web design evolution. They won\'t make your site trendy — they\'ll make it effective.',
    sections: [
      {
        heading: 'Rules 1–3: Simplicity, UX, and Consistency',
        body: [
          'Keep it simple. Every element on a page competes for attention. Too many options, too many visual layers, or too much text creates cognitive load that drives visitors away. Every element should earn its place by serving the user\'s goal or the business\'s goal. If it does neither, remove it.',
          'Prioritize user experience. UX is the discipline of designing for how people actually behave — not how you\'d like them to. Users scan, not read. They navigate non-linearly. They leave in seconds if they can\'t find what they\'re looking for. Be consistent. Predictable typography, color, and interaction patterns reduce the cognitive load of learning a site. Inconsistency reads as unprofessional and creates friction.',
        ],
      },
      {
        heading: 'Rule 4: Mobile-First',
        body: [
          'Mobile-first means designing for the smallest screen before scaling up — not making a desktop site and hoping it works on phones. Most of your visitors are on their phones, especially if they found you through a local Google search. A site that doesn\'t work seamlessly on mobile loses more than half its potential customers before they read a single word.',
        ],
      },
      {
        heading: 'Rules 5–6: Clear CTAs and Fast Load Speed',
        body: [
          'Every page should have one obvious next step: call, contact, buy, book. Multiple competing CTAs dilute attention. One primary action per page is enough. Make it prominent, make it clear, and don\'t bury it at the bottom.',
          'Fast load speed is non-negotiable. A one-second delay in page response reduces conversions by 7%, according to Akamai. Heavy animations, large uncompressed images, and third-party scripts all add weight. Performance requires building only what\'s necessary — then testing the result.',
        ],
      },
      {
        heading: 'Rule 7: Accessibility',
        body: [
          'An accessible website is usable by people with visual, auditory, motor, or cognitive disabilities. This means proper contrast ratios, keyboard navigation, alt text for images, and readable font sizes. Accessibility is also a legal consideration for businesses that qualify as "places of public accommodation" under the ADA.',
          'As a practical side effect, accessible sites tend to rank better in search engines. The same practices that help screen readers navigate a site — clear headings, meaningful link text, semantic HTML — also help Google understand and index it.',
        ],
      },
    ],
    takeaway: 'The golden rules aren\'t constraints — they\'re a framework for making design decisions confidently. When in doubt, ask: does this make things simpler, clearer, faster, or more consistent?',
  },
  {
    id: 'five-principles',
    num: '06',
    title: '5 Essential Principles of Effective Web Design',
    subtitle: 'The Foundation Every Business Website Needs',
    summary: 'While trends in web design come and go, these five principles have remained constant. Build them in from day one.',
    sections: [
      {
        heading: 'Clarity: Say One Thing at a Time',
        body: [
          'Clarity means every page has a clear purpose and a clear primary message. The home page answers "what do you do and why should I care?" The services page answers "exactly what can you do for me?" When pages try to do too many things, they accomplish none of them effectively.',
          'Clarity extends to copy as well as design. Business owners often write website copy full of jargon that means nothing to a customer who found the site through Google. Good web copy speaks directly to the customer\'s situation, not the business\'s self-image.',
        ],
      },
      {
        heading: 'Speed: Every Second Counts',
        body: [
          'Page load speed is both a user experience issue and an SEO issue. Google uses page speed as a ranking signal — slow sites rank lower in search results. And 53% of mobile users abandon a site that takes more than 3 seconds to load.',
          'Speed is often the first casualty of over-designed websites. Heavy animations, large uncompressed images, and third-party scripts all add weight. The discipline of performance requires building only what\'s necessary — and testing the result.',
        ],
      },
      {
        heading: 'Mobile-First: Design for the Majority',
        body: [
          'Mobile-first isn\'t just a design philosophy — it\'s a response to data. Most of your visitors are on their phones, especially if they found you through a local search. A site that doesn\'t work seamlessly on mobile is losing more than half its potential customers before they read a single word of copy.',
        ],
      },
      {
        heading: 'Visual Hierarchy and Navigation',
        body: [
          'Visual hierarchy guides the eye through a page in intentional order: headline first, supporting information second, call to action third. This is achieved through size, weight, color, contrast, and spacing — not by making things bold at random. Every design decision affects where attention goes.',
          'Navigation should be predictable, lightweight, and always accessible. Visitors who can\'t find what they\'re looking for within 2–3 clicks leave. Mobile navigation deserves the same care as desktop — which is where many sites fall short.',
        ],
      },
    ],
    takeaway: 'Clarity, speed, mobile design, visual hierarchy, and navigation aren\'t features — they\'re foundations. A site missing any one of them is underperforming, regardless of how good the rest looks.',
  },
  {
    id: 'seven-cs',
    num: '07',
    title: 'The 7 C\'s of Web Design',
    subtitle: 'A Framework for Building Complete Digital Experiences',
    summary: 'The 7 C\'s framework offers a practical lens for evaluating whether your website covers all the dimensions of an effective digital presence.',
    sections: [
      {
        heading: 'Context and Content',
        body: [
          'Context is the overall look and feel of the site — aesthetic, layout, visual design. A site\'s context should immediately communicate the nature and quality of the business. A law firm and a surf shop should feel completely different from the first glance. Getting context right means designing for your actual audience, not your own taste.',
          'Content is what fills the site: copy, photography, video. Content is what gets found by search engines and what convinces humans to take action. Great context with poor content is a beautiful brochure with nothing worth reading.',
        ],
      },
      {
        heading: 'Community and Customization',
        body: [
          'Community — once primarily about forums and social feeds — now extends to reviews, social proof, and any feature that lets customers interact with or around your business. For most small businesses, this means Google reviews, testimonials, and a visible social presence.',
          'Customization refers to the site\'s ability to serve different visitor intents well: the person ready to buy, the person still researching, and the existing customer looking for support all need different things from the same site. Even basic navigation choices — what pages exist, how they\'re labeled — are a form of customization.',
        ],
      },
      {
        heading: 'Communication and Connection',
        body: [
          'Communication covers all the channels through which the site facilitates contact — forms, phone numbers, chat, email links. Too many small business sites bury contact information. Communication should be frictionless. Put the phone number in the header. Make the contact form short. Don\'t require an account to send an inquiry.',
          'Connection describes the site\'s integration with the broader web — links from other sites, local directory listings, schema markup that helps search engines understand the business. A well-connected site is more findable and more trustworthy in Google\'s eyes.',
        ],
      },
      {
        heading: 'Commerce: Converting Browsers into Buyers',
        body: [
          'Commerce encompasses any transaction the site facilitates — direct e-commerce, service booking, quote requests, or even just lead capture. The goal for a service business is converting browsers into inquiries. Every friction point in the conversion path costs revenue.',
          'The 7 C\'s framework is most useful as an audit tool. Walk through each dimension and ask: how well does our site serve this function? The weakest C is usually where the most opportunity lives.',
        ],
      },
    ],
    takeaway: 'The 7 C\'s framework is useful for auditing an existing site. Walk through each dimension and ask: how well does our site serve this function? The weakest C is often where the most opportunity lives.',
  },
  {
    id: 'faq-guide',
    num: '08',
    title: 'Building a Better FAQ',
    subtitle: 'Questions That Convert — and Get Found on Google',
    summary: 'A well-crafted FAQ does three jobs at once: it addresses customer hesitations, reduces support burden, and surfaces in search results for question-based queries.',
    sections: [
      {
        heading: 'Why FAQs Matter Beyond Helpfulness',
        body: [
          'FAQ sections are often treated as an afterthought — a repository for questions that don\'t fit elsewhere. Done well, they\'re one of the most strategically valuable sections of any business website. Google increasingly surfaces FAQ-style content in featured snippets and "People Also Ask" boxes, meaning well-written answers can land your content at the top of search results.',
          'Question-based search queries ("how much does a Cape Cod website cost?", "do I need a WordPress site?") are highly targeted and often indicate a buyer who is close to making a decision. Answering those questions well — on your own site — captures that intent.',
        ],
      },
      {
        heading: 'The Three FAQ Categories',
        body: [
          'Service questions address what you do, how it works, and what customers can expect. Answer in plain language, without jargon, anticipating the concerns of someone who has never worked with you. Process questions address how the engagement works: timeline, what\'s required from the client, what happens after the sale. These build confidence and reduce the anxiety that often delays a purchase decision.',
          'Trust questions address the "why you" dimension — reviews, credentials, experience, guarantees, policies. These are often the questions visitors have but don\'t ask directly. Answering them proactively — "what happens if I\'m not satisfied?" — demonstrates the confidence of a business that knows it delivers.',
        ],
      },
      {
        heading: 'How to Write Good FAQ Answers',
        body: [
          'Lead with the direct answer in the first sentence. A question like "how long does a website take to build?" deserves a real answer — "typically 4–8 weeks for a standard site, depending on content readiness and revision rounds" — not "it depends on many factors."',
          'Each FAQ answer is also an opportunity for a natural call to action. End answers with a link to the relevant service page, an invitation to call, or a pointer to the next question a reader might have. FAQs that dead-end at a period leave value on the table.',
        ],
      },
      {
        heading: 'FAQ Schema and Structured Data',
        body: [
          'For maximum SEO benefit, FAQ content should be marked up with FAQ schema — a structured data format that tells Google your page contains questions and answers. When implemented correctly, this triggers rich result formatting in search: your questions and collapsed answers appear directly in the search result, before the visitor clicks through.',
          'Adding schema markup requires a developer or a well-configured WordPress SEO plugin. It\'s a relatively low-effort addition with a potentially significant SEO payoff, especially for question-based queries in competitive local markets.',
        ],
      },
    ],
    takeaway: 'A FAQ isn\'t just a support tool — it\'s an SEO asset and a conversion resource. Write it for the visitor who is 80% convinced but has one lingering hesitation. Answer that hesitation directly, and you\'ll close more inquiries.',
  },
  {
    id: 'google-ads-guide',
    num: '09',
    title: 'Why Your Google Ads Are Wasting Money',
    subtitle: 'Negative Keywords, Landing Pages & Conversion Tracking',
    summary: 'Most small business Google Ads accounts waste 30–60% of their budget on clicks that were never going to convert. Three structural problems cause most of it — and all three are fixable.',
    backLabel: 'PPC & Google Ads',
    backHref: 'ppc.html',
    sections: [
      {
        heading: 'The Scope of the Problem',
        body: [
          'Google Ads can be one of the highest-ROI marketing channels for a small business — or one of the fastest ways to burn through a budget with nothing to show for it. The difference usually comes down to three structural problems that most small business accounts share: no meaningful negative keyword management, paid traffic landing on the wrong pages, and conversion tracking that is missing or broken.',
          'These aren\'t obscure technical details. They\'re fundamentals that any competent campaign manager should address from day one. When they\'re missing, a campaign generates spend but not returns. The fix isn\'t more budget — it\'s fixing the structure first.',
        ],
      },
      {
        heading: 'Negative Keywords: Stopping the Waste at the Source',
        body: [
          'When you run a Google Ads campaign with broad or phrase match keywords, Google will show your ad for searches that are similar to — but not identical to — your target terms. Without negative keywords, a landscaping company targeting "lawn care" will pay for clicks from "lawn care jobs near me," "DIY lawn care tips," and "lawn care Tucson." None of those searchers were ever going to become customers.',
          'Negative keywords are search terms you explicitly exclude from triggering your ads. A well-managed account builds a negative list before launch — blocking obvious irrelevant terms — and then reviews the search term report weekly to catch new waste as it appears. Most unmanaged accounts have never had a negative keyword added after initial setup.',
          'For local businesses, negative keywords also include geographic exclusions. A Cape Cod restaurant doesn\'t need to show ads to someone searching from Boston unless they\'re specifically targeting people planning a trip to the Cape. Without geographic negative management, you can pay for traffic from people who will never visit your business.',
        ],
      },
      {
        heading: 'Landing Pages: Where the Click Actually Goes',
        body: [
          'A searcher who clicks "web design Cape Cod" has a specific intent. They want to learn about web design services on Cape Cod. If that click lands on your homepage — which covers everything your company does — you\'ve broken message match. The visitor sees a general page when they expected a specific answer, and most of them leave immediately.',
          'Message match is the alignment between what an ad promises and what the landing page delivers. A well-optimized landing page mirrors the ad headline, focuses on a single service or offer, loads in under three seconds on mobile, and has one clear call to action. No navigation pulling visitors off to other pages, no competing offers — just the single action you want the visitor to take.',
          'Industry benchmarks consistently show that dedicated landing pages convert 2–5 times better than homepage sends. For a campaign spending $1,000 per month, that difference can mean two leads versus ten. Adding call tracking to the landing page closes another gap: most small businesses cannot tell you whether their phone rang because of an ad click or something else.',
        ],
      },
      {
        heading: 'Conversion Tracking: Knowing What\'s Actually Working',
        body: [
          'Google Ads has a powerful bidding system that can automatically optimize toward conversions — finding the people most likely to call, submit a form, or make a purchase. But this system only works if conversions are being tracked. Without proper conversion data, Google\'s bidding algorithms are operating blind, and reporting can\'t tell you which campaigns, keywords, or ads are producing real business outcomes.',
          'Setting up conversion tracking correctly means configuring GA4 goals, linking them to Google Ads, creating Google Ads conversion actions for phone calls and form submissions, and verifying that data flows through correctly. It also means defining what counts as a conversion — not just pageviews or session duration, but actions with real business value.',
          'An often-missed component is call tracking. A significant share of local business conversions happen over the phone, not through web forms. Without a tracking number on your landing page, those conversions are invisible in Google Ads reporting. You\'ll see clicks and spend, but you won\'t be able to attribute the calls they generated — and bidding strategies will optimize for the wrong signals.',
        ],
      },
      {
        heading: 'What a Fixed Account Looks Like',
        body: [
          'A well-structured account starts with a negative keyword list built before launch, so the first dollar of budget isn\'t wasted on irrelevant clicks. It has conversion tracking configured and verified — GA4, Google Ads goals, and call tracking — before any ads go live. Every campaign points to a dedicated landing page with message match, not the homepage.',
          'Then it stays managed: weekly search term reviews to expand negatives, monthly performance analysis to identify which campaigns and keywords are producing cost-efficient conversions, and periodic landing page tests to improve conversion rates. Paid search is not a set-it-and-forget-it channel — the ongoing work is where most of the improvement happens.',
          'If you have an existing campaign, auditing it for these three issues is a reasonable first step before spending more. In most accounts, waste and structural problems are visible within the first hour of review.',
        ],
      },
    ],
    takeaway: 'Fix the three structural problems first — negative keywords, landing page message match, and conversion tracking — before you increase your ad budget. More spend into a broken structure produces more waste, not more leads.',
  },
];

function WhitepaperCard({ wp }) {
  return (
    <a className="wh-card" href={`wp-${wp.id}.html`}>
      <span className="wh-card-num">{wp.num}</span>
      <h3 className="wh-card-title">{wp.title}</h3>
      <p className="wh-card-summary">{wp.summary}</p>
      <span className="wh-card-cta">Read <span className="arrow">→</span></span>
    </a>
  );
}


function WhitepapersPage() {
  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <div className="wh-hero">
        <div className="wh-hero-bg" aria-hidden="true" />
        <div className="wh-hero-content">
          <div className="shell">
            <span className="eyebrow wh-eyebrow">Resources</span>
            <h1 className="wh-hero-hl">
              Web Design <em>Whitepapers.</em>
            </h1>
            <p className="wh-hero-sub">
              22 in-depth guides on web design, SEO, marketing, and e-commerce — covering the questions Cape Cod business owners ask most. Practical, direct, and jargon-free.
            </p>
            <div className="wh-hero-meta">
              <span className="wh-hero-tag">22 guides</span>
              <span className="wh-hero-tag">Free to read</span>
              <span className="wh-hero-tag">By COLEwebdev</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card grid */}
      <section className="wh-grid-section">
        <div className="shell">
          <div className="wh-grid-hd">
            <span className="eyebrow">Table of Contents</span>
            <h2 className="wh-grid-hl">Choose a topic to explore.</h2>
          </div>
          <div className="wh-grid">
            {WHITEPAPERS.map(wp => (
              <WhitepaperCard key={wp.id} wp={wp} />
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="wh-cta-section">
        <div className="shell">
          <div className="wh-cta">
            <div>
              <h2 className="wh-cta-hl">
                Ready to put this into <em>practice?</em>
              </h2>
              <p className="wh-cta-sub">
                The first hour is free. No commitment, no pitch — just a real conversation about your website with people who've been doing this since 2000.
              </p>
            </div>
            <div className="wh-cta-actions">
              <a className="btn btn--accent" href="contact.html">
                Start a conversation <span className="arrow">→</span>
              </a>
              <a
                className="btn btn--ghost"
                href="tel:5084132043"
                style={{ color: 'rgba(255,255,255,0.7)', borderColor: 'rgba(255,255,255,0.2)' }}
              >
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

const whRoot = ReactDOM.createRoot(document.getElementById('root'));
whRoot.render(<WhitepapersPage />);
