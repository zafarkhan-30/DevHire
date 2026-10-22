import { defineArrayMember, defineField, defineType } from "sanity";
import { sectionMembers } from "./sections";

// Validates a site path such as /hire/react-native-developers-india/
export const validPath = (value?: string) => (value && /^\/[a-z0-9\-/]*\/$/.test(value) ? true : "Must start and end with a slash and use lowercase letters, numbers and hyphens, e.g. /hire/react-developers-india/");

// A brand-new page built from sections, for example a landing page aimed at one keyword.
export const landingPage = defineType({
  name: "landingPage",
  title: "Landing page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Internal name", type: "string", description: "Only shown here in the CMS.", validation: (rule) => rule.required() }),
    defineField({
      name: "path",
      title: "Page address",
      type: "string",
      description: "Where the page lives, e.g. /hire/react-native-developers-india/. It must not clash with an existing page.",
      validation: (rule) => rule.required().custom(validPath),
    }),
    defineField({
      name: "sections",
      type: "array",
      description: "Start with a Hero, then add sections in the order they should appear.",
      of: [defineArrayMember({ type: "heroSection" }), ...sectionMembers],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({ name: "seo", type: "seo" }),
  ],
  preview: { select: { title: "title", subtitle: "path" } },
});
