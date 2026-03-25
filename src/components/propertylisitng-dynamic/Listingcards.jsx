
import Image from "next/image";
import Link from "next/link";
import { MapPin, BedDouble, Bath, Crop } from "lucide-react";
import SectionHeader from "@/common-components/SectionHeader";
import SEOImage from "@/common-components/SeoImage/SeoImage";

export default function Listingcards({ data }) {
  return (
    <div className="container-global">
      <div className="text-center ">
        <SectionHeader title="Properties" />
      </div>{" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-gray-300 shadow-sm bg-white overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative w-full h-[16rem] lg:h-[16vw] 2xl:h-[16rem]">
              <SEOImage
                src={
                  item?.images && item.images.length > 0
                    ? item.images[0]
                    : "/Headerlogo.webp"
                }
                alt={item?.title || "Property Image"}
                fill
                className="object-cover object-center "
              />

              <p className="absolute top-2 left-2 bg-white text-gray-700  font-medium px-2 py-1 rounded-md shadow">
                {item.status}
              </p>
            </div>

            {/* Content */}
            <div className="  p-[4%]  ">
              <h4 className="font-bold">{item.title}</h4>

              {/* Location */}
              <p className="flex items-center text-[#636366] gap-x-1 my-[2%]">
                <MapPin color="#636366" size={16} strokeWidth={2} />
                {item.location}
              </p>

              {/* Icons Row */}
              <div className="flex justify-between items-center gap-6 mb-4">
                {[
                  {
                    icon: (
                      <BedDouble size={18} color="#636366" strokeWidth={2} />
                    ),
                    value: item.propertyDetails.bedrooms,
                  },
                  {
                    icon: <Bath size={18} color="#636366" strokeWidth={2} />,
                    value: item.propertyDetails.bathrooms,
                  },
                  {
                    icon: <Crop size={18} color="#636366" strokeWidth={2} />,
                    value: item.area,
                  },
                ].map((box, index) => (
                  <div key={index} className="flex items-center gap-1   ">
                    <p className="flex items-center gap-1 w-full">
                      {box.icon} {box.value}
                    </p>
                    {index != 2 &&(

                      <span className=" ml-[3rem]  lg:ml-[4vw] flex-shrink-0 border-r border-black h-5"></span>
                    )}


                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-[#636366] my-3" />

              {/* Price + Button */}
              <div className="flex items-center justify-between">
                <h4 className=" font-bold flex items-center">
                  {item.price}
                  <p className=" font-bold text-[#636366]"> / month</p>
                </h4>

                <Link href={`/property-listings/${item.id}`} title={"View Detail"}>
                  <button className="btn-header">View Detail</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
