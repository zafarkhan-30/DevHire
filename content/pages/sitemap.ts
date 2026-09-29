import type { PageDef } from "@/content/types";
import { projectPath, projects } from "@/content/work";

// One linkGrid block per group, so that no group renders as a tab.
const page: PageDef = {
  path: "/sitemap/",
  meta: {
    title: "Sitemap",
    description:
      "Every page on the SyntaxHires site in one list: company, services, developers by technology, comparisons, guides, resources and legal pages.",
  },
  blocks: [
    {
      type: "hero",
      tone: "light",
      size: "md",
      title: "[Sitemap]",
      text: "Every page on this site, grouped by section.",
    },
    {
      type: "linkGrid",
      pad: "sm",
      title: "Company",
      align: "left",
      groups: [
        {
          label: "Company",
          items: [
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about/" },
            { label: "How We Build", href: "/how-we-build/" },
            { label: "Engagement Models", href: "/engagement-models/" },
            { label: "Pricing", href: "/pricing/" },
            { label: "How We Vet", href: "/how-we-vet/" },
            { label: "Developer Retention", href: "/developer-retention/" },
            { label: "Risk-Free Trial", href: "/hire-2-week-free-trial/" },
            { label: "Industries", href: "/industries/" },
            { label: "Technologies", href: "/technologies/" },
            { label: "Hire Developers", href: "/hire-developers/" },
            { label: "Careers", href: "/career/" },
            { label: "Contact Us", href: "/contact-us/" },
          ],
        },
      ],
    },
    {
      type: "linkGrid",
      tone: "muted",
      pad: "sm",
      title: "Services",
      align: "left",
      groups: [
        {
          label: "Services",
          items: [
            { label: "All Services", href: "/services/" },
            { label: "Web Application Development", href: "/service/web-application-development/" },
            { label: "Mobile App Development", href: "/service/mobile-app-development/" },
            { label: "MVP Development", href: "/service/mvp-development/" },
            { label: "AI And Automation", href: "/service/ai-automation/" },
            { label: "UI/UX Design", href: "/service/ui-ux-design/" },
            { label: "Cloud And DevOps", href: "/service/cloud-devops/" },
            { label: "QA And Testing", href: "/service/qa-testing/" },
            { label: "Maintenance And Support", href: "/service/maintenance-support/" },
            { label: "Dedicated Developers", href: "/service/dedicated-developers/" },
            { label: "IT Staff Augmentation", href: "/service/it-staff-augmentation-services/" },
            { label: "Legacy System Modernization", href: "/service/legacy-system-modernization/" },
            { label: "Legacy Application Modernization", href: "/service/legacy-application-modernization/" },
            { label: "Zero-Downtime Modernization", href: "/service/legacy-modernization-zero-downtime/" },
            { label: "Custom AI Assistant Development", href: "/solutions/custom-ai-assistant-development/" },
          ],
        },
      ],
    },
    {
      type: "linkGrid",
      pad: "sm",
      title: "Hire Developers",
      align: "left",
      groups: [
        {
          label: "Hire Developers",
          items: [
            { label: "Dedicated Developers", href: "/hire/dedicated-developers/" },
            { label: "React Developers", href: "/hire/react-js-developers/" },
            { label: "Angular Developers", href: "/hire/angularjs-developers/" },
            { label: "Next.js Developers", href: "/hire/nextjs-developer/" },
            { label: "Svelte Developers", href: "/hire/svelte-developers/" },
            { label: "JavaScript Developers", href: "/hire/javascript-developers/" },
            { label: "React Native Developers", href: "/hire/react-native-developers/" },
            { label: "Flutter Developers", href: "/hire/flutter-developers/" },
            { label: "Android Developers", href: "/hire/android-developers/" },
            { label: "iOS Developers", href: "/hire/ios-developers/" },
            { label: "Mobile Developers", href: "/hire/mobile-developers/" },
            { label: "Node.js Developers", href: "/hire/nodejs-developers/" },
            { label: "Python Developers", href: "/hire/python-developers/" },
            { label: "Java Developers", href: "/hire/java-developers/" },
            { label: ".NET Developers", href: "/hire/net-developers/" },
            { label: "Golang Developers", href: "/hire/golang-developers/" },
            { label: "PHP Developers", href: "/hire/php-developers/" },
            { label: "Rust Developers", href: "/hire/rust-developers/" },
            { label: "Laravel Developers", href: "/hire/laravel-developers/" },
            { label: "Yii Developers", href: "/hire/yii-developers/" },
            { label: "WordPress Developers", href: "/hire/wordpress-developers/" },
            { label: "Shopify Developers", href: "/hire/shopify-developers/" },
            { label: "Salesforce Developers", href: "/hire/salesforce-developers/" },
            { label: "AWS Experts", href: "/hire/aws-experts/" },
            { label: "Platform Engineers", href: "/hire/platform-engineers/" },
            { label: "Data Engineers", href: "/hire/data-engineer/" },
            { label: "Backend Developers", href: "/hire/backend-developers/" },
            { label: "Agentic AI Developers", href: "/hire/agentic-ai-developers/" },
            { label: "ChatGPT Integration Developers", href: "/hire/chatgpt-integration-developers/" },
            { label: "AI Developers", href: "/hire/ai-developers/" },
            { label: "Microsoft Developers", href: "/hire/microsoft-developers/" },
            { label: "Full-Stack Designers", href: "/hire/fullstack-designers/" },
            { label: "UI/UX Designers", href: "/hire/ui-ux-designers/" },
            { label: "SEO Experts", href: "/hire/seo-experts/" },
            { label: "PPC Experts", href: "/hire/ppc-experts/" },
            { label: "US Ready Remote Engineering", href: "/hire/us-ready-remote-engineering/" },
          ],
        },
      ],
    },
    {
      type: "linkGrid",
      tone: "muted",
      pad: "sm",
      title: "Compare",
      align: "left",
      groups: [
        {
          label: "Compare",
          items: [
            { label: "Comparison Guides", href: "/comparison-guides/" },
            { label: "Marketplaces vs Freelance Platforms vs Dedicated Teams", href: "/compare/marketplaces-vs-freelance-platforms-vs-dedicated-teams/" },
            { label: "In-House vs Outsourced Legacy Modernization", href: "/compare/in-house-vs-outsourced-legacy-modernization/" },
            { label: "Microservices vs Modular Monolith", href: "/compare/microservices-vs-modular-monolith/" },
            { label: "Rehost vs Refactor vs Rebuild", href: "/compare/rehost-vs-refactor-vs-rebuild/" },
            { label: "Legacy Modernization vs Rewrite", href: "/compare/legacy-modernization-vs-rewrite/" },
          ],
        },
      ],
    },
    {
      type: "linkGrid",
      pad: "sm",
      title: "Guides",
      align: "left",
      groups: [
        {
          label: "Guides",
          items: [
            { label: "Dedicated Developers vs Freelancers", href: "/hire/dedicated-developers/dedicated-developers-vs-freelancers/" },
            { label: "Dedicated Team vs Staff Augmentation", href: "/hire/dedicated-developers/dedicated-team-vs-staff-augmentation/" },
            { label: "Offshore Developers Cost", href: "/hire/dedicated-developers/offshore-developers-cost/" },
          ],
        },
      ],
    },
    {
      type: "linkGrid",
      tone: "muted",
      pad: "sm",
      title: "Resources",
      align: "left",
      groups: [
        {
          label: "Resources",
          items: [
            { label: "Developer Cost Estimate", href: "/resources/developer-cost-estimate/" },
            { label: "Legacy Risk Assessment", href: "/resources/legacy-risk-assessment/" },
            { label: "Our Work", href: "/case-study/our-work/" },
            { label: "Case Studies", href: "/case-study/" },
            ...projects.map((project) => ({ label: project.name, href: projectPath(project) })),
            { label: "Insights", href: "/insights/" },
            { label: "FAQs", href: "/faq/" },
            { label: "Sitemap", href: "/sitemap/" },
          ],
        },
      ],
    },
    {
      type: "linkGrid",
      pad: "sm",
      title: "Legal",
      align: "left",
      groups: [
        {
          label: "Legal",
          items: [
            { label: "Privacy Policy", href: "/privacy-policy/" },
            { label: "Terms And Conditions", href: "/terms-and-conditions/" },
            { label: "Cookies Policy", href: "/cookies-policy/" },
            { label: "GDPR", href: "/gdpr/" },
          ],
        },
      ],
    },
  ],
};

export default page;
