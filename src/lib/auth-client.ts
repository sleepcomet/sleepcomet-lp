import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_WEBSITE_URL || "http://localhost:3001", // Use LP URL to trigger Next.js proxy
  fetchOptions: {
    credentials: "include", // Share cookies
  }
});

export const { useSession, signIn, signOut } = authClient;
