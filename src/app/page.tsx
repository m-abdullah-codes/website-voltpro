import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ParallaxSection from "@/components/ParallaxSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import EmergencySection from "@/components/EmergencySection";
import WorkGallery from "@/components/WorkGallery";
import ReviewsSection from "@/components/ReviewsSection";
import ServiceAreas from "@/components/ServiceAreas";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#02050A] min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ParallaxSection />
      <WhyChooseUs />
      <EmergencySection />
      <WorkGallery />
      <ReviewsSection />
      <ServiceAreas />
      <ProcessSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
