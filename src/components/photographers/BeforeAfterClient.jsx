"use client";
import React from "react";
import { useConvertPrice } from "@/utils/ConvertPrice";

const BeforeAfterClient = ({ item }) => {
      const { convertTextWithPrice } = useConvertPrice();
  return (
    <>
      <p className="font-semibold mb-[1rem] lg:mb-[2%]">{convertTextWithPrice(item)}</p>
    </>
  );
};

export default BeforeAfterClient;
