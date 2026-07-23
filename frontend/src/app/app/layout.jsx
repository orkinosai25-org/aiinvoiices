"use client";

import React from "react";
import { RedirectToSignIn, SignedIn, SignedOut } from "@/lib/clerkCompat";
import AppShell from "@/components/AppShell";

export default function AppLayout({ children }) {
  return (
    <>
      <SignedIn>
        <AppShell>{children}</AppShell>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
