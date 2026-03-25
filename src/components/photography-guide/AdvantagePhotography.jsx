import SectionHeader from "@/common-components/SectionHeader";
import SEOImage from "@/common-components/SeoImage/SeoImage";
import Image from "next/image";

export default function AdvantagePhotography({ data }) {
  return (
    <section className="container-global ">
      <div className="text-center">
        <SectionHeader title={data?.head} />
      </div>

      {data?.BenefitsPoints?.map((benefit, index) => (
        <div key={index} >
          <h3 className="my-[1rem] lg:my-[2%] lg:text-center">{benefit?.label}</h3>

          <div
            className={`flex flex-col justify-between md:flex-row items-stretch md:gap-2 lg:gap-x-10 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-[60%] hidden lg:w-[40%] mb-[2rem] lg:mb-0 lg:flex">
                <SEOImage
                  src={benefit?.img1}
                  alt={benefit?.label}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover object-center rounded-2xl"
                />
            </div>

            <div className="w-full lg:w-[70%] flex items-center ">
              <ul className="flex flex-col gap-6">
                {benefit?.points?.map((point, idx) =>
                  point?.img ? (
                    <li key={idx} className="flex items-center md:items-center gap-4">
                      <div
                        className=" w-[3rem] h-[3rem] lg:w-[3vw] lg:h-[3vw] 2xl:w-[3rem] 2xl:h-[3rem] p-[0.6rem] bg-[#a9fced] lg:p-[1%] flex-shrink-0 rounded-full overflow-hidden"
                      >
                        <SEOImage
                          src={point.img}
                          alt={point.label}
                          width={50}
                          height={50}
                          className="w-full h-full object-cover "
                        />
                      </div>

                      <div>
                        <h4 className="font-semibold">{point.label}</h4>
                        <p className="mt-[1%]">{point.para}</p>
                      </div>
                    </li>
                  ) : (
                    <li key={idx}>
                      <p >{point.para}</p>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
