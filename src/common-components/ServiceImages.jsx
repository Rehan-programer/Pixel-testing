"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import ImageComparing from "./ImageComparing";
import SEOImage from "./SeoImage/SeoImage";

/**
 * Firebase Loader for Next.js Image
 * Automatically picks the closest pre-generated width
 * Converts to WebP for modern browsers
 */
const firebaseLoader = ({ src, width, quality }) => {
  if (!src) return "";

  const q = quality || 70;

  // Pre-generated widths in Firebase Storage
  const breakpoints = [400, 800, 1200, 1600, 2400];

  // Pick the closest available width
  const nearestWidth = breakpoints.reduce(
    (prev, curr) => (Math.abs(curr - width) < Math.abs(prev - width) ? curr : prev),
    breakpoints[0]
  );

  return `${src}?alt=media&w=${nearestWidth}&q=${q}&format=webp`;
};

/**
 * Helper: pick first element if array, else return value
 */
const pick = (val) => (Array.isArray(val) ? val[0] || null : val);

/**
 * Extract filename from Firebase URL
 */
const getFileNameFromFirebaseURL = (url) => {
  try {
    const decoded = decodeURIComponent(url);
    const fileName = decoded.split("/o/")[1].split("?")[0].split("/").pop();
    return fileName.replace(/\.[^/.]+$/, "");
  } catch {
    return "";
  }
};

const ServiceImages = ({ data, subservice, photographer, lang }) => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(800); // default width

  // Dynamically detect container width
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Pick images / video
  const single = pick(data?.singleImage) || pick(data?.img);
  const beforeImage = pick(data?.leftImage) || pick(data?.beforeImage) || pick(data?.Beforeimg);
  const afterImage = pick(data?.rightImage) || pick(data?.afterImage) || pick(data?.Afterimg);
  const videoUrl = pick(data?.videoUrl) || pick(data?.video);

  const imageSrc = !subservice ? single : single || afterImage;
  const AlterNativeTags = data?.project_title || data?.subName;

  // File names for alt tags
  const AfterfileName = getFileNameFromFirebaseURL(afterImage);
  const BeforeFileName = getFileNameFromFirebaseURL(beforeImage);
  const SingleFileName = getFileNameFromFirebaseURL(single);

  // Default responsive sizes
  const imageSizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px";

  return (
    <>
      {/* BEFORE / AFTER COMPARISON */}
      {beforeImage && afterImage ? (
        <ImageComparing
          afterImageTag={data?.AfterimgAlt || AfterfileName}
          beforeImageTag={data?.BeforeimgAlt || BeforeFileName}
          beforeImage={beforeImage}
          afterImage={afterImage}
          subName={data?.subName || data?.title}
          lang={lang}
        />
      ) : imageSrc ? (
        <div
          ref={containerRef}
          className="relative w-full h-[16rem] md:h-[29rem] lg:h-[clamp(18.5rem,27vw,33rem)] 2xl:h-[34rem]"
        >
          {/* OPTIMIZED IMAGE */}
          <SEOImage
            loader={(props) => firebaseLoader({ ...props, width: containerWidth })}
            src={imageSrc}
            branding={true}
            alt={AlterNativeTags || SingleFileName}
            fill
            placeholder="blur"
            blurDataURL="/blur-placeholder.png"
            loading="lazy"
            quality={70}
            sizes={imageSizes}
            decoding="async"
            className="object-cover cursor-default"
          />

          {/* NOSCRIPT FALLBACK */}
          <noscript>
            <img
              src={`${imageSrc}?alt=media&w=400&q=70&format=webp`} // smallest fallback
              title={`${AlterNativeTags || SingleFileName || "Services"}-Pixel-Perfects-Solution-LLC`}
              alt={`${AlterNativeTags || SingleFileName || "Services"}-Pixel-Perfects-Solution-LLC`}
              className="relative w-full h-[16rem] md:h-[29rem] lg:h-[clamp(18.5rem,27vw,33rem)] 2xl:h-[34rem] object-cover"
            />
          </noscript>
        </div>
      ) : videoUrl ? (
        // VIDEO FALLBACK
        <div className="bg-black cursor-default block">
          <video
            src={videoUrl}
            muted
            controls
            autoPlay
            loop
            playsInline
            className="w-full block md:h-[clamp(15rem,30vw,40rem)] xs:h-[clamp(15rem,30rem,50rem)] h-[15rem]"
          />
        </div>
      ) : (
        <p className="text-center text-gray-600 py-6">Aucun média disponible</p>
      )}
    </>
  );
};

export default ServiceImages;