import { Link } from "@tanstack/react-router";
import logo from "@/assets/pravis-logo.webp";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Pravis Learning logo" decoding="async" className="h-11 w-11 object-contain" width={44} height={44} />
          <div className="leading-tight">
            <div className="font-serif text-lg font-bold text-primary">PRAVIS</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Learning</div>
          </div>
        </Link>
        <Link
          to="/contact"
          className="whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-card)] transition-transform hover:scale-105"
        >
          Enquire Now
        </Link>
      </div>
    </header>
  );
}
