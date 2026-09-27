import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";
import { slugify } from "@/lib/slug";

function text(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(text).join("");
  return "";
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Ids let the article's contents list link to each section.
    h2: ({ children }) => <h2 id={slugify(text(children))}>{children}</h2>,
    ...components,
  };
}
