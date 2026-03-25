"use client";

import { useModal } from "@/common-components/providers/ModalContext";
import ServiceImages from "@/common-components/ServiceImages";
import ServicesButton from "@/common-components/ServicesButton";
import { useServicesHooks } from "@/utils/useServicesHooks";
import React from "react";
import { useConvertPrice } from "@/utils/ConvertPrice";
import { useRouter } from "next/navigation";
import MobileSelect from "@/common-components/MobileSelect";
import Link from "next/link";
import { BeforeAfterSkeleton } from "../BeforeAfterSkeleton";

const getPath = (url) => {
    try {
        return new URL(url).pathname;
    } catch {
        return url;
    }
};

export default function BeforeAfterClient({
    lang,
    initialMainServices,
    initialSubServices,
}) {

    const PORTAL = process.env.NEXT_PUBLIC_PORTAL;

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
    } = useServicesHooks(
        lang,
        initialMainServices,
        initialSubServices
    );

    const router = useRouter();
    const { convertTextWithPrice } = useConvertPrice();
    const { setOpenContactModal, setRelatedData } = useModal();

    const handleModal = (data) => {
        setOpenContactModal(true);
        setRelatedData((prev) => ({
            ...prev,
            fieldName: data,
        }));
    };

    const visibleServices = filteredServices?.filter((item) => {
        if (
            [
                "Other Edits",
                "Commercial Virtual Staging",
                "Puesta en escena virtual comercial",
                "360 ° ESTADA VISTA",
                "360° Virtual Staging",
            ].includes(item.subName)
        ) return false;

        if (
            (item.singleImage || item.img) === undefined &&
            !item.video &&
            !item.videoUrl &&
            !item.leftImage &&
            !item.beforeImage
        ) return false;

        return true;
    });

    return (
        <div className="container-global">

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

            {isLoading
                ? Array.from({ length: 4 }).map((_, i) => (
                    <BeforeAfterSkeleton key={i} />
                ))
                : visibleServices?.map((item, index) => {
                    const itemPath = getPath(item.link);

                    return (
                        <div
                            key={index}
                            className={`mt-[2rem] flex flex-col-reverse rounded-lg mb-[1rem] lg:mt-[2%] shadow-xl overflow-hidden
                              ${index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
                            style={{
                                background:
                                    "linear-gradient(rgba(35, 156, 144, 0.1), rgba(11, 62, 161, 0.1))",
                            }}
                        >
                            <div className="lg:w-1/2 w-full overflow-hidden">
                                <ServiceImages lang={lang} data={item} index={index} />
                            </div>

                            <div
                                onClick={() => {
                                    handleModal(item.subName);
                                    router.push(itemPath);
                                }}
                                className="px-[1rem] py-[2rem] md:p-[3%] lg:p-[2%] w-full lg:w-1/2"
                            >
                                <h2>{item.subName}</h2>
                                <p className="my-[1rem] lg:my-[2%]">{item.subDescription}</p>

                                <ul className="space-y-1 lg:space-y-3 mb-[1rem] lg:mb-[2%]">
                                    {item.points?.map((pt, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-[#00cfaa] mt-[6px]">
                                                <svg
                                                    className="w-2 h-2 flex-shrink-0 text-[#0ccfaa]"
                                                    focusable="false"
                                                    aria-hidden="true"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"
                                                    />
                                                </svg>
                                            </span>
                                            <span>{convertTextWithPrice(pt)}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex gap-2 mt-[6%]">
                                    <Link
                                        title={lang === "en" ? "Explore" : "Explorar"}
                                        href={itemPath}
                                        className="btn-slider"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {lang === "en" ? "Explore" : "Explorar"}
                                    </Link>

                                    <div
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleModal(item.subName);
                                        }}
                                        className="btn-slider cursor-pointer"

                                    >
                                        {lang === "en" ? "Get a Quote" : "Obtener una cotización"}
                                    </div>

                                    <Link
                                        title={lang === "en" ? "Place Order" : "Hacer un pedido"}
                                        target="_blank"
                                        href={`${PORTAL}${item.subName}`}
                                        className="btn-slider"
                                    >
                                        {lang === "en" ? "Place Order" : "Hacer un pedido"}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}