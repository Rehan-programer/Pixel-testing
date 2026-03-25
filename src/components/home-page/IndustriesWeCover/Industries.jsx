import React from "react";
import IndustriesClientSide from "./IndustriesClientSide";
import SectionHeader from "@/common-components/SectionHeader";
import { findAllService } from "@/_api/mainservice";
import { findAllSubServices } from "@/_api/subServices";

const Industries = async ({ data,lang }) => {
  const mainServices = await findAllService(lang);
  const subServices = await findAllSubServices(lang);

  const initialMainServices = mainServices?.slice(0, 5);

  const firstMainId = initialMainServices?.[0]?.id;

  const initialSubServices = subServices
    ?.filter((item) => item.mainServiceId === firstMainId)
    .slice(0, 6);

  return (
    <div className="container-global  ">
     
       <IndustriesClientSide
        lang={lang}
        initialMainServices={initialMainServices}
        initialSubServices={initialSubServices}
      />
    </div>
  );
};

export default Industries;
