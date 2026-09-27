// Home page content. Copy is original to DevHire.
// Items marked PLACEHOLDER need real, verifiable data before launch.

export const hero = {
  slides: [
    {
      thumb: "Hire Developers",
      eyebrow: "Hire Developers",
      // Last word renders in the accent color.
      title: "Remote Engineers Who Join Your Sprint And Deliver Working",
      titleAccent: "Software.",
      text: "Bring in vetted developers on contract who plug into your repo, your rituals and your roadmap, and open their first pull request in the first week.",
      tagline: "Your backlog. Your process. Our people. One team.",
      cta: { label: "View Developer Profiles", href: "/technologies/" },
      micro: "Tell us the stack. Meet the shortlist. Start this month.",
      chips: ["Works inside your tools", "No bench-time billing", "Scale up or down monthly"],
      image: "/images/Hero-section-1.jpg",
      tone: "amber",
    },
    {
      thumb: "MVP Build Partner",
      eyebrow: "MVP Build Partner",
      title: "Launch Your First Version With One Accountable Product",
      titleAccent: "Team.",
      text: "A small cross-functional squad that takes you from scoped idea to a release your first customers can use.",
      cta: { label: "Get A Launch Plan", href: "/contact-us/" },
      chips: ["Fixed weekly demos", "Scope you can read", "Code you own"],
      image: "",
      tone: "violet",
    },
    {
      thumb: "Legacy Upgrade",
      eyebrow: "Legacy Upgrade",
      title: "Replace Ageing Systems Piece By Piece, Without Stopping The",
      titleAccent: "Business.",
      text: "Engineers who have moved old platforms to modern stacks while production traffic kept flowing.",
      cta: { label: "Request A Migration Review", href: "/service/legacy-system-modernization/" },
      chips: ["Incremental cut-over", "Rollback at every step", "Documented as we go"],
      image: "",
      tone: "teal",
    },
    {
      thumb: "Offshore Team Setup",
      eyebrow: "Offshore Team Setup",
      title: "Stand Up A Long-Term Offshore Team Without Opening An",
      titleAccent: "Office.",
      text: "We handle hiring, payroll, equipment and compliance. You run the engineering.",
      cta: { label: "Talk To A Product Engineer", href: "/contact-us/" },
      chips: ["Hiring handled", "Compliance handled", "You direct the work"],
      image: "",
      tone: "blue",
    },
  ],
};

export const trustedBy = {
  // Words wrapped in [] render in the accent color.
  title: "Teams That Build With [DevHire] Engineers Across [Industries] And Time Zones",
  caption: "From first-product startups to established engineering organisations. References on request.",
  // PLACEHOLDER: add real client logos to /public/images/clients and list them here.
  logos: [] as { name: string; src: string }[],
  placeholderCount: 10,
};

export const compare = {
  eyebrow: "Straight Comparison",
  title: "Before you sign with any developer platform, [check what the brochure leaves out.]",
  intro:
    "Marketplaces, freelance sites and outsourcing agencies use nearly the same headline. Here is a plain look at where the models differ once work starts.",
  market: {
    heading: "What the market says",
    sub: "Talent marketplaces, freelance platforms and outsourcing agencies",
    rows: [
      { name: "Elite talent marketplaces", claim: "“Only a tiny top slice of applicants get in.”", verdict: "Hard to verify" },
      { name: "Fast-match networks", claim: "“Matched with a developer in a few days.”", verdict: "Everyone says it" },
      { name: "Freelance platforms", claim: "“The biggest pool of independent talent.”", verdict: "No one accountable" },
      { name: "AI-matching platforms", claim: "“Algorithm-matched engineers at scale.”", verdict: "Everyone says it" },
      { name: "Boutique vetted networks", claim: "“Pre-screened developers, quick start.”", verdict: "Baseline expectation" },
      { name: "Staff augmentation firms", claim: "“Fully managed dedicated remote teams.”", verdict: "Everyone says it" },
    ],
  },
  ours: {
    heading: "DevHire",
    sub: "How we work",
    rows: [
      { title: "Nothing to pay upfront.", text: "No deposit and no minimum term. Interview the developer first, then decide." },
      { title: "You meet the real person.", text: "Actual profile, actual code samples and the rate in writing before any contract." },
      { title: "Priced by sprint outcome.", text: "We agree what ships each sprint. If it slips because of us, we make it right at our cost." },
      { title: "One engineer, one product.", text: "No rotating pool. The same developer stays on your codebase and builds real context." },
      { title: "AI-assisted by default.", text: "Our engineers use modern coding assistants daily, with human review on every merge." },
      { title: "Short notice to leave.", text: "No placement fee and no exit penalty. If we are not delivering, you should not be paying." },
    ],
  },
  callout:
    "Good developers exist on every platform. The difference is the incentive. When a vendor bills by the hour, more hours are good for the vendor whether or not you get value. DevHire is set up so that we do well only when your sprint ships.",
};

