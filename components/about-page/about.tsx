"use client";
import {
  commitments,
  contact_details,
  items,
  metrics
} from "@/lib/constants";
import { ChevronRight, CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import ContactUsForm from "../forms/contact-us-form";
import HowToGetOurServices from "./lib/how-to-get-our-services";
import AnimatedCounter from "@/components/home-page/libs/animated-counter";

const About = () => {
  return (
    <div>
      <div className="h-[500px] w-full relative">
        <Image
          src="/assets/The-Benefits-of-Waste-Collection-Services-for-Your-Business-scaled.jpg"
          alt="Person collecting garbage"
          fill
          className="absolute object-cover"
        />
        <div className="bg-[#0C4E1A]/70 h-full flex items-center w-full z-10 absolute px-4 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
          <div>
            <h1 className="md:text-6xl text-3xl font-bold text-white mb-6">
              About Us
            </h1>
            <p className="text-white flex text-base md:w-7/12">
              <Link
                href="/"
                className="text-white hover:text-green-950 text-base"
              >
                Home
              </Link>{" "}
              <ChevronRight className="h-6 w-6 stroke-white" /> About
            </p>
          </div>
        </div>
      </div>
      {/* about us  */}
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10 px-4 pt-20 pb-24 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
        <div className="flex-1">
          <h1 className="md:text-sm text-xs font-bold text-[#0C4E1A] uppercase">
            Who We are
          </h1>
          <h2 className="md:text-6xl text-3xl font-bold text-monochrome my-3">
            Advancing Sustainability in Waste Services
          </h2>
          <p className="text-base mb-4">
            We are a reliable provider of sustainable waste management
            solutions. We offer a comprehensive suite of services, including
            acquisition, responsible disposal, and recycling of a wide range of
            waste and obsolete materials. Our operations are conducted with the
            utmost commitment to professionalism, safety, and environmental
            responsibility.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            {items.map((item, index) => (
              <div className="flex items-center gap-3" key={index}>
                <CircleCheck className="h-5 w-5 stroke-[#0C4E1A]" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="h-[380px] md:w-[360px] w-full relative md:flex-1 rounded-sm">
          <Image
            src="/assets/istockphoto-1410016214-612x612.jpg"
            alt="garbarge collection"
            fill
            className="absolute object-cover rounded"
          />
        </div>
      </div>
      {/* {commitment } */}
      <div className="px-4 bg-[#0C4E1A] grid grid-cols-1 md:grid-cols-4 gap-10 py-20 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
        <div className="md:col-span-2">
          <h1 className="text-white text-xs text-center md:text-left md:text-sm uppercase font-bold mb-3">
            Our Commitment to Quality Services
          </h1>
          <h2 className="md:text-6xl text-3xl text-center md:text-left font-bold text-white">
            World-Class Recycling & Waste Management
          </h2>
        </div>

        {commitments.map((commitment, index) => (
          <div
            key={index}
            className=" bg-white  h-[300px] w-full px-4 py-5 rounded-md"
          >
            <div className="flex justify-center">
              <div className="h-12 w-12 relative">
                <Image
                  src={commitment.icon}
                  alt={commitment.title}
                  fill
                  className="absolute object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-[#0C4E1A] text-center font-bold text-xl my-3">
                {commitment.title}
              </h2>
              <p className="text-base">{commitment.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* {process}  */}
      <HowToGetOurServices />
      {/* {core metrics} */}
      <div className="flex h-full w-full relative justify-center flex-col md:flex-row  md:justify-evenly items-center">
        <Image
          src="/assets/man-throwing-plastic-bottle-recycle-trash-can.jpg"
          fill
          alt=""
          className="absolute object-cover"
        />
        <div className="h-full w-full z-10 flex justify-center md:justify-evenly items-center flex-col gap-12 md:flex-row bg-[#0C4E1A]/85 py-24 px-4 md:px-[40px] lg:px-[60px] xl:px-[60px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
          {metrics.map((metric, index) => (
            <div key={index} className="flex items-center  gap-2">
              <metric.icon className="stroke-white h-10 w-10" />
              <div className="flex flex-col">
                <AnimatedCounter target={parseInt(metric.title)} duration={5000}/>
                <p className="text-base font-medium text-white">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* our clients  */}

      {/* { contact us } */}
      <div className="px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] w-full pt-20 pb-32 flex  gap-12 md:gap-20 md:flex-row flex-col">
        <div className="w-full flex-1">
          <ContactUsForm />
        </div>
        <div className="flex-1">
          <h2 className="text-xs md:text-sm uppercase  font-bold text-[#0C4E1A] mb-2">
            Need any help?
          </h2>
          <h3 className="text-monochrome text-2xl md:text-5xl font-bold mb-3">
            Get in touch with us
          </h3>
          <p>
            Got questions, ideas, or feedback? Let&apos;s connect! Whether
            you&apos;re curious about our services, have a project in mind, or
            just want to say hello, we&apos;re here for you. Reach out through
            our contact info or drop us a message, our team is ready to assist
            and explore how we can work together.
          </p>
          <div>
            {contact_details.map((contact, index) => (
              <div key={index} className="mt-6 flex items-center gap-6">
                <div className="bg-[#0C4E1A] rounded-sm flex justify-center items-center flex-col h-16 w-16">
                  <contact.icon className="h-8 w-8 stroke-white" />
                </div>
                <div>
                  <p className="text-sm md:text-base font-bold mb-4">
                    {contact.title}
                  </p>
                  <p className="text-sm md:text-base font-medium">
                    {contact.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
