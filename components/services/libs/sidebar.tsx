"use client";
import { contact_details, our_services } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ServiceSidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="hidden w-4/12 shrink-0 md:block">
      <div className="sticky top-24 space-y-8">
        {/* Service nav */}
        <nav className="card overflow-hidden p-2">
          {our_services.map((service) => {
            const active = pathname === service.link;
            return (
              <Link
                key={service.link}
                href={service.link}
                className={cn(
                  "group flex items-center gap-3 rounded-xl px-4 py-3.5 transition-colors",
                  active ? "bg-brand text-white" : "hover:bg-canvas"
                )}
              >
                <span
                  className={cn(
                    "relative h-5 w-5 shrink-0",
                    active ? "brightness-0 invert" : ""
                  )}
                >
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </span>
                <span
                  className={cn(
                    "flex-1 text-[15px] font-medium",
                    active ? "text-white" : "text-monochrome group-hover:text-brand"
                  )}
                >
                  {service.title}
                </span>
                <ArrowRight
                  className={cn(
                    "h-4 w-4 transition-all",
                    active
                      ? "stroke-leaf opacity-100"
                      : "stroke-brand opacity-0 group-hover:translate-x-0.5 group-hover:opacity-100"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        {/* Contact card */}
        <div className="overflow-hidden rounded-2xl bg-cta-band p-7 text-white shadow-soft">
          <h3 className="font-display text-lg font-semibold">
            Need help choosing?
          </h3>
          <p className="mt-2 text-sm text-white/75">
            Talk to our team for tailored advice on the right solution.
          </p>
          <div className="mt-6 space-y-4">
            {contact_details.map((contact) => (
              <div key={contact.text} className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <contact.icon className="h-5 w-5 stroke-leaf" />
                </span>
                <p className="text-sm font-medium text-white/90">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ServiceSidebar;
