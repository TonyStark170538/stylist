import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Phone, MapPin, Instagram, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";


const services = [
  "Personal Styling (1:1 Session)",
  "Wardrobe Audit",
  "Shopping Assistance",
  "Event Styling",
  "Virtual Styling",
  "Free Discovery Call",
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const sectionRef = useScrollAnimation(0.1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.service) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Your inquiry has been sent. Dariya will be in touch within 24 hours.");
  };

  return (
    <section id="contact" className="bg-[oklch(0.14_0.01_50)]">
      <div ref={sectionRef} className="fade-up grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Info panel */}
        <div className="px-8 py-20 md:px-16 md:py-28 flex flex-col justify-between">
          <div>
            <p className="section-label text-[oklch(0.72_0.06_60)] mb-5">Get in Touch</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-8">
              Begin Your<br />
              <em className="italic font-medium text-[oklch(0.88_0.04_65)]">Style Journey</em>
            </h2>
            <div className="divider-sand mb-8 w-16" style={{ background: "oklch(0.72 0.06 60 / 0.4)" }} />
            <p className="font-body text-[oklch(0.72_0.015_55)] text-base leading-[1.9] mb-10 max-w-sm">
              Whether you're ready to book a session or simply want to explore what's possible, I'd love to hear from you. Every transformation begins with a single conversation.
            </p>

            {/* Contact details */}
            <div className="space-y-5 mb-12">
              {[
                { icon: Mail, label: "dariya.helmle@icloud.com" },
                { icon: Phone, label: "+49 176 631 29 178" },
                { icon: MapPin, label: "Paris · Germany · Milan · Worldwide" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-8 h-8 border border-[oklch(0.72_0.06_60/0.4)] flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-[oklch(0.72_0.06_60)]" />
                  </div>
                  <span className="font-body text-sm text-[oklch(0.72_0.015_55)]">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social links */}
          <div>
            <p className="font-nav text-[0.6rem] tracking-[0.2em] uppercase text-[oklch(0.52_0.015_55)] mb-4">
              Follow Along
            </p>
            <div className="flex gap-4">
              {[
                {
                  name: "Instagram",
                  href: "https://www.instagram.com/dariya_helmle?igsh=MXMydGVtcnU1bHN5aA==",
                },
                {
                  name: "WhatsApp",
                  href: "https://wa.me/4917663129178",
                },
                {
                  name: "Telegram",
                  href: "https://t.me/DARIYA12345677",
                },
              ].map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-nav text-[0.65rem] tracking-[0.12em] uppercase text-[oklch(0.52_0.015_55)] hover:text-[oklch(0.72_0.06_60)] transition-colors duration-300 flex items-center gap-2"
                >
                  <Instagram size={12} />
                  {platform.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Form panel */}
        <div className="bg-[oklch(0.975_0.008_75)] px-8 py-20 md:px-16 md:py-28">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-6 py-16">
              <CheckCircle size={48} className="text-[oklch(0.72_0.06_60)]" />
              <h3 className="font-display text-3xl font-light text-[oklch(0.14_0.01_50)]">
                Thank You, {form.name}
              </h3>
              <p className="font-body text-[oklch(0.52_0.015_55)] text-sm leading-relaxed max-w-xs">
                Your inquiry has been received. Dariya will personally respond within 24 hours to discuss your styling journey.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", service: "", message: "" }); }}
                className="btn-ghost-sand mt-4"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <p className="section-label mb-6">Book a Consultation</p>
                <h3 className="font-display text-3xl font-light text-[oklch(0.14_0.01_50)] mb-8">
                  Tell Me About<br />
                  <em className="italic font-medium">Your Vision</em>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-nav text-[0.6rem] tracking-[0.18em] uppercase text-[oklch(0.52_0.015_55)] block mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Sophie Laurent"
                    className="w-full bg-transparent border border-[oklch(0.88_0.018_65)] px-4 py-3 font-body text-sm text-[oklch(0.14_0.01_50)] placeholder:text-[oklch(0.72_0.015_55)] focus:outline-none focus:border-[oklch(0.72_0.06_60)] transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="font-nav text-[0.6rem] tracking-[0.18em] uppercase text-[oklch(0.52_0.015_55)] block mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full bg-transparent border border-[oklch(0.88_0.018_65)] px-4 py-3 font-body text-sm text-[oklch(0.14_0.01_50)] placeholder:text-[oklch(0.72_0.015_55)] focus:outline-none focus:border-[oklch(0.72_0.06_60)] transition-colors duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="font-nav text-[0.6rem] tracking-[0.18em] uppercase text-[oklch(0.52_0.015_55)] block mb-2">
                  Service of Interest *
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-[oklch(0.88_0.018_65)] px-4 py-3 font-body text-sm text-[oklch(0.14_0.01_50)] focus:outline-none focus:border-[oklch(0.72_0.06_60)] transition-colors duration-300 appearance-none"
                >
                  <option value="" disabled>Select a service...</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-nav text-[0.6rem] tracking-[0.18em] uppercase text-[oklch(0.52_0.015_55)] block mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell me about your style goals, upcoming events, or any specific challenges you're facing..."
                  className="w-full bg-transparent border border-[oklch(0.88_0.018_65)] px-4 py-3 font-body text-sm text-[oklch(0.14_0.01_50)] placeholder:text-[oklch(0.72_0.015_55)] focus:outline-none focus:border-[oklch(0.72_0.06_60)] transition-colors duration-300 resize-none"
                />
              </div>

              <button type="submit" className="btn-sand w-full justify-center gap-3">
                <Send size={14} />
                Send Inquiry
              </button>

              <p className="font-body text-xs text-[oklch(0.62_0.012_55)] text-center">
                I respond to all inquiries within 24 hours. Your information is kept strictly confidential.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
