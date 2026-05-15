import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { useState } from "react";
import { Mail, MapPin, Phone, Clock, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Pravis Learning — Chennai" },
      { name: "description", content: "Reach out for online degrees, franchise opportunities, study abroad, talent or insurance services. Mon–Sat 10AM–6PM, Chennai." },
      { property: "og:title", content: "Contact Pravis Learning" },
      { property: "og:description", content: "We're here to guide you." },
    ],
  }),
  component: Page,
});

const faqs = [
  { q: "What services does Pravis Learning provide?", a: "Online degree admission guidance, franchise opportunity support, study abroad partnership, talent partner services, and insurance advisory." },
  { q: "Do you provide online degree admission support?", a: "Yes — we help students and working professionals choose suitable online UG and PG programs from recognized universities." },
  { q: "Can working professionals apply for online degree programs?", a: "Yes. Online programs are designed with flexible learning options ideal for working professionals." },
  { q: "Do you provide franchise opportunity guidance?", a: "Yes — for both G-TEC franchise and Global Campus partner opportunities." },
  { q: "How can I contact Pravis Learning?", a: "Phone, email, WhatsApp, or by submitting the enquiry form on our website." },
  { q: "Do you provide study abroad support?", a: "Yes, through our Global Campus partner services — covering course, country, admission and visa guidance." },
  { q: "Do you help companies with hiring?", a: "Yes — our talent partner services help companies connect with suitable, job-ready candidates." },
];

function Page() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <PageHero eyebrow="Contact" title="We Are Here to Guide You" subtitle="Have questions about online degrees, franchise opportunities, study abroad partnership, hiring support, or insurance services? Contact Pravis Learning today." />

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact info */}
          <div>
            <h2 className="font-serif text-2xl font-bold">Contact Details</h2>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-gold" /><div><div className="font-semibold">Pravis Learning</div><div className="text-muted-foreground">Chennai, Tamil Nadu</div></div></li>
              <li className="flex items-start gap-3"><Phone className="mt-0.5 h-5 w-5 text-gold" /><div><div className="font-semibold">Phone</div><div className="text-muted-foreground">Add your phone number</div></div></li>
              <li className="flex items-start gap-3"><Mail className="mt-0.5 h-5 w-5 text-gold" /><div><div className="font-semibold">Email</div><div className="text-muted-foreground">Add your official email ID</div></div></li>
              <li className="flex items-start gap-3"><Clock className="mt-0.5 h-5 w-5 text-gold" /><div><div className="font-semibold">Working Hours</div><div className="text-muted-foreground">Monday to Saturday · 10:00 AM – 6:00 PM</div></div></li>
            </ul>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
            <h2 className="font-serif text-2xl font-bold">Submit Your Enquiry</h2>
            <p className="mt-1 text-sm text-muted-foreground">Please fill in the form below. Our team will contact you shortly.</p>

            {submitted ? (
              <div className="mt-6 rounded-lg border border-gold/40 bg-gold/10 p-6 text-center">
                <CheckCircle2 className="mx-auto h-10 w-10 text-gold" />
                <h3 className="mt-3 font-serif text-lg font-bold">Thank you!</h3>
                <p className="mt-2 text-sm text-muted-foreground">Thank you for contacting Pravis Learning. Our team has received your enquiry and will get in touch with you shortly.</p>
              </div>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              >
                <Field label="Full Name" name="name" required />
                <Field label="Mobile Number" name="mobile" type="tel" required />
                <Field label="Email ID" name="email" type="email" required />
                <Field label="City" name="city" />
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Interested Service</label>
                  <select required className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none">
                    <option value="">Select a service</option>
                    <option>Online Degree Admission</option>
                    <option>G-TEC Franchise</option>
                    <option>Global Campus Partner</option>
                    <option>Talent Partner Services</option>
                    <option>Insurance Services</option>
                    <option>Other Enquiry</option>
                  </select>
                </div>
                <Field label="Preferred Course / Service Details" name="details" />
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
                  <textarea rows={4} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none" />
                </div>
                <button type="submit" className="w-full rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-maroon">FAQ</div>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="group rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
                <summary className="cursor-pointer list-none font-semibold text-foreground marker:hidden">
                  <span className="mr-2 text-gold">›</span>{f.q}
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}{required && " *"}
      </label>
      <input id={name} name={name} type={type} required={required} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none" />
    </div>
  );
}
