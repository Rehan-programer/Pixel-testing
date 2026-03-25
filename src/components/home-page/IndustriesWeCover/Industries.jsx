import React from "react";
import IndustriesClientSide from "./IndustriesClientSide";
import SectionHeader from "@/common-components/SectionHeader";

const Industries = ({ data,lang,mainServices,subServices }) => {

  return (
    <div className="container-global  ">
     
      <IndustriesClientSide lang={lang}    initialMainServices={mainServices}
      initialSubServices={subServices} />
    </div>
  );
};

export default Industries;
