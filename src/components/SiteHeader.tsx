"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { Brand } from "./Brand";
import { siteConfig } from "../data/siteConfig";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-header__brand" href="/" aria-label="Mifer Digital ana sayfa">
          <Brand compact />
        </Link>

        <nav className="site-header__nav" aria-label="Ana menü">
          {siteConfig.navigation.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="button button--header" href="/#iletisim">
          Projenizi konuşalım
          <ArrowUpRight aria-hidden="true" />
        </Link>

        <button
          className="mobile-menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <div className={`mobile-panel${menuOpen ? " mobile-panel--open" : ""}`} id="mobile-navigation">
        <nav aria-label="Mobil menü">
          {siteConfig.navigation.map((item, index) => (
            <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="button button--primary mobile-panel__cta" href="/#iletisim" onClick={() => setMenuOpen(false)}>
          Projenizi konuşalım
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}
