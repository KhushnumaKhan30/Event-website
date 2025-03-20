"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const HeroSection = () => {
  const imgs = [
    "https://res.cloudinary.com/sameerkhan/image/upload/v1742427679/css%20club/1660386385_WhatsApp_20Image_202022-08-13_20at_204.02.22_20PM_r8x5ii.jpg",
    "https://res.cloudinary.com/sameerkhan/image/upload/v1742427622/css%20club/1684217143_DSC_0255_jtnimr.jpg",
    "https://res.cloudinary.com/sameerkhan/image/upload/v1742427716/css%20club/1660386302_WhatsApp_20Image_202022-08-13_20at_204.02.19_20PM_ak4quj.jpg",
    "https://res.cloudinary.com/sameerkhan/image/upload/v1742427926/css%20club/1660721450_WhatsApp_20Image_202022-08-13_20at_202.22.11_20PM_xeawff.jpg",
  ];

  return (
    <div className="w-full overflow-hidden h-[90vh]">
      <Swiper
        spaceBetween={50}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]} 
        slidesPerView={1}
        autoplay={{
          delay: 1000, // Set delay for autoplay (2 seconds)
          disableOnInteraction: false, // Ensures autoplay continues even after user interaction
        }}
        className="w-full h-full"
      >
        {imgs.map((img, index) => (
          <SwiperSlide key={index} className="w-full h-full overflow-hidden">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="object-cover h-full w-full overflow-hidden object-right-top"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
