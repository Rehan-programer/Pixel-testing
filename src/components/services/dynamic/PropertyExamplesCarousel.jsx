"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Pricing from "@/components/services/dynamic/Pricing";

import ServiceImages from "@/common-components/ServiceImages";
import CrouselIndicators from "@/common-components/CrouselIndicators";
import SectionHeader from "@/common-components/SectionHeader";
import Link from "next/link";

import {
  CustomPrevArrow,
  CustomNextArrow,
} from "../../../common-components/CustomArrow";
import { useSwiper } from "@/utils/SwiperStates";

const PropertyExamplesCarousel = ({
  subname,
  data,
  pricing,
  otheredit,
  lang,
}) => {
  const {
    activeIndex,
    swiperRef,
    setActiveIndex,
    handleSlideChange,
    swiperState,
  } = useSwiper();
  const PORTAL = process.env.NEXT_PUBLIC_PORTAL;
  return (
    <section
      className={`
  container-global 
  p-[1.5rem] 
  lg:p-[2%] 
  relative 
  flex flex-col lg:flex-row justify-between items-center
  rounded-[1rem]
  border-2 border-white
  shadow-[0px_4px_16px_rgba(0,0,0,0.06)]
  bg-[linear-gradient(rgba(35,156,144,0.1),rgba(11,62,161,0.1))]
${pricing?.length > 0 ? "w-auto  gap-y-4 lg:gap-x-4  " : "lg:w-[50%] "}
`}
    >
      <div
        className={` ${
          pricing?.length > 0 ? " w-full lg:w-[68%]" : " w-full "
        } `}
      >
        {!otheredit && (
          <div className="text-center ">
            <SectionHeader title={data.head} />
          </div>
        )}

        <div className="flex items-center justify-between gap-x-2 ">
          <CustomPrevArrow
            swiperRef={swiperRef}
            disabled={swiperState.isBeginning}
          />
          <Swiper
            onSlideChange={handleSlideChange}
            loop={false}
            spaceBetween={30}
            slidesPerView={1}   noSwiping={true}
  noSwipingClass="swiper-no-swiping"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {data.images.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="rounded-[0.45rem]  overflow-hidden swiper-no-swiping">
                  <ServiceImages data={img}  subservice={true} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <CustomNextArrow swiperRef={swiperRef} disabled={swiperState.isEnd} />
        </div>

        {!otheredit && (
          <div className=" hidden lg:flex gap-2 justify-center mt-[2%]">
            {data.images.map((_, index) => (
              <CrouselIndicators
                key={index}
                index={index}
                activeIndex={activeIndex}
                swiperRef={swiperRef}
                setActiveIndex={(i) => {
                  setActiveIndex(i);
                  swiperRef.current?.slideTo(i);
                }}
              />
            ))}
          </div>
        )}

        <div className="md:hidden flex justify-center space-x-4 my-[1rem] ">
          <CustomPrevArrow
            swiperRef={swiperRef}
            disabled={swiperState.isBeginning}
            show={true}
          />

          <CustomNextArrow
            swiperRef={swiperRef}
            disabled={swiperState.isEnd}
            show={true}
          />
        </div>

        {!otheredit && (
          <div className="text-center mt-[1rem] lg:mt-[2%]">
            <Link title={lang === "en" ? "Place Order" : "Hacer un pedido"} target="_blank" href={`${PORTAL}${subname}`} className="btn-slider">
              {lang === "en" ? "Place Order" : "Hacer un pedido"}
            </Link>
          </div>
        )}
      </div>
      {pricing?.length > 0 && (
        <div className="animate__animated animate__slideInLeft duration-700 ">
          <Pricing
            data={pricing}
            otheredit={otheredit}
            subname={subname}
            lang={lang}
          />
        </div>
      )}
    </section>
  );
};

export default PropertyExamplesCarousel;
