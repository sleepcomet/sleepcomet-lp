"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { useSession } from "@/hooks/use-session";

export function Navbar() {
  const { session, loading } = useSession();
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-5xl mx-auto px-6 lg:px-0 h-16 flex items-center justify-between">
        {/* Left Side: Logo + Navigation Links */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <Image src="/logo.svg" alt="SleepComet" width={144} height={40} className="invert dark:invert-0" />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {/* Product Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMegaMenu("product")}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-xl cursor-pointer">
                Product
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeMegaMenu === "product" ? "rotate-180" : ""}`} />
              </button>

              {activeMegaMenu === "product" && (
                <div className="absolute left-0 top-full pt-2 w-screen max-w-4xl">
                  <div className="bg-popover border border-border rounded-lg shadow-2xl p-8 animate-in fade-in-0 slide-in-from-top-2 duration-200">
                    <div className="grid grid-cols-4 gap-6">
                      {/* Featured Card */}
                      <div className="col-span-1">
                        <Link
                          href="/"
                          className="block p-6 rounded-lg bg-linear-to-br from-primary/10 via-primary/5 to-transparent hover:from-primary/20 transition-all group"
                        >
                          <Image src="/logo.svg" alt="SleepComet" width={100} height={30} className="mb-4 h-auto" />
                          <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">SleepComet</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Reliable uptime monitoring for your peace of mind.
                          </p>
                        </Link>
                      </div>

                      {/* Links Grid */}
                      <div className="col-span-3 grid grid-cols-2 gap-3">
                        <Link href="/features" className="group p-4 rounded-lg hover:bg-accent transition-colors">
                          <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">Features</h4>
                          <p className="text-sm text-muted-foreground">Explore all our powerful monitoring tools.</p>
                        </Link>

                        <Link href="/status-pages" className="group p-4 rounded-lg hover:bg-accent transition-colors">
                          <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">Status Pages</h4>
                          <p className="text-sm text-muted-foreground">Beautiful status pages for your users.</p>
                        </Link>

                        <Link href="/integrations" className="group p-4 rounded-lg hover:bg-accent transition-colors">
                          <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">Integrations</h4>
                          <p className="text-sm text-muted-foreground">Connect with Slack, Discord, and more.</p>
                        </Link>

                        <Link href="/api" className="group p-4 rounded-lg hover:bg-accent transition-colors">
                          <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">API</h4>
                          <p className="text-sm text-muted-foreground">Programmatic access to your data.</p>
                        </Link>

                        <Link href="/pricing" className="group p-4 rounded-lg hover:bg-accent transition-colors">
                          <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">Pricing</h4>
                          <p className="text-sm text-muted-foreground">Plans for every stage of growth.</p>
                        </Link>

                        <Link href="/how-it-works" className="group p-4 rounded-lg hover:bg-accent transition-colors">
                          <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">How it Works</h4>
                          <p className="text-sm text-muted-foreground">See how SleepComet monitors your services.</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMegaMenu("resources")}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-xl cursor-pointer">
                Resources
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeMegaMenu === "resources" ? "rotate-180" : ""}`} />
              </button>

              {activeMegaMenu === "resources" && (
                <div className="absolute left-0 top-full pt-2 w-64">
                  <div className="bg-popover border border-border rounded-lg shadow-2xl p-2 animate-in fade-in-0 slide-in-from-top-2 duration-200">
                    <Link href="/blog" className="block px-4 py-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                      <div className="text-sm font-medium">Blog</div>
                      <div className="text-xs text-muted-foreground">Latest news and guides</div>
                    </Link>
                    <Link href="/docs" className="block px-4 py-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                      <div className="text-sm font-medium">Documentation</div>
                      <div className="text-xs text-muted-foreground">Guides and API reference</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/pricing" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-xl">
              Pricing
            </Link>
          </div>
        </div>

        {/* Right Side: Auth Buttons */}
        <div className="flex items-center gap-4">
          {loading ? (
             <div className="w-24 h-9 bg-muted/20 animate-pulse rounded-md" />
          ) : session ? (
             <Button asChild>
               <a href={`${process.env.NEXT_PUBLIC_CONSOLE_URL}`}>Dashboard</a>
             </Button>
          ) : (
            <>
              <Button variant="ghost" asChild className="hidden sm:inline-flex">
                <a href={`${process.env.NEXT_PUBLIC_CONSOLE_URL}/auth/signin`}>Log in</a>
              </Button>
              <Button asChild>
                <a href={`${process.env.NEXT_PUBLIC_CONSOLE_URL}/auth/signin?plan=free`}>Get Started</a>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