export const midCta = {
  title: "Ready To Add Engineers Who Deliver Production Code?",
  text: "Tell us the stack and the timeline. We will come back with a shortlist you can interview.",
  primary: { label: "View Developer Profiles", href: "/technologies/" },
  secondary: { label: "Book A Free Call", href: "/contact-us/" },
};

export const reasons = {
  title: "Why Engineering Leaders Work With [Our Developers]",
  intro:
    "Teams use DevHire to add remote developers, build a dedicated squad or hand over a full build. Month-to-month terms. No exit fees.",
  cards: [
    {
      icon: "zap",
      title: "Move Faster Than Your Hiring Pipeline",
      text: "Launch dates, investor milestones and roadmap commitments do not wait for a three-month recruitment cycle.",
    },
    {
      icon: "users",
      title: "Grow The Team Without The Hiring Mess",
      text: "Local hiring eats months and recruiter fees. Augmentation puts proven engineers in your standup this month.",
    },
    {
      icon: "shield",
      title: "Fix Legacy And Compliance Problems",
      text: "End-of-support dates, security gaps and platforms that hold every new feature hostage.",
    },
  ],
  footer: "Here is how we help, depending on your stage.",
};

export const paths = {
  title: "Pick The Engagement That Fits Your [Stage]",
  cards: [
    {
      icon: "rocket",
      tag: "12 Weeks",
      tone: "primary",
      title: "Build An MVP",
      sub: "A fundable first release in a quarter",
      text: "For founders who need a build partner to get to launch and to the next round, without waiting to hire a CTO.",
      href: "/service/dedicated-developers/",
    },
    {
      icon: "network",
      tag: "Days, Not Months",
      tone: "blue",
      title: "Scale Your Team",
      sub: "Add engineers inside your existing team",
      text: "For companies past product-market fit that need more hands in the same repo and the same standup.",
      href: "/service/it-staff-augmentation-services/",
    },
    {
      icon: "wrench",
      tag: "No Downtime",
      tone: "primary",
      title: "Fix Systems",
      sub: "Modernise old platforms while they keep running",
      text: "For CTOs carrying a legacy system the board wants replaced, without the outage nobody wants to explain.",
      href: "/service/legacy-system-modernization/",
    },
  ],
  strip: { text: "Planning a permanent offshore development centre?", link: { label: "Explore Setup", href: "/hire/dedicated-developers/" } },
  cta: {
    title: "Already know your path?",
    button: { label: "Book A 15-Minute Fit Call", href: "/contact-us/" },
    note: "Speak with a senior engineer. Get a feasibility view within two working days.",
  },
};

export const technologies = {
  title: "The Stacks Our Engineers Use To Ship [Reliable Products]",
  categories: [
    {
      id: "frontend",
      icon: "monitor",
      label: "Frontend",
      items: [
        { label: "React Developers", href: "/hire/react-js-developers/" },
        { label: "Angular Developers", href: "/hire/angularjs-developers/" },
        { label: "Next.js Developers", href: "/hire/nextjs-developer/" },
        { label: "Svelte Developers", href: "/hire/svelte-developers/" },
        { label: "JavaScript Developers", href: "/hire/javascript-developers/" },
      ],
    },
    {
      id: "backend",
      icon: "server",
      label: "Backend",
      items: [
        { label: "Node.js Developers", href: "/hire/nodejs-developers/" },
        { label: "Python Developers", href: "/hire/python-developers/" },
        { label: "Java Developers", href: "/hire/java-developers/" },
        { label: ".NET Developers", href: "/hire/net-developers/" },
        { label: "Golang Developers", href: "/hire/golang-developers/" },
        { label: "PHP Developers", href: "/hire/php-developers/" },
        { label: "Laravel Developers", href: "/hire/laravel-developers/" },
      ],
    },
    {
      id: "mobile",
      icon: "smartphone",
      label: "Mobile",
      items: [
        { label: "Android Developers", href: "/hire/android-developers/" },
        { label: "iOS Developers", href: "/hire/ios-developers/" },
        { label: "Flutter Developers", href: "/hire/flutter-developers/" },
        { label: "React Native Developers", href: "/hire/react-native-developers/" },
      ],
    },
    {
      id: "cloud",
      icon: "cloud",
      label: "Cloud & DevOps",
      items: [
        { label: "AWS Experts", href: "/hire/aws-experts/" },
        { label: "Platform Engineers", href: "/hire/platform-engineers/" },
      ],
    },
    {
      id: "data",
      icon: "brain",
      label: "Data & AI",
      items: [
        { label: "AI Developers", href: "/hire/ai-developers/" },
        { label: "Agentic AI Developers", href: "/hire/agentic-ai-developers/" },
        { label: "Data Engineers", href: "/hire/data-engineer/" },
      ],
    },
    {
      id: "cms",
      icon: "cart",
      label: "CMS & E-Commerce",
      items: [
        { label: "WordPress Developers", href: "/hire/wordpress-developers/" },
        { label: "Shopify Developers", href: "/hire/shopify-developers/" },
        { label: "Salesforce Developers", href: "/hire/salesforce-developers/" },
      ],
    },
  ],
};

