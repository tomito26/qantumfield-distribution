import React from "react";
import { our_services } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const ServiceSidebar = () => {
  return (
    <div className="w-4/12 hidden md:block">
      {our_services.map((service) => (
        <div
          key={service.link}
          className="border border-t-2 hover:border-t-2 hover:shadow-lg hover:border-t-[#0C4E1A] hover:transition-all flex items-center gap-6  mb-4"
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
        <div className="bg-[#0C4E1A] rounded-sm flex justify-center items-center flex-col h-12 w-12">
          <Phone className="h-6 w-6 stroke-white" />
        </div>
        <div>
          <p className="text-sm md:text-base font-normal">+254 700524588</p>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-6">
        <div className="bg-[#0C4E1A] rounded-sm flex justify-center items-center flex-col h-12 w-12">
          <Mail className="h-6 w-6 stroke-white" />
        </div>
        <div>
          <p className="text-sm md:text-base font-normal">
            quantumfielddistribution@gmail.com
          </p>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-6">
        <div className="bg-[#0C4E1A] rounded-sm flex justify-center items-center flex-col h-12 w-12">
          <MapPin className="h-6 w-6 stroke-white" />
        </div>
        <div>
          <p className="text-sm md:text-base font-normal">Nairobi, Kenya</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSidebar;
