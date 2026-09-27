import { CaseStudies } from "@/components/sections/home/CaseStudies";
import { Faq } from "@/components/sections/home/Faq";
import { Guides } from "@/components/sections/home/Guides";
import { HeroSlider } from "@/components/sections/home/HeroSlider";
import { LeadForm } from "@/components/sections/home/LeadForm";
import { MarketCompare } from "@/components/sections/home/MarketCompare";
import { MidCta } from "@/components/sections/home/MidCta";
import { Paths } from "@/components/sections/home/Paths";
import { ProofStats } from "@/components/sections/home/ProofStats";
import { Reasons } from "@/components/sections/home/Reasons";
import { RelatedInsights } from "@/components/sections/home/RelatedInsights";
import { TechTabs } from "@/components/sections/home/TechTabs";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { Timeline } from "@/components/sections/home/Timeline";
import { TrustedBy } from "@/components/sections/home/TrustedBy";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <TrustedBy />
      <MarketCompare />
      <MidCta />
      <Reasons />
      <Paths />
      <TechTabs />
      <CaseStudies />
      <Guides />
      <Timeline />
      <Testimonials />
      <ProofStats />
      <LeadForm />
      <RelatedInsights />
      <Faq />
    </>
  );
}
