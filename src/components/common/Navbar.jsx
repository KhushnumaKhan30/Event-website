"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Search,
  ShoppingCart,
  Twitter,
  PhoneIcon as WhatsApp,
  Mail,
  ArrowRight,
} from "lucide-react";
import {
  amuHacksLogo,
  cn,
  email,
  facebookLink,
  instagramLink,
  linkedinLink,
  Location,
  PhoneNo,
  whatsapp,
} from "@/lib/utils";

import whatsappLogo from "./whatsapp-svgrepo-com.svg";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Router } from "next/router";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navChaild, setNavChild] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#FAF5E7] ">
      {/* Top Bar */}
      <div className="hidden bg-[#2a0e4a]/80 py-2 text-white/90 md:block">
        <div className="max-w-7xl px-2 flex items-center justify-between mx-auto">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{Location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="h-4 w-4" />
              <span className="text-sm">{PhoneNo}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="h-4 w-4" />
              <span className="text-sm">{email}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* <Link href={facebookLink} target="_black" className="text-white/90 hover:text-white">
              <Facebook className="h-4 w-4" />
            </Link> */}
            <Link
              href={linkedinLink}
              target="_blank"
              className="text-white/90 hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              href={instagramLink}
              target="_blank"
              className="text-white/90 hover:text-white"
            >
              <Instagram className="h-4 w-4" />
            </Link>
            <Link
              href={whatsapp} target="_blank"
              className="text-white/90 hover:text-white"
            >
              <img src="https://res.cloudinary.com/sameerkhan/image/upload/v1743601974/CSS/whatsapp-svgrepo-com_sf6f2e.svg" alt="WhatsApp logo" width={'15px'} height={
                '15px'
              } />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={cn(
          " py-2 transition-all duration-300 h-14",
          isScrolled && "py-2 shadow-lg"
        )}
      >
        <div className="max-w-7xl px-2 flex items-center justify-between mx-auto h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className=" font-bold text-black flex items-center gap-2 md:text-2xl">
              <img src={amuHacksLogo} className="scale-150 w-8 mx-2" alt="" />
              AMUHACKS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden  gap-8 md:flex text-sm text-black items-center">
            <div>
              <Link href={"#home"} className="flex items-center font-bold">
                HOME
              </Link>
            </div>
            <div>
              <Link href={"#events"} className="flex items-center font-bold">
                EVENTS <ChevronDown className="h-4 w-4" />
              </Link>
            </div>
            <div>
              <Link href={"#about"} className="font-bold">
                ABOUT US
              </Link>
            </div>
            <div>
              <Link href={"#footer"} className="font-bold">
                CONTACT US
              </Link>
            </div>
          </div>

          {/* Right Side Actions */}
          {/* <div className="flex items-center gap-4">
            <Link href={"#events"} className="rounded-full bg-[#e91e63]  text-white hover:bg-[#d81b60] cursor-pointer flex items-center py-1 px-2">
              <span className="mr-2 text-sm" >REGISTER NOW</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div> */}
        </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-[#E91E63]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-screen bg-black text-white h-screen"
      >
        <DropdownMenuItem>
          <Link href="#home" className="flex w-full">
            HOME
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="#events" className="flex w-full">
            EVENTS
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="#about" className="flex w-full">
            About Us
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="#footer" className="flex w-full">
            Contact Us
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
