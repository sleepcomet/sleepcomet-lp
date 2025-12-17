"use client";

import { Check, X, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, Fragment } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PLANS = [
  {
    name: 'Free Plan',
    slug: 'free',
    prices: { monthly: 0, yearly: 0 },
    description: 'Perfect for side projects and hobbyists.',
    features: [
      { name: '50 Endpoints', included: true },
      { name: '1 Status Page', included: true },
      { name: '5 Min Check Interval', included: true },
      { name: '3 Days Data Retention', included: true },
      { name: 'SSL Monitoring', included: false },
      { name: 'Custom Domain', included: false },
      { name: 'Email Alerts', included: false },
      { name: 'Response Alerts', included: false },
    ],
    buttonText: 'Start for Free',
    popular: false,
    href: `${process.env.NEXT_PUBLIC_CONSOLE_URL}/auth/signin?plan=free`
  },
  {
    name: 'Solo Plan',
    slug: 'solo',
    prices: { monthly: 4.99, yearly: 3.99 },
    description: 'For individual developers scaling up.',
    features: [
      { name: '60 Endpoints', included: true },
      { name: '2 Status Pages', included: true },
      { name: '5 Min Check Interval', included: true },
      { name: '30 Days Data Retention', included: true },
      { name: 'SSL Monitoring', included: false },
      { name: 'Custom Domain', included: false },
      { name: 'Email Alerts', included: false },
      { name: 'Response Alerts', included: false },
    ],
    buttonText: 'Get Started',
    popular: false,
    href: `${process.env.NEXT_PUBLIC_CONSOLE_URL}/auth/signin?plan=solo`
  },
  {
    name: 'Pro Plan',
    slug: 'pro',
    prices: { monthly: 9.99, yearly: 7.99 },
    description: 'Everything you need for production apps.',
    features: [
      { name: '100 Endpoints', included: true },
      { name: '5 Status Pages', included: true },
      { name: '5 Min Check Interval', included: true },
      { name: '90 Days Data Retention', included: true },
      { name: 'SSL Monitoring', included: true },
      { name: 'Custom Domain', included: true },
      { name: 'Email Alerts', included: false },
      { name: 'Response Alerts', included: false }, // BLOCKED
    ],
    buttonText: 'Get Started',
    popular: true,
    href: `${process.env.NEXT_PUBLIC_CONSOLE_URL}/auth/signin?plan=pro`
  },
  {
    name: 'Business Plan',
    slug: 'business',
    prices: { monthly: 29.99, yearly: 23.99 }, // 29.99 * 12 * 0.8 / 12 ~= 23.99
    description: 'Unlimited power for growing teams.',
    features: [
      { name: 'Unlimited Endpoints', included: true },
      { name: 'Unlimited Status Pages', included: true },
      { name: '5 Min Check Interval', included: true },
      { name: '365 Days Data Retention', included: true },
      { name: 'SSL Monitoring', included: true },
      { name: 'Custom Domain', included: true },
      { name: 'Email Alerts', included: true },
      { name: 'Response Alerts', included: true },
    ],
    buttonText: 'Contact Sales',
    popular: false,
    href: `${process.env.NEXT_PUBLIC_CONSOLE_URL}/auth/signin?plan=business`
  }
];

const COMPARISON_FEATURES = [
  {
    category: "Usage Limits",
    items: [
      { name: "Monitors (Endpoints)", free: "50", solo: "60", pro: "100", business: "Unlimited" },
      { name: "Status Pages", free: "1", solo: "2", pro: "5", business: "Unlimited" },
      { name: "Check Interval", free: "5 min", solo: "5 min", pro: "5 min", business: "5 min" },
      { name: "Data Retention", free: "3 days", solo: "30 days", pro: "90 days", business: "365 days" },
    ]
  },
  {
    category: "Monitoring",
    items: [
      { name: "HTTP/HTTPS Monitoring", free: true, solo: true, pro: true, business: true },
      { name: "SSL Expiry Monitoring", free: false, solo: false, pro: true, business: true },
      { name: "Port Monitoring (TCP/UDP)", free: true, solo: true, pro: true, business: true },
    ]
  },
  {
    category: "Alerting & Notifications",
    items: [
      { name: "Email Alerts", free: false, solo: false, pro: false, business: true },
      { name: "Response Time Alerts", free: false, solo: false, pro: false, business: true },
    ]
  },
  {
    category: "Branding",
    items: [
      { name: "Custom Domain (Status Pages)", free: false, solo: false, pro: true, business: true },
      { name: "Remove Branding", free: false, solo: false, pro: true, business: true },
    ]
  }
];

