import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Slider = ({slides, arrowStyle}) => {
 
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      loop={true} // Enables infinite looping
      navigation={{
        nextEl: ".swiper-button-next-costum",
        prevEl: ".swiper-button-prev-costum",
      }}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 10000, // Slide transition delay (in milliseconds)
        disableOnInteraction: false,
      }}
      className="relative bg-secondary h-fit"
    >
      {slides.map((slide, index) => (
        <SwiperSlide
          key={index}
          className="h-fit"
        >
          {slide}
        </SwiperSlide>
      ))}

      {/* Custom Navigation Arrows */}
      <IoIosArrowForward className={`swiper-button-next-costum absolute top-1/2 right-0 transform -translate-y-1/2 w-10 h-10 cursor-pointer z-10 ${arrowStyle} transition`}/>
      <IoIosArrowBack className={`swiper-button-prev-costum absolute top-1/2 left-0 transform -translate-y-1/2 w-10 h-10 cursor-pointer z-10 ${arrowStyle} transition`}/>
    </Swiper>
  );
};

export default Slider;
