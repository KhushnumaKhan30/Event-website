"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUp, ArrowRight, Linkedin, Instagram, Twitter, Facebook } from "lucide-react"
import { amuHacksLogo, email, facebookLink, instagramLink, linkedinLink, PhoneNo } from "@/lib/utils"

export default function SiteFooter() {
  return (
    <footer className="bg-[#0a0a1a] text-white py-12  mx-auto" id="footer">
      <div className="max-w-7xl mx-auto">
      <div className="mx-auto px-4 ">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {/* Left column - Logo and contact info */}
          <div className="">
            <Link href="/">
             <h1 className=" font-bold flex gap-4 items-center"><img src={amuHacksLogo} className="w-8 aspect-square h-fit rounded-md object-cover md:w-10" alt="" />AMUHACKS</h1>
            </Link>
            <div className="space-y-2 text-gray-300">
              <p>Department Of Computer Science</p>
              <p>Aligarh Muslim University (AMU)</p>
              <p>202001, Aligarh</p>
              <p className="text-white font-medium pt-4">{PhoneNo}</p>
              <p>{email}</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-medium mb-6">Quick links</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <div className="space-y-4">
                <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                  About this Event
                </Link>
                <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Venue
                </Link>
                <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Events
                </Link><Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        <img src="https://res.cloudinary.com/sameerkhan/image/upload/c_fill,w_293,h_165,ar_16:9/v1742642557/CSS/WhatsApp_Image_2025-03-21_at_9.17.55_PM_jbalxj.jpg" alt="" className="hidden md:flex rounded-md bg-green-500 invisible md:visible" />
        </div>
      </div>

        {/* Bottom section with copyright and social links */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-gray-800 px-4">
          <p className="text-gray-400 mb-4 md:mb-0 flex gap-4">
            Computer Science Society Copyright-All rights reserved</p>
          <div className="flex items-center space-x-6">
            <Link href={linkedinLink} className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href={instagramLink} className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href={facebookLink} className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
        </div>
    </footer>
  )
}

