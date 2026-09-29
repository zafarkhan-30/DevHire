import type { ServiceData } from "@/content/types";

const service: ServiceData = {
  slug: "maintenance-support",
  name: "Maintenance And Support",
  group: "operate",
  icon: "wrench",
  summary: "Bug fixes, updates, monitoring and small improvements for software that is already live.",
  meta: {
    title: "Software Maintenance And Support",
    description:
      "Software maintenance and support by SyntecHire: bug fixes, security updates, monitoring and small improvements, on terms agreed in writing.",
  },
  hero: {
    title: "Keep Your Software [Healthy After Launch]",
    text: "We look after live web and mobile products: fixing faults, applying updates and making the small improvements that keep a product useful.",
    bullets: ["Response terms agreed in writing", "Monthly report of work done", "Month-to-month, with no exit fee"],
  },
  intro: {
    title: "What [Maintenance And Support] Covers",
    paragraphs: [
      "Software needs care after launch. Dependencies need security updates, app stores change their rules, and users find faults that testing missed. Left alone, a working product slowly becomes a risky one.",
      "We take on products we built and products built by others. For an inherited product we start with a review, so you know its condition before we agree what support will cover.",
    ],
    aside: {
      title: "In short",
      items: ["Bug fixes and updates", "Monitoring and backups", "Small improvements", "A named point of contact"],
    },
  },
  build: {
    title: "What Is [Included]",
    items: [
      { icon: "wrench", title: "Bug Fixes", text: "Faults investigated, fixed and released, with the cause written down." },
      { icon: "shield", title: "Security Updates", text: "Frameworks and libraries kept up to date." },
      { icon: "eye", title: "Monitoring", text: "Uptime and error monitoring, with alerts to the people who can act." },
      { icon: "database", title: "Backups", text: "Backups checked by restoring them, not only by taking them." },
      { icon: "trending", title: "Small Improvements", text: "Minor features and adjustments, prioritised with you each month." },
      { icon: "smartphone", title: "App Store Updates", text: "Mobile apps kept compatible with new operating system versions." },
    ],
  },
  audience: [
    { icon: "briefcase", title: "Business Owners", text: "Your software is live and the people who built it have moved on." },
    { icon: "code", title: "Development Teams", text: "Your engineers are busy with new features and support work keeps interrupting them." },
    { icon: "building", title: "Companies With Older Systems", text: "A system still runs the business and few people are able to change it safely." },
  ],
  approach: {
    title: "How Support [Runs]",
    items: [
      { title: "Review", text: "We review the code, hosting and access, and report its condition." },
      { title: "Agree Terms", text: "What is covered, response times and how to reach us, in writing." },
      { title: "Take Over", text: "Access, monitoring and documentation put in place." },
      { title: "Support", text: "Faults handled as they arise and improvements planned monthly." },
      { title: "Report", text: "A monthly summary of work done and anything that needs a decision." },
    ],
  },
  deliverables: [
    { icon: "file", title: "Condition Report", text: "The state of the product at the start, with risks listed." },
    { icon: "message", title: "Point Of Contact", text: "A named person who knows your product." },
    { icon: "chart", title: "Monthly Report", text: "Work done, time used and recommendations." },
    { icon: "lock", title: "Ownership", text: "All changes stay in your repository and belong to you." },
  ],
  stack: [
    { label: "Legacy System Modernization", href: "/service/legacy-system-modernization/" },
    { label: "Legacy Application Modernization", href: "/service/legacy-application-modernization/" },
    { label: "Legacy Risk Assessment", href: "/resources/legacy-risk-assessment/" },
    { label: "All technologies", href: "/technologies/" },
  ],
  faqs: [
    {
      q: "Can you support software built by another company?",
      a: "Yes. We begin with a review of the code, hosting and documentation, and tell you what condition it is in before we agree the terms of support.",
    },
    {
      q: "How quickly do you respond to a fault?",
      a: "Response times are agreed in writing at the start and depend on severity. A fault that stops the business is handled ahead of a cosmetic one.",
    },
    {
      q: "Is there a minimum contract length?",
      a: "Support runs month to month, with the notice period stated in the agreement and no exit fee.",
    },
    {
      q: "What if the product needs more than maintenance?",
      a: "If the review shows the product needs larger work, such as modernising an ageing system, we explain the options and quote for that separately.",
    },
    {
      q: "Who owns the changes you make?",
      a: "You do. All work is committed to your repository and belongs to you.",
    },
  ],
};

export default service;
