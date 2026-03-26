/*
 * Home Page — JL Solution
 * Design: "Confianza Profesional" — Full landing page
 * Sections: Navbar → Hero → UrgencyBanner → Services → Auction → WhyUs → Contact → Footer
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UrgencyBanner from "@/components/UrgencyBanner";
import ServicesSection from "@/components/ServicesSection";
import AuctionSection from "@/components/AuctionSection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <UrgencyBanner />
      <ServicesSection />
      <AuctionSection />
      <WhyUsSection />
      <ContactSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
