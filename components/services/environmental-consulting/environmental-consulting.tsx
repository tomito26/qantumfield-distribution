import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import ContactUsForm from "@/components/forms/contact-us-form";
import { our_services } from "@/lib/constants";

const EnvironmentalConsulting = () => {
  const assets = [
    {
      title: "Waste Audits",
      description:
        "We conduct in-depth waste audits to analyze an organization's waste generation patterns and identify opportunities for improvement",
    },
    {
      title: "Strategic Waste Management Planning",
      description: "We assist organizations in designing and implementing customized waste management plans",
    },
    {
      title: "Recycling Optimization",
      description:
        "We help organizations enhance their recycling programs for maximum efficiency and effectiveness",
    },
    {
      title: "Resource Management and Circular Economy Integration",
      description:
        "We support organizations in transitioning from linear waste practices to circular economy models",
    },
    {
      title: "Compliance and Regulatory Guidance",
      description:
        "Navigating environmental laws and regulations can be complex. We provide expert advice to ensure full compliance",
    },
    {
      title: "Operational Improvements",
      description:
        "We help organizations optimize their operations for better environmental outcomes",
    },
  ];

  const items = [
    {
      title: "Expertise Across Industries",
      description:
        "Extensive experience working with businesses, government bodies, and individuals in various sectors",
      image:
        "/assets/House-Improvement-Renovation-Service-Worker--Streamline-Freehand.png",
    },
    {
      title: "Commitment to Results",
      description:
        "Ensures measurable outcomes, from reduced waste to cost savings and enhanced compliance.",
      image: "/assets/Result-Draft--Streamline-Carbon.svg",
    },
    {
      title: "Tailored Services",
      description:
        "Customized consulting strategies to meet the unique needs and goals of each client.",
      image: "/assets/Cog-Double--Streamline-Core.png",
    },
    {
      title: "Focus on Innovation",
      description:
        "Leverages cutting-edge technologies and methodologies for effective waste management.",
      image: "/assets/Creativity-Idea-Settings--Streamline-Freehand.png",
    },
  ];
  return (
    <div>
      <div className="h-[450px] w-full relative">
        <Image
          src="/assets/USE-105-garbage-dump-truck-1.jpg"
          alt="Person collecting garbage"
          fill
          className="absolute object-cover"
        />
        <div className="bg-[#0C4E1A]/70 h-full flex items-center w-full z-10 absolute px-4 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
          <div>
            <h1 className="md:text-6xl text-3xl font-bold text-white mb-6 ">
              {" "}
              Environmental Consulting
            </h1>
            <p className="text-white flex text-base md:w-7/12">
              <Link
                href="/"
                className="text-white hover:text-green-950 text-base"
              >
                Home
              </Link>{" "}
              <ChevronRight className="h-6 w-6 stroke-white" /> Environmental
              Consulting
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-10  px-4 pt-16 md:pt-20 pb-24 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
        <div className="w-4/12 hidden md:block">
          {our_services.map((service) => (
            <div
              key={service.link}
              className="border flex items-center gap-6  mb-4"
            >
              <div className="h-6 w-6 relative ml-6 my-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="border-l py-4 px-6">
                <Link
                  href={service.link}
                  className="text-base font-medium hover:text-[#0C4E1A]"
                >
                  {service.title}
                </Link>
              </div>
            </div>
          ))}
          <div className="mt-6 flex items-center gap-6">
            <div className="bg-[#0C4E1A] rounded-sm flex justify-center items-center flex-col h-16 w-16">
              <Phone className="h-8 w-8 stroke-white" />
            </div>
            <div>
              <p className="text-sm md:text-base font-normal">+254 700524588</p>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-6">
            <div className="bg-[#0C4E1A] rounded-sm flex justify-center items-center flex-col h-16 w-16">
              <Mail className="h-8 w-8 stroke-white" />
            </div>
            <div>
              <p className="text-sm md:text-base font-normal">
                quantumfielddistribution@gmail.com
              </p>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-6">
            <div className="bg-[#0C4E1A] rounded-sm flex justify-center items-center flex-col h-16 w-16">
              <MapPin className="h-8 w-8 stroke-white" />
            </div>
            <div>
              <p className="text-sm md:text-base font-normal">Nairobi, Kenya</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-7/12  gap-10">
          <h2 className="md:text-6xl text-3xl font-bold text-monochrome mb-3">
            Environmental Consulting Services
          </h2>
          <div className="h-[380px]  w-full relative  rounded-sm">
            <Image
              src="/assets/assortment-dirty-dumped-objects (1).jpg"
              alt="garbarge collection"
              fill
              className="absolute object-cover rounded"
            />
          </div>
          <div className="">
            <p className="text-base mt-6 mb-4">
              Our consulting services are designed to guide organizations in
              developing and implementing effective strategies that align with
              their sustainability goals while ensuring compliance with local
              and international environmental regulations. With a strong
              emphasis on waste reduction, recycling optimization, and
              sustainable resource management, Quantum Field empowers clients to
              operate more efficiently and responsibly.
            </p>
            <p className="text-base mb-6">
              By working closely with clients, Quantum Field identifies existing
              inefficiencies in waste management processes, recommends
              actionable improvements, and provides the tools and expertise
              necessary to implement them. These consulting services not only
              help organizations reduce their environmental impact but also
              offer long-term cost savings and enhanced operational efficiency.
              Key aspects include:
            </p>
            <div className="">
              {assets.map((asset) => (
                <div key={asset.title} className="mb-4">
                  <div className="flex items-center gap-4">
                    <Check className="stroke-[#0C4E1A] h-5 w-5" />
                    <h3 className="text-base font-bold">{asset.title}</h3>
                  </div>
                  <p className="text-base ml-9">{asset.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl my-4 font-bold text-monochrome">
              Why Choose us for Asset Recovery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {items.map((item) => (
                <div
                  key={item.title}
                  className="border flex items-center gap-4 p-4"
                >
                  <div className="relative h-10 w-10 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover absolute"
                    />
                  </div>
                  <div>
                    <h1 className="text-[#0C4E1A] font-bold">{item.title}</h1>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalConsulting;
