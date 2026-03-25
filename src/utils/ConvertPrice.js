"use client";
import { useContext } from "react";
import { CurrencyContext } from "@/utils/useRootLayout";

export const useConvertPrice = () => {
  const { symbol, convertPrice,currency } = useContext(CurrencyContext);

  const convertTextWithPrice = (text) => {
    if (typeof text !== 'string') return text; 
    const regex = /(\$\d+(\.\d{1,2})?)/g;
    return text.replace(regex, (match) => {
      const numericPrice = parseFloat(match.replace(/[^0-9.-]+/g, ""));
      const convertedPrice = convertPrice(numericPrice);
      return `${symbol}${convertedPrice}`;
    });
  };

  return { symbol, convertTextWithPrice,currency };
};
