import About from "@/components/about-page/about";
import JsonLd from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Quantumfield Distribution — our mission, vision, and 20+ years delivering sustainable waste management and environmental conservation across Kenya and East Africa.",
  alternates: { canonical: "/about" },
};

const Aboutpage = () => {
  return (
    <div>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ])}
      />
      <About />
    </div>
  );
};

export default Aboutpage;
