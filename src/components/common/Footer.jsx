"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowUp,
  ArrowRight,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";
import {
  amuHacksLogo,
  email,
  facebookLink,
  instagramLink,
  linkedinLink,
  PhoneNo,
  whatsapp,
} from "@/lib/utils";

export default function SiteFooter() {
  return (
    <footer className="bg-[#0a0a1a] text-white py-12  mx-auto" id="footer">
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto px-4 ">
          <div className="flex justify-between">
            {/* Left column - Logo and contact info */}
            <div className="">
              <Link href="/" className="">
                <div className="font-bold flex items-center gap-2 mb-4">
                  <img
                    src={amuHacksLogo}
                    className="w-8 aspect-square rounded-md object-cover md:w-10"
                    alt=""
                  />
                  <span>AMUHACKS</span>
                </div>
              </Link>
              <div className="space-y-2 text-gray-300 text-sm">
                <p className="text-sm">Department Of Computer Science</p>
                <p>Aligarh Muslim University (AMU)</p>
                <p>202001, Aligarh</p>
                <p className="text-white font-medium pt-2 text-sm">{PhoneNo}</p>
                <p className="text-sm">{email}</p>
              </div>
            </div>
            <img
              src="https://res.cloudinary.com/sameerkhan/image/upload/v1743603470/CSS/WhatsApp_Image_2025-04-02_at_4.51.55_PM_hwzpta.jpg"
              alt=""
              className="hidden md:flex rounded-md bg-green-500 invisible md:visible"
            />
          </div>
        </div>

        {/* Bottom section with copyright and social links */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-gray-800 px-4">
          <p className="text-gray-400 mb-4 md:mb-0 flex gap-2 text-sm text-center md:text-sm">
            Computer Science Society Copyright-All rights reserved
          </p>
          <div className="flex items-center space-x-6">
            <Link
              href={linkedinLink}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href={instagramLink}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href={whatsapp}
              className="text-gray-400 hover:text-white transition-colors"
            >
               <img src="https://res.cloudinary.com/sameerkhan/image/upload/v1743601974/CSS/whatsapp-svgrepo-com_sf6f2e.svg" alt="WhatsApp logo" width={'15px'} height={
                '20px'
              } />
              <span className="sr-only">whatsapp</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
