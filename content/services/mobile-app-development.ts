import type { ServiceData } from "@/content/types";

const service: ServiceData = {
  slug: "mobile-app-development",
  name: "Mobile App Development",
  group: "build",
  icon: "smartphone",
  summary: "Android and iOS apps, native or cross-platform, from design to app store release.",
  meta: {
    title: "Mobile App Development",
    description:
      "Android and iOS app development by SyntecHire. Native or cross-platform, with the backend, testing on real devices and app store release included.",
  },
  hero: {
    title: "Mobile Apps For [Android And iOS]",
    text: "We design, build and release mobile apps, along with the backend they depend on. Native or cross-platform, chosen to suit the product.",
    bullets: ["Tested on real devices", "App store submission handled", "You own the code and the store listing"],
  },
  intro: {
    title: "What [Mobile App Development] Covers",
    paragraphs: [
      "A mobile app is more than the screens on the phone. It needs an API, user accounts, notifications, analytics and a release process for two app stores. We cover all of it.",
      "The first decision is native or cross-platform. Native apps are written separately for Android and iOS. Cross-platform apps share one codebase across both. We explain the trade-off for your product before work starts, and you decide.",
    ],
    aside: {
      title: "In short",
      items: ["Android, iOS or both", "Backend and API included", "Push notifications and analytics", "Store submission and updates"],
    },
  },
  build: {
    title: "What We [Build]",
    items: [
      { icon: "users", title: "Customer Apps", text: "Apps your customers use to order, book, pay or track a service." },
      { icon: "briefcase", title: "Staff And Field Apps", text: "Apps for teams on site, including work that must continue without a connection." },
      { icon: "cart", title: "Commerce Apps", text: "Catalogue, basket, payment and order tracking, connected to your existing store." },
      { icon: "layers", title: "Cross-Platform Apps", text: "One codebase for Android and iOS, built with Flutter or React Native." },
      { icon: "server", title: "App Backends", text: "APIs, authentication and data storage that the app relies on." },
      { icon: "refresh", title: "App Rebuilds", text: "Replacing an ageing app with a maintainable one, without losing existing users." },
    ],
  },
  audience: [
    { icon: "rocket", title: "Founders", text: "Your product is mobile first and you need a first version in users' hands." },
    { icon: "building", title: "Established Businesses", text: "You have a website or service and customers are asking for an app." },
    { icon: "code", title: "Product Teams", text: "You have a web product and need mobile skills your team does not have." },
  ],
  approach: {
    title: "How A Mobile Project [Runs]",
    items: [
      { title: "Discovery", text: "We agree the key user journeys and choose native or cross-platform." },
      { title: "Design", text: "Screen designs and a clickable prototype you can try on your own phone." },
      { title: "Build In Sprints", text: "Test builds delivered to your phone at the end of each sprint." },
      { title: "Test On Devices", text: "Testing across screen sizes and operating system versions." },
      { title: "Store Release", text: "We prepare the listings, submit the app and handle review feedback." },
    ],
  },
  deliverables: [
    { icon: "git", title: "Source Code", text: "App and backend code in your repository." },
    { icon: "smartphone", title: "Store Listings", text: "Published under your own developer accounts." },
    { icon: "file", title: "Documentation", text: "Build, release and environment setup, written down." },
    { icon: "lock", title: "Ownership", text: "Code and IP assigned to you by contract." },
  ],
  stack: [
    { label: "Android", href: "/hire/android-developers/" },
    { label: "iOS", href: "/hire/ios-developers/" },
    { label: "Flutter", href: "/hire/flutter-developers/" },
    { label: "React Native", href: "/hire/react-native-developers/" },
    { label: "Node.js", href: "/hire/nodejs-developers/", note: "Backend" },
    { label: "All technologies", href: "/technologies/" },
  ],
  faqs: [
    {
      q: "Should we build native or cross-platform?",
      a: "Cross-platform suits most business apps and keeps one codebase for both stores. Native is the better choice when the app depends heavily on device features or needs the highest performance. We explain the trade-off for your case before you decide.",
    },
    {
      q: "Do you publish the app to the stores?",
      a: "Yes. We prepare the listing, submit the app and respond to review feedback. The app is published under your own developer accounts, so you stay in control of it.",
    },
    {
      q: "Do you build the backend as well?",
      a: "Yes. Most apps need an API, user accounts and data storage. We build these, or connect the app to a backend you already have.",
    },
    {
      q: "Who owns the app?",
      a: "You do. The code, the store listings and the IP belong to you.",
    },
    {
      q: "Can you take over an app someone else built?",
      a: "Yes. We review the code and the release setup first, then tell you what state it is in and what we recommend.",
    },
  ],
};

export default service;
