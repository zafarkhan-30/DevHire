import { servicePath, services } from "@/content/services";
import type { CardItem, PageDef } from "@/content/types";
import { projectCard, projectColumns, projects } from "@/content/work";

const card = (group: "build" | "operate"): CardItem[] =>
  services
    .filter((service) => service.group === group)
    .map((service) => ({ icon: service.icon, title: service.name, text: service.summary, href: servicePath(service), linkLabel: "View service" }));

const page: PageDef = {
  path: "/services/",
  meta: {
    title: "Software Development Services",
    description:
      "SyntaxHires designs, builds and supports software: web and mobile apps, MVPs, AI and automation, cloud, testing and support, plus engineers for your own team.",
  },
  blocks: [
    {
      type: "hero",
      tone: "dark",
      size: "md",
      align: "center",
      eyebrow: "Services",
      title: "Software Designed, Built And [Supported]",
      text: "We build products for you, or add engineers to the team you already have. Either way, you own the code.",
      ctas: [
        { label: "Discuss Your Project", href: "#enquiry" },
        { label: "See Our Work", href: "#work", variant: "outline-light" },
      ],
    },
    {
      type: "cards",
      id: "build",
      title: "We [Build It] For You",
      intro: "A team that takes the work from requirements to release.",
      align: "center",
      columns: 4,
      items: card("build"),
    },
    {
      type: "cards",
      id: "work",
      tone: "navy",
      eyebrow: "Our Work",
      title: "Projects We Have [Built]",
      intro: "Recent work from our team: what we built and what the finished product looks like.",
      align: "center",
      columns: projectColumns,
      items: projects.map(projectCard),
    },
    {
      type: "cta",
      variant: "strip",
      title: "Want To See How A Project Runs?",
      text: "Six stages, from discovery to support after launch, each with a clear output.",
      ctas: [
        { label: "How We Build", href: "/how-we-build/" },
        { label: "View All Work", href: "/case-study/our-work/", variant: "outline" },
      ],
    },
    {
      type: "cards",
      id: "operate",
      tone: "muted",
      title: "Design, Run And [Look After It]",
      intro: "Services that support a product before and after it is built.",
      align: "center",
      columns: 4,
      items: card("operate"),
    },
    {
      type: "cards",
      id: "hire",
      title: "Add Engineers To [Your Team]",
      intro: "When you have the process and need more capable people inside it.",
      align: "center",
      columns: 3,
      items: [
        { icon: "users", title: "Dedicated Developers", text: "Engineers who work only on your product, month to month.", href: "/service/dedicated-developers/", linkLabel: "View service" },
        { icon: "network", title: "IT Staff Augmentation", text: "Specific skills added to your existing team for as long as you need them.", href: "/service/it-staff-augmentation-services/", linkLabel: "View service" },
        { icon: "handshake", title: "Recruitment", text: "We find and screen engineers who join your own payroll.", href: "/pricing/", linkLabel: "See recruitment pricing" },
      ],
    },
    {
      type: "cards",
      tone: "muted",
      title: "Modernise [What You Have]",
      intro: "For systems that still run the business and have become hard to change.",
      align: "center",
      columns: 3,
      items: [
        { icon: "refresh", title: "Legacy System Modernization", text: "Replace an ageing system in stages, with the business running throughout.", href: "/service/legacy-system-modernization/", linkLabel: "View service" },
        { icon: "layers", title: "Legacy Application Modernization", text: "Bring an older application onto a current, supported stack.", href: "/service/legacy-application-modernization/", linkLabel: "View service" },
        { icon: "shield", title: "Zero-Downtime Modernization", text: "Old and new run side by side, with a way back at every step.", href: "/service/legacy-modernization-zero-downtime/", linkLabel: "View service" },
      ],
    },
    {
      type: "split",
      title: "Build With Us Or [Hire From Us?]",
      intro: "Both are available. This is how to tell which one fits.",
      align: "center",
      panels: [
        {
          title: "Choose a project team when",
          mood: "neutral",
          items: [
            "You want an outcome delivered, not people to manage",
            "You do not have a technical lead in-house",
            "The work has a clear start and end",
            "You need design, build and testing from one team",
          ],
        },
        {
          title: "Choose dedicated developers when",
          mood: "neutral",
          items: [
            "You already have a process and a technical lead",
            "The product needs continuous development",
            "You want to direct the work day to day",
            "You need to add or reduce capacity as priorities change",
          ],
        },
      ],
      footnote: "Not sure? Tell us the situation and we will recommend one, with the reasons.",
    },
    {
      type: "form",
      id: "enquiry",
      tone: "muted",
      title: "Tell Us What You [Need]",
      align: "left",
      lists: [
        { title: "Helpful to include", items: ["What you want to build or improve", "Who will use it", "Anything already built", "Your target date"] },
        { title: "What happens next", items: ["We read your brief and reply within two working days", "A scoping call to agree goals and must-haves", "A written proposal: scope, timeline and cost"] },
      ],
      form: {
        title: "Project Enquiry",
        submit: "Send Enquiry",
        kind: "project-enquiry",
        fields: ["name", "email", "phone", "company", "projectType", "timeline", "message"],
        note: "No obligation. We sign an NDA before you share anything confidential.",
      },
    },
    {
      type: "faq",
      title: "Questions About [Working With Us]",
      items: [
        { q: "Do you build software, or only supply developers?", a: "Both. We take on projects and deliver them with our own team, and we also place engineers inside client teams. The services on this page are grouped by which of the two they are." },
        { q: "Who owns the code?", a: "You do. The code is kept in your repository and the contract assigns the IP to you." },
        { q: "How do you price a project?", a: "After a scoping call we send a written proposal with the scope, timeline and cost. The engagement models page explains fixed scope, time and material and dedicated team arrangements." },
        { q: "Will you sign an NDA?", a: "Yes. We sign an NDA before you share anything confidential." },
        { q: "Where is your team based?", a: "We work remotely with clients around the world and arrange working hours that overlap with yours." },
      ],
    },
    {
      type: "cta",
      variant: "dark",
      title: "Have Something To Build?",
      text: "Tell us the idea and the timeline. We will reply with questions, then a written proposal.",
      ctas: [
        { label: "Talk To An Engineer", href: "/contact-us/" },
        { label: "Engagement Models", href: "/engagement-models/", variant: "outline-light" },
      ],
    },
  ],
};

export default page;
