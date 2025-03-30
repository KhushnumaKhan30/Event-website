"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import navigation styles
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import icons for buttons
import { imgs } from "@/lib/utils";

const HeroSection = () => {

  return (
    <div className="w-full relative overflow-hidden h-[100vh]">
      {/* Left Navigation Button */}
      <button className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full ml-4 z-10 ">
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Swiper Slider */}
      <Swiper
        spaceBetween={50}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Autoplay, Navigation]}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
      >
        {imgs.map((img, index) => (
          <SwiperSlide key={index} className="w-full h-full overflow-hidden">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="object-cover h-full w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Right Navigation Button */}
      <button className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2  text-white p-3 rounded-full z-10 mr-4">
        <ChevronRight className="w-10 h-10" />
      </button>
    </div>
  );
};

export default HeroSection;
