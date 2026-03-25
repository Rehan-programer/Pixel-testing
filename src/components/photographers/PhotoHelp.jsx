import SectionHeader from "@/common-components/SectionHeader";
import SEOImage from "@/common-components/SeoImage/SeoImage";
import Image from "next/image";
import Link from "next/link";

export default function PhotoHelp({ data }) {
  return (
    <section
      className="w-full py-[2rem] lg:pt-[2%] lg:pb-0 "
      style={{
        background:
          "linear-gradient(360deg, rgb(13, 21, 131) 0%, rgb(169, 252, 237) 0%, rgb(255, 255, 255) 100%)",
      }}
    >
      <div className=" container-global  lg:w-[60%]  p-0">
        <div className="text-center ">
          <p className="  font-bold">
            {data.subtitle}
          </p>

          <SectionHeader title={data.title} />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-x-10">
          <div className="md:w-1/2 text-center md:text-left ">
            <p className=" italic  mb-[1rem] lg:mb-[2%] ">{data.detail}</p>

            <Link href="#signin-component" title={data.btn} className="btn-slider">
              {data.btn}
            </Link>
          </div>

          <div className="md:w-1/2  justify-end hidden md:flex">
            <SEOImage
            height={100}
            width={1000}
              src="/assets/img/Photographers/photgraphman.webp"
              alt={data.title}
              className="w-60 md:w-90 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
