"use client";
import Image from "next/image";

export default function Lightbox({ open, image, onClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center"
      onClick={onClose}
    >
      <div className="relative w-[90%] h-[80%]">
        <Image
          src={image}
          alt="Popup"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
