import type { TechData } from "@/content/types";

const data: TechData = {
  slug: "wordpress-developers",
  name: "WordPress",
  role: "WordPress Developers",
  category: "cms",
  meta: {
    title: "Hire WordPress Developers",
    description:
      "Hire WordPress developers for custom themes, blocks, plugins and WooCommerce. They work in your repository. Month-to-month terms, no exit fee.",
  },
  hook: "A WordPress site becomes hard to change when it is held together by plugins that nobody on the team chose or understands.",
  focus: "Custom Themes, Block Editors & WooCommerce Stores",
  heroText:
    "WordPress engineers who write themes, blocks and plugins as code under version control, and who can tidy up a site that has grown one plugin at a time.",
  heroBullets: [
    "Custom blocks and themes built for your editors",
    "PHP, JavaScript and the WordPress coding standards",
    "Version control and a staging site as routine",
    "Interview the developer before signing anything",
  ],
  build: [
    {
      label: "Custom Themes and Blocks",
      icon: "layers",
      text: "Block themes and custom blocks that follow your design system and let editors build pages without breaking the layout.",
      stack: ["Block Editor", "theme.json", "React", "PHP"],
      outcome: "Editors publish new pages themselves and the brand stays consistent.",
    },
    {
      label: "WooCommerce Stores",
      icon: "cart",
      text: "Catalogue, checkout, payment and shipping integrations, with custom logic kept in plugins and out of the theme.",
      stack: ["WooCommerce", "PHP", "Stripe", "REST API"],
      outcome: "The store can change its look without putting order handling at risk.",
    },
    {
      label: "Custom Plugins",
      icon: "code",
      text: "Purpose-built plugins for features specific to your business, written to survive WordPress core updates.",
      stack: ["PHP", "Custom Post Types", "WP-CLI", "PHPUnit"],
      outcome: "One maintained plugin replaces several that each did part of the job.",
    },
    {
      label: "Headless WordPress",
      icon: "globe",
      text: "WordPress as the editing back end, with a separate front end reading content over an API.",
      stack: ["WordPress REST API", "WPGraphQL", "Next.js", "TypeScript"],
      outcome: "Editors keep the tool they know while the public site is built with a modern front-end stack.",
    },
    {
      label: "Site Rescue and Performance",
      icon: "wrench",
      text: "Plugin audits, caching, image handling and database clean-up for sites that have become slow or fragile.",
      stack: ["Query Monitor", "Object Cache", "WP-CLI", "CDN"],
      outcome: "Pages load faster and updates stop being something the team avoids.",
    },
  ],
  fact: {
    text: "WordPress is used by more websites than any other content management system, according to W3Techs usage surveys.",
    source: "W3Techs",
  },
  skills: [
    {
      title: "Theme development",
      text: "Block themes and classic themes, with styles and settings defined centrally instead of scattered through templates.",
      chips: ["Block Themes", "theme.json", "Template Parts"],
    },
    {
      title: "Block development",
      text: "Custom blocks with sensible controls, so editors have the options they need and no more.",
      chips: ["Block Editor", "React", "@wordpress/scripts"],
    },
    {
      title: "Plugin development",
      text: "Features added through actions and filters, never by editing core or third-party plugin files.",
      chips: ["Actions", "Filters", "Custom Post Types"],
    },
    {
      title: "WooCommerce",
      text: "Product data, checkout steps and order flows extended through the hooks WooCommerce provides.",
      chips: ["WooCommerce", "Payment Gateways", "Shipping"],
    },
    {
      title: "Security",
      text: "Sanitised input, escaped output, nonces on every form and capability checks on every action.",
      chips: ["Nonces", "Capabilities", "Escaping"],
    },
    {
      title: "Performance",
      text: "Page and object caching, lean queries and properly sized images, checked with measurement before and after.",
      chips: ["Page Cache", "Object Cache", "Core Web Vitals"],
    },
    {
      title: "APIs and integrations",
      text: "Connecting WordPress to CRMs, payment providers and search services in both directions.",
      chips: ["REST API", "WPGraphQL", "Webhooks"],
    },
    {
      title: "Workflow and deployment",
      text: "Code in Git, dependencies managed by Composer and releases that do not rely on editing files over FTP.",
      chips: ["Git", "WP-CLI", "Composer"],
    },
  ],
  versions: [
    { version: "WordPress 0.7", year: "2003", tag: "First release", text: "The first public version, a fork of the b2/cafelog blogging software." },
    { version: "WordPress 1.5", year: "2005", tag: "Themes", text: "Introduced the theme system and static pages." },
    { version: "WordPress 3.0", year: "2010", tag: "Custom post types", text: "Custom post types, custom menus and multisite merged into core." },
    { version: "WordPress 4.7", year: "2016", tag: "REST API", text: "Content endpoints for the REST API shipped in core." },
    { version: "WordPress 5.0", year: "2018", tag: "Block editor", text: "The block editor replaced the classic editor as the default." },
    { version: "WordPress 5.9", year: "2022", tag: "Site editing", text: "Full site editing arrived along with the first default block theme." },
  ],
  chooseWhen: [
    { title: "Non-technical editors publish often", text: "The editing experience is familiar to many people and needs little training." },
    { title: "Content is the main purpose of the site", text: "Marketing sites, publications and resource libraries are what WordPress does best." },
    { title: "You want to own the site and choose the host", text: "WordPress is open source, so the site can move between hosting providers." },
    { title: "You need a store next to your content", text: "WooCommerce adds selling to the same site and the same admin." },
  ],
  chooseNot: [
    { title: "The product is a complex web application", text: "Custom workflows, heavy business logic and many user roles fit an application framework better." },
    { title: "Nobody will maintain it", text: "WordPress and its plugins need regular updates. An unattended site becomes a security risk." },
    { title: "The catalogue and order volume are very large", text: "A dedicated commerce platform may carry that load with less custom work." },
  ],
  whyUs: [
    { title: "Assessed on a real site", text: "Candidates review an existing theme and plugin set and explain what they would fix first, and why." },
    { title: "You meet the developer", text: "You interview the person who will do the work before any contract is signed." },
    { title: "A developer who knows your site", text: "The developer is assigned to your work only, so they learn your content model and your editors' habits." },
    { title: "Work lives in your accounts", text: "Code goes into your repository and changes are made on your hosting, under logins you control." },
    { title: "Flexible terms", text: "Month-to-month engagement, no exit fee, and a replacement if the fit is wrong." },
  ],
  faqs: [
    {
      q: "Do your developers use page builders or write custom code?",
      a: "Developers work with what your site already uses, including page builders. For new work they can set out the trade-offs between a page builder and custom blocks so that you can decide.",
    },
    {
      q: "Can the developer take over a site built by someone else?",
      a: "Yes. The usual first step is an audit of the theme, plugins and hosting, followed by a list of risks in priority order. Fixes begin once you have agreed the list.",
    },
    {
      q: "Do you cover WooCommerce?",
      a: "Yes. Tell us which payment, shipping and subscription extensions you use, and we shortlist developers with experience of them.",
    },
    {
      q: "How are changes released to the live site?",
      a: "Through your process. If there is none yet, the developer can set up version control and a staging site so that changes are reviewed before they go live.",
    },
    {
      q: "Who owns the themes and plugins written for us?",
      a: "You do. All custom code is assigned to you in the contract and stored in your repository.",
    },
    {
      q: "Do you sign an NDA?",
      a: "Yes. An NDA is signed before the developer is given access to your site, code or hosting.",
    },
  ],
};

export default data;
