import ServiceHeroSection from "@/components/services/libs/service-hero-section";
import ServiceSidebar from "@/components/services/libs/sidebar";
import React from "react";

const Serviceslayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="overflow-hidden">
      <ServiceHeroSection />
      <div className="flex gap-10 lg:gap-14 section-y page-x">
        <ServiceSidebar />
        <div className="w-full md:w-8/12">{children}</div>
      </div>
    </div>
  );
};

export default Serviceslayout;
