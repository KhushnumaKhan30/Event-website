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
import { cn } from "@/lib/utils";

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

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navChaild,setNavChild] =useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#FAF5E7] ">
      {/* Top Bar */}
      <div className="hidden bg-[#2a0e4a]/80 py-2 text-white/90 md:block">
        <div className="max-w-7xl px-2 flex items-center justify-between mx-auto">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">
                Department Of Computer Science,AMU
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+91829282929</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="h-4 w-4" />
              <span className="text-sm">demo@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-white/90 hover:text-white">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href="#" className="text-white/90 hover:text-white">
              <Twitter className="h-4 w-4" />
            </Link>
            <Link href="#" className="text-white/90 hover:text-white">
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link href="#" className="text-white/90 hover:text-white">
              <Instagram className="h-4 w-4" />
            </Link>
            <Link href="#" className="text-white/90 hover:text-white">
              <WhatsApp className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={cn(
          " py-4 transition-all duration-300",
          isScrolled && "py-2 shadow-lg"
        )}
      >
        <div className="max-w-7xl px-2 flex items-center justify-between mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">
              <span className="text-black">AMU</span>
              <span className="text-black">Hacks</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden  gap-8 md:flex text-sm text-black">
           <div>
            <Link href={"/" } className="flex items-center font-bold">HOME</Link>
           </div>
           <div>
                <Link href={"events"} className="flex items-center font-bold">EVENTS <ChevronDown className="h-4 w-4" /></Link>
           </div>
           <div>
                <Link href={"registration"} className="font-bold flex items-center">REGISTRATION <ChevronDown className="h-4 w-4 font-bold" /></Link>
           </div>
           <div>
                <Link href={"about"} className="font-bold">ABOUT US</Link>
           </div>
           <div>
            <Link href={"contact"} className="font-bold">CONTACT US</Link>
           </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <Button className="rounded-full bg-[#e91e63] px-6 text-white hover:bg-[#d81b60]">
              <span className="mr-2">REGISTER NOW</span>
              <ArrowRight className="h-4 w-4" />
            </Button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10"
        >
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
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuItem>
          <Link href="#" className="flex w-full">
            HOME
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="#" className="flex w-full">
            EVENTS
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="#" className="flex w-full">
            SPEAKERS
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="#" className="flex w-full">
            PAGES
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="#" className="flex w-full">
            CONTACT
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
