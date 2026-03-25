"use client";
import { ArrowRightIcon,} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SEOImage from "../SeoImage/SeoImage";

function SectionItem({ section,handleTabClick }) {
  console.log("section" , section);
  
  return (
    <Link href={section.fieldRoute} title={section.fieldName} onClick={handleTabClick} className="no-underline gap-2 group block">
      {/* Header */}
      <div className="flex items-center px-4 rounded-xl gap-x-4">
        <div className=" bg-[#d0fdf6] group-hover:bg-[#a9fced] p-[0.5vw] flex items-center justify-center rounded-md shrink-0 transition-transform">
          <div className="relative w-[1.5vw] h-[1.5vw] ">
             <SEOImage
              src={section.icon}
              alt={section.fieldName}
              title={section.fieldName}
              fill
              className="object-contain"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <h2
            className={`text-[0.8vw]  text-[#292a76] tracking-tight transition-colors `}
          >
            {section.fieldName}
          </h2>
          <ArrowRightIcon className="size-[1vw] text-[#00cfaa] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[0.1vw] bg-gray-200 my-[0.5vw]" />

      {/* Image */}
      <Image
        src={section.image}
        alt={section.fieldName}
        title={section.fieldName}
        width={400}
        height={200}
        className="object-center w-full h-[10vw] rounded-xl"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 40vw"
        priority
      />

      {/* Description */}
      <p
        className={`font-bold text-gray-700 text-[0.65vw] pt-4 group-hover:text-[#00cfaa] px-2 transition-colors `}
      >
        {section.hoverDetail}
      </p>
    </Link>
  );
}
export default function ShortDropdown({ setMenuOpen,  filteredData }) {
  
  if (!filteredData?.fields?.length) return null;

  const handleTabClick = () => {
    setMenuOpen(null);
  };

  return (
    <div
      className="animate__animated animate__slideInDown  hidden lg:block   bg-[#fff] fixed w-[80%] h-auto right-0 left-0 lg:top-[4.5vw] 2xl:top-[4.9rem] mx-auto  border border-gray-200 rounded-2xl shadow-xl overflow-hidden font-sans z-[1000] p-[2vw]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[2.5vw]  ">
        {filteredData?.fields?.map((section, i) => (
          <div key={i}>
            {/* Title Row */}
            <SectionItem section={section} handleTabClick={handleTabClick} />
          </div>
        ))}
      </div>
    </div>
  );
}
