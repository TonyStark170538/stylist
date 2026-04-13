export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[oklch(0.1_0.008_50)] py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="font-display text-xl font-light tracking-[0.08em] text-[oklch(0.88_0.025_65)] hover:text-[oklch(0.72_0.06_60)] transition-colors duration-300"
        >
          Dariya <span className="italic font-medium">Helmle</span>
        </a>

        <p className="font-nav text-[0.6rem] tracking-[0.15em] uppercase text-[oklch(0.45_0.01_55)] text-center">
          © {year} Dariya Helmle. All rights reserved. · Style as a Signature.
        </p>

        <div className="flex gap-6">
          {["Privacy", "Terms"].map((link) => (
            <button
              key={link}
              className="font-nav text-[0.6rem] tracking-[0.15em] uppercase text-[oklch(0.45_0.01_55)] hover:text-[oklch(0.72_0.06_60)] transition-colors duration-300"
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
