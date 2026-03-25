import SectionHeader from "@/common-components/SectionHeader";
import React from "react";
import CSRTabService from "./CSROurServices";
import { findAllService } from "@/_api/mainservice";
import { findAllSubServices } from "@/_api/subServices";

export default async function OurServices({ data, lang, }) {
  const mainServices = await findAllService(lang);
  const subServices = await findAllSubServices(lang);


  const firstMainId = mainServices?.[0]?.id;

  const initialSubServices = subServices
    ?.filter((item) => item.mainServiceId === firstMainId)
    .slice(0, 4);


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
       <CSRTabService
        lang={lang}
        initialMainServices={mainServices.slice(0,4)}
        initialSubServices={initialSubServices}
      />
      </div>
    </section>
  );
};

