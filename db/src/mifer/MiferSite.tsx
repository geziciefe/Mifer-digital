"use client";

import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  AtSign,
  ChevronDown,
  Mail,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { contact, content, projects, routes, type Locale, type Project } from "./content";

function LanguageControl({ lang, alternatePath }: { lang: Locale; alternatePath: string }) {
  const switchLabel = lang === "tr" ? "Switch to English" : "Türkçeye geç";
  const flagSource = lang === "tr" ? "/brand/flag-tr.svg" : "/brand/flag-en-split.svg";

  return (
    <Link className={`language-control language-control--${lang}`} href={alternatePath} aria-label={switchLabel}>
      <span className="language-control__flags" aria-hidden="true">
        <Image src={flagSource} width={120} height={80} alt="" unoptimized />
      </span>
      <strong>{lang.toUpperCase()}</strong>
    </Link>
  );
}

function Header({
  lang,
  alternatePath,
  onContact,
}: {
  lang: Locale;
  alternatePath: string;
  onContact: () => void;
}) {
  const t = content[lang];
  const route = routes[lang];
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 18);
      setHidden(y > 180 && y > lastY + 6 && !menuOpen);
      if (y < lastY - 6 || y < 180) setHidden(false);
      lastY = y;
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const openContact = () => {
    closeMenu();
    onContact();
  };

  return (
    <header className={`mifer-header${scrolled ? " is-scrolled" : ""}${hidden ? " is-hidden" : ""}`}>
      <div className="mifer-header__inner">
        <nav className="desktop-navigation" aria-label={lang === "tr" ? "Ana menü" : "Primary navigation"}>
          <a href={`${route.home}#services`}>
            {t.nav.services}
            <ChevronDown aria-hidden="true" />
          </a>
          <Link href={route.work}>{t.nav.work}</Link>
          <a href={`${route.home}#approach`}>{t.nav.approach}</a>
          <a href={`${route.home}#about`}>{t.nav.about}</a>
        </nav>

        <Link className="header-logo" href={route.home} aria-label="Mifer Digital">
          <Image
            src="/brand/mifer-digital-logo.png"
            width={791}
            height={812}
            alt="Mifer Digital"
            priority
            unoptimized
          />
        </Link>

        <div className="header-actions">
          <LanguageControl lang={lang} alternatePath={alternatePath} />
          <button className="header-contact" type="button" onClick={openContact}>
            {t.nav.contact}
          </button>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? t.nav.close : t.nav.menu}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div className={`mobile-navigation${menuOpen ? " is-open" : ""}`} id="mobile-navigation">
        <nav aria-label={lang === "tr" ? "Mobil menü" : "Mobile navigation"}>
          <a href={`${route.home}#services`} onClick={closeMenu}><span>01</span>{t.nav.services}</a>
          <Link href={route.work} onClick={closeMenu}><span>02</span>{t.nav.work}</Link>
          <a href={`${route.home}#approach`} onClick={closeMenu}><span>03</span>{t.nav.approach}</a>
          <a href={`${route.home}#about`} onClick={closeMenu}><span>04</span>{t.nav.about}</a>
          <button type="button" onClick={openContact}><span>05</span>{t.nav.contact}</button>
        </nav>
      </div>
    </header>
  );
}

function ConceptArtwork({ project, index }: { project: Project; index: number }) {
  return (
    <div className={`concept-art concept-art--${project.accent}`} aria-hidden="true">
      <div className="concept-art__meta">
        <span>0{index + 1}</span>
        <span>MIFER / CONCEPT</span>
      </div>
      <span className="concept-art__word">{project.artWord}</span>
      <span className="concept-art__orb" />
      <span className="concept-art__ring" />
      <div className="concept-art__browser">
        <span className="concept-art__browser-bar"><i /><i /><i /></span>
        <span className="concept-art__browser-body"><i /><i /><i /></span>
      </div>
    </div>
  );
}

