import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const CustomPaginationCarousel = ({ slides, paginationLabels }) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // Track the active index

  const handlePaginationClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index); // Navigate to the corresponding slide
    }
  };

  return (
    <div className="w-full">
      {/* Custom Text Pagination */}
      <div className="flex justify-center gap-4 mb-16">
        {paginationLabels.map((label, index) => (
          <button
            key={index}
            onClick={() => handlePaginationClick(index)}
            className={`text-primary text-lg font-bold transition border-b-2 ${
              activeIndex === index ? "border-primary" : "border-gray-400"
            } hover:border-primary`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          // Sync the active index when the slide changes
          swiper.on("slideChange", () => setActiveIndex(swiper.activeIndex));
        }}
        className="relative bg-secondary h-fit"
        pagination={{
          el: null, // Disable default pagination
          clickable: true,
        }}
        autoHeight={true} // Enable dynamic height based on the active slide
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomPaginationCarousel;
