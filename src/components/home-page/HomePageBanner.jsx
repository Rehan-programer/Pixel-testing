import React from "react";
import CSbannerCarousel from "./CSbannerCarousel";
import Link from "next/link";

const HomePageBanner = ({ data, mainService, heading, lang }) => {
  return (
    <section
      style={{
        background:
          "linear-gradient(360deg, rgba(13,21,131,1) 0%, rgba(169,252,237,1) 0%, rgba(255,255,255,1) 100%)",
      }}
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between container-global gap-x-[1%]  text-center md:text-left">
        {/* Left Side */}
        <div className=" mt-5 lg:mt-0 w-full lg:w-[46%]">
          <h1 className="bigHeading mb-[1%] font-medium ">
            {data.label || data.name || mainService?.name}
          </h1>

          <p className=" my-4 lg:my-[2%]">
            {data.para || data.para || mainService?.description}
          </p>

          {data?.length > 0 && (
            <div className="flex flex-wrap justify-center md:justify-start mb-[2rem] md:mb-[1.5%]">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="w-[47%] flex items-center text-left mb-3 mx-[1.5%]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#00cfaa] mr-2 flex-shrink-0"
                    width="clamp(6px,0.5vw,13px)"
                    height="clamp(6px,0.5vw,13px)"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="12" r="8" />
                  </svg>
                  <p className=" text-[#292a76] leading-snug font-medium">
                    {item.subName}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-col md:flex-row lg:flex-col  md:justify-between items-start md:items-center lg:items-start">
            <Link title={lang==="en"?" Explore All Services":"Explorar servicios"} href="/services" className="btn-slider mb-[1%]">
            {lang==="en"?" Explore All Services":"Explorar servicios"}
            </Link>
            <div className="text-left">
              <Link title="Free Trial"
                href={"/free-trial"}
                className="font-bold text-[0.7rem] underline  text-[#292a76]"
              >
                {data?.contacttext}
              </Link>
              <p className="text-[clamp(0.55rem,0.55vw,0.8rem)] mt-[1%] text-[#292a76] font-medium">
                {data?.credittext}
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden  w-full  lg:w-[52%]">
          <CSbannerCarousel data={data} heading={heading} />
        </div>
      </div>
    </section>
  );
};

export default HomePageBanner;
