import type { TechData } from "@/content/types";

const data: TechData = {
  slug: "data-engineer",
  name: "Data Engineering",
  role: "Data Engineers",
  category: "data",
  meta: {
    title: "Hire Data Engineers",
    description:
      "Hire data engineers to build pipelines, lakehouses and streaming systems. They work in your cloud and repository. Month-to-month terms.",
  },
  hook: "Reports stop being trusted when the pipelines behind them fail silently and nobody can say where a number came from.",
  focus: "Pipelines, Lakehouses & Streaming Data",
  heroText:
    "Data engineers who build pipelines that can be rerun safely, model data so that analysts can use it, and add the checks that catch bad records before they reach a dashboard.",
  heroBullets: [
    "SQL and Python as working languages",
    "Batch and streaming pipelines run in production",
    "Data quality tests built into the pipeline",
    "You interview the engineer before any contract is signed",
  ],
  build: [
    {
      label: "Batch Data Pipelines",
      icon: "database",
      text: "Scheduled ingestion and transformation with retries, backfills and alerts when a run fails or arrives late.",
      stack: ["Apache Airflow", "dbt", "Python", "SQL"],
      outcome: "The morning numbers are there when people arrive, and someone is told when they are not.",
    },
    {
      label: "Lakehouse Platforms",
      icon: "layers",
      text: "Open table formats on object storage, giving warehouse-style tables and transactions over files you control.",
      stack: ["Apache Iceberg", "Delta Lake", "Apache Spark", "Trino"],
      outcome: "Several query engines read the same tables without copies being made.",
    },
    {
      label: "Streaming and Change Data Capture",
      icon: "zap",
      text: "Events and database changes delivered continuously to the systems that need them.",
      stack: ["Apache Kafka", "Debezium", "Apache Flink", "Kafka Connect"],
      outcome: "Downstream systems react to changes as they happen instead of waiting for a nightly load.",
    },
    {
      label: "Warehouse Modelling",
      icon: "chart",
      text: "Tested, documented models that turn raw tables into the facts and dimensions analysts query.",
      stack: ["dbt", "Snowflake", "BigQuery", "Amazon Redshift"],
      outcome: "Two analysts asking the same question get the same answer.",
    },
    {
      label: "Legacy ETL Migration",
      icon: "refresh",
      text: "Moving stored procedures, cron scripts and older ETL tools to version-controlled pipelines, checked against the old outputs.",
      stack: ["Apache Airflow", "dbt", "Python", "Great Expectations"],
      outcome: "The old jobs are switched off one at a time, each after its replacement has matched it.",
    },
  ],
  fact: {
    text: "Apache Kafka, Apache Spark, Apache Airflow and Apache Iceberg are open-source projects governed by the Apache Software Foundation.",
    source: "Apache Software Foundation",
  },
  skills: [
    {
      title: "SQL and data modelling",
      text: "Models that reflect how the business counts things, with grain and keys stated plainly.",
      chips: ["SQL", "Dimensional Modelling", "dbt"],
    },
    {
      title: "Python",
      text: "Readable, tested pipeline code, packaged so that it runs the same on a laptop and in production.",
      chips: ["Python", "PySpark", "pandas"],
    },
    {
      title: "Orchestration",
      text: "Dependencies, retries and backfills defined in code, with tasks that are safe to run twice.",
      chips: ["Apache Airflow", "Dagster", "Prefect"],
    },
    {
      title: "Distributed processing",
      text: "Partitioning, joins and file sizes tuned by reading query plans, not by adding machines.",
      chips: ["Apache Spark", "Trino", "Databricks"],
    },
    {
      title: "Streaming",
      text: "Topics, schemas and consumer groups designed for ordering, replay and late-arriving events.",
      chips: ["Apache Kafka", "Apache Flink", "Amazon Kinesis"],
    },
    {
      title: "Table formats and storage",
      text: "Schema evolution, compaction and snapshot retention managed so that tables stay fast and affordable.",
      chips: ["Apache Iceberg", "Delta Lake", "Parquet"],
    },
    {
      title: "Data quality",
      text: "Checks on freshness, volume and validity that stop a bad load before it spreads downstream.",
      chips: ["dbt Tests", "Great Expectations", "Data Contracts"],
    },
    {
      title: "Governance and access",
      text: "Personal data identified and masked, access granted by role and lineage recorded.",
      chips: ["Access Control", "Data Catalogue", "OpenLineage"],
    },
  ],
  versions: [
    { version: "Apache Hadoop", year: "2006", tag: "Distributed storage", text: "Hadoop made it practical to store and process large datasets on clusters of ordinary servers." },
    { version: "Apache Kafka", year: "2011", tag: "Event streams", text: "LinkedIn open-sourced Kafka, a distributed log for moving events between systems." },
    { version: "Apache Spark", year: "2014", tag: "In-memory processing", text: "Spark became a top-level Apache project and reached its 1.0 release." },
    { version: "Apache Airflow", year: "2015", tag: "Orchestration", text: "Airbnb open-sourced Airflow, which defines workflows as Python code." },
    { version: "Delta Lake", year: "2019", tag: "Table formats", text: "Databricks open-sourced Delta Lake, adding transactions to data stored in files." },
    { version: "Apache Iceberg", year: "2020", tag: "Open tables", text: "Iceberg, first built at Netflix, graduated to a top-level Apache project." },
  ],
  chooseWhen: [
    { title: "Reports disagree with each other", text: "Shared, tested models give every team the same definitions." },
    { title: "Analysts spend their time cleaning data", text: "An engineer moves that work into pipelines, so that it is done once and done the same way." },
    { title: "Data arrives from many systems", text: "Ingestion, matching and history need design when sources multiply." },
    { title: "You are preparing for machine learning or AI work", text: "Models depend on data that is complete, current and documented." },
  ],
  chooseNot: [
    { title: "Your data fits in one database", text: "If a few SQL queries answer your questions, a read replica and a reporting tool are enough." },
    { title: "You need analysis, not plumbing", text: "Questions about what the numbers mean belong to an analyst or a data scientist." },
    { title: "Nobody has decided what to measure", text: "Pipelines built before the questions are known tend to be rebuilt. Agree the metrics first." },
  ],
  whyUs: [
    { title: "Assessed on a real pipeline", text: "Candidates review existing pipeline code and a data model, then explain where it would fail and how they would fix it." },
    { title: "You interview the engineer", text: "You meet the person and test their reasoning on your own data problems before any contract." },
    { title: "Dedicated to your data", text: "The engineer works for a single client, so they learn your sources, your definitions and their quirks." },
    { title: "Inside your environment", text: "Pipelines are built in your cloud accounts and repositories, under the access you grant." },
    { title: "No long tie-in", text: "Month-to-month terms with no exit fee, and a replacement if the fit is wrong." },
  ],
  faqs: [
    {
      q: "Which platforms do your data engineers work with?",
      a: "Tell us your cloud, warehouse and orchestration tools. We shortlist engineers who have run those in production, and you confirm the match in the interview.",
    },
    {
      q: "Do we need streaming, or is batch enough?",
      a: "Batch is enough for most reporting. Streaming earns its cost when a decision has to be made within moments of an event. The engineer can review each use case and recommend one, with reasons.",
    },
    {
      q: "How is access to sensitive data handled?",
      a: "An NDA is signed before any access. The engineer works inside your environment with the permissions you grant, and you decide whether development uses masked or sample data.",
    },
    {
      q: "Can a data engineer also build dashboards?",
      a: "Many can build a basic dashboard, but their main work is the data underneath. If reporting design is the priority, tell us and we take it into account in the shortlist.",
    },
    {
      q: "Can the engineer take over pipelines someone else built?",
      a: "Yes. The usual start is to map what runs, what depends on it and what fails most often. Fixes and documentation follow in that order.",
    },
    {
      q: "Who owns the pipelines and models?",
      a: "You do. All code is written in your repositories, and the contract assigns the work and intellectual property to you.",
    },
  ],
};

export default data;
