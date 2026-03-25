import React from "react";
import SectionHeader from "../../common-components/SectionHeader";

const OurStory = ({ data }) => {
  return (
    <section
      className="container-global  text-center my-[2rem] lg:my-[3%] shadow-black   rounded-[1vw]"
      style={{
        background:
          "linear-gradient(135deg, rgb(205, 229, 255) 0%, rgb(169, 252, 237) 100%)",
        boxShadow: "rgba(0, 0, 0, 0.5) 0px 0.8rem 1rem",
      }}
    >
      <SectionHeader title={data?.title} width={"lg:w-[90%]"} description={data?.detail} showBorder={false} />
    </section>
  );
};

export default OurStory;
