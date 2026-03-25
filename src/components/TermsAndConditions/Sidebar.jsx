"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import MobileDrawerButton from "../Header/MobileDrawerButton";

const Sidebar = ( {data} ) => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setOpen((prev) => !prev);
  };



  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // disable body scroll
    } else {
      document.body.style.overflow = "auto"; // enable scroll
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      {/* Mobile Drawer Toggle Button */}
      <div className=" sticky items-start top-[8.5%]  right-2 z-50">
        <MobileDrawerButton isOpen={open} onClick={toggleSidebar} />
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-30 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
         onClick={() => setOpen(false)} 
      ></div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`
          fixed top-[18.3%]  right-0 h-[70vh] w-72 z-40 p-4 overflow-y-auto
          transform transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          lg:static lg:block lg:w-1/4 lg:h-auto lg:shadow-none
          ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
        `}
        style={{
          background:
            "linear-gradient(360deg, rgba(13,21,131,1) 0%, rgba(169,252,237,1) 0%, rgba(255,255,255,1) 100%)",
        }}
      >
        <h3 className="font-semibold mb-4 text-center text-[#292a76]">
          Table of Contents
        </h3>

        <div className="flex flex-col gap-1">
          {data?.Policydata?.map((section) => (
            <p key={section.id} className="flex items-center gap-2 my-2">
              <Link title={section.heading}
                href={`#${section.id}`}
                 onClick={() => setOpen(false)} 
                className="text-[#292a76] font-bold transition-transform duration-300 hover:translate-x-2"
              >
                {section.heading}
              </Link>
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
