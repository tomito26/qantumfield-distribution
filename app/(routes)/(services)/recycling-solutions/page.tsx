import RecyclingSolutions from "@/components/services/recycling-solutions/recycling-solutions";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Recycling Solutions",
  description:
    "Sorting and recycling services for paper, plastic, glass, and metals, with tailored programs that reduce landfill waste.",
};

const RecyclingSolutionspage = () => {
  return (
    <div>
      <RecyclingSolutions />
    </div>
  );
};

export default RecyclingSolutionspage;
