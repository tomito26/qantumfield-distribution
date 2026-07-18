import EnvironmentalConsulting from "@/components/services/environmental-consulting/environmental-consulting";
import ServiceSchema from "@/components/seo/service-schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Environmental Consulting Services",
  description:
    "Expert waste audits, strategic planning, and operational improvements that help organisations across Kenya and East Africa meet their environmental and sustainability goals.",
  alternates: { canonical: "/environmental-consulting" },
};

const EnvironmentalConsultingpage = () => {
  return (
    <div>
      <ServiceSchema route="/environmental-consulting" />
      <EnvironmentalConsulting />
    </div>
  );
};

export default EnvironmentalConsultingpage;
