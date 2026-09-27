import type { TechData } from "@/content/types";

const data: TechData = {
  slug: "seo-experts",
  name: "SEO",
  role: "SEO Experts",
  category: "marketing",
  meta: {
    title: "Hire SEO Experts",
    description:
      "Hire SEO experts for technical SEO, content strategy and organic growth. They work in your accounts. Interview first, month-to-month terms.",
  },
  hook: "Organic search work stalls when audits pile up as documents and nobody stays to see the fixes through.",
  focus: "Technical SEO, Content Strategy & Organic Growth",
  heroText:
    "SEO specialists who work inside your site, your analytics and your backlog. They find what is holding pages back, write the tickets and check the fixes after release.",
  heroBullets: [
    "Technical audits turned into prioritised tickets",
    "Content plans built on search intent, not keyword lists",
    "Reporting from your own Search Console and analytics",
    "You interview the specialist before any contract",
  ],
  build: [
    {
      label: "Technical SEO Audits",
      icon: "search",
      text: "A review of crawling, indexing, rendering, site structure and page speed, written up as work items.",
      stack: ["Screaming Frog", "Google Search Console", "PageSpeed Insights", "Sitebulb"],
      outcome: "Engineering receives a ranked list of fixes, each with a reason and a way to verify it.",
    },
    {
      label: "Content Strategy",
      icon: "file",
      text: "Topic research, content briefs and a publishing plan based on what searchers are trying to get done.",
      stack: ["Ahrefs", "Semrush", "Google Search Console", "Google Docs"],
      outcome: "Writers know what to cover, for whom and why before they start.",
    },
    {
      label: "Site Migrations",
      icon: "refresh",
      text: "Redirect maps, pre-launch checks and post-launch monitoring for redesigns, platform changes and domain moves.",
      stack: ["Screaming Frog", "Google Search Console", "Log File Analysis", "Google Analytics 4"],
      outcome: "Old URLs point to the right new pages, and problems are spotted soon after launch.",
    },
    {
      label: "E-Commerce SEO",
      icon: "cart",
      text: "Category structure, filtered navigation, product structured data and rules for out-of-stock pages.",
      stack: ["Schema.org", "Google Merchant Center", "Shopify", "Screaming Frog"],
      outcome: "Search engines can crawl the catalogue without wading through duplicate pages.",
    },
    {
      label: "Reporting and Measurement",
      icon: "chart",
      text: "Dashboards that join search data to on-site behaviour, with notes on what changed and why.",
      stack: ["Google Analytics 4", "Looker Studio", "Google Search Console", "BigQuery"],
      outcome: "Stakeholders see what was done, what moved and what comes next in one place.",
    },
  ],
  fact: {
    text: "Google publishes Search Essentials, its own documentation of the technical requirements and spam policies that content must meet to be eligible to appear in Google Search.",
    source: "Google Search Central",
  },
  skills: [
    {
      title: "Crawling and indexing",
      text: "Control over which pages search engines fetch, which they index and which URL they treat as the original.",
      chips: ["Robots.txt", "XML Sitemaps", "Canonical Tags"],
    },
    {
      title: "JavaScript and rendering",
      text: "Checking what a crawler sees on sites built with client-side frameworks, and working with developers to fix gaps.",
      chips: ["JavaScript SEO", "Server-Side Rendering", "URL Inspection"],
    },
    {
      title: "Page experience",
      text: "Reading field and lab data for loading, responsiveness and layout stability, then naming the cause.",
      chips: ["Core Web Vitals", "Lighthouse", "PageSpeed Insights"],
    },
    {
      title: "Structured data",
      text: "Markup for products, articles, FAQs and organisations, validated before and after release.",
      chips: ["Schema.org", "JSON-LD", "Rich Results Test"],
    },
    {
      title: "Keyword and intent research",
      text: "Grouping queries by what the searcher wants, and matching each group to a page type.",
      chips: ["Ahrefs", "Semrush", "Search Console"],
    },
    {
      title: "On-page and internal linking",
      text: "Titles, headings and links arranged so that people and crawlers both understand how pages relate.",
      chips: ["Content Briefs", "Title Tags", "Internal Linking"],
    },
    {
      title: "International and local search",
      text: "Language and region targeting for multi-market sites, and listings management for businesses with locations.",
      chips: ["Hreflang", "Google Business Profile", "Local Listings"],
    },
    {
      title: "Analytics and reporting",
      text: "Clean event tracking and reports that separate what the work changed from seasonal movement.",
      chips: ["GA4", "Looker Studio", "BigQuery"],
    },
  ],
  versions: [
    { version: "Panda", year: "2011", tag: "Content quality", text: "Google's Panda update reduced the visibility of thin and low-quality content." },
    { version: "Mobile-first indexing", year: "2018", tag: "Mobile", text: "Google began rolling out mobile-first indexing, which uses the mobile version of a page for indexing and ranking." },
    { version: "Core Web Vitals", year: "2020", tag: "Page experience", text: "Google introduced Core Web Vitals, a set of metrics for loading, interactivity and visual stability." },
    { version: "Helpful content update", year: "2022", tag: "People-first content", text: "Google launched a system aimed at content written for people first and for search engines second." },
    { version: "Interaction to Next Paint", year: "2024", tag: "Responsiveness", text: "Interaction to Next Paint replaced First Input Delay as a Core Web Vital." },
    { version: "AI Overviews", year: "2024", tag: "AI in search", text: "Google began showing AI-generated summaries, named AI Overviews, in search results in the United States." },
  ],
  chooseWhen: [
    { title: "Organic search matters to your sales", text: "If buyers research your category on search engines, the channel deserves a dedicated owner." },
    { title: "A migration or redesign is coming", text: "Platform and URL changes carry real risk. Planning for search before launch is far easier than repair after it." },
    { title: "The site is large or built on JavaScript", text: "Big catalogues and client-rendered pages raise crawling and rendering questions that need a specialist." },
    { title: "Content is published without a plan", text: "When articles overlap or miss what people search for, a strategy gives the writing a direction." },
  ],
  chooseNot: [
    { title: "You need leads right away", text: "Organic work takes time to show. Paid campaigns are the faster channel." },
    { title: "Nobody can implement the recommendations", text: "Without developer or content capacity, findings will sit in a document." },
    { title: "You expect guaranteed rankings", text: "Search engines decide rankings and change their systems often. No honest specialist can promise a position." },
    { title: "The site is a handful of pages", text: "A small brochure site may need a one-off check and not an ongoing hire." },
  ],
  whyUs: [
    { title: "Assessed on a real site", text: "Candidates audit a live website and explain which findings matter most and why." },
    { title: "You interview the specialist", text: "You question their approach and past work before any contract is signed." },
    { title: "Your accounts stay yours", text: "Work is done in your Search Console, analytics and task board. Briefs, audits and reports belong to you." },
    { title: "No promised positions", text: "We do not sell guaranteed rankings. The specialist reports the work done and what the data shows." },
    { title: "Simple to change course", text: "Month-to-month terms, no exit fee and a replacement if the fit is wrong." },
  ],
  faqs: [
    {
      q: "Can you guarantee first-page rankings?",
      a: "No. Rankings are decided by search engines and depend on competition and on changes nobody outside those companies controls. We commit to the work and to clear reporting, not to a position.",
    },
    {
      q: "How soon will we see results?",
      a: "It varies with the site, the competition and how quickly fixes are released. We do not give a fixed timeline. The specialist sets out what is being done and which measures to watch.",
    },
    {
      q: "Does the SEO expert change the site directly?",
      a: "That depends on the access you give. Some clients grant CMS access for titles, content and redirects. Code changes usually go to your developers as tickets.",
    },
    {
      q: "Which tools do they use?",
      a: "They work in your Google Search Console and analytics accounts. If your company holds licences for tools such as Ahrefs, Semrush or Screaming Frog, they use those.",
    },
    {
      q: "Do they write the content as well?",
      a: "SEO specialists plan content and write briefs. Some also write and edit. If you need writing included, tell us and we shortlist for it.",
    },
    {
      q: "Who owns the work?",
      a: "You do. All work product is assigned to you in the contract, and an NDA is signed before any access is given.",
    },
  ],
};

export default data;
