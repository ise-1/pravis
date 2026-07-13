import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Globe2, Users, ArrowRight, CheckCircle2, Sparkles, BookOpen, Briefcase } from "lucide-react";
import heroImg from "@/assets/hero.webp";
import gtecLogo from "@/assets/logos/gtec.webp";
import globalCampusLogo from "@/assets/logos/global-campus.webp";
import prepinstaLogo from "@/assets/logos/prepinsta.webp";
import career247Logo from "@/assets/logos/career247.webp";
import talentPartnerLogo from "@/assets/logos/talent-partner.webp";

import { CTASection } from "@/components/CTASection";
import { Testimonials } from "@/components/Testimonials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pravis Learning Chennai | Career Guidance & Professional Learning" },
      { name: "description", content: "Pravis Learning offers career guidance, professional learning, franchise opportunities, talent solutions, study abroad partnerships, and insurance advisory in Chennai." },
      { property: "og:title", content: "Pravis Learning Chennai | Career Guidance & Professional Learning" },
      { property: "og:description", content: "Career guidance, professional learning, franchise opportunities, talent solutions, study abroad partnerships, and insurance advisory in Chennai." },
    ],
    links: [
      { rel: "preload", as: "image", href: heroImg, fetchPriority: "high" } as any,
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Building2, title: "Education Franchise", desc: "Start your own IT & skill development training centre with a trusted brand.", to: "/gtec-franchise" },
  { icon: Globe2, title: "Study Abroad Partner", desc: "Build a study abroad counselling business with strong university tie-ups.", to: "/global-campus" },
  { icon: BookOpen, title: "Online Training Program for University / College", desc: "Placement preparation, coding practice, aptitude and interview training for students and colleges.", to: "/prepinsta" },
  { icon: Briefcase, title: "Career-Focused Learning", desc: "Digital marketing, data analytics, certifications and job-oriented skill development.", to: "/career247" },
  { icon: Users, title: "Talent Support", desc: "Connect companies with skilled, job-ready candidates across industries.", to: "/talent-partner" },
];

const programs = ["Online MBA","Online MCA","Online BBA","Online BCA","Online B.Com","Online M.Com","Digital Marketing","Data Analytics","IT Skill Courses","Study Abroad","Franchise Business"];

const reasons = [
  "Trusted education and career support company",
  "Experienced counselling team",
  "Online degree admission guidance",
  "Franchise opportunity support",
  "Career and talent solutions",
  "Transparent process",
  "End-to-end guidance",
  "Located in Chennai",
  "Personalized support for every enquiry",
];

const audience = [
  "Students looking for higher education",
  "Working professionals planning career growth",
  "Entrepreneurs interested in education franchise",
  "Companies looking for hiring support",
  "Families looking for insurance guidance",
  "Students planning to study abroad",
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div className="text-primary-foreground">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold">
              <Sparkles className="h-3 w-3" /> Education · Protection · Prosperity
            </div>
            <h1 className="font-serif text-4xl font-bold leading-[1.1] sm:text-5xl md:text-6xl">
              Build Your Future with <span className="text-gold">Pravis Learning</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-primary-foreground/85 sm:text-lg">
              Your trusted partner for online degree admissions, career guidance, talent solutions, insurance support, and education franchise opportunities.
            </p>
            <p className="mt-3 max-w-xl text-sm text-primary-foreground/70">
              We help students, working professionals, businesses, and entrepreneurs choose the right path for growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-md bg-gold px-6 py-3 font-semibold text-gold-foreground transition-transform hover:scale-105">Enquire Now</Link>
              <Link to="/contact" className="rounded-md border border-white/30 bg-white/5 px-6 py-3 font-semibold text-primary-foreground backdrop-blur hover:bg-white/10">
                Book Free Counselling
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl" style={{ background: "var(--gradient-gold)", opacity: 0.25, filter: "blur(40px)" }} />
            <img
              src={heroImg}
              alt="Students and professionals with Pravis Learning"
              width={1600}
              height={1100}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="relative w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-5xl px-4 py-20 text-center">
        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-maroon">About Pravis Learning</div>
        <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">A Chennai-based education and career support company</h2>
        <p className="mx-auto mt-5 max-w-3xl text-muted-foreground">
          We provide guidance for online degree programs, professional courses, franchise opportunities, talent support, and insurance advisory services.
        </p>
        <p className="mx-auto mt-3 max-w-3xl text-muted-foreground">
          Whether you are a student looking for the right course, a working professional planning to upgrade your career, or an entrepreneur looking for a franchise opportunity, Pravis Learning is here to guide you.
        </p>
      </section>

      {/* Services */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-maroon">Our Services</div>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">One trusted partner for every step of your journey.</h2>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                to={s.to}
                className="group relative flex w-full flex-col overflow-hidden rounded-xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-gold sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-auto pt-5 inline-flex items-center gap-1 text-sm font-semibold text-maroon">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-maroon">Why Choose Us</div>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">A transparent, end-to-end guidance process</h2>
            <p className="mt-4 text-muted-foreground">From the first enquiry to admission or partnership, our team supports you at every step with clarity and care.</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {reasons.map((r) => (
              <li key={r} className="flex items-start gap-2 rounded-lg border border-border bg-card p-3 text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" /> <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who we help */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-maroon">Who We Help</div>
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Built for learners, professionals & entrepreneurs</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audience.map((a) => (
              <div key={a} className="rounded-xl border border-border bg-card p-5 text-left text-sm shadow-[var(--shadow-card)]">
                <div className="font-medium">{a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular programs */}
      <section className="mx-auto max-w-6xl px-4 py-20 text-center">
        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-maroon">Popular Programs</div>
        <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Programs in demand right now</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {programs.map((p) => (
            <span key={p} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:border-gold hover:text-primary">{p}</span>
          ))}
        </div>
      </section>

      {/* Trusted Partners */}
      <TrustedPartners />


      <Testimonials />

      <CTASection
        title="Need Guidance? Talk to Our Expert Team"
        description="Confused about choosing the right course, university, or business opportunity? Our team will guide you with the best available options based on your requirement."
        ctaLabel="Submit Your Enquiry"
      />
    </>
  );
}

const partners = [
  { name: "G-TEC", logo: gtecLogo },
  { name: "Global Campus", logo: globalCampusLogo },
  { name: "PrepInsta", logo: prepinstaLogo },
  { name: "Career247", logo: career247Logo },
  { name: "Talent Partner", logo: talentPartnerLogo },
];

// Per-logo visual scaling so all logos appear balanced in weight.
const logoScale: Record<string, string> = {
  "G-TEC": "max-h-[80px] scale-110",
  "Global Campus": "max-h-[64px]",
  "PrepInsta": "max-h-[60px]",
  "Career247": "max-h-[72px]",
  "Talent Partner": "max-h-[80px] scale-110",
};

export function TrustedPartners() {
  return (
    <section className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-maroon">Our Trusted Partners</div>
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Backed by trusted brands</h2>
          <p className="mx-auto mt-4 text-muted-foreground">
            Pravis Learning works with trusted education, training, career, study abroad, and professional service partners to provide better opportunities for students, colleges, professionals, and entrepreneurs.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {partners.map((p) => (
            <div
              key={p.name}
              className="group flex w-full flex-col items-center justify-center rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-gold hover:shadow-lg sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div className="flex h-[100px] w-full max-w-[220px] items-center justify-center px-4">
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  loading="lazy"
                  decoding="async"
                  className={`h-full w-full object-contain object-center ${logoScale[p.name] ?? "max-h-[80px]"}`}
                />
              </div>
              <div className="mt-3 font-serif text-lg font-semibold text-primary">{p.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

