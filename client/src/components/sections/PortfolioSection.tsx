import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const LOOKBOOK_1 = [
  "/pictures/lookbook-1.jpg",
  "/pictures/lookbook-1-2.jpg",
  "/pictures/lookbook-1-3.jpg"
];
const LOOKBOOK_2 = [
  "/pictures/lookbook-2.jpg",
  "/pictures/lookbook-2-2.jpg",
  "/pictures/lookbook-2-3.jpg"
];
const LOOKBOOK_3 = [
  "/pictures/lookbook-3.jpg",
  "/pictures/lookbook-3-2.jpg",
  "/pictures/lookbook-3-3.jpg"
];
const LOOKBOOK_4 = [
  "/pictures/lookbook-4.jpg",
  "/pictures/lookbook-4-2.jpg",
  "/pictures/lookbook-4-3.jpg"
];

const filters = ["All", "Casual", "Business", "Evening", "Seasonal"];

const portfolioItems = [
  {
    id: 1,
    image: "/pictures/lookbook-1.jpg",
    title: "Parisian Chic",
    category: "Casual",
    description: "Effortless elegance for the modern woman",
    size: "tall",
  },
  {
    id: 2,
    image: "/pictures/lookbook-1-2.jpg",
    title: "Parisian Chic II",
    category: "Casual",
    description: "Another variation",
    size: "tall",
  },
  {
    id: 3,
    image: "/pictures/lookbook-1-3.jpg",
    title: "Parisian Chic III",
    category: "Casual",
    description: "Another variation",
    size: "tall",
  },
  {
    id: 4,
    image: "/pictures/lookbook-2.jpg",
    title: "Mediterranean Summer",
    category: "Seasonal",
    description: "Warm tones for sun-soaked days",
    size: "tall",
  },
  {
    id: 5,
    image: "/pictures/lookbook-2-2.jpg",
    title: "Mediterranean Vinter",
    category: "Seasonal",
    description: "Warm tones for sun-soaked days",
    size: "tall",
  },
  {
    id: 6,
    image: "/pictures/lookbook-2-3.jpg",
    title: "Mediterranean Autumn",
    category: "Seasonal",
    description: "Warm tones for sun-soaked days",
    size: "tall",
  },
  {
    id: 7,
    image: "/pictures/lookbook-3.jpg",
    title: "Evening Gala",
    category: "Evening",
    description: "Commanding presence for special occasions",
    size: "tall",
  },
    {
    id: 8,
    image: "/pictures/lookbook-3-3.jpg",
    title: "Evening Gala II",
    category: "Evening",
    description: "Commanding presence for special occasions",
    size: "tall",
  },
    {
    id: 9,
    image: "/pictures/lookbook-3-2.jpg",
    title: "Evening Gala III",
    category: "Evening",
    description: "Commanding presence for special occasions",
    size: "tall",
  },
  {
    id: 10,
    image: "/pictures/lookbook-4.jpg",
    title: "Gallery Opening",
    category: "Business",
    description: "Clean lines for creative professionals",
    size: "tall",
  },
  {
    id: 11,
    image: "/pictures/lookbook-4-2.jpg",
    title: "Opera Opening",
    category: "Business",
    description: "Clean lines for creative professionals",
    size: "tall",
  },
  {
    id: 12,
    image: "/pictures/lookbook-4-3.jpg",
    title: "Gallery Opening II",
    category: "Business",
    description: "Clean lines for creative professionals",
    size: "tall",
  },
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const headerRef = useScrollAnimation(0.1);
  const gridRef = useScrollAnimation(0.05);

  const filtered = activeFilter === "All"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 md:py-36 bg-[oklch(0.975_0.008_75)]">
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="fade-up flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <p className="section-label mb-4">Portfolio</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-[oklch(0.14_0.01_50)] leading-tight">
              The Lookbook
            </h2>
          </div>
          <p className="font-body text-[oklch(0.52_0.015_55)] text-sm leading-relaxed max-w-xs">
            “You can wear the same face and still become a different version of yourself.”
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-nav text-[0.65rem] tracking-[0.15em] uppercase px-5 py-2.5 border transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-[oklch(0.72_0.06_60)] border-[oklch(0.72_0.06_60)] text-white"
                  : "bg-transparent border-[oklch(0.88_0.018_65)] text-[oklch(0.52_0.015_55)] hover:border-[oklch(0.72_0.06_60)] hover:text-[oklch(0.72_0.06_60)]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filtered.map((item) => (
            <div
              key={item.id}
              className="portfolio-card break-inside-avoid group"
            >
              <div className={`relative overflow-hidden ${item.size === "tall" ? "aspect-[3/4]" : "aspect-[4/5]"}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                {/* Hover overlay */}
                <div className="overlay absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.01_50/0.8)] via-[oklch(0.14_0.01_50/0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex flex-col justify-end p-6">
                  <p className="font-nav text-[0.6rem] tracking-[0.2em] uppercase text-[oklch(0.72_0.06_60)] mb-1">
                    {item.category}
                  </p>
                  <h3 className="font-display text-xl font-light text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs text-white/70">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-ghost-sand"
          >
            Start Your Transformation
          </button>
        </div>
      </div>
    </section>
  );
}
