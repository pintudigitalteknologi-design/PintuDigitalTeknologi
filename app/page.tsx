import { HeroSection } from "@/components/sections/HeroSection";
import TechStackSection from "@/components/sections/TechStack";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Header with sticky navigation */}

      {/* 1. Hero Section - Eye-catching intro with CTA */}
      <HeroSection />

      {/* 2. Services Section - What we offer (6 services) */}
      <ServicesSection />

      {/* 3. Portfolio Section - Recent projects showcase */}
      {/* <PortfolioSection /> */}

      {/* 6. TechStack Section - Service packages */}
      <TechStackSection />

      {/* 4. Features Section - Why choose us */}
      <FeaturesSection />

      {/* 5. Process Section - How we work (6-step process) */}
      {/*<ProcessSection />*/}

      {/* 7. Testimonials Section - Client success stories */}
      <TestimonialsSection />

      {/* 8. Why Us Section - Why choose us */}
      {/* <WhyUsSection /> */}

      {/* 9. Contact Section - Get in touch form */}
      <ContactSection />

      {/* Footer - Navigation and info */}
    </main>
  );
}