export const caseStudies = {
  eyebrow: "Case Studies",
  title: "Outcomes From Real Engagements",
  intro: "How teams in different industries grew their engineering capacity and shipped sooner with DevHire.",
  // PLACEHOLDER: replace with real engagements, real metrics and approved client quotes.
  items: [
    {
      tab: "Case Study 1",
      tag: "Project Type",
      title: "Case study headline: the result, stated as a number",
      summary:
        "Two or three sentences on where the client started, what was getting in the way and what the DevHire team changed. Keep it specific and keep it true.",
      metrics: [
        { icon: "trending", value: "00%", label: "Primary metric" },
        { icon: "clock", value: "00%", label: "Second metric" },
        { icon: "users", value: "0", label: "Third metric" },
      ],
      quote: { text: "Approved client quote goes here.", author: "Client name, role" },
      href: "/case-study/our-work/",
      chip: "Project Type",
      image: "",
    },
    {
      tab: "Case Study 2",
      tag: "Project Type",
      title: "Second case study headline with its own headline number",
      summary:
        "Two or three sentences on where the client started, what was getting in the way and what the DevHire team changed. Keep it specific and keep it true.",
      metrics: [
        { icon: "trending", value: "00%", label: "Primary metric" },
        { icon: "clock", value: "00%", label: "Second metric" },
        { icon: "users", value: "0", label: "Third metric" },
      ],
      quote: { text: "Approved client quote goes here.", author: "Client name, role" },
      href: "/case-study/our-work/",
      chip: "Project Type",
      image: "",
    },
  ],
  all: { label: "View All Case Studies", href: "/case-study/our-work/" },
};

export const guides = {
  title: "Read The Guides Before You [Decide.]",
  intro: "Free, plain-language guides for engineering leaders comparing outsourcing options.",
  cards: [
    {
      title: "Dedicated Developers vs Freelancers",
      text: "Freelancers are quick to start. Dedicated developers stay. See how the two compare on cost, reliability and ownership before you choose.",
      link: { label: "Compare the Models", href: "/hire/dedicated-developers/dedicated-developers-vs-freelancers/" },
    },
    {
      title: "Offshore Developer Cost Guide",
      text: "What an offshore developer really costs once you add management, tooling and turnover, and where teams save without cutting quality.",
      link: { label: "See the Pricing Guide", href: "/hire/dedicated-developers/offshore-developers-cost/" },
    },
    {
      title: "Staff Augmentation vs Dedicated Teams",
      text: "Which model suits your stage, your budget and your appetite for risk. Written for CTOs who are tired of vendor vocabulary.",
      link: { label: "Read the Guide", href: "/hire/dedicated-developers/dedicated-team-vs-staff-augmentation/" },
    },
  ],
};

export const timeline = {
  title: "From First Conversation To [Shipping]",
  steps: [
    { when: "Week 1", title: "Engineering Fit Call" },
    { when: "Weeks 2–4", title: "Team Starts Or Build Begins" },
    { when: "Month 2+", title: "Grow Or Adjust As You Need" },
  ],
  checks: ["No drawn-out procurement.", "No lock-in.", "No hidden costs."],
};

export const testimonials = {
  eyebrow: "Client Stories",
  title: "Real Work, [Real People]",
  intro: "In their own words",
  // PLACEHOLDER: only publish quotes that clients have approved in writing.
  items: [
    { quote: "Approved client quote goes here. Two to four sentences works best in this card.", name: "Client Name", role: "Role, Company" },
    { quote: "Approved client quote goes here. Two to four sentences works best in this card.", name: "Client Name", role: "Role, Company" },
    { quote: "Approved client quote goes here. Two to four sentences works best in this card.", name: "Client Name", role: "Role, Company" },
    { quote: "Approved client quote goes here. Two to four sentences works best in this card.", name: "Client Name", role: "Role, Company" },
  ],
  // PLACEHOLDER: verified numbers only.
  stats: [
    { value: "—", label: "Average Rating", stars: true },
    { value: "—", label: "Clients" },
    { value: "—", label: "Countries Served" },
    { value: "—", label: "Client Retention" },
  ],
};

