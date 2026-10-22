import { defineField, defineType } from "sanity";

// Send visitors and search engines from an old address to a new one, e.g. after changing a slug.
export const redirect = defineType({
  name: "redirect",
  title: "Redirect",
  type: "document",
  fields: [
    defineField({
      name: "from",
      title: "Old address",
      type: "string",
      description: "Starts with a slash, e.g. /blog/old-post-name/",
      validation: (rule) => rule.required().custom((value) => (value?.startsWith("/") ? true : "Must start with /")),
    }),
    defineField({
      name: "to",
      title: "New address",
      type: "string",
      description: "A site path such as /blog/new-post-name/ or a full https:// address.",
      validation: (rule) => rule.required().custom((value) => (value?.startsWith("/") || value?.startsWith("https://") ? true : "Must start with / or https://")),
    }),
    defineField({ name: "permanent", title: "Permanent move", type: "boolean", initialValue: true, description: "Leave on unless the move is temporary. Permanent moves pass search ranking to the new address." }),
  ],
  preview: { select: { title: "from", subtitle: "to" } },
});
