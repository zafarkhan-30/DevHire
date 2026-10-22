import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: { projectId: process.env.SANITY_STUDIO_PROJECT_ID, dataset: process.env.SANITY_STUDIO_DATASET || "production" },
  studioHost: "syntechire",
  deployment: { appId: "uhwdimu5pjooby009a5zltmh" },
});
