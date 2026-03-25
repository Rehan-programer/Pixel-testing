// components/SideBar.js
"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function SideBar({ data }) {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar((prev) => !prev);

  // Disable background scroll when sidebar is open
  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showSidebar]);

  return (
    <div className="">
      {/* Mobile "View More" Link */}
      <div className=" ">
        <Link
        href={""}
          onClick={toggleSidebar}
          className="btn-header bg-[#292A76] text-white border-none w-full"
        >
          View Contact
        </Link>
      </div>

      {/* Overlay */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={toggleSidebar} // click on overlay closes sidebar
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`
          fixed bottom-0 left-0 w-full bg-white shadow-lg rounded-t-xl p-4 z-50
          transform transition-transform duration-300 ease-in-out
          ${showSidebar ? "translate-y-0" : "translate-y-full"}
        `}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="">{data.title}</h3>
          <Link
           href={""}
            onClick={toggleSidebar}
            className="text-black font-bold text-xl"
          >
            &times;
          </Link>
        </div>

        {/* Sidebar content */}
        <div className="space-y-4">
          {/* Agent Info */}
          <div className="flex items-center gap-x-2">
            <div className="w-12 h-12 rounded-full bg-[#00CFAA] flex items-center justify-center font-semibold text-white text-lg">
              {(() => {
                const names = data.contact.agentName.split(" ");
                const initials =
                  names[0][0] + (names[1] ? names[1][0] : "");
                return initials.toUpperCase();
              })()}
            </div>
            <div>
              <p className="font-semibold">{data.contact.agentName}</p>
              <p>{data.contact.phone}</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-2 mt-2">
            <Link  href={""} className="btn-header w-full text-center">Call Now</Link>
            <Link  href={""} className="btn-header bg-[#292A76] text-center text-white border-none w-full">
              Send a Message
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
