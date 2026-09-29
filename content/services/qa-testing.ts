import type { ServiceData } from "@/content/types";

const service: ServiceData = {
  slug: "qa-testing",
  name: "QA And Testing",
  group: "operate",
  icon: "check",
  summary: "Manual and automated testing for web and mobile products, with clear reports on what was found.",
  meta: {
    title: "QA And Software Testing Services",
    description:
      "QA and software testing by SyntecHire: manual testing, automated regression tests, API, performance and device testing, with clear written reports.",
  },
  hero: {
    title: "Testing That Finds Problems [Before Your Users Do]",
    text: "We test web and mobile products by hand and with automated tests, and report what we find in a form your developers can act on.",
    bullets: ["Test plan agreed before testing starts", "Defects reported with steps to reproduce", "Automated tests are yours to keep"],
  },
  intro: {
    title: "What [QA And Testing] Covers",
    paragraphs: [
      "Manual testing is a person using the product the way a customer would, including the ways a customer should not. Automated testing is code that repeats checks on every change, so a fix in one place does not break another.",
      "Most products need both. We agree with you which journeys matter most, test those first and automate the checks that are repeated on every release.",
    ],
    aside: {
      title: "In short",
      items: ["Manual and exploratory testing", "Automated regression tests", "API and performance testing", "Device and browser coverage"],
    },
  },
  build: {
    title: "What We [Test]",
    items: [
      { icon: "search", title: "Manual Testing", text: "Structured and exploratory testing of the journeys that matter most." },
      { icon: "refresh", title: "Regression Automation", text: "Automated checks that run on every change and catch what has broken." },
      { icon: "network", title: "API Testing", text: "Checks on the services behind the screens, including error handling." },
      { icon: "zap", title: "Performance Testing", text: "How the product behaves under load, measured before launch." },
      { icon: "smartphone", title: "Device And Browser Testing", text: "Testing across screen sizes, browsers and operating system versions." },
      { icon: "eye", title: "Accessibility Checks", text: "Keyboard use, contrast and screen reader behaviour on key screens." },
    ],
  },
  audience: [
    { icon: "rocket", title: "Teams Close To Launch", text: "You need an independent check before the product reaches customers." },
    { icon: "code", title: "Development Teams", text: "Your developers test their own work and defects still reach production." },
    { icon: "briefcase", title: "Product Owners", text: "Each release breaks something that used to work, and you want that to stop." },
  ],
  approach: {
    title: "How Testing [Runs]",
    items: [
      { title: "Plan", text: "We agree what is in scope and which journeys matter most." },
      { title: "Write Test Cases", text: "Test cases written so anyone can repeat them." },
      { title: "Test", text: "Testing carried out and defects reported as they are found." },
      { title: "Automate", text: "Repeated checks turned into automated tests." },
      { title: "Report", text: "A written summary of what was tested, what failed and what remains." },
    ],
  },
  deliverables: [
    { icon: "file", title: "Test Plan", text: "Scope, approach and the test cases used." },
    { icon: "alert", title: "Defect Reports", text: "Each with steps to reproduce, expected and actual result." },
    { icon: "git", title: "Automated Tests", text: "In your repository, ready to run on every change." },
    { icon: "chart", title: "Summary Report", text: "What was covered and what we recommend before release." },
  ],
  faqs: [
    {
      q: "Can you test a product you did not build?",
      a: "Yes. Independent testing is often more useful, because we come to the product without assumptions about how it should be used.",
    },
    {
      q: "Do we need automated tests, or is manual testing enough?",
      a: "Manual testing is enough for a one-off check before launch. If you release regularly, automating the repeated checks saves time on every release and catches regressions early.",
    },
    {
      q: "How do you report defects?",
      a: "In your own tracking tool, or in a shared report if you do not have one. Each defect has steps to reproduce, the expected result, the actual result and a severity.",
    },
    {
      q: "Can testers join our existing sprints?",
      a: "Yes. Testers can work alongside your developers sprint by sprint, or test a release as a separate engagement.",
    },
  ],
};

export default service;
