import { createClient } from "@sanity/client";
import { cmsEnabled, sanityEnv } from "./env";

const client = cmsEnabled ? createClient({ ...sanityEnv, useCdn: false, perspective: "published" }) : null;

// Every CMS read is tagged so the optional publish webhook can refresh the site at once.
export const CMS_TAG = "sanity";

// Without the webhook, published changes reach the site within this many seconds.
const REFRESH_SECONDS = 60;

export async function cmsFetch<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  if (!client) return null;
  try {
    return await client.fetch<T>(query, params, { next: { tags: [CMS_TAG], revalidate: REFRESH_SECONDS } });
  } catch (error) {
    // A CMS outage must not take the site down: callers fall back to the local content.
    console.error("CMS fetch failed", error);
    return null;
  }
}
