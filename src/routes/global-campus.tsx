import { createFileRoute } from "@tanstack/react-router";
import globalCampusLogo from "@/assets/logos/global-campus.webp";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/global-campus")({
  head: () => ({
    meta: [
      { title: "Global Campus Partner Opportunity — Pravis Learning" },
      { name: "description", content: "Build a study abroad counselling business with Global Campus — university tie-ups, marketing and operational support." },
      { property: "og:title", content: "Global Campus Partner Opportunity" },
      { property: "og:description", content: "Enter the overseas education counselling sector." },
    ],
  }),
  component: Page,
});

const why = ["High demand for international education","Students need proper counselling and documentation support","Multiple country and university options","Growing awareness among students and parents","Long-term business opportunity","Suitable for education consultants and entrepreneurs"];
const services = ["Course selection","Country selection","University shortlisting","Application guidance","Document support","Scholarship guidance","Visa process guidance","Pre-departure support"];
const who = ["Education consultants","Training centre owners","Entrepreneurs","Career counsellors","Study abroad counsellors","Business investors","People interested in overseas education services"];
const benefits = ["Recognized brand support","University tie-up support","Marketing support","Counselling support","Training & operational guidance","Business growth opportunity","Professional service model"];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Global Campus"
        title="Build Your Business in Study Abroad Counselling"
        subtitle="Help students plan their international education and build a long-term consulting business with Global Campus."
        ctaLabel="Enquire Now"
        logoName="Global Campus"
        logoTagline="Study Abroad Counselling Partner"
        logoSrc={globalCampusLogo}
      />

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <Block title="Why Study Abroad Business" items={why} />
          <Block title="Services Under Study Abroad" items={services} />
          <Block title="Who Can Become a Partner" items={who} />
          <Block title="Partner Benefits" items={benefits} />
        </div>
      </section>

      <CTASection title="Start Your Study Abroad Business Journey" description="Partner with Global Campus and support students in achieving their international education dreams." ctaLabel="Become a Partner" />
    </>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
      <h3 className="font-serif text-2xl font-bold text-primary">{title}</h3>
      <ul className="mt-5 space-y-2">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2 text-sm"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />{i}</li>
        ))}
      </ul>
    </div>
  );
}
