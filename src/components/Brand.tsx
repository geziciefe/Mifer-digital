import Image from "next/image";

interface BrandProps {
  compact?: boolean;
  inverted?: boolean;
}

export function Brand({ compact = false, inverted = false }: BrandProps) {
  return (
    <span className={`brand-lockup${compact ? " brand-lockup--compact" : ""}${inverted ? " brand-lockup--inverted" : ""}`}>
      <span className="brand-lockup__mark">
        <Image
          src="/brand/mifer-mark.png"
          width="365"
          height="342"
          alt=""
          aria-hidden="true"
          unoptimized
        />
      </span>
      <span className="brand-lockup__type">
        <strong>Mifer</strong>
        <span>Digital</span>
      </span>
    </span>
  );
}
