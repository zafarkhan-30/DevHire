import type { TechData } from "@/content/types";

const data: TechData = {
  slug: "react-native-developers",
  name: "React Native",
  role: "React Native Developers",
  category: "mobile",
  meta: {
    title: "Hire React Native Developers",
    description:
      "Hire React Native developers to ship iOS and Android from one codebase. Meet the developer before any contract. Month-to-month, no exit fee.",
  },
  hook: "Running separate iOS and Android teams means every feature is built, tested and argued over twice.",
  focus: "Consumer Apps, Field Tools & Shared Codebases",
  heroText:
    "React Native engineers who have taken apps through both stores. They write TypeScript for the shared code and can drop into Swift or Kotlin when a feature needs it.",
  heroBullets: [
    "Expo and bare React Native projects",
    "Native modules in Swift and Kotlin when required",
    "Has handled App Store and Google Play releases",
    "You interview the developer before anything is signed",
  ],
  build: [
    {
      label: "Consumer Apps",
      icon: "smartphone",
      text: "Sign-up, feeds, profiles and notifications with navigation that follows the conventions of each platform.",
      stack: ["React Native", "Expo", "React Navigation", "TypeScript"],
      outcome: "Both platforms receive the same feature in the same release.",
    },
    {
      label: "Commerce and Booking Apps",
      icon: "cart",
      text: "Catalogues, carts, payments and order tracking, with deep links that open the right screen from an email or advert.",
      stack: ["React Native", "Stripe", "TanStack Query", "Firebase Cloud Messaging"],
      outcome: "Customers go from a notification to a completed order in a few taps.",
    },
    {
      label: "Field and Offline Tools",
      icon: "truck",
      text: "Apps for drivers, inspectors and technicians that store work on the device and sync once a connection returns.",
      stack: ["React Native", "SQLite", "MMKV", "Background Tasks"],
      outcome: "Staff keep working in areas with poor signal and nothing is entered twice.",
    },
    {
      label: "Native Integrations",
      icon: "wrench",
      text: "Custom modules for Bluetooth devices, payment terminals or platform SDKs that have no ready-made package.",
      stack: ["Turbo Modules", "Swift", "Kotlin", "React Native"],
      outcome: "Hardware and vendor SDKs are usable from the shared JavaScript code.",
    },
    {
      label: "Upgrades and New Architecture",
      icon: "refresh",
      text: "Bringing an old project up to a current version, replacing abandoned packages and enabling the New Architecture.",
      stack: ["React Native", "Hermes", "Fabric", "Detox"],
      outcome: "The app builds with current Xcode and Android tooling and store submissions go through again.",
    },
  ],
  fact: {
    text: "React Native is an open-source framework from Meta that renders native platform views rather than web views.",
    source: "React Native official documentation",
  },
  skills: [
    {
      title: "Core React Native",
      text: "Layout with Flexbox, lists, gestures and platform-specific code paths, all typed.",
      chips: ["TypeScript", "Flexbox", "Hooks"],
    },
    {
      title: "Navigation and deep links",
      text: "Stacks, tabs and modals that behave as users expect, with links that open the correct screen from outside the app.",
      chips: ["React Navigation", "Expo Router", "Universal Links"],
    },
    {
      title: "Native modules",
      text: "Writing and maintaining the Swift and Kotlin code behind a JavaScript interface.",
      chips: ["Swift", "Kotlin", "Turbo Modules"],
    },
    {
      title: "Data and offline storage",
      text: "Server data cached on the device, with clear rules for what happens when requests fail.",
      chips: ["TanStack Query", "Redux Toolkit", "MMKV"],
    },
    {
      title: "Performance",
      text: "Smooth scrolling and animation on older phones, checked with a profiler and not by feel.",
      chips: ["Hermes", "Reanimated", "FlashList"],
    },
    {
      title: "Testing",
      text: "Unit and component tests for shared logic, plus automated runs on simulators for the main journeys.",
      chips: ["Jest", "React Native Testing Library", "Detox"],
    },
    {
      title: "Build and release",
      text: "Signing, build pipelines, beta distribution and store submission for both platforms.",
      chips: ["EAS Build", "Fastlane", "TestFlight"],
    },
    {
      title: "Notifications and updates",
      text: "Push notifications, in-app messaging and over-the-air JavaScript updates within store rules.",
      chips: ["Push Notifications", "EAS Update", "Firebase"],
    },
  ],
  versions: [
    { version: "React Native", year: "2015", tag: "Open-sourced", text: "Released publicly by Facebook, now Meta, first for iOS and then for Android." },
    { version: "0.60", year: "2019", tag: "Autolinking", text: "Native dependencies began linking automatically, and CocoaPods became the default on iOS." },
    { version: "0.64", year: "2021", tag: "Hermes on iOS", text: "The Hermes JavaScript engine became available on iOS as an opt-in." },
    { version: "0.68", year: "2022", tag: "Opt-in", text: "The New Architecture became available for apps to opt into." },
    { version: "0.70", year: "2022", tag: "Hermes default", text: "Hermes became the default JavaScript engine." },
    { version: "0.76", year: "2024", tag: "New Architecture", text: "The New Architecture was enabled by default for new projects." },
  ],
  chooseWhen: [
    { title: "Both platforms must launch together", text: "One codebase keeps features and release dates aligned across iOS and Android." },
    { title: "Your web team already knows React", text: "Components, hooks and TypeScript carry over, so existing staff can contribute." },
    { title: "The app is mostly screens, lists and forms", text: "Standard product interfaces are where shared code saves the most effort." },
    { title: "You want to ship small fixes between releases", text: "JavaScript changes can be delivered over the air, within the limits the stores allow." },
  ],
  chooseNot: [
    { title: "The app is a game or graphics-heavy", text: "A game engine or native graphics code handles demanding rendering better." },
    { title: "You depend on the newest platform features", text: "Widgets, watch apps and freshly released OS APIs are easier to reach from native code." },
    { title: "Only one platform is planned", text: "With a single target, a native app avoids the extra layer." },
  ],
  whyUs: [
    { title: "Screened on a real project", text: "Candidates review and extend an existing React Native app, which is closer to the job than a quiz." },
    { title: "Meet them first", text: "You interview the developer and ask about their past releases before any contract." },
    { title: "Part of your team", text: "The developer works in your repository, your build pipeline and your store accounts, under an NDA signed before code access." },
    { title: "One client per developer", text: "Your app has the developer's full working week." },
    { title: "Simple exit", text: "Month-to-month terms and no exit fee. If the fit is wrong, we find a replacement." },
  ],
  faqs: [
    {
      q: "Do your developers use Expo or bare React Native?",
      a: "Both. Tell us how your project is set up and we shortlist developers with that experience.",
    },
    {
      q: "Can a React Native developer write native code?",
      a: "Many can, to the level needed for native modules and build configuration. If your app has a large native portion, say so and we will match for stronger Swift or Kotlin skills.",
    },
    {
      q: "Will the developer handle store submissions?",
      a: "Yes. Developers prepare builds, manage signing and submit through your App Store Connect and Google Play accounts. The accounts remain yours.",
    },
    {
      q: "Can you help upgrade an old React Native app?",
      a: "Yes. The developer reviews the current version and dependencies first, then upgrades in steps with testing on both platforms.",
    },
    {
      q: "How are candidates assessed?",
      a: "Candidates complete a review task on an existing React Native project and a technical interview on navigation, performance and native integration. Communication is part of the assessment.",
    },
    {
      q: "Who owns the app and its code?",
      a: "You do. All code and IP are assigned to you by contract and committed to your repositories.",
    },
  ],
};

export default data;
