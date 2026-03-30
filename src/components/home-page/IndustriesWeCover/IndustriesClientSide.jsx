// "use client";
// import React from "react";
// import Link from "next/link";
// import { useServicesHooks } from "@/utils/useServicesHooks";
// import MobileSelect from "@/common-components/MobileSelect";
// import style from "./Industries.module.css";
// import { ArrowRight } from "lucide-react";

// const IndustriesClientSide =({
//   lang,
//   initialMainServices,
//   initialSubServices,
// }) => {
//   const {
//     selectedCategory,
//     MainService,
//     handleSelectChange,
//     setOpen,
//     selectedMainService,
//     filteredServices,
//     ref,
//     selectedLabel,
//     open,
//   } = useServicesHooks(lang, initialMainServices, initialSubServices);

//   return (
//     <div className="flex   flex-col lg:flex-row w-full gap-x-[4%]">
//       {/* ✅ Mobile Dropdown */}
//       <MobileSelect
//         MainService={MainService}
//         selectedLabel={selectedLabel}
//         open={open}
//         setOpen={setOpen}
//         handleSelectChange={handleSelectChange}
//         selectedCategory={selectedCategory}
//         ref={ref}
//       />
//       <div className="hidden lg:block w-[25%] border-r-2 border-[#6088a9]">
//         {MainService?.map((industry, index) => (
//           <button
//             key={index}
//             onClick={() => handleSelectChange(industry.id)}
//             className={
//               selectedCategory === industry.id ? style.activeTab : style.btnTab
//             }
//           >
//             <span className="text-[clamp(0.9rem,1vw,1.1rem)] text-left">
//               {industry.name}
//             </span>
//             <ArrowRight
//               className={`w-10 h-10  transform  rounded-full p-[2%] border-[1px] transition-transform duration-300 ${
//                 selectedCategory === industry.id
//                   ? "rotate-45 text-[#00cfaa] border-[#00cfaa] "
//                   : "rotate-0 text-[#292a76] border-[#292a76] "
//               }`}
//             />
//           </button>
//         ))}
//       </div>
//       <div className="w-full lg:w-[70%] pt-[0.8%]">
//         <h3>{selectedMainService?.name}</h3>

//         <p className="mt-[1.5%] ">{selectedMainService?.description}</p>

//         <div className="flex flex-wrap gap-x-2 gap-y-2 mt-[1.5%]">
//           {filteredServices?.map((list, index) => (
//             <Link title={list.subName}
//               key={index}
//               href={list.link.replace("https://www.pxlperfects.com", "")} 
//               className="inline-block bg-white border border-[#00cfaa] text-[#292A76] font-bold cursor-pointer 
//        mt-[1.5%] rounded-[clamp(0.6rem,1vw,1.2rem)] 
//        px-[clamp(0.4rem,0.6vw,1rem)] py-[clamp(0.3rem,0.5vw,0.8rem)] 
//        text-[clamp(0.75rem,0.85vw,1rem)] hover:bg-[#00cfaa] transition-all duration-300"
//             >
//               {list.subName}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IndustriesClientSide;


















"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useServicesHooks } from "@/utils/useServicesHooks";
import MobileSelect from "@/common-components/MobileSelect";

const TAB_IMAGES = {
  "Virtual Staging & Renovations": "/assets/img/Photography guide/Real Estate Photo editing Services/virtual stagin.webp",
  "Renders": "/assets/img/HomeBanner/3D 360 Renders S1 - Pixel Perfects Solution.webp",
  "Floor Plans": "/assets/img/Photography guide/Real Estate Photo editing Services/2d floor plan.webp",
  "Other Edits": "/otheredits.jpg",
  "Image Editing": "/assets/img/day1.webp",
};

const isVideo = (src) => {
  if (!src) return false;
  const lower = src.toLowerCase();
  return lower.includes(".mp4") || lower.includes(".webm") || lower.includes(".mov");
};

