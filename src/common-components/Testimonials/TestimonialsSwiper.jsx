"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Star, Quote } from "lucide-react"; // ✅ Lucide React icons
import { findAllTestamonials } from "@/_api/testimonials";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import SEOImage from "../SeoImage/SeoImage";

const TestimonialsSwiper = ({lang, islistingpage,testimonial }) => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  const [isClient,SetIsClient]=useState(false)

  useEffect(() => {
    SetIsClient(true)
  }, [isClient])
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSlidesPerView(1); // Mobile
      } else if (width < 1024) {
        setSlidesPerView(2); // Tablet
      } else {
        setSlidesPerView(3); // Desktop
      }
    };

    handleResize(); // Run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
// const { data: testimonial = [] } = useQuery({
//   queryKey: ["get-all-testimonials", lang],
//   queryFn: () => findAllTestamonials(lang),
//   enabled: !!lang,
// });

  if (!testimonial || testimonial.length === 0) return null;

  
  const shouldLoop = testimonial.length > slidesPerView;

  return (
    <>
     {!isClient?(
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {testimonial?.slice(0,3).map((slide, idx) => (
      <div  key={idx} className="pb-[2%] group transition-all duration-300">
            {/* Avatar */}
            <div className="flex justify-center select-none">
              {slide.clientImage ? (
                 <SEOImage branding={true} width={100} height={100}
                  src={slide.clientImage}
                  alt={slide.clientName}
                  loading="lazy"
                  className="w-[80px] h-[80px] md:w-[clamp(4rem,5vw,80px)] md:h-[clamp(4rem,5vw,80px)]  lg:w-[clamp(3.5rem,5vw,70px)] lg:h-[clamp(3.5rem,5vw,70px)] rounded-full "
                />
              ) : (
                <div className="w-[80px] h-[80px] md:w-[clamp(4rem,5vw,80px)] md:h-[clamp(4rem,5vw,80px)] lg:w-[clamp(3.5rem,5vw,70px)] lg:h-[clamp(3.5rem,5vw,70px)]
  flex items-center justify-center rounded-full bg-[#00cfaa] text-white text-[1.5rem] font-semibold">
                  {slide.clientName
                    ?.split(" ")
                    .map((word) => word[0])
                    .join("")
                    .toUpperCase()}
                </div>
              )}
            </div>

            {/* Stars */}
            <div className="flex justify-center mt-[2%]">
              {[...Array(slide.stars)].map((_, i) => (
                <Star
                  key={i}
                  className="text-[#eab308] fill-[#eab308] w-[1.5rem] h-[1.5rem] md:w-[clamp(0.8rem,1.5vw,2rem)] md:h-[clamp(0.8rem,1.5vw,2rem)]"
                />
              ))}
            </div>

            {/* Quote Icon */}
            <div className="flex mt-2">
              <Quote className="text-gray-400 w-[1.5rem] h-[1.5rem] md:w-[1.5rem] md:h-[1.5rem] transform rotate-180" />
            </div>

            {/* Message */}
            <p
              className="my-[2%] text-center h-[8rem] lg:h-[clamp(5rem, 8vw, 10rem)] text-[#01013F] pointer-events-none select-none flex justify-center mx-auto leading-relaxed"
            
            >
              {slide.message}
            </p>

            {/* Hover Border Animation */}
            <div className="border-b-[4px] md:border-b-[0.3vw] border-[#292A76] mx-[8rem] md:mx-[clamp(4rem,11vw,15rem)] transition-all duration-300 group-hover:mx-[clamp(4rem,10vw,15rem)]"></div>

            {/* Client Name */}
            <h3 className="my-[2%] ">
              {slide.clientName}
            </h3>
          </div>
      ))}

    </div>
     ):(
    <Swiper
      spaceBetween={20}
      slidesPerView={slidesPerView}
      grabCursor
      loop={shouldLoop}
    >
      {testimonial.map((slide, idx) => (
        <SwiperSlide key={slide.clientName || idx}>
          <div className="pb-[2%] group transition-all duration-300">
            {/* Avatar */}
            <div className="flex justify-center select-none">
              {slide.clientImage ? (
                 <SEOImage branding={true} width={100} height={100}
                  src={slide.clientImage}
                  alt={slide.clientName}
                  loading="lazy"
                  className="w-[80px] h-[80px] md:w-[clamp(4rem,5vw,80px)] md:h-[clamp(4rem,5vw,80px)]  lg:w-[clamp(3.5rem,5vw,70px)] lg:h-[clamp(3.5rem,5vw,70px)] rounded-full "
                />
              ) : (
                <div className="w-[80px] h-[80px] md:w-[clamp(4rem,5vw,80px)] md:h-[clamp(4rem,5vw,80px)] lg:w-[clamp(3.5rem,5vw,70px)] lg:h-[clamp(3.5rem,5vw,70px)]
  flex items-center justify-center rounded-full bg-[#00cfaa] text-white text-[1.5rem] font-semibold">
                  {slide.clientName
                    ?.split(" ")
                    .map((word) => word[0])
                    .join("")
                    .toUpperCase()}
                </div>
              )}
            </div>

            {/* Stars */}
            <div className="flex justify-center mt-[2%]">
              {[...Array(slide.stars)].map((_, i) => (
                <Star
                  key={i}
                  className="text-[#eab308] fill-[#eab308] w-[1.5rem] h-[1.5rem] md:w-[clamp(0.8rem,1.5vw,2rem)] md:h-[clamp(0.8rem,1.5vw,2rem)]"
                />
              ))}
            </div>

            {/* Quote Icon */}
            <div className="flex mt-2">
              <Quote className="text-gray-400 w-[1.5rem] h-[1.5rem] md:w-[1.5rem] md:h-[1.5rem] transform rotate-180" />
            </div>

            {/* Message */}
            <p
              className="my-[2%] text-center h-[8rem] lg:h-[clamp(5rem, 8vw, 10rem)] text-[#01013F] pointer-events-none select-none flex justify-center mx-auto leading-relaxed"
            
            >
              {slide.message}
            </p>

            {/* Hover Border Animation */}
            <div className="border-b-[4px] md:border-b-[0.3vw] border-[#292A76] mx-[8rem] md:mx-[clamp(4rem,11vw,15rem)] transition-all duration-300 group-hover:mx-[clamp(4rem,10vw,15rem)]"></div>

            {/* Client Name */}
            <h3 className="my-[2%] ">
              {slide.clientName}
            </h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>)}

    </>

  );
};

export default TestimonialsSwiper;
