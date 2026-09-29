import type { ProjectData } from "@/content/types";

// The operator is not named, at the user's request. Screenshots are masked: operator logo, project label,
// vehicle numbers, driver names and vendor names. Do not add the operator's name, a live link or unmasked images.
// PLACEHOLDER: confirm the technology list with the delivery team and add the languages and frameworks used.
const project: ProjectData = {
  slug: "ev-truck-operations-platform",
  name: "EV Truck Operations Platform",
  tab: "EV Logistics Platform",
  kind: "Web application",
  industry: "Logistics and EV",
  title: "EV Truck Operations Platform: Live Trips And Charging For An [Electric Freight Corridor]",
  summary:
    "An operations platform for an electric truck fleet running a three-depot freight corridor. Supervisors follow every trip stage by stage, see delays as they happen and watch each charger, connector and vehicle in real time.",
  meta: {
    title: "EV Truck Operations Platform",
    description:
      "How SyntecHire built an operations platform for an electric truck fleet: live trip tracking across eight stages, delay flags, charger telemetry and revenue reports.",
  },
  cover: "/images/work/ev-logistics-operations.webp",
  facts: [
    { label: "Industry", value: "Logistics and EV" },
    { label: "Type", value: "Web application" },
    { label: "Users", value: "Operations supervisors" },
    { label: "Modules", value: "5" },
    { label: "Sign-in", value: "Username or Microsoft" },
  ],
  metrics: [
    { icon: "layers", value: "8", label: "Trip stages tracked" },
    { icon: "zap", value: "3", label: "Charging depots monitored" },
    { icon: "chart", value: "5", label: "Modules" },
  ],
  note: {
    label: "What was built",
    text: "Operations dashboard, live trip board, trip register, live charging monitoring with an infrastructure tree, and revenue reports with Excel export.",
  },
  overview: {
    paragraphs: [
      "Electric trucks add a constraint that diesel fleets do not have: every round trip depends on charging, and a delay at a charger becomes a delay on the road. The operator needed one place to see trucks, trips and chargers together.",
      "The platform follows each trip through eight stages, from the loading plant to the return leg, and flags a trip when it spends too long at a stage. A second module shows the charging network live: the power each depot is drawing, the state of every connector and the charge level of each connected truck.",
    ],
    aside: {
      title: "At a glance",
      items: ["Eight trip stages on one board", "Delay flags by type", "Live charger and connector telemetry", "Billing reports with Excel export"],
    },
  },
  built: [
    { icon: "chart", title: "Operations Dashboard", text: "Trip volume, flagged trips, on-time share, flag categories, an efficiency trend and vendor health over a chosen period." },
    { icon: "truck", title: "Live Trip Board", text: "Every trip on the road grouped by stage, with load weight, document numbers, shift, odometer, charge level and delay flags." },
    { icon: "alert", title: "Delay Flags", text: "Trips flagged for turnaround, transit, yard and charging delays, so supervisors see exceptions first." },
    { icon: "search", title: "Trip Register", text: "All trips searchable by vehicle and date range, with vendor filters and export." },
    { icon: "zap", title: "Live Charging Sessions", text: "Each session with power, state of charge, voltage, current, temperature, duration and arrival time, updated in real time." },
    { icon: "network", title: "Infrastructure Tree", text: "Each depot drawn as a tree: depot, charger dispensers, connectors and the connected truck with its charge level." },
    { icon: "globe", title: "Depot Network", text: "Live power draw, utilisation, chargers, connectors and faults for each depot, with a map of the corridor." },
    { icon: "file", title: "Revenue Reports", text: "Monthly trip summaries for billing and cross-checking, downloaded as Excel." },
  ],
  stack: [
    { icon: "monitor", title: "Web Application", text: "A browser-based interface with a collapsible sidebar, filters and live-updating views." },
    { icon: "lock", title: "Platform Service", text: "Sign-in, roles and access, with username or Microsoft sign-in." },
    { icon: "server", title: "Logistics Service", text: "Trips, stages, flags and reports served through a separate API." },
    { icon: "zap", title: "Charger Integration", text: "Live data from the charger management system for depots, chargers and sessions." },
  ],
  screens: [
    { src: "/images/work/ev-logistics-operations.webp", alt: "Live operations board showing trips grouped by stage, with delay flags and charge level on each trip card", caption: "Live trip board: trips grouped by stage, with delay flags." },
    { src: "/images/work/ev-logistics-infrastructure.webp", alt: "Depot infrastructure tree showing a depot, six charger dispensers, their connectors and connected trucks", caption: "Infrastructure tree: depot, dispensers, connectors and connected trucks." },
    { src: "/images/work/ev-logistics-charging.webp", alt: "Live charging monitoring with depot cards, a network map and a table of live charging sessions", caption: "Live charging: depot network, corridor map and live sessions." },
    { src: "/images/work/ev-logistics-depot.webp", alt: "Depot detail dialog listing six charger units with power draw and connector status", caption: "Depot detail: every charger unit and connector status." },
  ],
  services: [
    { label: "Web Application Development", href: "/service/web-application-development/" },
    { label: "UI/UX Design", href: "/service/ui-ux-design/" },
  ],
};

export default project;
