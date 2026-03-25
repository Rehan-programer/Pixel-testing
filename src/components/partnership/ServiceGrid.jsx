import SectionHeader from "@/common-components/SectionHeader";
import ServiceCardClient from "../partnership/ServiceGridClient";
import Link from "next/link";
import Image from "next/image";
import SEOImage from "@/common-components/SeoImage/SeoImage";

export default function ServiceGrid({ data, lang }) {

  return (
    <section className="container-global ">
      <div className="text-center">
        <h4 className="font-bold">
          {lang === "en" ? "Services" : "Servicios"}
        </h4>
        <SectionHeader
          title={
            lang === "en"
              ? "Explore All Services"
              : "Explorar Todos los Servicios"
          }
        />
      </div>

      <div className={"lg:flex hidden flex-wrap  justify-center items-center lg:w-[80%] mx-auto gap-4  "}>
        {data?.map((service, index) => (
          <ServiceCardClient key={index} service={service} />
        ))}
        
      </div>
            <div className={" grid grid-cols-1 md:grid-cols-2 justify-center items-center  lg:hidden lg:w-[80%] mx-auto gap-4  "}>
         {data?.map((service, index) => (
        <div key={index} className="  rounded-xl shadow-md overflow-hidden bg-white">
 {service.leftImage || service.afterImage?.length > 0 ? (
  <SEOImage
    src={service.leftImage || service.afterImage?.[0]}
    alt={service.fieldName || service.subName}
    width={500}
    height={400}
    className="w-full h-[15rem] object-cover"
  />
) : service.video ? (
  <video
    src={service.video}
    autoPlay
    muted
    loop
    playsInline
    className="w-full object-cover"
  />
) : (
  <div className="w-full bg-gray-200 flex items-center justify-center" />
)}

        <div className="text-center px-[1rem] py-[1.5rem]">
          <h3>{service.fieldName || service.subName}</h3>
          <p className="my-4 h-[6rem] ">
            {service.hoverDetail || service.subDescription.slice(0,10)}
          </p>
          <Link href={service.link} title="Explore" className="btn-slider">
            Explore
          </Link>
        </div>
      </div>
        ))}
      </div>
        
    </section>
  );
}
