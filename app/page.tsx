import dynamic from "next/dynamic";
// import { PortfolioSection } from "@/components/sections/PortfolioSection";
// import { ProcessSection } from "@/components/sections/ProcessSection";

// Dynamically import sections for better code splitting and performance
const HeroSection = dynamic(
  () =>
    import("@/components/sections/HeroSection").then((mod) => ({
      default: mod.HeroSection,
    })),
  {
    loading: () => <div className="min-h-screen bg-[#050505] animate-pulse" />,
    ssr: true,
  },
);
const TechStackSection = dynamic(
  () =>
    import("@/components/sections/TechStack").then((mod) => ({
      default: mod.default,
    })),
  {
    loading: () => (
      <div className="h-96 bg-gray-100 dark:bg-gray-900 animate-pulse" />
    ),
  },
);
const TestimonialsSection = dynamic(
  () =>
    import("@/components/sections/TestimonialsSection").then((mod) => ({
      default: mod.TestimonialsSection,
    })),
  {
    loading: () => (
      <div className="h-96 bg-gray-100 dark:bg-gray-900 animate-pulse" />
    ),
  },
);
const ContactSection = dynamic(
  () =>
    import("@/components/sections/ContactSection").then((mod) => ({
      default: mod.ContactSection,
    })),
  {
    loading: () => (
      <div className="h-96 bg-gray-100 dark:bg-gray-900 animate-pulse" />
    ),
  },
);
const FeaturesSection = dynamic(
  () =>
    import("@/components/sections/FeaturesSection").then((mod) => ({
      default: mod.default,
    })),
  {
    loading: () => (
      <div className="h-96 bg-gray-100 dark:bg-gray-900 animate-pulse" />
    ),
  },
);
const ServicesSection = dynamic(
  () =>
    import("@/components/sections/ServicesSection").then((mod) => ({
      default: mod.ServicesSection,
    })),
  {
    loading: () => (
      <div className="h-96 bg-gray-100 dark:bg-gray-900 animate-pulse" />
    ),
  },
);
const PriceListingSection = dynamic(
  () =>
    import("@/components/sections/PriceListingSection").then((mod) => ({
      default: mod.default,
    })),
  {
    loading: () => (
      <div className="h-96 bg-gray-100 dark:bg-gray-900 animate-pulse" />
    ),
  },
);

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Header with sticky navigation */}

      {/* 1. Hero Section - Eye-catching intro with CTA */}
      <HeroSection />

      {/* 2. Services Section - What we offer (6 services) */}
      <ServicesSection />

      {/* 3. Portfolio Section - Recent projects showcase */}
      {/*<PortfolioSection /> */}

      {/* 6. TechStack Section - Service packages */}
      <TechStackSection />

      {/* 4. Features Section - Why choose us */}
      <FeaturesSection />

      {/* 5. Process Section - How we work (6-step process) */}
      {/*<ProcessSection />*/}

      {/* 6. Price Listing Section - Representative Pricing */}
      <PriceListingSection />

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
