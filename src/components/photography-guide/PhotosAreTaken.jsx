
import SectionHeader from "@/common-components/SectionHeader";
import SEOImage from "@/common-components/SeoImage/SeoImage";
import Image from "next/image";

export default function PhotosAreTaken({ data }) {
  return (
    <section className=" bg-[url('/assets/img/home/bg_blog_test.webp')] bg-cover  bg-x-right bg-no-repeat">
      <div className="container-global pt-0">
        {data?.detail?.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#a9fced] rounded-xl shadow-lg text-center p-[1rem] lg:p-[2%] mb-[0.5rem] lg:mb-[1%] "
          >
            <div className="mb-[-1rem] lg:mb-[-1%]">

            <SectionHeader
              title={item.label}
              description={item.para}
              showBorder={false}
            />
          </div>
          </div>
        ))}

        {data?.subtitle && (
          <div
            className="text-center  my-[1rem] lg:my-[2%] text-[#292a76]"
            dangerouslySetInnerHTML={{ __html: data.subtitle }}
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden">
          <div className="relative w-full 2xl:h-[24rem] lg:h-[24vw] h-[16rem]   shadow-lg">
            <div className= "absolute w-full text-center bottom-0  bg-black/40 z-20">
             <h4 className=" text-white px-3 py-1 rounded-md font-bold ">
              Before
            </h4>
           </div>
            <SEOImage
              src={data.Beforeimg}
              alt="Before HDR Photo"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="relative w-full 2xl:h-[24rem] lg:h-[24vw] h-[16rem]  shadow-lg">
           <div className= "absolute w-full text-center bottom-0  bg-black/40 z-20">
             <h4 className=" text-white px-3 py-1  font-bold">
              After
            </h4>
           </div>
            <SEOImage
              src={data.Afterimg}
              alt="After HDR Photo"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
