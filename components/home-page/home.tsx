"use client";
import { Button } from "@/components/ui/button";
import {
  comments,
  global_reach,
  items,
  metrics,
  reasons,
  services,
  standards,
} from "@/lib/constants";
import { ArrowRight, CircleCheck, Quote } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HowToGetOurServices from "../about-page/lib/how-to-get-our-services";
import AnimatedCounter from "./libs/animated-counter";
import FaqSection from "./libs/faq-section";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? "visible" : "hidden";
  const viewport = { once: true, margin: "-80px" } as const;

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative flex min-h-[92vh] w-full items-center overflow-hidden">
        <Image
          src="/assets/waste-management.jpg"
          alt="Waste management operations"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 w-full page-x pt-28 pb-20">
          <motion.div
            variants={fadeUp}
            initial={initial}
            animate="visible"
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow eyebrow-light mb-5">
              Global Waste, Recycling &amp; Environmental Partner
            </p>
            <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
              Innovative solutions for a{" "}
              <span className="text-leaf">cleaner planet</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              We deliver waste management, recycling, asset recovery, and
              environmental consulting to international standards — reducing
              impact and building a more sustainable future.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial={initial}
            animate="visible"
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link href="/about#contact">
              <Button variant="accent" size="lg">
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="#services">
              <Button variant="outlineLight" size="lg">
                Explore Services
              </Button>
            </Link>
          </motion.div>

          {/* Hero stat strip */}
          <motion.div
            variants={fadeUp}
            initial={initial}
            animate="visible"
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-14 flex flex-wrap gap-x-12 gap-y-6 border-t border-white/15 pt-8"
          >
            {metrics.map((metric) => (
              <div key={metric.description}>
                <p className="font-display text-3xl font-bold text-white">
                  {metric.title}
                  <span className="text-leaf">{metric.suffix}</span>
                </p>
                <p className="text-sm text-white/70">{metric.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Standards / trust strip */}
      <section className="border-b border-black/[0.06] bg-white">
        <div className="grid grid-cols-1 gap-px overflow-hidden bg-black/[0.06] page-x sm:grid-cols-2 lg:grid-cols-4">
          {standards.map((s) => (
            <div
              key={s.title}
              className="flex items-start gap-4 bg-white px-6 py-8"
            >
              <span className="icon-tile">
                <s.icon className="h-6 w-6" />
              </span>
              <div>
                <p className="font-display text-base font-semibold text-monochrome">
                  {s.title}
                </p>
                <p className="mt-1 text-sm text-body-gray">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="section-y page-x">
        <div className="flex flex-col items-center gap-12 md:flex-row lg:gap-20">
          <motion.div
            variants={fadeUp}
            initial={initial}
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl shadow-soft md:flex-1"
          >
            <Image
              src="/assets/360_F_631323355_OWXprkpNk7TFl9iwsCwLObMCTaI9KyXY.jpg"
              alt="Waste collection in progress"
              fill
              sizes="(max-width: 768px) 100vw, 450px"
              className="object-cover"
            />
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial={initial}
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1"
          >
            <p className="eyebrow mb-4">About Us</p>
            <h2 className="section-title">
              Advancing sustainability in waste services
            </h2>
            <p className="mt-5 measure text-body-gray">
              We are a reliable provider of sustainable waste management
              solutions — offering acquisition, responsible disposal, and
              recycling of a wide range of waste and obsolete materials. Every
              operation is conducted with the utmost commitment to
              professionalism, safety, and environmental responsibility.
            </p>
            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {items.map((item) => (
                <div className="flex items-center gap-3" key={item}>
                  <CircleCheck className="h-5 w-5 shrink-0 stroke-brand" />
                  <p className="text-monochrome">{item}</p>
                </div>
              ))}
            </div>
            <Link href="/about" className="mt-8 inline-block">
              <Button variant="brand">
                Learn More <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-y bg-canvas page-x scroll-mt-20">
        <motion.div
          variants={fadeUp}
          initial={initial}
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="eyebrow eyebrow--center mb-4">Our Services</p>
          <h2 className="section-title">Comprehensive waste solutions</h2>
          <p className="mt-4 text-body-gray">
            End-to-end services that keep your operations compliant, efficient,
            and measurably more sustainable.
          </p>
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial={initial}
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.link}
              className="card card-hover group flex flex-col overflow-hidden"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold text-monochrome transition-colors group-hover:text-brand">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-body-gray">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </motion.div>
      </section>

      {/* Why choose us */}
      <section className="section-y page-x">
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row lg:gap-20">
          <motion.div
            variants={fadeUp}
            initial={initial}
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <p className="eyebrow mb-4">Why Choose Us</p>
            <h2 className="section-title">
              Experience the difference in every project
            </h2>
            <p className="mt-5 measure text-body-gray">
              By combining expertise, innovation, and a deep commitment to
              sustainability, we empower our clients to achieve their
              environmental goals — from reducing waste to restoring ecosystems.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div key={reason.id} className="flex gap-4">
                  <span className="icon-tile">
                    <reason.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-monochrome">
                      {reason.title}
                    </h3>
                    <p className="mt-1 text-sm text-body-gray">
                      {reason.description}
                    </p>
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
            className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl shadow-soft md:flex-1"
          >
            <Image
              src="/assets/zkATV3F7Snh6pwB2iGJ3tPD9rXGXflm0RdQhIQpa.jpg"
              alt="Our team at work"
              fill
              sizes="(max-width: 768px) 100vw, 450px"
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Impact / global reach band */}
      <section className="bg-cta-band section-y page-x">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="eyebrow eyebrow-light eyebrow--center mb-4">
            {global_reach.eyebrow}
          </p>
          <h2 className="section-title !text-white">{global_reach.title}</h2>
          <p className="mt-4 text-white/80">{global_reach.description}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {global_reach.highlights.map((h) => (
            <div
              key={h.label}
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-8 text-center backdrop-blur-sm"
            >
              <AnimatedCounter
                target={parseInt(h.value)}
                duration={1600}
                suffix={h.suffix}
              />
              <p className="mt-2 text-sm text-white/75">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-y bg-canvas page-x">
        <motion.div
          variants={fadeUp}
          initial={initial}
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <p className="eyebrow eyebrow--center mb-4">Testimonials</p>
          <h2 className="section-title">What our clients say</h2>
        </motion.div>
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={24}
          pagination={{ clickable: true }}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          observeParents
          observer
          breakpoints={{ 768: { slidesPerView: 2 } }}
          className="!pb-14"
        >
          {comments.map((comment) => (
            <SwiperSlide key={comment.id} className="h-auto pt-2">
              <figure className="card flex h-full flex-col p-8">
                <Quote className="h-8 w-8 fill-leaf/20 stroke-leaf" />
                <blockquote className="mt-4 flex-1 text-body-gray">
                  {comment.comment}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4 border-t border-black/5 pt-5">
                  <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={comment.client.profile_photo_url}
                      alt={comment.client.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </span>
                  <div>
                    <p className="font-display font-semibold text-monochrome">
                      {comment.client.name}
                    </p>
                    <p className="text-sm text-brand">
                      {comment.client.company}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <Image
          src="/assets/The-Benefits-of-Waste-Collection-Services-for-Your-Business-scaled.jpg"
          fill
          alt=""
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest/85" />
        <div className="relative z-10 flex flex-col items-center section-y page-x text-center">
          <motion.h2
            variants={fadeUp}
            initial={initial}
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.5 }}
            className="section-title max-w-3xl !text-white"
          >
            Ready to optimize your waste management?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial={initial}
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-xl text-white/80"
          >
            Let&apos;s design a programme that cuts cost, keeps you compliant,
            and moves you toward your sustainability goals.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial={initial}
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <Link href="/about#contact">
              <Button variant="accent" size="lg">
                Contact Us Now <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection />

      {/* Process */}
      <HowToGetOurServices />
    </div>
  );
};

export default Home;
