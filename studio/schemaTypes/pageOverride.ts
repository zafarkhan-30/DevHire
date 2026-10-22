import { defineArrayMember, defineField, defineType } from "sanity";
import { sectionMembers } from "./sections";
import { validPath } from "./landingPage";

// Edits to a page that already exists on the site (service, hire, comparison, about…).
// Anything left empty keeps the page's current wording.
export const pageOverride = defineType({
  name: "pageOverride",
  title: "Edit an existing page",
  type: "document",
  fields: [
    defineField({
      name: "path",
      title: "Page address",
      type: "string",
      description: "The page you want to change, exactly as in the browser, e.g. /hire/react-js-developers/ or /service/dedicated-developers/.",
      validation: (rule) => rule.required().custom(validPath),
    }),
    defineField({ name: "heroTitle", title: "Main heading", type: "string", description: "Words in [square brackets] are shown in the accent colour." }),
    defineField({ name: "heroText", title: "Intro text under the heading", type: "text", rows: 3 }),
    defineField({ name: "faqs", title: "Replace the FAQs", type: "array", of: [defineArrayMember({ type: "faq" })], description: "If you add any, they replace the page's current FAQs." }),
    defineField({
      name: "extraSections",
      title: "Extra sections",
      type: "array",
      of: sectionMembers,
      description: "Added to the page just before its final call-to-action.",
    }),
    defineField({ name: "seo", type: "seo" }),
  ],
  preview: { select: { title: "path", subtitle: "heroTitle" } },
});
