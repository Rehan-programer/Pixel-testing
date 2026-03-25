import SectionHeader from "@/common-components/SectionHeader";
import SEOImage from "@/common-components/SeoImage/SeoImage";
import Image from "next/image";
import React from "react";

const OurMission = ({ data }) => {
  return (
<section
  className="my-[2%] overflow-hidden bg-[#cde5ff] bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/assets/img/bg_blog_testGreen.webp')"
  }}
>
      <div className="container-global relative ">
        
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 160 150"
          className="w-[10rem] h-[10rem] lg:w-[15vw] lg:h-[15vw] absolute left-0"
            style={{ fill: "white" }}
          >
            <path
              d="M43.2,126.9c14.2,1.3,27.6,7,39.1,15.6
              c8.3,6.1,19.4,10.3,32.7,5.3
              c11.7-4.4,18.6-17.4,21-30.2
              c2.6-13.3,8.1-25.9,15.7-37.1
              c8.3-12.1,10.8-27.9,5.3-42.7
              C150.5,20.3,134.6,9,117,7.6
              C107.9,6.9,98.8,5,90.1,1.9
              C83-0.6,75-0.7,67.4,2.1
              c-9.9,3.7-17,11.6-20.1,21
              c-3.3,10.1-10.9,18-20.6,22.2
              c-0.1,0-0.1,0.1-0.2,0.1
              c-20.3,8.9-31,32-24.6,53.2
              C6.9,115.6,25.2,125.2,43.2,126.9z"
            />
          </svg>

          {/* Image */}
          <div className="relative w-[80px] h-[80px]  lg:w-[10vw] lg:h-[10vw]">
          <SEOImage
          fill
            src={data?.img}
            alt={"Muhammad Faizan Islam"}
            className=" z-10  object-cover rounded-full "
          />
          </div>

        {/* </div> */}

        {/* === Text Section === */}
        <div className="lg:w-[80%] relative m-auto z-10  text-justify lg:text-left mt-6 lg:mt-[-4%] lg:ml-[14%]">
          <SectionHeader title={data?.title} showBorder={false} description={data?.detail}/>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
