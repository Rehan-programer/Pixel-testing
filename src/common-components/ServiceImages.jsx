"use client";

import Image from "next/image";
import ImageComparing from "./ImageComparing";
import SEOImage from "./SeoImage/SeoImage";

/**
 * ✅ Firebase Loader for Next.js Image
 * Automatically resizes images based on requested width
 * Converts to WebP for modern browsers
 */
const firebaseLoader = ({ src, width, quality }) => {
  if (!src) return "";
  const q = quality || 70;
  const w = width || 800;
  // Using format=webp for modern browsers
  // alt=media is required by Firebase Storage
  return `${src}?alt=media&w=${w}&q=${q}&format=webp`;
};

/**
 * Helper to pick first item if array or just return value
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
  const imageSizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px";

  return (
    <>
      {/* ✅ BEFORE / AFTER COMPARISON */}
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
          {/* ✅ OPTIMIZED IMAGE */}
          <SEOImage
            loader={firebaseLoader}
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

          {/* ✅ NOSCRIPT FALLBACK with optimized image */}
          <noscript>
            <img
              src={`${imageSrc}?alt=media&w=800&q=70&format=webp`}
              title={`${AlterNativeTags || SingleFileName || "Services"}-Pixel-Perfects-Solution-LLC`}
              alt={`${AlterNativeTags || SingleFileName || "Services"}-Pixel-Perfects-Solution-LLC`}
              className="relative w-full h-[16rem] md:h-[29rem] lg:h-[clamp(18.5rem,27vw,33rem)] 2xl:h-[34rem] object-cover"
            />
          </noscript>
        </div>
      ) : videoUrl ? (
        // ✅ VIDEO FALLBACK
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