// Base URL of the Express backend. Mirrors the original hardcoded
// "http://localhost:4000" but allows overriding via env.
export const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE || "http://localhost:4000";
