import RecyclingSolutions from "@/components/services/recycling-solutions/recycling-solutions";
import ServiceSchema from "@/components/seo/service-schema";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Recycling Solutions",
  description:
    "Sorting and recycling services for paper, plastic, glass, and metals, with tailored programmes that divert waste from landfill across Kenya and East Africa.",
  alternates: { canonical: "/recycling-solutions" },
};

const RecyclingSolutionspage = () => {
  return (
    <div>
      <ServiceSchema route="/recycling-solutions" />
      <RecyclingSolutions />
    </div>
  );
};

export default RecyclingSolutionspage;
