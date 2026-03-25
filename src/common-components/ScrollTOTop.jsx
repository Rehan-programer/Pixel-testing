'use client';

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {

  const [show, setShow] = useState(false);

  useEffect(() => {

    const scrollFunction = () => {
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };

  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <button
      aria-label="Go to top"
      onClick={scrollToTop}
      className="
        fixed bottom-[10%]
        lg:bottom-[6%] right-[8.5%]
        lg:right-[2%]
        z-[9999]
        bg-[#00cfaa]
        hover:bg-[#292a76]
        w-12
        h-12
        text-[white]
        rounded-full
        flex
        items-center
        justify-center
        transition-all
        duration-300
      "
    >
      <ArrowUp sx={{ color: "#fff" }} />
    </button>
  );
};

export default ScrollToTop;
