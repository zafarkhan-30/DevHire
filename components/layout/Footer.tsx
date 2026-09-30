import Link from "next/link";
import { Globe } from "lucide-react";
import { ArrowRight, Check } from "@/components/ui/SpriteIcons";
import { footer, site } from "@/content/site";
import { Icon, SocialIcon } from "@/components/ui/Icon";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  const year = new Date().getFullYear();
  const social = site.social.filter((item) => item.href && item.href !== "#");

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__tools">
            {footer.toolCards.map((card) => (
              <Link key={card.title} href={card.href} className="tool-card">
                <span className="tool-card__icon">
                  <Icon name={card.icon} size={18} />
                </span>
                <span className="tool-card__body">
                  <strong>{card.title}</strong>
                  <small>{card.text}</small>
                </span>
                <Check size={16} className="tool-card__check" aria-hidden="true" />
              </Link>
            ))}
          </div>
          <ul className="site-footer__proof">
            {footer.proofPoints.map((point) => (
              <li key={point}>
                <span className="site-footer__tick">
                  <Check size={12} aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__columns">
          {footer.columns.map((column) => (
            <div key={column.heading}>
              <p className="site-footer__heading">{column.heading}</p>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
              {"footerLink" in column && column.footerLink ? (
                <Link href={column.footerLink.href} className="link-arrow site-footer__all">
                  {column.footerLink.label}
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              ) : null}
            </div>
          ))}
        </div>

        <div className={`site-footer__bottom${social.length ? "" : " site-footer__bottom--two"}`}>
          <div>
            <p className="site-footer__label site-footer__label--title">{footer.newsletter.title}</p>
            <p className="small">{footer.newsletter.text}</p>
            <NewsletterForm />
          </div>
          {social.length ? (
          <div>
            <p className="site-footer__label">Follow Us</p>
            <ul className="site-footer__social">
              {social.map((item) => (
                <li key={item.label}>
                  <a href={item.href} aria-label={item.label} rel="noopener noreferrer">
                    <SocialIcon name={item.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          ) : null}
          <div>
            <p className="site-footer__label">Where We Work</p>
            <ul className="site-footer__offices">
              <li>
                <strong>
                  <Globe size={13} aria-hidden="true" />
                  {site.workModel.title}
                </strong>
                <span>{site.workModel.text}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__legal">
        <div className="container site-footer__legal-inner">
          <p>
            © {year} {site.name}
          </p>
          <ul>
            {footer.legal.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <p className="site-footer__strapline">{footer.strapline}</p>
        </div>
      </div>
    </footer>
  );
}
