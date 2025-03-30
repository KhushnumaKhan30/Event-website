import React from "react";
import { Button } from "./ui/button";
import { aboutContent } from "@/lib/utils";

const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center text-center mb-12">
        <Button
          variant="outline"
          className="rounded-full bg-white text-primary hover:bg-primary/10 border-primary mb-6 border-[#5033FF] text-[#5033FF] font-bold"
        >
          About Us
        </Button>

        <h1 className="text-4xl md:text-5xl font-bold mb-4" id="about">About Us</h1>
        <div className="text-[#9097A0] w-full max-w-7xl text-left px-10 text-xs md:text-xl">
            {
                aboutContent.map((content,index)=>(
                    <p key={index} className="py-2">{content}</p>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default About;
