"use client";
import React from "react";
import ReactCompareImage from "react-compare-image";

// ✅ Canvas se Firebase image compress karta hai — 13MB → ~150KB WebP
async function compressImage(src, maxWidth = 900, quality = 0.75) {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const scale = Math.min(1, maxWidth / img.naturalWidth);
      const w = Math.round(img.naturalWidth * scale);
      const h = Math.round(img.naturalHeight * scale);
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      canvas.getContext("2d").drawImage(img, 0, 0, w, h);
      canvas.toBlob(
        (blob) => resolve(blob ? URL.createObjectURL(blob) : src),
        "image/webp",
        quality
      );
    };
    img.onerror = () => resolve(src); // CORS fail ho toh original use karo
    img.src = src;
  });
}

const ImageComparing = ({ beforeImageTag, afterImageTag, beforeImage, afterImage, subName, lang }) => {
  const leftLabel = lang === "es" ? "Después 24 horas" : "After 24 hours";
  const rightLabel = lang === "es" ? "Antes" : "Before";

  const [loaded, setLoaded] = React.useState(false);
  const [compressedAfter, setCompressedAfter] = React.useState(null);
  const [compressedBefore, setCompressedBefore] = React.useState(null);
  const blobRefs = React.useRef({ after: null, before: null });

  React.useEffect(() => {
    setLoaded(false);
    setCompressedAfter(null);
    setCompressedBefore(null);

    Promise.all([
      compressImage(afterImage, 900, 0.75),
      compressImage(beforeImage, 900, 0.75),
    ]).then(([after, before]) => {
      // Purane blob URLs memory free karo
      if (blobRefs.current.after?.startsWith("blob:")) URL.revokeObjectURL(blobRefs.current.after);
      if (blobRefs.current.before?.startsWith("blob:")) URL.revokeObjectURL(blobRefs.current.before);
      blobRefs.current = { after, before };
      setCompressedAfter(after);
      setCompressedBefore(before);
      setLoaded(true);
    });

    return () => {
      if (blobRefs.current.after?.startsWith("blob:")) URL.revokeObjectURL(blobRefs.current.after);
      if (blobRefs.current.before?.startsWith("blob:")) URL.revokeObjectURL(blobRefs.current.before);
    };
  }, [beforeImage, afterImage]);

  return (
    <div className="no-swipe cursor-e-resize rounded-[10px] w-full h-full">

      <noscript>
        <style>{`.js-compare-widget { display: none !important; }`}</style>
      </noscript>

      <div className="js-compare-widget">
        {!loaded ? (
          <div className="w-full h-[500px] skeleton-shimmer rounded-lg" />
        ) : (
          <ReactCompareImage
            leftImage={compressedAfter}
            rightImage={compressedBefore}
            leftImageLabel={
              <span className="text-white text-[clamp(0.8rem,1vw,1rem)]">
                {leftLabel}
              </span>
            }
            rightImageLabel={
              <span className="text-white text-[clamp(0.8rem,1vw,1rem)]">
                {rightLabel}
              </span>
            }
            aspectRatio="wider"
            handleSize={40}
            style={{ height: "100%", width: "100%" }}
            leftImageCss={{ objectFit: "cover", height: "100%", width: "100%" }}
            rightImageCss={{ objectFit: "cover", height: "100%", width: "100%" }}
            leftImageAlt={`${afterImageTag}-Pixel Perfects Solution-LLC`}
            rightImageAlt={`${beforeImageTag}-Pixel Perfects Solution-LLC`}
          />
        )}
      </div>

      <noscript>
        <div style={{ position: "relative", width: "100%", display: "flex", overflow: "hidden", borderRadius: "10px" }}>
          <img
            src={afterImage}
            alt={`${afterImageTag}-Pixel Perfects Solution-LLC`}
            title={`${afterImageTag}-Pixel Perfects Solution-LLC`}
            style={{ width: "50%", objectFit: "cover", display: "block" }}
            className="h-[20rem] md:h-[26rem] lg:h-[37vh] xl:h-[60vh]"
          />
          <img
            src={beforeImage}
            alt={`${beforeImageTag}-Pixel Perfects Solution-LLC`}
            title={`${beforeImageTag}-Pixel Perfects Solution-LLC`}
            style={{ width: "50%", objectFit: "cover", display: "block" }}
            className="h-[20rem] md:h-[26rem] lg:h-[37vh] xl:h-[60vh]"
          />
          <div style={{
            position: "absolute", left: "50%", top: 0,
            width: "2px", height: "100%", background: "white",
            transform: "translateX(-50%)"
          }} />
          <div style={{
            position: "absolute", left: "50%", top: "50%",
            transform: "translate(-50%, -50%)",
            width: "50px", height: "50px",
            border: "2px solid white", borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            background: "rgba(0,0,0,0.4)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.4)"
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
              fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 7-5 5 5 5" />
              <path d="m15 7 5 5-5 5" />
            </svg>
          </div>
          <span style={{
            position: "absolute", left: "1rem", top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.6)", color: "white",
            padding: "4px 12px", fontSize: "0.875rem", borderRadius: "4px"
          }}>
            {lang === "es" ? "Después 24 horas" : "After 24 hours"}
          </span>
          <span style={{
            position: "absolute", right: "1rem", top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.6)", color: "white",
            padding: "4px 12px", fontSize: "0.875rem", borderRadius: "4px"
          }}>
            {lang === "es" ? "Antes" : "Before"}
          </span>
        </div>
      </noscript>

    </div>
  );
};

export default ImageComparing;