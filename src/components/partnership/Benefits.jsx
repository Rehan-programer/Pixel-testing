import SectionHeader from "@/common-components/SectionHeader";
import SEOImage from "@/common-components/SeoImage/SeoImage";
import Image from "next/image";
import React from "react";

const Benefits = ({ data }) => {
  return (
    <section className=" container-global   ">
      <div className="text-center">
        <SectionHeader title={data?.head} />
      </div>

      <div
        className={
          "flex flex-wrap justify-center items-center lg:justify-start lg:gap-2 xl:gap-10"
        }
      >
        {data.detail.map((item, index) => (
          <div
            key={index}
            className="pricingbox py-4 w-[100%] md:w-[50%] lg:w-[30.33%] mx-auto   lg:py-[2%] px-[1%] !border-white hover:!border-[#00cfaa]"
          >
            <div className="flex justify-center items-center  mb-[2rem] lg:mb-[2%]  ">
              <SEOImage
                height={100}
                width={1000}
                src={item.img}
                alt={item.label}
                className="w-10 h-10 object-contain"
              />
            </div>

            <div className=" lg:w-[90%] m-auto ">
            
              <h3>{item.label}</h3>
              <p className="text-center">{item.para}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
