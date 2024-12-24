"use client"
import { contact_details, our_services } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ServiceSidebar = () => {
const pathname = usePathname();
  return (
    <div className="w-4/12 mt-3 hidden md:block">
      {our_services.map((service) => (
        <div
          key={service.link}
          className={cn( pathname === service.link && "border-t-[#0C4E1A] border-t-2 shadow-lg" ,"border border-t-2 hover:border-t-2 hover:shadow-lg hover:border-t-[#0C4E1A] hover:transition-all flex items-center gap-6  mb-4")}
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
              className={cn(pathname === service.link && "text-[#0C4E1A]", "text-base font-medium hover:text-[#0C4E1A]")}
            >
              {service.title}
            </Link>
          </div>
        </div>
      ))}
      <div>
        {contact_details.map((contact, index) => (
          <div key={index} className="mt-6 flex items-center gap-6">
            <div className="bg-[#0C4E1A] rounded-sm flex justify-center items-center flex-col h-12 w-12">
              <contact.icon className="h-6 w-6 stroke-white" />
            </div>
            <div>
              <p className="text-sm md:text-base font-semibold">
               {contact.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSidebar;
