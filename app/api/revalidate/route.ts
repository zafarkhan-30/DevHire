import { revalidateTag } from "next/cache";
import { timingSafeEqual } from "node:crypto";
import { CMS_TAG } from "@/lib/cms/client";

// Called by a Sanity webhook on every publish, unpublish or delete. Refreshes all CMS-backed pages.
export async function POST(request: Request) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  const given = new URL(request.url).searchParams.get("secret") ?? "";
  const ok = Boolean(secret) && given.length === secret!.length && timingSafeEqual(Buffer.from(given), Buffer.from(secret!));
  if (!ok) return Response.json({ ok: false }, { status: 401 });
  revalidateTag(CMS_TAG, "max");
  return Response.json({ ok: true, at: new Date().toISOString() });
}
