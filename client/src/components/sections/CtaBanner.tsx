import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BANNER_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663494119591/GbTZBxwxDxhrsoirJvr8FF/lookbook-1-DksaMCnioySQ9tPmu6Q9S4.webp";

export default function CtaBanner() {
  const ref = useScrollAnimation(0.1);

  return (
    <div className="relative h-[420px] md:h-[520px] overflow-hidden">
      <img
        src={BANNER_IMAGE}
        alt="Style transformation"
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-[oklch(0.14_0.01_50/0.6)]" />
      <div ref={ref} className="fade-up absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <p className="section-label text-[oklch(0.88_0.04_65)] mb-5">Ready to Begin?</p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-8 max-w-2xl">
          Your Most Confident Self<br />
          <em className="italic font-medium text-[oklch(0.88_0.04_65)]">Starts Here</em>
        </h2>
        <button
          onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          className="btn-sand"
        >
          Book a Consultation
        </button>
      </div>
    </div>
  );
}
