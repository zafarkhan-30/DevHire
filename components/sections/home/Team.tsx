import Link from "next/link";
import { team } from "@/content/home";
import { Accent } from "@/components/ui/Accent";

export function Team() {
  return (
    <section className="section section--muted team-section">
      <div className="container">
        <div className="heading heading--center">
          <span className="pill">Our Team</span>
          <h2 className="h2">
            <Accent text={team.title} />
          </h2>
          <span className="heading__rule" aria-hidden="true" />
          <p className="heading__intro">{team.intro}</p>
        </div>
        <ul className="cardgrid cardgrid--4">
          {team.members.map((member, index) => (
            <li key={member.name + index}>
              <div className="card person">
                <span
                  className="person__photo"
                  style={
                    member.image
                      ? { backgroundImage: `url(${member.image})` }
                      : undefined
                  }
                  aria-hidden="true"
                >
                  {member.image
                    ? null
                    : member.name
                        .split(" ")
                        .map((word) => word.charAt(0))
                        .slice(0, 2)
                        .join("")}
                </span>
                <h3 className="card__title">{member.name}</h3>
                <p className="person__role">{member.role}</p>
                {member.bio ? <p className="card__text">{member.bio}</p> : null}
              </div>
            </li>
          ))}
        </ul>
        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <Link href="/leadership/" className="btn btn--outline">
            {team.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
