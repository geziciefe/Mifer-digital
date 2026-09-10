import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import type { Demo } from "../data/demos";

function ConceptVisual({ demo }: { demo: Demo }) {
  if (demo.thumbnail) {
    return (
      <Image
        className="demo-visual__image"
        src={demo.thumbnail}
        alt={`${demo.title} önizlemesi`}
        width="960"
        height="640"
        loading="lazy"
        unoptimized
      />
    );
  }

  return (
    <div className={`demo-visual demo-visual--${demo.theme}`} aria-hidden="true">
      <div className="demo-browserbar">
        <span />
        <span />
        <span />
        <i>{demo.sector}</i>
      </div>
      <div className="demo-interface">
        <div className="demo-interface__nav">
          <span className="demo-interface__logo" />
          <span />
          <span />
          <span />
        </div>
        <div className="demo-interface__body">
          <div className="demo-interface__copy">
            <span className="demo-interface__eyebrow" />
            <strong />
            <strong />
            <p />
            <i />
          </div>
          <div className="demo-interface__media">
            <span />
            <span />
          </div>
        </div>
      </div>
      <span className="demo-visual__stamp">Konsept</span>
    </div>
  );
}

export function DemoGrid({ items }: { items: Demo[] }) {
  return (
    <div className="demo-grid">
      {items.map((demo, index) => {
        const isLive = demo.status === "live" && Boolean(demo.liveUrl);

        return (
          <article className="demo-card" key={demo.slug} style={{ "--demo-accent": demo.accent } as CSSProperties}>
            <div className="demo-card__visual-wrap">
              <ConceptVisual demo={demo} />
              <span className="demo-card__number">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="demo-card__meta">
              <span>{demo.sector}</span>
              <span>{demo.status === "live" ? "Canlı demo" : "Hazırlanıyor"}</span>
            </div>
            <h3>{demo.title}</h3>
            <p>{demo.summary}</p>
            <div className="demo-card__tags" aria-label="Kapsam">
              {demo.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <p className="demo-card__disclaimer">
              Konsept çalışma — gerçek müşteri projesi değildir.
            </p>
            {isLive ? (
              <a className="demo-card__action" href={demo.liveUrl!} target="_blank" rel="noreferrer">
                Canlı demoyu aç
                <ArrowUpRight aria-hidden="true" />
              </a>
            ) : (
              <span className="demo-card__action demo-card__action--disabled" aria-disabled="true">
                Yakında
              </span>
            )}
          </article>
        );
      })}
    </div>
  );
}
