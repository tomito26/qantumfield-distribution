"use client";
import { links } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false);
  const [scrolled, setScrolled] = React.useState(false);

  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  React.useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
    setMobileMenuOpen(false);
  };

  const serviceLinks =
    links.find((l) => l.subLink && l.subLink.length > 0)?.subLink ?? [];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-40 w-full transition-all duration-300 page-x",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_4px_24px_-16px_rgba(6,40,15,0.4)] border-b border-black/[0.06]"
          : "bg-white/80 backdrop-blur-sm border-b border-transparent"
      )}
    >
      <nav className="flex h-[80px] items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="relative h-[48px] w-[168px] shrink-0"
          onClick={handleLinkClick}
        >
          <Image
            src="/assets/quantumfield-logo.png"
            fill
            alt="Quantumfield Distribution logo"
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map(({ title, subLink, link }) =>
            link ? (
              <li key={title}>
                <Link
                  href={link}
                  className={cn(
                    "relative text-[15px] font-medium text-monochrome transition-colors hover:text-brand after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-gold after:transition-all after:duration-300 hover:after:w-full",
                    pathname === link && "text-brand after:w-full"
                  )}
                >
                  {title}
                </Link>
              </li>
            ) : (
              subLink &&
              subLink.length > 0 && (
                <li key={title}>
                  <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
                    <DropdownMenuTrigger
                      className="group flex items-center gap-1.5 text-[15px] font-medium text-monochrome outline-none transition-colors hover:text-brand data-[state=open]:text-brand"
                      aria-haspopup="true"
                    >
                      {title}
                      <ChevronDown className="h-4 w-4 stroke-current transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      sideOffset={18}
                      className="w-[320px] rounded-2xl border-black/5 p-2 shadow-lift"
                    >
                      {serviceLinks.map((item) => (
                        <Link
                          key={item.title}
                          href={item.link}
                          onClick={handleLinkClick}
                        >
                          <DropdownMenuItem className="cursor-pointer gap-3 rounded-xl p-2.5 focus:bg-canvas">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                              {item.image && item.image.endsWith(".png") ? (
                                <span className="relative h-5 w-5">
                                  <Image
                                    src={item.image}
                                    alt=""
                                    fill
                                    className="object-contain"
                                  />
                                </span>
                              ) : (
                                <span className="h-2 w-2 rounded-full bg-brand" />
                              )}
                            </span>
                            <span
                              className={cn(
                                "text-[14px] font-medium text-body-gray transition-colors group-hover:text-brand",
                                pathname === item.link && "text-brand"
                              )}
                            >
                              {item.title}
                            </span>
                          </DropdownMenuItem>
                        </Link>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              )
            )
          )}
          <li>
            <Link href="/about#contact">
              <Button variant="accent">Get a Quote</Button>
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="z-50 md:hidden"
          onClick={() => setMobileMenuOpen((o) => !o)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-7 w-7 stroke-monochrome" />
          ) : (
            <Menu className="h-7 w-7 stroke-monochrome" />
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-x-0 top-[80px] bottom-0 z-40 origin-top bg-white transition-all duration-300 md:hidden",
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        <ul className="flex flex-col gap-1 page-x py-8">
          {links.map(({ title, subLink, link }) =>
            link ? (
              <li key={title}>
                <Link
                  href={link}
                  onClick={handleLinkClick}
                  className={cn(
                    "block border-b border-black/5 py-4 text-lg font-medium text-monochrome",
                    pathname === link && "text-brand"
                  )}
                >
                  {title}
                </Link>
              </li>
            ) : (
              subLink && (
                <li key={title} className="border-b border-black/5 py-4">
                  <p className="mb-2 text-lg font-medium text-monochrome">
                    {title}
                  </p>
                  <div className="flex flex-col gap-1 pl-3">
                    {serviceLinks.map((item) => (
                      <Link
                        key={item.title}
                        href={item.link}
                        onClick={handleLinkClick}
                        className={cn(
                          "py-2 text-base text-body-gray",
                          pathname === item.link && "text-brand"
                        )}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </li>
              )
            )
          )}
          <li className="pt-6">
            <Link href="/about#contact" onClick={handleLinkClick}>
              <Button variant="accent" size="lg" className="w-full">
                Get a Quote
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
