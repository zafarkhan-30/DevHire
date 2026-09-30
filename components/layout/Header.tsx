"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Apple,
  ArrowRight,
  Atom,
  ChevronDown,
  Cloud,
  Code,
  Coffee,
  Database,
  Hexagon,
  LayoutTemplate,
  Menu,
  Server,
  ShieldCheck,
  FileLock2,
  KeyRound,
  CalendarClock,
  DoorOpen,
  Smartphone,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { megaMenus, navLinks, site } from "@/content/site";
import { Fragment } from "react";
import { Logo } from "./Logo";

const NAV_ICONS: Record<string, LucideIcon> = {
  apple: Apple,
  atom: Atom,
  cloud: Cloud,
  code: Code,
  coffee: Coffee,
  database: Database,
  hexagon: Hexagon,
  layout: LayoutTemplate,
  server: Server,
  smartphone: Smartphone,
  users: Users,
};

// One icon per trust badge, matched to its meaning; unknown keys fall back to a shield.
const TRUST_ICONS: Record<string, LucideIcon> = {
  nda: FileLock2,
  ip: KeyRound,
  terms: CalendarClock,
  exit: DoorOpen,
};

// Delay before a panel closes, so moving the pointer from the menu word into the panel does not flicker it shut.
const CLOSE_DELAY = 150;

