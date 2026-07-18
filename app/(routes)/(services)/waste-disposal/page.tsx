import WasteDisposal from "@/components/services/waste-disposal/waste-disposal";
import ServiceSchema from "@/components/seo/service-schema";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Waste Disposal Services",
  description:
    "Eco-friendly, compliant disposal of general, hazardous, construction, and organic waste for businesses, government, and individuals across Kenya and East Africa.",
  alternates: { canonical: "/waste-disposal" },
};

const WasteDisposalpage = () => {
  return (
    <div>
      <ServiceSchema route="/waste-disposal" />
      <WasteDisposal />
    </div>
  );
};

export default WasteDisposalpage;
