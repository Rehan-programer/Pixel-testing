"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {
  CustomPrevArrow,
  CustomNextArrow,
} from "@/common-components/CustomArrow";
import { useSwiper } from "../utils/SwiperStates"; // adjust path if needed
import CrouselIndicators from "./CrouselIndicators";
import { ArrowRight } from "lucide-react";

const ServiceCardSwiper = ({ data, lang }) => {
  const PORTAL = process.env.NEXT_PUBLIC_PORTAL;
  const {
    activeIndex,
    swiperRef,
    setActiveIndex,
    handleSlideChange,
    swiperState,
  } = useSwiper();

  return (
    <>
      <Swiper
        onSlideChange={handleSlideChange}
        loop={false}
        spaceBetween={30}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className=" rounded-xl bg-[#A9FCED]  overflow-hidden flex flex-col items-center ">
              <div className="  ">
                <Image
                  height={100}
                  width={1000}
                  src={item.rightImage || item.img}
                  alt={item.label}
                  className=" h-[10rem] md:h-[16rem] lg:h-[16vw]  object-cover rounded-t-xl"
                />
              </div>

              <div className="my-[4%] p-[4%] ">
                <h4 className="font-bold">{item.label}</h4>
                <p>{item.para}</p>

                <div className="flex items-center  gap-x-2 mt-[2%] ">
                  <Link title={lang === "en" ? "Place Order" : "Hacer un pedido"}
                    href={`${PORTAL}${item.label}`} 
                    className={"btn-slider"}
                    target="_blank"
                  >
                    {lang === "en" ? "Place Order" : "Hacer un pedido"}
                  </Link>
                  <Link title={lang === "en" ? "Place Order" : "Hacer un pedido"}
                    href={`/services/${item.label}`}
                    className="group flex items-center gap-1 btn-header"
                  >
                    {lang === "en" ? "Learn More" : "Aprender Más"}

                    <span className="transition-transform duration-300 transform group-hover:translate-x-1">
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation & Dots */}
      <div className="flex items-center mt-[2%] justify-between ">
        <CustomPrevArrow
          swiperRef={swiperRef}
          disabled={swiperState.isBeginning}
          show={true}
        />

        <div className="flex gap-2 justify-center ">
          {data?.map((_, index) => (
            <CrouselIndicators
              key={index}
              swiperRef={swiperRef}
              setActiveIndex={setActiveIndex} // optional if hook already handles slide change
              index={index}
              activeIndex={activeIndex}
            />
          ))}
        </div>

        <CustomNextArrow
          swiperRef={swiperRef}
          disabled={swiperState.isEnd}
          show={true}
        />
      </div>
    </>
  );
};

export default ServiceCardSwiper;
