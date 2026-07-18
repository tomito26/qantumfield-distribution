import ServiceContent from "@/components/services/libs/service-content";
import { Leaf, ShieldCheck, Settings2, Cpu } from "lucide-react";

const WasteDisposal = () => {
  const highlights = [
    {
      title: "Non-Recyclable Waste Disposal",
      description:
        "Not all materials can be recycled, but we ensure that non-recyclable waste is handled responsibly.",
    },
    {
      title: "Hazardous Waste Management",
      description:
        "We specialize in the disposal of hazardous materials that require extra care.",
    },
    {
      title: "Construction and Demolition Waste",
      description:
        "We support the construction and real estate industries by managing waste from construction sites.",
    },
    {
      title: "Organic Waste Disposal",
      description:
        "Organic waste can pose environmental risks if improperly handled — we provide effective solutions.",
    },
    {
      title: "Specialized Waste Disposal",
      description:
        "Solutions for niche waste streams that require customized handling: batteries, tires, electronics with hazardous components, and expired goods.",
    },
  ];

  const features = [
    {
      title: "Environmentally Responsible",
      description: "Eco-friendly disposal methods that reduce landfill waste.",
      icon: Leaf,
    },
    {
      title: "Compliance with Standards",
      description: "Full compliance with local and international law.",
      icon: ShieldCheck,
    },
    {
      title: "Tailored Services",
      description: "Custom disposal plans designed for specific client needs.",
      icon: Settings2,
    },
    {
      title: "Advanced Technologies",
      description: "Advanced technologies for better waste reduction.",
      icon: Cpu,
    },
  ];

  return (
    <ServiceContent
      title="Waste Disposal"
      image="/assets/The-Benefits-of-Waste-Collection-Services-for-Your-Business-scaled.jpg"
      intro={[
        "Effective waste disposal is a cornerstone of our commitment to environmental sustainability and safety. It is designed to handle non-recyclable materials in a manner that is eco-friendly, compliant with regulations, and efficient. By employing advanced technologies and innovative methods, we ensure that waste is managed responsibly — minimizing environmental impact and protecting communities.",
        "This service is ideal for businesses, government entities, and individuals who need a reliable and sustainable solution for disposing of various types of waste. We provide tailored approaches based on the waste type and client requirements, ensuring that every disposal process is optimized for safety, compliance, and efficiency.",
      ]}
      highlights={highlights}
      whyTitle="Why choose us for waste collection and disposal"
      features={features}
    />
  );
};

export default WasteDisposal;
