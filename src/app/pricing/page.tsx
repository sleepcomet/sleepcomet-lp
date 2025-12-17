import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PricingSection } from "@/components/landing-page/pricing";
import { PricingCTA } from "@/components/landing-page/pricing-cta";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="flex flex-col pt-16">
        <PricingSection />
        <PricingCTA />
      </main>
      <Footer />
    </div>
  );
}
