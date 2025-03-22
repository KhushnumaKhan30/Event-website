"use client"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { teamMembers } from "@/lib/utils"
import Link from "next/link"

export default function TeamSection() {
  const events=[
    { day:1,
      eventName:"Software Hackathon",
      moreInfo:{
        EventLogo:"https://res.cloudinary.com/sameerkhan/image/upload/v1742522654/CSS/Hackathon_sbhcqw.jpg",
        EventShortDes:"Innovate, code, and compete in our thrilling college hackathon challenge!",
        location:"Computer Science Dept, AMU",
        time:"19:15 a.m. - 07:15 a.m."   ,//ex:01:12 a.m - 07:15 a.m.
        date:"April 7,2025",
        description:"When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic.",
        registrationLink:""
      }
    },
    {day:2,
      eventName:"Capture the Flag",
      moreInfo:{
        EventLogo:"https://res.cloudinary.com/sameerkhan/image/upload/v1742522713/CSS/cybersecurity-management-scaled-jpg_ivvqjy.webp",
        EventShortDes:"Exciting cybersecurity challenge testing hacking skills, teamwork, and problem-solving abilities.",
        location:"Computer Science Dept, AMU",
        time:"19:15 a.m. - 07:15 a.m."   ,//ex:01:12 a.m - 07:15 a.m.
        date:"April 7,2025",
        description:"When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic.",
        registrationLink:""
      }
    },
    {
      day:3,
      eventName:"Coding Compition",
      moreInfo:{
        EventLogo:"https://res.cloudinary.com/sameerkhan/image/upload/v1742522771/CSS/Screen-Shot-2024-09-16-at-2.38.02-PM_msgkyw.png",
        EventShortDes:"Challenge coding skills in DSA competition at our tech fest!",
        location:"Computer Science Dept, AMU",
        time:"19:15 a.m. - 07:15 a.m."   ,//ex:01:12 a.m - 07:15 a.m.
        date:"April 7,2025",
        description:"When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic.",
        registrationLink:""
      }
    },{
      day:4,
      eventName:"Sci-Tech Quiz",
      moreInfo:{
        EventLogo:"https://res.cloudinary.com/sameerkhan/image/upload/v1742522817/CSS/hq720_krxxe4.jpg",
        EventShortDes:"Exciting quiz testing science, technology, innovation, and problem-solving skills!",
        location:"Computer Science Dept, AMU",
        time:"19:15 a.m. - 07:15 a.m."   ,//ex:01:12 a.m - 07:15 a.m.
        date:"April 7,2025",
        description:"When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic.",
        registrationLink:""
      }
    },
  ]

  const professor=[
    {
        name:"Prof Armaan Rasool Faridi",
        role:"President, CSS",
        profileImg:"",
        socials: {
            facebook: '#',
            twitter: '#',
            linkedin: '#',
            instagram: '#',
          },
    },
    {
        name:"Prof Aasim Zafar",
        role:"Former President, CSS",
        profileImg:"",
        socials: {
            facebook: '#',
            twitter: '#',
            linkedin: '#',
            instagram: '#',
          },
    },
    {
        name:"Dr Mohammad Nadeem",
        role:"Convener, CSS",
        profileImg:"",
        socials: {
            facebook: '#',
            twitter: '#',
            linkedin: '#',
            instagram: '#',
          },
    },
    {
        name:"Dr Faisal Anwar",
        role:"Mentor, CSS",
        profileImg:"",
        socials: {
            facebook: '#',
            twitter: '#',
            linkedin: '#',
            instagram: '#',
          },
    },
    {
        name:"Dr Mohammad Sajid",
        role:"Mentor, CSS",
        profileImg:"",
        socials: {
            facebook: '#',
            twitter: '#',
            linkedin: '#',
            instagram: '#',
          },
    },
  ]

  const [currentCategory,setCurrentCategory]=useState(teamMembers[0]);

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl bg-[#F5F6FA]">
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

      <h1 className="text-center text-3xl font-bold">Mentors</h1>
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
        {professor.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center ">
            <div className="mb-2 w-full aspect-square overflow-hidden p-2">
              <div className="" />
                <img src="https://res.cloudinary.com/sameerkhan/image/upload/v1742427622/css%20club/1684217143_DSC_0255_jtnimr.jpg" className="w-auto aspect-square rounded-full object-cover hover:scale-105 overflow-hidden transition-all duration-300" alt="" />
            </div>
            <h3 className="text-sm  font-bold mb-1">{member.name}</h3>
            <p className=" text-sm  md:text-xltext-muted-foreground mb-1">{member.role}</p>
            <div className="flex items-center">
              <Link
                href={member.socials.facebook}
                className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#5033FF] hover:bg-[#5033ff] hover:text-white transition-colors"
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

      <div className="bg-white rounded-full p-2 flex justify-center mb-4 max-w-3xl mx-auto shadow-sm">
        <div className="flex flex-wrap gap-2 justify-center w-full">
          {teamMembers.map((category,index)=>(
          <div className="flex flex-col items-center " key={index}>
            <Button className={`rounded-full bg-pink-600 hover:bg-pink-500 text-white px-6 cursor-pointer ${
                currentCategory === category
                  ? "bg-pink-400"
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
                <img src="https://res.cloudinary.com/sameerkhan/image/upload/v1742427622/css%20club/1684217143_DSC_0255_jtnimr.jpg" className="w-auto aspect-square rounded-full object-cover hover:scale-105 overflow-hidden transition-all duration-300" alt="" />
            </div>
            <h3 className="text-sm font-bold mb-1">{member.name}</h3>
            <p className=" text-sm text-muted-foreground mb-1">{member.role}</p>
            <div className="flex items-center gap-4">
              <Link
                href={member.socials.facebook}
                className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#5033FF] hover:bg-[#5033ff] hover:text-white transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href={member.socials.twitter}
                className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#5033FF] hover:bg-[#5033FF] hover:text-white transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href={member.socials.linkedin}
                className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#5033FF] hover:bg-[#5033FF] hover:text-white transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href={member.socials.instagram}
                className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#5033FF] hover:bg-[#5033FF] hover:text-white transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
