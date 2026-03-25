"use client";

import Image from "next/image";
import ImageComparing from "./ImageComparing";
import SEOImage from "./SeoImage/SeoImage";

/**
 * Firebase Loader for Next.js Image
 * Automatically resizes images on the fly
 */
const firebaseLoader = ({ src, width, quality }) => {
  if (!src) return "";
  // Add width, quality, and convert to WebP if possible
  return `${src}?alt=media&w=${width || 800}&q=${quality || 70}&format=webp`;
};

const ServiceImages = ({ data, subservice, photographer, lang }) => {
  // Helper: pick first element if array, else return value
  const pick = (val) => (Array.isArray(val) ? (val.length > 0 ? val[0] : null) : val);

  const single = pick(data?.singleImage) || pick(data?.img);
  const videoUrl = pick(data?.videoUrl) || pick(data?.video);

  const beforeImage = pick(data?.leftImage) || pick(data?.beforeImage) || pick(data?.Beforeimg);
  const afterImage = pick(data?.rightImage) || pick(data?.afterImage) || pick(data?.Afterimg);

  const imageSrc = !subservice ? single : single || afterImage;
  const AlterNativeTags = data?.project_title || data?.subName;

  // Extract filename without extension
  const getFileNameFromFirebaseURL = (url) => {
    try {
      const decoded = decodeURIComponent(url);
      const fileName = decoded.split("/o/")[1].split("?")[0].split("/").pop();
      return fileName.replace(/\.[^/.]+$/, "");
    } catch {
      return "";
    }
  };

  const AfterfileName = getFileNameFromFirebaseURL(afterImage);
  const BeforeFileName = getFileNameFromFirebaseURL(beforeImage);
  const SingleFileName = getFileNameFromFirebaseURL(single);

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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            decoding="async"
            className="object-cover cursor-default"
          />

          {/* ✅ NOSCRIPT FALLBACK */}
          <noscript>
            <img
              src={imageSrc}
              title={`${AlterNativeTags || SingleFileName || "Services"}-Pixel-Perfects-Solution-LLC`}
              alt={`${AlterNativeTags || SingleFileName || "Services"}-Pixel-Perfects-Solution-LLC`}
              className="relative w-full h-[16rem] md:h-[29rem] lg:h-[clamp(18.5rem,27vw,33rem)] 2xl:h-[34rem]"
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