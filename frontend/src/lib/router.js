"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setNavState, consumeNavState } from "./navState";

/**
 * Compatibility hook that mimics react-router's `useNavigate`.
 *
 * Usage matches the original app:
 *   const navigate = useNavigate();
 *   navigate("/app/invoices");
 *   navigate("/app/invoices/123/edit", { state: { invoice } });
 *   navigate(-1); // go back
 */
export function useNavigate() {
  const router = useRouter();

  return (to, opts) => {
    if (typeof to === "number") {
      if (to < 0) router.back();
      else router.forward();
      return;
    }

    if (opts && "state" in opts) {
      setNavState(opts.state);
    }

    if (opts && opts.replace) router.replace(to);
    else router.push(to);
  };
}

/**
 * Compatibility hook that mimics react-router's `useLocation`.
 * Only `state` is supported (the only field the original app relied on).
 * State is captured once on mount so it is stable across re-renders.
 */
export function useLocation() {
  const [state] = useState(() => consumeNavState());
  return { state };
}
