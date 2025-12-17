import { useSession as useBetterAuthSession } from "@/lib/auth-client";

interface Session {
  user: {
    id: string;
    email: string;
    emailVerified: boolean;
    name: string;
    createdAt: string;
    updatedAt: string;
    image?: string | null;
    plan?: string;
  };
  session: {
    id: string;
    userId: string;
    token: string;
    expiresAt: string;
    ipAddress: string;
    userAgent: string;
  };
}

export function useSession() {
  const { data: session, isPending, error } = useBetterAuthSession();

  return { 
    session: session as Session | null, 
    loading: isPending,
    error 
  };
}
