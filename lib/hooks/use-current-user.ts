"use client";

import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/contexts/auth-context";
import { getCurrentUser } from "@/app/actions/auth";

export function useCurrentUser() {
  const { user, getIdToken } = useAuth();

  return useQuery({
    queryKey: ["currentUser", user?.uid],
    queryFn: async () => {
      if (!user) return null;
      const idToken = await getIdToken();
      if (!idToken) return null;
      return getCurrentUser(idToken);
    },
    enabled: !!user,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

