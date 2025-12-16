import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const testimonials = [
  {
    name: "Alex Chen",
    role: "DevOps Engineer",
    content: "SleepComet has been a lifesaver. The instant alerts helped us catch a critical downtime event before our customers even noticed. The status pages are beautiful too.",
    avatar: "AC",
  },
  {
    name: "Sarah Miller",
    role: "CTO at TechFlow",
    content: "We switched from Uptime Robot because we wanted something cleaner and more modern. SleepComet delivered exactly that. The interface is a joy to use.",
    avatar: "SM",
  },
  {
    name: "Jordan Lee",
    role: "Indie Hacker",
    content: "For my side projects, I need reliable monitoring that doesn't cost a fortune. SleepComet's free tier is generous and the pro features are worth every penny.",
    avatar: "JL",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Space Gradient */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/10 via-background/0 to-background/0" />

      <div className="max-w-5xl mx-auto px-6 lg:px-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Trusted by Developers</h2>
          <p className="text-muted-foreground">Join thousands of developers who trust SleepComet.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-card border-border backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">{t.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm text-card-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  &quot;{t.content}&quot;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
