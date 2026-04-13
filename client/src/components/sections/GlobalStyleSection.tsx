import { useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowLeft, ArrowRight } from "lucide-react";

const cities = [
  {
    name: "Paris",
    country: "France",
    tagline: "Effortless Elegance",
    description:
      "Parisian style is the art of looking undone yet perfectly put together. It's about quality over quantity — a perfectly cut blazer, a silk scarf, and the confidence to wear it all with studied nonchalance.",
    tips: [
      "Invest in one perfect trench coat",
      "Embrace neutral tones with a single bold accent",
      "Wear your clothes slightly oversized for that je ne sais quoi",
    ],
    color: "from-[oklch(0.25_0.01_55/0.7)]",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80",
    accent: "oklch(0.88 0.04 65)",
  },
  {
    name: "Milan",
    country: "Italy",
    tagline: "Bold Tailoring",
    description:
      "Milan dresses with intention. Every outfit is a statement of craftsmanship and luxury — structured silhouettes, rich textures, and an unwavering commitment to quality materials that speak before you do.",
    tips: [
      "Choose structured tailoring in rich fabrics",
      "Invest in Italian leather accessories",
      "Wear bold colors with total confidence",
    ],
    color: "from-[oklch(0.2_0.02_30/0.7)]",
    image: "https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=600&q=80",
    accent: "oklch(0.72 0.06 60)",
  },
  {
    name: "New York",
    country: "USA",
    tagline: "Functional Chic",
    description:
      "New York style is the ultimate urban uniform — purposeful, diverse, and endlessly adaptable. It's fashion that works as hard as you do, blending high and low with effortless authority.",
    tips: [
      "Master the art of layering for all seasons",
      "Invest in quality sneakers that elevate any look",
      "Mix designer pieces with vintage finds",
    ],
    color: "from-[oklch(0.18_0.01_260/0.7)]",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&q=80",
    accent: "oklch(0.75 0.08 230)",
  },
  {
    name: "Tokyo",
    country: "Japan",
    tagline: "Avant-Garde Vision",
    description:
      "Tokyo fashion is a fearless laboratory of self-expression. It challenges every convention, blending traditional Japanese aesthetics with futuristic silhouettes — creating looks that are simultaneously art and identity.",
    tips: [
      "Experiment with proportion and volume",
      "Layer unexpected textures and patterns",
      "Let one statement piece anchor the entire look",
    ],
    color: "from-[oklch(0.15_0.03_320/0.7)]",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80",
    accent: "oklch(0.78 0.12 320)",
  },
  {
    name: "Stockholm",
    country: "Sweden",
    tagline: "Clean Minimalism",
    description:
      "Stockholm style is the purest expression of Scandinavian design philosophy — clean lines, restrained palettes, and an obsession with quality that makes each piece feel essential rather than excessive.",
    tips: [
      "Build a capsule wardrobe of 30 perfect pieces",
      "Choose natural fabrics in muted, earthy tones",
      "Let silhouette and cut do all the talking",
    ],
    color: "from-[oklch(0.2_0.008_200/0.7)]",
    image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=600&q=80",
    accent: "oklch(0.72 0.06 200)",
  },
];

export default function GlobalStyleSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const headerRef = useScrollAnimation(0.1);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 420;
    scrollRef.current.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section id="global-style" className="py-24 md:py-36 bg-[oklch(0.96_0.01_70)] overflow-hidden">
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="fade-up flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <p className="section-label mb-4">Signature Section</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-[oklch(0.14_0.01_50)] leading-tight">
              Global Fashion<br />
              <em className="italic font-medium text-[oklch(0.72_0.06_60)]">Perspectives</em>
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-body text-[oklch(0.52_0.015_55)] text-sm leading-relaxed max-w-xs">
              Style speaks differently in every city. Explore the world's most iconic fashion capitals and discover how to incorporate their essence into your own wardrobe.
            </p>
            {/* Scroll controls */}
            <div className="flex gap-3">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 border border-[oklch(0.88_0.018_65)] flex items-center justify-center text-[oklch(0.52_0.015_55)] hover:bg-[oklch(0.72_0.06_60)] hover:text-white hover:border-[oklch(0.72_0.06_60)] transition-all duration-300"
                aria-label="Scroll left"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 border border-[oklch(0.88_0.018_65)] flex items-center justify-center text-[oklch(0.52_0.015_55)] hover:bg-[oklch(0.72_0.06_60)] hover:text-white hover:border-[oklch(0.72_0.06_60)] transition-all duration-300"
                aria-label="Scroll right"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        className="h-scroll flex gap-4 px-6 md:px-12 lg:px-[calc((100vw-1320px)/2+3rem)] pb-4"
        style={{ paddingLeft: "max(1.5rem, calc((100vw - 1320px) / 2 + 3rem))" }}
      >
        {cities.map((city) => (
          <div
            key={city.name}
            className="h-scroll-item w-[340px] md:w-[400px] flex-shrink-0 group"
          >
            <div className="relative h-[520px] overflow-hidden">
              {/* Background image */}
              <img
                src={city.image}
                alt={`${city.name} fashion`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${city.color} to-transparent`} />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-7">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                  <p className="font-nav text-[0.6rem] tracking-[0.25em] uppercase mb-2" style={{ color: city.accent }}>
                    {city.country}
                  </p>
                  <h3 className="font-display text-4xl font-light text-white mb-1">
                    {city.name}
                  </h3>
                  <p className="font-display text-lg italic font-light text-white/80 mb-4">
                    {city.tagline}
                  </p>
                  <p className="font-body text-sm text-white/75 leading-relaxed mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-100">
                    {city.description}
                  </p>

                  {/* Style tips */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-150">
                    <p className="font-nav text-[0.6rem] tracking-[0.2em] uppercase mb-3" style={{ color: city.accent }}>
                      Style Tips
                    </p>
                    <ul className="space-y-2">
                      {city.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2 font-body text-xs text-white/80">
                          <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: city.accent }} />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
