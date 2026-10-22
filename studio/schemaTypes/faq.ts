import { defineField, defineType } from "sanity";

export const faq = defineType({
  name: "faq",
  title: "Question",
  type: "object",
  fields: [
    defineField({ name: "q", title: "Question", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "a", title: "Answer", type: "text", rows: 3, validation: (rule) => rule.required() }),
  ],
  preview: { select: { title: "q", subtitle: "a" } },
});
