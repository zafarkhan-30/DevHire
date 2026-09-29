import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Check, ChevronRight, CircleCheck, Minus, Quote, X, Maximize2 } from "lucide-react";
import type { Block, Cta, HeroBlock, Pad, Stat, Tone } from "@/content/types";
import { testimonials } from "@/content/home";
import { reviews } from "@/content/reviews";
import { latestPosts, postImageStyle } from "@/lib/blog";
import { Accent } from "@/components/ui/Accent";
import { Icon } from "@/components/ui/Icon";
import { LogoRow } from "@/components/ui/LogoRow";
import { ReviewList } from "@/components/ui/ReviewCard";
import { Calculator } from "./Calculator";
import { SavingsCalculator } from "./SavingsCalculator";
import { AccordionView, LinkGridView, PdfGateView, QuizView, TabsView } from "./Interactive";
import { LeadFormCard } from "./LeadFormCard";

type SectionProps = {
  id?: string;
  tone?: Tone;
  pad?: Pad;
  eyebrow?: string;
  title?: string;
  intro?: string;
  align?: "left" | "center";
};

function Buttons({ ctas, dark }: { ctas?: Cta[]; dark?: boolean }) {
  if (!ctas?.length) return null;
  return (
    <div className="blk__actions">
      {ctas.map((cta, index) => {
        const variant = cta.variant ?? (index === 0 ? "primary" : dark ? "outline-light" : "outline");
        return (
          <Link key={cta.label} href={cta.href} className={`btn btn--${variant}`}>
            {cta.label}
            {index === 0 ? <ArrowRight size={16} aria-hidden="true" /> : null}
          </Link>
        );
      })}
    </div>
  );
}

