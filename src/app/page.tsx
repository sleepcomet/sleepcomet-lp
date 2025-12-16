import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/landing-page/hero";
import { FeaturesSection } from "@/components/landing-page/features";
import { TestimonialsSection } from "@/components/landing-page/testimonials";
import { CTASection } from "@/components/landing-page/cta";

export default function Home() {
  return (
    <div className="dark min-h-screen bg-black text-white selection:bg-blue-500/30 font-sans">
      <Navbar />
      
      <main className="flex flex-col">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
