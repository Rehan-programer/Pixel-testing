"use client";
import { useModal } from "@/common-components/providers/ModalContext";
import ServiceImages from "@/common-components/ServiceImages";
import ServicesButton from "@/common-components/ServicesButton";
import { useServicesHooks } from "@/utils/useServicesHooks";
import React from "react";
import { ArrowRight } from "lucide-react";
import { useConvertPrice } from "@/utils/ConvertPrice";
import MobileSelect from "@/common-components/MobileSelect";
import { SkeletonCard } from "./SkeletonCard";
import Link from "next/link";
export default function CSRTabService({
  lang,
  initialMainServices,
  initialSubServices,
}) {
  const {
    selectedCategory,
    MainService,
    handleSelectChange,
    setOpen,
    isLoading,
    filteredServices,
    ref,
    selectedLabel,
    open,
  } = useServicesHooks(lang, initialMainServices, initialSubServices);
  const { convertTextWithPrice } = useConvertPrice();
  const { setOpenContactModal, setRelatedData } = useModal();
  const handleModal = (data) => {
    setOpenContactModal(true);
    setRelatedData((prev) => ({
      ...prev,
      fieldName: data,
    }));
  };




  return (
    <>
      <MobileSelect
        MainService={MainService}
        selectedLabel={selectedLabel}
        open={open}
        setOpen={setOpen}
        handleSelectChange={handleSelectChange}
        selectedCategory={selectedCategory}
        ref={ref}
      />
      <ServicesButton
        MainService={MainService}
        handleSelectChange={handleSelectChange}
        selectedCategory={selectedCategory}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-[2%] justify-items-center">
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))
          : filteredServices?.map((item, index) => {
            // skip unwanted items
            if (
              [
                "Other Edits",
                "Commercial Virtual Staging",
                "Puesta en escena virtual comercial",
                "360 ° ESTADA VISTA",
                "360° Virtual Staging",
              ].includes(item.subName)
            )
              return null;
            if (
              (item.singleImage || item.img) === undefined &&
              !item.video &&
              !item.videoUrl &&
              !item.videoFile &&
              !item.leftImage &&
              !item.beforeImage
            ) {
              return null;
            }

            return (
              <div
                key={index}
                className="bg-white rounded-lg mt-[4%]  shadow-xl overflow-hidden w-full cursor-pointer hover:shadow-2xl transition-shadow duration-300"
              >
                {/* 🔸 Image Section */}
                <div className="relative w-full overflow-hidden">
                  <ServiceImages data={item} index={index} />
                </div>

                {/* 🔸 Text Section */}
                <Link href={item.link.replace("https://www.pxlperfects.com", "")}>
                  <div
                    className="p-[1rem] md:p-[3%] relative"
                  >
                    <h3 className=" font-bold mb-[1%]">{item.subName}</h3>
                    <p>{convertTextWithPrice(item.subDescription)}</p>

                    <div className="absolute right-[2%] bottom-[78%] lg:bottom-[6%] lg:right-[2%]">
                      <ArrowRight className="w-[1.5rem] h-[1.5rem] text-[#00cfaa]" />
                    </div>
                  </div>
                </Link>

              </div>
            );
          })}
      </div>
    </>
  );
}
