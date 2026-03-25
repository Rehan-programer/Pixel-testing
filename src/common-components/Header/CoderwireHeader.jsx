"use client";
import Image from "next/image";
import Link from "next/link";
import { useHeaderLogic } from "@/utils/useHeaderLogic";
import { getTranslations } from "@/lib/i18nLoader";
import { ChevronDown } from "lucide-react";
import HeaderDropdown from "./HeaderDropdown";
import ShortDropdown from "./ShortDropdown";
import LanguageSwitcher from "@/components/Header/LanguageSwitcher";
import CurrencySelectorModal from "../CurrencySelector";

export default function Navbar({ lang,  }) {
  const Sectiondata = getTranslations(lang, "header");

  const headerLogic = useHeaderLogic({ lang, Sectiondata });

  const {
    screenScrolled,
    isAtTop,setFilteredData,
    setIsServicesClicked,
    isServicesClicked,
    pathnames,handleFilteredData,
    pathname,
  } = headerLogic;
    const isHomePage = pathnames.includes(pathname);

  return (
    <>
      {/* HEADER */}
      <div   onMouseLeave={() => setIsServicesClicked(null)}
>

      <header className={` relative z-[5000] shadow-xs  lg:py-[4.5] 2xl:py-[0.6rem]  ${
          isHomePage
            ? isAtTop || !screenScrolled
              ? " bg-black/1 backdrop-blur-lg  shadow-none"
              : "bg-white shadow-md"
            : "bg-white shadow-md"
        }`}>
        {/* NAV CONTAINER */}
        <nav className="container-global  flex items-center justify-between py-2">

          {/* LOGO */}
          <Link href="/" title="Pixel Perfects Solutions LLC" className="flex items-center gap-2  w-[36%]" onMouseEnter={() => setIsServicesClicked(null)} >
            <Image
          src={
                isHomePage
                  ? isAtTop || !screenScrolled
                    ? "/Header LOGO white.webp"
                    : "/Header LOGO .webp"
                  : "/Header LOGO .webp"
              }
              alt="Pixel Perfects Solutions LLC"
              title="Pixel Perfects Solutions LLC"
              width={160}
              height={60}
              className="mx-auto lg:mx-0 w-[10rem] lg:w-[8rem] 2xl:w-[12rem] "
              priority
            />
          </Link>



          {/* RIGHT BUTTON */}
          {/* SIDE BUTTON (DESKTOP) */}
          <div className=" hidden lg:flex items-center gap-x-[2rem] " >
            <div className="hidden md:flex items-center md:gap-4 lg:gap-6 xl:gap-8  text-[#2b2b2b]">
        {Sectiondata?.map(({ labelName }) => {

  const isActive = isServicesClicked === labelName;

  const baseColor = isHomePage
    ? (isAtTop || !screenScrolled)
      ? (isActive ? "text-[#0ccfaa]" : "text-white")
      : (isActive ? "text-[#0ccfaa]" : "text-[#292A76]")
    : (isActive ? "text-[#0ccfaa]" : "text-[#292A76]");

  return (
    <div key={labelName} className="relative">
      <button
        className={`group flex items-center space-x-1 cursor-pointer transition-colors duration-300 ${baseColor}`}
        onMouseEnter={() => {
          setFilteredData(labelName);
          setIsServicesClicked(labelName);
        }}
      >

        {/* LABEL */}
        <h6 className={`text-body1 group-hover:text-[#0ccfaa] ${baseColor}`}>
          {labelName}
        </h6>

        {/* ICON */}
        <ChevronDown
          className={`w-[0.7vw] h-[0.7vw] 2xl:w-[1rem] transition-all duration-300
            ${isActive ? "rotate-180 text-[#0ccfaa]" : ""}
            group-hover:rotate-180 group-hover:text-[#0ccfaa]
          `}
        />

      </button>
    </div>
  );
})}
            </div>
                 <Link  title="Dashboard"
              href="https://portal.pxlperfects.com/dashboard" onMouseEnter={() => setIsServicesClicked(false)}
              target="_blank"
              className={` ${
                isHomePage
                  ? isAtTop || !screenScrolled
                    ? "btn-white  "
                    : "btn-header  "
                  : "btn-header  "
              }`}
            >
              Dashboard
            </Link>
            <CurrencySelectorModal home={isHomePage} scrolled={!isAtTop || screenScrolled} />
            <LanguageSwitcher />
        
          </div>

        </nav>
      </header>
          {isServicesClicked && (
             <div
          className=" hidden xl:block"
   onMouseEnter={() => setIsServicesClicked(isServicesClicked)}
onMouseLeave={() => setIsServicesClicked(null)}
        >
         {
        handleFilteredData?.subPages?.length > 0 ? (
          <HeaderDropdown
            menuOpen={isServicesClicked}
            setMenuOpen={setIsServicesClicked}
            filteredData={handleFilteredData?.subPages || []}
          />
        ) : (
          <ShortDropdown
         menuOpen={isServicesClicked}
            setMenuOpen={setIsServicesClicked}
            filteredData={handleFilteredData || []}
         
          />
        )
      }
      </div>)}
      </div>


    </>
  );
}
