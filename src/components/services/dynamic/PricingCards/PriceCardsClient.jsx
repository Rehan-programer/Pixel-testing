"use client"
import React, { useContext } from "react";
import { useConvertPrice } from "@/utils/ConvertPrice";
import { CurrencyContext } from "@/utils/useRootLayout";
import { Check } from "lucide-react";

const PriceCardsClient = ({ item , otheredit }) => {
  const { currency, convertPrice } = useContext(CurrencyContext);
  const { convertTextWithPrice } = useConvertPrice();
  return (
    <>
      {otheredit && (
        <h1 className=" text-[#0ccfaa] flex">
          {convertTextWithPrice(item.price)}
        </h1>
      )}
      {!otheredit && (
        <h1 className="bigHeading text-[#0ccfaa] flex items-center">
          {convertPrice(item.price)}
          <p className="text-[#0ccfaa] font-bold"> ({currency})</p>
        </h1>
      )}

      <ul className="2xl:h-[13rem]">
        {item.pricingpoints.map((point, i) => (
          <li key={i} className="flex items-center gap-2 mb-[2%]">
            <Check className="w-4 h-4 text-teal-500 flex-shrink-0" />
            <p >{convertTextWithPrice(point)}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PriceCardsClient;
