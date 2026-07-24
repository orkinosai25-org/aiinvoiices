"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useClerk } from "@/lib/clerkCompat";

export default function LoginPage() {
  const clerk = useClerk();

  useEffect(() => {
    if (clerk && typeof clerk.openSignIn === "function") {
      try {
        clerk.openSignIn({ redirectUrl: "/app/dashboard" });
      } catch {
        // modal unavailable — stay on this page
      }
    }
  }, [clerk]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-6 text-white">
      <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur text-center">
        <h1 className="text-xl font-semibold mb-3">Sign in to PromptToInvoice</h1>
        <p className="text-sm text-slate-400 mb-6">
          Opening sign-in&hellip; If nothing appears, make sure authentication
          is configured.
        </p>
        <Link
          href="/"
          className="inline-flex rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-500 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
