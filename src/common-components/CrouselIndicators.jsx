import React from 'react'

const CrouselIndicators = ({ swiperRef, setActiveIndex, index, activeIndex }) => {
  const isActive = activeIndex === index;

  return (
    <div
      onClick={() => {
        swiperRef?.current?.slideTo(index);
        setActiveIndex(index);
      }}
      className={`w-2.5 h-2.5 rounded-[0.2rem] cursor-pointer transition-transform duration-200 hover:scale-110 ${
        isActive ? "bg-[#00cfaa]" : "bg-[#292a76]"
      }`}
      aria-label={`Slide ${index + 1}`}
    />
  );
};

export default CrouselIndicators
