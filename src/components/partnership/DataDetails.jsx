import SectionHeader from "@/common-components/SectionHeader";
import SEOImage from "@/common-components/SeoImage/SeoImage";
import Image from "next/image";
import React from "react";

const DataDetails = ({ data }) => {
  return (
    <section className="container-global   ">
      <div className="relative   m-auto flex justify-center">
        <SEOImage
          width={1000}
          height={500}
          src="/assets/img/partnerships/partner/fill the details desktop.webp"
          alt="Fill the details"
          className="w-full hidden lg:block  object-contain"
        />
        <SEOImage
          width={500}
          height={500}
          src="/assets/img/partnerships/partner/mobilefillthedetails.webp"
          alt="Fill the details"
          className="w-[50%] lg:hidden block object-contain"
        />


        <div className=" absolute hidden lg:flex justify-between items-center top-0 bottom-0 w-[90%]  ">
          {data.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col w-[20%] text-center ${index < 2 ? "lg:mt-[0]" : "mt-[3%]"
                }`}
            >
              <div className=" flex items-center justify-center ">
                <SEOImage
                  width={50}
                  height={50}
                  src={step.img}
                  alt={step.head}
                  className="w-10 h-10 object-contain "
                />
              </div>

              <div className="">
                <SectionHeader
                  title={step.head}
                  description={step.para}
                  showBorder={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataDetails;
