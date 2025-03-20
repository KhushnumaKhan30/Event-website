import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Users, Handshake, Phone, ArrowUpRight } from "lucide-react";
const promotionImg =
  "https://res.cloudinary.com/sameerkhan/image/upload/v1742427622/css%20club/1684217143_DSC_0255_jtnimr.jpg";
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
              width={600}
              height={600}
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
              ABOUT THIS MEETUP
            </Button>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Why You Should <br />
              Join Our Event Program
            </h2>

            <p className="text-lg md:text-xl font-medium text-gray-800 mb-8">
              Join 500 Others In Manhattan, NY For A Full Day Of Inspiring
              Keynotes And New Connections At The Premier Conference For
              Software Product Managers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-4 rounded-full">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold">6,000+ people's</h3>
                <p className="text-lg font-medium">In Person Meet-up</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-4 rounded-full">
                <Handshake className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Connect with</h3>
                <p className="text-lg font-medium">Industry Leaders</p>
              </div>
            </div>
          </div>

          <p className="text-gray-600">
            When An Unknown Printer Took A Galley Of Type And Scrambled It To
            Make Pecimen Book. It Has Survived Not Only Five Centuries, But Also
            The Leap Electronic Typesetting, Remaining Essentially Unchanged.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-md px-8 py-6 text-lg font-medium">
              JOIN NOW
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>

            <div className="flex items-center space-x-3">
              <div className="bg-purple-100 p-3 rounded-full">
                <Phone className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Call Us:</p>
                <p className="text-lg font-bold">+9189484939-800</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
