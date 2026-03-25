"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { useHeaderLogic } from "@/utils/useHeaderLogic";
import { getTranslations } from "@/lib/i18nLoader";
import CurrencySelectorModal from "@/common-components/CurrencySelector";
import LanguageSwitcher from "./LanguageSwitcher";
import PageContent from "./HeaderDropdown";
import MobileDrawerButton from "./MobileDrawerButton";
import MobileDrawer from "./MobileDrawer";
// import PageContent from "./PageContent";

export default function Navbar({ lang }) {
  const Sectiondata = getTranslations(lang, "header");
  const footerData = getTranslations(lang, "footer");

  const headerLogic = useHeaderLogic({ lang, Sectiondata });

  const {
    screenScrolled,
    isAtTop,
    filteredData,
    setIsServicesClicked,
    paths,
    isServicesClicked,
    open,
    setOpen,
    dropdownPosition,
    pathnames,
    pathname,
    handleFilterData,
    tabRefs,
  } = headerLogic;

  const isHomePage = pathnames.includes(pathname);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-3000 py-[0.8%] 2xl:py-[1rem] transition-all duration-500  ${
          isHomePage
            ? isAtTop || !screenScrolled
              ? " bg-black/1 backdrop-blur-lg  shadow-none"
              : "bg-white shadow-md"
            : "bg-white shadow-md"
        }`}
      >
        <div className="container-global py-0 flex items-center justify-between ">
          {/* LOGO */}
          <Link href="/" title="Pixel Perfects Solutions LLC" onMouseEnter={() => setIsServicesClicked(false)}>
            <Image
              src={
                isHomePage
                  ? isAtTop || !screenScrolled
                    ? "/Header LOGO white.webp"
                    : "/Header LOGO .webp"
                  : "/Header LOGO .webp"
              }
              alt="Pixel Perfects Solutions LLC"
              width={160}
              height={60}
              className="mx-auto lg:mx-0 w-[10rem] lg:w-[8rem] 2xl:w-[12rem] "
              priority
            />
          </Link>
          <div className=" flex   items-center justify-end  xl:hidden">
           <CurrencySelectorModal  home={isHomePage} scrolled={!isAtTop || screenScrolled} />
            {/* Mobile Menu Button */}
            <MobileDrawerButton
              isOpen={open}
              onClick={() => setOpen(!open)}
              footerData={footerData} 
              scrolled={isAtTop && !screenScrolled} 
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:inline-flex items-center justify-end space-x-6 whitespace-nowrap w-full" >
            {paths?.map(({ title }) => (
              <div
                key={title}
                ref={(el) => (tabRefs.current[title] = el)}
                className={` group flex items-center space-x-1 cursor-pointer transition-colors duration-300 ${
                  isHomePage
                    ? isAtTop || !screenScrolled
                      ? "text-white"
                      : "text-[#292a76]"
                    : "text-[#292a76]"
                }`}
                onMouseEnter={() => {
                  handleFilterData(title);
                  setIsServicesClicked(true);
                }}
              >
                <h6 className={`group-hover:text-[#0ccfaa] text-body1 ${
                  isHomePage
                    ? isAtTop || !screenScrolled
                      ? "text-white"
                      : "text-[#292A76]"
                    : "text-[#292A76]"
                }`}>{title}</h6>
                <ChevronDown
                  className={`w-[0.7vw] h-[0.7vw] 2xl:w-[1rem] transition-transform duration-300 group-hover:rotate-180 group-hover:text-[#0ccfaa]`}
                />
              </div>
            ))}
            <Link title="Dashboard"
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
            <LanguageSwitcher />

            <CurrencySelectorModal home={isHomePage} scrolled={!isAtTop || screenScrolled} />
          </div>
        </div>
      </nav>
      <MobileDrawer
        open={open}
        toggleDrawer={() => setOpen(!open)}
        data={Sectiondata}
        footerData={footerData}
        paths={paths}
      />

      {isServicesClicked && (
        <div
          className=" hidden xl:block"
          onMouseEnter={() => setIsServicesClicked(true)}
          onMouseLeave={() => setIsServicesClicked(false)}
        >
          <PageContent
            isServicesClicked={isServicesClicked}
            setIsServicesClicked={setIsServicesClicked}
            data={filteredData}
            lang={lang}
            position={dropdownPosition}
          />
        </div>
      )}
    </>
  );
}
