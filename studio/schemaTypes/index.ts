import { article, blogPost } from "./post";
import { blockContent } from "./blockContent";
import { ebook } from "./ebook";
import { faq } from "./faq";
import { landingPage } from "./landingPage";
import { pageOverride } from "./pageOverride";
import { redirect } from "./redirect";
import { sectionTypes } from "./sections";
import { seo } from "./seo";

export const schemaTypes = [blogPost, article, ebook, landingPage, pageOverride, redirect, seo, blockContent, faq, ...sectionTypes];
