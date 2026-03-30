"use client";
import dynamic from "next/dynamic";
import { CurrencyContext, useRootLayout } from "./useRootLayout";
import { ModalProvider } from "@/common-components/providers/ModalContext";
import Navbar from "@/common-components/Header/CoderwireHeader";

// ✅ Yeh sab lazy load karo
const Footer = dynamic(() => import("@/components/Footer/Footer"));

const TrustPilot = dynamic(() => import("@/common-components/TrustPilot"), {
  ssr: false,
});

const ScrollBar = dynamic(() => import("@/common-components/ScrollBar"), {
  ssr: false,
});

const ScrollToTop = dynamic(() => import("@/common-components/ScrollTOTop"), {
  ssr: false,
});

const CoderwireMobileHeader = dynamic(
  () =>
    import("@/common-components/Header/MobileHeader/CoderwireMobileHeader").then(
      (mod) => mod.CoderwireMobileHeader
    ),
  { ssr: false }
);

const Scripts = dynamic(() => import("@/lib/Scripts/Scripts"), {
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
          className={`${
            pathnames.includes(pathname)
              ? "mb-0"
              : "md:mb-[5rem] lg:mb-[3.5%] mb-[3rem]"
          }`}
        >
          {/* ✅ Desktop navbar - SSR rakhو taake layout shift na ho */}
          <div className="w-full hidden xl:block fixed top-0 left-0 z-[4500] shadow-md">
            <Navbar lang={lang} />
          </div>

          {/* ✅ Mobile navbar - lazy load */}
          <div className="w-full block xl:hidden fixed top-0 left-0 z-[4500]">
            <CoderwireMobileHeader lang={lang} />
          </div>
        </div>

        <ScrollBar />
        {children}
        <Footer lang={lang} />
        <TrustPilot />
      </ModalProvider>

      <ScrollToTop />
      <Scripts />  {/* ✅ already ssr:false hai dynamic mein */}
    </CurrencyContext.Provider>
  );
}