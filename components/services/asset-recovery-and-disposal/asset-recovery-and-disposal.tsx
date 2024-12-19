import ContactUsForm from "@/components/forms/contact-us-form";
import { our_services } from "@/lib/constants";
import { Check, ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AssetRecoveryAndDisposal = () => {
  const assets = [
    {
      title: "Office Equipment",
      description:
        "Securely disposes of or recycles furniture, IT equipment, and other assets.",
    },
    {
      title: "Reuse and Repurposing",
      description:
        "Identifies opportunities for reusing items before resorting to recycling or disposal.",
    },
    {
      title: "Data Security",
      description:
        "Ensures that electronic devices are cleared of sensitive data during the recovery process.",
    },
  ];

  const items = [
    {
      title: "Comprehensive Solutions",
      description:
        " Manages all aspects of asset recovery, including collection, refurbishment, recycling, and disposal",
      image: "/assets/Business-Coaching-Idea-Jigsaw--Streamline-Freehand.svg",
    },
    {
      title: "Environmental Responsibility",
      description:
        "Reduces waste and environmental impact through sustainable practices.",
      image: "/assets/Recycling-Sign--Streamline-Ultimate.png",
    },
    {
      title: "Tailored Services",
      description:
        "Custom solutions to meet the unique needs of businesses, institutions, and individuals",
      image: "/assets/Cog-Double--Streamline-Core.png",
    },
    {
      title: "Focus on Security",
      description:
        "Ensures secure handling of sensitive data and compliance with data protection laws.",
      image: "/assets/Database-Shield--Streamline-Core.png",
    },
  ];
  return (
    <div>
      {" "}
      <div className="h-[450px] w-full relative">
        <Image
          src="/assets/gettyimages-494832555-scaled.webp"
          alt="Person collecting garbage"
          fill
          className="absolute object-cover"
        />
        <div className="bg-[#0C4E1A]/70 h-full flex items-center w-full z-10 absolute px-4 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
          <div>
            <h1 className="md:text-6xl text-3xl font-bold text-white mb-6 ">
              Asset Recovery And Disposal
            </h1>
            <p className="text-white flex text-base md:w-7/12">
              <Link
                href="/"
                className="text-white hover:text-green-950 text-base"
              >
                Home
              </Link>{" "}
              <ChevronRight className="h-6 w-6 stroke-white" />
              Asset Recovery And Disposal
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
            Asset Recovery and Disposal Services
          </h2>
          <div className="h-[380px]  w-full relative  rounded-sm">
            <Image
              src="/assets/istockphoto-1410016214-612x612.jpg"
              alt="garbarge collection"
              fill
              className="absolute object-cover rounded"
            />
          </div>
          <div className="">
            <p className="text-base my-6">
              We offer comprehensive asset recovery and disposal services
              designed to help organizations manage their outdated, surplus, or
              unwanted assets effectively. By focusing on reuse, recycling, and
              secure disposal, the company ensures maximum value recovery while
              prioritizing environmental sustainability.Key aspects include:
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

export default AssetRecoveryAndDisposal;
