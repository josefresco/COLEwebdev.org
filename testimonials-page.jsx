/* global React, ReactDOM */

const TESTIMONIALS = [
  {
    name: 'Marianne',
    business: 'Eastham Turnip Festival & Eastham Public Library',
    quote: 'I would HIGHLY recommend Desiree and COLEwebdev to any person or business. Desiree doesn\'t use a cookie cutter approach to creating websites for customers. About 4 years ago, she hit the turnip out of the ballpark with a customized site completely capturing the whimsical and quirky nature of the Eastham Public Library\'s annual harvest celebration. When the decision was made recently to upgrade our Library website, there was NO question who we wanted. Desiree has delivered again, a website that we are proud to showcase.',
    category: 'Nonprofit',
  },
  {
    name: 'Carol Edmondson',
    business: 'Inn Advisors',
    quote: 'The COLEwebdev team were a pleasure to work with and exceeded our expectations at every turn. We do a lot of work with clients who are creating new, or updating old websites. The process is often time consuming and frustrating. COLEwebdev made the process easy and met every goal for both quality and timeliness. The feedback from our industry peers and clients has been amazing. This is a creative and professional team we highly recommend.',
    category: 'Professional Services',
  },
  {
    name: 'Marco',
    business: 'Inn Advisors',
    quote: 'It was time to relaunch our brand and website for InnAdvisors. COLEwebdev became our first choice even though they were in the higher priced options — the quality of the information and thoroughness of the replies impressed us. Desiree and Josiah quickly understood our business goals and customer targets. They worked with us developing new logo options, color schemes, and website layout. Desiree was spot on with design, imagery, and layout. AND it was completed before our deadline.',
    category: 'Professional Services',
  },
  {
    name: 'Stacey Richardson',
    business: 'Treeworks',
    quote: 'Desiree did an amazing job helping us get our new website up and running. She even made some phone calls for us and helped us get out of the old contract with our previous company. I\'m confident that if I have questions in the future (and I\'m sure I will), she will be right there to answer all my questions. Don\'t go anywhere else for your website needs — I know I won\'t!',
    category: 'Small Business',
  },
  {
    name: 'Jessica Wile',
    business: 'Agway of Cape Cod',
    quote: 'We\'ve been using COLEwebdev for many years now. They\'ve been a great resource for our medium-sized retail business. They worked closely with me on our redesign to incorporate everything on my wish list, and really achieved my vision for a clean, bright and informative website. They trained me with easy to follow steps on making edits. They\'re incredibly responsive and always willing to help! Love working with this team.',
    category: 'Retail',
  },
  {
    name: 'Amberlyn Tubman',
    business: 'Brewster Sand & Gravel',
    quote: 'Working with Desiree and Joe was a breeze. They completely overhauled my business website and did a wonderful job. I receive compliments regularly from customers about the site and its usefulness. We are beyond happy with the finished product and the results it has generated for us!',
    category: 'Small Business',
  },
  {
    name: 'Christa Drew',
    business: 'Friends of Herring River',
    quote: 'COLEwebdev repeatedly proved to be an experienced and patient partner in listening to our needs and visions, presenting design and feature options, and building a solid nonprofit website re-launch. They were knowledgeable and organized — providing a website editing tutorial and helping us sort some important backend data and domain transfer.',
    category: 'Nonprofit',
  },
  {
    name: 'Kegan Berner',
    business: 'Oyster River Boatyard',
    quote: 'COLEwebdev did an outstanding job designing our website and hosts it as well. As our business grows they have seamlessly updated our site to reflect our new services. They are very easy to work with and accommodate changes and updates quickly. We highly recommend them!',
    category: 'Small Business',
  },
  {
    name: 'Matty Dread',
    business: 'WOMR 92.1 FM',
    quote: 'Josiah and Desiree do great work with a personal touch. From the initial proposal, through the design process, to maintenance and service once the site was up and running, the folks at COLEwebdev have always been there to answer all our questions and solve any problems. Highly recommended for any small to medium-sized business that needs their web presence improved.',
    category: 'Nonprofit / Media',
  },
  {
    name: 'Lori Flanagan',
    business: 'Ring Bros. Marketplace',
    quote: 'We struck gold with Josiah! Finding smart, responsive website help can be difficult on Cape Cod. Not any more. Josiah and COLEwebdev have been the best thing to happen to Ring Bros. Marketplace.',
    category: 'Retail',
  },
  {
    name: 'Laura Deutsch',
    business: 'Author',
    quote: 'I contacted COLEwebdev to create an author\'s website. I am so glad I did! I worked with Desiree and she was fantastic. She was patient, professional and responsive. I am not a technical person, and Desiree took the time to make sure I knew how to upload my work and use the website. She created a beautiful product and I highly recommend this company.',
    category: 'Professional Services',
  },
  {
    name: 'Stephanie Ellis',
    business: 'Wild Care Cape Cod',
    quote: 'COLEwebdev designed and launched our website and switched us over to Google for Nonprofits as our email platform. We are happy with Google and absolutely love our website design. Owners Josiah and Desiree are incredibly knowledgeable and professional and provide extremely prompt response and assistance. We love their work and we look forward to continuing our working relationship with them.',
    category: 'Nonprofit',
  },
  {
    name: 'Joseph Moldover, MD',
    business: 'Medical Practice',
    quote: 'I\'ve worked with COLEwebdev for years. They are incredibly responsive and professional and do top quality work. They are friendly, reasonably priced, and don\'t mind taking the time to explain complicated issues. Can\'t recommend highly enough.',
    category: 'Professional Services',
  },
  {
    name: 'George Sylvestre',
    business: 'Sylvestre Outdoors',
    quote: 'COLEwebdev is flat out awesome! Easy to work with, understood me, my business, and my goals. Super responsive and super helpful. I\'d recommend to anyone looking to build a customer centric and professional website to give them a call. My experience could not have been better.',
    category: 'Small Business',
  },
  {
    name: 'Shaun Harrington',
    business: 'SH Emerald Rental',
    quote: 'Desiree did a fantastic job developing the site for our home rental. Her designs and suggestions were exactly in line with what we wanted. The site came out beautifully and has continually generates business. We were quite pleased.',
    category: 'Small Business',
  },
  {
    name: 'Margaret Dutch',
    business: 'SVdP Cape & Islands District',
    quote: 'I want to express my gratitude to Desiree at COLEwebdev for her assistance with our recent website design and launch. The services provided were thorough and professional. Desiree maintained clear communication throughout the website development process, demonstrating her commitment to customer satisfaction. Her patience, clarity, and ability to understand exactly what we needed were greatly appreciated.',
    category: 'Nonprofit',
  },
  {
    name: 'Karena Stroh',
    business: 'The Pause',
    quote: 'Such excellent service! Knowledgeable and supportive through the whole process of website redesign. Highly recommend.',
    category: 'Small Business',
  },
];

