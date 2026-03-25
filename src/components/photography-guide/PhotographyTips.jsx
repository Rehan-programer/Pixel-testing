
import SectionHeader from "@/common-components/SectionHeader";
import SEOImage from "@/common-components/SeoImage/SeoImage";
import Image from "next/image";

export default function PhotographyTips({ data }) {
  return (
    <section className="container-global  ">
     <div className="text-center" >
         <SectionHeader title={data?.head } />
     </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {data?.detail?.map((tip, idx) => (
          <li key={idx} className="flex items-center md:items-start gap-4">
            <div
                        className=" p-[0.6rem] w-[4rem] h-[4rem] lg:w-[3vw] lg:h-[3vw] 2xl:w-[3rem] 2xl:h-[3rem] 2xl:p-[0.6rem] bg-[#a9fced] lg:p-[1%] flex-shrink-0 rounded-full overflow-hidden"
            >
              <SEOImage
                src={tip.img}
                alt={tip.label}
                width={50}
                height={50}
                className="w-full h-full object-cover "
              />
            </div>

            <div>
              <h4 className="font-semibold mb-[1%]">{tip.label}</h4>
              <p >{tip.para}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
