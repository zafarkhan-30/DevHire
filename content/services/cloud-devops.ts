import type { ServiceData } from "@/content/types";

const service: ServiceData = {
  slug: "cloud-devops",
  name: "Cloud And DevOps",
  group: "operate",
  icon: "cloud",
  summary: "Cloud setup, automated releases, monitoring and migrations, documented so your team can run them.",
  meta: {
    title: "Cloud And DevOps Services",
    description:
      "Cloud and DevOps services by SyntecHire: cloud setup, automated build and release pipelines, monitoring, cost review and migrations, all documented.",
  },
  hero: {
    title: "Cloud And Release Pipelines You Can [Rely On]",
    text: "We set up cloud environments, automate releases and add the monitoring that tells you about a problem before your customers do.",
    bullets: ["Infrastructure defined as code", "Releases that can be rolled back", "Everything documented for your team"],
  },
  intro: {
    title: "What [Cloud And DevOps] Covers",
    paragraphs: [
      "Cloud work is about where your software runs: servers, databases, networks and access. DevOps is about how changes reach production: building, testing and releasing in a repeatable way.",
      "Done well, releases become routine and recovery from a fault is quick. We set this up in your own cloud accounts, so you keep control and can see everything we do.",
    ],
    aside: {
      title: "In short",
      items: ["Cloud setup and migration", "Automated build and release", "Monitoring and alerts", "Cost and security review"],
    },
  },
  build: {
    title: "What We [Set Up]",
    items: [
      { icon: "cloud", title: "Cloud Environments", text: "Development, staging and production environments, built the same way each time." },
      { icon: "git", title: "Release Pipelines", text: "Automated build, test and release, with a way to roll back." },
      { icon: "eye", title: "Monitoring And Alerts", text: "Logs, metrics and alerts that reach the right person." },
      { icon: "plane", title: "Cloud Migration", text: "Moving systems to the cloud in stages, with a tested way back at each step." },
      { icon: "shield", title: "Access And Security", text: "Least-privilege access, secrets handling and backups that are tested." },
      { icon: "credit", title: "Cost Review", text: "A review of what you are paying for, with specific savings listed." },
    ],
  },
  audience: [
    { icon: "rocket", title: "Startups", text: "You are about to launch and need a production setup that will not need redoing." },
    { icon: "code", title: "Development Teams", text: "Releases are manual and stressful, and you want them to be routine." },
    { icon: "building", title: "Established Businesses", text: "You run on ageing servers and want to move to the cloud without downtime." },
  ],
  approach: {
    title: "How A Cloud Project [Runs]",
    items: [
      { title: "Review", text: "We look at the current setup, access and costs." },
      { title: "Plan", text: "A written plan with the order of work and the way back at each step." },
      { title: "Build", text: "Environments and pipelines created as code in your accounts." },
      { title: "Move", text: "Workloads moved in stages and checked at each step." },
      { title: "Hand Over", text: "Runbooks and a walkthrough, so your team can operate it." },
    ],
  },
  deliverables: [
    { icon: "git", title: "Infrastructure Code", text: "Everything defined as code in your repository." },
    { icon: "file", title: "Runbooks", text: "Written steps for releases, rollbacks and common faults." },
    { icon: "eye", title: "Dashboards", text: "Monitoring set up in your own accounts." },
    { icon: "lock", title: "Your Accounts", text: "All resources stay in accounts you own and control." },
  ],
  stack: [
    { label: "AWS", href: "/hire/aws-experts/" },
    { label: "Platform Engineering", href: "/hire/platform-engineers/" },
    { label: "Backend", href: "/hire/backend-developers/" },
    { label: "Zero-Downtime Modernization", href: "/service/legacy-modernization-zero-downtime/" },
  ],
  faqs: [
    {
      q: "Which cloud providers do you work with?",
      a: "We work with the major cloud providers. If you already use one, we work within it. If you are choosing, we explain the options for your case.",
    },
    {
      q: "Do you need full access to our cloud account?",
      a: "No. We ask for the access the work needs and no more. All access is named, logged and removed when the work ends.",
    },
    {
      q: "Can you migrate without downtime?",
      a: "Most systems can be moved in stages with old and new running side by side. We plan the cut-over with you and agree in advance how to go back if a step fails.",
    },
    {
      q: "Will our team be able to run it afterwards?",
      a: "Yes. The setup is written as code, runbooks cover routine tasks and we walk your team through it. Ongoing support is available if you want it.",
    },
  ],
};

export default service;