function StarRow() {
  return (
    <span className="tm-stars" aria-label="5 stars">
      {'★★★★★'}
    </span>
  );
}

function TestimonialCard({ t }) {
  return (
    <div className="tm-card">
      <StarRow />
      <blockquote className="tm-quote">"{t.quote}"</blockquote>
      <div className="tm-meta">
        <span className="tm-name">{t.name}</span>
        <span className="tm-biz">{t.business}</span>
      </div>
      <span className="tm-cat">{t.category}</span>
    </div>
  );
}

function TestimonialsPage() {
  return (
    <React.Fragment>
      <Header />

      {/* Hero */}
      <section className="tm-hero">
        <div className="shell">
          <span className="eyebrow">Client Reviews</span>
          <h1 className="tm-hero-hl">What our clients say.</h1>
          <p className="tm-hero-sub">
            4.8 stars across 72 Google reviews. Here's what Cape Cod business owners say about working with us.
          </p>
          <div className="tm-hero-badges">
            <div className="tm-badge">
              <span className="tm-badge-stars">★★★★★</span>
              <span className="tm-badge-score">4.8</span>
              <span className="tm-badge-label">Google Rating</span>
            </div>
            <div className="tm-badge-divider" />
            <div className="tm-badge-stat">
              <span className="tm-badge-num">72</span>
              <span className="tm-badge-label">Google Reviews</span>
            </div>
            <div className="tm-badge-divider" />
            <div className="tm-badge-stat">
              <span className="tm-badge-num">20+</span>
              <span className="tm-badge-label">Years in Business</span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="tm-grid-section">
        <div className="shell">
          <div className="tm-grid">
            {TESTIMONIALS.map(function(t, i) {
              return <TestimonialCard key={i} t={t} />;
            })}
          </div>
        </div>
      </section>

      {/* Services strip */}
      <section className="tm-services">
        <div className="shell">
          <p className="tm-services-label">What we build</p>
          <div className="tm-services-row">
            <a href="website-design.html" className="tm-service-chip">Website Design + Build</a>
            <a href="wordpress.html" className="tm-service-chip">WordPress</a>
            <a href="traditional.html" className="tm-service-chip">Traditional HTML</a>
            <a href="ecommerce.html" className="tm-service-chip">E-Commerce</a>
            <a href="seo.html" className="tm-service-chip">SEO & Local Search</a>
            <a href="cape-cod-marketing.html" className="tm-service-chip">Cape Cod Marketing</a>
            <a href="hosting.html" className="tm-service-chip">Hosting + Care</a>
            <a href="branding.html" className="tm-service-chip">Branding</a>
          </div>
        </div>
      </section>

      {/* Google CTA */}
      <section className="tm-google-cta">
        <div className="shell">
          <div className="tm-google-inner">
            <div>
              <h2 className="tm-google-hl">Happy with our work?</h2>
              <p className="tm-google-sub">
                A Google review takes two minutes and helps other Cape Cod businesses find us. We read every one.
              </p>
            </div>
            <a
              className="btn btn--primary"
              href="https://tinyurl.com/ybhyf3jp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Write a Google Review <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="tm-cta-section">
        <div className="shell">
          <div className="tm-cta">
            <div>
              <h2 className="tm-cta-hl">Ready to join them?</h2>
              <p className="tm-cta-sub">
                The first hour is free. No commitment, no pitch — just a real conversation about your website.
              </p>
            </div>
            <div className="tm-cta-actions">
              <a className="btn btn--accent" href="quote.html">
                Request a Quote <span className="arrow">→</span>
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

const tmRoot = ReactDOM.createRoot(document.getElementById('root'));
tmRoot.render(<TestimonialsPage />);
