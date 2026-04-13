import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Global Style", href: "#global-style" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[oklch(0.975_0.008_75/0.97)] backdrop-blur-sm shadow-[0_1px_0_oklch(0.72_0.06_60/0.2)]"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="font-display text-xl md:text-2xl font-light tracking-[0.08em] text-[oklch(0.14_0.01_50)] hover:text-[oklch(0.72_0.06_60)] transition-colors duration-300"
          >
            Dariya <span className="italic font-medium">Helmle</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-nav text-[0.7rem] font-400 tracking-[0.18em] uppercase text-[oklch(0.35_0.01_50)] hover:text-[oklch(0.72_0.06_60)] transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-sand text-[0.65rem] py-2.5 px-5"
            >
              Book Now
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[oklch(0.14_0.01_50)]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[oklch(0.975_0.008_75)] flex flex-col justify-center items-center gap-8 transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="font-display text-3xl font-light tracking-[0.08em] text-[oklch(0.14_0.01_50)] mb-4"
        >
         Dariya <span className="italic font-medium">Helmle</span>
        </a>
        {navLinks.map((link) => (
          <button
            key={link.href}
            onClick={() => handleNavClick(link.href)}
            className="font-nav text-sm font-400 tracking-[0.2em] uppercase text-[oklch(0.35_0.01_50)] hover:text-[oklch(0.72_0.06_60)] transition-colors duration-300"
          >
            {link.label}
          </button>
        ))}
        <button
          onClick={() => handleNavClick("#contact")}
          className="btn-sand mt-4"
        >
          Book a Consultation
        </button>
      </div>
    </>
  );
}
