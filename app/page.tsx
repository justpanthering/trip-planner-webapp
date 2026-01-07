"use client";

import { useAuth } from "@/contexts/auth-context";
import { useCurrentUser } from "@/lib/hooks/use-current-user";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user, loading, signOut } = useAuth();
  const { data: currentUser, isLoading: isLoadingUser } = useCurrentUser();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-3xl font-semibold">Welcome to Trip Planner</h1>
          <p className="text-lg text-muted-foreground">
            Please sign in to continue
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/register">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <h1 className="text-xl font-semibold">Trip Planner</h1>
          <div className="flex items-center gap-4">
            {isLoadingUser ? (
              <p className="text-sm text-muted-foreground">Loading...</p>
            ) : (
              <p className="text-sm text-muted-foreground">
                {currentUser?.email}
              </p>
            )}
            <Button variant="outline" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
        </div>
      </header>
      <main className="container mx-auto flex-1 px-4 py-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-2xl font-semibold">Welcome back!</h2>
          <p className="text-muted-foreground">
            Start planning your next trip
          </p>
        </div>
      </main>
    </div>
  );
}
