import { createFileRoute } from "@tanstack/react-router";
import gtecLogo from "@/assets/logos/gtec.png";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/gtec-franchise")({
  head: () => ({
    meta: [
      { title: "G-TEC Expansion Partner Opportunity — Pravis Learning" },
      { name: "description", content: "Become a G-TEC Expansion Partner and start your own IT and skill development training centre. Brand, course, and operational support included." },
      { property: "og:title", content: "G-TEC Expansion Partner Opportunity" },
      { property: "og:description", content: "Build an education business with a trusted brand." },
    ],
  }),
  component: Page,
});

const why = ["Growing demand for skill-based courses","High need for computer and IT training","Suitable for students and working professionals","Opportunity to build a local training business","Support from an established education brand","Good business potential in urban and semi-urban areas"];
const who = ["Entrepreneurs","Training centre owners","Computer institute owners","Fresh business investors","Education consultants","People interested in the skill development business"];
const support = ["Brand support","Course support","Training support","Marketing guidance","Business setup guidance","Operational support","Student enquiry support","Franchise model explanation"];
const locations = ["Commercial areas","Near colleges","Near schools","Near residential areas","Main road locations","Areas with student & working professional audience"];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Expansion Partner Opportunity"
        title="Start Your Own Education Business with G-TEC"
        subtitle="G-TEC is known for computer education, IT training, skill development, and professional courses — a strong fit for entrepreneurs entering the education industry."
        ctaLabel="Enquire Now"
        logoName="G-TEC Expansion Partner"
        logoTagline="IT & Skill Development Training"
        logoSrc={gtecLogo}
      />

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <Block title="Why an Education Franchise" items={why} />
          <Block title="Who Can Apply" items={who} />
          <Block title="Support You Can Expect" items={support} />
          <Block title="Ideal Location" items={locations} />
        </div>
      </section>

      <CTASection title="Interested in Starting a G-TEC Franchise?" description="Connect with Pravis Learning to understand the franchise model, investment details, and business opportunity." ctaLabel="Request Franchise Details" />
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
