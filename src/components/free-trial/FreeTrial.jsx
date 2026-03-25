import SectionHeader from "@/common-components/SectionHeader";
import ServiceImages from "@/common-components/ServiceImages";
import Link from "next/link";
import React from "react";

const FreeTrial = ({ data }) => {
    const PORTAL = process.env.NEXT_PUBLIC_PORTAL;

  return (
    <section className=" container-global">
      <div className="text-center ">
        <SectionHeader title={data?.head} />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.detail?.map((item, index) => (
          <div key={index} className="bg-white rounded-[10px] shadow-lg ">
            {/* LEFT IMAGE */}
            <div className=" w-full overflow-hidden rounded-t-[10px]">
              <ServiceImages photographer={true}
                data={{
                  beforeImage: item.leftImage,
                  afterImage: item.rightImage,
                }}
              />
            </div>

            <div className=" flex flex-col justify-center px-[4%] py-[8%]">
              <h3 >{item.label}</h3>
              <p className="my-[1rem] lg:my-[2%]">{item.para}</p>

              <ul className="space-y-1 ">
                {item.points?.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span>
                      <strong>{pt.label}:</strong> {pt.detail}
                    </span>
                  </li>
                ))}
                  <div className="flex mt-[1rem] lg:mt-[4%]  gap-2 ">
                  <Link target="_blank" href={`${PORTAL}${item.label}&id=free-trial`} title="Start Free Trial" className="btn-slider">
                    Start Free Trial
                  </Link>
                </div>
              
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FreeTrial;
