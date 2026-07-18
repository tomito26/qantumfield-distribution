import ServiceContent from "@/components/services/libs/service-content";
import { Building2, TrendingUp, Settings2, Lightbulb } from "lucide-react";

const EnvironmentalConsulting = () => {
  const highlights = [
    {
      title: "Waste Audits",
      description:
        "In-depth audits to analyze waste generation patterns and identify opportunities for improvement.",
    },
    {
      title: "Strategic Waste Management Planning",
      description:
        "We help organizations design and implement customized waste management plans.",
    },
    {
      title: "Recycling Optimization",
      description:
        "Enhancing recycling programs for maximum efficiency and effectiveness.",
    },
    {
      title: "Circular Economy Integration",
      description:
        "Supporting the transition from linear waste practices to circular economy models.",
    },
    {
      title: "Compliance and Regulatory Guidance",
      description:
        "Expert advice to navigate environmental laws and ensure full compliance.",
    },
    {
      title: "Operational Improvements",
      description:
        "Optimizing operations for better environmental outcomes.",
    },
  ];

  const features = [
    {
      title: "Expertise Across Industries",
      description:
        "Experience with businesses, government bodies, and individuals.",
      icon: Building2,
    },
    {
      title: "Commitment to Results",
      description:
        "Measurable outcomes: reduced waste, cost savings, compliance.",
      icon: TrendingUp,
    },
    {
      title: "Tailored Services",
      description:
        "Customized consulting strategies to meet each client's goals.",
      icon: Settings2,
    },
    {
      title: "Focus on Innovation",
      description:
        "Cutting-edge technologies and methodologies for waste management.",
      icon: Lightbulb,
    },
  ];

  return (
    <ServiceContent
      title="Environmental Consulting"
      image="/assets/medium-shot-men-working-together (1).jpg"
      intro={[
        "Our consulting services are designed to guide organizations in developing and implementing effective strategies that align with their sustainability goals while ensuring compliance with local and international environmental regulations. With a strong emphasis on waste reduction, recycling optimization, and sustainable resource management, we empower clients to operate more efficiently and responsibly.",
        "By working closely with clients, we identify existing inefficiencies in waste management processes, recommend actionable improvements, and provide the tools and expertise necessary to implement them — reducing environmental impact while offering long-term cost savings and enhanced operational efficiency.",
      ]}
      highlights={highlights}
      whyTitle="Why choose us for environmental consulting"
      features={features}
    />
  );
};

export default EnvironmentalConsulting;
