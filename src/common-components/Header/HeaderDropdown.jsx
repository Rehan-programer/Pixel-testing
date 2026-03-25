"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRightIcon, Zap, ChevronRight, ArrowUpRight } from "lucide-react";
// import ContactButton from '../ContactButton';
import Image from "next/image";

const HeaderDropdown = ({
  setMenuOpen,
  menuOpen,
  filteredData,
}) => {
  const [activeTab, setActiveTab] = useState(filteredData[0]?.labelName);
  useEffect(() => {
    if (filteredData?.length > 0) {
      setActiveTab(filteredData[0].labelName);
    }
  }, [filteredData]);

  if (!filteredData?.length) return null;

  const activeSection = filteredData?.find(
    (section) => section.labelName === activeTab,
  );


  return (
    <>
      {filteredData?.length > 0 && (
        <div
          className="animate__animated animate__slideInDown hidden lg:block fixed w-[80%] h-auto right-0 left-0 lg:top-[4.5vw] 2xl:top-[5rem] mx-auto bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden font-sans z-[1000]"
        >
          <div className="flex  flex-col lg:flex-row  ">
             {menuOpen !== "Resources" && menuOpen !== "Explore"  && (
               <>
               {/* LEFT SIDEBAR */}
            <aside className="w-full lg:w-[25%] bg-[#e9ffff] p-[1vw] border-r-2 border-gray-100  flex-shrink-0">
              {menuOpen === "Services" ? (
                <Link
                  href="/services"
                  className="font-semibold hover:text-[#00cfaa]  w-fit transition-all duration-300 ease-in-out pb-[0.5vw] block underline"
                  title="Services"
                >
                  {menuOpen}
                </Link>
              ) : (
                <p className="font-semibold pb-[0.5vw]">{menuOpen}</p>
              )}

              <nav className="space-y-3">
                {filteredData?.map((section, i) => {
                  const hasChildren = section?.fields?.length > 0;
                  const isActive = activeTab === section.labelName;

                  return (
                    <div
                      key={i}
                      onMouseEnter={() => setActiveTab(section.labelName)}
                      onClick={() => setActiveTab(section.labelName)}
                      className={` flex items-center cursor-pointer rounded-md lg:p-2 2xl:px-3 2xl:py-3 text-2xl group
                                                        ${hasChildren ? "w-[52%] lg:w-[100%]" : "w-full"}
                                                        ${isActive ? "bg-[#00cfaa] text-white font-bold" : "bg-transparent text-[#2b2b2b]"} transition-colors duration-400 ease-in-out`}
                    >
                      <h6
                        className={`
              w-full inline-block text-[0.8vw] font-semibold
              ${isActive ? "text-white" : "group-hover:text-[#146ef5]"}
              transition-colors duration-300 ease-in-out
            `}
                      >
                        {section.labelName}
                      </h6>
                      <ChevronRight
                        className={`
              w-[1.4vw] h-[1.4vw]
              ${isActive ? "text-white" : "text-[#292a76] "}
              transition-colors duration-300 ease-in-out
              group-hover:translate-x-1
            `}
                      />
                    </div>
                  );
                })}
              </nav>
            </aside>
            </>
)}

            {/* RIGHT CONTENT */}
            <main className="flex-1 flex flex-col bg-[#99c9ff1f]">
              <div className=" py-[1vw] px-[2vw] min-h-[20vw] ">
                {activeSection ? (
                  <>
                    {activeSection.link ? (
                      <Link title={activeSection.labelName}
                        href={`/${activeSection.link}`}
                        onClick={() => setMenuOpen(false)}
                        className="group no-underline flex items-center gap-x-4"
                      >
                        <h2 className="text-[1vw]  text-[#292a76]  group-hover:text-[#00cfaa] transition">
                          {activeSection.labelName}
                        </h2>
                        <ArrowRightIcon className="size-[1.4vw] text-[#00cfaa] transition-transform duration-200 group-hover:translate-x-2" />
                      </Link>
                    ) : (
                      <h2 className="text-[1vw] text-[#292a76] ">
                        {activeSection.labelName}
                      </h2>
                    )}
                    {activeSection.fields?.length > 0 ? (
                      <div className="grid grid-cols-1 lg:grid-cols-2 mt-[0.75vw]  gap-x-[1.5vw] gap-y-[0.5vw]">
                        {activeSection.fields?.map((item, index) => (
                          <Link title={item.fieldRoute}
                            key={index}
                            href={item.fieldRoute || "#"}
                            onClick={() => setMenuOpen(false)}
                            className="relative group flex gap-x-[1vw] items-start cursor-pointer no-underline  px-[0.5vw] py-[0.75vw] rounded-md transition-all duration-200 hover:bg-[#cde5ff52]  border border-transparent hover:border-slate-100"
                          >
                            <div className=" bg-[#f1fffd] group-hover:bg-[#ffffff] p-[0.5vw] flex items-center justify-center rounded-md shrink-0 transition-transform">
                              <div className="relative w-[2vw] h-[2vw]  aspect-square">
                                <Image
                                  src={item.icon}
                                  alt="logos"
                                  fill
                                  className="object-contain"
                                  loading="lazy"
                                />
                              </div>
                            </div>
                            <div>
                              <h4 className="text-[0.8vw] font-semibold text-slate-800 transition-colors group-hover:text-[#00cfaa]">
                                {item.fieldName}
                              </h4>
                              <p className="text-[0.7vw] w-[90%] pt-[0.3vw]  text-slate-500 ">
                                {item.hoverDetail}
                              </p>
                            </div>

                            <ArrowUpRight className="size-[1.2vw] absolute right-[4%] group-hover:text-[#00cfaa]" />
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <p className="text-slate-400 italic">
                        Content details coming soon...
                      </p>
                    )}
                  </>
                ) : (
                  <p className="text-slate-400 italic">
                    Select a tab to see content
                  </p>
                )}
              </div>
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderDropdown;
