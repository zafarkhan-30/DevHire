import { defineArrayMember, defineField, defineType } from "sanity";

export const ebook = defineType({
  name: "ebook",
  title: "E-book",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "URL slug", type: "slug", options: { source: "title", maxLength: 90 }, validation: (rule) => rule.required() }),
    defineField({ name: "subtitle", type: "string", description: "One line under the title.", validation: (rule) => rule.required() }),
    defineField({ name: "category", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "tone", title: "Cover colour", type: "string", options: { list: ["blue", "amber", "violet", "teal"] }, initialValue: "blue" }),
    defineField({ name: "description", type: "text", rows: 4, description: "The paragraph at the top of the e-book page.", validation: (rule) => rule.required() }),
    defineField({ name: "pages", title: "Number of pages", type: "number", validation: (rule) => rule.required().min(1) }),
    defineField({ name: "pdf", title: "PDF file", type: "file", options: { accept: "application/pdf" }, description: "Visitors get this file after filling in the form.", validation: (rule) => rule.required() }),
    defineField({ name: "learn", title: "What you will learn", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({
      name: "chapters",
      title: "What is inside",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [defineField({ name: "title", type: "string" }), defineField({ name: "summary", type: "text", rows: 2 })],
          preview: { select: { title: "title", subtitle: "summary" } },
        }),
      ],
    }),
    defineField({ name: "audience", title: "Who it is for", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "seo", type: "seo" }),
  ],
  preview: { select: { title: "title", subtitle: "category" } },
});
