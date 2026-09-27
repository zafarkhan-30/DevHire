import { trustedBy } from "@/content/home";
import { LogoRow } from "@/components/ui/LogoRow";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TrustedBy() {
  return (
    <section className="section section--light trusted">
      <div className="container">
        <SectionHeading title={trustedBy.title} center />
        <LogoRow />
        <p className="trusted__caption">{trustedBy.caption}</p>
      </div>
    </section>
  );
}
