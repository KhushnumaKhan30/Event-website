import About from "@/components/About";
import CountdownTimer from "@/components/CountDownTimer";
import EventPromotion from "@/components/EventPromotion";
import EventSchedulePage from "@/components/EventSchedulePage";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import Modal from "@/components/Modal";
import TeamSection from "@/components/TeamSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Home() {
  return (
    <div className=" scroll-smooth" id="#home">
      <HeroSection/>
      <CountdownTimer/>
      <EventPromotion/>
      <EventSchedulePage/>
      {/* <Modal/> */}
      <About/>
      <TeamSection/>
    </div>
  );
}
