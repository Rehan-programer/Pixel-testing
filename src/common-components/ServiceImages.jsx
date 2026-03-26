"use client";

import React from "react";
import ImageComparing from "./ImageComparing";
import SEOImage from "./SeoImage/SeoImage";

/**
 * Smart Loader:
 * - Firebase URLs  → ?alt=media only (Next.js handles AVIF/WebP conversion)
 * - Local /assets/ → src as-is (Next.js optimizes automatically)
 */
const smartLoader = ({ src, width, quality }) => {
  if (!src) return "";

  const q = quality || 60;

  // Local image — Next.js built-in optimization kaam karega
  if (src.startsWith("/") || src.startsWith("./")) {
    return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${q}`;
  }

  // Firebase URL — sirf ?alt=media, baaki Next.js handle karega
  const baseSrc = src.split("?")[0];
  return `${baseSrc}?alt=media`;
};

/**
 * Helper: pick first element if array, else return value
 */
const pick = (val) => (Array.isArray(val) ? val[0] || null : val);

/**
 * Extract filename from Firebase URL (for alt tags)
 */
const getFileNameFromFirebaseURL = (url) => {
  if (!url) return "";
  try {
    const decoded = decodeURIComponent(url);
    const fileName = decoded.split("/o/")[1]?.split("?")[0]?.split("/").pop();
    return fileName ? fileName.replace(/\.[^/.]+$/, "") : "";
  } catch {
    return "";
  }
};

const ServiceImages = ({ data, subservice, lang }) => {
  // Pick images / video
  const single = pick(data?.singleImage) || pick(data?.img);
  const beforeImage =
    pick(data?.leftImage) || pick(data?.beforeImage) || pick(data?.Beforeimg);
  const afterImage =
    pick(data?.rightImage) || pick(data?.afterImage) || pick(data?.Afterimg);
  const videoUrl = pick(data?.videoUrl) || pick(data?.video);

  const imageSrc = !subservice ? single : single || afterImage;
  const AlterNativeTags = data?.project_title || data?.subName;

  // File names for alt tags
  const AfterfileName = getFileNameFromFirebaseURL(afterImage);
  const BeforeFileName = getFileNameFromFirebaseURL(beforeImage);
  const SingleFileName = getFileNameFromFirebaseURL(single);

  // Responsive sizes — actual display size ke mutabiq
  const imageSizes =
    "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px";

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
        <div className="relative w-full h-[16rem] md:h-[29rem] lg:h-[clamp(18.5rem,27vw,33rem)] 2xl:h-[34rem]">
          <SEOImage
            loader={smartLoader}
            src={imageSrc}
            branding={true}
            alt={AlterNativeTags || SingleFileName}
            fill
            placeholder="blur"
            blurDataURL="/blur-placeholder.png"
            priority={false}   // ✅ Hero banner nahi — lazy load theek hai
            quality={60}       // ✅ 60 = best size/quality balance
            sizes={imageSizes}
            className="object-cover cursor-default"
          />

          {/* NOSCRIPT FALLBACK — JS disabled browsers ke liye */}
          <noscript>
            <img
              src={
                imageSrc.startsWith("/")
                  ? imageSrc
                  : `${imageSrc.split("?")[0]}?alt=media`
              }
              title={`${
                AlterNativeTags || SingleFileName || "Services"
              }-Pixel-Perfects-Solution-LLC`}
              alt={`${
                AlterNativeTags || SingleFileName || "Services"
              }-Pixel-Perfects-Solution-LLC`}
              className="absolute inset-0 w-full h-full object-cover"
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