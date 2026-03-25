import SectionHeader from "@/common-components/SectionHeader";
import React from "react";

export default function IncludesPoints({ data }) {
  return (
    <section className=" container-global">
      <div className="text-center ">
        <SectionHeader
          title={`Why fill your empty listing with ${data.subName}?`}
        />
      </div>
      <div className=" grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.includespoints?.map((item, index) => (
          <div key={index} className={`flex ${item.pointDescription?"items-start":"items-center"} gap-3 `}>
            <div
              className="flex w-[3rem] h-[3rem] 2xl:w-[2rem]  2xl:h-[2rem]  lg:w-[2vw]  lg:h-[2vw]  shrink-0 items-center justify-center rounded-full bg-[#00cfaa] text-[#292A76] font-bold"
            >
              {String(index + 1).padStart(2, "0")}
            </div>

            <div>
              {item.pointDescription? 
              <h3 className=" mb-[0.5rem] lg:mb-[1%]">{item.pointName}</h3>: <h4 >{item.pointName}</h4>}
              <p>{item.pointDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
