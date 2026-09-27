// PLACEHOLDER: SyntaxHires must confirm the trial offer and its terms before this page goes live.
import type { PageDef } from "@/content/types";

const page: PageDef = {
  path: "/hire-2-week-free-trial/",
  meta: {
    title: "Risk-Free Developer Trial",
    description:
      "Work with a SyntaxHires developer on real tasks in your own repository before you commit. Pay only if you are satisfied. Terms are set out in the agreement.",
  },
  blocks: [
    {
      type: "hero",
      tone: "light",
      eyebrow: "Risk-Free Trial",
      title: "See How A Developer [Works] Before You Commit",
      text: "Interview the developer, give them real tasks in your own repository and judge the result. Continue only if you are satisfied.",
      ctas: [
        { label: "Start Your Trial", href: "#start" },
        { label: "How It Works", href: "#how", variant: "outline" },
      ],
    },
    {
      type: "cards",
      title: "The Real Problem With [Hiring Developers]",
      intro: "An interview shows how someone talks about work. It does not show how they do it.",
      align: "center",
      columns: 3,
      items: [
        { icon: "message", title: "Interviews Reward Talking", text: "A confident answer about architecture is not the same as a clean pull request." },
        { icon: "search", title: "Tests Are Not Your Codebase", text: "A take-home task is tidy. Your system has history, shortcuts and constraints." },
        { icon: "clock", title: "You Find Out Too Late", text: "By the time a poor fit is clear, you have spent onboarding time you cannot get back." },
      ],
    },
    {
      type: "steps",
      id: "how",
      tone: "muted",
      layout: "row",
      title: "How The Trial [Runs]",
      align: "center",
      items: [
        { title: "Tell Us The Role", text: "Share the stack, the seniority and the work you need done." },
        { title: "Interview The Developer", text: "We shortlist. You interview and choose the person." },
        { title: "Work On Real Tasks", text: "After the NDA is signed, the developer joins your repository and tools." },
        { title: "Decide", text: "At the end of the trial, continue month to month or stop." },
      ],
    },
    {
      type: "text",
      title: "Pay Only If You Are [Satisfied]",
      align: "left",
      paragraphs: [
        "The trial exists so you can judge real work before you commit to anything.",
        "If you are satisfied at the end, the engagement continues on month-to-month terms. If you are not, you stop. There is no exit fee.",
        "The exact terms, including the length of the trial and what happens at the end, are set out in the agreement you sign before the trial starts. Read it, and ask us about anything that is unclear.",
      ],
      aside: {
        title: "In short",
        items: ["You interview first", "Real tasks, your repository", "Terms in writing before you start", "No exit fee"],
      },
    },
    {
      type: "cards",
      tone: "muted",
      title: "What Is [Included]",
      align: "center",
      columns: 4,
      items: [
        { icon: "users", title: "A Developer You Chose", text: "You interview the developer before the trial begins." },
        { icon: "git", title: "Work In Your Tools", text: "The developer works in your repository, tracker and chat." },
        { icon: "lock", title: "NDA Before Code Access", text: "Confidentiality is signed before anyone sees your code." },
        { icon: "shield", title: "Code You Own", text: "All code written for you belongs to you." },
      ],
    },
    {
      type: "cta",
      variant: "strip",
      title: "Ready To See Real Work?",
      ctas: [{ label: "Start Your Trial", href: "#start" }],
    },
    {
      type: "split",
      title: "What [Success] Looks Like",
      intro: "Decide what you are looking for before the trial starts. It makes the decision at the end easier.",
      align: "center",
      panels: [
        {
          title: "Signs to continue",
          mood: "good",
          items: [
            "Questions are asked early, before work goes the wrong way",
            "Pull requests are small and easy to review",
            "Review feedback is acted on",
            "The developer follows your conventions",
            "You spend less time explaining as the trial goes on",
          ],
        },
        {
          title: "Signs to stop",
          mood: "bad",
          items: [
            "Long silences followed by large changes",
            "The same review comment has to be made twice",
            "Blockers are reported late or not at all",
            "Work passes locally and fails in your pipeline",
            "You are doing the thinking for two people",
          ],
        },
      ],
    },
    {
      type: "cards",
      tone: "muted",
      title: "Who This Is [For]",
      align: "center",
      columns: 3,
      items: [
        { icon: "alert", title: "Teams Burned Before", text: "You have hired remote developers who looked good on paper. You want proof this time." },
        { icon: "rocket", title: "Founders Hiring For The First Time", text: "You are not sure how to judge a developer. A trial lets the work speak." },
        { icon: "code", title: "Engineering Leads Under Pressure", text: "You need capacity, and you cannot afford a wrong hire in the middle of a release." },
      ],
    },
    {
      type: "form",
      id: "start",
      title: "Start Your [Trial]",
      align: "left",
      lists: [
        { title: "What we need from you", items: ["The stack and the role", "The kind of tasks you have in mind", "Who will review the work"] },
        { title: "What happens next", items: ["We reply within two working days", "You review a shortlist", "You interview, then the trial begins"] },
      ],
      form: {
        title: "Tell Us About The Role",
        intro: "A few details are enough to start.",
        submit: "Request A Trial",
        kind: "trial",
        fields: ["name", "email", "phone", "company", "teamSize", "message"],
        note: "No obligation. Trial terms are set out in the agreement.",
      },
    },
    {
      type: "cta",
      variant: "dark",
      title: "Prefer To Talk It Through First?",
      text: "Speak with our team about the role before you request a trial.",
      ctas: [{ label: "Contact Us", href: "/contact-us/" }],
    },
    { type: "insights" },
    {
      type: "faq",
      items: [
        { q: "What does the trial cost?", a: "You pay only if you are satisfied and choose to continue. The exact terms are set out in the agreement you sign before the trial starts." },
        { q: "Can I interview the developer before the trial?", a: "Yes. You interview every candidate and choose the person you want to work with." },
        { q: "Who owns the code written during the trial?", a: "You do. All code written for you belongs to you, and the work happens in your repository." },
        { q: "What happens if I decide to stop?", a: "You tell us and the engagement ends. There is no exit fee." },
        { q: "What if I like SyntaxHires but the developer is not the right fit?", a: "Tell us what is not working. We will propose a replacement for you to interview." },
      ],
    },
  ],
};

export default page;
