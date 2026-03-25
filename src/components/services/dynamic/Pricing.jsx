import SectionHeader from "@/common-components/SectionHeader";
import Link from "next/link";
import PriceCardsClient from "@/components/services/dynamic/PricingCards/PriceCardsClient";

export default function Pricing({ otheredit, data, subname, lang }) {
  const PORTAL = process.env.NEXT_PUBLIC_PORTAL;
  if (!data || data.length === 0) return null;

  return (
    <section className={` ${otheredit ? null : "bg-white container-global"}`}>
      {!otheredit && subname && (
        <div className="text-center ">
          <SectionHeader
            title="Pricing"
            description={`How Much Does Pixel's ${
              subname || data?.subname
            } Cost?`}
          />
        </div>
      )}

      {data?.length > 0 && (
        <div
          className={`   flex flex-col md:flex-row gap-8 justify-center ${
            otheredit ? " justify-end " : " justify-center"
          } `}
          style={{}}
        >
          {data?.map((item, idx) => (
            <div
              key={idx}
              className={`relative    bg-white overflow-hidden lg:rounded-2xl shadow-[0px_20px_20px_rgba(0,0,0,0.16)]   w-full ${
                otheredit
                  ? " lg:w-[100%] p-[8%] "
                  : " lg:w-[32%] p-[2rem] lg:py-[4%] lg:px-[2%]"
              }   flex flex-col space-y-4  `}
            >
              {!otheredit && idx === 0 && (
                <div
                  className="absolute top-5 w-[40%] text-center  p-[2%] right-[-12%] bg-teal-500 text-white transform rotate-50"
                  style={{
                    background:
                      "linear-gradient(90deg, rgb(24, 249, 208) 0%, rgba(0, 207, 169, 0.937) 55%)",
                  }}
                >
                  <p className="text-center text-white font-bold">
                    {" "}
                    Bulk Order
                  </p>
                </div>
              )}
              {otheredit && <h3 >{subname}</h3>}
              <PriceCardsClient item={item} otheredit={otheredit} />

              <Link
                target="_blank" title={lang === "en" ? "Place Order" : "Hacer un pedido"}
                href={`${PORTAL}${subname}`}
                className={"btn-header w-[50%] mt-[14%] m-auto text-center"}
              >
                {lang === "en" ? "Place Order" : "Hacer un pedido"}
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
