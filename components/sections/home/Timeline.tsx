import { CircleCheck } from "@/components/ui/SpriteIcons";
import { timeline } from "@/content/home";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Timeline() {
  return (
    <section className="section section--muted timeline">
      <div className="container">
        <SectionHeading title={timeline.title} center />
        <ol className="timeline__steps">
          {timeline.steps.map((step, index) => (
            <li key={step.title} className="timeline__step">
              <span className="timeline__dot">{index + 1}</span>
              <div className="timeline__card">
                <span className="pill">{step.when}</span>
                <h3 className="timeline__title">{step.title}</h3>
              </div>
            </li>
          ))}
        </ol>
        <ul className="timeline__checks">
          {timeline.checks.map((check) => (
            <li key={check}>
              <CircleCheck size={20} aria-hidden="true" />
              {check}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
