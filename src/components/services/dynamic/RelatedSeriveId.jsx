import SectionHeader from "@/common-components/SectionHeader";
import Link from "next/link";
import React from "react";

const RelatedSeriveId = ({ data }) => {
   const PORTAL = process.env.NEXT_PUBLIC_PORTAL;
  return (
    <div className="text-center container-global py-0">
      <SectionHeader title={data.subName} />
      <p
        className="mt-[-1%] mb-[2%] w-full mx-auto lg:w-[60%]"
        dangerouslySetInnerHTML={{ __html: data.subDescription }}
      />
      <Link title={"Place Order"} target="_blank" href={`${PORTAL}${data.subName}`} className="btn-slider">
        Place Order
      </Link>
    </div>
  );
};

export default RelatedSeriveId;
