import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { useState } from "react";
import { Mail, MapPin, Phone, Clock, CheckCircle2, Loader2 } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

// 1. Sign up at https://web3forms.com with info@pravislearning.com
// 2. Verify your email and copy the access key
// 3. Paste it below (it is a public key, safe to keep in code)
const WEB3FORMS_ACCESS_KEY = "6f86b587-ec78-407e-8d0f-cbe3e77c0e84";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Pravis Learning — Chennai" },
      { name: "description", content: "Reach out for career guidance, franchise opportunities, study abroad partnerships, talent solutions, or insurance services. Mon–Sat 10AM–6PM, Chennai." },
      { property: "og:title", content: "Contact Pravis Learning" },
      { property: "og:description", content: "We're here to guide you." },
    ],
  }),
  component: Page,
});

const faqs = [
  { q: "What services does Pravis Learning provide?", a: "Career guidance, professional learning, franchise opportunity support, study abroad partnership, talent partner services, and insurance advisory." },
  { q: "Do you provide career guidance support?", a: "Yes — we help students and working professionals choose suitable career paths and professional learning programs." },
  { q: "Can working professionals access your services?", a: "Yes. Our programs and partnerships are designed with flexible learning options ideal for working professionals." },
  { q: "Do you provide franchise opportunity guidance?", a: "Yes — for both G-TEC franchise and Global Campus partner opportunities." },
  { q: "How can I contact Pravis Learning?", a: "Phone, email, WhatsApp, or by submitting the enquiry form on our website." },
  { q: "Do you provide study abroad support?", a: "Yes, through our Global Campus partner services — covering course, country, admission and visa guidance." },
  { q: "Do you help companies with hiring?", a: "Yes — our talent partner services help companies connect with suitable, job-ready candidates." },
];

const enquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  mobile: z.string().trim().min(4, "Enter a valid mobile number").max(30),
  email: z.string().trim().email("Enter a valid email").max(255),
  city: z.string().trim().max(100).optional().or(z.literal("")),
  interested_service: z.string().min(1, "Please select a service").max(100),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

function Page() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const raw = {
      name: String(fd.get("name") ?? ""),
      mobile: String(fd.get("mobile") ?? ""),
      email: String(fd.get("email") ?? ""),
      city: String(fd.get("city") ?? ""),
      interested_service: String(fd.get("interested_service") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    const parsed = enquirySchema.safeParse(raw);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      toast.error("Email service is not configured yet. Please contact us directly.");
      return;
    }

    setSubmitting(true);
    try {
      const submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "full", timeStyle: "short" });
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New Enquiry from Pravis Learning Website",
          from_name: "Pravis Learning Website",
          to: "info@pravislearning.com",
          replyto: parsed.data.email,
          "Full Name": parsed.data.name,
          "Mobile Number": parsed.data.mobile,
          "Email ID": parsed.data.email,
          City: parsed.data.city || "—",
          "Interested Service": parsed.data.interested_service,
          Message: parsed.data.message || "—",
          "Submitted Date and Time": submittedAt,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.message || "Submission failed");
      }
      toast.success("Thank you for your enquiry. Our team will contact you shortly.");
      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error("Enquiry submission failed", err);
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <PageHero eyebrow="Contact" title="We Are Here to Guide You" subtitle="Have questions about career guidance, franchise opportunities, study abroad partnership, hiring support, or insurance services? Contact Pravis Learning today." />

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact info */}
          <div>
            <h2 className="font-serif text-2xl font-bold">Contact Details</h2>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-gold" /><div><div className="font-semibold">Pravis Learning</div><div className="text-muted-foreground">Chennai, Tamil Nadu</div></div></li>
              <li className="flex items-start gap-3"><Phone className="mt-0.5 h-5 w-5 text-gold" /><div><div className="font-semibold">Phone</div><a href="tel:+917305075766" className="text-muted-foreground hover:text-primary">+91 73050 75766</a></div></li>
              <li className="flex items-start gap-3"><Mail className="mt-0.5 h-5 w-5 text-gold" /><div><div className="font-semibold">Email</div><a href="mailto:info@pravislearning.com" className="text-muted-foreground hover:text-primary">info@pravislearning.com</a></div></li>
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
                <p className="mt-2 text-sm text-muted-foreground">Thank you for your enquiry. Our team will contact you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="mt-4 text-sm font-semibold text-maroon hover:underline">
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <Field label="Full Name" name="name" required />
                <Field label="Mobile Number" name="mobile" type="tel" required />
                <Field label="Email ID" name="email" type="email" required />
                <Field label="City" name="city" />
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Interested Service *</label>
                  <select name="interested_service" required className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none">
                    <option value="">Select a service</option>
                    <option>Online Degree Admission</option>
                    <option>G-TEC Franchise</option>
                    <option>Global Campus Partner</option>
                    <option>PrepInsta Placement Training</option>
                    <option>Career247 Career-Focused Learning</option>
                    <option>Talent Partner Services</option>
                    <option>Insurance Services</option>
                    <option>Other Enquiry</option>
                  </select>
                </div>
                
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
                  <textarea name="message" rows={4} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none" />
                </div>
                <button type="submit" disabled={submitting} className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-60">
                  {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
                  {submitting ? "Submitting…" : "Submit Enquiry"}
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
