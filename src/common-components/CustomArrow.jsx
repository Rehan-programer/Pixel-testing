"use client";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CustomArrow = ({ onClick, direction, disabled, show = false }) => {
  const visibilityClass = show ? "block" : "hidden md:flex";

  const bgColor = disabled ? "bg-gray-400" : "bg-[#00cfaa]";

  return (
    <div
      onClick={!disabled ? onClick : undefined}
      className={`${visibilityClass} flex items-center justify-center 
        rounded-full transition-all duration-300 p-1 lg:p-2 
        shadow-md ${bgColor} 
        ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      {direction === "prev" ? (
        <ChevronLeft className="text-white text-[1rem] md:text-[clamp(1rem,1.7vw,2rem)]" />
      ) : (
        <ChevronRight className="text-white text-[1rem] md:text-[clamp(1rem,1.7vw,2rem)]" />
      )}
    </div>
  );
};

export const CustomPrevArrow = ({ swiperRef, disabled , show }) => (
  <CustomArrow
    direction="prev"
    disabled={disabled}
    onClick={() => swiperRef.current?.slidePrev()}
    show={show}
  />
);

export const CustomNextArrow = ({ swiperRef, disabled , show }) => (
  <CustomArrow
    direction="next"
    disabled={disabled}
    onClick={() => swiperRef.current?.slideNext()}
    show={show}
  />
);
