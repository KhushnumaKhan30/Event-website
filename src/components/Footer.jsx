"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUp, ArrowRight, Linkedin, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0a0a1a] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left column - Logo and contact info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/placeholder.svg?height=40&width=180"
                alt="evente logo"
                width={180}
                height={40}
                className="invert"
              />
            </Link>
            <div className="space-y-2 text-gray-300">
              <p>Middlest 2 East 42nd</p>
              <p>Streearkeptplace New York, NY</p>
              <p>10017</p>
              <p className="text-white text-xl font-medium pt-4">+123(55) 90067990</p>
              <p>info@gmail.com</p>
            </div>
          </div>

          {/* Middle column - Quick links */}
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
                  Speakers
                </Link>
                <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Agenda
                </Link>
                <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Sponsors
                </Link>
              </div>
              <div className="space-y-4">
                <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                  News
                </Link>
                <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Get Tickets
                </Link>
                <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Benefits
                </Link>
                <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Right column - Newsletter */}
          <div>
            <h3 className="text-2xl font-medium mb-6">Quick links</h3>
            <p className="text-gray-300 mb-6">
              Our expertise, as well as our passion for web design, sets us apart from other agencies.
            </p>
        </div>

        {/* Bottom section with copyright and social links */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400 mb-4 md:mb-0">Copyright © 2025 evente.com. All rights reserved.</p>
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
            <Button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              size="icon"
              className="rounded-full bg-primary hover:bg-primary/90 ml-2"
            >
              <ArrowUp className="h-5 w-5" />
              <span className="sr-only">Scroll to top</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

