
import SectionHeader from "@/common-components/SectionHeader";
import SEOImage from "@/common-components/SeoImage/SeoImage";
import Image from "next/image";
import React from "react";

const TestimonialsRating = ({ data }) => {
  return (
    <section
      style={{
        background:
          "linear-gradient(360deg, rgb(13, 21, 131) 0%, rgb(205, 229, 255) 0%, rgb(255, 255, 255) 100%)",
      }}
    >
      <div
        className="container-global text-center" // Tailwind utilities for padding & text alignment
      >
        {/* Heading */}
        <SectionHeader title={data?.label} />

        {/* Quote */}
        <p dangerouslySetInnerHTML={{ __html: data?.quote }} />

        {/* Paragraph */}
        <p
          className="  my-[0.5rem] lg:my-[1%]"
          dangerouslySetInnerHTML={{ __html: data?.para }}
        />

        {data?.img && (
          <SEOImage
            height={100}
            width={1000}
            src={data?.img}
            alt={data?.label}
            className="mx-auto md:w-[60%] lg:w-[40%] h-auto "
          />
        )}
      </div>
    </section>
  );
};

export default TestimonialsRating;
