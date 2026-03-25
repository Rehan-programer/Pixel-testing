"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const LightBox = ({ images = [], captions = [], open, startIndex = 0, onClose }) => {
  const [current, setCurrent] = useState(startIndex);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef(null);
  const [zoomed, setZoomed] = useState(false);

  // Reset current image when startIndex changes
  useEffect(() => {
    setCurrent(startIndex);
  }, [startIndex]);

  // Handle slideshow
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 3000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (!open) return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, images.length]);

  if (!open) return null;

  const prev = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
      <div className="relative bg-white w-full max-w-6xl h-[85vh] rounded-2xl overflow-hidden flex">

        {/* Main Image */}
        <div
          className={`w-3/4 bg-black flex items-center justify-center transition-transform duration-300 ${
            zoomed ? "scale-125" : "scale-100"
          }`}
          onClick={() => setZoomed((z) => !z)}
        >
          <Image fill src={images[current]} alt="" className="max-h-full max-w-full object-contain" />
        </div>

        {/* Thumbnails */}
        <div className="w-1/4 bg-gray-100 overflow-y-auto p-4 grid grid-cols-2 gap-3">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`cursor-pointer border-2 rounded-lg overflow-hidden ${
                current === idx ? "border-green-500" : "border-transparent"
              }`}
            >
              <Image fill src={img} className="w-full h-24 object-cover" />
            </div>
          ))}
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 bg-white text-black px-4 py-2 rounded-full shadow-lg z-50"
        >
          Close
        </button>

        {/* Prev/Next Arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        >
          ◀
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        >
          ▶
        </button>

        {/* Toolbar */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 flex gap-2 z-50">
          <button
            onClick={() => setZoomed((z) => !z)}
            className="bg-white p-2 rounded-full shadow-lg"
          >
            {zoomed ? "Zoom Out" : "Zoom In"}
          </button>
          <button
            onClick={() => setIsPlaying((p) => !p)}
            className="bg-white p-2 rounded-full shadow-lg"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>

        {/* Caption */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded">
          {captions[current] || `Image ${current + 1}`}
        </div>

        {/* Progress Bar */}
        <div
          className="absolute bottom-0 left-0 h-1 bg-green-500"
          style={{ width: `${((current + 1) / images.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default LightBox;
