"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import {
  ArrowRightIcon,
  Box,
  ChevronDownIcon,
  ChevronLeftIcon,
  CircleX,
  ClosedCaptionIcon,
  MenuIcon,
  Zap,
} from "lucide-react";
import CurrencySelectorModal from "@/common-components/CurrencySelector";
import LanguageSwitcher from "@/components/Header/LanguageSwitcher";

export default function MobileMenu({ Sectiondata, home,scrolled, }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // selected menu
  const [backButton, setBackButton] = useState(false); // show back button
  const [openCategory, setOpenCategory] = useState(null); // track which category dropdown is open

  // Lock / Unlock Scroll
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const toggleCategory = (name) => {
    setOpenCategory((prev) =>
      prev === name.labelName ? null : name.labelName,
    );
  };
  useEffect(() => {
    if (activeMenu?.subPages?.length === 1) {
      setOpenCategory(activeMenu.subPages[0].labelName);
    } else {
      setOpenCategory(null);
    }
  }, [activeMenu]);

  return (
    <>
      {/* MENU BUTTON */}

      <button onClick={() => setMenuOpen(true)} className=" p-2">
        <MenuIcon className={`w-7 h-7 ${home?scrolled?"text-[#292a76]":"text-[#fff]":"text-[#292a76]"}`} />
      </button>

      {/* BACKDROP */}
      <div
        onClick={() => setMenuOpen(false)}
        className={clsx(
          " fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-[4000]",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      />

      {/* SLIDING DRAWER */}
      <div
        className={clsx(
          "fixed top-0 right-0 h-full  w-full  bg-[#fafafa] z-[4001] shadow-xl",
          "transition-transform duration-500 ease-[cubic-bezier(.25,.8,.25,1)]",
          menuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-4 relative">
          {/* LEFT: Back button */}
          {activeMenu && backButton && (
            <button
              onClick={() => {
                setActiveMenu(null);
                setBackButton(false);
                setOpenCategory(null);
              }}
              className="flex items-center text-black font-medium text-[18px]"
            >
              <ChevronLeftIcon className="w-7 h-7 mr-1 text-gray-500" /> Back
            </button>
          )}

          {/* CENTER: Logo */}
          <Image
            src={"/Header LOGO .webp"}
            alt="Pixel Perfects Solutions LLC"
            title="Pixel Perfects Solutions LLC"
            width={160}
            height={60}
            className=" w-[12rem] "
            priority
          />

          {/* RIGHT: Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="text-[#00cfaa]  transition "
          >
            <CircleX className="size-8" />
          </button>
        </div>

        {/* MENU LIST 1 */}
        <div className="px-3 overflow-y-auto h-full">
          {/* MAIN SIDEBAR */}
          {!activeMenu &&
            Sectiondata.map((menu) => (
              <div key={menu.labelName} className="mb-2 rounded-lg ">
                <button
                  onClick={() => {
                    setActiveMenu(menu);
                    setBackButton(true);
                  }}
                  className="flex justify-between items-center w-full py-3 px-4"
                >
                  <span className="font-medium text-black text-[17px]">
                    {menu.labelName}
                  </span>
                  <ArrowRightIcon className="w-[1.4rem] h-[1.4rem] text-[#292a76] transition-transform" />
                </button>
              </div>
            ))}

          {!activeMenu && (
            <div className="w-[94%] mx-auto">
              <div className="flex justify-between  gap-4 mb-[1rem] ">
                <Link title="Dashboard"
                  href="https://portal.pxlperfects.com/dashboard"
                   onClick={() => setMenuOpen(false)}
                  target="_blank " className="w-full"
                >
                  <button  
                  className={`btn-header text-[1rem] w-full text-center`}
                  >
                     
                  Dashboard
                  </button>
                </Link>
                <div  className="w-full" onClick={() => setMenuOpen(false)}>
                <LanguageSwitcher full={true}/>
                </div>
              </div>
                <Link  title="Let's Talk"  onClick={() => setMenuOpen(false)}
                  href="/contact-us"
  
                >
                  <button className="btn-slider w-full  text-[1rem]  text-center">
                  Let's Talk
                  </button>
                </Link>
            </div>
          )}
          {activeMenu && (
            <div className="transition-all duration-300">
              {activeMenu?.subPages?.length > 1 && (
                <p className="ml-4 mb-2 text-[1rem] font-bold  border-b-2 border-[#00cfaa] inline-flex">
                  {activeMenu?.labelName}:
                </p>
              )}{" "}
              {activeMenu?.subPages?.length > 0
                ? activeMenu?.subPages?.map((category) => (
                    <div
                      key={category.labelName}
                      className="mb-2 rounded-lg transition-all duration-300"
                    >
                      {/* Category Row */}
                      <div
                        onClick={() => toggleCategory(category)}
                        className="flex justify-between items-center px-4 py-3 cursor-pointer"
                      >
                        {/* Always show p tag (NO LINK HERE) */}
                        <p className="text-black font-semibold text-[0.95rem] !mb-0">
                          {category.labelName}
                        </p>

                        {/* Chevron if has submenu */}
                        {category.fields?.length > 0 && (
                          <ChevronDownIcon
                            className={clsx(
                              "w-5 h-5 text-black transition-transform",
                              openCategory === category.labelName
                                ? "rotate-180"
                                : "rotate-0",
                            )}
                          />
                        )}
                      </div>

                      {/* Nested submenu 3 */}
                      {category.fields?.length > 0 &&
                        openCategory === category.labelName && (
                          <div className="px-4 md:px-8 pb-3 transition-all duration-300">
                            <div className="md:grid md:grid-cols-2">
                              {(category?.fields ?? []).map((item) => (
                                <div
                                  key={item?.fieldName}
                                  className="flex gap-5 mt-4 mb-8"
                                >
                                  <div className="size-[5rem] bg-[#afece341] group-hover:bg-[#ffffff] flex items-center justify-center rounded-[6px] flex-shrink-0 group-hover:scale-105 transition-transform">
                                    <div className="relative size-[3rem]  aspect-square">
                                      <Image
                                        src={item.icon}
                                        alt="logos"
                                        fill
                                        className="object-contain"
                                        loading="lazy"
                                      />
                                    </div>{" "}
                                  </div>

                                  <div>
                                    <Link title={item?.fieldName}
                                      href={item?.fieldRoute}
                                      onClick={() => setMenuOpen(false)}
                                      className="text-[1rem] hover:text-[#0486ff] transition font-semibold"
                                    >
                                      {item?.fieldName}
                                    </Link>

                                    <p className="text-black !mb-0 py-2">
                                      {item.hoverDetail}
                                    </p>

                                    <Link title={"Explore Now"}
                                      href={item.fieldRoute}
                                      onClick={() => setMenuOpen(false)}
                                      className="underline underline-offset-2 text-[0.85rem] font-semibold"
                                    >
                                      Explore Now
                                    </Link>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                    </div>
                  ))
                : activeMenu?.fields?.map((item) => (
                    <div key={item?.fieldName} className="flex gap-5 mt-4 mb-8">
                      <div className="size-[5rem] bg-[#afece341] group-hover:bg-[#ffffff] flex items-center justify-center rounded-[6px] flex-shrink-0 group-hover:scale-105 transition-transform">
                        <div className="relative size-[3rem]  aspect-square">
                          <Image
                            src={item.icon}
                            alt="logos"
                            fill
                            className="object-contain"
                            loading="lazy"
                          />
                        </div>{" "}
                      </div>

                      <div>
                        <Link title={item?.fieldName}
                          href={item?.fieldRoute}
                          onClick={() => setMenuOpen(false)}
                          className="text-[1rem] hover:text-[#0486ff] transition font-semibold"
                        >
                          {item?.fieldName}
                        </Link>

                        <p className="text-black !mb-0 py-2">
                          {item.hoverDetail}
                        </p>

                        <Link title="Explore Now"
                          href={item.fieldRoute}
                          onClick={() => setMenuOpen(false)}
                          className="underline underline-offset-2 text-[0.85rem] font-semibold"
                        >
                          Explore Now
                        </Link>
                      </div>
                    </div>
                  ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
