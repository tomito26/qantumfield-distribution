"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { service_meta } from "@/lib/constants";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const ServiceHeroSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? "visible" : "hidden";
  const pathname = usePathname();
  const meta = service_meta[pathname];

  if (!meta) return null;

  return (
    <section className="relative flex h-[400px] w-full items-center overflow-hidden md:h-[480px]">
      <Image
        src={meta.heroImage}
        alt={meta.title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <motion.div
        variants={fadeUp}
        initial={initial}
        animate="visible"
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full page-x pt-16"
      >
        <p className="eyebrow eyebrow-light mb-4">Our Services</p>
        <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
          {meta.title}
        </h1>
        <p className="mt-5 flex flex-wrap items-center gap-1 text-white/80">
          <Link href="/" className="transition-colors hover:text-leaf">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 stroke-white/60" />
          <span className="text-leaf">{meta.title}</span>
        </p>
      </motion.div>
    </section>
  );
};

export default ServiceHeroSection;