export const lead = {
  title: "Hire [Developers] Without Getting Locked In",
  text: "Dedicated teams to build, grow or modernise your product. You own the code and the IP. We take care of contracts and compliance.",
  listTitle: "What you get",
  list: [
    "Individual developers or a full team",
    "A shortlist within days",
    "Secure, documented delivery",
    "Clear ownership and a clean exit",
  ],
  note: ["No obligation. No pressure.", "Used by startups and enterprise teams."],
  form: {
    title: "Get a Recommendation",
    intro: "Share a few details and we will suggest a sensible next step.",
    goals: ["Hire one or more developers", "Build a dedicated team", "Build an MVP", "Modernise a legacy system", "Not sure yet"],
    teamSizes: ["1–2", "3–5", "6–10", "10+"],
    timelines: ["Immediately", "Within a month", "1–3 months", "Just exploring"],
    submit: "Get Your Engineering Fit Report",
    trust: ["Takes under 2 minutes", "No obligation or sales pressure", "Reply within two working days"],
    alt: { lead: "Prefer to talk first?", label: "Book a 15-minute fit call", href: "/contact-us/" },
  },
};

export const insights = {
  title: "Related [Insights]",
  all: { label: "View All Articles", href: "/insights/" },
  // PLACEHOLDER: replaced by the three latest blog posts once the blog is built.
  posts: [
    {
      category: "Hiring",
      title: "How to brief a remote developer so week one is productive",
      excerpt: "A short checklist covering access, context and a first task that is small enough to finish.",
      href: "/insights/",
      tone: "amber",
    },
    {
      category: "Project Management",
      title: "Staff augmentation or a dedicated team: a decision you can make in ten minutes",
      excerpt: "Four questions about ownership, runway and management time that settle the choice.",
      href: "/insights/",
      tone: "blue",
    },
    {
      category: "Modernisation",
      title: "Signs your legacy platform has become a business risk",
      excerpt: "What to look for in release frequency, incident history and hiring difficulty.",
      href: "/insights/",
      tone: "teal",
    },
  ],
};

export const faq = {
  title: "Questions [CTOs] Ask Before Hiring Developers",
  button: { label: "Have More Questions?", href: "/faq/" },
  items: [
    {
      q: "How soon can a developer start?",
      a: "Once we understand your stack and the role, we share a shortlist and you interview the candidates. Start dates depend on the role and seniority. We confirm a date in writing before you commit.",
    },
    {
      q: "What does a dedicated team cost?",
      a: "Cost depends on seniority, stack and team size. We quote a fixed monthly figure per engineer that includes management and replacement cover, so there is nothing to add later. The cost estimate tool gives you a starting range.",
    },
    {
      q: "What is the difference between staff augmentation and a dedicated team?",
      a: "With staff augmentation, our engineers join your team and you direct their work day to day. With a dedicated team, we supply a complete squad, including a lead, that owns delivery against goals you set.",
    },
    {
      q: "How do you screen developers?",
      a: "Screening covers code review on real work, a live technical interview, communication in English and a practical task based on the kind of system you run. We look for people who have shipped in production, not only people who interview well.",
    },
    {
      q: "Can I change the size of my team?",
      a: "Yes. Engagements run month to month. Add engineers when the roadmap grows and reduce when it shrinks, with notice periods stated in the contract.",
    },
    {
      q: "Who owns the code?",
      a: "You do. All work product and intellectual property is assigned to you in the contract, and work happens in your repositories from the first day.",
    },
    {
      q: "What if a developer is not the right fit?",
      a: "Tell us. We first try to fix the problem, and if that does not work we replace the developer and cover the handover time ourselves.",
    },
    {
      q: "Do you work with early-stage startups?",
      a: "Yes. We work with founders building a first release as well as with larger engineering organisations. The engagement model differs, the standard of work does not.",
    },
    {
      q: "How do you handle security and confidentiality?",
      a: "Every engineer signs a confidentiality agreement before seeing your code. Access follows least privilege, and we follow your security policies for devices, credentials and data.",
    },
    {
      q: "Should I hire a dedicated developer or a freelancer?",
      a: "A freelancer suits a short, well-defined task. For ongoing product work, a dedicated developer gives you continuity, accountability and someone who is still there next quarter.",
    },
    {
      q: "What is the biggest risk with remote developers, and how do you reduce it?",
      a: "The biggest risk is slow feedback: work drifts for weeks before anyone notices. We reduce it with small tasks, daily visibility in your tools and a demo every sprint.",
    },
    {
      q: "How do we get started?",
      a: "Book a fit call or send the form on this page. We reply with a recommended model, a shortlist timeline and a price range.",
    },
  ],
};
