import type { TechData } from "@/content/types";

const data: TechData = {
  slug: "rust-developers",
  name: "Rust",
  role: "Rust Developers",
  category: "backend",
  meta: {
    title: "Hire Rust Developers",
    description:
      "Hire Rust developers for systems software, fast services and WebAssembly. They work in your repository. Interview first, month-to-month terms.",
  },
  hook: "Memory bugs and unpredictable latency are expensive to chase, and few teams have someone who has shipped Rust in production.",
  focus: "Systems Software, Fast Services & WebAssembly Modules",
  heroText:
    "Rust engineers who understand ownership and lifetimes in practice, write async services with Tokio, and know when unsafe code is justified and how to contain it.",
  heroBullets: [
    "Async Rust with Tokio and the wider crate ecosystem",
    "Experience with FFI, profiling and benchmarks",
    "Works in your repository and review process",
    "You interview the developer before signing",
  ],
  build: [
    {
      label: "Performance-Critical Services",
      icon: "zap",
      text: "Network services where tail latency and memory use must stay predictable.",
      stack: ["Rust", "Tokio", "Axum", "PostgreSQL"],
      outcome: "There are no garbage collection pauses, and memory use stays steady under load.",
    },
    {
      label: "Systems and Infrastructure Software",
      icon: "server",
      text: "Proxies, storage components, agents and other software that sits close to the operating system.",
      stack: ["Rust", "Tokio", "tonic", "Linux"],
      outcome: "Whole classes of memory errors are rejected at compile time.",
    },
    {
      label: "WebAssembly Modules",
      icon: "globe",
      text: "Compute-heavy logic compiled to WebAssembly for the browser or for sandboxed plugins.",
      stack: ["Rust", "WebAssembly", "wasm-bindgen", "wasm-pack"],
      outcome: "Heavy work runs in the browser instead of waiting on a server round trip.",
    },
    {
      label: "Embedded Firmware",
      icon: "settings",
      text: "Firmware for microcontrollers, written without the standard library or heap allocation.",
      stack: ["Rust", "no_std", "Embassy", "embedded-hal"],
      outcome: "Hardware access is type-checked, so many wiring mistakes fail at build time.",
    },
    {
      label: "Native Extensions and Rewrites",
      icon: "refresh",
      text: "Replacing a hot path in a Python, Node.js or C++ system with a Rust library behind the same interface.",
      stack: ["Rust", "PyO3", "napi-rs", "cxx"],
      outcome: "The slow part gets faster while the surrounding application stays as it is.",
    },
  ],
  fact: {
    text: "Rust has been the most admired language in the Stack Overflow Developer Survey for several years running.",
    source: "Stack Overflow Developer Survey",
  },
  skills: [
    {
      title: "Ownership and lifetimes",
      text: "Designing data structures and APIs that satisfy the borrow checker without cloning everything.",
      chips: ["Ownership", "Borrowing", "Lifetimes"],
    },
    {
      title: "Async Rust",
      text: "Tasks, cancellation and back-pressure on an async runtime, and knowing what must not block it.",
      chips: ["Tokio", "async/await", "Futures"],
    },
    {
      title: "Web services",
      text: "HTTP and gRPC services with typed extractors, middleware and structured errors.",
      chips: ["Axum", "Actix Web", "tonic"],
    },
    {
      title: "Data access and serialisation",
      text: "Queries checked at compile time and formats handled through derive macros.",
      chips: ["SQLx", "Diesel", "Serde"],
    },
    {
      title: "Unsafe code and FFI",
      text: "Small, documented unsafe blocks behind safe interfaces, and bindings to existing C libraries.",
      chips: ["FFI", "bindgen", "Miri"],
    },
    {
      title: "Testing and benchmarking",
      text: "Unit and integration tests, property-based tests and benchmarks that guard against regressions.",
      chips: ["cargo test", "proptest", "Criterion"],
    },
    {
      title: "Tooling",
      text: "Workspaces, feature flags, lints and formatting enforced in CI.",
      chips: ["Cargo", "Clippy", "rustfmt"],
    },
    {
      title: "WebAssembly and embedded targets",
      text: "Building for the browser and for microcontrollers, where binary size and allocation matter.",
      chips: ["wasm-bindgen", "no_std", "embedded-hal"],
    },
  ],
  versions: [
    { version: "Rust 1.0", year: "2015", tag: "Stable", text: "First stable release, with a commitment to stability from that point on." },
    { version: "Rust 2018", year: "2018", tag: "Edition", text: "The 2018 edition brought module system changes and non-lexical lifetimes." },
    { version: "Rust 1.39", year: "2019", tag: "Async/await", text: "Async and await syntax became stable." },
    { version: "Rust 2021", year: "2021", tag: "Edition", text: "The 2021 edition added disjoint captures in closures and an updated prelude." },
    { version: "Rust 1.75", year: "2023", tag: "Async traits", text: "Async functions in traits became stable." },
    { version: "Rust 2024", year: "2025", tag: "Edition", text: "The 2024 edition was released with Rust 1.85." },
  ],
  chooseWhen: [
    { title: "Memory safety is a requirement", text: "The compiler prevents use-after-free and data races in safe code." },
    { title: "Latency must be predictable", text: "No garbage collector means no collection pauses." },
    { title: "You are replacing C or C++", text: "Rust interoperates through a C-compatible interface, so it can be introduced one module at a time." },
    { title: "Compute cost is a major line item", text: "Efficient binaries can do the same work with fewer resources." },
  ],
  chooseNot: [
    { title: "You need a first version fast", text: "Rust takes longer to learn and to write. Python, Node.js or Go reach a working product sooner." },
    { title: "The service is ordinary CRUD", text: "The gains rarely justify the extra effort for a standard business application." },
    { title: "Nobody in house can read it", text: "A single Rust service that only one person understands is a risk. Plan for shared knowledge." },
    { title: "Your key libraries live elsewhere", text: "Data science and some enterprise integrations are better served in Python or Java." },
  ],
  whyUs: [
    { title: "Production Rust, not tutorials", text: "Screening uses an existing Rust codebase, so we see how candidates handle lifetimes, errors and async in context." },
    { title: "You interview and decide", text: "You meet the developer and review their code before any contract is signed." },
    { title: "Working where you work", text: "The developer commits to your repository and follows your review and release process." },
    { title: "Focused on one client", text: "A developer is never divided between accounts." },
    { title: "Reversible decision", text: "You can stop at the end of any month without an exit fee. If the fit is wrong, we replace the developer." },
  ],
  faqs: [
    {
      q: "How do you screen Rust developers?",
      a: "Candidates review and extend an existing Rust project, discuss their choices in a live technical interview, and complete a communication check.",
    },
    {
      q: "Have the developers used Rust in production?",
      a: "We shortlist people who have shipped and maintained Rust, not only used it in side projects. You can confirm this yourself in the interview.",
    },
    {
      q: "Can Rust be added to an existing system gradually?",
      a: "Yes. A common first step is to move one hot path into a Rust library and call it from the existing application.",
    },
    {
      q: "Do we need a whole Rust team?",
      a: "No. Many teams start with one developer on one component. It helps if someone on your side reviews the code so that knowledge is shared.",
    },
    {
      q: "Who owns the code?",
      a: "You own all code and IP. An NDA is signed before code access, and work is committed to your repositories.",
    },
    {
      q: "What are the contract terms?",
      a: "Month to month, with no exit fee. If the fit is wrong, we replace the developer.",
    },
  ],
};

export default data;
