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
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false);

  const pathname = usePathname();

  // const handleDropdownToggle = (linkName: string) => {
  //   setOpenMenu(openMenu === linkName ? null : linkName);
  // };

  const handleLinkClick = () => {
    setMenuOpen(false);
    setMobileMenuOpen(false);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex justify-between absolute w-full  bg-white z-30  md:bg-transparent  items-center  flex-col md:flex-row  h-[92px] px-4 md:px-[60px] lg:px-[80px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
      <div className="flex justify-between h-full w-full items-center">
        <div className="relative h-[80px] w-[200px] md:h-[80px] md:w-[200px]">
          <Image
            src="/assets/imageedit_3_8011956413.png"
            fill
            alt="Quantumfield Distribution logo"
            className="absolute z-30 object-cover"
          />
        </div>
        <button
            className="mr-4 shrink-0 z-30 md:hidden"
            onClick={handleMobileMenuToggle}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 stroke-body-gray" />
            ) : (
              <Menu className="w-6 h-6  stroke-body-gray" />
            )}
          </button>
      </div>
      <ul className={cn(isMobileMenuOpen ? "flex items-center bg-white md:bg-transparent  w-full justify-center flex-col z-10 absolute md:relative top-[90px] md:top-0  space-y-10 md:space-y-0" :  "hidden md:flex"," items-center justify-center  md:space-x-10  md:relative md:flex-row pt-6 md:pt-0 pb-4 md:pb-0 md:h-full z-50 ")}>
        {links.map(({ title, subLink, link }) =>
          link ? (
            <li key={title} className="inline-flex items-center h-full">
              <Link
                href={link}
                className={cn("text-base font-medium hover:text-[#0C4E1A]  md:text-white hover:border-b-2 border-b-white text-center  px-1", pathname === link && "border-b-2 text-[#0C4E1A]")}
                onClick={() => handleLinkClick()}
              >
                {title}
              </Link>
            </li>
          ) : (
            subLink &&
            subLink.length > 0 && (
              <DropdownMenu
                onOpenChange={() => setMenuOpen(!menuOpen)}
                open={menuOpen}
                key={title}
              >
                <DropdownMenuTrigger
                  className={cn(
                    "cursor-pointer p-0 border-none outline-none   relative flex items-center justify-center transition-all "
                  )}
                  aria-haspopup="true"
                  aria-expanded={menuOpen}
                >
                  <div className="flex items-center justify-center flex-row gap-x-2 hover:border-b-2 border-white px-1">
                    <span className="text-base text-center font-medium md:text-white inline-flex items-center">
                      {title}
                    </span>
                    <ChevronDown
                      className={cn(
                        "transition-transform duration-200 stroke-body-gray md:stroke-white",
                        menuOpen ? "rotate-180" : "rotate-0"
                      )}
                    />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[200px] rounded-t-none  left-0 -bottom-32 bg-white mt-5">
                  {subLink.map((item) =>
                    item.link ? ( // Check if item.link exists
                      <DropdownMenuGroup key={item.title}>
                        <Link href={item.link} className="w-full" onClick={() =>handleLinkClick()}>
                          <DropdownMenuItem className="cursor-pointer group">
                            <span className="text-[14px] font-[500] text-[#0C4E1A] ">
                              {item.title}
                            </span>
                          </DropdownMenuItem>
                        </Link>
                        <DropdownMenuSeparator />
                      </DropdownMenuGroup>
                    ) : null
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            )
          )
        )}
        <Button className="shrink-0 bg-[#0C4E1A] md:bg-white text-white md:text-[#0C4E1A] text-base font-medium hover:bg-white/90">
          Contact Us
        </Button>
      </ul>
    </nav>
  );
};

export default Navbar;
