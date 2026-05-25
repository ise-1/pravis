import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Testimonials } from "@/components/Testimonials";
import { Heart, ShieldCheck, Sprout, Award, HandHeart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Pravis Learning — Our Mission & Values" },
      { name: "description", content: "Pravis Learning is a Chennai-based education and professional services company helping students, professionals, and entrepreneurs grow." },
      { property: "og:title", content: "About Pravis Learning" },
      { property: "og:description", content: "Our mission, vision and values." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, title: "Trust", desc: "We believe in transparent and honest guidance." },
  { icon: HandHeart, title: "Support", desc: "We provide proper assistance at every step." },
  { icon: Sprout, title: "Growth", desc: "We focus on helping students, professionals, and businesses grow." },
  { icon: Award, title: "Quality", desc: "We work with reliable education and service partners." },
  { icon: Heart, title: "Commitment", desc: "We are committed to delivering the right support for every enquiry." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Education. Protection. Prosperity."
        subtitle="A Chennai-based education and professional service company focused on helping students, professionals, businesses, and entrepreneurs achieve their goals."
      />

      <section className="mx-auto max-w-4xl px-4 py-20 text-center">
        <p className="text-lg text-muted-foreground">
          We work across multiple areas including online university admissions, career guidance, talent partnership, education franchise support, study abroad partnership, and insurance advisory.
        </p>
        <p className="mt-4 text-lg text-muted-foreground">
          Our mission is to provide simple, clear, and trusted guidance to every learner and partner who connects with us.
        </p>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-maroon">Our Vision</div>
            <h2 className="mt-2 font-serif text-2xl font-bold">A trusted partner for growth</h2>
            <p className="mt-4 text-muted-foreground">
              To become a trusted education and career support partner by providing quality guidance, professional services, and growth opportunities for students, professionals, and entrepreneurs.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-maroon">Our Mission</div>
            <h2 className="mt-2 font-serif text-2xl font-bold">Guidance with purpose</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Guide students in choosing the right education path.</li>
              <li>• Support working professionals in upgrading their careers.</li>
              <li>• Help entrepreneurs start successful education businesses.</li>
              <li>• Connect companies with suitable talent.</li>
              <li>• Provide reliable insurance guidance for individuals and families.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-maroon">Core Values</div>
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">What we stand for</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((v) => (
            <div key={v.title} className="rounded-xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)]">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-maroon text-maroon-foreground">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Testimonials eyebrow="Voices of Trust" title="Stories from those we've helped" />

      <CTASection
        title="Start Your Journey with Pravis Learning"
        description="Whether you are planning to study, grow your career, start a business, or find the right service, Pravis Learning is ready to support you."
        ctaLabel="Contact Us Today"
      />
    </>
  );
}
