import ServiceContent from "@/components/services/libs/service-content";
import { Boxes, Recycle, Settings2, Lock } from "lucide-react";

const AssetRecoveryAndDisposal = () => {
  const highlights = [
    {
      title: "Office Equipment",
      description:
        "Securely disposes of or recycles furniture, IT equipment, and other assets.",
    },
    {
      title: "Reuse and Repurposing",
      description:
        "Identifies opportunities for reusing items before resorting to recycling or disposal.",
    },
    {
      title: "Data Security",
      description:
        "Ensures electronic devices are cleared of sensitive data during the recovery process.",
    },
  ];

  const features = [
    {
      title: "Comprehensive Solutions",
      description:
        "Collection, refurbishment, recycling, and disposal end to end.",
      icon: Boxes,
    },
    {
      title: "Environmental Responsibility",
      description: "Reduces waste and impact through sustainable practices.",
      icon: Recycle,
    },
    {
      title: "Tailored Services",
      description:
        "Custom solutions for businesses, institutions, and individuals.",
      icon: Settings2,
    },
    {
      title: "Focus on Security",
      description:
        "Secure handling of sensitive data and full compliance with data laws.",
      icon: Lock,
    },
  ];

  return (
    <ServiceContent
      title="Asset Recovery and Disposal"
      image="/assets/assortment-dirty-dumped-objects (1).jpg"
      intro={[
        "We offer comprehensive asset recovery and disposal services designed to help organizations manage their outdated, surplus, or unwanted assets effectively. By focusing on reuse, recycling, and secure disposal, we ensure maximum value recovery while prioritizing environmental sustainability.",
      ]}
      highlights={highlights}
      whyTitle="Why choose us for asset recovery"
      features={features}
    />
  );
};

export default AssetRecoveryAndDisposal;
