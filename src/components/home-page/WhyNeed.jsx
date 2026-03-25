import React from "react";
// import { WhyNeedImage } from "../home/HomePageNextImages/NextImage";
import SectionHeader from "@/common-components/SectionHeader";
import Image from "next/image";
import SEOImage from "@/common-components/SeoImage/SeoImage";

const WhyNeed = ({lang,data}) => {
  return (
    <div className="container-global ">
      {/* 🔹 Section Heading */}
      <div className="text-center ">
        <SectionHeader
          title={data.Heading}
          description={data.Descriptions}
          width={"lg:w-[75%]"}
        />
      </div>

      {/* 🔹 Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 md:gap-y-0 gap-x-[1rem] lg:gap-x-[1%] justify-items-center w-full">
        {data.CardData.map((item) => (
          <div
            key={item.name}
            className="rounded-[clamp(0.5rem,0.8vw,1rem)] shadow-[0_4px_8px_rgba(0,0,0,0.3)] overflow-hidden mt-[6%]"
          >
            {/* Image */}
<div className="relative w-full h-auto aspect-square">
  <SEOImage branding={true}
    src={item.Img}
    alt={item.name}
    fill quality={80}
    className="object-contain"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
  />
</div>
            {/* Content */}
            <div className="text-center p-[0.8rem] md:p-[clamp(0.6rem,1vw,1.2rem)]">
              <h3 >{item.name}</h3>
              <p className=" mt-[1%] ">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyNeed;
