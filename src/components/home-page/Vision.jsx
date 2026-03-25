import React from "react";
// import { OurVision } from "@/components/home/HomePageNextImages/NextImage";
import SectionHeader from "@/common-components/SectionHeader";
import Image from "next/image";
import SEOImage from "@/common-components/SeoImage/SeoImage";

const Vision = ({data}) => {
  return (
    <section style={{background:"linear-gradient(180deg, rgba(169,252,237,1) 0%, rgba(255,255,255,1) 100%)"}}>
      <div className="container-global text-justify">
        <div className="text-center">
          <SectionHeader title={data.heading} />
        </div>
          <h3 className="my-2 lg:my-[1%]">
            {data.subHeading}
          </h3>

          <p >
            {data.description}
          </p>

          <h3 className="mt-2 lg:my-[1%]">
            {data.values}
          </h3>

          {/* ✅ Vision Details */}
          <div className="flex flex-wrap gap-x-[4%] ">
            {data?.visiondetails?.map((item) => (
              <div
                key={item.heading}
                className="flex items-center text-white gap-x-[2rem]  lg:gap-x-[4rem] last:mb-0 mb-[4rem]
                           max-w-full md:max-w-[48%] min-w-[96%] md:min-w-[40%] "
              >
                {/* ✅ Icon Box */}
                <div className="bg-[#a9fced] p-[clamp(0.6rem,1vw,1.2rem)] rounded-[clamp(0.6rem,1vw,1.2rem)] flex-shrink-0">
  <SEOImage branding={true}
        src={`/assets/img/common/${item.imgUrl}`}
        alt={item.heading}
        width={200}
        height={200}
        priority
        className="
        lg:w-[clamp(1.5rem,3vw,3.5rem)] h-auto  w-[3.5rem]"
      />                </div>

                {/* ✅ Text */}
                <div >
                  <h3 className="mb-[2%]"
                    style={{
                      textShadow:
                        "0 0 7px rgba(255,255,255,0.3), 0 0 3px rgba(255,255,255,0.3)",
                    }}
                  >
                    {item.heading}
                  </h3>

                  <p
                    style={{
                      textShadow:
                        "0 0 7px rgba(255,255,255,0.3), 0 0 3px rgba(255,255,255,0.3)",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Vision;
