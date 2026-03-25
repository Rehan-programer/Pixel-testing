import React from "react";

const SectionHeader = ({ width, title, description, WhiteColor = false, showBorder = true }) => {
  return (
    <div className={"mb-[1rem] lg:mb-[2%]"}>
      {title && (
        <h2
          className={`
            inline-block 
            ${showBorder ? "border-b-[4px]  border-[#292A76] pb-[0.5rem] lg:pb-[0.5%]" : ""}
            ${!description ?null : " mb-[0.5rem] lg:mb-[1%]"}
            ${WhiteColor ? "text-white" : ""}
          `}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}

      {description && (
        <p
          className={`w-full ${width} ${WhiteColor ? "text-white" : ""} mx-auto`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
