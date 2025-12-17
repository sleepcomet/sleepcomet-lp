import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/auth/:path*",
        destination: `${process.env.NEXT_PUBLIC_CONSOLE_URL || "http://localhost:3000"}/api/auth/:path*`,
      },
    ];
  },
};

export default nextConfig;
