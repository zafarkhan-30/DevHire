import { projectPath } from "@/content/work";
import type { Block, PageDef, ProjectData } from "@/content/types";

// Turns one project data file into a case study page. It states what was built and how.
// Results and client quotes are added to the data file only once the client has approved them.
export function buildProjectPage(project: ProjectData): PageDef {
  const blocks: Block[] = [
    {
      type: "hero",
      tone: "dark",
      size: "md",
      eyebrow: `${project.kind} · ${project.industry}`,
      title: project.title,
      text: project.summary,
      ctas: [
        ...(project.live ? [project.live] : []),
        { label: "Discuss A Similar Project", href: "/services/#enquiry", variant: project.live ? ("outline-light" as const) : undefined },
      ],
      breadcrumbs: [{ label: "Home", href: "/" }, { label: "Our Work", href: "/case-study/our-work/" }, { label: project.name }],
    },
    { type: "caseMeta", items: project.facts },
    { type: "text", title: "The [Project]", align: "left", ...project.overview },
    { type: "gallery", tone: "muted", title: "The [Product]", align: "center", items: project.screens },
    { type: "cards", title: "What We [Built]", align: "center", columns: project.built.length % 3 === 0 ? 3 : 4, items: project.built },
    { type: "cards", tone: "muted", title: "Technology [Used]", align: "center", columns: project.stack.length === 3 ? 3 : 4, items: project.stack },
    {
      type: "linkGrid",
      title: "Services [On This Project]",
      align: "center",
      groups: [{ label: "Services", items: project.services }],
    },
    {
      type: "cta",
      variant: "dark",
      title: "Planning Something Similar?",
      text: "Tell us what you want to build. We will reply with questions, then a written proposal.",
      ctas: [
        { label: "Discuss Your Project", href: "/services/#enquiry" },
        { label: "See More Work", href: "/case-study/our-work/", variant: "outline-light" },
      ],
    },
  ];

  return { path: projectPath(project), meta: project.meta, blocks };
}
