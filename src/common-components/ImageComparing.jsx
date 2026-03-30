"use client";
import React, { useRef, useState, useCallback } from "react";
import Image from "next/image";

const ImageComparing = ({ beforeImageTag, afterImageTag, beforeImage, afterImage, lang }) => {
  const leftLabel = lang === "es" ? "Después 24 horas" : "After 24 hours";
  const rightLabel = lang === "es" ? "Antes" : "Before";

  const [sliderPos, setSliderPos] = useState(50); // percentage
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  // ✅ Mouse / Touch position se slider percentage calculate karo
  const getPercent = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return 50;
    const x = clientX - rect.left;
    return Math.min(100, Math.max(0, (x / rect.width) * 100));
  }, []);

  const onMouseMove = useCallback((e) => {
    if (!isDragging.current) return;
    setSliderPos(getPercent(e.clientX));
  }, [getPercent]);

  const onTouchMove = useCallback((e) => {
    if (!isDragging.current) return;
    setSliderPos(getPercent(e.touches[0].clientX));
  }, [getPercent]);

  const startDrag = () => { isDragging.current = true; };
  const stopDrag = () => { isDragging.current = false; };

  // Container click se bhi slider move ho
  const onContainerClick = useCallback((e) => {
    setSliderPos(getPercent(e.clientX));
  }, [getPercent]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-[10px] cursor-ew-resize select-none"
      style={{ aspectRatio: "16/9" }} // apni zaroorat ke mutabiq badlo
      onMouseMove={onMouseMove}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      onTouchMove={onTouchMove}
      onTouchEnd={stopDrag}
      onClick={onContainerClick}
    >

      {/* ✅ RIGHT image — Before (puri width, background mein) */}
      <div className="absolute inset-0">
        <Image
          src={beforeImage}
          alt={`${beforeImageTag}-Pixel Perfects Solution-LLC`}
          title={`${beforeImageTag}-Pixel Perfects Solution-LLC`}
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
          priority
        />
      </div>

      {/* ✅ LEFT image — After (clip hoti hai slider position pe) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <Image
          src={afterImage}
          alt={`${afterImageTag}-Pixel Perfects Solution-LLC`}
          title={`${afterImageTag}-Pixel Perfects Solution-LLC`}
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
          priority
        />
      </div>

      {/* ✅ Slider divider line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white z-10"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
      />

      {/* ✅ Drag handle */}
      <div
        className="absolute top-1/2 z-20 flex items-center justify-center
                   w-[44px] h-[44px] rounded-full border-2 border-white
                   bg-black/40 shadow-lg"
        style={{
          left: `${sliderPos}%`,
          transform: "translate(-50%, -50%)",
        }}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
          fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 7-5 5 5 5" />
          <path d="m15 7 5 5-5 5" />
        </svg>
      </div>

      {/* ✅ Left label — After */}
      <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10
                       bg-black/60 text-white text-sm px-3 py-1 rounded">
        {leftLabel}
      </span>

      {/* ✅ Right label — Before */}
      <span className="absolute right-4 top-1/2 -translate-y-1/2 z-10
                       bg-black/60 text-white text-sm px-3 py-1 rounded">
        {rightLabel}
      </span>

    </div>
  );
};

export default ImageComparing;