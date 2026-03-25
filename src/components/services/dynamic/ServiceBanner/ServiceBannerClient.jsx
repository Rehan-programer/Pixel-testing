"use client";

import { useConvertPrice } from '@/utils/ConvertPrice';
import React from 'react'

const ServiceBannerClient = ({data}) => {
  const { convertTextWithPrice } = useConvertPrice();

  return (
    <>
        <p>{convertTextWithPrice(data.subDescription)}</p>

          <ul className="space-y-2 my-[1rem] lg:my-[2%]">
            {data.points?.map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <svg
                  className="w-2 h-2 mt-[1%] text-[#0ccfaa]"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 
                    10-4.47 10-10S17.53 2 12 2"
                  ></path>
                </svg>
                <span className="text-[12px]">
                  {convertTextWithPrice(point)}
                </span>
              </li>
            ))}
          </ul>
    </>
  )
}

export default ServiceBannerClient
