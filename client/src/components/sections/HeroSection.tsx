import { ChevronDown } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663494119591/GbTZBxwxDxhrsoirJvr8FF/hero-editorial-3fibQjicn5PaJhwAboSVyq.webp";

export default function HeroSection() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Élan Styling — editorial fashion photography"
          className="w-full h-full object-cover object-center"
        />
        {/* Warm dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.14_0.01_50/0.35)] via-[oklch(0.14_0.01_50/0.25)] to-[oklch(0.14_0.01_50/0.55)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-nav text-[0.65rem] tracking-[0.35em] uppercase text-[oklch(0.88_0.04_65)] mb-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.3s_forwards]">
          Personal Styling Services
        </p>
        <h1 className="font-display text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-[-0.02em] mb-6 opacity-0 animate-[fadeInUp_0.9s_ease-out_0.5s_forwards]">
          Style as a<br />
          <em className="font-medium italic">Signature</em>
        </h1>
        <p className="font-body text-[oklch(0.92_0.005_70)] text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto mb-10 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.7s_forwards]">
          Curated personal styling for the modern woman — where fashion becomes
          an expression of who you are.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-[fadeInUp_0.8s_ease-out_0.9s_forwards]">
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-sand"
          >
            Book a Consultation
          </button>
          <button
            onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-ghost-light"
          >
            Explore Services
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors duration-300 opacity-0 animate-[fadeInUp_0.8s_ease-out_1.2s_forwards]"
        aria-label="Scroll down"
      >
        <span className="font-nav text-[0.6rem] tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </button>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
