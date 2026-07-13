import { Link } from "@tanstack/react-router";
import logo from "@/assets/pravis-logo.webp";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="Pravis Learning" loading="lazy" decoding="async" className="h-12 w-12 rounded bg-white object-contain p-1" width={48} height={48} />
            <div>
              <div className="font-serif text-xl font-bold">PRAVIS</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-gold">Learning</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/80">
            Trusted career guidance and professional services company helping students, professionals, businesses, and entrepreneurs through education partnerships, talent solutions, insurance advisory, and franchise opportunities.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-serif text-base text-gold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/85">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/gtec-franchise" className="hover:text-gold">G-TEC Franchise</Link></li>
            <li><Link to="/global-campus" className="hover:text-gold">Global Campus</Link></li>
            <li><Link to="/talent-partner" className="hover:text-gold">Talent Partner</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-serif text-base text-gold">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/85">
            <li><Link to="/gtec-franchise" className="hover:text-gold">Education Franchise</Link></li>
            <li><Link to="/global-campus" className="hover:text-gold">Study Abroad Partner</Link></li>
            <li><Link to="/prepinsta" className="hover:text-gold">Online Training Program for University / College</Link></li>
            <li><Link to="/career247" className="hover:text-gold">Career-Focused Learning</Link></li>
            <li><Link to="/talent-partner" className="hover:text-gold">Talent Support</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-serif text-base text-gold">Get in Touch</h4>
          <p className="text-sm text-primary-foreground/85">Chennai, Tamil Nadu</p>
          <p className="text-sm text-primary-foreground/85"><a href="tel:+917305075766" className="hover:text-gold">+91 73050 75766</a></p>
          <p className="text-sm text-primary-foreground/85"><a href="mailto:info@pravislearning.com" className="hover:text-gold">info@pravislearning.com</a></p>
          <p className="text-sm text-primary-foreground/85">Mon–Sat · 10:00 AM – 6:00 PM</p>
          <Link
            to="/contact"
            className="mt-4 inline-block rounded-md bg-gold px-5 py-2 text-sm font-semibold text-gold-foreground transition-transform hover:scale-105"
          >
            Enquire Now
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-primary-foreground/70">
          © {new Date().getFullYear()} Pravis Learning. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
