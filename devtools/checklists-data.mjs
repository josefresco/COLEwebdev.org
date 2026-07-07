export const CHECKLISTS = [
  {
    slug: 'seo-checklist',
    glyph: '↗',
    title: 'Small Business SEO Checklist',
    subtitle: 'The foundational on-page, technical, and local factors that get a small business site found on Google.',
    sections: [
      {
        heading: 'On-Page Basics',
        items: [
          'Every page has a unique, descriptive title tag (under 60 characters)',
          'Every page has a unique meta description (under 155 characters)',
          'One clear H1 per page that matches what the visitor is searching for',
          'URLs are short, readable, and use hyphens — not underscores or query strings',
          'Every image has descriptive alt text',
        ],
      },
      {
        heading: 'Technical Health',
        items: [
          'Site loads in under 3 seconds on mobile',
          'Site passes a mobile-friendly test on an actual phone, not just a browser resize',
          'An XML sitemap exists and is submitted in Google Search Console',
          'robots.txt does not accidentally block important pages',
          'HTTPS is enabled sitewide with no mixed-content warnings',
        ],
      },
      {
        heading: 'Content & Authority',
        items: [
          'Each core service or product has its own dedicated page — not one page trying to cover everything',
          'Content answers the actual questions customers type into Google',
          'Internal links connect related pages: services, blog posts, and location pages',
          'At least a few reputable local or industry sites link back to yours',
        ],
      },
      {
        heading: 'Local Signals',
        items: [
          'Google Business Profile is claimed, verified, and fully filled out',
          'Name, address, and phone number match exactly across the site and directories',
          'Location-specific language appears naturally in page copy, not just stuffed into a footer',
        ],
      },
    ],
  },
  {
    slug: 'aio-checklist',
    glyph: '⌘',
    title: 'AI Search Optimization Checklist',
    subtitle: 'What it takes to get cited by ChatGPT, Perplexity, and Google AI Overviews — not just ranked in blue links.',
    sections: [
      {
        heading: 'Make Your Content Machine-Readable',
        items: [
          'Key facts — hours, pricing, services — exist as real text, not locked inside images or PDFs',
          'Headings match how people actually phrase questions, not internal jargon',
          'FAQ sections use genuine question-and-answer pairs',
          'Schema markup (FAQPage, LocalBusiness, Article) is implemented and validated',
        ],
      },
      {
        heading: 'Be Citable',
        items: [
          'Each page states a direct answer near the top, not after 500 words of preamble',
          'Content includes specific facts, numbers, and names an AI model can quote confidently',
          'Author or business credentials are visible — who is saying this, and why it should be trusted',
        ],
      },
      {
        heading: 'Crawlability for AI Bots',
        items: [
          'robots.txt allows GPTBot, PerplexityBot, and Google-Extended — unless you deliberately want to opt out',
          'An llms.txt file exists if you want to guide AI crawlers to your most important pages',
          'Critical content does not depend on JavaScript that a bot may fail to execute',
        ],
      },
      {
        heading: 'Monitor It',
        items: [
          'Regularly search your own brand and services in ChatGPT, Perplexity, and Google AI Overviews',
          'Track referral traffic from chat.openai.com, perplexity.ai, and Gemini in analytics',
        ],
      },
    ],
  },
  {
    slug: 'nap-checklist',
    glyph: '◎',
    title: 'NAP & Local Citation Checklist',
    subtitle: 'Name, Address, and Phone consistency across the web — the quiet foundation of local search trust.',
    sections: [
      {
        heading: 'The Core Three',
        items: [
          'Business name is written exactly the same everywhere — no "LLC" in some places and not others',
          'Address format is identical everywhere: same abbreviations for St., Suite, Ste., etc.',
          'Phone number is the same everywhere, formatted consistently',
        ],
      },
      {
        heading: 'Where to Check',
        items: [
          'Google Business Profile',
          'Your own website — header, footer, contact page, and schema markup',
          'Bing Places',
          'Apple Maps / Apple Business Connect',
          'Facebook Page',
          'Yelp and any industry-specific directories or chamber listings',
        ],
      },
      {
        heading: 'Common Mistakes',
        items: [
          'An old address still listed somewhere after a move',
          'Multiple phone numbers floating around from past ad campaigns',
          'A missing suite or unit number on some listings',
          'A duplicate Google Business Profile listing for the same location',
        ],
      },
      {
        heading: 'Maintenance',
        items: [
          'Re-check citations any time you move, rebrand, or change phone providers',
          'Set a recurring reminder — every 6 months — to search your business name and audit the results',
        ],
      },
    ],
  },
  {
    slug: 'blog-checklist',
    glyph: '✎',
    title: 'Small Business Blog Checklist',
    subtitle: 'What separates a blog post that actually earns traffic from one that just fills space.',
    sections: [
      {
        heading: 'Before You Write',
        items: [
          'You know what real question or problem this post answers',
          'You have checked what is already ranking for that topic',
          'You have a specific reader in mind — not "everyone"',
        ],
      },
      {
        heading: 'Writing It',
        items: [
          'The title clearly states what the reader will get',
          'The first two or three sentences answer the core question directly',
          'The post is broken into scannable sections with real subheadings',
          'It includes specifics — real numbers, examples, local references — not generic filler',
          'It ends with a clear next step: contact, a related service, or a related post',
        ],
      },
      {
        heading: 'Before You Publish',
        items: [
          'Meta title and description are written by hand, not left to auto-generate',
          'At least one internal link points to a relevant service or product page',
          'Images are compressed and have alt text',
          'It has been proofread out loud, once',
        ],
      },
      {
        heading: 'After You Publish',
        items: [
          'Share it on the social channels your customers actually use',
          'Include it in the next newsletter send',
          'Revisit and refresh it if it goes stale — pricing, dates, or screenshots change',
        ],
      },
    ],
  },
  {
    slug: 'social-checklist',
    glyph: '◍',
    title: 'Social Media Presence Checklist',
    subtitle: 'Fewer platforms, done consistently, beats being everywhere and nowhere at once.',
    sections: [
      {
        heading: 'Foundation',
        items: [
          'A business profile — not a personal one — is set up on the 1–2 platforms your customers actually use',
          'Profile photo, cover image, and bio are complete and consistent with your brand',
          'The link in bio points to a relevant landing page, not just a generic homepage',
          'Business category, hours, and contact info are filled in',
        ],
      },
      {
        heading: 'Content Rhythm',
        items: [
          'A realistic, sustainable posting schedule exists — consistency beats frequency',
          'The content mix includes more than promotions: behind-the-scenes, tips, customer stories',
          'Visuals are consistent with your brand — colors, fonts, and tone',
        ],
      },
      {
        heading: 'Engagement',
        items: [
          'Comments and messages get a response within a reasonable window',
          'Reviews and mentions are monitored, and both good and bad ones get a reply',
        ],
      },
      {
        heading: 'Measurement',
        items: [
          'You know which platform actually sends traffic or leads to your site — checked in analytics, not by feel',
          'Effort is not spread across platforms that return nothing measurable',
        ],
      },
    ],
  },
  {
    slug: 'newsletter-checklist',
    glyph: '↻',
    title: 'Email Newsletter Checklist',
    subtitle: 'The mechanics that keep an email list healthy, deliverable, and worth sending to.',
    sections: [
      {
        heading: 'List Health',
        items: [
          'A sign-up form exists on your site — not just on social media',
          'A clear consent process is in place, ideally double opt-in',
          'The list is sent only to people who actually opted in — no purchased or scraped lists',
        ],
      },
      {
        heading: 'Content',
        items: [
          'Subject lines are specific, not vague — "New Spring Hours" beats "Newsletter #12"',
          'Each send has one primary message, not five competing calls to action',
          'There is a single, clear call-to-action button',
          'The mobile preview has been checked before sending',
        ],
      },
      {
        heading: 'Deliverability',
        items: [
          'SPF, DKIM, and DMARC records are set up for the sending domain',
          'An unsubscribe link is present and functional — this is legally required',
          'Bounce rate is monitored and hard bounces are removed',
        ],
      },
      {
        heading: 'Rhythm & Measurement',
        items: [
          'Sending cadence is realistic and consistent — monthly beats sporadic weekly bursts that fizzle',
          'Open rate, click rate, and unsubscribe rate are reviewed after every send',
        ],
      },
    ],
  },
  {
    slug: 'gsc-checklist',
    glyph: '⚙',
    title: 'Google Search Console Checklist',
    subtitle: 'The free tool most small business owners never open — and what to check when they finally do.',
    sections: [
      {
        heading: 'Setup',
        items: [
          'Property is verified — a domain property is preferred over a URL-prefix property when possible',
          'An XML sitemap has been submitted',
          'A preferred domain (www vs. non-www) is set consistently via redirects',
        ],
      },
      {
        heading: 'Monthly Check',
        items: [
          'Review the Coverage/Indexing report for errors — 404s, redirect issues, accidental noindex tags',
          'Review the Core Web Vitals report for any "Poor" URLs',
          'Check Search Analytics — has clicks or impressions dropped meaningfully?',
          'Review the Manual Actions report — it should stay empty',
          'Check the Security Issues report',
        ],
      },
      {
        heading: 'Ongoing Watch',
        items: [
          'Check new top queries — are you ranking for terms you did not expect, for better or worse?',
          'Confirm the Mobile Usability report shows no new errors',
          'Any sudden spike or drop in impressions gets investigated, not ignored',
        ],
      },
    ],
  },
  {
    slug: 'analytics-checklist',
    glyph: '✦',
    title: 'Google Analytics (GA4) Checklist',
    subtitle: 'Setting up GA4 so it answers real business questions, not just counts visitors.',
    sections: [
      {
        heading: 'Setup',
        items: [
          'A GA4 property is created and tracking code is installed on every page — verified in the Realtime report',
          'Cross-domain tracking is configured if a separate checkout or booking platform is used',
          'Internal traffic — you and your team — is excluded with an IP filter',
        ],
      },
      {
        heading: 'Conversions',
        items: [
          'Key actions are marked as conversions: form submits, phone clicks, purchases, bookings',
          'E-commerce tracking is enabled if the site sells online',
          'Conversion values reflect real business value, not just raw event counts',
        ],
      },
      {
        heading: 'Reporting Habits',
        items: [
          'Traffic sources are checked monthly — where visitors are actually coming from',
          'Top landing pages and top exit pages are known, not assumed',
          'The focus is on what converting visitors have in common, not just total "Users"',
        ],
      },
      {
        heading: 'Data Integrity',
        items: [
          'Data retention settings are configured — GA4 defaults can be shorter than expected',
          'Consent mode and cookie banner integration are correctly wired where required',
        ],
      },
    ],
  },
  {
    slug: 'ads-checklist',
    glyph: '◐',
    title: 'Paid Ads Launch Checklist',
    subtitle: 'What to confirm before spending a single dollar on Google or Meta ads.',
    sections: [
      {
        heading: 'Before You Spend',
        items: [
          'Conversion tracking is confirmed working before ads go live, not after',
          'The landing page matches the ad\'s promise — same offer, same language',
          'The landing page loads fast and works cleanly on mobile',
          'Budget matches a realistic test size — results should not be judged on day two',
        ],
      },
      {
        heading: 'Campaign Setup',
        items: [
          'Each campaign has a clear, specific goal: leads, calls, or purchases — not just "traffic"',
          'Negative keywords are added on Search campaigns to filter out irrelevant clicks',
          'Audience targeting matches who actually buys, not everyone within a wide radius',
          'Ad copy has a clear, specific call to action',
        ],
      },
      {
        heading: 'Ongoing Management',
        items: [
          'The search terms report is checked weekly to find new negative keywords',
          'Cost-per-lead is compared against actual customer value, not just cost-per-click',
          'Budget is reallocated away from underperforming ads and campaigns regularly',
        ],
      },
      {
        heading: 'Reporting',
        items: [
          'You can answer, in one sentence: what did we spend, and what did we get back?',
        ],
      },
    ],
  },
  {
    slug: 'tracking-checklist',
    glyph: '◇',
    title: 'Conversion Tracking Setup Checklist',
    subtitle: 'The plumbing behind every marketing decision — if this is broken, everything built on top of it is guessing.',
    sections: [
      {
        heading: 'Foundation',
        items: [
          'Every advertising platform in use (Google, Meta, etc.) has its tag or pixel installed sitewide',
          'A tag management system (like Google Tag Manager) is used instead of hand-pasting scripts into every page',
          'Tags are verified firing correctly with each platform\'s own debug tool, not just assumed to work',
        ],
      },
      {
        heading: 'What to Track',
        items: [
          'Form submissions fire a distinct, correctly labeled conversion event',
          'Phone number clicks are tracked, especially on mobile',
          'Purchases or bookings pass real transaction values, not just a completion flag',
          'Duplicate conversions are prevented — the same action should not fire the same event twice',
        ],
      },
      {
        heading: 'Cross-Platform Consistency',
        items: [
          'The same actions are defined as conversions consistently across GA4, Google Ads, and Meta',
          'Server-side tracking (CAPI, sGTM) is considered if iOS privacy changes are undercounting conversions',
          'UTM parameters are used consistently on every campaign link so traffic sources are never a guess',
        ],
      },
      {
        heading: 'Maintenance',
        items: [
          'Tracking is re-tested any time the website, checkout, or booking flow changes',
          'A quarterly audit confirms every event is still firing and every value is still accurate',
        ],
      },
    ],
  },
];
