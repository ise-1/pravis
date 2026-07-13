import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  logo?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "Pravis Learning helped me choose the right career path and connected me with excellent learning opportunities. Their guidance was professional and transparent.",
    name: "Priya R.",
    role: "Career Guidance Client, Chennai",
  },
  {
    quote:
      "We partnered with Pravis for hiring entry-level IT talent. The candidates were well-screened and job-ready from day one.",
    name: "Karthik S.",
    role: "HR Lead, Mid-size IT Services Firm",
  },
  {
    quote:
      "Starting my G-TEC franchise felt overwhelming until I spoke to the Pravis team. They handled the paperwork and setup end to end.",
    name: "Anand M.",
    role: "Franchise Partner, Coimbatore",
  },
  {
    quote:
      "Their insurance advisor explained every policy clearly and helped my family choose the right health cover without any pressure.",
    name: "Lakshmi V.",
    role: "Insurance Client, Madurai",
  },
];

interface Props {
  testimonials?: Testimonial[];
  title?: string;
  eyebrow?: string;
}

export function Testimonials({
  testimonials = defaultTestimonials,
  title = "What our clients say",
  eyebrow = "Testimonials",
}: Props) {
  return (
    <section className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-maroon">
            {eyebrow}
          </div>
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">{title}</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]"
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-gold/40" />
              <blockquote className="text-base leading-relaxed text-foreground/85">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                {t.logo ? (
                  <img
                    src={t.logo}
                    alt={`${t.name} logo`}
                    className="h-10 w-10 rounded-md object-contain"
                  />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary font-serif text-sm font-bold text-primary-foreground">
                    {t.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
