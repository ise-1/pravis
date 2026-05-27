interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaTo?: string;
  logoName?: string;
  logoTagline?: string;
  logoSrc?: string;
}

import { Link } from "@tanstack/react-router";

export function PageHero({ eyebrow, title, subtitle, ctaLabel, ctaTo = "/contact", logoName, logoTagline, logoSrc }: Props) {
  const hasCard = Boolean(logoName);
  return (
    <section
      className="relative overflow-hidden border-b border-border text-primary-foreground"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div
        className={
          hasCard
            ? "mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:py-20 md:grid-cols-[1.3fr_1fr] md:items-center"
            : "mx-auto max-w-5xl px-4 py-20 text-center sm:py-28"
        }
      >
        <div className={hasCard ? "text-center md:text-left" : ""}>
          {eyebrow && (
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              {eyebrow}
            </div>
          )}
          <h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">{title}</h1>
          {subtitle && (
            <p className={`mt-5 max-w-2xl text-base text-primary-foreground/85 sm:text-lg ${hasCard ? "md:mx-0 mx-auto" : "mx-auto"}`}>
              {subtitle}
            </p>
          )}
          {ctaLabel && (
            <div className="mt-7">
              <Link
                to={ctaTo}
                className="inline-block rounded-md bg-gold px-7 py-3 font-semibold text-gold-foreground transition-transform hover:scale-105"
              >
                {ctaLabel}
              </Link>
            </div>
          )}
          {!hasCard && <div className="mx-auto mt-8 h-px w-40" style={{ background: "var(--gradient-gold)" }} />}
        </div>

        {hasCard && (
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-[var(--shadow-elegant)]">
              <div className="absolute inset-x-6 top-0 h-[3px] rounded-b-full" style={{ background: "var(--gradient-gold)" }} />
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-xl bg-secondary/30 p-3">
                {logoSrc ? (
                  <img src={logoSrc} alt={`${logoName} logo`} className="max-h-full max-w-full object-contain" />
                ) : (
                  <span className="px-2 text-center text-xs font-semibold uppercase tracking-wider text-primary/70">
                    {logoName} Logo
                  </span>
                )}
              </div>
              <h2 className="mt-5 font-serif text-2xl font-bold text-primary">{logoName}</h2>
              {logoTagline && <p className="mt-1 text-sm text-foreground/70">{logoTagline}</p>}
              <div className="mx-auto mt-4 h-px w-16" style={{ background: "var(--gradient-gold)" }} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
