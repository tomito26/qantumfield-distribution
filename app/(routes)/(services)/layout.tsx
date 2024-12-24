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
      <div className="flex gap-10  px-4 pt-16 md:pt-20 pb-24 md:px-[40px] lg:px-[80px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
        <ServiceSidebar/>
        <div className="w-full md:w-7/12">{children}</div>
      </div>
    </div>
  );
};

export default Serviceslayout;
