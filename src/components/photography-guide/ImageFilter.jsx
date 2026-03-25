"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import SectionHeader from "@/common-components/SectionHeader";
import MobileSelect from "@/common-components/MobileSelect";
import SEOImage from "@/common-components/SeoImage/SeoImage";

export default function ImageFilter({ data }) {
  const [selectedProject, setSelectedProject] = useState(data[0]?.project_title);
  const filter = data?.find((item) => item?.project_title === selectedProject);
  const [open,setOpen]=useState(false)
  const OpenRef=useRef();
  const handleSelectChange=(value)=>{
setSelectedProject(value)
  }
  return (
        <div
          className="container-global p-[1rem] lg:p-[2%] rounded-md"
           style={{
            background:
              "linear-gradient(135deg, rgb(205, 229, 255) 0%, rgb(255, 255, 255) 50%, rgb(169, 252, 237) 100%)",
          }}
        >
         <div className="text-center ">
           <SectionHeader title="Our Projects"/>
         </div>

          <div className="flex flex-col lg:flex-row items-start gap-x-8">
            <div className="hidden lg:block w-[25%]">
              {data.map((item, index) => {
                const isActive = selectedProject === item.project_title;

                return (
                  <button
                    key={index}
                    onClick={() => handleSelectChange(item.project_title)}
                    className={`text-left w-full first:mt-0 mt-[2%]  ${
                      isActive
                        ? "btn-slider py-[2%]"
                        : "btn-header  py-[2%]"
                    }`}
                  >
                    {item.project_title}
                  </button>
                );
              })}
            </div>
            <div className="w-full lg:hidden">
     <MobileSelect  MainService={data} selectedLabel={selectedProject} open={open} setOpen={setOpen} handleSelectChange={handleSelectChange} selectedCategory={selectedProject} ref={OpenRef}/>
            </div>

    <div className="w-full lg:w-[72%] flex flex-col md:flex-row rounded-md overflow-hidden">
  {/* BEFORE IMAGE */}
  <div className="relative h-[16rem] 2xl:h-[20rem] lg:h-[20vw] md:w-1/2">
    <SEOImage
      src={filter?.Beforeimg}
      alt={`${filter?.project_title} Before`}
      fill
      className="object-cover object-center"
    />
    <div className="absolute bottom-0 w-full text-center bg-black/50 text-white p-[2%]">
      Before
    </div>
  </div>

  {/* AFTER IMAGE */}
  <div className="relative h-[16rem] 2xl:h-[20rem] lg:h-[20vw]  md:w-1/2">
    <SEOImage
      src={filter?.Afterimg}
      alt={`${filter?.project_title} After`}
      fill
      className="object-cover object-center"
    />
    <div className="absolute bottom-0 w-full text-center bg-black/50 text-white p-[2%]">
      After
    </div>
  </div>
</div>

          </div>
        </div>
  );
}
