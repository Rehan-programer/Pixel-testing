"use client";
import { useModal } from "@/common-components/providers/ModalContext";
import { CurrencyContext } from "@/utils/useRootLayout";
import React, { useContext } from "react";

export const ServicePricingChange = ({ pricingOption }) => {
  const { currency, convertPrice } = useContext(CurrencyContext);

  return (
    <p className="font-bold my-[3%] !text-[2rem] lg:text-[clamp(1.1rem,1.5vw,2rem)] text-[#292A76]">
      {currency}{" "}
      {convertPrice(pricingOption.price)}
    </p>
  );
};

export const ServicePricingButton = ({ points, label }) => {
  const { setOpenContactModal, setRelatedData } = useModal();

  const handleModal = (label, points) => {
    setOpenContactModal(true);
    setRelatedData((prevData) => ({
      ...prevData,
      fieldName: label,
      itemPoints: points,
    }));
  };

  return (
    <button
      onClick={() => handleModal(label, points)}
      className="btn-slider py-2 px-2"
    >
      Buy Now
    </button>
  );
};
