import { Link } from "@tanstack/react-router";

interface Props {
  title: string;
  description: string;
  ctaLabel: string;
  to?: string;
}

export function CTASection({ title, description, ctaLabel, to = "/contact" }: Props) {
  return (
    <section className="mx-auto my-20 max-w-6xl px-4">
      <div
        className="relative overflow-hidden rounded-2xl px-8 py-14 text-center text-primary-foreground shadow-[var(--shadow-elegant)]"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: "var(--gradient-gold)" }} />
        <h2 className="font-serif text-3xl font-bold sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/85">{description}</p>
        <Link
          to={to}
          className="mt-7 inline-block rounded-md bg-gold px-7 py-3 font-semibold text-gold-foreground transition-transform hover:scale-105"
        >
          {ctaLabel}
        </Link>
        <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: "var(--gradient-gold)" }} />
      </div>
    </section>
  );
}
