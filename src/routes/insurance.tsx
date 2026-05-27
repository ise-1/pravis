import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/insurance")({
  head: () => ({
    meta: [
      { title: "Insurance Advisory Services — Pravis Learning" },
      { name: "description", content: "Simple, trusted guidance for life, health, family, term, vehicle and general insurance plans." },
      { property: "og:title", content: "Insurance Advisory Services" },
      { property: "og:description", content: "Protect your future with the right insurance guidance." },
    ],
  }),
  component: Page,
});

const services = ["Life insurance","Health insurance","Family insurance","Term insurance","Vehicle insurance","General insurance","Child education planning","Savings and protection plans"];
const why = ["Financial protection","Medical emergency support","Family security","Future planning","Risk management","Peace of mind","Long-term savings support"];
const who = ["Individuals","Families","Working professionals","Business owners","Parents","Students","Senior citizens"];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Insurance"
        title="Protect Your Future with the Right Guidance"
        subtitle="Insurance is essential for financial safety. Our team helps you understand the options in a simple, jargon-free way."
        ctaLabel="Enquire Now"
        logoName="Pravis Insurance"
        logoTagline="Insurance Advisory Partner"
      />

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-10 md:grid-cols-3">
          <Block title="Insurance We Support" items={services} />
          <Block title="Why Insurance Matters" items={why} />
          <Block title="Who Can Contact Us" items={who} />
        </div>
      </section>

      <CTASection title="Need Help Choosing the Right Insurance Plan?" description="Speak with our team and get simple guidance based on your needs." ctaLabel="Request a Call Back" />
    </>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
      <h3 className="font-serif text-xl font-bold text-primary">{title}</h3>
      <ul className="mt-5 space-y-2">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2 text-sm"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />{i}</li>
        ))}
      </ul>
    </div>
  );
}
