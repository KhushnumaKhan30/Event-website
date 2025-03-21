"use client"
import Image from "next/image"
import { ArrowDownRight, ArrowUpRight, Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export default function EventSchedulePage() {
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

  const [currentEvent,setCurrentEvent]=useState(events[0]);

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl bg-[#F5F6FA]">
      <div className="flex flex-col items-center text-center mb-12">
        <Button
          variant="outline"
          className="rounded-full bg-white text-primary hover:bg-primary/10 border-primary mb-6 border-[#5033FF] text-[#5033FF] font-bold"
        >
          EVENT SCHEDULE
        </Button>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Events Schedule Plan</h1>
        <p className="text-muted-foreground max-w-2xl">
          Like previous year this year we are arranging world marketing summit 2025. Its the gathering of all the big
        </p>
      </div>

      <div className="bg-white rounded-full p-2 flex justify-center mb-12 max-w-3xl mx-auto shadow-sm">
        <div className="flex flex-wrap gap-2 justify-center w-full">
          {events.map((event,index)=>(
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium mb-1">Day-{event.day}</span>
            <Button className={`rounded-full bg-pink-600 hover:bg-pink-500 text-white px-6 cursor-pointer `} onClick={()=>setCurrentEvent(events[index])}>{event.eventName}</Button>
          </div>
          ))

          }
        </div>
      </div>
      <div className="bg-[#F1F2F6]">
      <Card className="border rounded-3xl overflow-hidden shadow-sm bg-white">
        <CardContent className="p-0">
          <div className="grid grid-cols-6 gap-4 mx-4">
            <div className="relative md:h-full col-span-2">
              <img
                src={currentEvent.moreInfo.EventLogo}
                alt=""
                fill
                className="object-cover col-span-2 w-full h-full rounded-lg"
              />
              <div className="absolute top-4 right-4 col-span-3">
                <Button className="bg-[#5033FF] hover:bg-primary/90 gap-2 text-white">
                  <Calendar className="h-4 w-4" />
                  {currentEvent.moreInfo.date}
                </Button>
              </div>
            </div>

            <div className="p-6 md:p-8 col-span-4">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {currentEvent.moreInfo.EventShortDes}
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{currentEvent.moreInfo.location}</span>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>{currentEvent.moreInfo.time}</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-8">
                {currentEvent.moreInfo.description}
              </p>

              <div className="flex items-center justify-between">
                <Button className="bg-pink-500 hover:bg-pink-600 gap-2 text-white">
                  Registration Link
                  <ArrowUpRight/>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      </div>
    </main>
  )
}

