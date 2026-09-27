import type { PageDef } from "@/content/types";

const page: PageDef = {
  path: "/faq/",
  meta: {
    title: "Frequently Asked Questions",
    description:
      "Answers about hiring DevHire developers: pricing and contracts, vetting, security and IP, working together and legacy modernisation.",
  },
  blocks: [
    {
      type: "hero",
      tone: "dark",
      align: "center",
      eyebrow: "FAQ",
      title: "Frequently Asked [Questions]",
      text: "Plain answers to what engineering leaders ask us before they hire.",
      ctas: [
        { label: "Hire A Developer", href: "/technologies/" },
        { label: "Discuss A Project", href: "/contact-us/", variant: "outline-light" },
      ],
    },
    {
      type: "accordion",
      tone: "light",
      title: "[General]",
      align: "left",
      items: [
        { title: "What does DevHire do?", text: "We place remote developers and dedicated teams with companies that need engineering capacity. We also help teams modernise legacy systems." },
        { title: "Who do you work with?", text: "Founders building a first release, engineering leaders growing a team and companies that need to update an older platform." },
        { title: "How is this different from hiring a freelancer?", text: "A DevHire developer works on one client only and is supported by us. If the fit is wrong, we replace them. A freelancer usually splits time between clients and carries no replacement cover." },
        { title: "Which technologies do you cover?", text: "Frontend, backend, mobile, cloud, data and AI, CMS and design. The technologies page lists every stack." },
        { title: "How do we get started?", text: "Send a request through the contact page. We reply within two working days with questions and a proposed next step." },
      ],
    },
    {
      type: "accordion",
      tone: "muted",
      title: "Pricing And [Contracts]",
      align: "left",
      items: [
        { title: "How is pricing set?", text: "Cost depends on seniority, stack and team size. We give you the monthly rate in writing before you commit." },
        { title: "Is there a minimum term?", text: "No. Engagements run month to month. The notice period is stated in the contract." },
        { title: "Is there an exit fee?", text: "No. If you decide to stop, you give notice and the engagement ends." },
        { title: "Do I sign anything before meeting the developer?", text: "No. You interview the developer before any contract." },
        { title: "Can I change the size of my team?", text: "Yes. Month-to-month terms let you add or reduce developers as the roadmap changes, within the notice period in the contract." },
        { title: "How can I estimate the cost before talking to you?", text: "The developer cost estimate tool gives you a starting range. We confirm the actual figure once we understand the role." },
      ],
    },
    {
      type: "accordion",
      tone: "light",
      title: "Vetting And [Quality]",
      align: "left",
      items: [
        { title: "How do you screen developers?", text: "Screening covers a profile review, a communication check, code review on real work, a live technical interview and a practical task." },
        { title: "What do you look for beyond technical skill?", text: "How a developer works: whether they ask questions early, read existing code before changing it and respond well to review." },
        { title: "Can I run my own interview?", text: "Yes. You interview every candidate with your own questions and make the final decision." },
        { title: "What if the developer is not the right fit?", text: "Tell us. We first try to fix the problem. If that does not work, we replace the developer and hand over the context." },
        { title: "Is the work reviewed?", text: "Yes. Code review on every change is one of our working standards, and developers follow your review process." },
        { title: "Can you assess a team I already have?", text: "Yes. We can assess an existing offshore team against the same criteria we use for our own developers and tell you where the gaps are." },
      ],
    },
    {
      type: "accordion",
      tone: "muted",
      title: "Security And [IP]",
      align: "left",
      items: [
        { title: "Who owns the code?", text: "You do. All code and intellectual property is assigned to you by contract." },
        { title: "When is the NDA signed?", text: "Before any developer gets access to your code." },
        { title: "Where does the code live?", text: "In your repository. Developers work in your tools, under your access rules." },
        { title: "How is access controlled?", text: "You grant access and you can remove it. We ask for the least access the task needs." },
        { title: "Will the developer follow our security policies?", text: "Yes. Developers follow your policies for devices, credentials and data. Tell us your requirements at the start." },
      ],
    },
    {
      type: "accordion",
      tone: "light",
      title: "Working [Together]",
      align: "left",
      items: [
        { title: "Who manages the developer day to day?", text: "You do. The developer joins your team, takes tasks from your backlog and follows your process." },
        { title: "Which tools will the developer use?", text: "Yours. Developers work in your repository, your tracker and your chat." },
        { title: "Does the developer work on other clients?", text: "No. One developer works on one client." },
        { title: "How do we handle time zones?", text: "We agree working hours and an overlap with your team before the engagement starts." },
        { title: "How will I know what is being done?", text: "Work is visible in your tools. Commits, pull requests and tickets are where you already look." },
        { title: "What happens if the developer takes leave?", text: "Planned leave is agreed with you in advance. Tell us if you need cover and we will discuss the options." },
      ],
    },
    {
      type: "accordion",
      tone: "muted",
      title: "Legacy [Modernisation]",
      align: "left",
      items: [
        { title: "What counts as a legacy system?", text: "Any system that is hard to change, hard to hire for or running on technology that is no longer supported." },
        { title: "Do you rewrite everything from scratch?", text: "Rarely. We prefer to replace a system piece by piece, so each step can be tested and reversed." },
        { title: "Can the system stay live during the work?", text: "That is the aim. We plan changes in small steps with a rollback for each one. We will tell you where we see risk before work starts." },
        { title: "Where do we begin?", text: "With an assessment of the current system. The legacy risk assessment is a quick first step you can take on your own." },
        { title: "What if there is no documentation?", text: "That is common. Developers read the code, write down what they find and document as they go." },
      ],
    },
    {
      type: "cta",
      variant: "dark",
      title: "Did Not Find Your Answer?",
      text: "Ask us directly. We reply within two working days.",
      ctas: [
        { label: "Contact Us", href: "/contact-us/" },
        { label: "Legacy Risk Assessment", href: "/resources/legacy-risk-assessment/", variant: "outline-light" },
      ],
    },
  ],
};

export default page;
