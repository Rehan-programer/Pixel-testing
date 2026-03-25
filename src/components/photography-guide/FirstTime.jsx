import React from "react";
import Link from "next/link";
import SectionHeader from "@/common-components/SectionHeader";


const FirstTime = ({ data,subname,isContactLink  }) => {
  const PORTAL = process.env.NEXT_PUBLIC_PORTAL;
  
  return (
    <section
      style={{
        background:
          "linear-gradient(360deg, rgb(13, 21, 131) 0%, rgb(169, 252, 237) 0%, rgb(255, 255, 255) 100%)",
      }}
    >
      <div className="container-global text-center ">
        <SectionHeader title={data?.head} description={data?.para1} />
        {/* Button */}
        <div className=" mt-[1rem] lg:mt-[2%]" >
        <Link title={data?.buttontext } href={subname?`${PORTAL}${subname}&id=free-trial`: isContactLink?"/contact-us":"/get-a-quote"} className="btn-slider ">
            {data?.buttontext }
        </Link>
        </div>
      </div>
    </section>
  );
};

export default FirstTime;
