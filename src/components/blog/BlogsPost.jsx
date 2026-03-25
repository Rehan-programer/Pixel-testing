"use client"
import Image from "next/image";
import React, { useMemo, useState } from "react";
import BlogCard from "./BlogsCard";
import SEOImage from "@/common-components/SeoImage/SeoImage";

const BlogsPost = ({ data ,lang}) => {
  if (!data || data.length === 0) {
    return <p className="text-center">No blogs available.</p>;
  }
  const BLOG_POST_TEXT = {
  en: {
    noBlogs: "No blogs available.",
    allBlogs: "All Blogs",
  },

  es: {
    noBlogs: "No hay blogs disponibles.",
    allBlogs: "Todos los Blogs",
  },
};
  const t = BLOG_POST_TEXT[lang] || BLOG_POST_TEXT.en;
const [search, setSearch] = useState("");
const [currentPage, setCurrentPage] = useState(1);

const filteredBlogs = useMemo(() => {
  if (!search) return data;

  return data.filter((blog) => {
    const keyword = search.toLowerCase();

    return (
      blog.title?.toLowerCase().includes(keyword) ||
      blog.category?.toLowerCase().includes(keyword)
    );
  });
}, [search, data]);
const ITEMS_PER_PAGE = 6; // jitne cards per page chahte ho
const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);

const paginatedBlogs = useMemo(() => {
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  return filteredBlogs.slice(start, start + ITEMS_PER_PAGE);
}, [filteredBlogs, currentPage]);

  return (
    <div className="container-global ">
        {/* CARD 1 */}
        <div className=" bg-[#292A76]   rounded-xl lg:rounded-[20px] flex justify-between items-center  px-[1.5rem] lg:px-[1.5%] py-[1rem] lg:py-[1%] w-[45%] md:w-[25%] lg:w-[8rem] xl:w-[10vw]">
          <SEOImage
            src="/all blogs.png"
            width={200}
            height={200}
            alt={t.allBlogs}
            className="rounded-md w-[2rem] md:w-[3vw] "
          />
          <div >
           <h4 className="text-[#fff] font-bold">
            {t.allBlogs}
          </h4>

          <p className="text-white lg:text-[1.3vw] font-bold 2xl:text-[clamp(1rem,1.3vw,1.8rem)]">
            {String(data?.length ?? 0).padStart(2, "0")}
          </p> </div>
        </div>
      <div className=" bg-white py-2 sticky top-0 z-40 w-full my-[2%]">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search by title and catgeory"   value={search}
  onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2  border-gray-300 rounded-md  transition-all duration-300 ease-in-out
           outline-none    border-2  focus:border-[#00cfaa]"
        />
      </div>
     <div className="w-full ">
    <BlogCard data={paginatedBlogs} />
</div>
<div className="flex justify-center gap-2 mt-6 flex-wrap">

  {/* PREVIOUS */}
  <button
    disabled={currentPage === 1}
    onClick={() => setCurrentPage(prev => prev - 1)}
    className="px-3 py-1 border rounded disabled:opacity-40"
  >
    Prev
  </button>

  {/* PAGE NUMBERS */}
  {[...Array(totalPages)].map((_, i) => (
    <button
      key={i}
      onClick={() => setCurrentPage(i + 1)}
      className={`px-3 py-1 border rounded ${
        currentPage === i + 1
          ? "bg-[#00cfaa] text-white"
          : ""
      }`}
    >
      {i + 1}
    </button>
  ))}

  {/* NEXT */}
  <button
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage(prev => prev + 1)}
    className="px-3 py-1 border rounded disabled:opacity-40"
  >
    Next
  </button>

</div>

    </div>
  );
};

export default BlogsPost;
