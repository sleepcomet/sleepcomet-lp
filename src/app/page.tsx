import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/landing-page/hero";
import { IntegrationsSection } from "@/components/landing-page/integrations";
import { FeaturesSection } from "@/components/landing-page/features";
import { HowItWorksSection } from "@/components/landing-page/how-it-works";
import { TestimonialsSection } from "@/components/landing-page/testimonials";
import { CTASection } from "@/components/landing-page/cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 font-sans">
      <Navbar />
      
      <main className="flex flex-col">
        <HeroSection />
        <IntegrationsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
