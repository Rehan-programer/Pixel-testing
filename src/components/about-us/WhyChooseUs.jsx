import SectionHeader from "@/common-components/SectionHeader";
import SEOImage from "@/common-components/SeoImage/SeoImage";
import Image from "next/image";
import React from "react";

const WhyChooseUs = ({ data }) => {
  return (
    <div className="my-[3%] container-global w-[100%] lg:w-[80%] p-0">
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        {data?.map((item, index) => {
          let lines = [];

          switch (index) {
            case 0: // 24/7 Availability
              lines = [
                {
                  className:
                    "bottom-0 left-1/2 -translate-x-1/2 w-[30%] h-[3px]",
                }, // bottom
                {
                  className:
                    "top-1/2 -translate-y-1/2 right-0 w-[3px] h-[30%] hidden md:block",
                }, // right middle
              ];
              break;
            case 1: // 24/7 Availability
              lines = [
                {
                  className:
                    "bottom-0 left-1/2 -translate-x-1/2 w-[30%] h-[3px] block md:hidden",
                }, // bottom
              ];
              break;

            case 3: // Cutting-Edge Technology
            case 5: // Client-Centric Approach
              lines = [
                {
                  className:
                    "bottom-0 left-1/2 -translate-x-1/2 w-[30%] h-[3px] ",
                },
              ];
              break;
            case 4:
              lines = [
                {
                  className:
                    "bottom-0 left-1/2 -translate-x-1/2 w-[30%] h-[3px] block md:hidden",
                }, // bottom
              ];
              break;

            case 6:
              lines = [
                {
                  className:
                    "bottom-0 left-1/2 -translate-x-1/2 w-[30%] h-[3px] block md:hidden",
                }, // bottom
                {
                  className:
                    "top-1/2 -translate-y-1/2 right-0 w-[3px] h-[30%] hidden md:block",
                },
              ];
              break;
            case 7:
              lines = [
                {
                  className:
                    "top-1/2 -translate-y-1/2 right-0 w-[3px] h-[30%] hidden md:block",
                },
                {
                  className:
                    "bottom-0 left-1/2 -translate-x-1/2 w-[30%] h-[3px] block md:hidden",
                },
              ];
              break;

            case 2: // Proven Track Record
              lines = [
                {
                  className:
                    "top-1/2 -translate-y-1/2 left-0 w-[3px] h-[30%] hidden md:block",
                },
                {
                  className:
                    "bottom-0 left-1/2 -translate-x-1/2 w-[30%] h-[3px]",
                },
              ];
              break;

            default:
              lines = [];
          }

          // Tailwind lg: conditional classes
          const borderRadiusClasses = `
                ${index === 0 ? "lg:rounded-tl-[20px]" : ""}
                ${index === 2 ? "lg:rounded-tr-[20px]" : ""}
                ${index === data.length - 3 ? "lg:rounded-bl-[20px]" : ""}
                ${index === data.length - 1 ? "lg:rounded-br-[20px]" : ""}
              `;

          return (
            <div
              key={index}
              className={`relative flex flex-col justify-center items-center text-center text-white p-[4%] md:py-[4%] lg:p-[4%] transition-all duration-300 ${borderRadiusClasses}
           h-[14rem] md:h-[18rem]  lg:h-[14rem] xl:h-[16rem] 2xl:h-[22rem]`}
              style={{
                backgroundImage: item.bgimage
                  ? `url(${item.bgimage})`
                  : "linear-gradient(to bottom right, #002B5B, #004C7A)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {item.bgimage && (
                <div className="absolute inset-0 bg-black/60 rounded-[inherit]"></div>
              )}

              {lines.map((line, i) => (
                <div
                  key={i}
                  className={`absolute bg-white ${line.className}`}
                ></div>
              ))}

              <div className="relative z-10 ">
                {item.icon && (
                  <div className="relative w-[45px]  h-[45px] mx-auto  mb-3">
                  <SEOImage
                  fill
                    src={item.icon}
                    alt={item.head}
                    className=" object-contain"
                  />
                  </div>
                )}

                <SectionHeader
                  title={item.head}
                  description={item.para}
                  WhiteColor={true}
                  showBorder={false}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUs;
