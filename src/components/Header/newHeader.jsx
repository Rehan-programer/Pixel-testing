"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import HeaderDropdown from "./dropdown";

export default function Header({ data }) {

  const timeoutRef = useRef(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredData = data?.find(item => item.name === menuOpen);

  const handleMenuClick = (name) => {
    setMenuOpen((prev) => (prev === name ? null : name));
  };

  const activeMenuData = data?.find(
    (item) =>
      (item.mainHeading || item.labelName) === activeMenu
  );

  // OPEN MENU
  const openMenu = (menu) => {
    clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  // CLOSE WITH DELAY (prevents flicker)
  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  return (
    <div className="header-wrapper">

      {/* HEADER BAR */}
      <div className="header-inner">

        {/* LEFT SIDE - LOGO */}
        <div className="header-left">
          <img src="/logo.png" alt="logo" className="logo" />
        </div>

        {/* CENTER - MENU */}
        <div className=" hidden lg:flex items-center gap-x-[2rem] " onMouseEnter={() => setMenuOpen(null)}>
          <div className="hidden md:flex items-center md:gap-4 lg:gap-6 xl:gap-8  text-[#2b2b2b]">
            {data?.map((item, index) => {

              const title = item.mainHeading || item.labelName;

              return (
                <div key={index} className="relative">
                  <button
                    className="flex items-center gap-2 cursor-pointer lg:text-[0.8rem] 2xl:text-[1.1rem]"
                    onMouseEnter={() => setActiveMenu(title)}
                  >
                    <Link href={item.link || "#"} title={title}>{title}</Link>

                    <Image
                      src="/Vector(4).png"
                      alt="arrow"
                      width={10}
                      height={5}
                      className={`transition-transform duration-300 ${activeMenu === title ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>
              );
            })}
          </div>
          {/* <div onMouseEnter={() => setMenuOpen(null)}>
            <Search />
          </div> */}


          {/* {sideButton?.name && (
            <Link href={sideButton?.link || "/contact"} onMouseEnter={() => setMenuOpen(null)}>
              <ContactButton label={sideButton.name} onMouseEnter={() => setMenuOpen(null)} />
            </Link>
          )} */}
        </div>
      </div>
      {/* MEGA MENU */}
      {activeMenuData &&
        (
          (activeMenuData.subServices?.length > 0) ||
          (activeMenuData.fields?.length > 0)
        ) && (
          <div
            className="mega-wrapper"
            onMouseEnter={() => clearTimeout(timeoutRef.current)}
            onMouseLeave={closeMenu}
          >
            <HeaderDropdown menu={activeMenuData} />
          </div>
        )}
    </div>
  );
}
