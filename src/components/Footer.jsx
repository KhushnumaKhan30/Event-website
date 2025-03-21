"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUp, ArrowRight, Linkedin, Instagram, Twitter } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="bg-[#0a0a1a] text-white py-12" id="footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4">
          {/* Left column - Logo and contact info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
             <h1 className=" font-bold text-3xl">AMU HACKS</h1>
            </Link>
            <div className="space-y-2 text-gray-300">
              <p>Department Of Computer Science</p>
              <p>Aligarh Muslim University (AMU)</p>
              <p>202001, Aligarh</p>
              <p className="text-white text-xl font-medium pt-4">90067990</p>
              <p>info@gmail.com</p>
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
        </div>

        {/* Bottom section with copyright and social links */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400 mb-4 md:mb-0">Created by Web Development Team, CSS Club.</p>
          <div className="flex items-center space-x-6">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

