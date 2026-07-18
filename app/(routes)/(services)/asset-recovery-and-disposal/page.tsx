import AssetRecoveryAndDisposal from "@/components/services/asset-recovery-and-disposal/asset-recovery-and-disposal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asset Recovery and Disposal",
  description:
    "Efficient recovery and recycling of electronic waste (e-waste), plastics, and metals with responsible, compliant disposal.",
};

const AssetRecoveryAndDisposalpage = () => {
  return (
    <div>
      <AssetRecoveryAndDisposal />
    </div>
  );
};

export default AssetRecoveryAndDisposalpage;
