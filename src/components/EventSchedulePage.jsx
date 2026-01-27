"use client";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  CalendarIcon,
  Clock,
  MapPin,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useState } from "react";
import { eventPdfLink, events } from "@/lib/utils";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Link from "next/link";
import CountdownTimer from "./CountDownTimer";

const eventInfo = [
  {
    title: "Code-a-Thon",
    description:
      "The coding contest allows only individual participation, ensuring that every competitor showcases their personal skills and knowledge. Participants can choose any programming language from the platform's list of supported options. A standardized coding environment with compiler support for all listed languages will be available on the platform to ensure fairness and consistency.",
  },
];

export default function EventSchedulePage() {
  return (
    <div className="w-full bg-[#F5F6FA] h-fit">
      <main className="container mx-auto px-2 py-8 max-w-6xl  " id="events">
        <div className="flex flex-col items-center text-center mb-12">
          <Button
            variant="outline"
            className="rounded-full bg-white text-primary hover:bg-primary/10 border-primary mb-6 border-[#5033FF] text-[#5033FF] font-bold"
          >
            EVENT SCHEDULE
          </Button>

          <h1 className="text-4xl font-bold mb-4">Our Events Schedule Plan</h1>
          <p className="text-muted-foreground max-w-2xl">
            Like previous years, this time too, we are hosting AMUHacks 2026 a
            dynamic gathering of tech enthusiasts, innovators, and
            problem-solvers competing in hackathons, coding challenges, CTFs,
            and science tech quizzes. 🚀
          </p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 "
          id="#registration"
        >
          {events.map((event, index) => (
            <Card className="overflow-hidden shadow-sm h-fit" key={index}>
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full aspect-video object-cover mx-2 overflow-hidden"
                />
                <div className="absolute top-0 left-2">
                  <CountdownTimer date={event.dateForCal} />
                </div>
              </div>
              <CardContent className="pt-1 pb-0">
                <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                <div className="text-[#8E959F] text-sm">
                  {event.description}
                </div>
                <div className="space-y-3 text-muted-foreground mt-4 text-sm">
                  <div className="flex items-center gap-2 ">
                    <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    <span>
                      {event.date} | {event.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    <span className="">{event.eligibility}</span>
                  </div>
              {
                event.id===1&&(
                  <Link
                  href={event.registrationLink}
                  target="_blank"
                  className="rounded-full bg-[#e91e63]  text-white hover:bg-[#d81b60] cursor-pointer flex items-center py-1 px-2 w-fit"
                >
                  <span className="mr-2 text-sm">REGISTER NOW</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                )
              }
                </div>
              </CardContent>
              {
                event.id!==1&&(
                  <CardFooter className="">
                    <Dialog>
                      <DialogTrigger className="rounded-full bg-[#e91e63]  text-white hover:bg-[#d81b60] cursor-pointer flex items-center py-1 px-2 w-fit">
                          <span className="mr-2 text-sm">REGISTER NOW</span>
                          <ArrowRight className="h-4 w-4" />
                      </DialogTrigger>
                      <DialogContent className={" mx-auto bg-white text-black/80"}>
                        <DialogHeader>
                          <DialogTitle className={"font-bold"}>
                            {event.title}
                          </DialogTitle>
                          <DialogDescription>
                            <div className="text-sm">
                              <div className=" list-none">
                                <span className=" font-bold">Event Details:</span>
                                {event.list.map((list, index) => (
                                  <li className="text-sm">{list}</li>
                                ))}
                              </div>
                              <div>
                                <span className="text-lg font-bold">
                                  Prize Pool
                                </span>
                                {event?.prizes?.map((prize, index) => (
                                  <li>{prize}</li>
                                ))}
                              </div>
                              {/* <div className="flex items-center gap-4"> */}
                              <Link
                                href={event.registrationLink}
                                target="_blank"
                                className="rounded-full bg-[#e91e63]  text-white hover:bg-[#d81b60] cursor-pointer flex items-center py-1 px-2 w-fit mx-auto"
                              >
                                <span className="mr-2 text-sm">REGISTER NOW</span>
                                <ArrowRight className="h-4 w-4" />
                              </Link>
                              {/* </div> */}
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </CardFooter>

                              )
              }
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
