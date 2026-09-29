import type { ProjectData } from "@/content/types";

// Facts taken from the delivered website. The client's own results and claims are not repeated here.
// PLACEHOLDER: confirm the client has approved being named, and confirm the technology list.
const project: ProjectData = {
  slug: "scalexpertz",
  name: "ScaleXpertz",
  tab: "Agency Website",
  kind: "Company website",
  industry: "Growth agency",
  title: "ScaleXpertz: A Growth Agency Website Built To [Book Founder Calls]",
  summary:
    "A website for a growth agency that sells strategy, branding, marketing and technology as one service. It explains the agency's five-phase framework, shows its pricing plans and books a founder call.",
  meta: {
    title: "ScaleXpertz: Agency Website Build",
    description:
      "How SyntecHire built the ScaleXpertz website: an animated five-phase framework, pricing plans with add-ons, a founder call booking form and a careers section.",
  },
  cover: "/images/work/scalexpertz-home.webp",
  facts: [
    { label: "Industry", value: "Growth agency" },
    { label: "Type", value: "Company website" },
    { label: "Audience", value: "Founders" },
    { label: "Themes", value: "Dark and light" },
    { label: "Stack", value: "Next.js, Tailwind CSS" },
  ],
  metrics: [
    { icon: "layers", value: "5", label: "Framework phases, interactive" },
    { icon: "code", value: "Next.js", label: "Stack" },
    { icon: "credit", value: "3", label: "Pricing plans" },
  ],
  note: {
    label: "What was built",
    text: "An animated home page, an interactive framework roadmap, pricing plans with add-ons, a founder call booking form, a careers section with applications and a dark and light theme.",
  },
  overview: {
    paragraphs: [
      "ScaleXpertz offers several services under one team, which is harder to explain than a single service. The website had to make the offer clear quickly and move a founder towards a first call.",
      "The home page tells the story in numbered sections: the problem, the agency's framework, the services, the work, the pricing and the questions founders ask. The framework is drawn as a roadmap a visitor can step through, and the pricing section shows each plan with its add-ons and total, so the visitor sees a figure before they make contact.",
    ],
    aside: {
      title: "At a glance",
      items: ["Seven numbered home page sections", "Interactive five-phase roadmap", "Three pricing plans with add-ons", "Booking form that qualifies the lead"],
    },
  },
  built: [
    { icon: "monitor", title: "Animated Home Page", text: "A hero with the brand mark at the centre of six service labels, followed by seven numbered sections." },
    { icon: "compass", title: "Framework Roadmap", text: "The agency's five phases drawn as a route, with a card for each phase listing what is included and the outcome." },
    { icon: "credit", title: "Pricing Plans", text: "Three plans on tabs, each with its add-ons and the total investment shown beside it." },
    { icon: "calendar", title: "Founder Call Booking", text: "A booking form that asks for company, team size and monthly revenue, so the agency can prepare before the call." },
    { icon: "briefcase", title: "Careers And Applications", text: "A careers page listing open roles by discipline, and an application form with a portfolio link." },
    { icon: "eye", title: "Dark And Light Theme", text: "A theme switch in the header. The site opens in the dark theme." },
    { icon: "file", title: "Work And Research", text: "A section for client work, with the agency's case study report offered as a PDF download." },
    { icon: "smartphone", title: "Responsive Layout", text: "One layout that adapts from phone to desktop, with a menu built for small screens." },
  ],
  stack: [
    { icon: "code", title: "Next.js", text: "Page routing and fast page loads." },
    { icon: "monitor", title: "React", text: "Components for the roadmap, pricing plans, forms and theme switch." },
    { icon: "layers", title: "Tailwind CSS", text: "Consistent styling across both themes." },
  ],
  screens: [
    { src: "/images/work/scalexpertz-home.webp", alt: "ScaleXpertz home page in the dark theme, with the headline and the brand mark surrounded by six service labels", caption: "Home page, dark theme." },
    { src: "/images/work/scalexpertz-framework.webp", alt: "ScaleXpertz framework section showing five phases drawn as a roadmap", caption: "The five-phase framework as an interactive roadmap." },
    { src: "/images/work/scalexpertz-pricing.webp", alt: "ScaleXpertz pricing section with three plan tabs, add-ons and a total", caption: "Pricing: three plans, add-ons and the total." },
    { src: "/images/work/scalexpertz-diagnosis.webp", alt: "ScaleXpertz founder call booking page with what is included and a booking form", caption: "Founder call booking, with a form that qualifies the lead." },
  ],
  services: [
    { label: "Web Application Development", href: "/service/web-application-development/" },
    { label: "UI/UX Design", href: "/service/ui-ux-design/" },
  ],
  live: { label: "View Live Site", href: "https://scalexpertz.com/" },
};

export default project;
