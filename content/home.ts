// Home page content. Copy is original to SyntaxHires.
// Items marked PLACEHOLDER need real, verifiable data before launch.

export const hero = {
  slides: [
    {
      thumb: "Software Development",
      eyebrow: "Custom Software Development",
      // Last word renders in the accent color.
      title: "We Design And Build Software That Runs Your",
      titleAccent: "Business.",
      text: "Web apps, mobile apps and AI features, taken from idea to production by one accountable team. You see working software every sprint and you own the code.",
      tagline: "Your idea. Our engineers. Code you own.",
      cta: { label: "Explore Our Services", href: "/services/" },
      micro: "Tell us what you want to build. Get a written proposal.",
      chips: ["Working software every sprint", "Code in your repository", "NDA before you share"],
      image: "/images/hero/hero-1.webp",
      // Pushes the photo toward the right edge and deepens the shade behind the text.
      imageAlign: "right",
      tone: "amber",
    },
    {
      thumb: "MVP Build Partner",
      eyebrow: "MVP Build Partner",
      title: "Launch Your First Version With One Accountable Product",
      titleAccent: "Team.",
      text: "A small cross-functional squad that takes you from scoped idea to a release your first customers can use.",
      cta: { label: "Plan Your MVP", href: "/service/mvp-development/" },
      chips: ["Fixed weekly demos", "Scope you can read", "Code you own"],
      image: "/images/hero/hero-2.webp",
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
      image: "/images/hero/hero-3.webp",
      tone: "teal",
    },
    {
      thumb: "Hire Developers",
      eyebrow: "Hire Developers",
      title: "Remote Engineers Who Join Your Sprint And Deliver Working",
      titleAccent: "Software.",
      text: "Bring in vetted developers on contract who plug into your repo, your rituals and your roadmap. We handle hiring, payroll and equipment. You direct the work.",
      cta: { label: "View Developer Profiles", href: "/technologies/" },
      chips: ["Works inside your tools", "No bench-time billing", "Scale up or down monthly"],
      image: "/images/hero/hero-4.webp",
      tone: "blue",
    },
  ],
};

export const trustedBy = {
  // Words wrapped in [] render in the accent color.
  title: "Teams That Build With [SyntaxHires] Engineers Across [Industries] And Time Zones",
  caption: "From first-product startups to established engineering organisations. References on request.",
  // Real clients only, with their permission. Files live in /public/images/Partners; use a copy with the empty border trimmed off so every logo lines up at the same height.
  logos: [
    { name: "Infosys", src: "/images/Partners/trimmed/infosys.png" },
    { name: "Tata Consultancy Services", src: "/images/Partners/trimmed/tcs-tata-consultancy-services.png" },
    { name: "Capital One", src: "/images/Partners/trimmed/capital-one.png" },
    { name: "Swiggy", src: "/images/Partners/trimmed/swiggy-logo.png" },
    { name: "Freed", src: "/images/Partners/trimmed/freed-logo.png" },
    { name: "Park+", src: "/images/Partners/trimmed/park-car-app.png" },
    { name: "CView Survey", src: "/images/Partners/trimmed/cview-survey-logo.png" },
  ] as { name: string; src: string }[],
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
    heading: "SyntaxHires",
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
    "Good developers exist on every platform. The difference is the incentive. When a vendor bills by the hour, more hours are good for the vendor whether or not you get value. SyntaxHires is set up so that we do well only when your sprint ships.",
};

export const midCta = {
  title: "Have A Product To Build Or A Team To Grow?",
  text: "Tell us the goal and the timeline. We will reply with a written proposal, or a shortlist you can interview.",
  primary: { label: "Explore Our Services", href: "/services/" },
  secondary: { label: "Book A Free Call", href: "/contact-us/" },
};

