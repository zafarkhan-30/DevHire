import type { TechData } from "@/content/types";

const data: TechData = {
  slug: "flutter-developers",
  name: "Flutter",
  role: "Flutter Developers",
  category: "mobile",
  meta: {
    title: "Hire Flutter Developers",
    description:
      "Hire Flutter developers for branded apps on iOS, Android, web and desktop. Interview the developer first. Month-to-month terms and you own the IP.",
  },
  hook: "Keeping two native apps visually identical is slow work, and the designs drift apart a little with every release.",
  focus: "Branded Apps, MVPs & Multi-Platform Products",
  heroText:
    "Flutter engineers who build custom interfaces in Dart and keep them consistent on every screen size. They structure state carefully, so the app stays maintainable after the first release.",
  heroBullets: [
    "Dart with sound null safety",
    "Bloc, Riverpod or Provider, matched to your project",
    "Platform channels for native features",
    "You approve the developer after your own interview",
  ],
  build: [
    {
      label: "Branded Consumer Apps",
      icon: "smartphone",
      text: "Custom-designed interfaces with animation and theming that follow the brand, not the platform defaults.",
      stack: ["Flutter", "Dart", "Riverpod", "Rive"],
      outcome: "The app looks the same on iOS and Android, as the designer drew it.",
    },
    {
      label: "Startup MVPs",
      icon: "rocket",
      text: "A first version with sign-in, core screens, analytics and a managed backend, built to be extended later.",
      stack: ["Flutter", "Firebase Authentication", "Cloud Firestore", "Codemagic"],
      outcome: "Founders test the idea with real users on both platforms from a single build effort.",
    },
    {
      label: "Finance and Payment Apps",
      icon: "credit",
      text: "Account views, transfers and card management with biometric sign-in and encrypted storage on the device.",
      stack: ["Flutter", "Bloc", "local_auth", "flutter_secure_storage"],
      outcome: "Sensitive actions are protected and the sign-in step stays quick.",
    },
    {
      label: "Offline Field Apps",
      icon: "truck",
      text: "Data capture for surveys, deliveries and inspections, stored locally and synced in the background.",
      stack: ["Flutter", "Dart", "Drift", "SQLite"],
      outcome: "Records collected without a signal reach the server once the device reconnects.",
    },
    {
      label: "Mobile, Web and Desktop",
      icon: "monitor",
      text: "A companion web or desktop build that shares business logic and most of the interface with the mobile app.",
      stack: ["Flutter", "Dart", "go_router", "Responsive Layouts"],
      outcome: "A change to a shared screen is made once and appears on every platform.",
    },
  ],
  fact: {
    text: "Flutter is an open-source framework from Google for building apps for mobile, web and desktop from a single codebase.",
    source: "Flutter official documentation",
  },
  skills: [
    {
      title: "Dart",
      text: "Null safety, async programming and isolates for work that must stay off the main thread.",
      chips: ["Null Safety", "Futures and Streams", "Isolates"],
    },
    {
      title: "Widgets and layout",
      text: "Small, composable widgets and layouts that adapt to phones, tablets and wide screens.",
      chips: ["Widgets", "Slivers", "Adaptive Layout"],
    },
    {
      title: "State management",
      text: "A single, consistent pattern across the app, with business logic kept out of the widget tree.",
      chips: ["Bloc", "Riverpod", "Provider"],
    },
    {
      title: "Native integration",
      text: "Platform channels and plugins for features that need Swift or Kotlin underneath.",
      chips: ["Platform Channels", "Pigeon", "Plugins"],
    },
    {
      title: "Networking and storage",
      text: "Typed API clients, local databases and caching with clear handling of failed requests.",
      chips: ["Dio", "Drift", "Firebase"],
    },
    {
      title: "Animation and custom drawing",
      text: "Implicit and explicit animations, plus custom painting when no standard widget fits the design.",
      chips: ["Animations", "CustomPainter", "Rive"],
    },
    {
      title: "Testing",
      text: "Unit, widget and integration tests, with golden tests to catch visual changes.",
      chips: ["Widget Tests", "integration_test", "Golden Tests"],
    },
    {
      title: "Build and release",
      text: "Flavours for each environment, signed builds and automated delivery to both stores.",
      chips: ["Flavors", "Fastlane", "Codemagic"],
    },
  ],
  versions: [
    { version: "Flutter 1.0", year: "2018", tag: "First stable", text: "The first stable release, targeting iOS and Android." },
    { version: "Flutter 2", year: "2021", tag: "Web and null safety", text: "Web support reached the stable channel, and sound null safety arrived in Dart." },
    { version: "Flutter 3", year: "2022", tag: "Six platforms", text: "Stable macOS and Linux support completed coverage of mobile, web and desktop." },
    { version: "Flutter 3.10", year: "2023", tag: "Dart 3", text: "Shipped with Dart 3, and the Impeller renderer became the default on iOS." },
    { version: "Flutter 3.16", year: "2023", tag: "Material 3", text: "Material 3 became the default design language for new apps." },
  ],
  chooseWhen: [
    { title: "The design is custom and must match everywhere", text: "Flutter draws its own interface, so screens look the same across devices." },
    { title: "One team should cover both stores", text: "A single codebase and a single language reduce coordination between platforms." },
    { title: "You are building a first version", text: "Hot reload and a large widget set shorten the loop between an idea and a working screen." },
    { title: "Web or desktop versions are on the roadmap", text: "The same project can target additional platforms when you need them." },
  ],
  chooseNot: [
    { title: "The app should look like a stock platform app", text: "If native controls and the newest OS styling matter most, native development is closer to the source." },
    { title: "The web version depends on search traffic", text: "Flutter web suits applications. Content pages that must rank are better built with a web framework." },
    { title: "Your team is invested in React", text: "React Native lets a JavaScript team reuse its skills, where Flutter means learning Dart." },
    { title: "Download size is tightly limited", text: "Flutter apps include their own rendering engine, which adds to the install size." },
  ],
  whyUs: [
    { title: "Assessed on structure", text: "Candidates are asked to extend an existing Flutter app, which shows how they organise state and widgets." },
    { title: "Your interview, your decision", text: "You meet the developer and review their work before any contract is signed." },
    { title: "Embedded in your team", text: "The developer uses your repository, your design files and your release pipeline. An NDA is in place before code access." },
    { title: "No split attention", text: "Each developer works with a single client." },
    { title: "Short commitment", text: "Terms are month to month with no exit fee, and a poor fit is replaced." },
  ],
  faqs: [
    {
      q: "Which state management approach do your developers use?",
      a: "Developers have experience with Bloc, Riverpod and Provider. They follow whichever your project already uses, and for a new app they will recommend one and explain why.",
    },
    {
      q: "What if a feature has no Flutter plugin?",
      a: "The developer writes a platform channel to the native API. If your app needs a lot of this, tell us so we match for stronger Swift or Kotlin experience.",
    },
    {
      q: "Can the same developer build the web version?",
      a: "Yes, for application-style interfaces. For public pages that rely on search traffic, we recommend a web framework alongside the Flutter app.",
    },
    {
      q: "How do you assess Flutter developers?",
      a: "Assessment includes a code review task on an existing Flutter project, a technical interview on Dart, state and rendering, and a communication check.",
    },
    {
      q: "Who owns the source code and store listings?",
      a: "You do. Code and IP are assigned to you in the contract, and releases go out through your own store accounts.",
    },
    {
      q: "Can we change team size later?",
      a: "Yes. Engagements run month to month, so you can add or remove developers as the roadmap changes.",
    },
  ],
};

export default data;
