import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import ContactUsForm from "@/components/forms/contact-us-form";
import { our_services } from "@/lib/constants";

const RecyclingSolutions = () => {
  const assets = [
    {
      title: "Electronics Recycling (E-Waste Management)",
      description:
        "We specialize in the recycling of electronic waste",
    },
    {
      title: "Plastics Recycling",
      description:
        "Plastics are a significant contributor to environmental pollution, and we provide robust solutions for managing plastic waste",
    },
    {
      title: "Metal Recycling",
      description:
        "We offer specialized services for recovering and repurposing metal waste",
    },
    {
      title: "Paper and Cardboard Recycling",
      description:
        "We help reduce paper and cardboard waste through efficient recycling processes:",
    },
    {
      title: "Glass Recycling",
      description:
        "Glass recycling is another critical area of our recycling solutions",
    },
    {
      title: "Mixed Material Recycling",
      description:
        "We provides services for mixed material recycling",
    },
  ];

  const items = [
    {
      title: "Comprehensive Expertise",
      description:
        "Recycling a variety of materials, including e-waste, plastics, metals, and glass.",
      image:
        "/assets/House-Improvement-Renovation-Service-Worker--Streamline-Freehand.png",
    },
    {
      title: "Eco-Friendly Practices",
      description:
        "Reducing waste, conserving resources, and minimizing emissions.",
      image: "/assets/Recycling-Sign--Streamline-Ultimate.png",
    },
    {
      title: "Cutting-Edge Technologies",
      description:
        "Using advanced tools for efficient and effective recycling",
      image: "/assets/Settings-Cog--Streamline-Freehand.png",
    },
    {
      title: "Tailored Solutions",
      description:
        "Custom recycling plans designed for specific client needs",
      image: "/assets/Cog-Double--Streamline-Core.png",
    },
  ];
  return (
    <div>
      {" "}
      <div className="h-[450px] w-full relative">
        <Image
          src="/assets/UNDP-Jordan-2019-women-recycling-1304_2.jpg"
          alt="Person collecting garbage"
          fill
          className="absolute object-cover"
        />
        <div className="bg-[#0C4E1A]/70 h-full flex items-center w-full z-10 absolute px-4 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
          <div>
            <h1 className="md:text-6xl text-3xl font-bold text-white mb-6">
              Recycling Solutions
            </h1>
            <p className="text-white flex text-base md:w-7/12">
              <Link
                href="/"
                className="text-white hover:text-green-950 text-base"
              >
                Home
              </Link>{" "}
              <ChevronRight className="h-6 w-6 stroke-white" /> Recycling
              Solutions
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
          Recycling Solutions
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
              Recycling is at the heart of our commitment to sustainability and
              environmental responsibility. Our Recycling Solutions service
              offers businesses, government entities, and individuals a way to
              manage waste effectively by turning discarded materials into
              valuable resources.
            </p>
            <p className="text-base mb-3">
              With a focus on reducing landfill waste and conserving natural
              resources, we employ cutting-edge technologies and
              best practices to deliver innovative, efficient, and eco-friendly
              recycling solutions.
            </p>
            <p className="text-base mb-6">
              By partnering with us, clients gain access to tailored
              recycling strategies designed to minimize environmental impact,
              comply with regulations, and achieve sustainability goals. The
              service is ideal for handling various types of waste, from
              everyday materials like plastics and metals to specialized waste
              such as electronics. Key aspects include:
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

export default RecyclingSolutions;
