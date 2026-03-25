"use client"
import useNavebar from '@/utils/useNavbar';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import { CloseIcon, SearchIcon } from '../../../../Icons/icons';

const Search = () => {
  const pathname = usePathname()
  const { HandleSearchOpen, searchOpen, setSearchOpen } = useNavebar();
  const searchRef = useRef(null);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const goSearch = async () => {
    const q = searchText.trim();
    if (!q) return;
    setLoading(true); // show loader
    // Optional delay so loader is visible properly
    await new Promise((res) => setTimeout(res, 400));
    router.push(`/search?query=${encodeURIComponent(q)}`);
    setLoading(false);
    setSearchOpen(false); // Optional: close dropdown after redirect
  };
  // 🟦 Search enter key logic
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      goSearch();
    }
    if (e.key === "Escape") {
      setSearchOpen(false);
      setMenuOpen(null);
    }
  };
   useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    if (searchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchOpen, setSearchOpen]);
  
  return (
    <div className="relative select-none flex items-center ">
      <div className={`${pathname === "/search" ? "hidden" : "flex"} items-center cursor-pointer justify-end w-1/2 md:w-auto`}
        onClick={() => HandleSearchOpen()} >
        {searchOpen ? (
          <CloseIcon
            className={`size-[2.5rem] md:size-[2.4rem] lg:size-[1.2vw] 
              ${searchOpen ? "text-[#0486ff]" : "text-black"}`}
          />
        ) : (
          <SearchIcon
            className={`size-[2.5rem] md:size-[1.5rem] lg:size-[1.2vw] 
              ${searchOpen ? "text-[#0486ff]" : "text-black"}`}
          />
        )}
      </div>
      {searchOpen && (
        <div
          ref={searchRef}
          className="fixed bg-white flex items-center border-2 border-[#0486ff] z-[4001] md:rounded-b-md  md:w-[40%] right-0 mx-auto left-0  md:right-[-40%] lg:right-[-52%] md:top-[4.3rem] top-[3.8rem] lg:top-[3.75vw] w-[90%] lg:w-[12%] px-2"
          >
          <input
            type="text"
            placeholder="Search"
            className="w-full py-2 px-1 text-gray-800 text-sm outline-none border-none"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {/* 🔥 INLINE LOADER */}
          {loading && (
            <div className="w-4 h-4 mr-2 border-2 border-[#0486ff] border-t-transparent rounded-full animate-spin" />
          )}
        </div>
      )}
    </div>
  )
}

export default Search
