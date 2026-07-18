import EnvironmentalConsulting from "@/components/services/environmental-consulting/environmental-consulting";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Environmental Consulting",
  description:
    "Expert waste audits, strategic planning, and operational improvements to help you meet your environmental goals.",
};

const EnvironmentalConsultingpage = () => {
  return (
    <div>
      <EnvironmentalConsulting />
    </div>
  );
};

export default EnvironmentalConsultingpage;
