import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import {
  CheckCircle2,
  Brain,
  Code2,
  MessageSquare,
  FileText,
  Building2,
  Briefcase,
  Database,
  Cpu,
  Users,
  Trophy,
  GraduationCap,
  Calendar,
} from "lucide-react";

export const Route = createFileRoute("/prepinsta")({
  head: () => ({
    meta: [
      { title: "PrepInsta Placement Training Partner in Chennai | Pravis Learning" },
      {
        name: "description",
        content:
          "Pravis Learning connects students and colleges with PrepInsta for placement preparation, coding practice, aptitude training, interview preparation, and career-focused upskilling support.",
      },
      { property: "og:title", content: "PrepInsta Placement Training Partner | Pravis Learning" },
      {
        property: "og:description",
        content:
          "Placement preparation, coding, aptitude and interview training through PrepInsta with Pravis Learning.",
      },
      { property: "og:url", content: "https://pravis.lovable.app/prepinsta" },
    ],
    links: [{ rel: "canonical", href: "https://pravis.lovable.app/prepinsta" }],
  }),
  component: PrepInstaPage,
});

const learnItems = [
  { icon: Brain, label: "Aptitude Preparation" },
  { icon: Brain, label: "Logical Reasoning" },
  { icon: MessageSquare, label: "Verbal Ability" },
  { icon: Code2, label: "Coding Practice" },
  { icon: Cpu, label: "Data Structures & Algorithms" },
  { icon: Code2, label: "C, C++, Java, Python" },
  { icon: Database, label: "DBMS, SQL, Operating System" },
  { icon: Building2, label: "Company-Specific Preparation" },
  { icon: Briefcase, label: "Technical Interview Preparation" },
  { icon: Users, label: "HR Interview Preparation" },
  { icon: FileText, label: "Resume Building" },
  { icon: Calendar, label: "Off-Campus Drive Updates" },
];

const collegePoints = [
  "Campus placement preparation",
  "Company-specific training modules",
  "Aptitude and coding assessments",
  "Student performance tracking",
  "Skill gap analysis",
  "Placement readiness support",
  "Industry expert sessions",
  "Career-focused upskilling",
];

const bestFor = [
  { icon: GraduationCap, label: "Engineering students" },
  { icon: GraduationCap, label: "Final-year students" },
  { icon: Trophy, label: "Fresh graduates" },
  { icon: Briefcase, label: "Students preparing for IT jobs" },
  { icon: Building2, label: "Students preparing for campus placements" },
  { icon: Code2, label: "Students looking for coding & aptitude practice" },
  { icon: Users, label: "Students preparing for technical & HR interviews" },
];

const whyPoints = [
  "Trusted placement preparation support",
  "Suitable for students and colleges",
  "Structured learning path",
  "Company-specific preparation",
  "Coding and aptitude practice",
  "Interview preparation support",
  "Career-focused upskilling",
  "Easy guidance through Pravis Learning",
];

function PrepInstaPage() {
  return (
    <>
      <PageHero
        eyebrow="Placement Training Partner"
        title="PrepInsta Placement Training Partner"
        subtitle="Build placement-ready skills with PrepInsta through Pravis Learning."
        ctaLabel="Enquire Now"
        logoName="PrepInsta"
        logoTagline="Placement Training Partner"
      />

      {/* Intro + Logo placeholder + CTA */}
      <section className="mx-auto max-w-5xl px-4 py-16 text-center">
        <div
          className="mx-auto mb-8 flex h-24 w-48 items-center justify-center rounded-xl border-2 border-dashed border-gold bg-card font-serif text-2xl font-bold text-primary"
          aria-label="PrepInsta logo placeholder"
        >
          PrepInsta
        </div>
        <p className="mx-auto max-w-3xl text-muted-foreground">
          Pravis Learning connects students and colleges with PrepInsta for placement preparation, coding practice,
          aptitude training, interview preparation, and company-specific hiring preparation. PrepInsta helps students
          prepare for campus placements, off-campus opportunities, technical rounds, HR interviews, and career-focused
          upskilling.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-block rounded-md bg-gold px-7 py-3 font-semibold text-gold-foreground transition-transform hover:scale-105"
        >
          Enquire Now
        </Link>
      </section>

      {/* About */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-maroon">About</div>
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">About PrepInsta</h2>
          <p className="mt-5 text-muted-foreground">
            PrepInsta is a popular placement preparation and upskilling platform that supports students with aptitude,
            coding, interview preparation, company-specific preparation, and career development courses. Through
            PrepInsta, students can prepare for top IT companies, improve their technical skills, and become job-ready.
          </p>
          <p className="mt-3 text-muted-foreground">
            Pravis Learning works with PrepInsta to help colleges and students access structured placement training and
            career preparation support.
          </p>
        </div>
      </section>

      {/* Learn */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-maroon">Curriculum</div>
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">What Students Can Learn with PrepInsta</h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {learnItems.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-gold"
            >
              <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="pt-1.5 text-sm font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* College support */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-maroon">For Colleges</div>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Placement Training Support for Colleges</h2>
            <p className="mt-5 text-muted-foreground">
              PrepInsta helps colleges improve student placement readiness through structured learning, assessments,
              analytics, and placement-focused training. Colleges can support students with company-specific preparation,
              coding practice, aptitude training, interview preparation, and skill development programs.
            </p>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {collegePoints.map((p) => (
              <li
                key={p}
                className="flex items-start gap-2 rounded-lg border border-border bg-card p-4 text-sm shadow-[var(--shadow-card)]"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Best suited for */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-maroon">Audience</div>
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Best Suited For</h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bestFor.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
            >
              <b.icon className="h-5 w-5 flex-shrink-0 text-maroon" />
              <span className="text-sm font-medium">{b.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-maroon">Why Choose</div>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
              Why Choose PrepInsta Through Pravis Learning?
            </h2>
            <p className="mt-5 text-muted-foreground">
              Pravis Learning helps students and institutions understand the right placement preparation solution based
              on their requirement. Our team guides colleges and students to explore PrepInsta's learning platform,
              placement training support, and upskilling opportunities.
            </p>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {whyPoints.map((p) => (
              <li
                key={p}
                className="flex items-start gap-2 rounded-lg border border-border bg-card p-4 text-sm shadow-[var(--shadow-card)]"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto my-20 max-w-6xl px-4">
        <div
          className="relative overflow-hidden rounded-2xl px-8 py-14 text-center text-primary-foreground shadow-[var(--shadow-elegant)]"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="absolute inset-x-0 top-0 h-px" style={{ background: "var(--gradient-gold)" }} />
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">Want to Know More About PrepInsta?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/85">
            Connect with Pravis Learning to explore PrepInsta placement preparation, student training, and college
            partnership opportunities.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-md bg-gold px-7 py-3 font-semibold text-gold-foreground transition-transform hover:scale-105"
            >
              Contact Pravis Learning
            </Link>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: "var(--gradient-gold)" }} />
        </div>
      </section>
    </>
  );
}
