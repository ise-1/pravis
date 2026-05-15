interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section
      className="relative overflow-hidden border-b border-border text-primary-foreground"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:py-28">
        {eyebrow && (
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            {eyebrow}
          </div>
        )}
        <h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-5 max-w-2xl text-base text-primary-foreground/85 sm:text-lg">{subtitle}</p>}
        <div className="mx-auto mt-8 h-px w-40" style={{ background: "var(--gradient-gold)" }} />
      </div>
    </section>
  );
}
