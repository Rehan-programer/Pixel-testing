"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import SectionHeader from "@/common-components/SectionHeader";
import MobileSelect from "@/common-components/MobileSelect";
import SEOImage from "@/common-components/SeoImage/SeoImage";

const Images = ({ data }) => {
  const [selectedCategoryName, setSelectedCategoryName] = useState(data[0]?.room);
const [selectedSubcategoryName, setSelectedSubcategoryName] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const [dropdownOpen, setDropdownOpen] = useState({ category: false, subcategory: false });

  // ---------------- SAFETY CHECKS ----------------
  if (!data || data.length === 0) return null;

const selectedCategory = useMemo(() =>
  data.find(cat => cat.room === selectedCategoryName),
[selectedCategoryName, data]);  if (!selectedCategory) return null;

  const images = useMemo(() => {

    if (selectedSubcategoryName === "All") {
      return selectedCategory.furnitureStyles.flatMap(
        style => style.images || []
      );
    }

    const style = selectedCategory.furnitureStyles.find(
      s => s.styleName === selectedSubcategoryName
    );

    return style?.images || [];

  }, [selectedSubcategoryName, selectedCategory]);

  if (images.length === 0) return null;


  const photos = images.map((img) => ({
    src: img,
    width: 800,
    height: 600,
  }));

  // ----------- HANDLERS -----------
 const handleCategorySelect = (room) => {
    setSelectedCategoryName(room);
    setSelectedSubcategoryName("All"); // ✅ reset to ALL
  };
const handleSubcategorySelect = (styleName) => {
  setSelectedSubcategoryName(styleName);
};

  const toggleDropdown = (type) => {
    setDropdownOpen(prev => ({
      category: type === "category" ? !prev.category : false,
      subcategory: type === "subcategory" ? !prev.subcategory : false,
    }));
  };
    const ref = useRef(null);
  
    useEffect(() => {
      const handler = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
           setDropdownOpen({
        category: false,
        subcategory: false
      });
        }
      };
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }, []);
  return (
    <div className=" container-global mx-auto">
      {/* ----------- Breadcrumb ----------- */}
      <div className="mb-6">
        <div className="text-gray-500 text-sm mb-3 tracking-wide">
          Design Gallery <span className="mx-1">›</span>
          {selectedCategory.room} <span className="mx-1">›</span>
 {selectedSubcategoryName}        </div>
        <hr className="w-full border-[#00cfaa]" />
      </div>

      {/* ----------- Section Header ----------- */}
      <div className="text-center">
        <SectionHeader
title={`${selectedSubcategoryName} ${selectedCategory.room} Design Ideas`}        />
      </div>

      {/* ========== MOBILE SELECTS ========== */}
      <div className="flex  gap-4 mb-6 w-full lg:w-[40%]">
        {/* CATEGORY SELECT */}
     <MobileSelect
  isgallerypage={true}
  open={dropdownOpen.category} ref={ref}
  setOpen={() => toggleDropdown("category")}
  selectedLabel={selectedCategory.room}
  MainService={data}               // rooms array
  selectedCategory={selectedCategory.room}
  handleSelectChange={handleCategorySelect}
/>

        {/* SUBCATEGORY SELECT */}
       <MobileSelect
  isgallerypage={true}
  open={dropdownOpen.subcategory} ref={ref}
  setOpen={() => toggleDropdown("subcategory")}
  selectedLabel={selectedSubcategoryName}
   MainService={[
    { styleName: "All" }, // ✅ add ALL option
    ...selectedCategory.furnitureStyles
  ]}
  selectedCategory={selectedSubcategoryName}
  handleSelectChange={handleSubcategorySelect}
/>
      </div>

      {/* ========== IMAGES GRID ========== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
        {photos?.map((img, idx) => (
          <div
            key={idx}
            className="relative h-[16rem] lg:h-[18vw] 2xl:h-[20rem] rounded-lg overflow-hidden cursor-pointer"
            onClick={() => setLightboxIndex(idx)}
          >
            <SEOImage src={img.src} alt={`${selectedCategory.room} ${selectedSubcategoryName !== "All" ? selectedSubcategoryName : ""} virtual staging design example ${idx + 1} - Pixel Perfects Solutions LLC`}
 fill className="object-cover" />

            {/* +More overlay */}
            {idx === 3 && photos.length > 4 && (
              <div className="absolute inset-0 z-10 bg-black/50 flex items-center justify-center text-white text-2xl font-semibold">
                +{photos.length - 4}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ========== LIGHTBOX ========== */}
      <Lightbox
        slides={photos}
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
};

export default Images;
