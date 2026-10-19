import type { ProjectData } from "@/content/types";

// Facts taken from the delivered platform. Figures on the site (teams, programmes, athletes) are the festival's own.
// PLACEHOLDER: confirm the client (Hamdan Students Union) is happy to be named, and confirm the technology list.
const project: ProjectData = {
  slug: "pegasus-sports-festival",
  name: "Pegasus",
  tab: "Sports Festival Platform",
  kind: "Web application",
  industry: "Education and sport",
  title: "Pegasus: A Live Championship Platform For A [College Sports Festival]",
  summary:
    "A web platform that runs a student sports festival: disciplines and draws, the day's timetable, a live stadium display, verified results, a house leaderboard and a QR athlete pass, with separate desks for judges, team managers and admins.",
  meta: {
    title: "Pegasus: Sports Festival Platform",
    description:
      "How SyntecHire built Pegasus, a platform for a college sports festival: disciplines, timetable, live display, verified results, house leaderboard, athlete QR passes and role-based desks.",
  },
  cover: "/images/work/pegasus-home.webp",
  facts: [
    { label: "Industry", value: "Education and sport" },
    { label: "Type", value: "Web application" },
    { label: "Users", value: "Students, judges, managers" },
    { label: "Disciplines", value: "10" },
    { label: "Stack", value: "Next.js, React" },
  ],
  metrics: [
    { icon: "layers", value: "10", label: "Disciplines, 33 medal draws" },
    { icon: "users", value: "3", label: "Role-based desks" },
    { icon: "zap", value: "Live", label: "Stadium display" },
  ],
  note: {
    label: "What was built",
    text: "Public pages for sports, timetable, live display, results, leaderboard and houses; an athlete QR credential pass; and signed-in desks for judges, team managers and admins.",
  },
  overview: {
    paragraphs: [
      "A college sports festival runs many events across several arenas at once, with points feeding a house championship. Pegasus gives the whole campus one place to follow it: what is on now, who won, and where each house stands.",
      "The public side covers disciplines, draws and rules, the day's timetable, a live display built for a stadium screen, verified results and the house leaderboard. Each athlete has a QR credential pass with their events and podium marks. Judges, team managers and admins sign in to their own desks to enter scores, manage rosters and publish results.",
    ],
    aside: {
      title: "At a glance",
      items: ["10 disciplines, 33 medal draws", "Live stadium display", "House leaderboard from verified results", "QR athlete passes"],
    },
  },
  built: [
    { icon: "layers", title: "Disciplines And Draws", text: "Each sport with its arena, divisions, medal events, roster quotas and point tier, with search and filters." },
    { icon: "calendar", title: "Timetable", text: "The day's heats by arena, filtered by status and sport, with live, upcoming and completed counts." },
    { icon: "zap", title: "Live Display", text: "A stadium-screen view of what is live, next and done, with a jumbotron mode for big screens." },
    { icon: "check", title: "Verified Results", text: "Results appear publicly only once judges have verified them and the committee has published them." },
    { icon: "chart", title: "House Leaderboard", text: "Championship points computed from certified results and deductions, with podium cards and sorting." },
    { icon: "users", title: "Houses And Rosters", text: "Each house with its rank, points, registered athletes and divisions." },
    { icon: "lock", title: "Athlete QR Pass", text: "A scannable credential looked up by chest number, with registered events and podium marks." },
    { icon: "settings", title: "Role-Based Desks", text: "Signed-in areas for judges, team managers and admins, each limited to its own tasks." },
  ],
  stack: [
    { icon: "code", title: "Next.js", text: "Page routing, server actions for sign-in and fast pre-rendered pages." },
    { icon: "monitor", title: "React", text: "Components for filters, live displays, leaderboards and the credential pass." },
    { icon: "layers", title: "Tailwind CSS", text: "Consistent styling across light and dark views." },
    { icon: "lock", title: "Role-Based Access", text: "Separate sign-in for judges, team managers and admins." },
  ],
  screens: [
    { src: "/images/work/pegasus-home.webp", alt: "Pegasus home page with the festival headline over an aerial photo of the campus ground", caption: "Home page: the festival at a glance." },
    { src: "/images/work/pegasus-live.webp", alt: "Pegasus live display showing a live 100m sprint, the next football match and a completed long jump", caption: "Live display: what is on now, next and done." },
    { src: "/images/work/pegasus-leaderboard.webp", alt: "Pegasus championship standings with podium cards for the leading houses", caption: "House leaderboard with podium cards." },
    { src: "/images/work/pegasus-athletics.webp", alt: "Pegasus athletics arena page with medal events, arena details and division filters", caption: "A discipline page: arena, draws and divisions." },
  ],
  services: [
    { label: "Web Application Development", href: "/service/web-application-development/" },
    { label: "UI/UX Design", href: "/service/ui-ux-design/" },
  ],
  live: { label: "View Live Site", href: "https://pegasus.syntechire.com/" },
};

export default project;
