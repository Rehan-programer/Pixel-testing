"use client";
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRightIcon, Zap, ChevronRight } from 'lucide-react';
// import ContactButton from '../ContactButton';
import Image from 'next/image';

const HeaderDropdown = ({ setMenuOpen, menuOpen, filteredData, sideButton }) => {
    const menuRef = useRef(null);
    const [activeTab, setActiveTab] = useState("");
    const normalizedMenu = React.useMemo(() => {

        useEffect(() => {
            if (normalizedMenu?.submenu?.length) {
                setActiveTab(normalizedMenu.submenu[0].name);
            }
        }, [normalizedMenu]);

        if (!filteredData) return null;

        // SERVICES TYPE
        if (filteredData.subServices?.length) {
            return {
                submenu: filteredData.subServices.map(section => ({
                    name: section.labelName,
                    link: null,
                    submenu: section.fields?.map(field => ({
                        id: field.fieldName,
                        name: field.fieldName,
                        link: field.fieldRoute
                    }))
                }))
            };
        }

        // SIMPLE FIELDS TYPE
        if (filteredData.fields?.length) {
            return {
                submenu: [{
                    name: filteredData.mainHeading || filteredData.labelName,
                    link: null,
                    submenu: filteredData.fields.map(field => ({
                        id: field.fieldName,
                        name: field.fieldName,
                        link: field.fieldRoute
                    }))
                }]
            };
        }

        return null;

    }, [filteredData]);

    // Handle body scroll
    useEffect(() => {
        const handleBodyScroll = () => {
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

            if (menuOpen) {
                // Lock scroll
                document.body.style.overflow = "hidden";
                document.body.style.paddingRight = `${scrollBarWidth}px`;

                // Fix header shift
                const header = document.querySelector("header"); // ya aapka fixed header selector
                if (header) header.style.paddingRight = `${scrollBarWidth}px`;
            } else {
                document.body.style.overflow = "";
                document.body.style.paddingRight = "0px";

                const header = document.querySelector("header");
                if (header) header.style.paddingRight = "0px";
            }
        };

        handleBodyScroll();

        return () => {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "0px";

            const header = document.querySelector("header");
            if (header) header.style.paddingRight = "0px";
        };
    }, [menuOpen]);
    // Set default active tab
    useEffect(() => {
        if (filteredData?.submenu?.length > 0) {
            setActiveTab(normalizedMenu?.submenu[0].name);
        }
    }, [filteredData]);
    // Handle mouse leave
    useEffect(() => {
        const el = menuRef.current;
        if (!el) return;
        const handleLeave = (e) => {
            // If the pointer moves to *any element outside the dropdown*
            if (!el.contains(e.relatedTarget)) {
                setMenuOpen(null);
            }
        };
        el.addEventListener("pointerleave", handleLeave);
        return () => {
            el.removeEventListener("pointerleave", handleLeave);
        };
    }, [menuOpen]);
    if (!filteredData?.submenu?.length) return null;

    const activeSection = normalizedMenu?.submenu.find(
        (section) => section.name === activeTab
    );

    return (
        <>
            {filteredData?.submenu?.length > 0 && (
                <div
                    ref={menuRef}
                    className="animate-slideInDown hidden lg:block fixed w-[80%] h-auto right-0 left-0 lg:top-[4.5vw] 2xl:top-[4.9rem] mx-auto bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden font-sans z-[1000]"
                >
                    <div className="flex  flex-col lg:flex-row  ">
                        {/* LEFT SIDEBAR */}
                        <aside className="w-full lg:w-[25%] bg-[#e9ffff] p-[1vw] border-r-2 border-gray-100  flex-shrink-0">
                            <p className='font-semibold pb-[0.5vw]'>{menuOpen}</p>
                            <nav className="space-y-3">
                                {normalizedMenu?.submenu.map((section, i) => {
                                    const hasChildren = section?.submenu?.length > 0;
                                    const isActive = activeTab === section.name;

                                    return (
                                        <div
                                            key={i}
                                            onMouseEnter={() => setActiveTab(section.name)}
                                            onClick={() => setActiveTab(section.name)}
                                            className={` flex cursor-pointer rounded-md lg:p-2 2xl:px-3 2xl:py-3 text-2xl group
                                                        ${hasChildren ? "w-[52%] lg:w-[100%]" : "w-full"}
                                                        ${isActive ? "bg-[#146ef5] text-white font-bold" : "bg-transparent text-[#2b2b2b]"} transition-colors duration-400 ease-in-out`}
                                        >
                                            <h6
                                                className={`
              w-full inline-block text-[1vw] font-semibold
              ${isActive ? "text-white" : "group-hover:text-[#146ef5]"}
              transition-colors duration-300 ease-in-out
            `}
                                            >
                                                {section.name}
                                            </h6>
                                            <ChevronRight
                                                className={`
              w-[1.4vw] h-[1.4vw]
              ${isActive ? "text-white" : "text-[#2b2b2b] group-hover:text-[#146ef5]"}
              transition-colors duration-300 ease-in-out
              group-hover:translate-x-1
            `}
                                            />
                                        </div>
                                    );
                                })}
                            </nav>
                        </aside>


                        {/* RIGHT CONTENT */}
                        <main className="flex-1 flex flex-col ">
                            <div className=" py-[1vw] px-[2vw] min-h-[20vw] ">
                                {activeSection ? (
                                    <>
                                        {activeSection.link ? (
                                            <Link title={activeSection.name}
                                                href={`/${activeSection.link}`}
                                                onClick={() => setMenuOpen(false)}
                                                className="group no-underline flex items-center gap-x-4"
                                            >
                                                <h2 className="text-[1.25vw]  text-slate-800  group-hover:text-[#0486ff] transition">
                                                    {activeSection.name}
                                                </h2>
                                                <ArrowRightIcon
                                                    className="size-[1.4vw] text-[#0486ff] transition-transform duration-200 group-hover:translate-x-2"
                                                />
                                            </Link>
                                        ) : (
                                            <h2 className="text-[1.25vw] text-slate-800 ">
                                                {activeSection.name}
                                            </h2>
                                        )}
                                        {activeSection.submenu?.length > 0 ? (
                                            <div className="grid grid-cols-1 lg:grid-cols-2 mt-[0.75vw]  gap-x-[1.5vw] gap-y-[0.5vw]">
                                                {activeSection.submenu.map((item) => (
                                                    <Link
                                                        key={item.id} title={item.name}
                                                        href={`/${item.link}`}
                                                        onClick={() => setMenuOpen(false)}
                                                        className="group flex gap-x-[1vw] items-start cursor-pointer no-underline  px-[0.5vw] py-[0.75vw] rounded-md transition-all duration-200 hover:bg-[#f5f9ff] border border-transparent hover:border-slate-100"
                                                    >
                                                        <div className="size-[2vw] bg-[#f1fffd] group-hover:bg-[#ffffff] flex items-center justify-center rounded-md shrink-0 transition-transform">
                                                            <Zap className="text-teal-600 size-[1vw]" />
                                                        </div>
                                                        <div>
                                                            <h4 className="text-[1.05vw] font-semibold text-slate-800 transition-colors group-hover:text-[#0486ff]">
                                                                {item.name}
                                                            </h4>
                                                            <p className="text-[0.8vw] pt-[0.3vw]  text-slate-500 ">
                                                                Define Ai roadmap and strategy
                                                            </p>
                                                        </div>

                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="20"
                                                            height="20"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-[0.4vw]"
                                                        >
                                                            <path d="M7 7h10v10" />
                                                            <path d="M7 17 17 7" />
                                                        </svg>
                                                    </Link>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="text-slate-400 italic">Content details coming soon...</p>
                                        )}
                                    </>
                                ) : (
                                    <p className="text-slate-400 italic">Select a tab to see content</p>
                                )}
                            </div>

                            {/* BOTTOM PARTNERS & CTA */}
                            <div className="border-t-2  py-[1vw] px-[2vw] border-gray-200 bg-[#fafafa] flex  justify-between items-center">
                                <div className="flex  items-center justify-center gap-x-8 transition-all">
                                    <Image
                                        src="/pic1.png"
                                        alt="pic1"
                                        width={50}
                                        height={50}
                                        className="size-[4vw]"
                                    />
                                    <Image
                                        src="/pic2.png"
                                        alt="pic1"
                                        width={50}
                                        height={50}
                                        className="size-[4vw]"
                                    />
                                    <Image
                                        src="/pic3.png"
                                        alt="pic1"
                                        width={50}
                                        height={50}
                                        className="size-[4vw]"
                                    />
                                    <div className="text-left">
                                        <h3 className="text-[0.73vw] font-bold text-[#0066FF] leading-none">25+ Years</h3>
                                        <p className="text-slate-400 text-[0.5vw] pt-[0.5vw] !m-0 font-medium uppercase ">
                                            Software Excellence
                                        </p>
                                    </div>
                                </div>

                                {/* SIDE BUTTON (DESKTOP) */}
                                {/* <div className=" hidden lg:block">
                                    {sideButton?.name && (
                                        <Link href={sideButton?.link || "/contact"}>
                                            <ContactButton label={sideButton.name} />
                                        </Link>
                                    )}
                                </div> */}
                            </div>
                        </main>
                    </div>
                </div>
            )}
        </>
    );
};

export default HeaderDropdown;
