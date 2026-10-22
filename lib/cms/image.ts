import { createImageUrlBuilder } from "@sanity/image-url";
import { sanityEnv } from "./env";

const builder = createImageUrlBuilder({ projectId: sanityEnv.projectId, dataset: sanityEnv.dataset });

export const cmsImage = (source: unknown, width = 1600, height = 800) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  builder.image(source as any).width(width).height(height).fit("crop").auto("format").url();
