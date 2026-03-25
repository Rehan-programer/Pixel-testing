import React from "react";
import SectionHeader from "../../common-components/SectionHeader";

const WhoWeAre = ({ data }) => {
  return (
    <section
      className="my-[1rem] lg:my-[3%] overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgb(205, 229, 255) 0%, rgb(255, 255, 255) 50%, rgb(169, 252, 237) 100%)",
      }}
    >
      <div className="container-global ">
        <div className="text-center ">

        <SectionHeader title={data?.head} showBorder={false} />
      </div>

        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-[2%] ">
          {data?.detail?.map((point, index) => (
            <li key={index} className=" mt-[2%]">
            
              <p className="  flex  items-start text-left gap-x-[2%]">
                            <svg
                className="w-2 h-2 flex-shrink-0 text-[#0ccfaa] mt-[0.4rem] lg:mt-[0.7%]"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"
                ></path>
              </svg>  {point}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhoWeAre;
