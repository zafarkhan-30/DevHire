import { defineArrayMember, defineField, defineType } from "sanity";

// The article editor. Only the formatting the website can display is offered.
export const blockContent = defineType({
  name: "blockContent",
  title: "Body",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Paragraph", value: "normal" },
        { title: "Heading 2 (section)", value: "h2" },
        { title: "Heading 3", value: "h3" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullets", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Bold", value: "strong" },
          { title: "Italic", value: "em" },
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "Link",
            fields: [
              defineField({
                name: "href",
                type: "string",
                title: "URL",
                description: "Full address, or a site path such as /hire/react-js-developers/ for an internal link.",
                validation: (rule) => rule.required(),
              }),
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", type: "string", title: "Alt text", description: "Describe the image for screen readers and search engines.", validation: (rule) => rule.required() }),
        defineField({ name: "caption", type: "string", title: "Caption" }),
      ],
    }),
    defineArrayMember({
      name: "callout",
      type: "object",
      title: "Callout box",
      fields: [defineField({ name: "title", type: "string" }), defineField({ name: "text", type: "text", rows: 3, validation: (rule) => rule.required() })],
      preview: { select: { title: "title", subtitle: "text" } },
    }),
    defineArrayMember({
      name: "ctaButton",
      type: "object",
      title: "Button",
      fields: [
        defineField({ name: "label", type: "string", validation: (rule) => rule.required() }),
        defineField({ name: "href", title: "Link", type: "string", description: "For example /contact-us/", validation: (rule) => rule.required() }),
      ],
      preview: { select: { title: "label", subtitle: "href" } },
    }),
  ],
});
