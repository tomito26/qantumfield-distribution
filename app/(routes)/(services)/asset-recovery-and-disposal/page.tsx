import AssetRecoveryAndDisposal from "@/components/services/asset-recovery-and-disposal/asset-recovery-and-disposal";
import ServiceSchema from "@/components/seo/service-schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asset Recovery & Disposal",
  description:
    "Secure recovery and recycling of electronic waste (e-waste), plastics, and metals, with responsible, compliant end-of-life disposal across Kenya and East Africa.",
  alternates: { canonical: "/asset-recovery-and-disposal" },
};

const AssetRecoveryAndDisposalpage = () => {
  return (
    <div>
      <ServiceSchema route="/asset-recovery-and-disposal" />
      <AssetRecoveryAndDisposal />
    </div>
  );
};

export default AssetRecoveryAndDisposalpage;
