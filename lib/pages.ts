import { technologies } from "@/content/hire";
import { pages } from "@/content/pages";
import type { PageDef } from "@/content/types";
import { buildHirePage } from "./buildHirePage";

const registry = new Map<string, PageDef>();

for (const page of [...technologies.map(buildHirePage), ...pages]) {
  if (registry.has(page.path)) throw new Error(`Two pages share the path ${page.path}`);
  registry.set(page.path, page);
}

export function allPages(): PageDef[] {
  return [...registry.values()];
}

export function findPage(slug: string[]): PageDef | undefined {
  return registry.get(`/${slug.join("/")}/`);
}