import { useSession } from "@/hooks/use-session";

export function PricingSection() {
  const { session, loading } = useSession();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const currentPlan = (loading ? undefined : session?.user?.plan?.toLowerCase()) || 'free';
  const planOrder = ['free', 'solo', 'pro', 'business'];
  const currentPlanIndex = planOrder.indexOf(currentPlan);

  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-0 relative z-10">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
            Choose the perfect plan for your monitoring needs. No hidden fees.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center gap-4 mb-16">
          <Label htmlFor="billing-cycle" className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-foreground' : 'text-muted-foreground'}`}>
            Monthly
          </Label>
          <Switch
            id="billing-cycle"
            checked={billingCycle === "yearly"}
            onCheckedChange={(checked) => setBillingCycle(checked ? "yearly" : "monthly")}
          />
          <Label htmlFor="billing-cycle" className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-foreground' : 'text-muted-foreground'}`}>
            Yearly <span className="text-primary text-xs ml-1 font-bold">(20% OFF)</span>
          </Label>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {PLANS.map((plan) => {
            const price = billingCycle === "monthly" ? plan.prices.monthly : plan.prices.yearly;

            const isCurrentPlan = plan.slug === currentPlan;
            const planIndex = planOrder.indexOf(plan.slug);
            const isDowngrade = planIndex < currentPlanIndex;
            const isDisabled = isCurrentPlan || isDowngrade;

            return (
              <Card key={plan.slug} className={`flex flex-col relative ${plan.popular ? 'border-primary shadow-lg shadow-primary/20 scale-105 z-10' : 'border-border'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-3 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4 flex items-baseline text-3xl font-bold">
                    ${price}
                    <span className="text-sm font-normal text-muted-foreground ml-1">/mo</span>
                  </div>
                  {billingCycle === "yearly" && price > 0 && (
                    <p className="text-xs text-muted-foreground mt-1">
                      Billed yearly
                    </p>
                  )}
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3 text-sm">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        {feature.included ? (
                          <Check className="h-4 w-4 text-primary shrink-0" />
                        ) : (
                          <X className="h-4 w-4 text-muted-foreground shrink-0 opacity-50" />
                        )}
                        <span className={feature.included ? "text-foreground" : "text-muted-foreground opacity-70"}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"} disabled={isDisabled || loading} asChild={!isDisabled && !loading}>
                    {loading ? (
                      "Loading..."
                    ) : isCurrentPlan ? (
                      "Current Plan"
                    ) : isDowngrade ? (
                      "Included"
                    ) : (
                      <a href={`${plan.href}&interval=${billingCycle}`}>{plan.buttonText}</a>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold tracking-tight">Compare Plans</h3>
            <p className="text-muted-foreground">Detailed breakdown of features and limits.</p>
          </div>

          <div className="rounded-lg border bg-card">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[30%]">Feature</TableHead>
                  <TableHead className="text-center">Free</TableHead>
                  <TableHead className="text-center">Solo</TableHead>
                  <TableHead className="text-center">Pro</TableHead>
                  <TableHead className="text-center">Business</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {COMPARISON_FEATURES.map((category) => (
                  <Fragment key={category.category}>
                    <TableRow className="bg-muted/50 hover:bg-muted/50">
                      <TableCell colSpan={5} className="font-semibold">{category.category}</TableCell>
                    </TableRow>
                    {category.items.map((item) => (
                      <TableRow key={item.name}>
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell className="text-center">
                          {renderCell(item.free)}
                        </TableCell>
                        <TableCell className="text-center">
                          {renderCell(item.solo)}
                        </TableCell>
                        <TableCell className="text-center">
                          {renderCell(item.pro)}
                        </TableCell>
                        <TableCell className="text-center">
                          {renderCell(item.business)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </Fragment>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
}

function renderCell(value: string | boolean) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="h-5 w-5 text-primary mx-auto" />
    ) : (
      <Minus className="h-5 w-5 text-muted-foreground/30 mx-auto" />
    );
  }
  return <span className="text-sm">{value}</span>;
}
