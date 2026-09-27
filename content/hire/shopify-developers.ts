import type { TechData } from "@/content/types";

const data: TechData = {
  slug: "shopify-developers",
  name: "Shopify",
  role: "Shopify Developers",
  category: "cms",
  meta: {
    title: "Hire Shopify Developers",
    description:
      "Hire Shopify developers for themes, custom apps and checkout extensions. They work in your store and repository. Month-to-month terms.",
  },
  hook: "Store improvements queue up when every theme edit or app integration has to wait for an outside team's next free slot.",
  focus: "Custom Themes, Apps & Checkout Extensions",
  heroText:
    "Shopify engineers who write Liquid themes, build custom apps against the Admin and Storefront APIs, and know where the platform's limits are before they promise a feature.",
  heroBullets: [
    "Liquid themes built on sections and blocks",
    "Custom apps using the Admin and Storefront APIs",
    "Theme changes go through Git and a preview theme",
    "You meet the developer before you sign",
  ],
  build: [
    {
      label: "Custom Themes",
      icon: "monitor",
      text: "Themes built from sections and blocks so that merchandisers can rearrange pages without a developer.",
      stack: ["Liquid", "Online Store 2.0", "Shopify CLI", "JavaScript"],
      outcome: "Campaign pages go live when marketing is ready, not when a developer is free.",
    },
    {
      label: "Custom Apps",
      icon: "code",
      text: "Apps for the workflows that App Store products do not cover, such as order routing or stock rules.",
      stack: ["Admin API", "GraphQL", "Node.js", "Webhooks"],
      outcome: "Manual steps in order handling are replaced by rules that run on their own.",
    },
    {
      label: "Checkout and Discounts",
      icon: "credit",
      text: "Checkout UI extensions and Shopify Functions for custom discounts, delivery options and payment rules, where your plan supports them.",
      stack: ["Checkout UI Extensions", "Shopify Functions", "GraphQL", "Shopify CLI"],
      outcome: "Promotions behave the way the business intended, without workarounds in the cart.",
    },
    {
      label: "Headless Storefronts",
      icon: "globe",
      text: "Custom front ends that read from the Storefront API when the theme layer is not flexible enough.",
      stack: ["Hydrogen", "Storefront API", "React", "TypeScript"],
      outcome: "The shopping experience is designed freely while Shopify still handles cart and checkout.",
    },
    {
      label: "Platform Migration",
      icon: "truck",
      text: "Moving products, customers and order history from WooCommerce, Magento or a custom store, with redirects for old URLs.",
      stack: ["Admin API", "Bulk Operations", "CSV Import", "URL Redirects"],
      outcome: "Customer records and old links carry over, so returning shoppers find what they expect.",
    },
  ],
  fact: {
    text: "Liquid, the template language used in Shopify themes, was created by Shopify and is available as open source.",
    source: "Shopify developer documentation",
  },
  skills: [
    {
      title: "Liquid and theme architecture",
      text: "Reusable sections, clean snippets and settings that make sense to the person using the theme editor.",
      chips: ["Liquid", "Sections", "JSON Templates"],
    },
    {
      title: "Storefront speed",
      text: "Trimming scripts left behind by old apps, sizing images correctly and measuring the result.",
      chips: ["Lighthouse", "Theme Inspector", "Lazy Loading"],
    },
    {
      title: "Admin and Storefront APIs",
      text: "GraphQL queries written with rate limits and bulk operations in mind.",
      chips: ["GraphQL", "Admin API", "Storefront API"],
    },
    {
      title: "App development",
      text: "Embedded apps that look and behave like part of the Shopify admin.",
      chips: ["Shopify CLI", "App Bridge", "Polaris"],
    },
    {
      title: "Checkout extensibility",
      text: "Custom fields, validation and discount logic built with the supported extension points.",
      chips: ["Checkout UI Extensions", "Shopify Functions"],
    },
    {
      title: "Integrations",
      text: "Orders, stock and customers kept in step with ERP, warehouse and email systems.",
      chips: ["Webhooks", "Shopify Flow", "REST"],
    },
    {
      title: "Data modelling",
      text: "Extra product and customer data stored in structured fields instead of tags and free text.",
      chips: ["Metafields", "Metaobjects"],
    },
    {
      title: "Selling across markets",
      text: "Currencies, languages and regional pricing configured so that each market sees the right store.",
      chips: ["Shopify Markets", "Translations", "Multi-Currency"],
    },
  ],
  versions: [
    { version: "Shopify", year: "2006", tag: "Launch", text: "Shopify launched as a hosted platform for building online stores." },
    { version: "App Store", year: "2009", tag: "Apps", text: "The Shopify App Store and API opened the platform to outside developers." },
    { version: "Shopify Plus", year: "2014", tag: "Enterprise", text: "A plan aimed at larger, high-volume merchants." },
    { version: "Online Store 2.0", year: "2021", tag: "Sections everywhere", text: "Sections and blocks on every page, JSON templates and theme app extensions." },
    { version: "Hydrogen", year: "2022", tag: "Headless", text: "Shopify's React-based framework for custom storefronts became generally available." },
  ],
  chooseWhen: [
    { title: "You sell products online and want hosting handled", text: "Shopify runs the servers, security patches and checkout, so your team works on the store itself." },
    { title: "Merchandisers need to change the store themselves", text: "The theme editor lets non-developers update pages, banners and collections." },
    { title: "You want payments, tax and shipping in one place", text: "These come with the platform and do not have to be integrated from scratch." },
    { title: "You plan to sell in several countries or channels", text: "Markets, marketplaces and point of sale are managed from the same admin." },
  ],
  chooseNot: [
    { title: "Your pricing or ordering logic is highly unusual", text: "Complex quoting or configuration rules can work against the platform. A custom build may be simpler." },
    { title: "You need full control of checkout and hosting", text: "Shopify is a hosted service and limits what can be changed, particularly at checkout." },
    { title: "The site is mainly content with a few products", text: "A content management system with a small shop add-on may be enough." },
  ],
  whyUs: [
    { title: "Assessed on a working store", text: "Candidates review an existing theme and explain how they would change it without disturbing live sales." },
    { title: "You pick the developer", text: "You interview the person and see how they approach your store before any contract is signed." },
    { title: "Assigned to your store only", text: "The developer is not shared with other clients, so they learn your catalogue, apps and trading calendar." },
    { title: "Access you control", text: "The developer works through staff or collaborator access that you grant and can remove." },
    { title: "Short commitment", text: "Terms are month to month with no exit fee, and we replace the developer if the fit is wrong." },
  ],
  faqs: [
    {
      q: "Do your developers work on Shopify Plus stores?",
      a: "Tell us your plan and which features you use, such as checkout extensions or B2B. We shortlist developers who have worked with those features.",
    },
    {
      q: "How are changes made safely on a live store?",
      a: "Work is done on a duplicate or development theme, reviewed, and published once you approve it. Theme code is kept in Git so that any change can be traced and undone.",
    },
    {
      q: "Should we build a custom app or use one from the App Store?",
      a: "If an existing app does the job at an acceptable cost, use it. A custom app makes sense when the workflow is specific to your business or when several apps overlap. The developer can set out both options.",
    },
    {
      q: "Can you move our Shopify Scripts to Shopify Functions?",
      a: "Yes. Shopify is replacing Scripts with Functions. A developer can list your current scripts, rebuild each one as a function or a native discount, and test them on a development store first.",
    },
    {
      q: "Who owns the theme and app code?",
      a: "You do. The contract assigns all custom code to you, and it is stored in your repository.",
    },
    {
      q: "How does access to our store work?",
      a: "You grant the developer staff or collaborator access with only the permissions the work needs. An NDA is signed before any access is given.",
    },
  ],
};

export default data;
