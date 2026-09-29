import type { PageDef } from "@/content/types";

const page: PageDef = {
  path: "/how-we-build/",
  meta: {
    title: "How We Build Software",
    description:
      "The SyntaxHires delivery process: discovery, design, build in sprints, testing, launch and support. What happens at each stage and what you receive.",
  },
  blocks: [
    {
      type: "hero",
      tone: "dark",
      size: "md",
      align: "center",
      eyebrow: "Our Process",
      title: "How We Take A Product From [Idea To Launch]",
      text: "Six stages, each with a clear output. You see working software throughout, and nothing is a surprise at the end.",
      ctas: [
        { label: "Discuss Your Project", href: "/services/#enquiry" },
        { label: "View Services", href: "/services/", variant: "outline-light" },
      ],
    },
    {
      type: "steps",
      id: "process",
      layout: "list",
      title: "The Six [Stages]",
      align: "center",
      items: [
        { tag: "Stage 1", title: "Discovery", text: "We agree the goals, the users and the must-have features. The output is a written scope that both sides sign off, along with open questions and risks." },
        { tag: "Stage 2", title: "Design", text: "User journeys, wireframes and screen designs. You try a clickable prototype and ask for changes while changes are still cheap." },
        { tag: "Stage 3", title: "Plan", text: "The scope is broken into sprints. We agree the architecture, the environments and how work will be reviewed." },
        { tag: "Stage 4", title: "Build In Sprints", text: "Short cycles, each ending with working software you can try. Code is reviewed and kept in your repository from the first day." },
        { tag: "Stage 5", title: "Test And Launch", text: "Testing of the agreed journeys on real browsers and devices, then a planned release with a way to roll back." },
        { tag: "Stage 6", title: "Support", text: "Fixes and improvements after launch on agreed terms, or a documented handover to your own team." },
      ],
    },
    {
      type: "cards",
      tone: "muted",
      title: "What You [See And When]",
      intro: "You should never have to ask how the project is going.",
      align: "center",
      columns: 4,
      items: [
        { icon: "calendar", title: "Sprint Plan", text: "What will be built in the coming sprint, agreed with you before it starts." },
        { icon: "monitor", title: "Sprint Demo", text: "Working software shown at the end of each sprint, for you to try." },
        { icon: "message", title: "Written Updates", text: "Progress, decisions made and anything that needs your input." },
        { icon: "git", title: "Your Repository", text: "Every change visible in your own repository as it is made." },
      ],
    },
    {
      type: "split",
      title: "Who Is [Responsible] For What",
      intro: "Stated before work starts, so nothing falls between the two sides.",
      align: "center",
      panels: [
        {
          title: "You",
          mood: "neutral",
          items: ["Product goals and priorities", "Feedback on designs and demos", "Access to systems and subject experts", "Acceptance of delivered work"],
        },
        {
          title: "SyntaxHires",
          mood: "good",
          items: ["Design, development and testing", "Planning and progress reporting", "Code quality and review", "Documentation and handover"],
        },
      ],
    },
    {
      type: "cards",
      title: "How We Keep [Quality] High",
      align: "center",
      columns: 3,
      items: [
        { icon: "eye", title: "Code Review", text: "Every change is read by a second engineer before it is merged." },
        { icon: "check", title: "Automated Tests", text: "Checks run on every change, so a fix in one place does not break another." },
        { icon: "layers", title: "Staging Environment", text: "Changes are tried in a copy of production before they are released." },
        { icon: "file", title: "Documentation As We Go", text: "Setup, architecture and decisions are written down during the work, not after it." },
        { icon: "shield", title: "Security Basics", text: "Named access, secrets kept out of code and dependencies kept up to date." },
        { icon: "refresh", title: "Rollback Plan", text: "Every release has a tested way back." },
      ],
    },
    {
      type: "cards",
      tone: "muted",
      title: "What Is [Yours] At The End",
      align: "center",
      columns: 4,
      items: [
        { icon: "git", title: "Source Code", text: "In your repository, with the full history." },
        { icon: "file", title: "Documentation", text: "How it is built, how to run it and how to release a change." },
        { icon: "cloud", title: "Accounts", text: "Hosting, domains and app store listings in your own accounts." },
        { icon: "lock", title: "IP", text: "Assigned to you by contract." },
      ],
    },
    {
      type: "faq",
      title: "Process [Questions]",
      items: [
        { q: "How long is a sprint?", a: "Usually one or two weeks. We agree the length with you at the planning stage and keep it the same through the project." },
        { q: "How involved do I need to be?", a: "You review designs, attend a short demo at the end of each sprint and answer questions as they come up. We keep the time you need to give as low as the project allows." },
        { q: "What if I want to change something during the build?", a: "Changes are normal. On a time and material engagement they are planned into the next sprint. On a fixed-scope engagement we write up the effect on time and cost and you approve it first." },
        { q: "Which tools do you use to manage the work?", a: "We work in your tools if you have them. If not, we set up a board, a repository and a shared channel, and transfer them to you at the end." },
        { q: "What happens if a team member leaves?", a: "Work is documented as it is done and code is reviewed by more than one engineer, so knowledge is shared. If someone changes, the handover is written and we cover the overlap." },
      ],
    },
    {
      type: "cta",
      variant: "dark",
      title: "Ready To Start With Discovery?",
      text: "Tell us what you want to build. The first call carries no obligation and ends with clear next steps.",
      ctas: [
        { label: "Discuss Your Project", href: "/services/#enquiry" },
        { label: "Engagement Models", href: "/engagement-models/", variant: "outline-light" },
      ],
    },
  ],
};

export default page;
