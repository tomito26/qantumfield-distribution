"use client";
import { commitments, contact_details, items, metrics } from "@/lib/constants";
import { ChevronRight, CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import ContactUsForm from "../forms/contact-us-form";
import HowToGetOurServices from "./lib/how-to-get-our-services";
import AnimatedCounter from "@/components/home-page/libs/animated-counter";
import { motion, useReducedMotion, type Variants } from "motion/react";
import React from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? "visible" : "hidden";
  const viewport = { once: true, margin: "-80px" } as const;

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative flex h-[440px] w-full items-center overflow-hidden md:h-[520px]">
        <Image
          src="/assets/The-Benefits-of-Waste-Collection-Services-for-Your-Business-scaled.jpg"
          alt="About Quantumfield Distribution"
          fill
          priority
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
          <p className="eyebrow eyebrow-light mb-4">Who We Are</p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
            About Us
          </h1>
          <p className="mt-4 flex items-center gap-1 text-white/80">
            <Link href="/" className="transition-colors hover:text-gold">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 stroke-white/60" />
            <span className="text-gold">About</span>
          </p>
        </motion.div>
      </section>

      {/* Who we are */}
      <section className="section-y page-x">
        <div className="flex flex-col items-center gap-12 md:flex-row lg:gap-20">
          <motion.div
            variants={fadeUp}
            initial={initial}
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <p className="eyebrow mb-4">Who We Are</p>
            <h2 className="section-title">
              Advancing sustainability in waste services
            </h2>
            <p className="mt-5 measure text-body-gray">
              We are a reliable provider of sustainable waste management
              solutions. We offer a comprehensive suite of services — including
              acquisition, responsible disposal, and recycling of a wide range
              of waste and obsolete materials. Our operations are conducted with
              the utmost commitment to professionalism, safety, and
              environmental responsibility.
            </p>
            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {items.map((item) => (
                <div className="flex items-center gap-3" key={item}>
                  <CircleCheck className="h-5 w-5 shrink-0 stroke-brand" />
                  <p className="text-monochrome">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial={initial}
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl shadow-soft md:flex-1"
          >
            <Image
              src="/assets/istockphoto-1410016214-612x612.jpg"
              alt="Waste collection in progress"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-canvas section-y page-x">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <motion.div
            variants={fadeUp}
            initial={initial}
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.5 }}
            className="lg:pr-6"
          >
            <p className="eyebrow mb-4">Our Commitment</p>
            <h2 className="section-title">
              World-class recycling &amp; waste management
            </h2>
            <p className="mt-4 text-body-gray">
              Guided by a clear mission and vision, we hold ourselves to
              international standards on every engagement.
            </p>
          </motion.div>

          {commitments.map((commitment, index) => (
            <motion.div
              key={commitment.title}
              variants={fadeUp}
              initial={initial}
              whileInView="visible"
              viewport={viewport}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="card flex flex-col p-8"
            >
              <span className="icon-tile mb-5 h-14 w-14 rounded-2xl">
                <commitment.icon className="h-7 w-7" />
              </span>
              <h3 className="font-display text-xl font-semibold text-monochrome">
                {commitment.title}
              </h3>
              <p className="mt-3 text-body-gray">{commitment.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <HowToGetOurServices />

      {/* Metrics band */}
      <section className="bg-cta-band section-y page-x">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.description}
              className="flex flex-col items-center gap-3 text-center"
            >
              <metric.icon className="h-10 w-10 stroke-gold" />
              <AnimatedCounter target={parseInt(metric.title)} duration={1600} />
              <p className="font-medium text-white/80">{metric.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-24 section-y page-x flex flex-col gap-12 md:flex-row md:gap-16"
      >
        <motion.div
          variants={fadeUp}
          initial={initial}
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <p className="eyebrow mb-2">Need Any Help?</p>
          <h2 className="section-title">Get in touch with us</h2>
          <p className="mt-5 measure text-body-gray">
            Got questions, ideas, or feedback? Whether you&apos;re curious about
            our services, have a project in mind, or just want to say hello,
            we&apos;re here for you. Reach out and our team will explore how we
            can work together.
          </p>
          <div className="mt-8 space-y-5">
            {contact_details.map((contact) => (
              <div key={contact.text} className="flex items-center gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand text-white">
                  <contact.icon className="h-6 w-6 stroke-white" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-body-gray">
                    {contact.title}
                  </p>
                  <p className="font-medium text-monochrome">{contact.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial={initial}
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex-1"
        >
          <div className="card p-8">
            <ContactUsForm />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
