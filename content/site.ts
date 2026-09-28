// Single source of truth for brand, navigation, footer and global proof numbers.
// Values marked PLACEHOLDER must be replaced with verified SyntaxHires data before launch.

export type NavLink = { label: string; href: string };

// `icon` is a key from NAV_ICONS in components/layout/Header.tsx.
export type MenuLink = NavLink & { icon?: string };

export type MegaMenu = {
  id: string;
  label: string;
  // Grey left panel
  title: string;
  intro: string;
  quickLinks?: NavLink[];
  featured?: { title: string; text: string; linkLabel: string; href: string };
  // Right side
  columns: { heading: string; links: MenuLink[]; button?: NavLink }[];
  button?: NavLink;
  topPicks?: { tag: string; tone: "navy" | "violet" | "green"; title: string; href: string }[];
};

export const site = {
  name: "SyntaxHires",
  tagline: "Engineering teams, on demand.",
  url: "https://syntaxhires.example", // PLACEHOLDER
  description:
    "SyntaxHires places vetted remote engineers and dedicated teams inside your sprint. Shortlist in days, no long contracts, no idle-hour billing.",
  primaryCta: { label: "Talk To An Engineer", href: "/contact-us/" },
  // WhatsApp chat button (bottom-right on every page). Number in international format, digits only,
  // e.g. "919876543210" for +91 98765 43210. Left empty, the button is hidden.
  whatsapp: "918433833146",
  whatsappMessage: "Hi SyntaxHires, I would like to talk about hiring developers.",
  // PLACEHOLDER: real profile URLs. Links left as "#" are hidden, and the "Follow Us" column with them.
  social: [
    { label: "LinkedIn", href: "#", icon: "linkedin" },
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "YouTube", href: "#", icon: "youtube" },
  ],
  // Contract terms shown in the top bar. Add certifications here only once SyntaxHires holds them.
  trustBadges: [
    // icon: key from TRUST_ICONS in components/layout/Header.tsx
    { label: "NDA", sub: "Before code access", icon: "nda" },
    { label: "IP", sub: "Assigned to you", icon: "ip" },
    { label: "Terms", sub: "Month to month", icon: "terms" },
    { label: "Exit", sub: "No penalty", icon: "exit" },
  ] as { label: string; sub?: string; icon?: string }[],
  // SyntaxHires proof numbers, shown in the stats row on the home page.
  // Use only figures you can back up. A value left as "—" is hidden; the row appears once any value is filled in.
  // `stars` draws five stars above the value (use it for the rating).
  stats: [
    { value: "—", label: "Average Rating", stars: true },
    { value: "—", label: "Clients" },
    { value: "—", label: "Countries Served" },
    { value: "—", label: "Client Retention" },
  ] as { value: string; label: string; stars?: boolean }[],
  // Shown in the footer and on the contact page in place of office addresses.
  workModel: {
    title: "Remote And Global",
    text: "We work remotely with clients around the world, across time zones.",
  },
};

// Plain links in the main menu, placed right after the mega menu named in `after`.
export const navLinks: (NavLink & { after: string })[] = [];

