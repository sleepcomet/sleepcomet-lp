import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600/5 z-0" />
      <div className="container mx-auto max-w-4xl relative z-10 text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
          Ready to Launch?
        </h2>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
          Join thousands of developers who sleep soundly knowing SleepComet is watching their services.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button asChild size="lg" className="h-14 px-8 rounded-full text-lg bg-white text-black hover:bg-neutral-200">
            <Link href="/register">
              Start Monitoring Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
        <p className="text-sm text-neutral-500 pt-4">
          No credit card required for free plan.
        </p>
      </div>
    </section>
  );
}
