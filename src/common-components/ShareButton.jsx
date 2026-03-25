"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FaShareAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const ShareButton = () => {
  const [hovered, setHovered] = useState(false);

  const icons = [
    {
      icon: <FaFacebookF />,
      bg: "bg-blue-500",
      title:"facebook",
      hover: "hover:bg-blue-700",
      link: "#",
    },
    {
      icon: <FaTwitter />,
      title:"twiiter",
      bg: "bg-blue-400",
      hover: "hover:bg-blue-600",
      link: "#",
    },
    {
      icon: <FaLinkedinIn />,
      title:"linkedin",
      bg: "bg-blue-700",
      hover: "hover:bg-blue-900",
      link: "#",
    },
  ];

  return (
    <div
      className="relative flex h-[20vw] justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-10 h-10 rounded-full mb-[4%] bg-blue-600 flex items-center justify-center text-white cursor-pointer shadow-lg transition-all duration-300">
        <FaShareAlt size={18} />
      </div>

      {icons.map((item, index) => (
        <Link
          key={index} title={item.title}
          href={item.link}
          className={`
        absolute top-4 left-1/2 w-8 h-8 bg-black rounded-full flex items-center justify-center 
        text-white shadow-md transition-all duration-300
        ${item.bg} ${item.hover}
      `}
          style={{
            transform: `
          translateX(calc(-50% + ${hovered ? (index + 1) * 60 : 0}px))
          translateY(-5px)
        `,

            ...(typeof window !== "undefined" &&
              window.innerWidth >= 1024 && {
                transform: `
              translateX(-50%)
              translateY(${hovered ? (index + 1) * 40 : 0}px)
            `,
              }),

            opacity: hovered ? 1 : 0,
            pointerEvents: hovered ? "auto" : "none",
          }}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default ShareButton;
