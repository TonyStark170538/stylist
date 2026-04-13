import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import CtaBanner from "@/components/sections/CtaBanner";
import GlobalStyleSection from "@/components/sections/GlobalStyleSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.975_0.008_75)]">
      <Navbar />
      <HeroSection />
      <MarqueeStrip />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <CtaBanner />
      <GlobalStyleSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
