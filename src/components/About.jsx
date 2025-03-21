import React from "react";
import { Button } from "./ui/button";

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
        <div className="text-[#9097A0] w-full max-w-7xl text-left px-10">
        <p className="">
          The Computer Science Society (CSS) is the dynamic and official club of
          the Department of Computer Science at Aligarh Muslim University (AMU).
          With Prof. Arman Rasool Faridi as the esteemed President and Mr. Aftab
          Ansari as the dedicated Coordinator for this year's session, CSS
          continues to thrive as a hub of innovation and excellence.
        </p>
        <p>
          Founded in December 2018 as the Area of Dominant Coders (ADC), CSS has
          rapidly evolved into a vibrant platform for knowledge sharing,
          technical growth, and practical learning within the department. Our
          mission is to empower students with cutting-edge skills, fostering
          their readiness for the fast-evolving tech industry.
        </p>
        <p>
          CSS actively collaborates with the Training and Placement Office (TPO)
          of both the department and the university to provide students with
          invaluable industry insights, skill enhancement programs, and
          career-building opportunities.
        </p>
        <p>
          One of our hallmark initiatives, AMUHACKS, organized in collaboration
          with GDSC AMU, has gained significant recognition as a premier
          platform for innovation, creativity, and teamwork. This event attracts
          brilliant minds from across the country, creating a competitive yet
          collaborative environment where participants push the boundaries of
          technology.
        </p>
        <p>
          Recognized by the university in March 2021, CSS remains steadfast in
          its mission to nurture creativity, foster collaboration, and equip
          students with industry-relevant skills.
        </p>
        </div>
      </div>
    </div>
  );
};

export default About;
