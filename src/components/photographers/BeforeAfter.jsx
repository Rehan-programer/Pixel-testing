import React from "react";
import ServiceImages from "../../common-components/ServiceImages";
import Link from "next/link";
import PlaceOrderBtn from "@/common-components/PlaceOrderBtn";
import BeforeAfterClient from "./BeforeAfterClient";

const BeforeAfter = ({ data,lang }) => {
  const PORTAL = process.env.NEXT_PUBLIC_PORTAL;
  return (
    <div className="container-global">
      {data.map((item, index) => {
        const mappedData = {
          beforeImage: item.Beforeimg,
          afterImage: item.Afterimg,
          subName: item.title,
          para: item.para,
          points: item.points,
          price: item.price,
          link: item.link,
          title: item.title,
        };

        const isEven = index % 2 === 0;

        return (
          <div
            key={index}
            className={` mb-[1rem] lg:mb-[2%] flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-6 ${
              isEven ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            <div className="md:w-1/2 w-full    lg:px-[2%]">
              <h2 className="font-bold mb-[1rem] lg:mb-[2%]">
                {mappedData.title}
              </h2>
              {mappedData.para && (
                <p className="mb-[1rem] lg:mb-[2%] text-gray-700">
                  {mappedData.para}
                </p>
              )}

              <ul className="mb-[1rem] lg:mb-[2%] list-none lg:space-y-2  text-gray-600 mt-[0.4rem] lg:mt-[0.7%]">
                {mappedData.points?.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
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
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

               < BeforeAfterClient  item={mappedData.price}/>

              <div className="flex gap-4 ">
                <Link title=" KNOW MORE"
                  href={`${mappedData.link}`}
                  className="btn-slider"
                  style={{
                    boxShadow: "rgb(209, 209, 209) 0px 4px 16px 4px",
                  }}
                >
                  KNOW MORE
                </Link>

                <Link  title={lang === "en" ? "Place Order" : "Hacer un pedido"}
                  style={{
                    boxShadow: "rgb(209, 209, 209) 0px 4px 16px 4px",
                  }}
                  target="_blank"
                  href={`${PORTAL}${mappedData.title}`}
                  className="btn-slider "
                >
                  {lang === "en" ? "Place Order" : "Hacer un pedido"}
                </Link>
              </div>
            </div>

            <div className="md:w-1/2 w-full mb-[1rem] rounded-md overflow-hidden  relative">
              <ServiceImages data={mappedData} index={index} photographer={true} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BeforeAfter;
