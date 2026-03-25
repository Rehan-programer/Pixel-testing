"use client"; // only this component runs on client

import { useState, useEffect } from "react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import "animate.css";

import PropertyExamplesCarousel from "../services/dynamic/PropertyExamplesCarousel";
import { usePathname, useRouter } from "next/navigation";
import SEOImage from "@/common-components/SeoImage/SeoImage";

export default function ServiceCardClient({ service }) {
  const [animate, setAnimate] = useState(false);
  const [openPopup, setOpenPopup] = useState({
    open: false,
    selectedService: null,
  });
  const pathName = usePathname();
  const router = useRouter();
  useEffect(() => {
    if (openPopup.open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openPopup.open]);

  return (
    <>
      <div
        className="group lg:w-[32%]  relative hidden lg:block "
        onMouseEnter={() => setAnimate(true)}
        onMouseLeave={() => setAnimate(false)}
      >
        <div className="relative overflow-hidden rounded-xl shadow-md cursor-pointer">
          {service.leftImage || service.afterImage?.length > 0 ? (
            <SEOImage
              src={service.leftImage || service.afterImage?.[0]}
              alt={service.fieldName || service.subName}
              width={500}
              height={400} quality={65}
              className="w-full h-64 object-cover"
            />
          ) : service.video ? (
            <video
              src={service.video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-64 object-cover"
            />
          ) : (
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center" />
          )}

          <div
            key={animate}
            className={`absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-[6%] rounded-xl
              bg-white/0 group-hover:bg-white/90 opacity-0 group-hover:opacity-100 transition-all duration-500`}
          >
            <div className="animate__animated animate__zoomIn">
              <h4 className="font-semibold mb-[2%]">
                {service.hoverDetail || service.subDescription?.slice(0,100)}
              </h4>
              <button
                onClick={() =>
                  pathName === "/other-edits"
                    ? setOpenPopup({ open: true, selectedService: service })
                    : router.push(service.link)
                }
                className="btn-slider"
              >
                Explore
              </button>
            </div>
          </div>
        </div>

        <h3 className="text-center mt-[2%] transition-opacity duration-300 group-hover:opacity-0">
          {service.fieldName || service.subName}
        </h3>
      </div>

   

      {openPopup.open && openPopup.selectedService && (
        <>
          <div className="fixed inset-0 bg-white/90 backdrop-blur-sm flex justify-center items-center z-4000 space-x-4 ">
            {/* Close Button */}
            <div className="container-global p-0 lg:w-[80%]  xl:w-[60%] relative ">
              <button
                className="bg-[#00CFAA] z-50 right-[-2%] top-[-6%] w-10 h-10 flex items-center justify-center rounded-full absolute text-black text-2xl"
                onClick={() => setOpenPopup(false)}
              >
                &times;
              </button>

              <PropertyExamplesCarousel
                subname={openPopup?.selectedService?.subName}
                otheredit={true}
                pricing={openPopup?.selectedService?.pricedetail}
                data={service?.servicespropertexamples}
              />
            </div>
          </div>

          <div className=" w-full md:w-[48.6%] lg:w-[32%] lg:hidden rounded-xl shadow-md overflow-hidden bg-white">
            {service.leftImage ? (
              <SEOImage
                src={service.leftImage}
                alt={service.fieldName}
                width={500}  quality={65}
                height={400}
                className="w-full h-56 object-cover"
              />
            ) : service.video ? (
              <video
                src={service.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-56 object-cover"
              />
            ) : (
              <div className="w-full h-56 bg-gray-200 flex items-center justify-center" />
            )}

            <div className="text-center py-8 px-4">
              <h3 className="mb-[4%]">{service.fieldName}</h3>
              {service.hoverDetail && (
                <p className="mb-4">{service.hoverDetail}</p>
              )}
              <Link href={service.link} title="Explore" className="btn-slider">
                Explore
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