export const megaMenus: MegaMenu[] = [
  {
    id: "services",
    label: "Services",
    title: "Services",
    intro: "Engineering capacity, delivered the way your team already works.",
    quickLinks: [{ label: "Dedicated Developers", href: "/service/dedicated-developers/" }],
    featured: {
      title: "Legacy Risk Assessment",
      text: "Score a legacy platform on security, operations, delivery and compliance before you plan a migration.",
      linkLabel: "See the framework.",
      href: "/resources/legacy-risk-assessment/",
    },
    columns: [
      {
        heading: "Delivery Models",
        links: [
          { label: "Dedicated Developers", href: "/service/dedicated-developers/" },
          { label: "IT Staff Augmentation", href: "/service/it-staff-augmentation-services/" },
          { label: "Offshore Development Center", href: "/hire/dedicated-developers/" },
        ],
      },
      {
        heading: "Engineering Services",
        links: [
          { label: "Legacy Application Modernization", href: "/service/legacy-application-modernization/" },
          { label: "Legacy System Modernization", href: "/service/legacy-system-modernization/" },
          { label: "Zero-Downtime Modernization", href: "/service/legacy-modernization-zero-downtime/" },
          { label: "Custom AI Assistant", href: "/solutions/custom-ai-assistant-development/" },
        ],
      },
    ],
  },
  {
    id: "pricing",
    label: "Pricing",
    title: "Pricing",
    intro: "Clear prices in rupees. Pay per hire, for a bundle of hires or by the month.",
    quickLinks: [{ label: "Pricing Overview", href: "/pricing/" }],
    featured: {
      title: "Calculate Your Costs",
      text: "Compare in-house, freelance and dedicated costs using your own numbers. No email needed.",
      linkLabel: "Open the calculator.",
      href: "/resources/developer-cost-estimate/",
    },
    columns: [
      {
        heading: "Pricing Models",
        links: [
          { label: "Standard Contingency", href: "/pricing/#models" },
          { label: "Flat Fee Per Hire", href: "/pricing/#models" },
          { label: "Bulk Bucket Package", href: "/pricing/#models" },
          { label: "Recruitment As A Service", href: "/pricing/#models" },
        ],
      },
      {
        heading: "Calculators",
        links: [
          { label: "Calculate Your Costs", href: "/resources/developer-cost-estimate/" },
          { label: "See How Much You Save", href: "/pricing/#savings" },
          { label: "Compare The Models", href: "/pricing/#compare" },
          { label: "Which Model Fits You", href: "/pricing/#which-model" },
        ],
      },
      {
        heading: "Cost Guides",
        links: [
          { label: "Offshore Developer Cost Guide", href: "/hire/dedicated-developers/offshore-developers-cost/" },
          { label: "Dedicated vs Freelancers", href: "/hire/dedicated-developers/dedicated-developers-vs-freelancers/" },
          { label: "Dedicated vs Staff Augmentation", href: "/hire/dedicated-developers/dedicated-team-vs-staff-augmentation/" },
          { label: "Pricing FAQs", href: "/pricing/#pricing-faq" },
        ],
      },
    ],
    button: { label: "View Pricing", href: "/pricing/" },
  },
  {
    id: "hire",
    label: "Hire Developers",
    title: "Hire Developers",
    intro: "Engineers across frontend, backend, mobile, cloud and data. Meet them before you commit.",
    featured: {
      title: "Developer Cost Estimate",
      text: "Compare in-house, freelance and dedicated costs using your own numbers. No email needed.",
      linkLabel: "Open the calculator.",
      href: "/resources/developer-cost-estimate/",
    },
    columns: [
      {
        heading: "Hire by Role",
        links: [
          { label: "Hire Dedicated Developers", href: "/hire/dedicated-developers/", icon: "users" },
          { label: "Hire Fullstack Designers", href: "/hire/fullstack-designers/", icon: "layout" },
          { label: "Hire Backend Developers", href: "/hire/backend-developers/", icon: "server" },
          { label: "Hire Data Engineers", href: "/hire/data-engineer/", icon: "database" },
        ],
      },
      {
        heading: "Hire by Technology",
        links: [
          { label: "React", href: "/hire/react-js-developers/", icon: "atom" },
          { label: "Node.js", href: "/hire/nodejs-developers/", icon: "hexagon" },
          { label: ".NET", href: "/hire/net-developers/", icon: "code" },
          { label: "Java", href: "/hire/java-developers/", icon: "coffee" },
          { label: "Salesforce", href: "/hire/salesforce-developers/", icon: "cloud" },
          { label: "Android", href: "/hire/android-developers/", icon: "smartphone" },
          { label: "iOS", href: "/hire/ios-developers/", icon: "apple" },
        ],
      },
      {
        heading: "Decision Support",
        links: [
          { label: "Industries", href: "/industries/" },
          { label: "Dedicated vs Staff Augmentation", href: "/hire/dedicated-developers/dedicated-team-vs-staff-augmentation/" },
          { label: "Dedicated vs Freelancers", href: "/hire/dedicated-developers/dedicated-developers-vs-freelancers/" },
          { label: "Legacy Risk Assessment", href: "/resources/legacy-risk-assessment/" },
        ],
      },
    ],
    button: { label: "All Technologies", href: "/technologies/" },
  },
  {
    id: "resources",
    label: "Resources",
    title: "Resources",
    intro: "Guides, tools and articles to help you decide with confidence.",
    columns: [
      {
        heading: "Learning",
        links: [
          { label: "Insights", href: "/insights/" },
          { label: "FAQs", href: "/faq/" },
        ],
      },
      {
        heading: "Proof & Comparison",
        links: [
          { label: "Our Work", href: "/case-study/our-work/" },
          { label: "Comparison Guides", href: "/comparison-guides/" },
        ],
      },
      {
        heading: "Support",
        links: [
          { label: "Careers", href: "/career/" },
          { label: "Contact Us", href: "/contact-us/" },
        ],
      },
    ],
    topPicks: [
      { tag: "Guide", tone: "navy", title: "Offshore Developer Cost Guide", href: "/hire/dedicated-developers/offshore-developers-cost/" },
      { tag: "Tool", tone: "violet", title: "Developer Cost Estimate", href: "/resources/developer-cost-estimate/" },
      { tag: "Guide", tone: "green", title: "Dedicated Developers vs Freelancers", href: "/hire/dedicated-developers/dedicated-developers-vs-freelancers/" },
    ],
  },
  {
    id: "company",
    label: "Company",
    title: "Company",
    intro: "Built for founders and CTOs who need engineering they can rely on.",
    quickLinks: [
      { label: "About Us", href: "/about/" },
      { label: "How We Vet", href: "/how-we-vet/" },
      { label: "Developer Retention", href: "/developer-retention/" },
    ],
    columns: [
      {
        heading: "About Us",
        links: [
          { label: "About SyntaxHires", href: "/about/" },
          { label: "Company Insights", href: "/insights/" },
        ],
      },
      {
        heading: "Trust & Process",
        links: [
          { label: "How We Vet Developers", href: "/how-we-vet/" },
          { label: "Developer Cost Estimate", href: "/resources/developer-cost-estimate/" },
        ],
      },
      {
        heading: "Get Help",
        links: [],
        button: { label: "Contact Us", href: "/contact-us/" },
      },
    ],
  },
];

