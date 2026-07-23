"use client";

import dynamic from "next/dynamic";

const InvoicePreview = dynamic(() => import("@/components/InvoicePreview"), {
  ssr: false,
});

export default function Page() {
  return <InvoicePreview />;
}
