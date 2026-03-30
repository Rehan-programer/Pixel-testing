"use client";

import Image from "next/image";

const firebaseLoader = ({ src, width, quality }) => {
  if (!src) return "";

  try {
    const url = new URL(src);

    // Firebase optimization params
    url.searchParams.set("w", width);
    url.searchParams.set("q", quality || 60);

    return url.toString();
  } catch {
    return src;
  }
};

const SEOImage = ({
  src,
  alt,
  title,
  branding = true,
  quality = 60,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px",
  ...props
}) => {

  if (!src) return null;

  const brandText = "Pixel Perfects Solutions LLC";

  const finalAlt = branding
    ? `${alt || "Services"} - ${brandText}`
    : alt;

  const finalTitle = branding
    ? `${title || alt || "Services"} - ${brandText}`
    : title;

  return (
    <Image
      src={src}
      alt={finalAlt}
      title={finalTitle}
      loader={firebaseLoader}
      quality={quality}
      sizes={sizes}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      placeholder="empty"
      {...props}
    />
  );
};

export default SEOImage;