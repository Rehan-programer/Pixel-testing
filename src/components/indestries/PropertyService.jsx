"use client";
import SectionHeader from "@/common-components/SectionHeader";
import ServiceImages from "@/common-components/ServiceImages";
import Link from "next/link";
import { useState, useRef, useEffect, useContext } from "react";

import { useConvertPrice } from "@/utils/ConvertPrice";
import { CurrencyContext } from "@/utils/useRootLayout";
import MobileSelect from "@/common-components/MobileSelect";

const PropertyServices = ({ data, lang }) => {
  const PORTAL = process.env.NEXT_PUBLIC_PORTAL;
  const [selectedService, setSelectedService] = useState(
    data.ServiceData[0]?.label
  );
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const { convertTextWithPrice } = useConvertPrice();
  const { currency } = useContext(CurrencyContext);

  const handleSelectChange = (value) => {
    setSelectedService(value);
    setOpen(false);
  };
useEffect(() => {
  if (data?.ServiceData?.length) {
    setSelectedService(data.ServiceData[0].label);
  }
}, [data]);
  // close on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const filteredData = data?.ServiceData?.filter(
    (item) => item.label === selectedService
  );

  const selectedIndex = data.ServiceData.findIndex(
    (item) => item.label === selectedService
  );


  return (
    <div className="container-global ">
      <div className="text-center ">
        <SectionHeader title={data.title} />
      </div>

      {/* Dropdown for mobile */}
      <div className="flex lg:hidden justify-center">
        <MobileSelect
          ref={ref}
          setOpen={setOpen}
          open={open}
          selectedLabel={selectedService}
          MainService={data.ServiceData}
          handleSelectChange={handleSelectChange}
          selectedCategory={selectedService}
        />
      </div>

      {/* Buttons for larger screens */}
      <div className="hidden lg:flex justify-center flex-wrap gap-2 mb-[1rem] lg:mb-[2%]">
        {data.ServiceData.map((service, idx) => (
          <button
            key={idx}
            onClick={() => handleSelectChange(service.label)}
            className={` ${selectedService === service.label ? "btn-slider" : "btn-header"
              }`}
          >
            {service.label}
          </button>
        ))}
      </div>

      {/* Service Details */}
      {filteredData.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col-reverse lg:flex-row justify-between lg:items-center lg:gap-4  ${selectedIndex % 2 !== 0
            ? "lg:flex-row-reverse"
            : "lg:flex-row"
            }
    lg:!bg-none lg:rounded-none
  `}
        >
          <div className="lg:w-[45%] w-full overflow-hidden rounded-b-2xl rounded-top-0 lg:rounded-2xl">
            <ServiceImages data={item} />
          </div>

          <div className="lg:w-1/2  lg:bg-none bg-gradient-to-b
    from-[rgba(35,156,144,0.1)]
    to-[rgba(11,62,161,0.1)]
    rounded-t-[15px] p-[1rem] md:p-[1.5rem]">
            <h3 className="border-b-[3px] border-[#00cfaa] inline-block pb-[0.5rem] lg:pb-[1%]">
              {item.label}
            </h3>
            <p className="my-[2%]">{item.para}</p>

            <ul className="mb-[1rem] lg:mb-[2%]  space-y-2 lg:space-0">
              {item.points?.map((point, idx) => (
                <li key={idx} className="flex items-center  gap-2">
                  <span className="text-[#00cfaa] ">
                    <svg
                      className="w-2 h-2"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"
                      ></path>
                    </svg>
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <span className="flex items-baseline  my-[0.8rem]">
              <span className="text-[#00cfaa] bigHeading  p-0 m-0 flex gap-1">
                {convertTextWithPrice(item.price).replace(/[^0-9.]/g, "")}
              </span>
              <span className="font-normal text-[18px]">
                <span className="text-[#00cfaa] text-[18px]">({currency})</span>{" "}
                <span className="text-black">{item.pricetitle}</span>
              </span>
            </span>

            {item.link && (
              <Link title={lang === "en" ? "Place Order" : "Hacer un pedido"}
                target="_blank"
                href={`${PORTAL}${item.label}`}
                className={"btn-slider "}
              >
                {lang === "en" ? "Place Order" : "Hacer un pedido"}
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyServices;
