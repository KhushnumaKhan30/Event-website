"use client";
import Image from "next/image";
import { CalendarIcon, Clock, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useState } from "react";

export default function EventSchedulePage() {
  const events = [
    {
      id: 1,
      title: "Software Hackathon",
      date: "07-april-2024",
      location: "Dept. Of Computer Science, AMU",
      time: "9.00am - 10.00 am",
      image:
        "https://res.cloudinary.com/sameerkhan/image/upload/v1742522654/CSS/Hackathon_sbhcqw.jpg",
        description:"Join us for a Hybrid Hackathon that empowers creative minds to innovate and showcase groundbreaking projects on a national stage. With free entry teams of 2 to 4 members can collaborate and bring their ideas to life. Participants must submit their prototypes by 9th April with GitHub profile or repository creation required between 7th and 9th April The Top 10 projects will be announced on 10th April leading up to the final presentation on 12th April Unleash your creativity, collaborate with like-minded innovators, and compete for top recognition in this exciting event!"
    },
    {
      id: 2,
      title: "Capture The Flag",
      date: "March_23, 2018",
      location: "Dept. Of Computer Science, AMU",
      time: "9.00am - 10.00 am",
      image:
        "https://res.cloudinary.com/sameerkhan/image/upload/v1742522713/CSS/cybersecurity-management-scaled-jpg_ivvqjy.webp",
        description:"Capture The Flag (CTF) is an electrifying cybersecurity challenge hosted in online mode on Unstop designed to test your problem-solving and ethical hacking skills in a race against time. With an entry fee of INR 50 per team participants can compete solo or in teams of up to 2 members The event takes place on 7th April from 6:00 PM to 8:00 PM pushing contestants to their limits as they tackle complex security challenges. The results will be announced at 10:00 PM on the same day recognizing the sharpest minds in cybersecurity. Get ready to put your skills to the test and claim victory!"
    },
    {
      id: 3,
      title: "Coding Compitition!",
      date: "March_23, 2018",
      location: "Dept. Of Computer Science, AMU",
      time: "9.00am - 10.00 am",
      image:
        "https://res.cloudinary.com/sameerkhan/image/upload/v1742522771/CSS/Screen-Shot-2024-09-16-at-2.38.02-PM_msgkyw.png",
        description:"The Coding Competition is a fast-paced offline coding contest hosted on HackerRank exclusively for AMU students This thrilling challenge brings together algorithmic prowess and competitive spirit, testing participants' problem-solving skills under pressure. With an entry fee of INR 40 per person the competition takes place on 8th April from 3:00 PM to 4:00 PM Participants will battle it out to solve complex coding problems, and the results will be announced on 9th April at 6:00 PM Sharpen your coding skills and compete for glory in this high-energy contest!"
    },
    {
      id: 4,
      title: "Science Tech Quiz",
      date: "March_23, 2018",
      
      location: "Dept. Of Computer Science, AMU",
      time: "9.00am - 10.00 am",
      image:
        "https://res.cloudinary.com/sameerkhan/image/upload/v1742522817/CSS/hq720_krxxe4.jpg",
        description:"The Quiz Competition introduced for the first time this year is an exciting offline battle of wits that challenges teams on their Computer Science and IT knowledge igniting a spirit of intellectual rivalry. With an entry fee of INR 100 per team, participants can compete in teams of 3 to 4 members The event takes place on 9th April from 3:00 PM to 5:00 PM at the Conference Hall, Department of Computer Science, AMU Teams will face thought-provoking questions, testing their technical expertise and quick thinking. The results will be announced at the end of the event crowning the best minds in the competition. Get ready to showcase your knowledge and claim victory!"
    },
  ];

  const [currentEvent, setCurrentEvent] = useState(events[0]);

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
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
      {events.map((event, index) => (
        <Card className="overflow-hidden bg-white rounded-lg shadow-sm h-full">
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
