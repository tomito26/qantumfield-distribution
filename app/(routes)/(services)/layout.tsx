import ServiceHeroSection from "@/components/services/libs/service-hero-section";
import ServiceSidebar from "@/components/services/libs/sidebar";
import React from "react";

const Serviceslayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <ServiceHeroSection/>
      <div className="flex gap-10  pt-16 md:pt-20 pb-24 page-x">
        <ServiceSidebar/>
        <div className="w-full md:w-7/12">{children}</div>
      </div>
    </div>
  );
};

export default Serviceslayout;
