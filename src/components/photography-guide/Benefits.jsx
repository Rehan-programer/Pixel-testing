import SEOImage from "@/common-components/SeoImage/SeoImage";
import Image from "next/image";
import React from "react";

const Benefits = ({ data }) => {
  return (
    <div className="container-global ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-10">
        {data?.detail?.map((item, index) => (
          <div
            key={index}
            className="pricingbox p-[2%] !border-white 
             hover:!border-[#1ff6cf] 
             flex flex-col items-center"
          >
            {/* Image */}
            <div className="w-20 h-20 mb-[2%] p-[1%] flex items-center justify-center rounded-full  overflow-hidden bg-[rgb(169,252,237)]">
              <SEOImage
                src={item.img}
                alt={item.label}
                width={70}
                height={70}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Label */}
            <h3 >
              {item.label}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
