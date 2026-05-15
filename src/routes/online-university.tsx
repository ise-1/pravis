import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/online-university")({
  head: () => ({
    meta: [
      { title: "Online University Admission Guidance — Pravis Learning" },
      { name: "description", content: "UGC-recognized online UG & PG degree admissions: MBA, MCA, BBA, BCA, B.Com, M.Com and more, with end-to-end counselling." },
      { property: "og:title", content: "Online University Admission Guidance" },
      { property: "og:description", content: "Choose the right online degree for your career." },
    ],
  }),
  component: Page,
});

const courses = ["Online MBA","Online MCA","Online M.Com","Online MA","Online BBA","Online BCA","Online B.Com","Online BA","Certification Courses","Professional Skill Programs"];
const benefits = ["Flexible learning","Learn from anywhere","Suitable for working professionals","Affordable compared to regular programs","Career growth opportunity","Recognized university programs","Easy admission support","Study without career break"];
const who = ["Students who completed 12th standard","Graduates looking for PG programs","Working professionals","Career changers","Entrepreneurs","People who want flexible learning options"];
const steps = [
  { n: "01", t: "Understand your background", d: "We learn about your education, work, and goals." },
  { n: "02", t: "Suggest courses & universities", d: "Curated options that fit you best." },
  { n: "03", t: "Eligibility & fee details", d: "Clear, transparent breakdown." },
  { n: "04", t: "Admission process support", d: "We guide every form and step." },
  { n: "05", t: "Document submission", d: "Help you compile what's needed." },
  { n: "06", t: "Follow-up support", d: "We stay with you after admission." },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Online University" title="Choose the Right Online Degree for Your Career" subtitle="We help students and working professionals select suitable online degree programs from recognized universities — without leaving your job or daily responsibilities." />

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-maroon">Courses We Support</div>
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">A program for every ambition</h2>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {courses.map((c) => (
            <span key={c} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:border-gold hover:text-primary">{c}</span>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-maroon">Who Can Apply</div>
            <h2 className="mt-3 font-serif text-3xl font-bold">Built for every kind of learner</h2>
            <ul className="mt-6 space-y-3">
              {who.map((w) => (
                <li key={w} className="flex items-start gap-2 text-sm"><CheckCircle2 className="mt-0.5 h-4 w-4 text-gold" />{w}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-maroon">Benefits</div>
            <h2 className="mt-3 font-serif text-3xl font-bold">Why online learning works</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {benefits.map((b) => (
                <li key={b} className="rounded-lg border border-border bg-card p-3 text-sm">{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-maroon">Our Support Process</div>
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Six simple steps to your degree</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="font-serif text-3xl font-bold text-gold">{s.n}</div>
              <h3 className="mt-2 font-serif text-lg font-semibold">{s.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection title="Looking for the Right Online Degree?" description="Get expert guidance from Pravis Learning and choose the best course for your future." ctaLabel="Get Free Counselling" />
    </>
  );
}
