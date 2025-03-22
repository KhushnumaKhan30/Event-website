"use client";
import Image from "next/image";
import { CalendarIcon, Clock, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useState } from "react";
import { events } from "@/lib/utils";

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
        Like previous years, this time too, we are hosting AMUHacks 2025—a dynamic gathering of tech enthusiasts, innovators, and problem-solvers competing in hackathons, coding challenges, CTFs, and science tech quizzes. 🚀
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 " id="#registration">
      {events.map((event, index) => (
        <Card className="overflow-hidden bg-white rounded-lg shadow-sm h-full" key={index}>
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
            <Button
              variant="outline"
              className="bg-pink-50 hover:bg-pink-100 text-pink-500 border-pink-100 hover:border-pink-200 font-medium px-8 cursor-pointer"
            >
              Details
            </Button>
          </CardFooter>
        </Card>
      ))}
      </div>
    </main>
  );
}
