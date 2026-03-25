"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useSwiper } from "@/utils/SwiperStates";
import { useConvertPrice } from "@/utils/ConvertPrice";
import CrouselIndicators from "@/common-components/CrouselIndicators";
import ServiceImages from "@/common-components/ServiceImages";

const CSbannerCarousel = ({ data, heading }) => {
  const { activeIndex, swiperRef, handleSlideChange, setActiveIndex } =
    useSwiper();
  const carouselItems = useMemo(() => {
    if (heading) {
      return data?.BannerData?.slice(0, 6) || [];
    } else {
      return (data ?? []).filter((item) => item.beforeImage && item.afterImage);
    }
  }, [data, heading]);
  const { convertTextWithPrice } = useConvertPrice();

  return (
    <div className="relative text-center">
      <Swiper
        noSwiping={true}
        noSwipingClass="no-swipe"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        slidesPerView={1}
        spaceBetween={20}
        autoplay={false}
        loop={false}
        allowTouchMove={false}
      >
        {carouselItems?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="rounded-xl overflow-hidden">
                {" "}
                <ServiceImages data={item} />
              </div>
              <div
                className="
              absolute 
              bottom-[4%] sm:bottom-[2%] md:bottom-[4%]
              bg-[rgba(21,21,21,0.35)]
              p-[2%] left-0 right-0 inline-block w-[80%] md:w-[50%] m-auto
              rounded-[6px]
              select-none
              cursor-default
            "
              >
                <h3 className="text-white">
                  {item.project_title || item.subName}
                </h3>

                <h4 className="text-white font-bold mt-[2%]">
                  Starting at only{" "}
                  {convertTextWithPrice(
                    `$${item.price || item.pricing[0].singlePrice}`
                  )}
                </h4>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex justify-center w-full gap-[2%] mt-[1rem] md:mt-[2%]">
        {carouselItems?.map((_, index) => (
          <CrouselIndicators
            key={index}
            index={index}
            swiperRef={swiperRef}
            setActiveIndex={setActiveIndex}
            activeIndex={activeIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default CSbannerCarousel;