export const footer = {
  toolCards: [
    {
      icon: "monitor",
      title: "Estimate Your Team Cost",
      text: "Work out the full monthly cost of a remote team",
      href: "/resources/developer-cost-estimate/",
    },
    {
      icon: "mail",
      title: "Engineering Leadership Notes",
      text: "A monthly email for CTOs and founders",
      href: "#newsletter",
    },
  ],
  // PLACEHOLDER: replace with verified proof points.
  proofPoints: [
    "Engineers matched to your stack, not a generic bench",
    "Meet the developer before any contract",
    "Month-to-month engagement",
    "You own all code and IP",
  ],
  columns: [
    {
      heading: "Company",
      links: [
        { label: "About Us", href: "/about/" },
        { label: "Contact Sales", href: "/contact-us/" },
        { label: "How We Vet", href: "/how-we-vet/" },
      ],
    },
    {
      heading: "For Buyers",
      links: [
        { label: "How We Work", href: "/how-we-vet/" },
        { label: "Pricing", href: "/pricing/" },
        { label: "Quality & Vetting", href: "/how-we-vet/" },
        { label: "Developer Retention", href: "/developer-retention/" },
      ],
    },
    {
      heading: "Services & Solutions",
      links: [
        { label: "Dedicated Developers", href: "/service/dedicated-developers/" },
        { label: "IT Staff Augmentation", href: "/service/it-staff-augmentation-services/" },
        { label: "Legacy Modernization", href: "/service/legacy-system-modernization/" },
        { label: "Offshore Development Cost", href: "/hire/dedicated-developers/offshore-developers-cost/" },
      ],
    },
    {
      heading: "Hire Developers",
      links: [
        { label: "Hire React Developers", href: "/hire/react-js-developers/" },
        { label: "Hire Node.js Developers", href: "/hire/nodejs-developers/" },
        { label: "Hire Python Developers", href: "/hire/python-developers/" },
        { label: "Hire .NET Developers", href: "/hire/net-developers/" },
        { label: "Hire Java Developers", href: "/hire/java-developers/" },
      ],
      footerLink: { label: "View All Technologies", href: "/technologies/" },
    },
    {
      heading: "Resources",
      links: [
        { label: "Our Work", href: "/case-study/our-work/" },
        { label: "FAQs", href: "/faq/" },
      ],
    },
  ],
  newsletter: {
    title: "Subscribe to Our Newsletter",
    text: "Engineering leadership notes, once a month.",
    placeholder: "Enter your email",
    button: "Subscribe",
  },
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Terms of Service", href: "/terms-and-conditions/" },
    { label: "Cookie Policy", href: "/cookies-policy/" },
    { label: "GDPR", href: "/gdpr/" },
  ],
  strapline: "Remote teams. Direct accountability.",
};
