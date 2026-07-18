import WasteDisposal from "@/components/services/waste-disposal/waste-disposal";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Waste Disposal",
  description:
    "Eco-friendly, compliant disposal of general, hazardous, construction, and organic waste for businesses, government, and individuals.",
};

const WasteDisposalpage = () => {
  return (
    <div>
      <WasteDisposal />
    </div>
  );
};

export default WasteDisposalpage;
