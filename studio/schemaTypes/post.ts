import { defineArrayMember, defineField, defineType } from "sanity";

const tones = [
  { title: "Blue", value: "blue" },
  { title: "Amber", value: "amber" },
  { title: "Violet", value: "violet" },
  { title: "Teal", value: "teal" },
];

// Blog posts and articles have the same fields; they differ only in where they appear on the site.
function postType(name: string, title: string, path: string) {
  return defineType({
    name,
    title,
    type: "document",
    fields: [
      defineField({ name: "title", type: "string", validation: (rule) => rule.required().max(110) }),
      defineField({
        name: "slug",
        title: "URL slug",
        type: "slug",
        description: `The address of the page: syntechire.com${path}/<slug>/. Changing it later breaks existing links, so add a redirect.`,
        options: { source: "title", maxLength: 90 },
        validation: (rule) => rule.required(),
      }),
      defineField({ name: "excerpt", title: "Summary", type: "text", rows: 3, description: "One or two sentences. Shown on cards and at the top of the page.", validation: (rule) => rule.required().max(220) }),
      defineField({ name: "category", type: "string", description: "Reuse an existing category where you can, e.g. Modernisation, Project Management.", validation: (rule) => rule.required() }),
      defineField({ name: "publishedAt", title: "Publish date", type: "datetime", initialValue: () => new Date().toISOString(), validation: (rule) => rule.required() }),
      defineField({ name: "updatedAt", title: "Last updated", type: "datetime", description: "Set this when you make a substantial edit. Search engines use it." }),
      defineField({ name: "author", type: "string", description: 'Leave empty for "SyntecHire Team".' }),
      defineField({ name: "image", title: "Banner image", type: "image", options: { hotspot: true }, description: "2:1 ratio (for example 1600 × 800). No text or logos in the image." }),
      defineField({ name: "tone", title: "Card colour", type: "string", options: { list: tones }, initialValue: "blue", description: "Used when there is no banner image." }),
      defineField({ name: "body", type: "blockContent", description: "Use Heading 2 for the main sections. The contents list on the page is built from them." }),
      defineField({ name: "faqs", title: "FAQs", type: "array", of: [defineArrayMember({ type: "faq" })], description: "Shown at the bottom of the page." }),
      defineField({ name: "seo", type: "seo" }),
    ],
    orderings: [{ title: "Newest first", name: "dateDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
    preview: { select: { title: "title", subtitle: "category", media: "image" } },
  });
}

export const blogPost = postType("blogPost", "Blog post", "/blog");
export const article = postType("article", "Article", "/articles");
