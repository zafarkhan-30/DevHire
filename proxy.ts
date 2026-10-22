import { NextResponse, type NextRequest } from "next/server";
import { CMS_TAG } from "@/lib/cms/client";
import { cmsEnabled, sanityEnv } from "@/lib/cms/env";

type Redirect = { from: string; to: string; permanent?: boolean };

const QUERY = encodeURIComponent('*[_type == "redirect" && defined(from) && defined(to)]{from, to, permanent}');

// The redirect list managed in the CMS. Cached, and refreshed by the publish webhook.
async function redirects(): Promise<Redirect[]> {
  try {
    const url = `https://${sanityEnv.projectId}.apicdn.sanity.io/v${sanityEnv.apiVersion}/data/query/${sanityEnv.dataset}?query=${QUERY}`;
    const response = await fetch(url, { next: { revalidate: 60, tags: [CMS_TAG] } });
    if (!response.ok) return [];
    return ((await response.json()) as { result?: Redirect[] }).result ?? [];
  } catch {
    return [];
  }
}

const withSlash = (path: string) => (path.endsWith("/") ? path : `${path}/`);

export async function proxy(request: NextRequest) {
  if (!cmsEnabled) return NextResponse.next();
  const path = withSlash(request.nextUrl.pathname);
  const match = (await redirects()).find((item) => withSlash(item.from) === path);
  if (!match) return NextResponse.next();
  const target = match.to.startsWith("/") ? new URL(match.to, request.url) : new URL(match.to);
  return NextResponse.redirect(target, match.permanent === false ? 307 : 308);
}

export const config = {
  // Pages only: skip Next.js internals, the API, and any file with an extension (images, PDFs, feeds, sitemap).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
