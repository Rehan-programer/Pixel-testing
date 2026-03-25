"use client"
import React from "react";
import { useConvertPrice } from "@/utils/ConvertPrice";
import { CurrencyContext } from "@/utils/useRootLayout";

const ChooseCardClient = ({ item }) => {
  const { convertTextWithPrice } = useConvertPrice();
  return (
    <>
      <span>{convertTextWithPrice(item)}</span>
    </>
  );
};

export default ChooseCardClient;
