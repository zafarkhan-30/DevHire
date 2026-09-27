import type { TechData } from "@/content/types";

const data: TechData = {
  slug: "android-developers",
  name: "Android",
  role: "Android Developers",
  category: "mobile",
  meta: {
    title: "Hire Android Developers",
    description:
      "Hire Android developers skilled in Kotlin and Jetpack Compose. They work in your repository, under NDA, on month-to-month terms with no exit fee.",
  },
  hook: "Android apps must behave across a wide spread of devices and OS versions, and bugs that appear on only some of them are the hardest to find.",
  focus: "Consumer Apps, Enterprise Tools & Device Integrations",
  heroText:
    "Android engineers who write Kotlin, build interfaces in Jetpack Compose and still read the older Java and XML code that many apps carry. They test on real device ranges, not a single emulator.",
  heroBullets: [
    "Kotlin, coroutines and Flow",
    "Jetpack Compose and the View system",
    "Google Play release and review experience",
    "You interview the developer ahead of any contract",
  ],
  build: [
    {
      label: "Consumer Apps",
      icon: "smartphone",
      text: "Apps with onboarding, feeds, search and notifications that follow Material Design and adapt to phones, tablets and foldables.",
      stack: ["Kotlin", "Jetpack Compose", "Hilt", "Room"],
      outcome: "The app feels at home on Android and holds up on older hardware.",
    },
    {
      label: "Enterprise and Field Tools",
      icon: "briefcase",
      text: "Apps for staff devices with offline data capture, scheduled sync and sign-in through the company identity provider.",
      stack: ["Kotlin", "WorkManager", "Room", "Retrofit"],
      outcome: "Employees record work on site and the back office sees it without re-keying.",
    },
    {
      label: "Payments and Subscriptions",
      icon: "credit",
      text: "In-app purchases, subscriptions and wallet payments with server-side verification of each transaction.",
      stack: ["Kotlin", "Play Billing Library", "Google Pay", "Firebase"],
      outcome: "Purchases are recorded correctly and restored when a user changes device.",
    },
    {
      label: "Device and Hardware Integration",
      icon: "network",
      text: "Connections to sensors, scanners, printers and wearables over Bluetooth, NFC or USB, plus camera-based capture.",
      stack: ["Bluetooth Low Energy", "NFC", "CameraX", "Kotlin"],
      outcome: "The phone becomes a dependable controller for the equipment your business uses.",
    },
    {
      label: "App Modernisation",
      icon: "refresh",
      text: "Converting Java to Kotlin and XML layouts to Compose screen by screen, while raising the target API level to meet store requirements.",
      stack: ["Kotlin", "Jetpack Compose", "Gradle", "Espresso"],
      outcome: "The app stays publishable on Google Play and new features take less code.",
    },
  ],
  fact: {
    text: "Google describes Android development as Kotlin-first and recommends Kotlin for new Android apps.",
    source: "Android Developers documentation",
  },
  skills: [
    {
      title: "Kotlin",
      text: "Idiomatic Kotlin with coroutines and Flow for background work and streams of data.",
      chips: ["Kotlin", "Coroutines", "Flow"],
    },
    {
      title: "Jetpack Compose",
      text: "Declarative screens with state hoisted properly, and interop with existing Views where a full rewrite is not sensible.",
      chips: ["Compose", "Material 3", "View Interop"],
    },
    {
      title: "App architecture",
      text: "Separate UI, domain and data layers with dependency injection, following the published architecture guidance.",
      chips: ["MVVM", "Hilt", "Navigation"],
    },
    {
      title: "Local data and background work",
      text: "Databases, preferences and deferred jobs that survive process death and device restarts.",
      chips: ["Room", "DataStore", "WorkManager"],
    },
    {
      title: "Networking",
      text: "Typed API clients with retries, authentication and sensible behaviour on poor connections.",
      chips: ["Retrofit", "OkHttp", "Ktor Client"],
    },
    {
      title: "Testing",
      text: "Unit tests for view models and repositories, and UI tests for the screens that carry the most risk.",
      chips: ["JUnit", "Espresso", "Compose UI Test"],
    },
    {
      title: "Stability and speed",
      text: "Crash reports, memory leaks and slow start-up investigated with profiling tools and fixed at the cause.",
      chips: ["Android Profiler", "LeakCanary", "Baseline Profiles"],
    },
    {
      title: "Build and release",
      text: "Gradle configuration, build variants, signing and staged rollouts through the Play Console.",
      chips: ["Gradle", "Play Console", "Crashlytics"],
    },
  ],
  versions: [
    { version: "Android 1.0", year: "2008", tag: "First release", text: "The first commercial version of the platform." },
    { version: "Android 5.0", year: "2014", tag: "Material Design", text: "Introduced Material Design and made ART the default runtime." },
    { version: "Kotlin on Android", year: "2017", tag: "Official support", text: "Google announced official support for Kotlin as an Android language." },
    { version: "Android Jetpack", year: "2018", tag: "Libraries", text: "A collection of libraries for architecture, navigation and background work." },
    { version: "Kotlin-first", year: "2019", tag: "Direction", text: "Google announced that Android development would be increasingly Kotlin-first." },
    { version: "Compose 1.0", year: "2021", tag: "Declarative UI", text: "Jetpack Compose reached its first stable release." },
  ],
  chooseWhen: [
    { title: "Most of your users are on Android", text: "A native app gives that audience the best performance and platform fit." },
    { title: "The app works closely with hardware", text: "Bluetooth, NFC, sensors and background services are most dependable through native APIs." },
    { title: "You need new platform features early", text: "Native code can adopt new Android APIs as soon as they are released." },
    { title: "Devices are managed by your company", text: "Kiosk modes, dedicated devices and custom hardware are well supported on Android." },
  ],
  chooseNot: [
    { title: "You need iOS at the same time on a small budget", text: "A cross-platform framework covers both stores with one team." },
    { title: "The product is mainly content", text: "A responsive website or progressive web app may reach the same users with less upkeep." },
    { title: "The idea is still unproven", text: "A web prototype is quicker to change while you are learning what users want." },
  ],
  whyUs: [
    { title: "Tested on inherited code", text: "Candidates review and change an existing Android project, because few apps are brand new." },
    { title: "You decide after meeting them", text: "You interview the developer first. The contract follows only if you want to proceed." },
    { title: "Your accounts stay yours", text: "The developer commits to your repository and releases through your Play Console. An NDA is signed before code access." },
    { title: "Focused on a single client", text: "Your developer is not moved between projects." },
    { title: "No lock-in", text: "Month-to-month terms, no exit fee, and a replacement if the fit is wrong." },
  ],
  faqs: [
    {
      q: "Do your Android developers work in Kotlin or Java?",
      a: "Kotlin is the default for new work. Developers also maintain Java code, and many have converted Java projects to Kotlin in stages.",
    },
    {
      q: "Our app uses XML layouts. Do we have to move to Compose?",
      a: "No. Compose and the View system work together in one app. The developer can keep existing screens and use Compose for new ones if you choose.",
    },
    {
      q: "How do developers test across different devices?",
      a: "They combine emulators, physical devices and cloud device labs where you provide access. Tell us which devices matter most to your users.",
    },
    {
      q: "Will the developer manage Google Play releases?",
      a: "Yes. Developers prepare signed builds, manage testing tracks and staged rollouts in your Play Console. The account and listing remain yours.",
    },
    {
      q: "How are Android developers assessed?",
      a: "Candidates complete a review task on an existing Android codebase and a technical interview covering Kotlin, lifecycle and architecture. Communication is assessed as well.",
    },
    {
      q: "Does the code belong to us?",
      a: "Yes. All code and IP are assigned to you in the contract and stored in your repositories.",
    },
  ],
};

export default data;
