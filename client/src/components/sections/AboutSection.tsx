import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const STYLIST_IMAGE = "/pictures/lookbook-3.jpg";
export default function AboutSection() {
  const textRef = useScrollAnimation(0.1);
  const imageRef = useScrollAnimation(0.1);

  return (
    <section id="about" className="py-24 md:py-36 bg-[oklch(0.975_0.008_75)]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image column */}
          <div
            ref={imageRef}
            className="fade-up relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 overflow-hidden">
              <img
                src={STYLIST_IMAGE}
                alt="Dariya — Personal Stylist"
                className="w-full h-full object-cover"
              />
              {/* Decorative sand border offset */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[oklch(0.72_0.06_60/0.4)] -z-10" />
            </div>

            {/* Floating stat card */}
            <div className="absolute bottom-8 -right-4 md:-right-8 bg-[oklch(0.975_0.008_75)] border border-[oklch(0.88_0.018_65)] p-5 shadow-lg">
              <p className="font-display text-4xl font-light text-[oklch(0.72_0.06_60)]">10+</p>
              <p className="font-nav text-[0.65rem] tracking-[0.18em] uppercase text-[oklch(0.52_0.015_55)] mt-1">
                Years of Experience
              </p>
            </div>
          </div>

          {/* Text column */}
          <div
            ref={textRef}
            className="fade-up"
          >
            <p className="section-label mb-5">About the Stylist</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-[oklch(0.14_0.01_50)] leading-tight mb-8">
              Crafting Style<br />
              <em className="italic font-medium text-[oklch(0.72_0.06_60)]">With Intention</em>
            </h2>

            <div className="divider-sand mb-8 w-16" />

            <p className="font-body text-[oklch(0.35_0.01_50)] text-base leading-[1.9] mb-6">
              I'm Dariya Helmle — a personal stylist with over a decade of experience helping women
              discover the transformative power of intentional dressing.
            </p>
            <p className="font-body text-[oklch(0.35_0.01_50)] text-base leading-[1.9] mb-8">
              My philosophy sits at the intersection of timeless elegance and personal authenticity.
              I believe that style is not about following trends — it's about building a wardrobe
              that tells your story, empowers your presence, and simplifies your life.
            </p>

            {/* Pull quote */}
            <blockquote className="pull-quote border-l-2 border-[oklch(0.72_0.06_60)] pl-6 mb-10">
              "Fashion is the armor to survive the reality of everyday life."
            </blockquote>

            <div className="flex flex-wrap gap-6">
              <div>
                <p className="font-display text-3xl font-light text-[oklch(0.72_0.06_60)]">200+</p>
                <p className="font-nav text-[0.65rem] tracking-[0.15em] uppercase text-[oklch(0.52_0.015_55)] mt-1">Clients Styled</p>
              </div>
              <div className="w-px bg-[oklch(0.88_0.018_65)]" />
              <div>
                <p className="font-display text-3xl font-light text-[oklch(0.72_0.06_60)]">12</p>
                <p className="font-nav text-[0.65rem] tracking-[0.15em] uppercase text-[oklch(0.52_0.015_55)] mt-1">Cities Worldwide</p>
              </div>
              <div className="w-px bg-[oklch(0.88_0.018_65)]" />
              <div>
                <p className="font-display text-3xl font-light text-[oklch(0.72_0.06_60)]">98%</p>
                <p className="font-nav text-[0.65rem] tracking-[0.15em] uppercase text-[oklch(0.52_0.015_55)] mt-1">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
