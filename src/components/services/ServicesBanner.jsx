import Image from "next/image";
import React from "react";

export default function ServicesBanner({ data }) {
  return (
    <section
      className="overflow-hidden  bg-[linear-gradient(90deg,rgba(0,207,169,0.475)_0%,white_86.48%)] 
            lg:bg-[linear-gradient(360deg,rgb(60,180,155)_0%,white_86.48%)]"
    >
      <div className=" justify-between   gap-x-[5%] py-[2rem] lg:py-0 flex flex-col-reverse lg:flex-row items-center ">
        <div className="w-[90%] lg:w-[40%] max-w-[1000px] lg:ml-auto ">
          <h1
            className=" mb-[1rem] [&>span]:text-white lg:mb-[2%] "
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
          <p className="w-full lg:w-[80%]">{data.detail}</p>
        </div>
        <div className="relative hidden w-full lg:w-[45%]   lg:block mb-[-0.27%]"  >
          <Image src={data?.image} alt={data.title}  title={data.title} width={600} height={600} className={"w-full h-[60vh]   "} style={{clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)" }} />
          <div className="absolute top-[15%] left-[5%] flex flex-col transform rotate-[20deg] z-200"
         
          >
            {data.images?.map((item, index) => (
              <div
                key={index}
                className="bg-white w-[clamp(7rem,9vw,14rem)] p-[4%] mt-[-10%] shadow-[0 0.375rem 1.25rem rgba(0,0,0,0.15)] transform perspective-[clamp(40vw,60vw,100vw)] rotate-x-[40deg] rotate-y-[-20deg] transition-all 0.3s ease-in-out"
              >
                <Image
                  src={item?.src}
                  alt={item?.alt}
                  title={item?.title}
                  width={600}
                  height={400}
                  className={"w-[clamp(6rem,8vw,12rem)] h-[clamp(6rem,8vw,12rem)]"}
                />
              </div>
            ))}
          </div>




        </div>
      </div>
    </section>
  );
}
