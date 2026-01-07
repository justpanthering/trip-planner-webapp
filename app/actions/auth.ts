"use server";

import { authenticatedRequest } from "@/lib/api";

export interface User {
  id: string;
  email: string;
  name?: string;
  createdAt?: string;
  updatedAt?: string;
}

export async function getCurrentUser(idToken: string): Promise<User> {
  try {
    const user = await authenticatedRequest<User>("/api/auth/me", idToken);
    return user;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to get current user"
    );
  }
}

