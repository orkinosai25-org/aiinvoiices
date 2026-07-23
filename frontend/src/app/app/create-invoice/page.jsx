"use client";

import dynamic from "next/dynamic";

const CreateInvoice = dynamic(() => import("@/screens/CreateInvoice"), {
  ssr: false,
});

export default function Page() {
  return <CreateInvoice />;
}
