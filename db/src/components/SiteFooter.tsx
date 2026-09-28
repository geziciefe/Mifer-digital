import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { Brand } from "./Brand";
import { mailtoLink, siteConfig } from "../data/siteConfig";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__brand">
          <Link href="/" aria-label="Mifer Digital ana sayfa">
            <Brand inverted />
          </Link>
          <p>İşletmenizin internetteki görünümünü tek, tutarlı bir yapıda kurarız.</p>
        </div>

        <nav className="site-footer__nav" aria-label="Alt menü">
          <span>Menü</span>
          {siteConfig.navigation.map((item) => (
            <Link key={item.label} href={item.href}>{item.label}</Link>
          ))}
        </nav>

        <div className="site-footer__contact">
          <span>İletişim</span>
          <a href={mailtoLink}>
            <Mail aria-hidden="true" />
            {siteConfig.email}
          </a>
          <p>
            <MapPin aria-hidden="true" />
            {siteConfig.location}
          </p>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>© {new Date().getFullYear()} Mifer Digital</p>
        <p>{siteConfig.domain}</p>
        <a href={mailtoLink}>
          Projenizi konuşalım
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
