"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useHeaderLogic } from "@/utils/useHeaderLogic";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

const MobileDrawer = ({ open, toggleDrawer, data, footerData }) => {
  const { handleAccordionChange, expanded } = useHeaderLogic(data);
  const icons = {
    Facebook: <Facebook className="text-white w-5 h-5 md:w-[clamp(0.9rem,1.2vw,1.5rem)]" />,
    Instagram: <Instagram className="text-white w-5 h-5 md:w-[clamp(0.9rem,1.2vw,1.5rem)]" />,
    LinkedIn: <Linkedin className="text-white w-5 h-5 md:w-[clamp(0.9rem,1.2vw,1.5rem)]" />,
  };

  return (
    <div
      className={`fixed top-[7vh] z-[9999] px-[1rem] left-0 w-full lg:w-[50%] lg:left-[50%] lg:top-[5vh] h-[93vh]  overflow-y-auto bg-white 
        transform transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] 
        ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} xl:hidden`}
      style={{
        background:
          "linear-gradient(360deg, rgba(13,21,131,1) 0%, rgba(169,252,237,1) 0%, rgba(255,255,255,1) 100%)",
      }}
    >
      <div className="w-[96%] mx-auto py-4 scrollbar-hide">
        {/* 🔹 First Two Accordions */}
        {data.slice(0, 2).map((item, index) => (
          <div key={index} className="mb-3 ">
            <button
              onClick={() => handleAccordionChange(item.labelName)()}
              className={`flex justify-between rounded-[0.45rem] items-center w-full py-4 px-2 text-[#292a76] font-semibold text-md 
                transition-all duration-300 
                ${expanded === item.labelName ? "bg-[#e1f3fe]" : "bg-transparent"}`}
            >
              {item.labelName === "Residential Real Estate"
                ? "Virtual Staging & Renovation"
                : item.labelName}

              <ChevronDown
                size={22}
                className={`transition-transform duration-300 ${expanded === item.labelName ? "rotate-180" : "rotate-0"
                  }`}
              />
            </button>

            {/* Accordion animation */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden 
                ${expanded === item.labelName
                  ? "max-h-[500px] opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-3"
                }`}
            >
              <div className="pl-3 py-3">
                {item.fields.slice(0, 5).map((fieldItem, fieldIndex) => (
                  <Link title={fieldItem.fieldName}
                    key={fieldIndex}
                    href={fieldItem.fieldRoute || "#"}
                    onClick={toggleDrawer}
                    className="flex items-center gap-3 py-2 text-[#292a76] transition-transform duration-300 hover:translate-x-2"
                  >
                    <Image
                      src={fieldItem.icon}
                      alt="icon"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                    <span className="font-medium text-[0.8rem]">
                      {fieldItem.fieldName}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* 🔹 "More" Accordion */}
        <div className="mb-3 ">
          <button
            onClick={() => handleAccordionChange("More")()}
            className={`flex justify-between items-center w-full  rounded-[0.45rem] py-4 px-2 text-[#292a76] font-semibold text-md 
              transition-all duration-300 
              ${expanded === "More" ? "bg-[#e1f3fe]" : "bg-transparent"}`}
          >
            More
            <ChevronDown
              size={22}
              className={`transition-transform duration-300 ${expanded === "More" ? "rotate-180" : "rotate-0"
                }`}
            />
          </button>

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden 
              ${expanded === "More"
                ? "max-h-[1000px] opacity-100 translate-y-0"
                : "max-h-0 opacity-0 -translate-y-3"
              }`}
          >
            {data.slice(2, 5).map((item, index) => (
              <div key={index} className="my-2 ">
                <h4 className="font-semibold text-[#292a76] text-base px-3">
                  {item.labelName}
                </h4>

                <div className="grid grid-cols-2 w-[96%] mx-auto mt-2">
                  {item.fields.map((fieldItem, fieldIndex) => (
                    <Link title={fieldItem.fieldName}
                      href={fieldItem.fieldRoute || "#"}
                      key={fieldIndex}
                      className="flex items-center gap-3 py-2 text-[#292a76] transition-transform duration-300 hover:translate-x-2"
                      onClick={toggleDrawer}
                    >
                      <Image
                        src={fieldItem.icon}
                        alt="icon"
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                      <h4 className="font-medium text-[0.8rem]">
                        {fieldItem.fieldName}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 Remaining Accordions */}
        {data.slice(6, 10).map((item, index) => (
          <div key={index} className="mb-3 ">
            <button
              onClick={() => handleAccordionChange(item.labelName)()}
              className={`flex justify-between items-center rounded-[0.45rem] w-full py-4 px-2 text-[#292a76] font-semibold text-md 
                transition-all duration-300 
                ${expanded === item.labelName ? "bg-[#e1f3fe]" : "bg-transparent"}`}
            >
              {item.labelName === "Residential Real Estate"
                ? "Virtual Staging & Renovation"
                : item.labelName}
              <ChevronDown
                size={22}
                className={`transition-transform duration-300 ${expanded === item.labelName ? "rotate-180" : "rotate-0"
                  }`}
              />
            </button>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden 
                ${expanded === item.labelName
                  ? "max-h-[600px] opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-3"
                }`}
            >
              <div className="pl-3 py-3">
                {item.fields.slice(0, 10).map((fieldItem, fieldIndex) => (
                  <Link title={fieldItem.fieldName}
                    href={fieldItem.fieldRoute || "#"}
                    key={fieldIndex}
                    className="flex items-center pl-2 gap-3 py-2 text-[#292a76] transition-transform duration-300 hover:translate-x-2"
                    onClick={toggleDrawer}
                  >
                    <Image
                      src={fieldItem.icon}
                      alt="icon"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                    <span className="font-medium text-[0.8rem]">
                      {fieldItem.fieldName}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
        <Link onClick={toggleDrawer} title={"Dashboard"}
          href="https://portal.pxlperfects.com/dashboard"
          target="_blank"
          className="btn-header w-full block text-center mb-4 text-[1rem]"
        >
          Dashboard
        </Link>
        <div onClick={toggleDrawer}>
          <LanguageSwitcher open={open} />
        </div>

        {/* 🔹 Footer */}
        <div className=" absolute bottom-6  left-50">
          <div className="flex justify-between  lg:w-[30rem] items-center">
            <h3 className="text-[1rem] font-semibold ">
              Follow Us On Social Media
            </h3>
            <div className="flex justify-center lg:justify-center gap-3 my-4">
              {footerData?.socialIconsMainHomePage?.map((item, i) => (
                <Link
                  key={i}
                  href={item.link} title={item.name}
                  target="_blank"
                  aria-label={`Go to ${item.name}`}
                  className="bg-[#00cfaa] rounded-full p-2 lg:p-[1%] flex items-center justify-center w-[clamp(2rem,4vw,2.5rem)] h-[clamp(2rem,4vw,2.5rem)]"
                >
                  {icons[item.icon] || <span>{item.icon}</span>}
                </Link>
              ))}
            </div>
          </div>

          <p className="text-center ">
            © 2024 Designed with Passion by{" "}
            <Link title="Pixel Perfects Solution LLC"
              href="https://www.pxlperfects.com/"
              className="underline font-bold"
              target="_blank"
            >
              Pixel Perfects Solutions LLC
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;
