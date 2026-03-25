import React from "react";
import Link from "next/link";

const AboutBanner = ({ data }) => {
  return (
    <div
      className="relative py-[3rem] lg:py-[5%] bg-center bg-cover bg-no-repeat "
      style={{
        backgroundImage: `url(${data?.img})`,
      }}
    >
      <div className="absolute inset-0 bg-black/80"></div>

      <div className=" container-global z-10  text-center ">
        <h1 className="bg-transparent border-2 inline-flex text-white px-6 py-4 shadow-lg transition-all duration-300 drop-shadow-[0_0_10px_white] font-bold">
          {data?.head}
        </h1>

        <p className="text-white w-full lg:w-[60%] mx-auto lg:text-center text-justify  my-[1rem] lg:my-[2%] drop-shadow-[0_0_5px_white]">
          {data?.para}
        </p>

        {data?.btn && (
          <Link title="Sign-In"
            href="#signin-component"
            className="btn-slider   z-10 relative "
          >
            {data.btn}
          </Link>
        )}
      </div>
    </div>
  );
};

export default AboutBanner;
