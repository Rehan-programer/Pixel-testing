"use client";

import { useState } from "react";
import Image from "next/image";

// react-photo-album + lightbox
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import SEOImage from "@/common-components/SeoImage/SeoImage";

export default function GalleryWithLightbox({ images = [] }) {
  const [index, setIndex] = useState(-1);

  if (!Array.isArray(images) || images.length === 0) return null;

  // Photo album ke liye format conversion
  const photos = images.map((img) => ({
    src: img,
    width: 800, // default width
    height: 600, // default height
  }));

  // Big image aur small images manually render karna for layout control
  const bigImage = photos[0];
  const smallImages = photos.slice(1, 5); // pehle 4 chhoti images

  
  return (
    <div className="grid lg:grid-cols-5 gap-3">
      {/* BIG IMAGE */}
      <div className="col-span-3 h-[16rem] lg:h-full relative rounded-lg overflow-hidden cursor-pointer"
        onClick={() => setIndex(0)}
      >
        <SEOImage
          src={bigImage.src}
          alt={"Property Listing 1"}
          fill
          className="object-cover"
        />
      </div>

      {/* SMALL IMAGES */}
      <div className="col-span-3 lg:col-span-2 grid grid-cols-2 gap-3">
        {smallImages.map((img, idx) => (
          <div
            key={idx}
            className="relative h-40 md:h-48 rounded-lg overflow-hidden cursor-pointer"
            onClick={() => setIndex(idx + 1)}
          >
            <SEOImage
              src={img.src}
              alt={`Property Listing ${idx + 1}`}
              fill
              className="object-cover"
            />
            {idx === 3 && photos.length > 5 && (
              <div className="absolute inset-0 z-10 bg-black/50 flex items-center justify-center text-white text-2xl font-semibold">
                +{photos.length - 5}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
}
