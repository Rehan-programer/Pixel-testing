import React from "react";

const TermsBanner = ({ data }) => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(360deg, rgb(13, 21, 131) 0%, rgb(169, 252, 237) 0%, rgb(255, 255, 255) 100%)",
      }}
    >
      <div className=" container-global  ">
        <h1 className="text-center">{data.BannerLabel}</h1>
      </div>
    </div>
  );
};

export default TermsBanner;
