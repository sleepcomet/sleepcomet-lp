import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 via-background/0 to-background/0" />

      <div className="max-w-5xl mx-auto px-6 lg:px-0 relative z-10 text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
          Ready to Launch?
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Join thousands of developers who sleep soundly knowing SleepComet is watching their services.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button asChild size="lg" className="h-14 px-8 rounded-full text-lg">
            <Link href="/register">
              Start Monitoring Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground pt-4">
          No credit card required for free plan.
        </p>
      </div>
    </section>
  );
}
