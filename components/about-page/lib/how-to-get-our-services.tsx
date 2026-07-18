"use client";
import React from "react";
import { our_processes } from "@/lib/constants";
import { motion, useReducedMotion, type Variants } from "motion/react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const HowToGetOurServices = () => {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? "visible" : "hidden";
  const viewport = { once: true, margin: "-80px" } as const;

  return (
    <section className="section-y page-x">
      <motion.div
        variants={fadeUp}
        initial={initial}
        whileInView="visible"
        viewport={viewport}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-14 max-w-2xl text-center"
      >
        <p className="eyebrow eyebrow--center mb-4">Our Process</p>
        <h2 className="section-title">Here&apos;s how to get our services</h2>
      </motion.div>

      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* connecting line on desktop */}
        <div className="absolute inset-x-[16%] top-7 hidden h-px bg-black/10 md:block" />
        {our_processes.map((process, index) => (
          <motion.div
            key={process.title}
            variants={fadeUp}
            initial={initial}
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="relative flex flex-col items-center text-center"
          >
            <span className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand font-display text-lg font-bold text-white shadow-soft">
              0{index + 1}
            </span>
            <div className="card flex w-full flex-1 flex-col items-center p-7">
              <span className="icon-tile mb-4 h-14 w-14 rounded-2xl">
                <process.icon className="h-7 w-7" />
              </span>
              <h3 className="font-display text-lg font-semibold text-monochrome">
                {process.title}
              </h3>
              <p className="mt-2 text-sm text-body-gray">
                {process.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowToGetOurServices;
