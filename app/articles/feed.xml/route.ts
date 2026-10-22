import { feedResponse } from "@/lib/feed";
import { getArticles } from "@/lib/cms/posts";

export const dynamic = "force-static";

export async function GET() {
  return feedResponse(await getArticles(), "In-depth guides on planning, building and modernising software, written by our engineers and delivery leads.");
}
