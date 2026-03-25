import React from "react";
import Link from "next/link";
import SectionHeader from "@/common-components/SectionHeader";
import Image from "next/image";
import SEOImage from "@/common-components/SeoImage/SeoImage";

// import SectionHeader from "../../common-components/SectionHeader";

const WhatWeDo = ({ data }) => {
  return (
    <section
      className=" my-[2rem] lg:my-[3%]"
      style={{
        backgroundColor: "#A9D2FC",
      }}
    >
      <div className="container-global flex flex-col lg:flex-row   gap-4 ">
        <div className="   lg:w-[30%] m-auto   justify-center">
       <SectionHeader title={data.title} description={data.description} showBorder={false} />
        </div>

        <div className="lg:w-[70%] lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-2">
          {data?.items?.map((item, index) => (
            <Link title={item.title} key={index} href={item.fieldRoute} className="block">
              <div
                className=" py-[4%] bg-white  lg:px[2%] lg:py-[16%] p-[2%]   h-full overflow-hidden cursor-pointer"
                style={{
                  backgroundImage: `url("/assets/img/home/bg_blog_test.webp")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              > 
                <div className="flex items-center gap-1 mb-3 ">
                  <div className="relative w-[30px] h-[30px] lg:w-[38px] lg:h-[38px]">
                  <SEOImage
                  fill
                    src={item.icon}
                    alt={item.title}
                    className=" object-contain shrink-0"
                  />
                  </div>

                  <h4 className=" font-bold">{item.title}</h4>
                </div>

                <p className="leading-relaxed ">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
