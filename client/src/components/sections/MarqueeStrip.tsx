const items = [
  "Style is something each of us already has, all we need to do is find it",
  "Diane von Furstenberg",
];

export default function MarqueeStrip() {
  return (
    <div className="bg-[oklch(0.72_0.06_60)] py-3 overflow-hidden">
      <div className="flex gap-0 animate-[marquee_30s_linear_infinite] whitespace-nowrap w-max">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="font-nav text-[0.6rem] tracking-[0.25em] uppercase text-white/90 px-8 flex items-center gap-8">
            {item}
            <span className="w-1 h-1 rounded-full bg-white/40 inline-block" />
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
