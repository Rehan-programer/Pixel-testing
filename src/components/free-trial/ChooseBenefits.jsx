import SEOImage from "@/common-components/SeoImage/SeoImage";
import Image from "next/image";
import React from "react";

const ChooseBenefits = ({ data }) => {
  return (
    <div className="container-global  flex flex-col-reverse items-center lg:flex-row gap-x-4 justify-between">
      <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {data?.detail?.map((item, index) => (
          <div
            key={index}
            className={`
     rounded-xl shadow-lg  p-6 flex flex-col items-start 

    hover:bg-[linear-gradient(360deg,rgb(13,21,131)0%,rgb(169,252,237)0%,rgb(255,255,255)100%)]
     transition-all duration-700 ease-in-out
    ${index % 2 === 0 ? "lg:translate-y-8" : ""}
            `}
            style={{
              boxShadow: "rgba(0, 0, 0, 0.3) 0px 4px 8px",
              transition: "0.9s ease-in-out",
            }}
          >
            <div className=" bg-[rgb(169,252,237)]  rounded-full p-[4%]">
              <SEOImage
                src={item?.img}
                height={1000}
                width={1000}
                alt={item.label}
                className="w-10 h-10  object-contain"
              />
            </div>
            <h3 className=" my-[1rem] lg:my-[4%]">{item.label}</h3>
            <p >{item.para}</p>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE: Head + Para */}
      <div className="lg:w-[45%] mb-[2rem] lg:mb-0  ">
        <p
          className=" inline-flex w-auto mb-[1rem] lg:mb-[1%] px-[3%] py-[1%]  bg-green-300"
          style={{fontWeight:"bold",
            border: "1px solid rgb(0, 207, 170)",
            backgroundColor: "rgb(205, 229, 255)",
            color: "rgb(41, 42, 118)",
          }}
        >
          BENEFITS
        </p>

        <h2 className="mt-[1rem] lg:mt-[1%]">{data?.head}</h2>
        <div className="my-[0.5rem] lg:my-[1.5%]"
          style={{
            position: "relative",
            width: "20%",
            height: "0.2rem",
            background:
              "linear-gradient(to right, rgb(169, 252, 237), rgb(13, 21, 131), rgb(169, 252, 237))",
          
          }}
        ></div>

        {data?.para && (
          <p
            dangerouslySetInnerHTML={{ __html: String(data.para) }}
          />
        )}
      </div>
    </div>
  );
};

export default ChooseBenefits;
