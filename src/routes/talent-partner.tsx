import { createFileRoute } from "@tanstack/react-router";
import talentPartnerLogo from "@/assets/logos/talent-partner.png";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/talent-partner")({
  head: () => ({
    meta: [
      { title: "Talent Partner Services — Pravis Learning" },
      { name: "description", content: "We connect companies with skilled, job-ready candidates across education, IT, sales, finance and more." },
      { property: "og:title", content: "Talent Partner Services" },
      { property: "og:description", content: "Hiring support from Pravis Learning." },
    ],
  }),
  component: Page,
});

const services = ["Candidate sourcing","Profile screening","Entry-level hiring support","Graduate hiring support","Placement coordination","Interview coordination","Skill-based candidate matching","Corporate hiring assistance"];
const industries = ["Education","IT and ITES","Sales and Marketing","Customer Support","Administration","Finance","Training and Skill Development","Entry-level corporate roles"];
const why = ["Access to student and candidate network","Profile screening support","Professional coordination","Flexible hiring support","Quick response","Suitable candidate matching","Local hiring support in Chennai and Tamil Nadu"];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Talent Partner"
        title="Connecting Businesses with the Right Talent"
        subtitle="Finding the right candidate is critical. We help companies save time and improve hiring efficiency with curated, job-ready profiles."
        ctaLabel="Enquire Now"
        logoName="Talent Partner"
        logoTagline="Hiring & Recruitment Services"
        logoSrc={talentPartnerLogo}
      />

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-10 md:grid-cols-3">
          <Block title="Our Talent Services" items={services} />
          <Block title="Industries We Support" items={industries} />
          <Block title="Why Choose Us" items={why} />
        </div>
      </section>

      <CTASection title="Looking for Job-Ready Candidates?" description="Connect with Pravis Learning and share your hiring requirements. Our team will support you with suitable candidate profiles." ctaLabel="Share Hiring Requirement" />
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
