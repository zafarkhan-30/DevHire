import type { PageDef } from "@/content/types";

// PLACEHOLDER markers flag values SyntaxHires must confirm before launch.
const page: PageDef = {
  path: "/hire/dedicated-developers/",
  meta: {
    title: "Hire Dedicated Developers",
    description:
      "Hire dedicated developers by technology. Browse every stack we staff, see how the first week runs and who is responsible for what. Month-to-month terms.",
  },
  blocks: [
    {
      type: "hero",
      tone: "light",
      size: "lg",
      eyebrow: "Hire Dedicated Developers",
      title: "Hire Dedicated Developers By [Technology]",
      text: "Pick the stack. Meet the developer. Decide after the interview. Each developer works on your product only, in your repository and your tools.",
      bullets: [
        "You interview before any contract",
        "Month-to-month terms, no exit fee",
        "You own all code and IP",
        "Replacement if the fit is wrong",
      ],
      ctas: [
        { label: "Browse Technologies", href: "#technologies" },
        { label: "Talk To An Engineer", href: "/contact-us/", variant: "outline" },
      ],
    },
    {
      type: "linkGrid",
      id: "technologies",
      tone: "muted",
      title: "Choose Your [Stack]",
      align: "center",
      intro: "Each page covers what the role does, when to choose the technology and when not to.",
      groups: [
        {
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
          label: "Backend",
          items: [
            { label: "Backend Developers", href: "/hire/backend-developers/" },
            { label: "Node.js Developers", href: "/hire/nodejs-developers/" },
            { label: "Python Developers", href: "/hire/python-developers/" },
            { label: "Java Developers", href: "/hire/java-developers/" },
            { label: ".NET Developers", href: "/hire/net-developers/" },
            { label: "Golang Developers", href: "/hire/golang-developers/" },
            { label: "Rust Developers", href: "/hire/rust-developers/" },
            { label: "PHP Developers", href: "/hire/php-developers/" },
            { label: "Laravel Developers", href: "/hire/laravel-developers/" },
            { label: "Yii Developers", href: "/hire/yii-developers/" },
          ],
        },
        {
          label: "Mobile",
          items: [
            { label: "Mobile Developers", href: "/hire/mobile-developers/" },
            { label: "Android Developers", href: "/hire/android-developers/" },
            { label: "iOS Developers", href: "/hire/ios-developers/" },
            { label: "Flutter Developers", href: "/hire/flutter-developers/" },
            { label: "React Native Developers", href: "/hire/react-native-developers/" },
          ],
        },
        {
          label: "Cloud",
          items: [
            { label: "AWS Experts", href: "/hire/aws-experts/" },
            { label: "Platform Engineers", href: "/hire/platform-engineers/" },
            { label: "Data Engineers", href: "/hire/data-engineer/" },
          ],
        },
        {
          label: "CRM & Commerce",
          items: [
            { label: "Salesforce Developers", href: "/hire/salesforce-developers/" },
            { label: "Shopify Developers", href: "/hire/shopify-developers/" },
            { label: "WordPress Developers", href: "/hire/wordpress-developers/" },
          ],
        },
        {
          label: "Specialised",
          items: [
            { label: "AI Developers", href: "/hire/ai-developers/" },
            { label: "Agentic AI Developers", href: "/hire/agentic-ai-developers/" },
            { label: "ChatGPT Integration Developers", href: "/hire/chatgpt-integration-developers/" },
            { label: "Microsoft Developers", href: "/hire/microsoft-developers/" },
            { label: "Full-Stack Designers", href: "/hire/fullstack-designers/" },
            { label: "UI/UX Designers", href: "/hire/ui-ux-designers/" },
            { label: "SEO Experts", href: "/hire/seo-experts/" },
            { label: "PPC Experts", href: "/hire/ppc-experts/" },
            { label: "US Ready Remote Engineering", href: "/hire/us-ready-remote-engineering/", note: "For legal and procurement teams" },
          ],
        },
      ],
    },
    {
      type: "cards",
      title: "How Teams [Usually Start]",
      align: "center",
      intro: "Three common starting points. None of them needs a long commitment.",
      columns: 3,
      items: [
        {
          icon: "code",
          tag: "One developer",
          title: "Fill One Gap",
          text: "A single engineer with a skill your team lacks. They join your standup and take tickets from your board.",
        },
        {
          icon: "users",
          tag: "Small team",
          title: "Add A Pair Or A Pod",
          text: "Two or three developers who take on one product area together, so knowledge is shared from the start.",
        },
        {
          icon: "layers",
          tag: "Full team",
          title: "Build A Dedicated Team",
          text: "A complete team with a lead, working to goals you set. Suits a new product line or a long programme of work.",
        },
      ],
      footnote: "Not sure which fits? Tell us the work and we will suggest a starting point.",
    },
    {
      type: "steps",
      tone: "dark",
      layout: "row",
      title: "Week One [Protocol]",
      align: "center",
      intro: "What we aim to cover in the first week. The pace depends on how quickly access and context are available.",
      items: [
        { tag: "Access", title: "Accounts and environment", text: "NDA signed. Repository, tracker and chat access granted. The developer sets up a working local environment and notes any gaps in the setup guide." },
        { tag: "Context", title: "Walkthrough with your team", text: "Your lead explains the architecture, the release process and the current priorities. The developer asks questions and writes down what they learn." },
        { tag: "First task", title: "A small, real change", text: "The developer picks up a ticket small enough to finish, opens a pull request and goes through your normal review." },
        { tag: "Review", title: "First-week check-in", text: "You, the developer and SyntaxHires discuss what went well and what needs to change. You decide whether to continue." },
      ],
      footnote: "This describes activities, not a guaranteed result.",
    },
    {
      type: "table",
      title: "Roles And [Responsibilities]",
      align: "center",
      intro: "Who does what, stated before work starts.",
      columns: ["Area", "You", "SyntaxHires"],
      highlight: 2,
      rows: [
        ["Hiring decision", "Interview and choose the developer", "Source, screen and present candidates"],
        ["Priorities and backlog", "Set priorities and define the work", "Raise risks and questions early"],
        ["Daily direction", "Direct the work through your own process", "Make sure the developer is available and supported"],
        ["Code review and acceptance", "Review and accept delivered work", "Hold the developer to your standards"],
        ["Tools and access", "Grant access to repository and systems", "Provide equipment and follow your security policies"],
        ["Payroll and leave", "No involvement", "Handle pay, leave and cover"],
        ["Performance and fit", "Tell us when something is not working", "Address the problem, and replace the developer if needed"],
        ["Code and IP", "Own all code and IP", "Assign all work to you in the contract"],
      ],
    },
    {
      type: "text",
      tone: "muted",
      title: "Investment [Ranges]",
      align: "left",
      paragraphs: [
        "You pay a monthly figure per developer. That figure depends on four things: seniority, how scarce the skill is, how many developers you need and how much overlap you want with your working hours.",
        "Seniority has the largest effect. A senior engineer costs more per month and usually needs less direction. Scarce skills cost more than common ones. Larger teams may need a lead, which adds a role.",
        "We quote in writing before you commit to anything. The ranges below will be filled in once SyntaxHires has confirmed its rate card.",
      ],
      // PLACEHOLDER: monthly cost ranges per seniority level from SyntaxHires' confirmed rate card. Replace every "—".
      list: [
        "Junior developer, per month: —",
        "Mid-level developer, per month: —",
        "Senior developer, per month: —",
        "Technical lead, per month: —",
      ],
      aside: {
        title: "What drives cost",
        items: ["Seniority", "Scarcity of the skill", "Team size and whether a lead is needed", "Working hours overlap"],
      },
      ctas: [{ label: "Estimate Your Cost", href: "/resources/developer-cost-estimate/" }],
    },
    {
      // PLACEHOLDER: replace with three real, client-approved outcomes. Do not publish these generic cards.
      type: "cards",
      tone: "dark",
      title: "Recent [Outcomes]",
      align: "center",
      columns: 3,
      items: [
        { tag: "Industry", title: "Outcome headline", metric: "—", text: "One or two sentences on what the client needed and what the team delivered.", href: "/case-study/our-work/", linkLabel: "Read Our Work" },
        { tag: "Industry", title: "Outcome headline", metric: "—", text: "One or two sentences on what the client needed and what the team delivered.", href: "/case-study/our-work/", linkLabel: "Read Our Work" },
        { tag: "Industry", title: "Outcome headline", metric: "—", text: "One or two sentences on what the client needed and what the team delivered.", href: "/case-study/our-work/", linkLabel: "Read Our Work" },
      ],
    },
    {
      type: "cta",
      variant: "strip",
      title: "Not Ready To Book A Call?",
      text: "Work out the numbers on your own first. The cost estimate needs no email.",
      ctas: [{ label: "Open The Cost Estimate", href: "/resources/developer-cost-estimate/" }],
    },
    {
      type: "form",
      id: "trial",
      title: "Start With A [First-Week] Performance Review",
      align: "left",
      intro: "Begin with one developer and a review at the end of the first week. You decide what happens next.",
      lists: [
        { title: "What the review covers", items: ["Quality of the first pull requests", "Communication and questions asked", "Fit with your team and process"] },
        { title: "What you decide", items: ["Continue as you are", "Change the developer", "Stop, with no exit fee"] },
      ],
      form: {
        title: "Tell Us About The Role",
        submit: "Request A Developer",
        kind: "trial-dedicated",
        fields: ["name", "email", "company", "teamSize", "timeline", "message"],
        note: "You interview the developer before any contract.",
      },
    },
    {
      type: "cards",
      tone: "muted",
      title: "Read The [Guides] First",
      align: "center",
      intro: "Plain comparisons for people still choosing a model.",
      columns: 3,
      items: [
        {
          icon: "users",
          title: "Dedicated Developers vs Freelancers",
          text: "How the two compare on continuity, accountability and ownership, and when a freelancer is the better choice.",
          href: "/hire/dedicated-developers/dedicated-developers-vs-freelancers/",
          linkLabel: "Compare The Models",
        },
        {
          icon: "layers",
          title: "Dedicated Team vs Staff Augmentation",
          text: "Who directs the work, who owns delivery and which model suits the way your team already runs.",
          href: "/hire/dedicated-developers/dedicated-team-vs-staff-augmentation/",
          linkLabel: "Read The Guide",
        },
        {
          icon: "credit",
          title: "Offshore Developers Cost",
          text: "What goes into the full cost of an offshore developer beyond the monthly rate, and where the hidden items sit.",
          href: "/hire/dedicated-developers/offshore-developers-cost/",
          linkLabel: "See The Cost Guide",
        },
      ],
    },
    { type: "insights" },
    {
      type: "faq",
      items: [
        {
          q: "What does dedicated mean?",
          a: "The developer works on your product only. They are not shared with other clients and they do not rotate between projects.",
        },
        {
          q: "Can I interview the developer first?",
          a: "Yes. You interview every candidate before any contract, and you make the final decision.",
        },
        {
          q: "Is there a minimum term?",
          a: "Engagements run month to month and there is no exit fee. The notice period is stated in the contract.",
        },
        {
          q: "Who owns the code?",
          a: "You do. All code and IP is assigned to you in the contract. Developers work in your repository and tools, and an NDA is signed before code access.",
        },
        {
          q: "What if the developer is not the right fit?",
          a: "Tell us. We first try to fix the problem. If that does not work, we replace the developer.",
        },
      ],
      button: { label: "Have More Questions?", href: "/faq/" },
    },
  ],
};

export default page;
