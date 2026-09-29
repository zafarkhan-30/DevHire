import type { ProjectData } from "@/content/types";

// Facts taken from the delivered application. The figures visible in the screenshots are demo data.
// PLACEHOLDER: confirm the stack list, and add backend details if the project included one.
const project: ProjectData = {
  slug: "finvest-crm",
  name: "FinVest CRM",
  tab: "FinTech Web App",
  kind: "Web application",
  industry: "Financial services",
  title: "FinVest CRM: A Client And Portfolio Platform For [Mutual Fund Advisors]",
  summary:
    "A web application that gives a financial advisor one place to manage clients, mutual fund investments, SIPs, KYC status and reports, with a dashboard that shows the day's priorities.",
  meta: {
    title: "FinVest CRM: FinTech Web Application",
    description:
      "How SyntecHire built FinVest CRM, a web application for mutual fund advisors: client records, fund research, portfolio analytics, reports and an in-app assistant.",
  },
  cover: "/images/work/finvest-dashboard.webp",
  facts: [
    { label: "Industry", value: "Financial services" },
    { label: "Type", value: "Web application" },
    { label: "Users", value: "Financial advisors" },
    { label: "Screens", value: "8" },
    { label: "Stack", value: "React, Tailwind CSS" },
  ],
  metrics: [
    { icon: "layers", value: "8", label: "Application screens" },
    { icon: "code", value: "React", label: "Frontend stack" },
    { icon: "file", value: "6", label: "Report types" },
  ],
  note: {
    label: "What was built",
    text: "Dashboard, client records, fund research with comparison, portfolio analytics, reports with PDF and Excel export, calendar, notifications and role-based settings.",
  },
  overview: {
    paragraphs: [
      "A mutual fund advisor works across many clients at once: SIPs falling due, KYC checks pending, reviews to schedule and portfolios to explain. FinVest CRM brings that work into a single application.",
      "The dashboard opens on the day's priorities: SIPs due, pending KYC, upcoming follow-ups and recent transactions. From there the advisor moves to a client, a fund or a portfolio without losing context. A market ticker and a search across clients and funds stay visible on every screen.",
    ],
    aside: {
      title: "At a glance",
      items: ["Eight connected screens", "Charts for growth and allocation", "Six report types with export", "In-app assistant with quick actions"],
    },
  },
  built: [
    { icon: "chart", title: "Dashboard", text: "Key figures, investment growth, portfolio allocation, recent transactions, follow-ups and SIP payments due." },
    { icon: "users", title: "Client Records", text: "A client list with filtering and export, and a form for adding new clients." },
    { icon: "search", title: "Fund Research", text: "Mutual funds with returns, risk level and minimum SIP, filtered by category, fund house and risk, with side-by-side comparison." },
    { icon: "trending", title: "Portfolio Analytics", text: "Allocation by asset class, sector and fund house, a performance trend and the full list of holdings." },
    { icon: "file", title: "Reports", text: "Portfolio, capital gain, transaction, SIP, commission and client statement reports, exported as PDF or Excel." },
    { icon: "calendar", title: "Calendar And Notifications", text: "Scheduled reviews and follow-ups, with alerts grouped by SIP, KYC, birthdays and market events." },
    { icon: "message", title: "In-App Assistant", text: "A chat panel with quick actions: find a client, suggest funds, summarise a portfolio, list pending KYC and calculate a SIP." },
    { icon: "settings", title: "Settings And Roles", text: "Profile, company and employee settings, roles and permissions, security and theme." },
  ],
  stack: [
    { icon: "monitor", title: "React", text: "Component-based interface across all eight screens." },
    { icon: "zap", title: "Vite", text: "Build tooling and fast local development." },
    { icon: "layers", title: "Tailwind CSS", text: "Consistent styling and spacing across the application." },
    { icon: "chart", title: "Recharts", text: "Line, donut and bar charts for growth and allocation." },
  ],
  screens: [
    { src: "/images/work/finvest-dashboard.webp", alt: "FinVest CRM dashboard with key figures, investment growth chart and portfolio allocation", caption: "Dashboard: the advisor's day at a glance." },
    { src: "/images/work/finvest-portfolio.webp", alt: "FinVest CRM portfolio screen with asset, sector and fund house allocation charts", caption: "Portfolio: allocation by asset class, sector and fund house." },
    { src: "/images/work/finvest-funds.webp", alt: "FinVest CRM mutual funds screen with fund cards showing returns and risk level", caption: "Fund research: returns, risk and comparison." },
    { src: "/images/work/finvest-assistant.webp", alt: "FinVest CRM in-app assistant panel with quick actions", caption: "In-app assistant with quick actions." },
  ],
  services: [
    { label: "Web Application Development", href: "/service/web-application-development/" },
    { label: "UI/UX Design", href: "/service/ui-ux-design/" },
  ],
  live: { label: "View Live Demo", href: "https://fintech-crm.netlify.app/" },
};

export default project;
