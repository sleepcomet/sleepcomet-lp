"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Meteors } from "@/components/ui/meteors";

export function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-background mt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-background/90 to-background z-10 pointer-events-none" />
      
      <div className="container relative z-20 flex flex-col items-center text-center gap-8 px-4">
        <div className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-sm text-muted-foreground backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
          New: SSL Certificate Monitoring
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/40">
          Monitor Your <br className="hidden md:block" /> Digital Universe
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          SleepComet provides instant downtime alerts and reliable status pages. 
          Don&apos;t let your services drift into the void without you knowing.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <Button asChild size="lg" className="h-12 px-8 rounded-full text-base">
            <Link href="/register">
              Start Monitoring Free
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-8 rounded-full text-base">
            <Link href="/features">
              Explore Features
            </Link>
          </Button>
        </div>
      </div>

      {/* Meteors Effect */}
      <Meteors number={40} className="z-0" />
    </section>
  );
}
