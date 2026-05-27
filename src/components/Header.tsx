import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/pravis-logo.jpeg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/online-university", label: "Online University" },
  { to: "/gtec-franchise", label: "G-TEC Franchise" },
  { to: "/global-campus", label: "Global Campus" },
  { to: "/prepinsta", label: "PrepInsta" },
  { to: "/career247", label: "Career247" },
  { to: "/talent-partner", label: "Talent Partner" },
  { to: "/insurance", label: "Insurance" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Pravis Learning logo" className="h-11 w-11 object-contain" width={44} height={44} />
          <div className="leading-tight">
            <div className="font-serif text-lg font-bold text-primary">PRAVIS</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Learning</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-4 xl:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="whitespace-nowrap text-[13px] font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary font-semibold" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-card)] transition-transform hover:scale-105"
          >
            Enquire Now
          </Link>
        </nav>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="xl:hidden text-foreground"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="flex flex-col gap-1 px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-2 text-sm font-medium hover:bg-accent"
                activeProps={{ className: "text-primary font-semibold" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
