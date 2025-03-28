import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Users, Handshake, Phone, ArrowUpRight } from "lucide-react";
import { PhoneNo, promotionImg } from "@/lib/utils";
export default function EventPromotion() {
  return (
    <section className="container mx-auto py-12 px-4 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Images */}
        <div className="relative">
          <div className="relative rounded-[40%] overflow-hidden w-full aspect-square max-w-[600px] mx-auto">
            <img
              src={promotionImg}
              alt="Group of people at conference"
              className="object-cover w-full h-full"
            />

            {/* Small yellow cloud decoration */}
            <div className="absolute top-0 left-[15%] w-16 h-16">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-yellow-300 fill-current"
              >
                <path d="M50,10 C70,10 85,25 85,45 C85,65 70,80 50,80 C30,80 15,65 15,45 C15,25 30,10 50,10 Z" />
              </svg>
            </div>
          </div>
        </div>
        {/* Right side - Content */}
        <div className="space-y-6">
          <div>
            <Button
              variant="outline"
              className="rounded-full text-purple-600 border-purple-600 hover:bg-purple-50 hover:text-purple-700 font-medium mb-4"
            >
              ABOUT OUR EVENTS
            </Button>

            <h2 className="text-3xl md:text-3xl font-bold tracking-tight mb-4">
              Why You Should <br />
              Join Our Events
            </h2>

            <p className="text-sm font-medium text-gray-800 mb-8">
            AMUHACKS 4.0 is not just a competition; it’s a celebration of technology,
collaboration, and innovation — empowering students to push boundaries
and create impactful solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-4 rounded-full">
                <Users className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <h3 className="text-sm font-bold">A Celebration of Coding,</h3>
                <p className="text-sm font-medium"> Hacking & Innovation </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-4 rounded-full">
                <Handshake className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <h3 className="text-sm font-bold">Compete,Collaborate &</h3>
                <p className="text-sm font-medium">Create with the Best Minds</p>
              </div>
            </div>
          </div>

          <p className="text-gray-600 text-sm">
          At AMUHacks, gain hands-on experience, compete in coding challenges, network with experts, win exciting prizes, boost your resume, and immerse yourself in a dynamic, innovation-driven tech environment. Join us now! 🚀
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-md px-4 py-3 text-lg font-medium">
              JOIN NOW
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>

            <div className="flex items-center space-x-3">
              <div className="bg-purple-100 p-3 rounded-full">
                <Phone className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Call Us:</p>
                <p className="text-sm font-bold">{PhoneNo}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-16">
        <h1 className="text-center text-5xl font-bold mb-4">Our Sponsor</h1>
        <div className="md:grid grid-cols-2 items-center justify-center gap-4 my-8 mx-2">
        <img src="https://res.cloudinary.com/sameerkhan/image/upload/v1742642079/CSS/ene-logo-CfHCvaNd_sgyqc4.png" alt="" />
        <img src="https://res.cloudinary.com/sameerkhan/image/upload/v1743186138/CSS/WhatsApp_Image_2025-03-24_at_11.23.47_PM_htquss.jpg" alt="" />

        </div>
      </div>
    </section>
  );
}
