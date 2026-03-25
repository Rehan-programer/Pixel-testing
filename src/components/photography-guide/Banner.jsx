import SEOImage from "@/common-components/SeoImage/SeoImage";
import Image from "next/image";

export default function Banner({ data }) {
  return (
      <section className="container-global relative">

        {/* Desktop overlay content */}
        <div className="relative rounded-md lg:rounded-none">
          <div className="relative 2xl:h-[30rem] lg:h-[26vw] h-[15rem] lg:rounded-[15px] overflow-hidden">
            <SEOImage
              src="/assets/img/Photography guide/photgraphyguidebanner.webp"
              alt="Photography Guide Banner"
              fill
              className="object-cover object-center"
            />
          </div>

          <div
            className="lg:rounded-[20px] lg:mb-[-12%]  lg:translate-y-[-45%]  p-[1rem] lg:p-[2%] text-center lg:w-[80%] mx-auto"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 20px 20px",
              background:
                "linear-gradient(135deg, rgb(205, 229, 255) 0%, rgb(255, 255, 255) 50%, rgb(169, 252, 237) 100%)",
            }}
          >
            <p >{data?.head}</p>
            <h3 className="my-[1%]">{data?.label}</h3>
            <h2 >{data?.label2}</h2>
            <p className="lg:w-[80%] mx-auto text-center  my-[1%]">
              {data?.para}
            </p>

            <div className="flex items-center justify-center gap-x-3 ">
              <div className="2xl:w-[4rem] 2xl:h-[4rem] lg:h-[4vw] lg:w-[4vw] w-[3rem] h-[3rem] rounded-full overflow-hidden border-2 border-white flex-shrink-0">
                <SEOImage
                  src={data?.profilePhoto}
                  alt={data?.personName}
                  width={60}
                  height={60}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-left">
                <h4 className="font-semibold ">
                  {data?.personName}
                </h4>
                <p>{data?.personDetail}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
