import ServiceContent from "@/components/services/libs/service-content";
import { Layers, Recycle, Cpu, Settings2 } from "lucide-react";

const RecyclingSolutions = () => {
  const highlights = [
    {
      title: "Electronics Recycling (E-Waste)",
      description: "We specialize in the recycling of electronic waste.",
    },
    {
      title: "Plastics Recycling",
      description:
        "Plastics are a significant contributor to pollution — we provide robust solutions for managing plastic waste.",
    },
    {
      title: "Metal Recycling",
      description:
        "Specialized services for recovering and repurposing metal waste.",
    },
    {
      title: "Paper and Cardboard Recycling",
      description:
        "We help reduce paper and cardboard waste through efficient recycling processes.",
    },
    {
      title: "Glass Recycling",
      description: "Glass recycling is another critical area of our solutions.",
    },
    {
      title: "Mixed Material Recycling",
      description: "We provide services for mixed material recycling.",
    },
  ];

  const features = [
    {
      title: "Comprehensive Expertise",
      description:
        "Recycling e-waste, plastics, metals, and glass across streams.",
      icon: Layers,
    },
    {
      title: "Eco-Friendly Practices",
      description: "Reducing waste, conserving resources, minimizing emissions.",
      icon: Recycle,
    },
    {
      title: "Cutting-Edge Technologies",
      description: "Advanced tools for efficient and effective recycling.",
      icon: Cpu,
    },
    {
      title: "Tailored Solutions",
      description: "Custom recycling plans designed for specific client needs.",
      icon: Settings2,
    },
  ];

  return (
    <ServiceContent
      title="Recycling Solutions"
      image="/assets/Municipal_recycling_facilities,_Montgomery_County,_MD._2007,_Credit_USEPA_(14410405277).jpg"
      intro={[
        "Recycling is at the heart of our commitment to sustainability and environmental responsibility. Our Recycling Solutions service offers businesses, government entities, and individuals a way to manage waste effectively by turning discarded materials into valuable resources.",
        "With a focus on reducing landfill waste and conserving natural resources, we employ cutting-edge technologies and best practices to deliver innovative, efficient, and eco-friendly recycling solutions.",
        "By partnering with us, clients gain access to tailored recycling strategies designed to minimize environmental impact, comply with regulations, and achieve sustainability goals — from everyday materials like plastics and metals to specialized waste such as electronics.",
      ]}
      highlights={highlights}
      whyTitle="Why choose us for recycling solutions"
      features={features}
    />
  );
};

export default RecyclingSolutions;
