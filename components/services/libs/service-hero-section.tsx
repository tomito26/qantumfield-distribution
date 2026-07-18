"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useAnimation, useInView, motion, useReducedMotion } from "motion/react";

const ServiceHeroSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const motionInitial = shouldReduceMotion ? "visible" : "hidden";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  const pathname = usePathname();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);
  return (
    <div className="h-[500px] w-full relative">
      <Image
        src={
          pathname === "/asset-recovery-and-disposal"
            ? "/assets/gettyimages-494832555-scaled.webp"
            : pathname === "/waste-disposal"
            ? "/assets/USE-105-garbage-dump-truck-1.jpg"
            : pathname === "/environmental-consulting"
            ? "/assets/business-partners-discussing-contract-terms.jpg"
            : pathname === "/recycling-solutions"
            ? "/assets/UNDP-Jordan-2019-women-recycling-1304_2.jpg"
            : ""
        }
        alt=""
        fill
        priority
        className="absolute object-cover"
      />
      <div
        ref={ref}
        className="bg-brand/70 h-full flex items-center w-full z-10 absolute page-x"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial={motionInitial}
          animate={controls}
          transition={{ duration: 1.5 }}
        >
          <h1 className="md:text-6xl text-3xl font-bold text-white mb-6 ">
            {pathname === "/asset-recovery-and-disposal"
              ? "Asset Recovery And Disposal"
              : pathname === "/waste-disposal"
              ? "Waste Disposal"
              : pathname === "/environmental-consulting"
              ? "Environmental Consulting"
              : "Recycling Solutions"}
          </h1>
          <p className="text-white flex text-base ">
            <Link
              href="/"
              className="text-white hover:text-white/70 text-base"
            >
              Home
            </Link>{" "}
            <ChevronRight className="h-6 w-6 stroke-white" />
            {pathname === "/asset-recovery-and-disposal"
              ? "Asset Recovery And Disposal"
              : pathname === "/waste-disposal"
              ? "Waste Disposal"
              : pathname === "/environmental-consulting"
              ? "Environmental Consulting"
              : "Recycling Solutions"}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceHeroSection;