const IndustriesClientSide = ({ lang, initialMainServices, initialSubServices }) => {
  const {
    selectedCategory,
    MainService,
    handleSelectChange,
    setOpen,
    selectedMainService,
    filteredServices,
    ref,
    selectedLabel,
    open,
  } = useServicesHooks(lang, initialMainServices, initialSubServices);

  const contentRef = useRef(null);
  const imgWrapRef = useRef(null);

  const firstSub = filteredServices?.[0];
  const backendMedia = firstSub?.videoUrl || firstSub?.videoFile || firstSub?.afterImage || firstSub?.beforeImage || firstSub?.thumbnailImage || null;
  const imgSrc = selectedMainService?.name === "Video Editing"
    ? backendMedia
    : TAB_IMAGES[selectedMainService?.name] || null;

  const handleTab = (id) => {
    if (id === selectedCategory) return;
    const el = contentRef.current;
    const img = imgWrapRef.current;

    if (el) { el.style.opacity = "0"; el.style.transform = "translateY(10px)"; }
    if (img) { img.style.opacity = "0"; }

    handleSelectChange(id);

    setTimeout(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (el) { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }
          if (img) { img.style.opacity = "1"; }
        });
      });
    }, 220);
  };

  const MediaContent = ({ src, alt, isMobile = false }) => {
    if (!src) return null;
    if (isVideo(src)) {
      return (
        <video
          key={src}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      );
    }
    return (
      <Image
        key={src}
        src={src}
        alt={alt ?? "service"}
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        sizes={isMobile ? "100vw" : "70vw"}
        quality={80}
        priority
      />
    );
  };
  console.log("data" , MainService[0].name);
  

  return (
    <div className="w-full">

      {/* ── Mobile ── */}
      <div className="lg:hidden mb-6 lg:px-4">
        <MobileSelect
          MainService={MainService}
          selectedLabel={selectedLabel}
          open={open}
          setOpen={setOpen}
          handleSelectChange={handleTab}
          selectedCategory={selectedCategory}
          ref={ref}
        />
        <div
          ref={contentRef}
          className="mt-4 rounded-2xl border border-[#e8eef4]  lg:p-5 bg-white"
          style={{ transition: "opacity 0.22s ease, transform 0.22s ease" }}
        >
          {imgSrc && (
            <div className="relative w-full h-[180px] rounded-t-[12px] overflow-hidden mb-4">
              <MediaContent src={imgSrc} alt={selectedMainService?.name} isMobile />
            </div>
          )}
         <div className="px-2 pb-4">
           <h3 className=" font-bold text-[#292a76] mb-2">{selectedMainService?.name}</h3>
          <p className=" text-gray-400 leading-relaxed mb-5">{selectedMainService?.description}</p>
          <div className="flex flex-wrap gap-2">
            {filteredServices?.map((list, index) => (
              <Link key={index} title={list.subName} href={list.link.replace("https://www.pxlperfects.com", "")}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-[#292a76] bg-white border border-[#00cfaa] lg:border-[#e8eef4] hover:border-[#00cfaa] hover:bg-[#f0fdf9] hover:text-[#00aa88] transition-all duration-200">
                {list.subName}
              </Link>
            ))}
          </div>
         </div>
        </div>
      </div>

      {/* ── Desktop ── */}
      <div className="hidden lg:flex w-full rounded-2xl overflow-hidden"
        style={{
          minHeight: "520px",
          boxShadow: "8px 8px 24px rgba(0,0,0,0.12), 2px 2px 8px rgba(0,0,0,0.06)",
        }}
      >
        {/* Left dark sidebar */}
        <div className="flex flex-col justify-between flex-shrink-0 px-8 py-10"
          style={{ background: "#283978", width: "30%" }}
        >
          <div>
            <h2 className=" font-extrabold text-white mb-4 leading-snug">
              Industries <span style={{ color: "#00cfaa" }}>We Cover</span>
            </h2>
            <p className="leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>
              We specialize in tailored real estate marketing services — from Virtual Staging to Video Editing — designed to transform every listing.
            </p>
            <nav className="flex flex-col gap-1">
              {MainService?.map((industry, index) => {
                const isActive = selectedCategory === industry.id;
                return (
                  <h4>
                  <button key={index} onClick={() => handleTab(industry.id)}
                    className="w-full text-left px-3 py-2.5 rounded-lg cursor-pointer  font-semibold"
                    style={{
                      color: isActive ? "#fff" : "rgba(255,255,255,0.4)",
                      background: isActive ? "rgba(0,207,170,0.12)" : "transparent",
                      borderLeft: isActive ? "3px solid #00cfaa" : "3px solid transparent",
                      transition: "all 0.22s ease",
                    }}
                    onMouseEnter={e => {
                      if (!isActive) e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={e => {
                      if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                    }}
                  >
                    {industry.name}
                  </button>
                  </h4>
                );
              })}
            </nav>

          </div>
          <Link href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold mt-8"
            style={{ color: "rgba(255,255,255,0.5)", transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "#00cfaa"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}>
            Explore All Services
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Right panel */}
        <div className="flex-1 flex flex-col" style={{ overflow: "hidden" }}>

          {/* Image / Video */}
          <div
  ref={imgWrapRef}
  className={`relative w-full flex-shrink-0 overflow-hidden transition-opacity duration-300 ease-in-out 
  bg-gradient-to-br from-[#0f1035] via-[#1a2a6c] to-[#292a76] 
  ${filteredServices?.length > 6 ? "h-[280px]" : "h-[400px]"}`}
>
            {imgSrc && <MediaContent src={imgSrc} alt={selectedMainService?.name} />}
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0, height: "80px",
              background: "linear-gradient(to bottom, transparent, #fff)",
              pointerEvents: "none", zIndex: 1,
            }} />
          </div>

          {/* Content */}
          <div
            ref={contentRef}
            className="flex-1 bg-white px-8 py-6"
            style={{ transition: "opacity 0.22s ease, transform 0.22s ease" }}
          >
            <h3 className=" font-extrabold text-[#292a76] mb-2">{selectedMainService?.name}</h3>
            <p className=" text-gray-400 leading-relaxed mb-5 max-w-2xl">{selectedMainService?.description}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {filteredServices?.map((list, index) => (
                <Link key={index} title={list.subName} href={list.link.replace("https://www.pxlperfects.com", "")}
                  className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-[#00cfaa] lg:border-[#e8eef4] text-xs font-semibold text-[#292a76] bg-white transition-all duration-200 hover:border-[#00cfaa] hover:bg-[#f0fdf9] hover:text-[#00aa88]"
                 >
                  {list.subName}
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default IndustriesClientSide;    