"use client";

import dynamic from "next/dynamic";

const Invoices = dynamic(() => import("@/screens/Invoices"), { ssr: false });

export default function Page() {
  return <Invoices />;
}
