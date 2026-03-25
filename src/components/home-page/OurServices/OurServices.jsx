import SectionHeader from "@/common-components/SectionHeader";
import React from "react";
import CSRTabService from "./CSROurServices";

export default async function OurServices  ({ data,lang,mainServices,subServices }) {

   
  return (
    <section
      className="overflow-hidden "
      style={{
        background:
          "linear-gradient(360deg, rgba(13,21,131,1) 0%, rgba(169,252,237,1) 0%, rgba(255,255,255,1) 100%)",
      }}
    >
      <div className="container-global">
        <div className="text-center ">
          <SectionHeader
            title={data?.title}
            description={data?.detail}
            width={"lg:w-[70%]"}
          />
        </div>
        <CSRTabService     initialMainServices={mainServices}
      initialSubServices={subServices} lang={lang}/>
      </div>
    </section>
  );
};

