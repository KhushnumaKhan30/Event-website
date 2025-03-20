import CountdownTimer from "@/components/CountDownTimer";
import EventPromotion from "@/components/EventPromotion";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FeaturesSection/>
      <EventPromotion/>
    </div>
  );
}
