import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PricingCTA() {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-background border-t border-border/50">
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background/0 to-background/0" />

      <div className="max-w-5xl mx-auto px-6 lg:px-0 relative z-10 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground">
          Ready to get started?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Join thousands of developers monitoring their services with SleepComet.
          <br className="hidden sm:inline" /> Start for free, upgrade when you need to.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button asChild size="lg" className="h-12 px-8 rounded-full text-base font-semibold shadow-lg shadow-primary/20">
            <a href={`${process.env.NEXT_PUBLIC_CONSOLE_URL}/auth/signin?plan=free`}>
              Create Free Account
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          No credit card required for the Free plan.
        </p>
      </div>
    </section>
  );
}
