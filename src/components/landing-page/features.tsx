import { Bell, Globe, Layout, Lock, ShieldCheck, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Instant Alerts",
    description: "Get notified immediately via Email, SMS, Slack, or Webhooks when your service goes down.",
  },
  {
    icon: Globe,
    title: "Global Monitoring",
    description: "We monitor your services from multiple locations around the world to ensure global availability.",
  },
  {
    icon: Layout,
    title: "Status Pages",
    description: "Showcase your uptime with elegant, customizable status pages that build trust with your users.",
  },
  {
    icon: Lock,
    title: "SSL Monitoring",
    description: "Get alerted before your SSL certificates expire so your users are never greeted with a warning.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability First",
    description: "Built on a robust infrastructure designed to never miss a heartbeat of your services.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Customize alert thresholds and quiet hours so you're only woken up when it really matters.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Space Gradient */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background/0 to-background/0" />
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-background/0 to-background/0" />

      <div className="max-w-5xl mx-auto px-6 lg:px-0">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/60">
            Everything you need to stay online
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Powerful tools wrapped in a simple, elegant interface. 
            Monitoring shouldn&apos;t be rocket science.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <Card key={idx} className="bg-card border-border backdrop-blur-sm hover:bg-muted transition-colors duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <feature.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-medium text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
