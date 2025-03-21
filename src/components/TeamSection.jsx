import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

export default function TeamSection() {
  const teamMembers = [
    {
        name: "Sameer Khan",
        role: "Web Developer",
        image: "https://res.cloudinary.com/sameerkhan/image/upload/v1742427622/css%20club/1684217143_DSC_0255_jtnimr.jpg",
        socials: {
          facebook: "#",
          twitter: "#",
          linkedin: "#",
          instagram: "#",
        },
      },{
        name: "Sameer Khan",
        role: "Web Developer",
        image: "https://res.cloudinary.com/sameerkhan/image/upload/v1742427622/css%20club/1684217143_DSC_0255_jtnimr.jpg",
        socials: {
          facebook: "#",
          twitter: "#",
          linkedin: "#",
          instagram: "#",
        },
      },{
        name: "Sameer Khan",
        role: "Web Developer",
        image: "https://res.cloudinary.com/sameerkhan/image/upload/v1742427622/css%20club/1684217143_DSC_0255_jtnimr.jpg",
        socials: {
          facebook: "#",
          twitter: "#",
          linkedin: "#",
          instagram: "#",
        },
      },{
        name: "Sameer Khan",
        role: "Web Developer",
        image: "https://res.cloudinary.com/sameerkhan/image/upload/v1742427622/css%20club/1684217143_DSC_0255_jtnimr.jpg",
        socials: {
          facebook: "#",
          twitter: "#",
          linkedin: "#",
          instagram: "#",
        },
      },{
        name: "Sameer Khan",
        role: "Web Developer",
        image: "https://res.cloudinary.com/sameerkhan/image/upload/v1742427622/css%20club/1684217143_DSC_0255_jtnimr.jpg",
        socials: {
          facebook: "#",
          twitter: "#",
          linkedin: "#",
          instagram: "#",
        },
      },
    
  ]

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
        <Button
          variant="outline"
          className="rounded-full bg-white text-primary hover:bg-[#5033FF]/10 border-primary mb-6 border-[#5033FF] text-[#5033FF] font-bold"
        >
          EVENT TEAM
        </Button>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Meet Our Amazing Team
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center ">
            <div className="mb-2 w-full aspect-square overflow-hidden p-2">
              <div className="" />
                <img src="https://res.cloudinary.com/sameerkhan/image/upload/v1742427622/css%20club/1684217143_DSC_0255_jtnimr.jpg" className="w-auto aspect-square rounded-full object-cover hover:scale-105 overflow-hidden transition-all duration-300" alt="" />
            </div>
            <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
            <p className="text-muted-foreground mb-1">{member.role}</p>
            <div className="flex space-x-2">
              <Link
                href={member.socials.facebook}
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#5033FF] hover:bg-[#5033ff] hover:text-white transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href={member.socials.twitter}
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#5033FF] hover:bg-[#5033FF] hover:text-white transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href={member.socials.linkedin}
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#5033FF] hover:bg-[#5033FF] hover:text-white transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href={member.socials.instagram}
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#5033FF] hover:bg-[#5033FF] hover:text-white transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

