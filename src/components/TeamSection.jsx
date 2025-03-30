"use client"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { professor, teamMembers } from "@/lib/utils"
import Link from "next/link"

export default function TeamSection() {
  

  const [currentCategory,setCurrentCategory]=useState(teamMembers[0]);

  return (
    <div className="w-full bg-[#F5F6FA] ">
    <main className="container mx-auto px-4 py-8 max-w-6xl ">
     <div className="flex flex-col items-center text-center mb-6">
        <Button
          variant="outline"
          className="rounded-full bg-white text-primary hover:bg-[#5033FF]/10 border-primary mb-6 border-[#5033FF] text-[#5033FF] font-bold"
        >
          EVENT TEAM
        </Button>

        <h1 className="text-3xl font-bold mb-2">
          Meet Our Amazing Team
        </h1>
      </div>

      <h1 className="text-center text-2xl font-bold">Mentors</h1>
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-8 justify-center mx-auto">
        {professor.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="mb-2 w-full aspect-square overflow-hidden p-2">
              <div className=" w-full" />
                <img src={member.profileImg?member.profileImg:"https://res.cloudinary.com/sameerkhan/image/upload/v1742427622/css%20club/1684217143_DSC_0255_jtnimr.jpg"} className="w-full rounded-full aspect-square object-cover scale-95 hover:scale-100 transition-all " alt="" />
            </div>
            <h3 className="  font-bold mb-1">{member.name}</h3>
            <p className="    text-muted-foreground mb-1">{member.role}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-full p-2 flex justify-center mb-4 max-w-3xl mx-auto shadow-sm mt-8">
        <div className="flex flex-wrap gap-2 justify-center w-full">
          {teamMembers.map((category,index)=>(
          <div className="flex flex-col items-center  " key={index}>
            <Button className={`rounded-full bg-pink-600 hover:bg-pink-500 text-white px-6 cursor-pointer ${
                currentCategory === category
                  ? "bg-pink-400  font-extrabold"
                  : "bg-pink-600 hover:bg-pink-500 text-white"
              }`} onClick={()=>setCurrentCategory(teamMembers[index])}>{category.category}</Button>
          </div>
          ))

          }
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
        {currentCategory.members.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center ">
            <div className="mb-2 w-full aspect-square overflow-hidden p-2">
              <div className="" />
                <img src={member.image?member.image:"https://cdn-icons-png.flaticon.com/256/6522/6522516.png"} className="w-auto aspect-square rounded-full object-cover hover:scale-105 overflow-hidden transition-all duration-300" alt="" />
            </div>
            <h3 className="text-md font-bold">{member.name}</h3>
            <p className=" text-md text-muted-foreground font-extrabold">{member.role}</p>
            <p className=" text-md text-muted-foreground">{member.course}</p>
            <div className="flex items-center justify-center">
              {member.socials.linkedin &&(<Link
                href={member.socials.linkedin}
                className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#5033FF] hover:scale-110 hover:text-white transition-colors"
              >
                <img src="https://res.cloudinary.com/sameerkhan/image/upload/v1743196462/CSS/2048px-LinkedIn_icon.svg_uksccl.png" width={20}/>
                <span className="sr-only">LinkedIn</span>
              </Link>)}
              {member.socials.github &&(<Link
                href={member.socials.github}
                className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#5033FF] hover:scale-110 hover:text-white transition-colors"
                >
              <img src="https://res.cloudinary.com/sameerkhan/image/upload/v1743197000/CSS/25231_xtjesc.png" width={20}/>
                <span className="sr-only">Github</span>
              </Link>)}
              {member.socials.instagram &&(<Link
                href={member.socials.instagram}
                className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#5033FF] hover:scale-110 hover:text-white transition-colors"
                >
                <img src="https://res.cloudinary.com/sameerkhan/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1743197031/CSS/640px-Instagram_icon_cbcfue.png" width={20}/>
                <span className="sr-only">Instagram</span>
              </Link>)}
            </div>
          </div>
        ))}
      </div>
    </main>
    </div>
  )
}