export const reasons = {
  title: "Why Companies Build With [SyntaxHires]",
  intro:
    "Companies use SyntaxHires to get a product built, add remote developers or modernise an ageing system. Written terms. No exit fees.",
  cards: [
    {
      icon: "zap",
      title: "Get A Product Built Without Hiring A Team First",
      text: "Launch dates and investor milestones do not wait for you to recruit designers, developers and testers one by one.",
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
      href: "/service/mvp-development/",
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
  strip: { text: "Need a web app, mobile app or AI feature built?", link: { label: "Explore Services", href: "/services/" } },
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
  title: "How An Engagement [Runs]",
  intro: "Two sample engagements showing how a SyntaxHires team is shaped, how it works and what you get at the end.",
  // SAMPLE CONTENT: these are illustrative engagements, not client stories. They carry no client
  // names, results or quotes. Replace each with a real, client-approved case study when available.
  items: [
    {
      tab: "SaaS Product Team",
      tag: "Sample engagement",
      title: "Adding a dedicated React and Node.js squad to a growing SaaS product",
      summary:
        "A product company has more roadmap than engineers. A three-person SyntaxHires squad joins their sprints, works in their repository and takes ownership of the reporting and billing screens, so the in-house team can focus on the core platform.",
      metrics: [
        { icon: "users", value: "3", label: "Engineers in the squad" },
        { icon: "code", value: "React · Node", label: "Stack" },
        { icon: "clock", value: "Monthly", label: "Contract terms" },
      ],
      note: {
        label: "What you get",
        text: "Interviewed engineers, a shared backlog, pull requests reviewed by your team and a written handover if anyone ever changes.",
      },
      link: { label: "See how dedicated teams work", href: "/service/dedicated-developers/" },
      chip: "Dedicated Team",
      image: "/images/hero/hero-2.webp",
    },
    {
      tab: "Legacy Platform Upgrade",
      tag: "Sample engagement",
      title: "Moving an ageing .NET billing system to the cloud one module at a time",
      summary:
        "A company depends on a billing platform that few people can still change safely. A SyntaxHires team maps the system, moves one module at a time behind a stable interface and runs old and new side by side before each cut-over.",
      metrics: [
        { icon: "users", value: "4", label: "Engineers in the team" },
        { icon: "cloud", value: ".NET → Cloud", label: "Migration path" },
        { icon: "refresh", value: "Per module", label: "Rollback plan" },
      ],
      note: {
        label: "What you get",
        text: "A system map, a phased plan you can read, tested rollback at every step and documentation written as the work happens.",
      },
      link: { label: "See the modernisation approach", href: "/service/legacy-system-modernization/" },
      chip: "Legacy Modernisation",
      image: "/images/hero/hero-3.webp",
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
};

export const lead = {
  title: "Build Your [Product] Without Getting Locked In",
  text: "Project teams and dedicated developers to build, grow or modernise your product. You own the code and the IP. We take care of contracts and compliance.",
  listTitle: "What you get",
  list: [
    "A project team, or developers for your own team",
    "A written proposal or a shortlist",
    "Secure, documented delivery",
    "Clear ownership and a clean exit",
  ],
  note: ["No obligation. No pressure.", "Used by startups and enterprise teams."],
  form: {
    title: "Get a Recommendation",
    intro: "Share a few details and we will suggest a sensible next step.",
    goals: ["Build a product or app", "Build an MVP", "Hire one or more developers", "Build a dedicated team", "Modernise a legacy system", "Not sure yet"],
    // Options for the "projectType" field on project enquiry forms.
    projectTypes: [
      "Web application",
      "Mobile app",
      "MVP for a new product",
      "AI or automation",
      "UI/UX design",
      "Cloud or DevOps",
      "QA and testing",
      "Maintenance and support",
      "Not sure yet",
    ],
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
  title: "Questions Clients Ask [Before We Start]",
  button: { label: "Have More Questions?", href: "/faq/" },
  items: [
    {
      q: "Do you build complete products, or only supply developers?",
      a: "Both. We take on projects and deliver them with our own team, from design to launch. We also place engineers inside client teams, where you direct the work day to day.",
    },
    {
      q: "How do you price a software project?",
      a: "After a scoping call we send a written proposal with the scope, timeline and cost. You can choose fixed scope, time and material or a dedicated team. The engagement models page explains when each one fits.",
    },
    {
      q: "What happens if requirements change during a project?",
      a: "On a time and material engagement, changes are planned into the next sprint. On a fixed-scope engagement, we write up the effect on time and cost, and work on the change starts only after you approve it.",
    },
    {
      q: "What happens after launch?",
      a: "You can keep the same team on a monthly basis, move to a maintenance and support arrangement, or take the product in-house with a documented handover.",
    },
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
      a: "Book a fit call or send the form on this page. We reply with a recommended model, then a written proposal for a project or a shortlist timeline for a hire.",
    },
  ],
};
