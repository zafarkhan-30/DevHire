import type { StructureResolver } from "sanity/structure";

// Left-hand menu, grouped the way the marketing team thinks about the site.
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem().title("Blog posts").child(S.documentTypeList("blogPost").title("Blog posts")),
      S.listItem().title("Articles").child(S.documentTypeList("article").title("Articles")),
      S.listItem().title("E-books").child(S.documentTypeList("ebook").title("E-books")),
      S.divider(),
      S.listItem().title("Landing pages").child(S.documentTypeList("landingPage").title("Landing pages")),
      S.listItem().title("Edit existing pages").child(S.documentTypeList("pageOverride").title("Edit existing pages")),
      S.divider(),
      S.listItem().title("Redirects").child(S.documentTypeList("redirect").title("Redirects")),
    ]);
