"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

const ServiceHeroSection = () => {
  const pathname = usePathname();
  return (
    <div className="h-[500px] w-full relative">
      <Image
        src={
          pathname === "/asset-recovery-and-disposal"
            ? "/assets/gettyimages-494832555-scaled.webp"
            : pathname === "/waste-collection-and-disposal"
            ? "/assets/USE-105-garbage-dump-truck-1.jpg"
            : pathname === "/environmental-consulting"
            ? "/assets/USE-105-garbage-dump-truck-1.jpg"
            : "/assets/UNDP-Jordan-2019-women-recycling-1304_2.jpg"
        }
        alt="Person collecting garbage"
        fill
        className="absolute object-cover"
      />
      <div className="bg-[#0C4E1A]/70 h-full flex items-center w-full z-10 absolute px-4 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
        <div>
          <h1 className="md:text-6xl text-3xl font-bold text-white mb-6 ">
            {pathname === "/asset-recovery-and-disposal"
              ? "Asset Recovery And Disposal"
              : pathname === "/waste-collection-and-disposal"
              ? " Waste  Disposal"
              : pathname === "/environmental-consulting"
              ? "Environmental Consulting"
              : "Recycling Solutions"}
          </h1>
          <p className="text-white flex text-base ">
            <Link
              href="/"
              className="text-white hover:text-green-950 text-base"
            >
              Home
            </Link>{" "}
            <ChevronRight className="h-6 w-6 stroke-white" />
            {pathname === "/asset-recovery-and-disposal"
              ? "Asset Recovery And Disposal"
              : pathname === "/waste-collection-and-disposal"
              ? " Waste  Disposal"
              : pathname === "/environmental-consulting"
              ? "Environmental Consulting"
              : "Recycling Solutions"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceHeroSection;