function Shell({
  block,
  name,
  pad = "lg",
  children,
}: {
  block: SectionProps;
  name: string;
  pad?: Pad;
  children: ReactNode;
}) {
  const align = block.align ?? "center";
  return (
    <section id={block.id} className={`section section--${block.tone ?? "light"} blk blk--${name} blk--pad-${block.pad ?? pad}`}>
      <div className="container">
        {block.title ? (
          <div className={`heading${align === "center" ? " heading--center" : ""}`}>
            {block.eyebrow ? <span className="pill">{block.eyebrow}</span> : null}
            <h2 className="h2">
              <Accent text={block.title} />
            </h2>
            <span className="heading__rule" aria-hidden="true" />
            {block.intro ? <p className="heading__intro">{block.intro}</p> : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}

// A value of "—" means the figure is not verified yet; that tile is left out, and the row too if none remain.
const realStats = <T extends Stat>(items: T[] = []) => items.filter((item) => item.value.trim() !== "—");

function StatRow({ items: all }: { items: (Stat & { note?: string })[] }) {
  const items = realStats(all);
  if (!items.length) return null;
  return (
    <ul className={`statrow statrow--${Math.min(items.length, 5)}`}>
      {items.map((item) => (
        <li key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
          {item.note ? <small>{item.note}</small> : null}
        </li>
      ))}
    </ul>
  );
}

function Hero({ block }: { block: HeroBlock }) {
  const tone = block.tone ?? "dark";
  const dark = tone === "dark" || tone === "navy";
  const split = Boolean(block.form || block.aside);
  const align = split ? "left" : (block.align ?? "left");

  return (
    <section className={`phero phero--${tone} phero--${block.size ?? "lg"} phero--${align}${split ? " phero--split" : ""}`}>
      <div className="container phero__inner">
        <div className="phero__copy">
          {block.breadcrumbs?.length ? (
            <nav className="crumbs" aria-label="Breadcrumb">
              <ol>
                {block.breadcrumbs.map((crumb, index) => (
                  <li key={crumb.label}>
                    {index > 0 ? <ChevronRight size={12} aria-hidden="true" /> : null}
                    {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : <span aria-current="page">{crumb.label}</span>}
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}
          {block.eyebrow ? <span className="pill">{block.eyebrow}</span> : null}
          <h1 className="phero__title">
            <Accent text={block.title} />
          </h1>
          {block.text ? <p className="phero__text">{block.text}</p> : null}
          {block.bullets?.length ? (
            <ul className="checks">
              {block.bullets.map((bullet) => (
                <li key={bullet}>
                  <CircleCheck size={18} aria-hidden="true" />
                  {bullet}
                </li>
              ))}
            </ul>
          ) : null}
          <Buttons ctas={block.ctas} dark={dark} />
          {block.note ? <p className="phero__note">{block.note}</p> : null}
          {block.stats?.length ? <StatRow items={block.stats} /> : null}
        </div>

        {block.form ? (
          <LeadFormCard spec={block.form} />
        ) : block.aside ? (
          <aside className="phero__aside">
            <p className="phero__aside-title">{block.aside.title}</p>
            <ul>
              {block.aside.items.map((item) => (
                <li key={item}>
                  <Check size={16} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        ) : null}
      </div>
    </section>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "hero":
      return <Hero block={block} />;

    case "painHook":
      return (
        <div className="painhook">
          <div className="container painhook__inner">
            <span className="painhook__label">{block.label}</span>
            <p>{block.text}</p>
          </div>
        </div>
      );

    case "logos":
      return (
        <Shell block={block} name="logos" pad="sm">
          <LogoRow />
          {block.badges?.length ? (
            <ul className="chips chips--center logos__badges">
              {block.badges.map((badge) => (
                <li key={badge}>{badge}</li>
              ))}
            </ul>
          ) : null}
          {block.caption ? <p className="trusted__caption">{block.caption}</p> : null}
        </Shell>
      );

    case "cards":
      return (
        <Shell block={block} name="cards">
          <ul className={`cardgrid cardgrid--${block.columns ?? 3}`}>
            {block.items.map((item, index) => {
              const body = (
                <>
                  {block.numbered ? (
                    <span className="card__number" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  ) : null}
                  {item.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img className="card__image" src={item.image} alt="" loading="lazy" decoding="async" width={1280} height={800} />
                  ) : null}
                  {item.icon ? (
                    <span className="card__icon">
                      <Icon name={item.icon} size={22} />
                    </span>
                  ) : null}
                  {item.tag ? <span className="pill card__tag">{item.tag}</span> : null}
                  {item.metric ? <p className="card__metric">{item.metric}</p> : null}
                  <h3 className="card__title">{item.title}</h3>
                  {item.text ? <p className="card__text">{item.text}</p> : null}
                  {item.list?.length ? (
                    <ul className="checks checks--small">
                      {item.list.map((entry) => (
                        <li key={entry}>
                          <Check size={15} aria-hidden="true" />
                          {entry}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {item.href ? (
                    <span className="link-arrow card__link">
                      {item.linkLabel ?? "Learn more"}
                      <ArrowRight size={14} aria-hidden="true" />
                    </span>
                  ) : null}
                </>
              );
              return (
                <li key={item.title + index}>
                  {item.href ? (
                    <Link href={item.href} className="card card--link">
                      {body}
                    </Link>
                  ) : (
                    <div className="card">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
          {block.footnote ? <p className="blk__footnote">{block.footnote}</p> : null}
        </Shell>
      );

    case "split":
      return (
        <Shell block={block} name="split">
          <div className={`split split--${Math.min(block.panels.length, 3)}`}>
            {block.panels.map((panel) => {
              const mood = panel.mood ?? "neutral";
              const Mark = mood === "bad" ? X : mood === "good" ? Check : Minus;
              return (
                <div key={panel.title} className={`split__panel split__panel--${mood}`}>
                  <h3 className="split__title">{panel.title}</h3>
                  <ul>
                    {panel.items.map((item) => {
                      const entry = typeof item === "string" ? { title: "", text: item } : item;
                      return (
                        <li key={entry.title + entry.text}>
                          <span className="split__mark">
                            <Mark size={14} aria-hidden="true" />
                          </span>
                          <span>
                            {entry.title ? <strong>{entry.title}</strong> : null}
                            {entry.text}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          {block.footnote ? <p className="blk__footnote">{block.footnote}</p> : null}
        </Shell>
      );

    case "table":
      return (
        <Shell block={block} name="table" pad="md">
          <div className="dtable__wrap">
            <table className="dtable">
              <thead>
                <tr>
                  {block.columns.map((column, index) => (
                    <th key={column + index} scope="col" className={block.highlight === index ? "is-highlight" : undefined}>
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, index) =>
                      index === 0 ? (
                        <th key={index} scope="row">
                          {cell}
                        </th>
                      ) : (
                        <td
                          key={index}
                          data-label={block.columns[index]}
                          className={block.highlight === index ? "is-highlight" : undefined}
                        >
                          {cell}
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.footnote ? <p className="blk__footnote">{block.footnote}</p> : null}
        </Shell>
      );

    case "steps": {
      const layout = block.layout ?? "row";
      return (
        <Shell block={block} name="steps">
          <ol className={`steps steps--${layout} steps--n${Math.min(block.items.length, 5)}`}>
            {block.items.map((item, index) => (
              <li
                key={item.title}
                className="steps__item"
                style={layout === "funnel" ? { width: `${100 - index * (48 / Math.max(block.items.length - 1, 1))}%` } : undefined}
              >
                <span className="steps__dot">{index + 1}</span>
                <div className="steps__body">
                  {/* "—" marks a figure still to be supplied, so no pill is drawn for it. */}
                  {item.tag && item.tag !== "—" ? <span className="pill steps__tag">{item.tag}</span> : null}
                  <h3 className="steps__title">{item.title}</h3>
                  {item.text ? <p>{item.text}</p> : null}
                </div>
              </li>
            ))}
          </ol>
          {block.footnote ? <p className="blk__footnote">{block.footnote}</p> : null}
        </Shell>
      );
    }

    case "stats":
      if (!realStats(block.items).length) return null;
      return (
        <Shell block={block} name="stats" pad="md">
          <StatRow items={block.items} />
        </Shell>
      );

    case "tabs":
      return (
        <Shell block={block} name="tabs" pad="md">
          <TabsView items={block.items} />
        </Shell>
      );

    case "quote":
      return (
        <Shell block={block} name="quote" pad="md">
          <figure className="bigquote">
            <Quote size={36} className="bigquote__icon" aria-hidden="true" />
            <blockquote>{block.text}</blockquote>
            {block.source ? <figcaption>{block.source}</figcaption> : null}
            {block.stat ? (
              <p className="bigquote__stat">
                <strong>{block.stat.value}</strong>
                {block.stat.label}
              </p>
            ) : null}
          </figure>
        </Shell>
      );

    case "accordion":
      return (
        <Shell block={block} name="accordion" pad="md">
          {block.stats?.length ? <StatRow items={block.stats} /> : null}
          <AccordionView items={block.items} columns={block.columns} />
        </Shell>
      );

    case "versions":
      return (
        <Shell block={block} name="versions" pad="md">
          <ol className="versions">
            {block.items.map((item) => (
              <li key={item.version}>
                <span className="versions__year">{item.year}</span>
                <div className="versions__body">
                  <p className="versions__head">
                    <strong>{item.version}</strong>
                    <span className={`pill pill--${item.tagTone ?? "primary"}`}>{item.tag}</span>
                  </p>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Shell>
      );

    case "testimonials":
      // Real reviews live in content/reviews.ts. With none yet, the section is left out entirely.
      if (reviews.length === 0) return null;
      return (
        <Shell block={block} name="testimonials" pad="md">
          <ReviewList items={reviews.slice(0, 3)} />
        </Shell>
      );

    case "pricing":
      return (
        <Shell block={block} name="pricing" pad="md">
          <ul className={`cardgrid cardgrid--${Math.min(block.tiers.length, 4)}`}>
            {block.tiers.map((tier) => (
              <li key={tier.name}>
                <div className={`card tier${tier.featured ? " tier--featured" : ""}`}>
                  <span className="pill card__tag">{tier.level}</span>
                  <h3 className="card__title">{tier.name}</h3>
                  <p className="tier__price">
                    {tier.price}
                    {tier.priceNote ? <small>{tier.priceNote}</small> : null}
                  </p>
                  <ul className="checks checks--small">
                    {tier.features.map((feature) => (
                      <li key={feature}>
                        <Check size={15} aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {tier.cta ? (
                    <Link href={tier.cta.href} className={`btn btn--${tier.featured ? "primary" : "outline"} btn--block`}>
                      {tier.cta.label}
                    </Link>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
          {block.footnote ? <p className="blk__footnote">{block.footnote}</p> : null}
        </Shell>
      );

    case "quiz":
      return (
        <Shell block={block} name="quiz" pad="md">
          <QuizView block={block} />
        </Shell>
      );

    case "form":
      return (
        <Shell block={{ ...block, title: undefined }} name="form">
          <div className="formblock">
            <div className="formblock__copy">
              {block.title ? (
                <div className="heading">
                  {block.eyebrow ? <span className="pill">{block.eyebrow}</span> : null}
                  <h2 className="h2">
                    <Accent text={block.title} />
                  </h2>
                  <span className="heading__rule" aria-hidden="true" />
                  {block.intro ? <p className="heading__intro">{block.intro}</p> : null}
                </div>
              ) : null}
              {block.lists?.map((list) => (
                <div key={list.title} className="formblock__list">
                  <p className="lead__list-title">{list.title}</p>
                  <ul className="checks checks--small">
                    {list.items.map((item) => (
                      <li key={item}>
                        <Check size={15} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <LeadFormCard spec={block.form} />
          </div>
        </Shell>
      );

    case "cta": {
      const variant = block.variant ?? "dark";
      return (
        <section id={block.id} className={`ctab ctab--${variant}`}>
          <div className="container">
            <div className="ctab__inner">
              <div className="ctab__copy">
                <h2 className="ctab__title">{block.title}</h2>
                {block.text ? <p>{block.text}</p> : null}
              </div>
              <Buttons ctas={block.ctas.map((cta, index) => (variant === "gradient" && index === 0 ? { ...cta, variant: "white" } : cta))} dark />
              {block.note ? <p className="ctab__note">{block.note}</p> : null}
            </div>
          </div>
        </section>
      );
    }

    case "insights": {
      const posts = latestPosts(3);
      if (posts.length === 0) return null;
      return (
        <section className="section section--muted insights blk blk--pad-lg">
          <div className="container">
            <div className="insights__head">
              <h2 className="h2">
                <Accent text={block.title ?? "Related [Insights]"} />
              </h2>
              <Link href="/insights/" className="btn btn--outline">
                View All Articles
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <ul className="insights__grid">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/insights/${post.slug}/`} className="insights__card">
                    <span className={`insights__thumb hero__slide--${post.tone}`} style={postImageStyle(post, true)} aria-hidden="true">
                      <span>{post.title}</span>
                    </span>
                    <span className="insights__body">
                      <span className="insights__category">{post.category}</span>
                      <span className="insights__title">{post.title}</span>
                      <span className="insights__excerpt">{post.excerpt}</span>
                      <span className="insights__arrow">
                        <ArrowRight size={14} aria-hidden="true" />
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      );
    }

    case "faq":
      return (
        <section id={block.id} className="section section--light faq blk blk--pad-lg">
          <div className="container faq__layout">
            <div className="faq__aside">
              <div className="heading">
                <h2 className="h2">
                  <Accent text={block.title ?? "Frequently Asked [Questions]"} />
                </h2>
                <span className="heading__rule" aria-hidden="true" />
              </div>
              <Link href={block.button?.href ?? "/faq/"} className="btn btn--primary">
                {block.button?.label ?? "Have More Questions?"}
              </Link>
            </div>
            <AccordionView items={block.items.map((item) => ({ title: item.q, text: item.a }))} />
          </div>
        </section>
      );

    case "text": {
      // Lines ending in "—" wait for a verified figure and are left out until then.
      const list = block.list?.filter((item) => !/—s*$/.test(item));
      const asideItems = block.aside?.items.filter((item) => !/—s*$/.test(item)) ?? [];
      const aside = block.aside && asideItems.length ? { ...block.aside, items: asideItems } : null;
      return (
        <Shell block={{ ...block, align: block.align ?? "left" }} name="text">
          <div className={`textblock${aside ? " textblock--aside" : ""}`}>
            <div className="textblock__body">
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {list?.length ? (
                <ul className="checks">
                  {list.map((item) => (
                    <li key={item}>
                      <CircleCheck size={18} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
              <Buttons ctas={block.ctas} dark={block.tone === "dark" || block.tone === "navy"} />
            </div>
            {aside ? (
              <aside className="card textblock__aside">
                <h3 className="card__title">{aside.title}</h3>
                <ul className="checks checks--small">
                  {aside.items.map((item) => (
                    <li key={item}>
                      <Check size={15} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </aside>
            ) : null}
          </div>
        </Shell>
      );
    }

    case "linkGrid":
      return (
        <Shell block={block} name="linkgrid" pad="md">
          <LinkGridView groups={block.groups} />
        </Shell>
      );

    case "people":
      return (
        <Shell block={block} name="people">
          <ul className={`cardgrid cardgrid--${Math.min(Math.max(block.items.length, 2), 3)}`}>
            {block.items.map((person, index) => (
              <li key={person.name + index}>
                <div className="card person">
                  <span
                    className="person__photo"
                    style={person.image ? { backgroundImage: `url(${person.image})` } : undefined}
                    aria-hidden="true"
                  >
                    {person.image ? null : person.name.split(" ").map((word) => word.charAt(0)).slice(0, 2).join("")}
                  </span>
                  <h3 className="card__title">{person.name}</h3>
                  <p className="person__role">{person.role}</p>
                  {person.bio ? <p className="card__text">{person.bio}</p> : null}
                </div>
              </li>
            ))}
          </ul>
        </Shell>
      );

    case "jobs":
      return (
        <Shell block={block} name="jobs" pad="md">
          {block.items.length === 0 ? (
            <p className="jobs__empty">{block.emptyText}</p>
          ) : (
            <ul className="jobs">
              {block.items.map((job) => (
                <li key={job.title}>
                  <div>
                    <h3 className="card__title">{job.title}</h3>
                    <p>
                      {job.location} · {job.kind}
                    </p>
                  </div>
                  <Link href={job.href} className="btn btn--outline">
                    View Role
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Shell>
      );

    case "caseMeta":
      return (
        <div className="casemeta">
          <div className="container">
            <dl>
              {block.items.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      );

    case "pdfGate":
      return (
        <div className={`pdfgate pdfgate--${block.tone ?? "dark"}`}>
          <div className="container pdfgate__inner">
            <p className="pdfgate__title">{block.title}</p>
            <PdfGateView block={block} />
          </div>
        </div>
      );

    case "calculator":
      return (
        <Shell block={block} name="calculator">
          <Calculator />
        </Shell>
      );

    case "gallery":
      return (
        <Shell block={block} name="gallery">
          <ul className={`gallery gallery--${Math.min(block.items.length, 2)}`}>
            {block.items.map((item) => (
              <li key={item.src}>
                <figure className="gallery__item">
                  <button
                    type="button"
                    className="zoomable"
                    data-zoom={item.src}
                    data-zoom-alt={item.alt}
                    data-zoom-caption={item.caption ?? ""}
                    aria-label={`Enlarge image: ${item.alt}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.src} alt={item.alt} loading="lazy" decoding="async" width={1280} height={800} />
                    <span className="zoomable__hint" aria-hidden="true">
                      <Maximize2 size={16} />
                    </span>
                  </button>
                  {item.caption ? <figcaption>{item.caption}</figcaption> : null}
                </figure>
              </li>
            ))}
          </ul>
        </Shell>
      );

    case "savings":
      return (
        <Shell block={block} name="savings">
          <SavingsCalculator {...block} />
        </Shell>
      );

    case "marquee":
      if (reviews.length === 0) return null;
      return (
        <section className="section section--navy reviews blk blk--pad-lg">
          <div className="container">
            <div className="heading heading--center">
              <h2 className="h2">
                <Accent text={block.title ?? testimonials.title} />
              </h2>
              <span className="heading__rule" aria-hidden="true" />
            </div>
            {reviews.length <= 3 ? <ReviewList items={reviews} /> : null}
          </div>
          {reviews.length > 3 ? <ReviewList items={reviews} /> : null}
        </section>
      );
  }
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="page">
      {blocks
        .filter((block) => !block.draft)
        .map((block, index) => (
          <BlockView key={index} block={block} />
        ))}
    </div>
  );
}
