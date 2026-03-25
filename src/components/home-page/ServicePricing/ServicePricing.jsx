import React from "react";
import  {
  ServicePricingButton,
  ServicePricingChange,
} from "./ServicePricingClient";

const ServicePricing = ({lang,data}) => {
  
  return (
    <section className="flex flex-col lg:flex-row items-center justify-around  container-global ">
      {/* ✅ Left Heading Section */}
      <div >
  <h2
    className="hidden lg:block bigHeading 
               text-right text-[#292A76]"
  >
    {lang === "es" ? (
      <>
        Nuestros
        <br />
        Más
        <br />
        Vendidos
      </>
    ) : (
      <>
        Our
        <br />
        Best
        <br />
        Selling
      </>
    )}
  </h2>

  {/* 📱 Mobile Heading */}
  <h2
    className="block lg:hidden  font-bold text-center text-[#292A76] mb-4"
  >
    {lang === "es" ? "Nuestros Más Vendidos" : "Our Best Selling"}
  </h2>  </div>
      <div className="flex flex-wrap md:flex-nowrap flex-col md:flex-row justify-center lg:justify-end gap-x-[2%] w-[80%] md:w-full lg:w-[60%]">
        {data?.map((pricingOption, i) => (
          <div
            key={i}
            className="pricingbox p-[1rem] lg:p-[2%]   mt-2 lg:mt-0"
          >
            {/* ✅ Title */}
            <p className="font-bold inline-block border-b-2 pb-[2%] lg:pb-[4%]  border-orange-400">
              {pricingOption.label}
            </p> 
            <ServicePricingChange pricingOption={pricingOption} />

            {/* ✅ Descriptions */}
            <div className="mt-[2%] text-left space-y-1">
              {pricingOption.description?.map((desc, index) => (
                <p key={index}>
                  - {desc}
                </p>
              ))}
            </div>

            {/* ✅ Button */}
            <div className="my-4">
              <ServicePricingButton
                label={pricingOption.label}
                points={pricingOption.description}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicePricing;
