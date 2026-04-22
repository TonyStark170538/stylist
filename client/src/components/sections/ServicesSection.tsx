import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, User, ShoppingBag, Star, Calendar, Monitor } from "lucide-react";

const services = [
  {
    id: "01",
    icon: User,
    title: "Personal Styling",
    subtitle: "1:1 Sessions",
    description:
      "A deeply personal experience tailored to your lifestyle, body, and aspirations. Together we define your style identity and create a cohesive wardrobe that works for every occasion.",
    process: ["Style consultation & discovery", "Body & lifestyle analysis", "Curated outfit building", "Personal style guide"],
    price: "From €150",
  },
  {
    id: "02",
    icon: ShoppingBag,
    title: "Wardrobe Audit",
    subtitle: "Edit & Elevate",
    description:
      "A thorough review of your existing wardrobe to identify what serves you and what doesn't. We'll create a clear picture of your style gaps and build a foundation for intentional dressing.",
    process: ["Full wardrobe review", "Keep / donate / repurpose sorting", "Gap analysis report", "Capsule wardrobe blueprint"],
    price: "From €200",
  },
  {
    id: "03",
    icon: Star,
    title: "Shopping Assistance",
    subtitle: "Curated Selection",
    description:
      "Skip the overwhelm of endless options. I curate a pre-selected edit of pieces that align perfectly with your style profile, budget, and the gaps identified in your wardrobe.",
    process: ["Pre-shopping research", "Curated brand & piece selection", "In-store or online guided shopping", "Styling of new pieces"],
    price: "From €30/hour",
  },
  {
    id: "04",
    icon: Calendar,
    title: "Event Styling",
    subtitle: "Occasion Dressing",
    description:
      "From galas to garden parties, ensure you arrive dressed with intention and confidence. Every detail — from silhouette to accessories — is considered for maximum impact.",
    process: ["Event brief & mood board", "Outfit curation & sourcing", "Fitting & final approval", "Day-of styling support"],
    price: "From €300",
  },
  {
    id: "05",
    icon: Monitor,
    title: "Virtual Styling",
    subtitle: "Global Access",
    description:
      "The full Élan Styling experience, delivered remotely. Ideal for clients worldwide, virtual sessions offer the same level of personal attention and expertise — wherever you are.",
    process: ["Video consultation", "Digital style guide", "Online shopping curation", "Follow-up support"],
    price: "From €180",
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const headerRef = useScrollAnimation(0.1);
  const cardsRef = useScrollAnimation(0.05);

  return (
    <section id="services" className="py-24 md:py-36 bg-[oklch(0.14_0.01_50)]">
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="fade-up flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <p className="section-label text-[oklch(0.72_0.06_60)] mb-4">What I Offer</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              Services Designed<br />
              <em className="italic font-medium text-[oklch(0.88_0.04_65)]">for You</em>
            </h2>
          </div>
          <p className="font-body text-[oklch(0.72_0.015_55)] text-sm leading-relaxed max-w-xs">
            Each service is crafted around your unique needs, lifestyle, and vision — never a one-size-fits-all approach.
          </p>
        </div>

        {/* Service cards */}
        <div ref={cardsRef} className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[oklch(0.25_0.008_50)]">
          {services.map((service) => {
            const Icon = service.icon;
            const isActive = activeService === service.id;
            return (
              <div
                key={service.id}
                className="bg-[oklch(0.14_0.01_50)] p-8 cursor-pointer group transition-colors duration-300 hover:bg-[oklch(0.18_0.012_50)]"
                onClick={() => setActiveService(isActive ? null : service.id)}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="font-display text-5xl font-light text-[oklch(0.72_0.06_60/0.35)]">
                    {service.id}
                  </span>
                  <Icon
                    size={20}
                    className="text-[oklch(0.72_0.06_60)] mt-2 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <p className="font-nav text-[0.6rem] tracking-[0.2em] uppercase text-[oklch(0.72_0.06_60)] mb-2">
                  {service.subtitle}
                </p>
                <h3 className="font-display text-2xl md:text-3xl font-light text-white mb-4 group-hover:text-[oklch(0.88_0.04_65)] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-body text-[oklch(0.62_0.012_55)] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Expandable process steps */}
                <div className={`overflow-hidden transition-all duration-500 ${isActive ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="divider-sand mb-4" style={{ background: "oklch(0.72 0.06 60 / 0.25)" }} />
                  <ul className="space-y-2 mb-4">
                    {service.process.map((step, i) => (
                      <li key={i} className="flex items-center gap-3 font-body text-xs text-[oklch(0.72_0.015_55)]">
                        <span className="w-1 h-1 rounded-full bg-[oklch(0.72_0.06_60)] flex-shrink-0" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[oklch(0.25_0.008_50)]">
                  <span className="font-display text-lg font-light text-[oklch(0.88_0.04_65)]">
                    {service.price}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex items-center gap-2 font-nav text-[0.65rem] tracking-[0.15em] uppercase text-[oklch(0.72_0.06_60)] hover:text-[oklch(0.88_0.04_65)] transition-colors duration-300 group/btn"
                  >
                    Book Now
                    <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* CTA card */}
          <div className="bg-[oklch(0.72_0.06_60)] p-8 flex flex-col justify-between">
            <div>
              <p className="font-nav text-[0.6rem] tracking-[0.2em] uppercase text-[oklch(0.985_0.005_75/0.7)] mb-4">
                Not sure where to start?
              </p>
              <h3 className="font-display text-3xl font-light text-white leading-tight mb-4">
                Let's Find Your<br />
                <em className="italic font-medium">Perfect Package</em>
              </h3>
              <p className="font-body text-[oklch(0.985_0.005_75/0.8)] text-sm leading-relaxed">
                Book a complimentary 20-minute discovery call and I'll recommend the service that best fits your needs and goals.
              </p>
            </div>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-ghost-light mt-8 self-start"
            >
              Free Discovery Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