export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [drawer, setDrawer] = useState(false);
  const [drawerGroup, setDrawerGroup] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };
  const openMenu = (id: string) => {
    cancelClose();
    setOpen(id);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(null), CLOSE_DELAY);
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(null);
        setDrawer(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      cancelClose();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawer]);

  const close = () => {
    cancelClose();
    setOpen(null);
    setDrawer(false);
  };

  return (
    <header className="site-header">
      <div className="trustbar">
        <div className="container trustbar__inner">
          {site.trustBadges.map((badge) => {
            const BadgeIcon = (badge.icon && TRUST_ICONS[badge.icon]) || ShieldCheck;
            return (
            <span key={badge.label} className="trustbar__item">
              <BadgeIcon size={15} aria-hidden="true" />
              <span>
                <strong>{badge.label}</strong>
                {badge.sub ? <small>{badge.sub}</small> : null}
              </span>
            </span>
            );
          })}
        </div>
      </div>

      <div className="site-header__bar">
        <div className="container site-header__inner">
          <Logo />

          <nav className="site-nav" aria-label="Main">
            <ul>
              {megaMenus.map((menu) => (
                <Fragment key={menu.id}>
                <li onMouseEnter={() => openMenu(menu.id)} onMouseLeave={scheduleClose}>
                  <button
                    type="button"
                    className={`site-nav__link${open === menu.id ? " is-active" : ""}`}
                    aria-expanded={open === menu.id}
                    aria-controls={`mega-${menu.id}`}
                    onClick={() => (open === menu.id ? setOpen(null) : openMenu(menu.id))}
                    onFocus={() => openMenu(menu.id)}
                  >
                    {menu.label}
                    <ChevronDown size={16} aria-hidden="true" />
                  </button>
                </li>
                {navLinks
                  .filter((link) => link.after === menu.id)
                  .map((link) => (
                    <li key={link.href} onMouseEnter={scheduleClose}>
                      <Link href={link.href} className="site-nav__link" onClick={close}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </Fragment>
              ))}
            </ul>
          </nav>

          <Link href={site.primaryCta.href} className="btn btn--primary site-header__cta">
            {site.primaryCta.label}
          </Link>

          <button
            type="button"
            className="site-header__burger"
            aria-label={drawer ? "Close menu" : "Open menu"}
            aria-expanded={drawer}
            onClick={() => setDrawer(!drawer)}
          >
            {drawer ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {megaMenus.map((menu) => (
        <div
          key={menu.id}
          id={`mega-${menu.id}`}
          className={`mega${open === menu.id ? " is-open" : ""}`}
          hidden={open !== menu.id}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="container mega__inner">
            <div className="mega__intro">
              <p className="mega__title">
                {menu.title}
                <span className="accent">.</span>
              </p>
              <p className="mega__text">{menu.intro}</p>

              {menu.quickLinks?.length ? (
                <ul className="mega__quick">
                  {menu.quickLinks.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} onClick={close}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}

              {menu.featured ? (
                <div className="mega__featured">
                  <hr className="mega__divider" />
                  <p className="mega__featured-title">{menu.featured.title}</p>
                  <p className="mega__featured-text">
                    {menu.featured.text}{" "}
                    <Link href={menu.featured.href} onClick={close}>
                      {menu.featured.linkLabel}
                    </Link>
                  </p>
                </div>
              ) : null}
            </div>

            <div className="mega__body">
              <div className="mega__columns">
                {menu.columns.map((column) => (
                  <div key={column.heading} className="mega__column">
                    <p className="mega__heading">{column.heading}</p>
                    {column.links.length ? (
                      <ul>
                        {column.links.map((link) => {
                          const LinkIcon = link.icon ? NAV_ICONS[link.icon] : null;
                          return (
                            <li key={link.label}>
                              <Link href={link.href} onClick={close}>
                                {LinkIcon ? (
                                  <span className="mega__icon">
                                    <LinkIcon size={18} aria-hidden="true" />
                                  </span>
                                ) : null}
                                {link.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
                    {column.button ? (
                      <Link href={column.button.href} className="btn btn--primary mega__button" onClick={close}>
                        {column.button.label}
                      </Link>
                    ) : null}
                  </div>
                ))}
              </div>

              {menu.button ? (
                <Link href={menu.button.href} className="btn btn--primary mega__button mega__button--all" onClick={close}>
                  {menu.button.label}
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              ) : null}

              {menu.work?.items.length ? (
                <div className="mega__work">
                  <div className="mega__work-head">
                    <p className="mega__heading">{menu.work.heading}</p>
                    <Link href={menu.work.all.href} className="link-arrow" onClick={close}>
                      {menu.work.all.label}
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                  <ul>
                    {menu.work.items.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="mega__project" onClick={close}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={item.image} alt={`${item.title} project screenshot`} loading="lazy" decoding="async" width={1280} height={800} />
                          <span className="mega__project-tag">{item.tag}</span>
                          <span className="mega__project-title">{item.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {menu.topPicks?.length ? (
                <div className="mega__picks">
                  <p className="mega__heading">Our Top Picks</p>
                  <ul>
                    {menu.topPicks.map((pick) => (
                      <li key={pick.title}>
                        <Link href={pick.href} className={`mega__pick mega__pick--${pick.tone}`} onClick={close}>
                          <span className="mega__pick-tag">{pick.tag}</span>
                          <span className="mega__pick-title">{pick.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ))}

      <div className={`drawer${drawer ? " is-open" : ""}`} hidden={!drawer}>
        <nav aria-label="Mobile">
          {megaMenus.map((menu) => (
            <div key={menu.id} className="drawer__group">
              <button
                type="button"
                className="drawer__toggle"
                aria-expanded={drawerGroup === menu.id}
                onClick={() => setDrawerGroup(drawerGroup === menu.id ? null : menu.id)}
              >
                {menu.label}
                <ChevronDown size={16} aria-hidden="true" />
              </button>
              {drawerGroup === menu.id ? (
                <div className="drawer__panel">
                  {menu.columns.map((column) => {
                    const links = column.button ? [...column.links, column.button] : column.links;
                    return (
                      <div key={column.heading}>
                        <p className="mega__heading">{column.heading}</p>
                        <ul>
                          {links.map((link) => (
                            <li key={link.label}>
                              <Link href={link.href} onClick={close}>
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                  {menu.button ? (
                    <Link href={menu.button.href} className="link-arrow" onClick={close}>
                      {menu.button.label}
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  ) : null}
                  {menu.work?.items.length ? (
                    <div>
                      <p className="mega__heading">{menu.work.heading}</p>
                      <ul>
                        {[...menu.work.items, { title: menu.work.all.label, href: menu.work.all.href }].map((item) => (
                          <li key={item.href}>
                            <Link href={item.href} onClick={close}>
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              ) : null}
              {navLinks
                .filter((link) => link.after === menu.id)
                .map((link) => (
                  <Link key={link.href} href={link.href} className="drawer__toggle drawer__link" onClick={close}>
                    {link.label}
                  </Link>
                ))}
            </div>
          ))}
          <Link href={site.primaryCta.href} className="btn btn--primary btn--block" onClick={close}>
            {site.primaryCta.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
