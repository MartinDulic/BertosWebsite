import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Review from "../../components/Home/Review";

const Reviews = () => {
  const slides = [
    <Review clientName={"Lauren Gould"} text={"Berto was incredibly helpful when our family wanted to ( very last minute !) hire a boat for the day. Our skipper was so so friendly and took us to the most beautiful spots on the different islands. Will definitely use this company again when we return to Croatia!"}/>,
    <Review clientName={"vakga 126"} text={"All I can say about Berto's rent a boat is that it exceeds our expectations. As I am not familiar with the coast of the island, we left the choice of place to our skipper. We told him only what we want and what we expect and let him drive, which turned out to be an excellent decision. He not only met our expectations but also went a level above. We highly recommend this company because they are very professional, responsible and kind."}/>,
    <Review clientName={"Daria Oshry"} text={"I am returning client and already for second time I have rented a boat with Berto. Every time we had an amazing trip. He was very punctual, friendly, and took us to great hidden gems where we wouldn’t get without him. The boats were in great condition and the route of the trip is pre-arranged before so you can relax and enjoy at the day of the trip. The price is very fair and transparent. Thanks for amazing memories!"}/>,
    <Review clientName={"Nikolina Kraljević"} text={"Sve preporuke za ovog decka, ispunjava sve zelje i nista mu nije problem. Imala sam djevojacku s nekoliko cura i provele smo se odlicno, nezaboravno iskustvo koje cu sigurno ponoviti. Uvale su savrsene, lokacija rucka odlicna i hrana jako povoljna."} />,
    <Review clientName={"VT555"} text={"One of the best boat tours in my life. We had an entire day on the boat and visited wonderful beaches & he recommended us great beach bars and restaurants. We had a great time, would recommend every one to experience a boat tour with Berto & his boat."} />,
];

  return (
    <section className="w-full bg-secondary py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true} // Enables infinite looping
        navigation={{
          nextEl: ".swiper-button-next-costum",
          prevEl: ".swiper-button-prev-costum",
        }}
        pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} bg-primary text-primary"></span>`, // Apply primary color
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
          >
            {slide}
          </SwiperSlide>
        ))}

        {/* Custom Navigation Arrows */}
        <IoIosArrowForward  className="swiper-button-next-costum absolute top-1/2 right-0 transform -translate-y-1/2 w-10 h-10 cursor-pointer z-10 text-primary transition"/>
        <IoIosArrowBack className="swiper-button-prev-costum absolute top-1/2 left-0 transform -translate-y-1/2 w-10 h-10 cursor-pointer z-10 text-primary transition"/>
      </Swiper>
    </section>
  );
};

export default Reviews;
