"use client";
import React, { forwardRef } from "react";

const MobileSelect = forwardRef((props, ref) => {
  const {
    setOpen,
    open,
    selectedLabel,
    MainService,
    isgallerypage = false,
    handleSelectChange,
    selectedCategory,
  } = props;

  return (
    <div
      className={`flex ${
        isgallerypage ? "lg:flex " : "lg:hidden"
      } justify-center my-4 w-full`}
    >
      <div ref={ref} className="relative w-full">
        {/* BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className={`w-full text-left border-2 border-[#00cfaa] py-[0.45rem] px-[1rem]
    ${open ? "rounded-t-[0.45rem]" : "rounded-[0.45rem]"}
    transition-all duration-300 focus:outline-none flex items-center justify-between
 
      
    
  `}
        >
          <span
            className={` ${
              isgallerypage
                ? "text-black"
                : selectedCategory
                ? "text-[#00cfaa]"
                : ""
            }
            `}
          >
            {selectedLabel || "Select Category"}
          </span>

          {/* ARROW */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-4 h-4 ml-2 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* DROPDOWN */}
        <div
          className={`absolute left-0 w-full ${isgallerypage ? "bg-white":"bg-[#00cfaa]"} rounded-bl-[0.45rem] rounded-br-[0.45rem]
            shadow-md overflow-hidden z-[50]
            transition-all duration-300 origin-top ${
              open
                ? "scale-y-100 opacity-100 visible"
                : "scale-y-0 opacity-0 invisible"
            }`}
        >
          {MainService?.map((item, index) => {
            // ⭐ SINGLE SOURCE OF TRUTH VALUE
            const value =item.room || item.styleName ||
              item.project_title || item.id || item.label || item.name  ;

            return (
              <div
                key={index}
                onClick={() => {
                  handleSelectChange(value);
                  setOpen(false);
                }}
                className={`
  p-[1rem] text-sm cursor-pointer  transition-colors duration-150 
  ${
    isgallerypage
      ? selectedCategory === value
        ? "bg-[#292A76] font-medium text-white"
        : "bg-white text-black hover:bg-[#A9FCED]/98"
      : selectedCategory === value
      ? "bg-[#292a76] font-medium text-white"
      : "bg-[#00cfaa] text-white"
  }
`}
              >
                {item.id?item.name:value}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default MobileSelect;
