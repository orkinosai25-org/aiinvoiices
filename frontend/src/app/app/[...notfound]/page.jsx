"use client";

import dynamic from "next/dynamic";

const Notfound = dynamic(() => import("@/screens/Notfound"), { ssr: false });

export default function Page() {
  return <Notfound />;
}
