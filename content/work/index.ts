// Delivered projects. The first one leads the home page section and every listing. Add a file, then add it here.
// The home page, the Our Work page and /case-study/ list them; each gets its own page under /case-study/.
import type { ProjectData } from "@/content/types";
import aimsureItAssetRecovery from "./aimsure-it-asset-recovery";
import evTruckOperationsPlatform from "./ev-truck-operations-platform";
import finvestCrm from "./finvest-crm";
import scalexpertz from "./scalexpertz";

export const projects: ProjectData[] = [evTruckOperationsPlatform, finvestCrm, aimsureItAssetRecovery, scalexpertz];

// Listing grids: two columns for up to two projects or exactly four (two rows of two), otherwise three.
export const projectColumns: 2 | 3 = projects.length <= 2 || projects.length === 4 ? 2 : 3;

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
