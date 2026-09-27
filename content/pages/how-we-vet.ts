import type { PageDef } from "@/content/types";

// PLACEHOLDER markers flag values SyntaxHires must confirm before launch.
const page: PageDef = {
  path: "/how-we-vet/",
  meta: {
    title: "How We Vet Developers",
    description:
      "How SyntaxHires screens developers for real production work: code review, system thinking, communication and a practical task, before you interview anyone.",
  },
  blocks: [
    {
      type: "hero",
      tone: "light",
      size: "lg",
      align: "center",
      eyebrow: "How We Vet",
      title: "We Screen For How Developers [Work], Not Only What They Know",
      text: "A strong interview does not always mean strong delivery. Our screening looks at the habits that decide whether code reaches production.",
      ctas: [
        { label: "See Our Process", href: "#process" },
        { label: "Talk To Our Team", href: "/contact-us/", variant: "outline" },
      ],
    },
    {
      type: "split",
      tone: "muted",
      title: "What Gets Tested vs What [Goes Wrong]",
      intro: "Production work rarely fails for the reasons interviews test.",
      align: "center",
      panels: [
        {
          title: "What most vendors evaluate",
          mood: "bad",
          items: [
            "Years of experience listed on a CV",
            "Algorithm puzzles under time pressure",
            "Framework trivia",
            "A short call to check spoken English",
            "Availability to start",
          ],
        },
        {
          title: "What production work fails on",
          mood: "neutral",
          items: [
            "Unclear requirements that nobody questioned",
            "Changes made without reading the existing code",
            "Problems hidden until the deadline",
            "Review feedback taken personally or ignored",
            "Work that passes locally and breaks on release",
          ],
        },
      ],
    },
    {
      type: "text",
      title: "Why [Engagement Length] Matters",
      align: "left",
      paragraphs: [
        "Screening is a prediction. The real test is whether the client keeps the developer.",
        "A client on month-to-month terms with no exit fee can leave at any point. When they stay, it is because the developer is doing useful work. That makes engagement length an honest measure of fit.",
        "We track it for that reason, and we use what we learn to adjust how we screen.",
      ],
      // PLACEHOLDER: SyntaxHires' measured average engagement length.
      aside: { title: "Average engagement length", items: ["—"] },
    },
    {
      type: "cards",
      title: "Five Criteria For [Real-World Execution]",
      intro: "Every developer is assessed against the same five points.",
      align: "center",
      columns: 3,
      numbered: true,
      items: [
        { icon: "code", title: "Code You Can Maintain", text: "Readable, tested and structured so the next person can change it safely." },
        { icon: "layers", title: "System Thinking", text: "Understands how a change affects data, performance and the services around it." },
        { icon: "message", title: "Clear Communication", text: "Writes and speaks clearly. Asks questions early. Says when something is blocked." },
        { icon: "search", title: "Working In Existing Code", text: "Can read an unfamiliar codebase and follow its conventions before changing them." },
        { icon: "refresh", title: "Response To Review", text: "Takes feedback, explains choices and improves the work without friction." },
      ],
    },
    {
      type: "steps",
      id: "process",
      tone: "muted",
      layout: "funnel",
      title: "Our Screening [Process]",
      intro: "Each stage removes candidates. Only those who pass every stage reach your shortlist.",
      align: "center",
      items: [
        // PLACEHOLDER: share or number of applicants remaining after this stage.
        { tag: "—", title: "Application And Profile Review", text: "We check experience against real projects, not job titles." },
        // PLACEHOLDER: share or number of applicants remaining after this stage.
        { tag: "—", title: "Communication Check", text: "A conversation and a written exercise in English." },
        // PLACEHOLDER: share or number of applicants remaining after this stage.
        { tag: "—", title: "Code Review On Real Work", text: "We read code the developer has written and ask why it was built that way." },
        // PLACEHOLDER: share or number of applicants remaining after this stage.
        { tag: "—", title: "Live Technical Interview", text: "A senior engineer works through a design problem with the candidate." },
        // PLACEHOLDER: share or number of applicants remaining after this stage.
        { tag: "—", title: "Practical Task", text: "A task based on the kind of system the developer would work on." },
      ],
      footnote: "After screening, you interview the developer yourself before any contract.",
    },
    {
      type: "cards",
      title: "Why Projects [Succeed]",
      intro: "Good screening is one part. These habits do the rest.",
      align: "center",
      columns: 4,
      items: [
        { icon: "target", title: "Small, Clear Tasks", text: "Work is broken down so progress shows early." },
        { icon: "eye", title: "Daily Visibility", text: "Commits and tickets live in your tools, where you can see them." },
        { icon: "users", title: "One Developer, One Client", text: "Full attention on your product builds real context." },
        { icon: "alert", title: "Problems Raised Early", text: "A blocker reported today is cheaper than one found at release." },
      ],
    },
    {
      // PLACEHOLDER: replace with real client results, approved by each client in writing.
      type: "cards",
      tone: "muted",
      title: "Client [Results]",
      align: "center",
      columns: 2,
      items: [
        {
          tag: "Project Type",
          title: "Client result headline goes here",
          text: "Two or three sentences on where the client started, what was getting in the way and what changed after the developer joined. Keep it specific and keep it true.",
          href: "/case-study/our-work/",
          linkLabel: "View Case Studies",
        },
        {
          tag: "Project Type",
          title: "Second client result headline goes here",
          text: "Two or three sentences on where the client started, what was getting in the way and what changed after the developer joined. Keep it specific and keep it true.",
          href: "/case-study/our-work/",
          linkLabel: "View Case Studies",
        },
      ],
    },
    {
      type: "text",
      title: "Already Have [Offshore Developers]?",
      align: "left",
      paragraphs: [
        "You do not need to replace a team to work with us.",
        "If you already have offshore developers, we can assess the team against the same five criteria and tell you where the gaps are. The findings are yours to act on, with or without us.",
        "We can also add developers alongside your current team. They join your repository, your tools and your rituals.",
      ],
      list: [
        "An assessment of the current team against our criteria",
        "A plain summary of strengths and gaps",
        "Developers added to supplement specific skills",
      ],
      ctas: [{ label: "Ask For A Team Assessment", href: "/contact-us/" }],
    },
    {
      type: "split",
      tone: "muted",
      title: "What We [Optimise For]",
      align: "center",
      panels: [
        {
          title: "Don't",
          mood: "bad",
          items: [
            "Fill a seat with whoever is free",
            "Send a stack of CVs and let you sort them",
            "Judge a developer on puzzles alone",
            "Count the placement as the result",
          ],
        },
        {
          title: "Do",
          mood: "good",
          items: [
            "Match the developer to your stack and system",
            "Shortlist a few people worth your time",
            "Judge on real code and real communication",
            "Count working software as the result",
          ],
        },
      ],
    },
    {
      type: "text",
      title: "A Closing [Thought]",
      align: "center",
      paragraphs: [
        "No screening process is perfect. People are harder to predict than code.",
        "That is why you interview every developer before any contract, and why we replace the developer if the fit is wrong. Screening lowers the risk. These terms cover what is left.",
      ],
    },
    {
      type: "cta",
      variant: "navy",
      title: "Meet Developers Who Have Passed Every Stage",
      text: "Tell us the stack and the role. We will share a shortlist you can interview.",
      ctas: [
        { label: "Talk To Our Team", href: "/contact-us/" },
        { label: "Browse Technologies", href: "/technologies/", variant: "outline-light" },
      ],
    },
    { type: "insights" },
  ],
};

export default page;
