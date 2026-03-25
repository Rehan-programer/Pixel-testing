import ServiceImages from "@/common-components/ServiceImages";
import Link from "next/link";
import ServiceBannerClient from "./ServiceBannerClient";

export default function ServiceBanner({ data, lang }) {

  const PORTAL = process.env.NEXT_PUBLIC_PORTAL;
  return (
    <section
      style={{
        background:
          "linear-gradient(360deg, rgb(13, 21, 131) 0%, rgb(169, 252, 237) 0%, rgb(255, 255, 255) 100%)",
      }}
    >
      <div className="container-global  flex flex-col lg:flex-row items-center gap-4 ">
        {/* LEFT CONTENT */}
        <div className="lg:w-[45%] w-full">
          <div className="flex items-center gap-x-2">
            <div className="w-5 h-[2.5px] bg-[#292a76]"></div>
            <p className="font-bold">
              USA's Trusted {""}
              {data.subName}
            </p>
          </div>
          <h1 className="my-[1rem] lg:my-[2%] ">{data.subName}</h1>

         <ServiceBannerClient data={data}/>
          <Link title={lang === "en" ? "Place Order" : "Hacer un pedido"}
            href={`${PORTAL}${data.subName}`}
            className={"btn-slider"}
            target="_blank"
          >
            {lang === "en" ? "Place Order" : "Hacer un pedido"}
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="lg:w-[55%] w-full  rounded-[0.45rem] overflow-hidden ">
          <ServiceImages data={data} lang={lang} />
        </div>
      </div>
    </section>
  );
}
