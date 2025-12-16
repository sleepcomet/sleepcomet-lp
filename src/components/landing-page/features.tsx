import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Bell, Globe, Layout, Lock, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    Icon: Zap,
    name: "Instant Alerts",
    description: "Get notified immediately via Email, SMS, Slack, or Webhooks when your service goes down.",
    href: "/features/alerts",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <Zap className="w-64 h-64 text-yellow-500/20" />
      </div>
    ),
  },
  {
    Icon: Globe,
    name: "Global Monitoring",
    description: "We monitor your services from multiple locations around the world to ensure global availability.",
    href: "/features/global",
    cta: "View locations",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <Globe className="w-96 h-96 text-blue-500/20" />
      </div>
    ),
  },
  {
    Icon: Layout,
    name: "Beautiful Status Pages",
    description: "Showcase your uptime with elegant, customizable status pages that build trust with your users.",
    href: "/features/status-pages",
    cta: "See examples",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <Layout className="w-96 h-96 text-purple-500/20" />
      </div>
    ),
  },
  {
    Icon: Lock,
    name: "SSL Monitoring",
    description: "Get alerted before your SSL certificates expire so your users are never greeted with a warning.",
    href: "/features/ssl",
    cta: "Check SSL",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <Lock className="w-64 h-64 text-green-500/20" />
      </div>
    ),
  },
  {
    Icon: ShieldCheck,
    name: "Reliability First",
    description: "Built on a robust infrastructure designed to never miss a heartbeat of your services.",
    href: "/features/reliability",
    cta: "Our infrastructure",
    className: "col-span-3",
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <ShieldCheck className="w-[500px] h-[500px] text-red-500/20" />
      </div>
    ),
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="container mx-auto space-y-8 max-w-5xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
            Everything you need to stay online
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Powerful tools wrapped in a simple, elegant interface. 
            Monitoring shouldn't be rocket science.
          </p>
        </div>
        
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
