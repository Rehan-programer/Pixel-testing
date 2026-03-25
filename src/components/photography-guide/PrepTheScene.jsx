import SectionHeader from "@/common-components/SectionHeader";
import SEOImage from "@/common-components/SeoImage/SeoImage";
import Image from "next/image";

export default function PrepTheScene({ data }) {
  return (
    <section className="container-global">
      <div className=" text-center">
        <SectionHeader title={data?.head} />
      </div>

      {data?.detail?.map((scene, index) => (
        <div key={index} >
          <div
            className={`flex flex-col md:flex-row  last:mt-[1rem] lg:last:mt-[1%]  md:gap-x-[2%] ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full lg:w-[35%] hidden lg:flex">
                <SEOImage
                  src={scene?.img}
                  alt={scene?.head}
                  width={800}
                  height={600}
                  className={`w-full h-full object-cover object-center rounded-2xl`}
                />
            </div>

            <div className="w-full lg:w-[65%]  lg:py-[5%] ">
              <h3 className="my-[1rem] lg:my-[1%]">{scene?.head}</h3>
              <ul className="flex flex-col gap-2 list-none pl-0">
                {scene?.points?.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <svg
                      className="w-2.5 h-2.5 flex-shrink-0 text-[#0ccfaa] mt-[0.25rem] xl:mt-[1%]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2" />
                    </svg>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
