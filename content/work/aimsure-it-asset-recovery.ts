import type { ProjectData } from "@/content/types";

// Facts taken from the delivered website.
// PLACEHOLDER: confirm the client has approved being named, and add `live` once the site is on its final domain.
const project: ProjectData = {
  slug: "aimsure-it-asset-recovery",
  name: "Aimsure",
  tab: "Enterprise Website",
  kind: "Company website",
  industry: "IT asset recovery",
  title: "Aimsure: An Enterprise Website For [IT Asset Recovery]",
  summary:
    "A multi-page website for an IT asset recovery company serving enterprises in India, with service, industry and solution pages, a guided quote request and a light and dark theme.",
  meta: {
    title: "Aimsure: Enterprise Website Build",
    description:
      "How SyntecHire built the Aimsure website: 21 pages for an enterprise IT asset recovery company, a seven-step quote request, structured data and a dark theme.",
  },
  cover: "/images/work/aimsure-home.webp",
  facts: [
    { label: "Industry", value: "IT asset recovery" },
    { label: "Type", value: "Company website" },
    { label: "Audience", value: "Enterprise buyers" },
    { label: "Pages", value: "21" },
    { label: "Stack", value: "Next.js, React" },
  ],
  metrics: [
    { icon: "file", value: "21", label: "Pages" },
    { icon: "code", value: "Next.js", label: "Stack" },
    { icon: "check", value: "7 steps", label: "Guided quote request" },
  ],
  note: {
    label: "What was built",
    text: "Service, industry and solution pages, a seven-step quote request, a readiness check, structured data for search engines and a light and dark theme.",
  },
  overview: {
    paragraphs: [
      "Aimsure collects, assesses and recycles retired IT hardware for enterprises. Its buyers are procurement, audit and IT security teams, who need to see a documented process before they make contact.",
      "The website is organised around that need. Each service has its own page, the six-stage process is set out in full, and separate pages address the industries and situations a buyer is likely to search for. The quote request is split into short steps, so a visitor can describe a complex estate without facing one long form.",
    ],
    aside: {
      title: "At a glance",
      items: ["21 pages", "Seven-step quote request", "Light and dark theme", "Works on phone, tablet and desktop"],
    },
  },
  built: [
    { icon: "layers", title: "Service Pages", text: "Separate pages for IT asset recovery, data centre decommissioning, servers and storage, collection and e-waste processing." },
    { icon: "building", title: "Industry Coverage", text: "Nine industries, from banks and data centres to hospitals and government, each with its own requirements set out." },
    { icon: "search", title: "Solution Pages", text: "Seven pages written for specific searches, such as server disposal and IT asset recovery in Mumbai." },
    { icon: "check", title: "Guided Quote Request", text: "A seven-step form covering assets, volume, location and requirements, with nothing submitted until the final step." },
    { icon: "target", title: "Readiness Check", text: "Five questions that tell a visitor whether a collection can be planned yet." },
    { icon: "eye", title: "Light And Dark Theme", text: "A theme switch in the header, so visitors can read the site in either theme." },
    { icon: "globe", title: "Search Setup", text: "Structured data for the organisation, services and FAQs, plus a sitemap for search engines." },
    { icon: "smartphone", title: "Responsive Layout", text: "One layout that adapts from phone to desktop, with a skip link and labelled controls." },
  ],
  stack: [
    { icon: "code", title: "Next.js", text: "Page routing and fast, pre-rendered pages." },
    { icon: "monitor", title: "React", text: "Components for the interface, forms and theme switch." },
    { icon: "cloud", title: "Vercel", text: "Hosting and deployment." },
  ],
  screens: [
    { src: "/images/work/aimsure-home.webp", alt: "Aimsure website home page in the light theme", caption: "Home page, light theme." },
    { src: "/images/work/aimsure-dark.webp", alt: "Aimsure website home page in the dark theme", caption: "Home page, dark theme." },
    { src: "/images/work/aimsure-request.webp", alt: "Aimsure seven-step asset recovery request form", caption: "Guided quote request, step one of seven." },
    { src: "/images/work/aimsure-process.webp", alt: "Aimsure how it works page describing the six-stage process", caption: "The six-stage process page." },
  ],
  services: [
    { label: "Web Application Development", href: "/service/web-application-development/" },
    { label: "UI/UX Design", href: "/service/ui-ux-design/" },
  ],
};

export default project;
