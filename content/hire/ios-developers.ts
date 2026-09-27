import type { TechData } from "@/content/types";

const data: TechData = {
  slug: "ios-developers",
  name: "iOS",
  role: "iOS Developers",
  category: "mobile",
  meta: {
    title: "Hire iOS Developers",
    description:
      "Hire iOS developers who write Swift and SwiftUI and know the App Store process. Interview before any contract. Month-to-month, you own the code.",
  },
  hook: "An iOS release can be held up or rejected in review when the team has not been through the App Store process before.",
  focus: "Consumer Apps, Subscriptions & Apple Ecosystem Features",
  heroText:
    "iOS engineers who write Swift, build with SwiftUI and UIKit, and know what App Review looks for. They treat accessibility and privacy rules as part of the build, not as a late fix.",
  heroBullets: [
    "Swift with async/await and structured concurrency",
    "SwiftUI for new screens, UIKit where it already exists",
    "TestFlight and App Store submission experience",
    "You talk to the developer before committing",
  ],
  build: [
    {
      label: "Consumer iPhone Apps",
      icon: "smartphone",
      text: "Apps with onboarding, feeds, search and notifications that follow Apple's interface guidelines and support Dynamic Type and dark mode.",
      stack: ["Swift", "SwiftUI", "SwiftData", "URLSession"],
      outcome: "The app behaves the way iPhone users expect from the first launch.",
    },
    {
      label: "Subscription Apps",
      icon: "credit",
      text: "Paywalls, trials, renewals and restore flows built on in-app purchase, with entitlement checks on the server.",
      stack: ["StoreKit 2", "Swift", "App Store Server API", "SwiftUI"],
      outcome: "Subscribers keep access across devices and billing states are handled correctly.",
    },
    {
      label: "Health and Wearable Apps",
      icon: "heart",
      text: "Apps that read and write health data with user consent, paired with a watch app for quick actions and tracking.",
      stack: ["HealthKit", "watchOS", "Swift", "Core Data"],
      outcome: "Users record activity from the wrist and see it in the phone app.",
    },
    {
      label: "Business Apps for iPad",
      icon: "briefcase",
      text: "Sales, inspection and point-of-sale tools with multi-column layouts, offline storage and managed distribution.",
      stack: ["Swift", "UIKit", "Core Data", "Apple Business Manager"],
      outcome: "Staff carry one tablet in place of paper forms and a laptop.",
    },
    {
      label: "Codebase Modernisation",
      icon: "refresh",
      text: "Moving Objective-C to Swift and UIKit screens to SwiftUI in stages, and replacing callback code with async functions.",
      stack: ["Swift", "Objective-C", "SwiftUI", "XCTest"],
      outcome: "The app builds cleanly on the current Xcode and is easier for new developers to read.",
    },
  ],
  fact: {
    text: "Swift is an open-source language. Its source code and its evolution process are published openly by the Swift project.",
    source: "Swift.org",
  },
  skills: [
    {
      title: "Swift",
      text: "Value types, protocols and generics used to make invalid states hard to represent.",
      chips: ["Swift", "Protocols", "Generics"],
    },
    {
      title: "Concurrency",
      text: "Async functions, tasks and actors, with attention to work that must happen on the main thread.",
      chips: ["async/await", "Actors", "Combine"],
    },
    {
      title: "SwiftUI",
      text: "Declarative views with clear state ownership, plus bridging to UIKit where a component needs it.",
      chips: ["SwiftUI", "Observation", "Navigation"],
    },
    {
      title: "UIKit",
      text: "View controllers, Auto Layout and collection views for the many apps that still depend on them.",
      chips: ["UIKit", "Auto Layout", "Collection Views"],
    },
    {
      title: "Persistence and security",
      text: "Local databases for app data and the keychain for credentials, with migrations planned ahead.",
      chips: ["Core Data", "SwiftData", "Keychain"],
    },
    {
      title: "Platform frameworks",
      text: "Notifications, widgets, maps and other system features integrated according to Apple's rules.",
      chips: ["Push Notifications", "WidgetKit", "MapKit"],
    },
    {
      title: "Testing",
      text: "Unit tests for logic and UI tests for key flows, run in the pipeline on every change.",
      chips: ["XCTest", "XCUITest", "Xcode Cloud"],
    },
    {
      title: "Release",
      text: "Certificates, provisioning, beta builds and store submission, including responses to review feedback.",
      chips: ["TestFlight", "App Store Connect", "Fastlane"],
    },
  ],
  versions: [
    { version: "iPhone SDK", year: "2008", tag: "App Store", text: "Apple opened the platform to third-party developers and launched the App Store." },
    { version: "Swift 1.0", year: "2014", tag: "New language", text: "Apple introduced Swift as a modern alternative to Objective-C." },
    { version: "Open-source Swift", year: "2015", tag: "Open source", text: "Swift was released as open source, with development moving to a public project." },
    { version: "SwiftUI", year: "2019", tag: "Declarative UI", text: "Apple's declarative UI framework was introduced alongside iOS 13." },
    { version: "Swift 5.5", year: "2021", tag: "Concurrency", text: "Added async/await and actors to the language." },
    { version: "Swift 6", year: "2024", tag: "Data-race safety", text: "An opt-in language mode that checks for data races at compile time." },
  ],
  chooseWhen: [
    { title: "Your audience is mainly on iPhone", text: "A native app gives those users the smoothest experience." },
    { title: "You want Apple platform features", text: "Widgets, watch apps, health data and wallet passes are most direct from native code." },
    { title: "Performance and polish are selling points", text: "Native rendering and system controls give fine control over scrolling, animation and input." },
    { title: "The app handles sensitive data", text: "Native access to the keychain and biometric sign-in makes careful handling simpler." },
  ],
  chooseNot: [
    { title: "You must launch on Android too with one small team", text: "A cross-platform framework covers both stores from a single codebase." },
    { title: "The product is mostly pages of content", text: "A responsive website avoids store review and reaches every device." },
    { title: "You need to change the product daily", text: "App releases pass through review. A web app can be updated whenever you choose." },
  ],
  whyUs: [
    { title: "Assessed on working code", text: "Candidates review and extend an existing iOS project, which shows how they handle code they did not write." },
    { title: "Meet before you sign", text: "You interview the developer and look at their past work. A contract follows only if you are happy." },
    { title: "You keep control", text: "The developer joins your repository and your App Store Connect team with the role you assign. An NDA comes before code access." },
    { title: "Working only for you", text: "Developers are assigned to a single client, so your app is their whole job." },
    { title: "Monthly terms", text: "No exit fee and no long contract. If the fit is wrong, we replace the developer." },
  ],
  faqs: [
    {
      q: "Do your iOS developers use SwiftUI or UIKit?",
      a: "Both. Most apps contain some of each, so developers are expected to read and write either. Tell us what your codebase uses.",
    },
    {
      q: "Can the developer maintain Objective-C code?",
      a: "Yes. Some developers have long Objective-C experience. Mention it in the brief so the shortlist includes them.",
    },
    {
      q: "Do we have to share our Apple Developer account?",
      a: "No credentials are shared. You add the developer to your team in App Store Connect with a role you choose, and the account and apps stay in your name.",
    },
    {
      q: "Will the developer deal with App Review?",
      a: "Yes. Developers prepare the submission, answer reviewer questions and make the changes needed if a build is rejected.",
    },
    {
      q: "How are iOS developers assessed?",
      a: "Candidates complete a review task on an existing iOS project and a technical interview on Swift, concurrency and app architecture. We also check communication.",
    },
    {
      q: "Is the code ours once it is written?",
      a: "Yes. Code and IP are assigned to you by contract and kept in your repositories.",
    },
  ],
};

export default data;
