import type { TechData } from "@/content/types";

const data: TechData = {
  slug: "aws-experts",
  name: "AWS",
  role: "AWS Experts",
  category: "cloud",
  meta: {
    title: "Hire AWS Experts",
    description:
      "Hire AWS experts for migrations, infrastructure as code, cost control and security. They work in your accounts. Month-to-month terms.",
  },
  hook: "Cloud bills climb and releases slow down when the infrastructure was set up by hand and only one person knows how it fits together.",
  focus: "Migrations, Cost Control & Infrastructure as Code",
  heroText:
    "AWS engineers who define infrastructure in code, design for failure, and can explain what each line of the bill is paying for.",
  heroBullets: [
    "Terraform, AWS CDK or CloudFormation, matched to your team",
    "Production experience with containers and serverless",
    "Least-privilege IAM and multi-account structures",
    "Interview the engineer before any contract",
  ],
  build: [
    {
      label: "Cloud Migration",
      icon: "cloud",
      text: "Moving workloads from a data centre or another cloud in planned waves, with a way back at each step.",
      stack: ["AWS Application Migration Service", "AWS DMS", "Amazon EC2", "Amazon RDS"],
      outcome: "Systems move across in stages, and each stage is proven before the next begins.",
    },
    {
      label: "Infrastructure as Code",
      icon: "git",
      text: "Replacing resources built in the console with reviewed, versioned definitions that can recreate an environment.",
      stack: ["Terraform", "AWS CDK", "CloudFormation", "GitHub Actions"],
      outcome: "Every change to infrastructure has an author, a review and a history.",
    },
    {
      label: "Container and Serverless Platforms",
      icon: "server",
      text: "Services run on ECS, EKS or Lambda with autoscaling, health checks and deployments that can be rolled back.",
      stack: ["Amazon ECS", "AWS Fargate", "Amazon EKS", "AWS Lambda"],
      outcome: "Capacity follows demand without someone resizing servers by hand.",
    },
    {
      label: "Cost Review",
      icon: "chart",
      text: "Tagging, right-sizing, storage lifecycle rules and commitment planning based on measured usage.",
      stack: ["AWS Cost Explorer", "AWS Budgets", "Savings Plans", "S3 Lifecycle"],
      outcome: "Each team can see what it spends and why.",
    },
    {
      label: "Security Foundations",
      icon: "shield",
      text: "Account structure, identity, encryption and logging set up so that an audit starts from evidence.",
      stack: ["AWS Organizations", "IAM Identity Center", "AWS KMS", "AWS CloudTrail"],
      outcome: "Access is granted by role, and every action in the account is recorded.",
    },
  ],
  fact: {
    text: "AWS describes cloud security as a shared responsibility: AWS secures the underlying infrastructure and the customer secures what they run on it.",
    source: "AWS Shared Responsibility Model",
  },
  skills: [
    {
      title: "Networking",
      text: "Address plans, subnets and routing laid out so that environments stay separate and traffic paths are clear.",
      chips: ["Amazon VPC", "Transit Gateway", "Route 53"],
    },
    {
      title: "Identity and access",
      text: "Roles in place of long-lived keys, permissions scoped to the task and central sign-on across accounts.",
      chips: ["IAM", "IAM Identity Center", "AWS Organizations"],
    },
    {
      title: "Infrastructure as code",
      text: "Modules that can be reused, state that is stored safely and plans reviewed before they are applied.",
      chips: ["Terraform", "AWS CDK", "CloudFormation"],
    },
    {
      title: "Compute",
      text: "Virtual machines, containers or functions chosen for the workload, not for fashion.",
      chips: ["Amazon EC2", "Amazon ECS", "AWS Lambda"],
    },
    {
      title: "Databases and storage",
      text: "Managed databases with tested backups, and storage classes matched to how often data is read.",
      chips: ["Amazon RDS", "Amazon Aurora", "DynamoDB", "Amazon S3"],
    },
    {
      title: "Observability",
      text: "Metrics, logs and traces tied to alerts that tell the on-call person what to look at.",
      chips: ["Amazon CloudWatch", "AWS X-Ray", "OpenTelemetry"],
    },
    {
      title: "Resilience and recovery",
      text: "Workloads spread across availability zones, with restore procedures that have been rehearsed.",
      chips: ["Multi-AZ", "AWS Backup", "Route 53 Failover"],
    },
    {
      title: "Cost management",
      text: "Spend allocated by tag, budgets with alerts and regular review of idle or oversized resources.",
      chips: ["Cost Explorer", "AWS Budgets", "Savings Plans"],
    },
  ],
  versions: [
    { version: "Amazon S3 and EC2", year: "2006", tag: "Launch", text: "Object storage and rentable virtual servers became available as web services." },
    { version: "Amazon RDS and VPC", year: "2009", tag: "Managed databases", text: "Managed relational databases and private networking were added." },
    { version: "Amazon DynamoDB", year: "2012", tag: "NoSQL", text: "A managed key-value and document database." },
    { version: "AWS Lambda", year: "2014", tag: "Serverless", text: "Lambda was introduced, running code in response to events with no servers to manage." },
    { version: "AWS Fargate", year: "2017", tag: "Serverless containers", text: "Containers could be run without managing the servers underneath." },
    { version: "Amazon EKS", year: "2018", tag: "Managed Kubernetes", text: "A managed Kubernetes service became generally available." },
  ],
  chooseWhen: [
    { title: "Demand is uneven or growing", text: "Capacity can be added and removed as load changes, in place of buying for the peak." },
    { title: "You want managed databases, queues and storage", text: "AWS operates these services, so your team spends less time on patching and backups." },
    { title: "You serve users in several regions", text: "Workloads can be placed close to users and to the data rules they fall under." },
    { title: "Auditors ask for documented controls", text: "Logging, encryption and access policies can be defined in code and shown as evidence." },
  ],
  chooseNot: [
    { title: "The workload is small and steady", text: "A single server or a simple hosting platform can be cheaper and easier to run." },
    { title: "Nobody will own the infrastructure", text: "Cloud accounts left unattended collect cost and security problems." },
    { title: "Your team runs well on another cloud", text: "Moving provider for its own sake rarely pays back." },
    { title: "Data must stay on your own premises", text: "Some contracts and regulations rule out public cloud for certain data. Check these first." },
  ],
  whyUs: [
    { title: "Assessed on real infrastructure", text: "Candidates review an existing infrastructure repository and explain what they would change, in what order and why." },
    { title: "You interview the engineer", text: "You meet the person and question their design decisions before any contract is signed." },
    { title: "Committed to your environment", text: "An engineer works for a single client, so they know your accounts, services and history." },
    { title: "Your accounts, your access rules", text: "Engineers work inside your AWS accounts and repositories with the permissions you grant, and you can withdraw them." },
    { title: "No long contract", text: "Month-to-month terms with no exit fee, and a replacement if the fit is wrong." },
  ],
  faqs: [
    {
      q: "Do your engineers hold AWS certifications?",
      a: "It varies by person. If a certification matters to you, state it in your brief and confirm it during the interview. Our assessment is based on production experience and on how a candidate reasons about a real environment.",
    },
    {
      q: "How is access to our AWS accounts handled?",
      a: "You create the engineer's identity in your own account and set its permissions. An NDA is signed before access is given, and you can revoke access whenever you choose.",
    },
    {
      q: "Which infrastructure as code tool do you use?",
      a: "The one your team already maintains. If you have none, the engineer can compare Terraform, AWS CDK and CloudFormation against your team's skills and recommend one.",
    },
    {
      q: "Can an engineer reduce our AWS bill?",
      a: "An engineer can show where the money goes and propose changes. The saving depends on your workloads, so we do not quote a figure in advance.",
    },
    {
      q: "Who owns the infrastructure code?",
      a: "You do. It is written in your repository and the contract assigns all work to you.",
    },
    {
      q: "Can the engineer work alongside our developers?",
      a: "Yes. The engineer joins your planning, reviews and chat channels, and works from your backlog like any other team member.",
    },
  ],
};

export default data;
