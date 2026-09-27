import type { TechData } from "@/content/types";

const data: TechData = {
  slug: "python-developers",
  name: "Python",
  role: "Python Developers",
  category: "backend",
  meta: {
    title: "Hire Python Developers",
    description:
      "Hire Python developers for APIs, data pipelines and machine learning services. They work in your repository. Interview first, month-to-month terms.",
  },
  hook: "Python projects slow down when prototype code reaches production and nobody has time to make it dependable.",
  focus: "APIs, Data Pipelines & Machine Learning Services",
  heroText:
    "Python engineers who write typed, tested services and pipelines, and who can turn a notebook into something that runs every day without supervision.",
  heroBullets: [
    "Django, FastAPI and Flask in production",
    "Type hints, linting and tests as routine",
    "Comfortable with pandas, SQL and task queues",
    "Interview the developer before any contract",
  ],
  build: [
    {
      label: "Web Applications and APIs",
      icon: "globe",
      text: "Admin-heavy products and public APIs with authentication, permissions and clear data models.",
      stack: ["Django", "Django REST Framework", "PostgreSQL", "Celery"],
      outcome: "Business rules live in one tested place instead of being spread across scripts.",
    },
    {
      label: "Data Pipelines",
      icon: "database",
      text: "Scheduled extraction, cleaning and loading jobs with checks that catch bad data early.",
      stack: ["Python", "Apache Airflow", "pandas", "dbt"],
      outcome: "Reports are built from data that was validated before anyone read it.",
    },
    {
      label: "Machine Learning Services",
      icon: "brain",
      text: "Trained models wrapped in versioned APIs, with monitoring for drift and latency.",
      stack: ["FastAPI", "scikit-learn", "PyTorch", "Docker"],
      outcome: "A model moves from a notebook to an endpoint that other systems can call.",
    },
    {
      label: "Automation and Integrations",
      icon: "settings",
      text: "Scripts and services that connect internal tools, file drops and third-party APIs.",
      stack: ["Python", "httpx", "Pydantic", "AWS Lambda"],
      outcome: "Copy-and-paste work is replaced by jobs that run on a schedule and report failures.",
    },
    {
      label: "Legacy Python Upgrades",
      icon: "refresh",
      text: "Moving Python 2 code or unmaintained framework versions to supported releases, with tests added first.",
      stack: ["Python 3", "pytest", "mypy", "Ruff"],
      outcome: "The codebase returns to versions that still receive security fixes.",
    },
  ],
  fact: {
    text: "Python has been among the most commonly used programming languages in the Stack Overflow Developer Survey for several years running.",
    source: "Stack Overflow Developer Survey",
  },
  skills: [
    {
      title: "Core language",
      text: "Idiomatic Python, including generators, context managers and the data model.",
      chips: ["Python 3", "Dataclasses", "Generators"],
    },
    {
      title: "Type hints and code quality",
      text: "Annotated code checked in CI, so a wrong argument is caught before it runs.",
      chips: ["mypy", "Ruff", "Pydantic"],
    },
    {
      title: "Web frameworks",
      text: "Django for full products, FastAPI for typed async APIs, Flask where a small service is enough.",
      chips: ["Django", "FastAPI", "Flask"],
    },
    {
      title: "Databases and ORMs",
      text: "Schema design, migrations and query tuning, with raw SQL when the ORM hides too much.",
      chips: ["PostgreSQL", "SQLAlchemy", "Alembic"],
    },
    {
      title: "Data tooling",
      text: "Transforming and validating tabular data, and scheduling the jobs that depend on it.",
      chips: ["pandas", "NumPy", "Apache Airflow"],
    },
    {
      title: "Async and background work",
      text: "Async I/O for network-bound services and task queues for work that should not block a request.",
      chips: ["asyncio", "Celery", "Redis"],
    },
    {
      title: "Testing",
      text: "Fixtures, parametrised cases and property-based tests for logic with many edge cases.",
      chips: ["pytest", "Hypothesis", "tox"],
    },
    {
      title: "Packaging and deployment",
      text: "Pinned dependencies, reproducible builds and container images that start the same way everywhere.",
      chips: ["Docker", "Poetry", "GitHub Actions"],
    },
  ],
  versions: [
    { version: "Python 0.9.0", year: "1991", tag: "First release", text: "Guido van Rossum published the first public version." },
    { version: "Python 2.0", year: "2000", tag: "Comprehensions", text: "Added list comprehensions and a garbage collector that handles reference cycles." },
    { version: "Python 3.0", year: "2008", tag: "Clean break", text: "A backward-incompatible release that made text Unicode by default." },
    { version: "Python 3.5", year: "2015", tag: "Async and types", text: "Introduced async and await syntax and the typing module for type hints." },
    { version: "Python 3.10", year: "2021", tag: "Pattern matching", text: "Structural pattern matching with match and case statements." },
    { version: "Python 3.13", year: "2024", tag: "Free threading", text: "Added an experimental build without the global interpreter lock and an experimental JIT compiler." },
  ],
  chooseWhen: [
    { title: "Data is central to the product", text: "Analysis, pipelines and models share one language and one set of libraries." },
    { title: "You want a first version soon", text: "Readable syntax and full-featured frameworks shorten the path to a working product." },
    { title: "The back office matters", text: "The Django admin gives operations staff a usable interface with little extra work." },
    { title: "Many systems need joining together", text: "Python has client libraries for most APIs, databases and file formats." },
  ],
  chooseNot: [
    { title: "You need the lowest latency", text: "Interpreted code is slower for CPU-bound work. Go, Rust or Java are better suited." },
    { title: "The work is heavy parallel computation on threads", text: "The global interpreter lock limits threads in the standard build. Processes or another language may be needed." },
    { title: "The target is a mobile or browser client", text: "Python is not a practical choice for those front ends." },
    { title: "You want a single small binary", text: "A Python deployment carries an interpreter and its dependencies. Go or Rust package more simply." },
  ],
  whyUs: [
    { title: "Shortlisted by discipline", text: "Web back end, data engineering and machine learning are different jobs. We match to the one you need." },
    { title: "Assessed on production habits", text: "Candidates work on an existing Python codebase, so we see how they test, type and review." },
    { title: "Your decision", text: "You interview the developer before any contract and decide whether to go ahead." },
    { title: "Part of your team", text: "The developer works in your repository and tools, and on your product only." },
    { title: "Simple terms", text: "Month to month, no exit fee, and a replacement if the fit is wrong." },
  ],
  faqs: [
    {
      q: "How are Python developers assessed?",
      a: "They review and extend an existing Python project, then walk through their decisions in a live technical interview. Communication is checked as well.",
    },
    {
      q: "Do you have developers for data work as well as web work?",
      a: "Yes. Tell us whether the role is web back end, data engineering or machine learning, because the skills differ. We shortlist for the one you need.",
    },
    {
      q: "Django or FastAPI: which should we use?",
      a: "Django suits products with many models, an admin and server-rendered pages. FastAPI suits typed async APIs and model serving. Developers can work with either.",
    },
    {
      q: "Can the developer upgrade an old Python codebase?",
      a: "Yes. The usual approach is to add tests around current behaviour, upgrade dependencies in small steps, and move to a supported Python release.",
    },
    {
      q: "Who owns the work?",
      a: "You do. All code and IP belong to you, and an NDA is signed before the developer is given access.",
    },
    {
      q: "How long are we committed for?",
      a: "Engagements run month to month. There is no exit fee.",
    },
  ],
};

export default data;
