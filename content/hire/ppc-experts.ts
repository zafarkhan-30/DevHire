import type { TechData } from "@/content/types";

const data: TechData = {
  slug: "ppc-experts",
  name: "PPC",
  role: "PPC Experts",
  category: "marketing",
  meta: {
    title: "Hire PPC Experts",
    description:
      "Hire PPC experts for paid search, paid social and performance marketing. Campaigns run in ad accounts you own. Interview before any contract.",
  },
  hook: "Ad budgets leak when campaigns are left on default settings and nobody checks where the spend is going.",
  focus: "Paid Search, Paid Social & Performance Marketing",
  heroText:
    "Paid media specialists who manage campaigns inside ad accounts you own. They set up tracking properly, test ads and bids in a controlled way, and report in plain terms what the spend produced.",
  heroBullets: [
    "Google Ads, Microsoft Advertising, Meta and LinkedIn",
    "Conversion tracking checked before budgets are raised",
    "Campaigns run in ad accounts that you own",
    "Your interview with the specialist comes before any contract",
  ],
  build: [
    {
      label: "Search Campaigns",
      icon: "search",
      text: "Keyword research, account structure, ad copy and negative keyword lists for search advertising.",
      stack: ["Google Ads", "Microsoft Advertising", "Google Ads Editor", "Keyword Planner"],
      outcome: "Spend is directed at searches that match what you sell.",
    },
    {
      label: "Shopping Campaigns",
      icon: "cart",
      text: "Product feed clean-up, Merchant Center setup and campaign structure for retailers.",
      stack: ["Google Merchant Center", "Performance Max", "Product Feeds", "Google Ads"],
      outcome: "Products appear with correct titles, prices and availability.",
    },
    {
      label: "Paid Social",
      icon: "users",
      text: "Audience building, creative testing and retargeting across social platforms.",
      stack: ["Meta Ads Manager", "LinkedIn Campaign Manager", "TikTok Ads Manager", "Conversions API"],
      outcome: "Each audience sees a message written for it, and weak creative is retired on evidence.",
    },
    {
      label: "Conversion Tracking",
      icon: "target",
      text: "Tags, events, consent handling and offline conversion imports, set up and verified end to end.",
      stack: ["Google Tag Manager", "Google Analytics 4", "Consent Mode", "Enhanced Conversions"],
      outcome: "The platforms optimise towards real leads and sales, not towards clicks.",
    },
    {
      label: "Landing Page Testing",
      icon: "file",
      text: "Test plans for headlines, forms and offers, with findings shared with your design and web teams.",
      stack: ["Google Analytics 4", "Microsoft Clarity", "VWO", "Looker Studio"],
      outcome: "Changes to pages are decided by test results.",
    },
  ],
  fact: {
    text: "Google states that ad position is decided by Ad Rank, which takes into account the quality of the ad and landing page as well as the bid.",
    source: "Google Ads Help",
  },
  skills: [
    {
      title: "Account structure",
      text: "Campaigns and ad groups organised so that budgets, bids and reports line up with how the business is run.",
      chips: ["Campaign Structure", "Match Types", "Negative Keywords"],
    },
    {
      title: "Bidding and budgets",
      text: "Choosing a bid strategy that suits the amount of conversion data available, and pacing spend across the month.",
      chips: ["Smart Bidding", "Target CPA", "Target ROAS"],
    },
    {
      title: "Ad copy and creative testing",
      text: "Structured tests of headlines, descriptions and visuals, changing one thing at a time.",
      chips: ["Responsive Search Ads", "Ad Variations", "Creative Testing"],
    },
    {
      title: "Audiences",
      text: "First-party lists, retargeting and similar-audience targeting, used within each platform's consent rules.",
      chips: ["Customer Match", "Remarketing", "Lookalike Audiences"],
    },
    {
      title: "Product feeds",
      text: "Feed attributes, disapprovals and custom labels managed so that shopping campaigns can be segmented.",
      chips: ["Merchant Center", "Feed Attributes", "Custom Labels"],
    },
    {
      title: "Tracking and attribution",
      text: "Browser and server-side events reconciled with your CRM, with the limits of each attribution model made clear.",
      chips: ["Google Tag Manager", "GA4", "Conversions API"],
    },
    {
      title: "Landing page review",
      text: "Message match, page speed and form friction checked before more traffic is bought.",
      chips: ["A/B Testing", "Page Speed", "Form Analysis"],
    },
    {
      title: "Reporting",
      text: "Regular reports that show spend, results and the next planned change, without vanity metrics.",
      chips: ["Looker Studio", "Google Sheets", "Dashboards"],
    },
  ],
  versions: [
    { version: "Google AdWords", year: "2000", tag: "Launch", text: "Google launched AdWords, its self-service advertising programme for search." },
    { version: "Google Ads", year: "2018", tag: "Rebrand", text: "AdWords was renamed Google Ads, reflecting formats and networks beyond search." },
    { version: "App Tracking Transparency", year: "2021", tag: "Privacy", text: "From iOS 14.5, Apple required apps to ask permission before tracking users across other apps and sites." },
    { version: "Performance Max", year: "2021", tag: "Automation", text: "Google made Performance Max available to all advertisers, covering its ad inventory from a single campaign." },
    { version: "Responsive search ads", year: "2022", tag: "Ad format", text: "Expanded text ads could no longer be created, leaving responsive search ads as the standard search format." },
    { version: "Google Analytics 4", year: "2023", tag: "Measurement", text: "Standard Universal Analytics properties stopped processing data, and Google Analytics 4 took their place." },
  ],
  chooseWhen: [
    { title: "You spend on ads without clear reporting", text: "If nobody can say which campaigns pay for themselves, the account needs an owner." },
    { title: "You want data sooner than organic can supply", text: "Paid campaigns produce data soon after launch, while organic search builds slowly." },
    { title: "A conversion can be measured", text: "When a lead, sale or sign-up is tracked, campaigns can be judged against it." },
    { title: "The account has outgrown part-time attention", text: "Several platforms, many campaigns and frequent creative changes need someone watching them closely." },
  ],
  chooseNot: [
    { title: "The budget is very small", text: "When spend is low, the cost of a specialist can outweigh what careful management saves." },
    { title: "Tracking cannot be installed", text: "Without conversion data, neither a person nor a bidding system can tell good spend from bad." },
    { title: "You expect a guaranteed return", text: "Auctions, competitors and demand all move. No honest specialist can promise a return on ad spend." },
    { title: "Sales cannot handle more enquiries", text: "More leads do not help if the ones you already have go unanswered." },
  ],
  whyUs: [
    { title: "Tested on account analysis", text: "Candidates review a sample account, find where spend is wasted and explain what they would change first." },
    { title: "You hold the interview", text: "You speak to the specialist and ask about accounts they have managed before any contract." },
    { title: "Accounts in your name", text: "Campaigns are built in ad accounts you own. The history and data stay with you if the engagement ends." },
    { title: "No promised returns", text: "We do not guarantee results from ad platforms. The specialist reports what was spent, what it produced and what changes next." },
    { title: "Working for you alone", text: "The specialist is not shared with other clients. Terms are month to month with no exit fee, and we replace the person if the fit is wrong." },
  ],
  faqs: [
    {
      q: "Can you guarantee a return on ad spend?",
      a: "No. Results depend on your offer, your market and the auction, none of which anyone fully controls. We commit to careful management and honest reporting.",
    },
    {
      q: "Who owns the ad accounts?",
      a: "You do. The specialist is given access to your accounts. Campaigns, audiences and history remain yours.",
    },
    {
      q: "Which platforms do your PPC experts manage?",
      a: "Google Ads and Microsoft Advertising for search and shopping, and Meta and LinkedIn for paid social. Tell us where you advertise and we shortlist for those platforms.",
    },
    {
      q: "Do they set up conversion tracking?",
      a: "Yes. Tracking is checked at the start, because every later decision depends on it. Where code changes are needed, the specialist writes the specification for your developers.",
    },
    {
      q: "Do they produce the ad creative?",
      a: "They write ad copy and brief the visuals. Image and video production is normally done by a designer, either yours or one hired alongside.",
    },
    {
      q: "Can the specialist work with our in-house marketing team?",
      a: "Yes. They join your planning meetings, use your reporting tools and coordinate with whoever owns SEO, content and the website.",
    },
  ],
};

export default data;
