import { contact_details, links } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Recycle,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "X" },
];

const Footer = () => {
  const serviceLinks =
    links.find((l) => l.subLink && l.subLink.length > 0)?.subLink ?? [];

  return (
    <footer className="bg-forest text-white/70">
      {/* CTA strip */}
      <div className="page-x">
        <div className="-mb-px flex flex-col items-center justify-between gap-6 rounded-3xl bg-cta-band px-8 py-10 text-center shadow-lift md:flex-row md:text-left lg:px-14 lg:py-12">
          <div>
            <h2 className="section-title text-2xl md:!text-3xl text-white">
              Let&apos;s build a cleaner planet together
            </h2>
            <p className="mt-2 max-w-xl text-white/80">
              Talk to our team about a waste, recycling, or environmental
              programme tailored to your organisation.
            </p>
          </div>
          <Link href="/about#contact" className="shrink-0">
            <Button variant="accent" size="lg">
              Get in touch <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="page-x pt-20 pb-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link
              href="/"
              className="mb-5 inline-flex items-center gap-2.5 font-display text-xl font-bold text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-leaf text-forest">
                <Recycle className="h-5 w-5" />
              </span>
              Quantumfield
            </Link>
            <p className="mb-6 max-w-sm text-white/70">
              An eco-management company dedicated to environmental conservation,
              sustainable practices, and waste management solutions delivered to
              international standards.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <Link key={label} href={href} aria-label={label}>
                  <span className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-leaf hover:bg-leaf">
                    <Icon className="h-4 w-4 stroke-white transition-colors group-hover:stroke-forest" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-3">
              {links.map(
                (link) =>
                  link.link && (
                    <li key={link.title}>
                      <Link
                        className="text-white/70 transition-colors hover:text-leaf"
                        href={link.link}
                      >
                        {link.title}
                      </Link>
                    </li>
                  )
              )}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    className="text-white/70 transition-colors hover:text-leaf"
                    href={link.link}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Get in touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 stroke-leaf" />
                <span className="text-white/80">{contact_details[0].text}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 stroke-leaf" />
                <span className="break-all text-white/80">
                  {contact_details[1].text}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 shrink-0 stroke-leaf" />
                <span className="text-white/80">{contact_details[2].text}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm md:flex-row">
          <p className="text-white/60">
            © {new Date().getFullYear()} Quantumfield Distribution LTD. All
            rights reserved.
          </p>
          <p className="text-white/60">
            Waste · Recycling · Asset Recovery · Environmental Consulting
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
