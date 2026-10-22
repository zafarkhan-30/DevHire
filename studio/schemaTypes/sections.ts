import { defineArrayMember, defineField, defineType } from "sanity";

const titleHelp = "Words in [square brackets] are shown in the accent colour, e.g. Hire [React Developers] in India.";

const tone = defineField({
  name: "tone",
  title: "Background",
  type: "string",
  options: { list: [{ title: "White", value: "light" }, { title: "Light grey", value: "muted" }, { title: "Dark blue", value: "navy" }], layout: "radio" },
  initialValue: "light",
});

const button = defineArrayMember({
  type: "object",
  name: "button",
  fields: [
    defineField({ name: "label", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "href", title: "Link", type: "string", description: "For example /contact-us/ or https://…", validation: (rule) => rule.required() }),
  ],
  preview: { select: { title: "label", subtitle: "href" } },
});

// Building blocks for landing pages and for extra sections on existing pages. Each maps to a section the site already renders.
export const heroSection = defineType({
  name: "heroSection",
  title: "Hero (top of page)",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", type: "string", description: "Small label above the heading." }),
    defineField({ name: "title", type: "string", description: titleHelp, validation: (rule) => rule.required() }),
    defineField({ name: "text", type: "text", rows: 3 }),
    defineField({ name: "bullets", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "buttons", type: "array", of: [button], validation: (rule) => rule.max(2) }),
    defineField({ name: "showForm", title: "Show the call-back form", type: "boolean", initialValue: true }),
  ],
  preview: { select: { title: "title" }, prepare: ({ title }) => ({ title, subtitle: "Hero" }) },
});

export const textSection = defineType({
  name: "textSection",
  title: "Text",
  type: "object",
  fields: [
    tone,
    defineField({ name: "title", type: "string", description: titleHelp }),
    defineField({ name: "paragraphs", type: "array", of: [defineArrayMember({ type: "text", rows: 3 })], validation: (rule) => rule.required() }),
    defineField({ name: "bullets", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "buttons", type: "array", of: [button], validation: (rule) => rule.max(2) }),
  ],
  preview: { select: { title: "title" }, prepare: ({ title }) => ({ title: title ?? "Text section", subtitle: "Text" }) },
});

export const cardsSection = defineType({
  name: "cardsSection",
  title: "Cards",
  type: "object",
  fields: [
    tone,
    defineField({ name: "title", type: "string", description: titleHelp }),
    defineField({ name: "intro", type: "text", rows: 2 }),
    defineField({ name: "columns", type: "number", options: { list: [2, 3, 4] }, initialValue: 3 }),
    defineField({
      name: "cards",
      type: "array",
      validation: (rule) => rule.required(),
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "text", type: "text", rows: 3 }),
            defineField({ name: "href", title: "Link (optional)", type: "string" }),
          ],
          preview: { select: { title: "title", subtitle: "text" } },
        }),
      ],
    }),
  ],
  preview: { select: { title: "title" }, prepare: ({ title }) => ({ title: title ?? "Cards", subtitle: "Cards" }) },
});

export const faqSection = defineType({
  name: "faqSection",
  title: "FAQs",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string", description: titleHelp }),
    defineField({ name: "items", type: "array", of: [defineArrayMember({ type: "faq" })], validation: (rule) => rule.required() }),
  ],
  preview: { select: { title: "title" }, prepare: ({ title }) => ({ title: title ?? "Frequently asked questions", subtitle: "FAQs" }) },
});

export const ctaSection = defineType({
  name: "ctaSection",
  title: "Call to action banner",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string", description: titleHelp, validation: (rule) => rule.required() }),
    defineField({ name: "text", type: "text", rows: 2 }),
    defineField({ name: "buttons", type: "array", of: [button], validation: (rule) => rule.required().min(1).max(2) }),
  ],
  preview: { select: { title: "title" }, prepare: ({ title }) => ({ title, subtitle: "Call to action" }) },
});

export const insightsSection = defineType({
  name: "insightsSection",
  title: "Latest blog posts",
  type: "object",
  fields: [defineField({ name: "title", type: "string", initialValue: "Related [Articles]" })],
  preview: { prepare: () => ({ title: "Latest blog posts", subtitle: "Shows the three newest posts" }) },
});

export const sectionTypes = [heroSection, textSection, cardsSection, faqSection, ctaSection, insightsSection];

export const sectionMembers = ["textSection", "cardsSection", "faqSection", "ctaSection", "insightsSection"].map((type) => defineArrayMember({ type }));
