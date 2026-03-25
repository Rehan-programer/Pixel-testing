"use client";

import SectionHeader from "@/common-components/SectionHeader";
import React from "react";

const TestimonialsClients = ({ data }) => {
  return (
    <section
      className=" py-[1rem] lg:py-[2%] text-center  "
      style={{
        background:
          "linear-gradient(135deg, rgb(205, 229, 255) 0%, rgb(169, 252, 237) 100%)",
        boxShadow: "rgba(0, 0, 0, 0.06) 0px 4px 16px",
      }}
    >
      <div className="container-global py-[1rem] lg:py-[1%]">

        <p className=" font-bold mb-[1%]">{data?.STATISTICS}</p>
        <SectionHeader title={data?.detail} />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 ">
        {data?.items.map((item, index) => (
          <div key={index}>
            <h3
              className="text-white mb-2"
              style={{ textShadow: "2px 0px 6px rgba(0, 0, 0, 0.8)" }}
            >
              {item.head}
            </h3>

            <p>{item.para}</p>
          </div>
        ))}
      </div>
      </div>

    </section>
  );
};

export default TestimonialsClients;
