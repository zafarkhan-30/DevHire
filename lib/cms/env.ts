export const sanityEnv = {
  // The project id and dataset name are public identifiers, not secrets, so they are the defaults.
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "ug7zt6ge",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2025-01-01",
};

// Without a project id the site runs on its local content files only, exactly as before the CMS.
export const cmsEnabled = Boolean(sanityEnv.projectId);
