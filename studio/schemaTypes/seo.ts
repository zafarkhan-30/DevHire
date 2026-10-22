import { defineField, defineType } from "sanity";
import { SeoInput } from "./SeoInput";

// Search settings shared by every content type. The input shows a live keyword checklist above the fields.
export const seo = defineType({
  name: "seo",
  title: "Search & keywords",
  type: "object",
  components: { input: SeoInput },
  options: { collapsible: true, collapsed: false },
  fields: [
    defineField({ name: "focusKeyword", title: "Focus keyword", type: "string", description: 'The one phrase this page should rank for, for example "hire react developers".' }),
    defineField({
      name: "metaTitle",
      title: "Search title",
      type: "string",
      description: "Shown in Google. Aim for 50–60 characters. Leave empty to use the page title.",
      validation: (rule) => rule.max(70).warning("Over 70 characters is usually cut off in Google."),
    }),
    defineField({
      name: "description",
      title: "Search description",
      type: "text",
      rows: 3,
      description: "Shown under the title in Google. Aim for 120–160 characters.",
      validation: (rule) => rule.max(200).warning("Over 160 characters is usually cut off in Google."),
    }),
    defineField({ name: "ogImage", title: "Social share image", type: "image", description: "1200 × 630. Shown when the page is shared on LinkedIn, WhatsApp, X." }),
    defineField({ name: "canonical", title: "Canonical URL", type: "string", description: "Only set this if the same content lives on another address." }),
    defineField({ name: "noindex", title: "Hide from search engines", type: "boolean", initialValue: false }),
  ],
});
