"use client";

import dynamic from "next/dynamic";

const BusinessProfile = dynamic(() => import("@/screens/BusinessProfile"), {
  ssr: false,
});

export default function Page() {
  return <BusinessProfile />;
}
