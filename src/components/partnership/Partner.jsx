import SectionHeader from "@/common-components/SectionHeader";
import SEOImage from "@/common-components/SeoImage/SeoImage";
import Image from "next/image";
import React from "react";

const Partner = ({ data }) => {
  return (
    <section className=" container-global">
      <div className="text-center mb-[1rem] lg:mb-[2%] ">
       <SectionHeader title={data.head}/>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  mx-auto ">
        {data.detail.map((item, index) => (
          <div
            key={index}
            className="shadow-2xl rounded-2xl  "
          >
              <SEOImage
                width={500}
                height={500}
                src={item.img}
                alt={item.label}
              />

              <div className="p-[4%]">
                <SectionHeader
                  title={item.label}
                  description={item.para}
                  showBorder={false}
                />
              </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partner;
