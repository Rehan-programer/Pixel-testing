"use client";
import dynamic from "next/dynamic";
import { CurrencyContext, useRootLayout } from "./useRootLayout";
import { ModalProvider } from "@/common-components/providers/ModalContext";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/common-components/Header/CoderwireHeader";
import TrustPilot from "@/common-components/TrustPilot";
import ScrollBar from "@/common-components/ScrollBar";
import Scripts from "@/lib/Scripts/Scripts";
import MobileHeader, { CoderwireMobileHeader } from "@/common-components/Header/MobileHeader/CoderwireMobileHeader";
const ScrollToTop = dynamic(() => import("@/common-components/ScrollTOTop"), {
  ssr: false,
});
export default function ClientWrapper({ children, lang }) {
  const { currency, currencies, handleCurrencyChange, convertPrice, pathname } =
    useRootLayout();

  const pathnames = [
    "/free-trial",
    "/about-us",
    "/partnerships",
    "/property-manager",
    "/architects",
    "/builders",
    "/interior-designers",
    "/photographers",
    "/realtors",
    "/gallery",
  ];

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        currencies,
        handleCurrencyChange,
        convertPrice,
        symbol: currencies[currency]?.symbol || "",
      }}
    >
      <ModalProvider>
        <div
          className={` ${
            pathnames.includes(pathname)
              ? "mb-0"
              : " md:mb-[5rem] lg:mb-[3.5%] mb-[3rem]"
          }`}
        >
          <div className="w-full hidden xl:block fixed top-0 left-0 z-[4500] shadow-md">
            <Navbar lang={lang} />
          </div>
          <div className=" w-full block xl:hidden fixed top-0 left-0 z-[4500]  ">
            <CoderwireMobileHeader lang={lang}/>
          </div>
        </div>

        <ScrollBar />
        {children}
        <Footer lang={lang} />
        <TrustPilot />
      </ModalProvider>
      <ScrollToTop />
      <Scripts defer />
    </CurrencyContext.Provider>
  );
}
