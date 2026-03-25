import React from "react";
import SectionHeader from "@/common-components/SectionHeader";
import Image from "next/image";
import SEOImage from "@/common-components/SeoImage/SeoImage";

const WhatAreTheBenefits = ({ data, lang }) => {
  return (
    <>
      <div className=" py-[2rem]  w-[78%] m-auto lg:py-[3%]  hidden lg:block">
        <div className="text-center">
          <SectionHeader title={data.head} />
        </div>

        <div className="relative mt-[10%] mb-[8%] ">
          <SEOImage branding={true}
            src="/benefitsgroup.webp"
            alt={data?.head}
            title={data?.head}
            width={800}
            height={800}
            loading="lazy"
            className="mx-auto mt-[2%] w-[60%] lg:w-[80%] h-auto"
          />

          {data.detail?.map((item, index) => {
            const isOdd = index % 2 === 1;
            const leftPositionsMd = {
              0: lang === "es" ? "-4.5%" : "-2.5%",

              1: lang === "es" ? "9%" : "14.5%",
              2: lang === "es" ? "25.5%" : "29.5%",
              3: lang === "es" ? "37.5%" : "43%",
              4: lang === "es" ? "52.5%" : "57.5%",
              5: lang === "es" ? "67%" : "70.8%",
            };
            return (
              <div
                key={index}
                className={`absolute flex flex-col items-center justify-center text-center ${
                  isOdd ? "flex-col" : "flex-col-reverse"
                }`}
                style={{
                  top: isOdd ? "52%" : "12%",
                  left: leftPositionsMd[index],
                }}
              >
                <div className={`relative md:w-[5vw] sm:w-[3vw] ${isOdd?"mt-[4%]":"mt-[-6%]"} w-[3.5vw] h-auto aspect-square`}>
                  <SEOImage branding={true}
                    src={item.img}
                    alt={item.label}
                    title={item.label}
                    fill
                    sizes="(max-width: 640px) 3.5vw, (max-width: 768px) 3vw, 5vw"
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
                <div
                  className={`transform ${
                    isOdd
                      ? " translate-y-[140%]"
                      : "translate-y-[-162%]"
                  }`}
                >
                  <h3 className="mb-[1%] text-[1.3vw] ">{item.label}</h3>
                  <p
                    className={`mx-auto text-[0.7vw] ${
                      isOdd ? "md:w-[50%] w-[50%]" : "md:w-[40%] w-[40%]"
                    }`}
                  >
                    {item.para}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" py-[2rem] lg:py-[3%]  lg:hidden">
        <div className="text-center">
          <SectionHeader title={data.head} />
        </div>
        <SEOImage branding={true}
          src="/benfitsMobile.png"
          alt={data.head}
          title={data.head}
          width={800}
          height={800}
          loading="lazy"
          className="mx-auto mt-[2%] w-[60%] sm:w-[80%] h-auto"
        />
      </div>
    </>
  );
};

export default WhatAreTheBenefits;
