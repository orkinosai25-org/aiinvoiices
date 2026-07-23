"use client";

import Link from "next/link";
import {
  ClerkProvider as BaseClerkProvider,
  RedirectToSignIn as BaseRedirectToSignIn,
  SignedIn as BaseSignedIn,
  SignedOut as BaseSignedOut,
  useAuth as useBaseAuth,
  useClerk as useBaseClerk,
  useUser as useBaseUser,
} from "@clerk/nextjs";

const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
const isClerkEnabled = Boolean(clerkPublishableKey);

const fallbackAuth = {
  getToken: async () => null,
  isLoaded: true,
  isSignedIn: false,
  orgId: null,
  sessionId: null,
  userId: null,
};

const fallbackUser = {
  isLoaded: true,
  isSignedIn: false,
  user: null,
};

const fallbackClerk = {
  loaded: false,
  openSignIn: () => {},
  openSignUp: () => {},
  signOut: async () => {},
};

function MissingClerkNotice() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
        <h1 className="text-xl font-semibold">Authentication is not configured</h1>
        <p className="mt-3 text-sm text-slate-300">
          Set <code>NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY</code> in
          {" "}
          <code>frontend/.env.local</code> and restart the frontend to enable
          sign-in.
        </p>
        <div className="mt-5">
          <Link
            href="/"
            className="inline-flex rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-950"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

export function SafeClerkProvider({ children }) {
  if (!isClerkEnabled) {
    return children;
  }

  return (
    <BaseClerkProvider publishableKey={clerkPublishableKey}>
      {children}
    </BaseClerkProvider>
  );
}

export function SignedIn({ children }) {
  if (!isClerkEnabled) {
    return null;
  }

  return <BaseSignedIn>{children}</BaseSignedIn>;
}

export function SignedOut({ children }) {
  if (!isClerkEnabled) {
    return children;
  }

  return <BaseSignedOut>{children}</BaseSignedOut>;
}

export function RedirectToSignIn(props) {
  if (!isClerkEnabled) {
    return <MissingClerkNotice />;
  }

  return <BaseRedirectToSignIn {...props} />;
}

export function useAuth() {
  try {
    return useBaseAuth();
  } catch {
    return fallbackAuth;
  }
}

export function useClerk() {
  try {
    return useBaseClerk();
  } catch {
    return fallbackClerk;
  }
}

export function useUser() {
  try {
    return useBaseUser();
  } catch {
    return fallbackUser;
  }
}

export { isClerkEnabled };
