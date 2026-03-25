"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import "animate.css";
import { createPortal } from "react-dom";
import { CurrencyContext } from "@/utils/useRootLayout";
import { X } from "lucide-react";

const CurrencySelectorModal = ({ scrolled , home }) => {
  const { currency, currencies, handleCurrencyChange } =
    useContext(CurrencyContext);

  const [open, setOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(currency);
  const [isClosing, setIsClosing] = useState(false);
  const [mounted, setMounted] = useState(false);

  // -------------------------------
  // Load currency from cookies
  useEffect(() => {
    const cookieCurrency = document.cookie
      .split("; ")
      .find((row) => row.startsWith("currencyCode="))
      ?.split("=")[1];
    if (cookieCurrency && currencies[cookieCurrency]) {
      setSelectedCurrency(cookieCurrency);
      handleCurrencyChange({ target: { value: cookieCurrency } });
    }
  }, [currencies, handleCurrencyChange]);
  // -------------------------------

  useEffect(() => setMounted(true), []);
  useEffect(() => setSelectedCurrency(currency), [currency]);

  const handleOpen = () => {
    setIsClosing(false);
    setOpen(true);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => setOpen(false), 400);
  };

  const handleCurrencySelect = (code) => {
    setSelectedCurrency(code);
    handleCurrencyChange({ target: { value: code } });

    // -------------------------------
    // Save selected currency to cookie
    document.cookie = `currencyCode=${code}; path=/; max-age=31536000`;
    document.cookie = `currencySymbol=${currencies[code].symbol}; path=/; max-age=31536000`;
    // -------------------------------

    handleClose();
  };

  // Prevent background scroll without layout shift
  useEffect(() => {
    if (open) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [open]);

  const modalContent = (
    <div
      onClick={handleClose}
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm animate__animated ${
        isClosing
          ? "animate__fadeOut animate__faster"
          : "animate__fadeIn animate__faster"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()} // prevent modal close when clicking inside
        className={`bg-white rounded-lg p-5 w-[90%] md:w-[28vw] max-w-[37.5rem] max-h-[80vh] overflow-y-auto shadow-2xl transition-all duration-300 animate__animated ${
          isClosing
            ? "animate__fadeOutDown animate__faster"
            : "animate__fadeInUp animate__faster"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3>Select Your Currency</h3>
          <button
            onClick={handleClose}
            className="text-[#292A76] hover:text-[#1a1b5a] transition-colors duration-200"
            aria-label="Close"
          >
            <X size={24} strokeWidth={2.5} />
          </button>
        </div>

        {/* Currency Grid */}
        <div className="grid grid-cols-2 gap-3">
          {Object.entries(currencies).map(([code, { symbol, flag }]) => (
            <div
              key={code}
              onClick={() => handleCurrencySelect(code)}
              className={`flex items-center gap-2 cursor-pointer border rounded-md p-[clamp(0.4rem,0.5vw,1rem)] transition-all duration-150 ${
                selectedCurrency === code
                  ? "bg-blue-100 border-blue-400 "
                  : "bg-white hover:bg-gray-100 border-gray-200"
              }`}
            >
              {flag ? (
                <div className="relative w-[clamp(2rem,2vw,2.5rem)] h-[clamp(1.5rem,1.8vw,2rem)]">
                  <Image
                    src={flag}
                    alt={`${code} Flag`}
                    title={`${code} Flag`}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="w-[40px] h-[28px] bg-gray-200 rounded" />
              )}
              <p>
                {code} ({symbol})
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        onClick={handleOpen}
        className="flex items-center transition font-medium text-[#292A76]"
      >
        {selectedCurrency && currencies[selectedCurrency]?.flag ? (
          <>
            <div className="relative size-[2rem] xl:size-[1.5rem]">
              <Image
                src={currencies[selectedCurrency].flag}
                alt={`${selectedCurrency} Flag`}
                title={`${selectedCurrency} Flag`}
                fill
                className="object-contain"
              />
            </div>
            <p
              className={`flex items-center  transition-all duration-150  ${
                home
                  ? scrolled
                    ? "text-[#292A76]  "
                    : "text-white  "
                  : "text-[#292A76]  "
              }`  }
            >
              {selectedCurrency} ({currencies[selectedCurrency]?.symbol})
            </p>
          </>
        ) : (
          <>
              <img
      src="/64.avif"
      alt="USD" title="USD"
      className="w-[20px] h-[20px] object-contain"
    />
          <span className="text-sm md:text-base pl-[4%]">
            {selectedCurrency}
          </span>
          </>
        )}
      </button>

      {mounted && open && createPortal(modalContent, document.body)}
    </>
  );
};

export default CurrencySelectorModal;
