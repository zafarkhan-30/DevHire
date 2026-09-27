import type { TechData } from "@/content/types";

const data: TechData = {
  slug: "mobile-developers",
  name: "Mobile",
  role: "Mobile Developers",
  category: "mobile",
  meta: {
    title: "Hire Mobile Developers",
    description:
      "Hire iOS, Android and cross-platform developers who work in your repository and ship to the stores. Interview first, month-to-month terms.",
  },
  hook: "A mobile release is hard to take back, so gaps in platform experience show up in front of your users and in your store reviews.",
  focus: "Consumer Apps, Field Tools & Connected Devices",
  heroText:
    "iOS, Android and cross-platform engineers who have taken apps through store review, dealt with weak networks and older devices, and kept releases steady after launch.",
  heroBullets: [
    "Swift, Kotlin, Flutter and React Native experience",
    "Used to signing, store review and staged rollouts",
    "Commits to your repository and follows your release process",
    "You speak to the developer before you sign anything",
  ],
  build: [
    {
      label: "Consumer Apps",
      icon: "smartphone",
      text: "Onboarding, feeds, payments and push notifications built to feel native on each platform.",
      stack: ["Swift", "SwiftUI", "Kotlin", "Jetpack Compose"],
      outcome: "The app behaves the way users of each platform expect, so the first session feels familiar.",
    },
    {
      label: "Cross-Platform Products",
      icon: "layers",
      text: "One codebase for iOS and Android where the product is mostly forms, lists and content.",
      stack: ["Flutter", "Dart", "React Native", "TypeScript"],
      outcome: "Both platforms ship from the same branch, and features arrive on each at the same time.",
    },
    {
      label: "Offline-First Field Apps",
      icon: "truck",
      text: "Inspection, delivery and sales apps that keep working without signal and sync when the connection returns.",
      stack: ["Kotlin", "Room", "SQLite", "WorkManager"],
      outcome: "Field staff finish the job on site instead of typing up notes later.",
    },
    {
      label: "Connected Device Apps",
      icon: "network",
      text: "Companion apps that pair with hardware over Bluetooth Low Energy and recover from dropped connections.",
      stack: ["Swift", "Core Bluetooth", "Kotlin", "MQTT"],
      outcome: "Pairing and reconnecting happen inside the app, without a trip to system settings.",
    },
    {
      label: "App Rewrites and Migrations",
      icon: "refresh",
      text: "Moving Objective-C, Java or an ageing hybrid app to a current stack screen by screen.",
      stack: ["Swift", "Kotlin", "Fastlane", "Firebase Crashlytics"],
      outcome: "Users keep one app in the store while the code underneath is replaced.",
    },
  ],
  fact: {
    text: "Apple and Google each publish review guidelines and policies that every app must meet before it is listed in their stores.",
    source: "App Store Review Guidelines and Google Play Developer Policy Center",
  },
  skills: [
    {
      title: "Native iOS",
      text: "Swift with SwiftUI and UIKit, including the older patterns still found in most production apps.",
      chips: ["Swift", "SwiftUI", "UIKit"],
    },
    {
      title: "Native Android",
      text: "Kotlin, coroutines and Jetpack libraries, with layouts that hold up across screen sizes.",
      chips: ["Kotlin", "Jetpack Compose", "Coroutines"],
    },
    {
      title: "Cross-platform frameworks",
      text: "Flutter and React Native, plus the native modules needed when a plugin does not exist.",
      chips: ["Flutter", "React Native", "Expo"],
    },
    {
      title: "App architecture",
      text: "Clear layers between screens, domain logic and data, so each feature can be tested on its own.",
      chips: ["MVVM", "Bloc", "Clean Architecture"],
    },
    {
      title: "Offline storage and sync",
      text: "Local databases, background sync and conflict rules for users who move in and out of coverage.",
      chips: ["SQLite", "Room", "Core Data"],
    },
    {
      title: "API integration",
      text: "REST and GraphQL clients with token refresh, retries and clear error states.",
      chips: ["REST", "GraphQL", "OAuth 2.0"],
    },
    {
      title: "Testing and release",
      text: "Unit and UI tests, automated builds, signing and staged rollouts through both stores.",
      chips: ["XCTest", "Espresso", "Fastlane"],
    },
    {
      title: "Performance and monitoring",
      text: "Start-up time, scrolling, memory and crash reports tracked from one release to the next.",
      chips: ["Instruments", "Android Profiler", "Crashlytics"],
    },
  ],
  versions: [
    { version: "iPhone SDK", year: "2008", tag: "App Store", text: "Apple released a public SDK and opened the App Store to third-party apps." },
    { version: "Android 1.0", year: "2008", tag: "Android", text: "The first commercial Android release shipped, along with its own app marketplace." },
    { version: "Swift", year: "2014", tag: "New language", text: "Apple introduced Swift as a modern alternative to Objective-C." },
    { version: "React Native", year: "2015", tag: "Cross-platform", text: "Facebook open-sourced React Native for building native apps with React." },
    { version: "Flutter 1.0", year: "2018", tag: "Cross-platform", text: "Google released the first stable version of Flutter." },
    { version: "Jetpack Compose 1.0", year: "2021", tag: "Declarative UI", text: "Android gained a stable declarative UI toolkit written in Kotlin." },
  ],
  chooseWhen: [
    { title: "People will use it every day", text: "Frequent use justifies a home screen icon, push notifications and a faster start." },
    { title: "You need device hardware", text: "Camera, Bluetooth, location and biometrics are more dependable through native APIs." },
    { title: "The app must work offline", text: "Local storage and background sync are well supported on both platforms." },
    { title: "iOS and Android must launch together", text: "A cross-platform framework lets one team serve both stores from a shared codebase." },
  ],
  chooseNot: [
    { title: "People will use it once or rarely", text: "A responsive website avoids the install step and the store review." },
    { title: "The content is mostly pages and articles", text: "A mobile-friendly site costs less to build and is easier to update." },
    { title: "You need to release many times a day", text: "Store review adds a wait to each release. A web app is live as soon as you deploy." },
    { title: "The idea is still unproven", text: "Test demand with a web prototype before paying for two store listings." },
  ],
  whyUs: [
    { title: "Matched by platform", text: "We shortlist for what you are building: native iOS, native Android or a named cross-platform framework." },
    { title: "Screened on a working app", text: "Candidates read, review and extend an existing mobile codebase instead of solving puzzles." },
    { title: "Interview before contract", text: "You talk to the developer and look at their code before anything is signed." },
    { title: "Dedicated to your product", text: "A developer works for one client. They are not shared across accounts." },
    { title: "Easy to change course", text: "Terms run month to month with no exit fee, and we replace the developer if the fit is wrong." },
  ],
  faqs: [
    {
      q: "Should we build native or cross-platform?",
      a: "It depends on the product. Heavy use of device hardware, complex animation or platform-specific design points to native. Forms, lists and content usually suit Flutter or React Native. We can talk it through before you shortlist.",
    },
    {
      q: "Can one developer cover both iOS and Android?",
      a: "With Flutter or React Native, yes for most features. For two native codebases, most teams are better served by one specialist per platform.",
    },
    {
      q: "Who publishes the app to the stores?",
      a: "The app is published under your own Apple and Google developer accounts. The developer prepares builds and submissions through the access you grant.",
    },
    {
      q: "Can the developer take over an app someone else built?",
      a: "Yes. They start by reading the code, the crash reports and the release history, then agree a plan with you before changing anything.",
    },
    {
      q: "Who owns the source code?",
      a: "You do. The code sits in your repository and all code and IP belong to you. An NDA is signed before the developer gets access.",
    },
    {
      q: "What if the developer is not the right fit?",
      a: "Tell us and we replace them. Terms are month to month and there is no exit fee.",
    },
  ],
};

export default data;
