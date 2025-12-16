import { Check } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-background/50 relative overflow-hidden">
      {/* Space Gradient */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-primary/15 via-background/0 to-background/0" />

      <div className="max-w-5xl mx-auto px-6 lg:px-0">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter mb-6 text-foreground">
              Monitor anything, <br /> from anywhere.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether it&apos;s a simple website, a complex API, or a background worker, SleepComet has you covered. 
              We run checks from multiple global regions to ensure your users are seeing what you expect.
            </p>
            
            <ul className="space-y-5">
              {[
                "HTTP/HTTPS, TCP, and ICMP Ping support",
                "Custom request headers & bodies",
                "SSL expiry & validity detection",
                "Response time & status code validation"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="flex-none h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-foreground/80 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 blur-3xl rounded-full opacity-50" />
            
            <div className="relative z-10 grid grid-cols-2 gap-x-8 gap-y-12">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 tracking-tight">30s</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Check Interval</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 tracking-tight">12</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Global Regions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 tracking-tight">99.9%</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Uptime Goal</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 tracking-tight">24/7</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
