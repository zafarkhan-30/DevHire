import type { ComponentType } from "react";

export type Post = {
  slug: string;
  title: string;
  // Shorter title for search results and browser tabs, when title is over about 45 characters.
  seoTitle?: string;
  excerpt: string;
  category: string;
  date: string; // ISO date
  // ISO date of the last substantive edit; shown on the post and sent to search engines.
  updated?: string;
  // Byline. Defaults to the SyntecHire team when left out.
  author?: string;
  readMinutes: number;
  tone: "amber" | "violet" | "teal" | "blue";
  // Card and banner image, 1600 x 800 (2:1), in public/images/blog/. No text or logos in the image.
  image?: string;
  // Search overrides set in the CMS: meta description, noindex, canonical and a social image.
  seo?: { description?: string; noindex?: boolean; canonical?: string; ogImage?: string };
  // Must match the H2 headings in the article, in order. Drives the contents list.
  sections: string[];
  faqs: { q: string; a: string }[];
  load: () => Promise<{ default: ComponentType }>;
};

// Newest first. Add a post by adding its .mdx file and an entry here.
export const posts: Post[] = [
  {
    slug: "scope-a-software-project-so-the-estimate-holds",
    title: "How to scope a software project so the estimate holds",
    seoTitle: "How to Scope a Software Project Accurately",
    excerpt: "Start from outcomes, list the unknowns and plan a small first release.",
    category: "Project Management",
    date: "2026-10-20",
    readMinutes: 4,
    tone: "violet",
    image: "/images/blog/scope-a-software-project-so-the-estimate-holds.webp",
    sections: ["Write down the outcome, not the feature list", "Separate what must ship from what would be nice", "List the unknowns openly", "Estimate in ranges and tie them to assumptions", "Plan a small first release", "Agree how changes are handled"],
    faqs: [
      { q: "Why do software estimates go wrong?", a: "Usually because the scope was too vague to price. Unknowns and assumptions were hidden inside a single confident number." },
      { q: "Should an estimate be a single number?", a: "A range with stated assumptions is more honest and easier to manage than one figure." },
    ],
    load: () => import("./scope-a-software-project-so-the-estimate-holds.mdx"),
  },
  {
    slug: "early-warning-signs-a-software-project-is-slipping",
    title: "Early warning signs that a software project is slipping",
    seoTitle: "Warning Signs a Software Project Is Slipping",
    excerpt: "Six signals that show up weeks before a deadline moves, and what to do about them.",
    category: "Project Management",
    date: "2026-10-13",
    readMinutes: 4,
    tone: "amber",
    image: "/images/blog/early-warning-signs-a-software-project-is-slipping.webp",
    sections: ["Demos keep getting replaced by status updates", "The same work keeps reappearing", "Estimates are only ever revised upwards", "Decisions are waiting on someone", "Key knowledge sits with one person", "Quality is being traded for speed quietly", "What to do when you see two or more"],
    faqs: [
      { q: "How often should a team demo working software?", a: "Every one to two weeks is a good rhythm. Even a rough demo shows real progress." },
      { q: "Should we move the deadline or cut scope first?", a: "Cut or defer scope first where you can. Moving the date should follow a re-forecast based on finished work." },
    ],
    load: () => import("./early-warning-signs-a-software-project-is-slipping.mdx"),
  },
  {
    slug: "fixed-price-time-and-materials-or-retainer",
    title: "Fixed price, time and materials, or a retainer: choosing a contract for your software project",
    seoTitle: "Fixed Price, T&M or Retainer: Which to Choose",
    excerpt: "How each model handles change and risk, and a simple way to pick.",
    category: "Project Management",
    date: "2026-10-06",
    readMinutes: 5,
    tone: "blue",
    image: "/images/blog/fixed-price-time-and-materials-or-retainer.webp",
    sections: ["Fixed price", "Time and materials", "Monthly retainer or dedicated team", "How to choose", "A hybrid is often the best answer"],
    faqs: [
      { q: "Is fixed price always the safest option?", a: "Only when requirements are stable. When scope is still being discovered, it often leads to disputes over change requests." },
      { q: "Can we change model during a project?", a: "Yes. A common pattern is a fixed-price discovery phase followed by time and materials or a retainer." },
    ],
    load: () => import("./fixed-price-time-and-materials-or-retainer.mdx"),
  },
  {
    slug: "plan-a-software-migration-without-downtime",
    title: "How to plan a software migration without downtime",
    seoTitle: "Plan a Software Migration Without Downtime",
    excerpt: "Map dependencies, move in small pieces and keep a rehearsed rollback.",
    category: "Modernisation",
    date: "2026-09-29",
    readMinutes: 5,
    tone: "teal",
    image: "/images/blog/plan-a-software-migration-without-downtime.webp",
    sections: ["Map what depends on what", "Move in small pieces", "Run old and new side by side", "Keep the data in step", "Switch traffic gradually", "Write the rollback plan first", "Keep the old system until you are sure"],
    faqs: [
      { q: "Is zero downtime always possible?", a: "Not always, but for most web systems it is realistic with side-by-side running, data replication and gradual traffic switching." },
      { q: "When can the old system be switched off?", a: "After a defined period of confirmed correct behaviour, including month-end and other infrequent jobs." },
    ],
    load: () => import("./plan-a-software-migration-without-downtime.mdx"),
  },
  {
    slug: "how-to-decide-which-technical-debt-to-fix",
    title: "How to decide which technical debt to fix first",
    seoTitle: "Which Technical Debt to Fix First",
    excerpt: "Rank debt by how often the code changes and what leaving it costs.",
    category: "Engineering",
    date: "2026-09-22",
    readMinutes: 4,
    tone: "violet",
    image: "/images/blog/how-to-decide-which-technical-debt-to-fix.webp",
    sections: ["What counts as debt", "Look at how often the code changes", "Weigh the cost of leaving it", "Estimate the cost of fixing it", "Rank and agree a budget", "Fix it while you are there", "Record the decisions"],
    faqs: [
      { q: "How much time should go to technical debt?", a: "Many teams set aside ten to twenty per cent of each sprint so the work is routine." },
      { q: "Should we rewrite instead?", a: "Only when a rewrite is cheaper than repeated fixes. Small, sliced improvements are usually safer." },
    ],
    load: () => import("./how-to-decide-which-technical-debt-to-fix.mdx"),
  },
  {
    slug: "brief-a-remote-developer-for-week-one",
    title: "How to brief a remote developer so week one is productive",
    seoTitle: "How to Brief a Remote Developer for Week One",
    excerpt: "A short checklist covering access, context and a first task that is small enough to finish.",
    category: "Hiring",
    date: "2026-09-22",
    readMinutes: 4,
    tone: "amber",
    image: "/images/blog/brief-a-remote-developer-for-week-one.webp",
    sections: ["Sort out access before day one", "Give context, not a tour", "Pick a first task that can ship", "Agree how you will talk", "Review the week together"],
    faqs: [
      { q: "How long should onboarding take?", a: "It depends on the size of the system. A useful goal is one small change merged in the first week, with deeper context built over the following weeks." },
      { q: "Should a new developer start with bugs or features?", a: "A small bug or a minor improvement is usually better. It touches real code, has a clear finish and teaches the release process." },
    ],
    load: () => import("./brief-a-remote-developer-for-week-one.mdx"),
  },
  {
    slug: "staff-augmentation-or-dedicated-team",
    title: "Staff augmentation or a dedicated team: a decision you can make in ten minutes",
    seoTitle: "Staff Augmentation or a Dedicated Team?",
    excerpt: "Four questions about ownership, runway and management time that settle the choice.",
    category: "Project Management",
    date: "2026-09-15",
    readMinutes: 5,
    tone: "blue",
    image: "/images/blog/staff-augmentation-or-dedicated-team.webp",
    sections: ["The two models in one paragraph each", "Question one: who decides what gets built today", "Question two: how much management time do you have", "Question three: how long will the work run", "Question four: what happens when it ends", "Reading your answers"],
    faqs: [
      { q: "Can we switch models later?", a: "Yes. Teams often start with one or two augmented engineers and move to a dedicated team as the scope grows." },
      { q: "Is one model cheaper?", a: "Per engineer the cost is similar. The difference is in how much of your own management time each model uses." },
    ],
    load: () => import("./staff-augmentation-or-dedicated-team.mdx"),
  },
  {
    slug: "signs-your-legacy-platform-is-a-business-risk",
    title: "Signs your legacy platform has become a business risk",
    seoTitle: "Signs Your Legacy Platform Is a Business Risk",
    excerpt: "What to look for in release frequency, incident history and hiring difficulty.",
    category: "Modernisation",
    date: "2026-09-08",
    readMinutes: 5,
    tone: "teal",
    image: "/images/blog/signs-your-legacy-platform-is-a-business-risk.webp",
    sections: ["Releases are getting rarer", "The same incidents keep coming back", "Only a few people can change it", "Vendors have stopped supporting parts of it", "What to do with what you find"],
    faqs: [
      { q: "Does an old system always need replacing?", a: "No. Age alone is not the problem. A stable system that is understood, supported and rarely changed can be left alone." },
      { q: "Where should modernisation start?", a: "Start with measurement: how often you release, what breaks and who can fix it. That shows which part of the system carries the most risk." },
    ],
    load: () => import("./signs-your-legacy-platform-is-a-business-risk.mdx"),
  },
];
