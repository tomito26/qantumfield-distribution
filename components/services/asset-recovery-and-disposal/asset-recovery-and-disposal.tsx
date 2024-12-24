import ContactUsForm from "@/components/forms/contact-us-form";
import { Check } from "lucide-react";
import Image from "next/image";

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
      <div className="w-full">
        <div className="w-full  gap-10">
          <h2 className="md:text-6xl text-3xl font-bold text-monochrome mb-3">
            Asset Recovery and Disposal Services
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
