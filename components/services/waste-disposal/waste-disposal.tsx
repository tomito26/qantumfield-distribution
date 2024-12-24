import ContactUsForm from "@/components/forms/contact-us-form";
import { Check } from "lucide-react";
import Image from "next/image";

const WasteDisposal = () => {
  const assets = [
    {
      title: "Non-Recyclable Waste Disposal",
      description:
        "Not all materials can be recycled, but we ensure that non-recyclable waste is handled responsibly:",
    },
    {
      title: "Hazardous Waste Management",
      description:
        "We specializes in the disposal of hazardous materials that require extra carel",
    },
    {
      title: "Construction and Demolition Waste Disposal",
      description:
        "We support the construction and real estate industries by managing waste from construction sites",
    },
    {
      title: "Organic Waste Disposal",
      description:
        "Organic waste can pose environmental risks if improperly handled, and we provide effective solutions",
    },
    {
      title: "Specialized Waste Disposal",
      description:
        "We provide solutions for niche waste streams that require customized handling such as  Batteries, tires, electronics with hazardous components, and expired goods.",
    },
  ];

  const items = [
    {
      title: "Environmentally Responsible Disposal",
      description: "Eco-friendly disposal methods that reduce landfill waste",
      image: "/assets/Recycling-Sign--Streamline-Ultimate.png",
    },
    {
      title: "Compliance with Standards",
      description: "Full compliance with local and international laws",
      image: "/assets/Check-Circle--Streamline-Unicons-Thinline.svg",
    },
    {
      title: "Tailored Services",
      description: "Custom recycling plans designed for specific client needs",
      image: "/assets/Cog-Double--Streamline-Core.png",
    },
    {
      title: "Advanced Technologies",
      description:
        "Advanced technologies for better recycling and waste reduction.",
      image: "/assets/Circuit--Streamline-Unicons-Thinline.svg",
    },
  ];
  return (
    <div>
      <div className="w-full">
        <div className="w-full">
          <h2 className="md:text-6xl text-3xl font-bold text-monochrome mb-3">
            Waste Disposal
          </h2>
          <div className="h-[380px]  w-full relative  rounded-sm">
            <Image
              src="/assets/The-Benefits-of-Waste-Collection-Services-for-Your-Business-scaled.jpg"
              alt="garbarge collection"
              fill
              className="absolute object-cover rounded"
            />
          </div>
          <div className="">
            <p className="text-base mt-6 mb-6">
              Effective waste disposal is a cornerstone of our commitment to
              environmental sustainability and safety. It is designed to handle
              non-recyclable materials in a manner that is eco-friendly,
              compliant with regulations, and efficient. By employing advanced
              technologies and innovative methods, we ensure that waste is
              managed responsibly, minimizing environmental impact and
              protecting communities.
            </p>
            <p className="text-base mt-6 mb-6">
              This service is ideal for businesses, government entities, and
              individuals who need a reliable and sustainable solution for
              disposing of various types of waste. We provide tailored
              approaches based on the waste type and client requirements,
              ensuring that every disposal process is optimized for safety,
              compliance, and efficiency.
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
              Why Choose us for Waste Collection and Disposal
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

export default WasteDisposal;
