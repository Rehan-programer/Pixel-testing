"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ShareButton from "@/common-components/ShareButton";
import ServiceCardSwiper from "@/common-components/ServiceCardSwiper";
import LanguageSwitcher from "@/components/Header/LanguageSwitcher";
import MobileDrawerButton from "@/components/Header/MobileDrawerButton";
import { cleanHTML } from "./CleanHtml";
import BlogsComments from "@/common-components/BlogsComments";

const BlogDetails = ({ blogdata, populardata, lang }) => {
  const id = blogdata.id
  console.log("comm" , id);

  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // disable scroll
    } else {
      document.body.style.overflow = "auto"; // enable scroll
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <div className=" container-global  m-auto flex items-start justify-between ">
      <div className="fixed hidden lg:block top-[50%] left-4">
        <ShareButton />
      </div>
      <div className=" w-[90%] lg:w-[70%] relative ">
        <div className=" ">
          {/* Desktop Share Button */}

          {/* Blog Content */}
          <div>
            <div className="flex items-center justify-between gap-x-2">
              <div className="flex items-center gap-x-2 ">
                <p className="text-[#01CFAA] font-bold">{blogdata.category}</p>
                <p>{blogdata.createdAt}</p>
              </div>
            </div>

            <h1 className="text-3xl font-bold my-4">{blogdata.title}</h1>
            <div className="w-full h-[16rem] md:h-[24rem] xl:h-[30vw] relative mb-6">
              <Image
                height={1000}
                width={1000}
                src={blogdata.coverImg}
                alt={blogdata.title}
                className="w-full h-full object-center rounded-xl"
              />
            </div>

            <div
              className="blogspacing mb-[2%]"
              dangerouslySetInnerHTML={{ __html: cleanHTML(blogdata.description) }}
            />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-5">
          <BlogsComments data={blogdata} blogId={id} />
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block sticky top-6 right-10 w-[22%] lg:w-[28%] mt-[2%]  ">
        <h3 className="my-[4%] text-center">
          {" "}
          {lang === "en" ? "Popular Services" : "Servicios Populares"}
        </h3>
        <div>
          <ServiceCardSwiper data={populardata} lang={lang} />
        </div>
      </div>
      <div className="fixed top-[17.5%] right-2 z-50 lg:hidden">
        <MobileDrawerButton isOpen={open} onClick={toggleDrawer} />
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-30 transition-opacity duration-300 lg:hidden ${open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed top-10 md:top-14   left-0   h-full w-[80%] md:w-[55%] z-40 py-[2rem] px-[0.5rem] md:px-[1rem] overflow-y-auto
    transform transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
    lg:hidden
    ${open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
  `}
        style={{
          background:
            "linear-gradient(360deg, rgba(13,21,131,1) 0%, rgba(169,252,237,1) 0%, rgba(255,255,255,1) 100%)",
        }}
      >
        <h3 className="font-semibold mb-4 text-center text-[#292a76]">
          Popular Services
        </h3>
        <div className="fixed left-4 bottom-20  z-50 ">
          <ShareButton />
        </div>

        <div>
          <ServiceCardSwiper data={populardata} />
        </div>
      </div>


    </div>
  );
};

export default BlogDetails;
