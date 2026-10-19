import type { ProjectData } from "@/content/types";

// A demo build: Lanecraft is a fictional logistics company, and the site's figures are illustrative placeholders.
// Facts taken from the delivered demo site.
// PLACEHOLDER: confirm the technology list with the delivery team.
const project: ProjectData = {
  slug: "lanecraft-logistics",
  name: "Lanecraft Logistics",
  tab: "Logistics Website",
  kind: "Demo website",
  industry: "Logistics",
  title: "Lanecraft: A Freight Company Website With [Live Shipment Tracking]",
  summary:
    "A demo website for a freight and logistics company. An animated scroll-through of a shipment's journey, a quote form, a carrier sign-up form and a tracking page that shows a consignment's milestones.",
  meta: {
    title: "Lanecraft Logistics: Freight Website Demo",
    description:
      "How SyntecHire built the Lanecraft demo: a logistics website with an animated 3D journey, quote and carrier forms, shipment tracking and a dark and light theme.",
  },
  cover: "/images/work/lanecraft-home.webp",
  facts: [
    { label: "Industry", value: "Logistics" },
    { label: "Type", value: "Demo website" },
    { label: "Audience", value: "Shippers and carriers" },
    { label: "Pages", value: "6" },
    { label: "Themes", value: "Dark and light" },
  ],
  metrics: [
    { icon: "layers", value: "6", label: "Pages" },
    { icon: "truck", value: "4", label: "Freight services shown" },
    { icon: "search", value: "Live", label: "Shipment tracking demo" },
  ],
  note: {
    label: "What was built",
    text: "An animated scroll-through of a load's journey, a quote request, a carrier partner sign-up, a shipment tracking page with milestones, a services page and a dark and light theme.",
  },
  overview: {
    paragraphs: [
      "Lanecraft is a demo we built to show what a modern freight company's website can look like: how a shipper books a load, how a carrier joins the network and how a customer follows a consignment.",
      "The home page tells the journey in four steps as the visitor scrolls, with a 3D scene of the yard, the truck and the route moving alongside the text. The tracking page takes a consignment ID and shows the route, the status and each milestone with its time.",
    ],
    aside: {
      title: "At a glance",
      items: ["Four-step animated journey", "Quote and carrier sign-up forms", "Tracking page with milestones", "Dark and light theme"],
    },
  },
  built: [
    { icon: "compass", title: "Animated Journey", text: "A 3D scene of the yard, trucks and route that moves as the visitor scrolls through booking, matching, tracking and delivery." },
    { icon: "truck", title: "Services Page", text: "Full truckload, part truckload, EV last-mile and warehousing, each with what is included." },
    { icon: "credit", title: "Quote Request", text: "Pickup and drop cities, service type, weight, date and contact details in one form." },
    { icon: "handshake", title: "Carrier Sign-Up", text: "A partner form for fleet owners: vehicle types, fleet size, city and contact." },
    { icon: "search", title: "Shipment Tracking", text: "Enter a consignment ID to see the route, status, ETA and each milestone with its time and place." },
    { icon: "message", title: "Contact And FAQ", text: "A contact form with topic selection, and plain-language answers to common freight questions." },
    { icon: "eye", title: "Dark And Light Theme", text: "A theme switch in the header, with the 3D scene drawn for both themes." },
    { icon: "smartphone", title: "Responsive Layout", text: "One layout that adapts from phone to desktop, with no horizontal scrolling." },
  ],
  stack: [
    { icon: "monitor", title: "Web Front End", text: "A fast, pre-rendered site with the 3D scene drawn in the browser." },
    { icon: "layers", title: "3D Scroll Scene", text: "A low-polygon yard, trucks and route, animated by scroll position." },
    { icon: "file", title: "Forms", text: "Quote, partner and contact forms with validation and a spam trap." },
  ],
  screens: [
    { src: "/images/work/lanecraft-home.webp", alt: "Lanecraft home page in the dark theme, with a 3D yard scene behind the headline", caption: "Home page: the yard scene behind the headline." },
    { src: "/images/work/lanecraft-scene.webp", alt: "Lanecraft scroll journey in the light theme, with a truck on the route and step two highlighted", caption: "The scroll journey: the truck moves as the visitor reads each step." },
    { src: "/images/work/lanecraft-track.webp", alt: "Lanecraft tracking page showing a consignment from Bhiwandi to Ahmedabad with milestones", caption: "Tracking: route, status and milestones for a consignment." },
    { src: "/images/work/lanecraft-quote.webp", alt: "Lanecraft quote request page with the form for lane, service, weight and date", caption: "Quote request: lane, service, weight and pickup date." },
  ],
  services: [
    { label: "Web Application Development", href: "/service/web-application-development/" },
    { label: "UI/UX Design", href: "/service/ui-ux-design/" },
  ],
  live: { label: "View Live Demo", href: "https://demo-lanecraft.syntechire.com/" },
};

export default project;
