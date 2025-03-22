"use client";
import Image from "next/image";
import { CalendarIcon, Clock, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useState } from "react";
import { events } from "@/lib/utils";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const eventInfo = [
  {
    title: "Code-a-Thon",
    description:
      "The coding contest allows only individual participation, ensuring that every competitor showcases their personal skills and knowledge. Participants can choose any programming language from the platform's list of supported options. A standardized coding environment with compiler support for all listed languages will be available on the platform to ensure fairness and consistency.",
  },
];

export default function EventSchedulePage() {
  return (
    <main
      className="container mx-auto px-4 py-8 max-w-6xl bg-[#F5F6FA] "
      id="events"
    >
      <div className="flex flex-col items-center text-center mb-12">
        <Button
          variant="outline"
          className="rounded-full bg-white text-primary hover:bg-primary/10 border-primary mb-6 border-[#5033FF] text-[#5033FF] font-bold"
        >
          EVENT SCHEDULE
        </Button>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Events Schedule Plan
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Like previous years, this time too, we are hosting AMUHacks 2025—a
          dynamic gathering of tech enthusiasts, innovators, and problem-solvers
          competing in hackathons, coding challenges, CTFs, and science tech
          quizzes. 🚀
        </p>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 "
        id="#registration"
      >
        {events.map((event, index) => (
          <Card
            className="overflow-hidden bg-white rounded-lg shadow-sm h-full"
            key={index}
          >
            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full aspect-video object-cover mx-2 overflow-hidden"
              />
              <div className="absolute top-0 left-0">
                <div className="bg-indigo-600 text-white px-3 py-1 rounded-md flex items-center gap-1">
                  <CalendarIcon className="w-4 h-4" />
                  <span className="text-sm font-medium">{event.date}</span>
                </div>
              </div>
            </div>
            <CardContent className="pt-1 pb-0">
              <h3 className="text-xl font-bold mb-4">{event.title}</h3>
              <div className="text-[#8E959F] text-sm">{event.description}</div>
              <div className="space-y-3 text-muted-foreground mt-4">
                <div className="flex items-center gap-2 ">
                  <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  <span>{event.time}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pb-6">
              <Drawer className={""}>
                <DrawerTrigger className="bg-pink-300 hover:bg-pink-200 text-pink-500 hover:border-pink-200 font-medium px-8 cursor-pointer rounded-md py-1 ">Details</DrawerTrigger>
                <DrawerContent className={"  max-w-6xl mx-auto bg-white text-black/80"}>
                  <DrawerHeader className={""}>
                    <DrawerTitle className={"text-center text-4xl font-bold"}>Coding Competition: Offline Mode on HackerRank</DrawerTitle>
                    <DrawerDescription className={""}>
                    {/* <img src={event.image} alt=" " className=" w-full aspect-video object-cover  " /> */}
                      <p className="py-4">
                      Gear up for an intense offline coding competition exclusively for AMU students, where your algorithmic skills will be put to the test! Compete against fellow programmers in a fast-paced contest hosted on HackerRank and prove your problem-solving expertise
                      </p>
                      <span className="font-bold text-2xl">📌 Event Details:</span>
                      {
                        event.list.map((list,index)=>(
                          <li>{list}</li>
                        ))
                      }
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <Button className="bg-pink-300 hover:bg-pink-200 text-pink-500 hover:border-pink-200 font-medium px-8 cursor-pointer rounded-md py-1 w-fit" >Register Here</Button>
                    <DrawerClose className={"flex items-start"}>
                      <Button className="bg-pink-300 hover:bg-pink-200 text-pink-500 hover:border-pink-200 font-medium px-8 cursor-pointer rounded-md py-1">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
