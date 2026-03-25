import SectionHeader from "@/common-components/SectionHeader";
import Image from "next/image";
import React from "react";
import ChooseCardClient from "./ChooseCardClient";

const ChooseCard = ({ data, lang }) => {
  const title = {
    en: [
      "",
      "Price",
      "Turnaround",
      "Rapid Delivery",
      "Unlimited Revisions",
      "Money Back Guarantee",
      "Discounts Available",
      "Relevant Free Tools",
    ],
    es: [
      "",
      "Precio",
      "Plazo de Entrega",
      "Entrega Rápida",
      "Revisiones Ilimitadas",
      "Garantía de Devolución",
      "Descuentos Disponibles",
      "Herramientas Gratuitas Relevantes",
    ],
  };

  // keeping your existing logic as is
  const Title = lang === "en" ? title.es : title.en;

  // 🔹 Reusable card – NO width, NO breakpoint classes here
  const RenderCard = ({ item, index }) => (
    <div
      className={`py-[2%] transition-all duration-500 ease-in-out
        ${
          index === 0
            ? `rounded-2xl border-[#00CFAA] border-t-[14px] border-r-[4px] border-b-[4px] border-l-[4px]
               group-hover:shadow-[0px_25px_55px_rgba(0,65,142,0.55)]`
            : "border-transparent border-t-[14px] border-r-[4px] border-b-[4px] border-l-[4px]"
        }`}
    >
      {/* Title or Logo */}
      <div className="font-bold text-center flex items-center justify-center h-[clamp(2.5rem,4vw,4.375rem)] ">
        {item.title === "logo" ? (
          <Image
            src="/Header LOGO .webp"
            alt="Pixel Perfects Solutions LLC"
            title="Pixel Perfects Solutions LLC"
            width={140}
            height={60}
            priority
            className="w-[80%]"
          />
        ) : (
          <h5 className="font-bold">{item.title}</h5>
        )}
      </div>

      {/* VALUES */}
      <div className="text-center">
        {[
          <ChooseCardClient item={item.price} />,
          item.turnaround,
          item.rapidDelivery,
          item.unlimitedRevisions,
          item.moneyBackGuarantee,
          item.discountsAvailable,
          item.relevantFreeTools,
        ].map((subitem, i) => (
          <div
            key={i}
            className="h-[clamp(1.875rem,3vw,3.4375rem)]"
          >
            <p>{subitem}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="container-global lg:w-[80%] xl:w-[70%]">
      <div className="text-center ">
        <SectionHeader
          title={data?.head}
          description={data?.para}
          width={"lg:w-[60%]"}
        />
      </div>
      <div
        className="px-[4%] pb-[4%] pt-[2%] rounded-2xl group"
        style={{
          background:
            "linear-gradient(360deg, rgb(13, 21, 131) 0%, rgb(169, 252, 237) 0%, rgb(255, 255, 255) 100%)",
        }}
      >
        <div className="bg-white rounded-2xl">
          <div className="flex justify-between items-center bg-white px-[2%] rounded-2xl">
            {/* Left Title Column */}
            <div className="pt-[2%] w-[50%] md:w-[26%] lg:w-[20%]  border-transparent border-t-[14px] border-r-[4px] border-b-[4px] border-l-[4px]">
              {Title.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    index === 0 ? `h-[clamp(2.5rem,4vw,4.375rem)]` : ""
                  } h-[clamp(1.875rem,3vw,3.4375rem)]`}
                >
                  <p className="font-bold">{item}</p>
                </div>
              ))}
            </div>

            {/* 🖥 DESKTOP: show all items */}
            {data?.items?.map((item, index) => (
              <div
                key={`lg-${index}`}
                className={`hidden lg:block ${index===0?"w-[26%] mb-[-1%]":"w-[20%]"}`}

              >
                <RenderCard item={item} index={index} />
              </div>
            ))}

            {/* 📱 TABLET: show first 2 items */}
            {data?.items?.slice(0, 2)?.map((item, index) => (
              <div
                key={`md-${index}`}
                className={`hidden md:block lg:hidden ${index===0?"mb-[-0.6rem]":null} w-[26%]`}
              >
                <RenderCard item={item} index={index} />
              </div>
            ))}

            {/* 📲 MOBILE: show first 1 item, 50% width */}
            {data?.items?.slice(0, 1)?.map((item, index) => (
              <div
                key={`sm-${index}`}
                className="block md:hidden w-[50%]"
              >
                <RenderCard item={item} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseCard;
