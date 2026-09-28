import type { ComponentType } from "react";

export type Post = {
  slug: string;
  title: string;
  // Shorter title for search results and browser tabs, when title is over about 45 characters.
  seoTitle?: string;
  excerpt: string;
  category: string;
  date: string; // ISO date
  readMinutes: number;
  tone: "amber" | "violet" | "teal" | "blue";
  image?: string;
  // Must match the H2 headings in the article, in order. Drives the contents list.
  sections: string[];
  faqs: { q: string; a: string }[];
  load: () => Promise<{ default: ComponentType }>;
};

// Newest first. Add a post by adding its .mdx file and an entry here.
export const posts: Post[] = [
  {
    slug: "brief-a-remote-developer-for-week-one",
    title: "How to brief a remote developer so week one is productive",
    seoTitle: "How to Brief a Remote Developer for Week One",
    excerpt: "A short checklist covering access, context and a first task that is small enough to finish.",
    category: "Hiring",
    date: "2026-09-22",
    readMinutes: 4,
    tone: "amber",
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
    sections: ["Releases are getting rarer", "The same incidents keep coming back", "Only a few people can change it", "Vendors have stopped supporting parts of it", "What to do with what you find"],
    faqs: [
      { q: "Does an old system always need replacing?", a: "No. Age alone is not the problem. A stable system that is understood, supported and rarely changed can be left alone." },
      { q: "Where should modernisation start?", a: "Start with measurement: how often you release, what breaks and who can fix it. That shows which part of the system carries the most risk." },
    ],
    load: () => import("./signs-your-legacy-platform-is-a-business-risk.mdx"),
  },
];
