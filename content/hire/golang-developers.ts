import type { TechData } from "@/content/types";

const data: TechData = {
  slug: "golang-developers",
  name: "Go",
  role: "Golang Developers",
  category: "backend",
  meta: {
    title: "Hire Golang Developers",
    description:
      "Hire Go developers for cloud services, platform tooling and high-throughput APIs. They work in your repository. Month-to-month terms.",
  },
  hook: "Services under heavy traffic expose every shortcut, and engineers who understand concurrency and failure are rarely free when you need them.",
  focus: "Cloud Services, Platform Tooling & High-Throughput APIs",
  heroText:
    "Go engineers who write small, readable services, use goroutines and channels with care, and measure before they tune.",
  heroBullets: [
    "Standard library first, frameworks where needed",
    "gRPC, Kubernetes and container experience",
    "Works within your repository, CI and review process",
    "Talk to the developer before any contract",
  ],
  build: [
    {
      label: "High-Throughput APIs",
      icon: "zap",
      text: "HTTP and gRPC services that stay predictable under load, with timeouts and limits set on purpose.",
      stack: ["Go", "gRPC", "PostgreSQL", "Redis"],
      outcome: "Resource use is bounded, so behaviour under a traffic spike is known in advance.",
    },
    {
      label: "Platform and CLI Tooling",
      icon: "wrench",
      text: "Internal command-line tools, operators and automation shipped as single binaries.",
      stack: ["Go", "Cobra", "client-go", "Docker"],
      outcome: "Engineers install one file and run it, with no runtime to set up.",
    },
    {
      label: "Event and Stream Processing",
      icon: "network",
      text: "Consumers and workers that process messages in parallel, with retries and ordering handled.",
      stack: ["Go", "Kafka", "NATS", "Prometheus"],
      outcome: "Failed messages are visible and retried instead of silently dropped.",
    },
    {
      label: "Cloud-Native Microservices",
      icon: "cloud",
      text: "Containerised services with health checks, graceful shutdown and tracing.",
      stack: ["Go", "Kubernetes", "Helm", "OpenTelemetry"],
      outcome: "Deployments roll forward and back without cutting off requests in flight.",
    },
    {
      label: "Rewrites of Slow Services",
      icon: "refresh",
      text: "Replacing a bottleneck written in a scripting language with a Go service behind the same API.",
      stack: ["Go", "pprof", "gRPC", "PostgreSQL"],
      outcome: "Callers keep the same interface while the service behind it uses less compute.",
    },
  ],
  fact: {
    text: "Go 1 was released with a compatibility promise: programs written to the Go 1 specification are intended to keep compiling and running on later Go 1 releases.",
    source: "Go documentation, Go 1 and the Future of Go Programs",
  },
  skills: [
    {
      title: "Concurrency",
      text: "Goroutines, channels and context cancellation, checked with the race detector.",
      chips: ["Goroutines", "Channels", "context"],
    },
    {
      title: "Standard library",
      text: "HTTP servers, encoding and structured logging without reaching for a dependency first.",
      chips: ["net/http", "encoding/json", "log/slog"],
    },
    {
      title: "API design",
      text: "Schema-first services with generated clients and careful versioning.",
      chips: ["gRPC", "Protocol Buffers", "REST"],
    },
    {
      title: "Data stores",
      text: "Connection pooling, transactions and queries written in SQL and checked at build time.",
      chips: ["PostgreSQL", "pgx", "sqlc"],
    },
    {
      title: "Testing",
      text: "Table-driven tests, fuzzing and benchmarks using the built-in tooling.",
      chips: ["go test", "testify", "Fuzzing"],
    },
    {
      title: "Profiling",
      text: "CPU, memory and blocking profiles read before any optimisation is attempted.",
      chips: ["pprof", "Benchmarks", "Execution Tracer"],
    },
    {
      title: "Containers and orchestration",
      text: "Small images, sensible resource limits and manifests that match how the service behaves.",
      chips: ["Docker", "Kubernetes", "Helm"],
    },
    {
      title: "Observability",
      text: "Metrics, traces and logs wired in from the first commit, not after the first incident.",
      chips: ["Prometheus", "OpenTelemetry", "Grafana"],
    },
  ],
  versions: [
    { version: "Open source release", year: "2009", tag: "Announced", text: "Google published Go as an open source project." },
    { version: "Go 1.0", year: "2012", tag: "Stable", text: "First stable release, with a promise of compatibility for Go 1 programs." },
    { version: "Go 1.5", year: "2015", tag: "Self-hosted", text: "The compiler and runtime moved to Go, and the garbage collector became concurrent." },
    { version: "Go 1.11", year: "2018", tag: "Modules", text: "Introduced modules for dependency management." },
    { version: "Go 1.18", year: "2022", tag: "Generics", text: "Added generics, fuzzing in the standard toolchain and workspaces." },
    { version: "Go 1.22", year: "2024", tag: "Loop scoping", text: "Loop variables became per-iteration, and the standard HTTP router gained method and wildcard patterns." },
  ],
  chooseWhen: [
    { title: "You run many network services", text: "Go was designed for servers, with concurrency built into the language." },
    { title: "Deployment should be simple", text: "A Go program compiles to one binary that fits well in a small container." },
    { title: "You build platform tooling", text: "Much of the container ecosystem, including Docker and Kubernetes, is written in Go." },
    { title: "Code must stay readable as people change", text: "A small language and a standard formatter mean Go codebases look alike." },
  ],
  chooseNot: [
    { title: "The product is a CRUD app with a large admin", text: "Django, Rails or Laravel provide more out of the box." },
    { title: "You need data science libraries", text: "Python is far better served." },
    { title: "You cannot accept a garbage collector", text: "Go's collector is quick but still present. Rust or C++ fit strict memory control." },
    { title: "The team prefers rich abstractions", text: "Go is plain by design. Engineers who want an expressive type system may find it limiting." },
  ],
  whyUs: [
    { title: "Judged on working services", text: "Candidates review and extend an existing Go service, including its tests and error handling." },
    { title: "You pick the developer", text: "You interview each candidate and see their code before a contract exists." },
    { title: "Your repository and pipeline", text: "All work is done in your repository and tools, under your review rules." },
    { title: "One client per developer", text: "The developer is not split between accounts, so context is not lost." },
    { title: "Simple to adjust", text: "Month-to-month terms and no exit fee. We replace the developer if the fit is wrong." },
  ],
  faqs: [
    {
      q: "How do you screen Go developers?",
      a: "Screening is a review and extension exercise on an existing Go service, a live technical interview, and a check on communication.",
    },
    {
      q: "Do Go developers need a framework?",
      a: "Often not. The standard library covers HTTP servers well. Developers also use Gin, Echo or Chi when your codebase already does.",
    },
    {
      q: "Can they work with our Kubernetes setup?",
      a: "Yes, if that is part of the role. Tell us how you deploy and we shortlist people who have worked the same way.",
    },
    {
      q: "Can they rewrite an existing service in Go?",
      a: "Yes. The usual approach is to keep the public interface, run the old and new services side by side, and move traffic across in steps.",
    },
    {
      q: "Is an NDA signed?",
      a: "Yes, before the developer is given access to any code. You own all code and IP.",
    },
    {
      q: "How flexible is the contract?",
      a: "It runs month to month and there is no exit fee.",
    },
  ],
};

export default data;
