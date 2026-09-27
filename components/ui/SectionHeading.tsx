import type { ReactNode } from "react";
import { Accent } from "./Accent";

type Props = {
  title: string;
  eyebrow?: ReactNode;
  intro?: string;
  center?: boolean;
  as?: "h1" | "h2";
};

export function SectionHeading({ title, eyebrow, intro, center = false, as: Tag = "h2" }: Props) {
  return (
    <div className={`heading${center ? " heading--center" : ""}`}>
      {eyebrow ? <span className="pill">{eyebrow}</span> : null}
      <Tag className="h2">
        <Accent text={title} />
      </Tag>
      <span className="heading__rule" aria-hidden="true" />
      {intro ? <p className="heading__intro">{intro}</p> : null}
    </div>
  );
}
