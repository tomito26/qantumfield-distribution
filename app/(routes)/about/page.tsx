import About from "@/components/about-page/about";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Quantumfield Distribution — our mission, vision, and commitment to sustainable waste management and environmental conservation.",
};

const Aboutpage = () => {
  return (
    <div>
      <About />
    </div>
  );
};

export default Aboutpage;
