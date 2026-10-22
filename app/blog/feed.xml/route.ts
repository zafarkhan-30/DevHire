import { feedResponse } from "@/lib/feed";
import { getBlog } from "@/lib/cms/posts";

export const dynamic = "force-static";

export async function GET() {
  return feedResponse(await getBlog(), "Practical notes on hiring remote developers, running distributed teams and modernising legacy systems.");
}
