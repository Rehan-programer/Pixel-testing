    "use client";

import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import stripHtml from "@/utils/stripHtml";
const PageComponentsId = ({ data }) => {
  const pathname = usePathname();
  const scrollRef = useRef();
  const [showArrows, setShowArrows] = useState({ left: false, right: false });
  if (
    pathname === "/" ||
    pathname.startsWith("/blog") ||
    pathname.startsWith("/case-studies")
  ) {
    return null;
  }
  const checkArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowArrows({
      left: el.scrollLeft > 0,
      right: el.scrollLeft + el.clientWidth < el.scrollWidth,
    });
  };
  const scroll = (dir) => {
    const el = scrollRef.current;
    if (el) {
      el.scrollBy({
        left: dir === "left" ? -400 : 400,
        behavior: "smooth",
      });
      setTimeout(checkArrows, 300);
    }
  };
  const onRef = (node) => {
    if (typeof window === "undefined") return;
    if (node && scrollRef.current !== node) {
      scrollRef.current = node;
      node.addEventListener("scroll", checkArrows);
      window.addEventListener("resize", checkArrows);
      checkArrows();
    }
  };
  return (
    <div
      className="bg-[#0486ff]   sticky z-[4000] top-[3.7rem]  md:top-[4.1rem]   lg:top-[4.4vw] xl:top-[3.5rem] 2xl:top-[4.4rem] w-full"
    >
      <div className="container-global scrollbar y-0 py-[0.6rem] lg:py-[1%] flex items-center relative justify-between">
        {/* Left Arrow */}
        {showArrows.left && (
          <button onClick={() => scroll("left")} className="absolute left-0 z-10 p-2 text-white"><span className="text-xs md:text-2xl">❮</span></button>
        )}
        {/* Scrollable List */}
        <div ref={onRef} className=" flex-1 overflow-x-auto whitespace-nowrap  mx-[1rem] md:mx-[4%] scrollbar-hide ">
          {data?.map((section, index) => {
            const shortId = section.title?.toLowerCase().replace(/[^\w\s-]/g, "").split(" ").slice(0, 6).join("-");
            return (
              <Link title={section?.title?.slice(0, 30)}
                key={index}
                href={`#${shortId}`}
                className="inline-block text-white px-[1%] text-[0.6rem] lg:text-[0.65vw]"
              >
                {stripHtml(section?.title?.slice(0, 30))}…
              </Link>
            );
          })}
        </div>
        {/* Right Arrow */}
        {showArrows.right && (
          <button onClick={() => scroll("right")} className="absolute right-0 z-10 p-2 text-white" >   <span className="text-xs md:text-2xl ">❯</span>  </button>
        )}
      </div>
    </div>
  );
};

export default PageComponentsId;
