import { createFileRoute, Link } from "@tanstack/react-router";
import career247Logo from "@/assets/logos/career247.webp";
import { PageHero } from "@/components/PageHero";
import {
  CheckCircle2,
  Megaphone,
  BarChart3,
  LineChart,
  Award,
  GraduationCap,
  Briefcase,
  Compass,
  Sparkles,
  Search,
  Share2,
  Target,
  PenTool,
  Wrench,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/career247")({
  head: () => ({
    meta: [
      { title: "Career247 Learning Partner in Chennai | Pravis Learning" },
      {
        name: "description",
        content:
          "Pravis Learning connects students and professionals with Career247 for digital marketing, data analytics, business analytics, professional learning, certification courses, and career-focused skill development.",
      },
      { property: "og:title", content: "Career247 Career-Focused Learning Partner | Pravis Learning" },
      {
        property: "og:description",
        content:
          "Digital marketing, analytics, and certification programs through Career247 with Pravis Learning.",
      },
      { property: "og:url", content: "https://pravis.lovable.app/career247" },
    ],
    links: [{ rel: "canonical", href: "https://pravis.lovable.app/career247" }],
  }),
  component: Career247Page,
});

const programs = [
  { icon: Megaphone, label: "Digital Marketing" },
  { icon: BarChart3, label: "Data Analytics" },
  { icon: LineChart, label: "Business Analytics" },
  { icon: Award, label: "Tech Certification Courses" },
  { icon: GraduationCap, label: "Professional Learning Programs" },
  { icon: Briefcase, label: "Job + Certification Programs" },
  { icon: Compass, label: "Career Development Programs" },
  { icon: Sparkles, label: "Skill-Based Learning Programs" },
];

const dmPoints = [
  { icon: Search, label: "Google Ads learning" },
  { icon: Share2, label: "Meta Ads learning" },
  { icon: Target, label: "SEO basics and strategy" },
  { icon: Share2, label: "Social media marketing" },
  { icon: PenTool, label: "Content marketing" },
  { icon: Wrench, label: "Marketing tools exposure" },
  { icon: Target, label: "Campaign planning" },
  { icon: Sparkles, label: "Practical learning approach" },
];

const analyticsPoints = [
  "Data analytics fundamentals",
  "Business analytics concepts",
  "Dashboard and reporting skills",
  "Practical project-based learning",
  "Industry-relevant curriculum",
  "Career-focused skill development",
];

const bestFor = [
  "Students",
  "Fresh graduates",
  "Working professionals",
  "Career switchers",
  "Business owners",
  "Learners interested in digital marketing",
  "Learners interested in analytics",
  "Professionals looking for skill development",
  "People looking for online learning flexibility",
];

const whyPoints = [
  "Career-focused learning guidance",
  "Online learning support",
  "Suitable course selection",
  "Digital marketing and analytics programs",
  "Certification and skill development support",
  "Guidance for students and working professionals",
  "Simple counselling through Pravis Learning",
];

function Career247Page() {
  return (
    <>
      <PageHero
        eyebrow="Career-Focused Learning Partner"
        title="Career247 Career-Focused Learning Partner"
        subtitle="Upgrade your skills and build your career with Career247 through Pravis Learning."
        ctaLabel="Enquire Now"
        logoName="Career247"
        logoTagline="Career-Focused Learning Partner"
        logoSrc={career247Logo}
      />

      {/* Intro + Logo placeholder + CTA */}
      <section className="mx-auto max-w-5xl px-4 py-16 text-center">
        <div
          className="mx-auto mb-8 flex h-24 w-48 items-center justify-center rounded-xl border-2 border-dashed border-gold bg-card font-serif text-2xl font-bold text-primary"
          aria-label="Career247 logo placeholder"
        >
          Career247
        </div>
        <p className="mx-auto max-w-3xl text-muted-foreground">
          Pravis Learning connects students, graduates, and working professionals with Career247 for career-focused
          online learning, certification programs, professional learning guidance, and job-oriented skill development. Career247
          offers industry-relevant programs designed to help learners improve their skills, prepare for career growth,
          and explore better job opportunities.
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
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">About Career247</h2>
          <p className="mt-5 text-muted-foreground">
            Career247 is an online education platform that provides career-focused learning through certification
            courses, professional learning programs, and job-oriented programs. The platform supports learners with flexible
            online learning, expert-led training, industry-focused curriculum, and career assistance.
          </p>
          <p className="mt-3 text-muted-foreground">
            Career247 offers programs in areas such as Digital Marketing, Data Analytics, Business Analytics, Tech
            Certification Courses, Professional Learning Programs, and Job + Certification Programs.
          </p>
          <p className="mt-3 text-muted-foreground">
            Pravis Learning works with Career247 to help students and professionals explore suitable courses and choose
            the right career growth path.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-maroon">Programs</div>
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Career247 Programs</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <div
              key={p.label}
              className="group rounded-xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-gold"
            >
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <p.icon className="h-6 w-6" />
              </div>
              <div className="text-sm font-semibold">{p.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Digital Marketing */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-maroon">Course</div>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Digital Marketing Course</h2>
            <p className="mt-5 text-muted-foreground">
              Career247's Digital Marketing program helps learners understand key areas of digital marketing such as
              Google Ads, Meta Ads, SEO, social media marketing, content marketing, marketing tools, campaign planning,
              and performance tracking. This program is suitable for students, graduates, working professionals, business
              owners, and anyone looking to build a career in digital marketing.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {dmPoints.map((p) => (
              <div
                key={p.label}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
              >
                <div className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <p.icon className="h-4 w-4" />
                </div>
                <span className="pt-1 text-sm font-medium">{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-maroon">Analytics</div>
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
            Data Analytics and Business Analytics Programs
          </h2>
          <p className="mt-5 text-muted-foreground">
            Career247 supports learners with analytics-focused programs designed to build practical skills for today's
            data-driven industries. Learners can explore data analytics, business analytics, reporting, dashboards, data
            interpretation, and real-world business problem solving.
          </p>
        </div>
        <ul className="mx-auto mt-10 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {analyticsPoints.map((p) => (
            <li
              key={p}
              className="flex items-start gap-2 rounded-lg border border-border bg-card p-4 text-sm shadow-[var(--shadow-card)]"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Best suited for */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-maroon">Audience</div>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Best Suited For</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {bestFor.map((b) => (
              <div
                key={b}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
              >
                <Users className="h-5 w-5 flex-shrink-0 text-maroon" />
                <span className="text-sm font-medium">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-maroon">Why Choose</div>
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
            Why Choose Career247 Through Pravis Learning?
          </h2>
          <p className="mt-5 text-muted-foreground">
            Pravis Learning helps learners understand the right Career247 program based on their education background,
            career goals, and skill requirements. Our team guides students and professionals to explore suitable
            courses, understand program details, and take the next step toward career growth.
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
      </section>

      {/* Final CTA */}
      <section className="mx-auto my-20 max-w-6xl px-4">
        <div
          className="relative overflow-hidden rounded-2xl px-8 py-14 text-center text-primary-foreground shadow-[var(--shadow-elegant)]"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="absolute inset-x-0 top-0 h-px" style={{ background: "var(--gradient-gold)" }} />
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">Want to Know More About Career247?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/85">
            Connect with Pravis Learning to explore Career247 programs in digital marketing, data analytics, business
            analytics, online degrees, and career-focused skill development.
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
