// Delivered projects, newest first. Add a file, then add it here.
// The home page, the Our Work page and /case-study/ list them; each gets its own page under /case-study/.
import type { ProjectData } from "@/content/types";
import aimsureItAssetRecovery from "./aimsure-it-asset-recovery";
import finvestCrm from "./finvest-crm";

export const projects: ProjectData[] = [finvestCrm, aimsureItAssetRecovery];

export const projectPath = (project: ProjectData) => `/case-study/${project.slug}/`;

// Card for a project, used on listing pages.
export const projectCard = (project: ProjectData) => ({
  image: project.cover,
  tag: project.kind,
  title: project.title.replace(/[[\]]/g, ""),
  text: project.summary,
  href: projectPath(project),
  linkLabel: "View The Project",
});
