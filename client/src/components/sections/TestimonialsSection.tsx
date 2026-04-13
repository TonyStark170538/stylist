import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Isabelle M.",
    role: "Creative Director, Paris",
    quote:
      "Working with Dariya completely transformed how I approach getting dressed. She didn't just style me — she helped me understand myself. My wardrobe now feels like an extension of who I am, not a daily battle.",
    stars: 5,
    initials: "IM",
  },
  {
    name: "Priya K.",
    role: "Entrepreneur, London",
    quote:
      "I was skeptical at first, but the wardrobe audit alone was worth every penny. Dariya identified pieces I'd forgotten I owned and showed me how to build 30 outfits from what I already had. Remarkable.",
    stars: 5,
    initials: "PK",
  },
  {
    name: "Antonina S.",
    role: "IT, Stockholm",
    quote:
      "The virtual styling service is genuinely as good as in-person. Dariya's eye for detail and her ability to understand my lifestyle remotely was impressive. I now dress with intention every single day.",
    stars: 5,
    initials: "AS",
  },
  {
    name: "Amara O.",
    role: "Architect, Milan",
    quote:
      "Dariya styled me for a major industry gala and I received more compliments that evening than in the previous five years combined. She has an extraordinary gift for knowing what makes a woman feel powerful.",
    stars: 5,
    initials: "AO",
  },
];

export default function TestimonialsSection() {
  const headerRef = useScrollAnimation(0.1);
  const cardsRef = useScrollAnimation(0.05);

  return (
    <section className="py-24 md:py-36 bg-[oklch(0.975_0.008_75)]">
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="fade-up text-center mb-16">
          <p className="section-label mb-4">Client Stories</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-[oklch(0.14_0.01_50)] leading-tight">
            Words from<br />
            <em className="italic font-medium text-[oklch(0.72_0.06_60)]">Transformed Women</em>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div ref={cardsRef} className="stagger-children grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-[oklch(0.88_0.018_65)] p-8 md:p-10 hover:shadow-[0_4px_24px_oklch(0.14_0.01_50/0.08)] transition-shadow duration-400"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={12} className="fill-[oklch(0.72_0.06_60)] text-[oklch(0.72_0.06_60)]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-display text-xl md:text-2xl font-light italic text-[oklch(0.25_0.01_50)] leading-relaxed mb-8">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[oklch(0.92_0.025_65)] flex items-center justify-center flex-shrink-0">
                  <span className="font-nav text-[0.65rem] font-500 tracking-[0.05em] text-[oklch(0.52_0.015_55)]">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="font-nav text-xs font-500 tracking-[0.08em] text-[oklch(0.14_0.01_50)]">
                    {t.name}
                  </p>
                  <p className="font-body text-xs text-[oklch(0.62_0.012_55)] mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stat bar */}
        <div className="mt-16 grid grid-cols-3 gap-px bg-[oklch(0.88_0.018_65)]">
          {[
            { value: "200+", label: "Clients Styled" },
            { value: "4.98", label: "Average Rating" },
            { value: "98%", label: "Would Recommend" },
          ].map((stat) => (
            <div key={stat.label} className="bg-[oklch(0.975_0.008_75)] py-8 text-center">
              <p className="font-display text-4xl md:text-5xl font-light text-[oklch(0.72_0.06_60)]">
                {stat.value}
              </p>
              <p className="font-nav text-[0.65rem] tracking-[0.18em] uppercase text-[oklch(0.52_0.015_55)] mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