function ConceptList({ lang }: { lang: Locale }) {
  const t = content[lang];

  return (
    <div className="concept-list">
      {projects.map((project, index) => (
        <article className={`concept-row${index % 2 ? " concept-row--reverse" : ""}`} key={project.slug} data-reveal>
          <div className="concept-row__visual">
            <ConceptArtwork project={project} index={index} />
          </div>
          <div className="concept-row__copy">
            <div className="concept-row__meta">
              <span>0{index + 1}</span>
              <span>{project.sector[lang]}</span>
              <span>{t.work.concept}</span>
            </div>
            <h3>{project.title[lang]}</h3>
            <p>{project.summary[lang]}</p>
            <div className="concept-row__tags">
              {project.tags[lang].map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <p className="concept-row__status">{t.work.status}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function ContactPanel({ lang, open, onClose }: { lang: Locale; open: boolean; onClose: () => void }) {
  const t = content[lang].form;

  useEffect(() => {
    document.body.classList.toggle("contact-panel-open", open);
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("contact-panel-open");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const labels = lang === "tr"
      ? ["Ad Soyad", "E-posta", "İşletme / Marka", "Telefon", "Hizmet", "Site / Instagram", "Proje"]
      : ["Name", "Email", "Business / Brand", "Phone", "Service", "Website / Instagram", "Project"];
    const values = ["name", "email", "brand", "phone", "service", "link"];
    const body = values.map((key, index) => `${labels[index]}: ${String(data.get(key) || "-")}`);
    body.push("", `${labels[6]}:`, String(data.get("message") || ""));
    const subject = lang === "tr" ? "Mifer Digital — Yeni proje talebi" : "Mifer Digital — New project enquiry";
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body.join("\n"))}`;
  };

  return (
    <div className={`contact-panel${open ? " is-open" : ""}`} aria-hidden={!open}>
      <button className="contact-panel__backdrop" type="button" aria-label={t.title} onClick={onClose} />
      <section className="contact-dialog" role="dialog" aria-modal="true" aria-labelledby="contact-title">
        <header className="contact-dialog__header">
          <div className="contact-dialog__brand">
            <Image src="/brand/mifer-mark.png" width={365} height={342} alt="" unoptimized />
            <span>MIFER DIGITAL</span>
          </div>
          <button className="contact-dialog__close" type="button" onClick={onClose} aria-label={content[lang].nav.close}>
            <X aria-hidden="true" />
          </button>
        </header>

        <div className="contact-dialog__body">
          <div className="contact-dialog__intro">
            <span className="section-label">{t.eyebrow}</span>
            <h2 id="contact-title">{t.title}</h2>
            <p>{t.summary}</p>
            <a href={`mailto:${contact.email}`}>{contact.email}<ArrowUpRight aria-hidden="true" /></a>
          </div>

          <form className="project-form" onSubmit={submit}>
            <label className="form-field"><span>{t.name}</span><input name="name" autoComplete="name" required autoFocus={open} /></label>
            <label className="form-field"><span>{t.email}</span><input type="email" name="email" autoComplete="email" required /></label>
            <label className="form-field"><span>{t.brand}</span><input name="brand" autoComplete="organization" /></label>
            <label className="form-field"><span>{t.phone}</span><input type="tel" name="phone" autoComplete="tel" /></label>
            <label className="form-field form-field--wide">
              <span>{t.service}</span>
              <select name="service" required defaultValue="">
                <option value="" disabled>{t.choose}</option>
                {t.options.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </label>
            <label className="form-field form-field--wide"><span>{t.link}</span><input name="link" inputMode="url" /></label>
            <label className="form-field form-field--wide"><span>{t.message}</span><textarea name="message" rows={6} required /></label>
            <label className="form-consent form-field--wide"><input type="checkbox" required /><span>{t.consent}</span></label>
            <button className="form-submit form-field--wide" type="submit">{t.submit}<ArrowUpRight aria-hidden="true" /></button>
          </form>
        </div>
      </section>
    </div>
  );
}

function Footer({ lang }: { lang: Locale }) {
  const t = content[lang];
  const route = routes[lang];

  return (
    <footer className="mifer-footer">
      <div className="container-shell footer-top">
        <Link className="footer-brand" href={route.home} aria-label="Mifer Digital">
          <Image src="/brand/mifer-mark.png" width={365} height={342} alt="" unoptimized />
          <span>MIFER DIGITAL</span>
        </Link>
        <div className="footer-contact">
          <a href={`mailto:${contact.email}`}>{contact.email}<ArrowUpRight aria-hidden="true" /></a>
          <p>{t.contact.location}</p>
        </div>
      </div>
      <div className="container-shell footer-wordmark" aria-hidden="true">MIFER</div>
      <div className="container-shell footer-bottom">
        <span>© {new Date().getFullYear()} Mifer Digital</span>
        <div>
          <a href={contact.instagramHref} target="_blank" rel="noreferrer">Instagram</a>
          <a href={contact.whatsappHref} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}

function ContactSection({ lang }: { lang: Locale }) {
  const t = content[lang].contact;
  const channels = [
    {
      index: "01",
      label: t.emailLabel,
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: Mail,
      external: false,
    },
    {
      index: "02",
      label: t.whatsappLabel,
      value: t.whatsappAction,
      href: contact.whatsappHref,
      icon: MessageCircle,
      external: true,
    },
    {
      index: "03",
      label: t.instagramLabel,
      value: t.instagramAction,
      href: contact.instagramHref,
      icon: AtSign,
      external: true,
    },
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="container-shell contact-shell">
        <div className="contact-heading">
          <div className="section-label">{t.label}</div>
          <h2 data-reveal="clip"><span>{t.titleA}</span><span>{t.titleB}</span></h2>
        </div>
        <div className="contact-intent" data-reveal>
          <p>{t.intro}</p>
          <span>{t.location}</span>
        </div>
        <div className="contact-channels">
          {channels.map(({ index, label, value, href, icon: Icon, external }) => (
            <a key={label} className="contact-channel" data-reveal href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
              <span className="contact-channel__index">{index}</span>
              <Icon aria-hidden="true" />
              <span className="contact-channel__copy"><small>{label}</small><strong>{value}</strong></span>
              <ArrowUpRight className="contact-channel__arrow" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function useReveal(lang: Locale) {
  useEffect(() => {
    document.documentElement.lang = lang;
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [lang]);
}

export function HomePage({ lang }: { lang: Locale }) {
  const t = content[lang];
  const route = routes[lang];
  const [contactOpen, setContactOpen] = useState(false);
  useReveal(lang);

  return (
    <>
      <Header lang={lang} alternatePath={route.alternateHome} onContact={() => setContactOpen(true)} />
      <main id="main-content" lang={lang}>
        <section className="hero-section">
          <div className="container-shell hero-shell">
            <h1 className="hero-title" aria-label={`${t.hero.line1} ${t.hero.line2} ${t.hero.line3}`}>
              <span className="hero-line"><span>{t.hero.line1}</span></span>
              <span className="hero-line"><span>{t.hero.line2}</span></span>
              <span className="hero-line hero-line--accent"><span>{t.hero.line3}</span></span>
            </h1>
            <p className="hero-summary">{t.hero.summary}</p>
            <div className="hero-actions">
              <Link className="pill pill--dark" href={route.work}>{t.hero.work}<ArrowUpRight aria-hidden="true" /></Link>
              <button className="text-link" type="button" onClick={() => setContactOpen(true)}>{t.hero.project}<ArrowRight aria-hidden="true" /></button>
            </div>
          </div>
        </section>

        <section className="kinetic-stage" aria-label="Mifer Digital">
          <div className="kinetic-track kinetic-track--top" aria-hidden="true"><span>WEB / DESIGN / GOOGLE / GROWTH /&nbsp;</span><span>WEB / DESIGN / GOOGLE / GROWTH /&nbsp;</span></div>
          <div className="kinetic-track kinetic-track--bottom" aria-hidden="true"><span>BUILD / SEARCH / BRAND / DIGITAL /&nbsp;</span><span>BUILD / SEARCH / BRAND / DIGITAL /&nbsp;</span></div>
          <div className="kinetic-lockup" data-reveal="scale">
            <span className="kinetic-lockup__name">MIFER</span>
            <span className="kinetic-lockup__descriptor">DIGITAL</span>
            <i aria-hidden="true" />
          </div>
          <div className="kinetic-meta"><span>ISTANBUL</span><span>DESIGN + DEVELOPMENT</span></div>
        </section>

        <section className="intro-section section-pad">
          <div className="container-shell intro-layout">
            <div className="section-label" data-reveal="left">{t.intro.label}</div>
            <div className="intro-content">
              <h2 className="intro-title" data-reveal="clip">{t.intro.title}</h2>
              <p className="intro-lead" data-reveal>{t.intro.lead}</p>
              <div className="intro-principles">
                {t.intro.principles.map(([number, title, text]) => (
                  <article className="intro-principle" key={number} data-reveal>
                    <span>{number}</span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="services-section section-pad" id="services">
          <div className="container-shell">
            <div className="editorial-grid services-heading">
              <div className="section-label section-label--light">{t.services.label}</div>
              <h2 data-reveal="clip">{t.services.title}</h2>
            </div>
            <div className="service-list">
              {t.services.items.map(([number, title, text]) => (
                <article className="service-row" key={number} data-reveal>
                  <span>{number}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="container-shell">
            <div className="editorial-grid work-heading">
              <div className="section-label">{t.work.label}</div>
              <div>
                <h2 data-reveal="clip"><span>{t.work.titleA}</span><span>{t.work.titleB}</span></h2>
                <p data-reveal>{t.work.summary}</p>
              </div>
            </div>
            <ConceptList lang={lang} />
            <Link className="large-text-link" href={route.work}>{t.work.all}<ArrowUpRight aria-hidden="true" /></Link>
          </div>
        </section>

        <section className="approach-section section-pad" id="approach">
          <div className="container-shell approach-layout">
            <div className="approach-heading">
              <div className="section-label">{t.approach.label}</div>
              <h2 data-reveal="clip">{t.approach.title}</h2>
              <div className="approach-heading__count" data-reveal aria-hidden="true"><span>01</span><i /><span>04</span></div>
            </div>
            <ol className="approach-rail">
              {t.approach.items.map(([number, title, text]) => (
                <li key={number} data-reveal>
                  <span className="approach-rail__number">{number}</span>
                  <div className="approach-rail__copy"><h3>{title}</h3><p>{text}</p></div>
                  <ArrowUpRight aria-hidden="true" />
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="about-section section-pad" id="about">
          <div className="container-shell editorial-grid about-grid">
            <div className="section-label section-label--light">{t.about.label}</div>
            <div>
              <h2 data-reveal="clip">{t.about.title}</h2>
              <p className="about-body" data-reveal>{t.about.body}</p>
              <div className="about-chips" data-reveal>{t.about.chips.map((chip) => <span key={chip}>{chip}</span>)}</div>
            </div>
          </div>
        </section>

        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
      <ContactPanel lang={lang} open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}

export function WorkPage({ lang }: { lang: Locale }) {
  const t = content[lang];
  const route = routes[lang];
  const [contactOpen, setContactOpen] = useState(false);
  useReveal(lang);

  return (
    <>
      <Header lang={lang} alternatePath={route.alternateWork} onContact={() => setContactOpen(true)} />
      <main className="work-page" id="main-content" lang={lang}>
        <section className="work-page__hero">
          <div className="container-shell editorial-grid">
            <div className="section-label">{t.workPage.label}</div>
            <div>
              <h1 data-reveal>{t.workPage.title}</h1>
              <p>{t.workPage.summary}</p>
            </div>
          </div>
        </section>
        <section className="work-page__list section-pad">
          <div className="container-shell">
            <ConceptList lang={lang} />
            <Link className="large-text-link" href={route.home}><ArrowLeft aria-hidden="true" />{t.workPage.back}</Link>
          </div>
        </section>
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
      <ContactPanel lang={lang} open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
