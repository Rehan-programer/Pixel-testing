// app/property-listings/[id]/page.js
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  BedDouble,
  Bath,
  Crop,
  CarFront,
  Check,
  Star,
} from "lucide-react";
import Floorplans from "./Floorplans";
import SideBar from "./SideBar";
import GalleryWithLightbox from "../GalleryWithLightbox";
import SEOImage from "@/common-components/SeoImage/SeoImage";

export default async function PropertyDetail({ data }) {
  return (
    <div className="container-global   ">
      <div className="  ">
        <div className="flex lg:items-center justify-between gap-x-4">
          <div>
            <h1 className="">{data.title}</h1>
          </div>
          <div className="">
            <h2 className=" mb-[0.5rem] lg:mb-[2%]">{data.price}</h2>
            <p className="text-end   ">{data.area}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-1 my-[0.5rem] lg:my-[0.5%]">
            <p className=" bg-[#292A76] text-white  font-medium px-2 py-1 rounded-md shadow">
              {data.status}
            </p>
            {[...Array(Math.min(data.rating, 4))].map((_, i) => (
              <span key={i} className="text-[#FAAF00] ">
                <Star
                  size={18}
                  color={"#FAAF00"}
                  strokeWidth={1}
                  fill={"#FAAF00"}
                />
              </span>
            ))}
            <p>({data.reviews})Reviews</p>
          </div>
          {/* <div>
            <p className="text-end font-bold">{data.area}</p>
          </div> */}
        </div>
        <div className="flex w-full justify-between items-center gap-x-2  ">
          <p className="flex items-center gap-2  ">
            <MapPin size={18} /> {data.location}
          </p>
          <div className=" lg:hidden ">
            <SideBar data={data} />
          </div>
        </div>
      </div>

      <div className=" mt-[1rem] lg:mt-[1%]">
        <GalleryWithLightbox images={data.images} />
      </div>

      <div className="flex gap-6 items-start mt-6">
        <div className=" lg:w-[70%] space-y-4">
          <div className="flex items-center justify-between ">
            <h2 className="">Overview</h2>
            <p className="font-bold text-[#636366]">
              PropertyId : <span className="font-light">{data.id}</span>
            </p>
          </div>

          <div className="mt-4 grid grid-cols-3  md:grid-cols-5 justify-between gap-x-4 gap-y-4 gap-4 border-1 border-black/20 p-[1rem] lg:p-[2%] rounded-xl">
            {[
              {
                icon: BedDouble,
                value: data.propertyDetails.bedrooms,
                title: "BedRooms",
              },
              {
                icon: Bath,
                value: data.propertyDetails.bathrooms,
                title: "BathRooms",
              },
              {
                icon: CarFront,
                value: data.propertyDetails.garage,
                title: "Garage",
              },
              {
                icon: Bath,
                value: data.propertyDetails.yearBuilt,
                title: "YearBuilt",
              },
              {
                icon: Crop,
                value: data.area,
                title: "Area",
              },
            ].map((detail, idx) => {
              const Icon = detail.icon;
              return (
                <div key={idx} className=" ">
                  <div className="flex items-center gap-x-1">
                    <Icon size={18} color="#636366" strokeWidth={2} />
                    <p className="font-bold text-[#636366]">{detail.value}</p>
                  </div>
                  <div>
                    <p>{detail.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 grid grid-cols-3  md:grid-cols-5 gap-x-4 gap-y-4 border border-black/20 p-[1rem] lg:p-[2%] rounded-xl">
            {[
              {
                value: data.propertyDetails.price,
                title: "Price",
              },
              {
                value: data.area,
                title: "Area Size",
              },
              {
                value: data.propertyDetails.bedrooms,
                title: "Rooms",
              },
              {
                value: data.propertyDetails.yearBuilt,
                title: "Year Built",
              },
              {
                value: data.propertyDetails.lotSize,
                title: "Land Area Size",
              },
              {
                value: data.propertyDetails.rooms,
                title: "Bedrooms",
              },
              {
                value: data.id,
                title: "Property ID",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`
        break-words min-w-0
        ${item.title === "Property ID" ? "col-span-2" : ""}
        ${index > 4 ? "border-none" : "lg:border-b border-black/20"}
      `}
              >
                <p className="font-bold text-black">{item.title}</p>
                <p className=" text-[#636366]">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3  md:grid-cols-5 gap-x-4 gap-y-4  border-1 border-black/20 p-[1rem] lg:p-[2%] rounded-xl">
            {data.propertyDetails.amenities.map((item, index) => (
              <div key={index} className="flex gap-x-2 items-center">
                <div className="bg-[#292A76] rounded-full p-[1%]">
                  <Check size={20} color="#ffff" strokeWidth={2} />
                </div>
                <p className="text-[#636366]">{item}</p>
              </div>
            ))}
          </div>

          <div className="border-1 border-black/20 p-[1rem] lg:p-[2%] rounded-xl">
            <p className="text-[#636366]">{data.description}</p>
          </div>

          <div>
            {data.mapLocation && (
              <div className="">
                <iframe
                  src={`https://maps.google.com/maps?q=${data.mapLocation.lat},${data.mapLocation.lng}&z=15&output=embed`}
                  width="100%"
                  height="350"
                  className="rounded"
                ></iframe>
              </div>
            )}
          </div>

          <div>
            <Floorplans data={data} />
          </div>

          {/* Video */}
          {data.video && (
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-2">Video</h2>
              <div className="aspect-video w-full">
                <iframe
                  src={data.video}
                  title="Property Video"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          )}

          {data.reviewsSection?.length > 0 && (
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-4">
                What Our Customers Say
              </h2>

              <div className=" flex flex-col md:flex-row gap-y-4 md:gap-x-4">
                {data.reviewsSection.map((rev, idx) => {
                  // Generate initials
                  const names = rev.name.split(" ");
                  const initials = names
                    .map((n) => n[0].toUpperCase())
                    .join("");

                  return (
                    <div
                      key={idx}
                      className="border p-4  rounded-xl bg-white shadow flex flex-col gap-x-4"
                    >
                      {/* Top Row: Avatar + Name + Stars */}
                      <div className="flex justify-between  gap-3">
                        {/* Avatar */}
                        <div className="flex gap-x-2">
                          <div className="w-10 h-10 rounded-full bg-[#00CFAA] flex items-center justify-center font-semibold text-white">
                            {initials}
                          </div>

                          {/* Name and Date */}
                          <div>
                            <div>
                              <p className="font-semibold">{rev.name}</p>
                              <p className="text-gray-400 text-sm">
                                {rev.date}
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Star Rating */}
                        <div className="flex lg:items-center gap-1">
                          {[...Array(rev.rating)].map((_, i) => (
                            <span key={i} className="text-[#FAAF00]">
                              <Star
                                size={16}
                                color="#FAAF00"
                                strokeWidth={2}
                                fill="#FAAF00"
                              />
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Review Message */}
                      <p className="text-gray-700">{rev.message} </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Contact Sidebar */}
        <div className="space-y-4 w-[30%] hidden lg:block  sticky top-20 ">
          <div className=" border-b-2 border-black/20 ">
            <div className="">
              <h5 className=" font-bold">{data.title}</h5>
              <div className="flex gap-x-2 my-[2%]">
                <p className=" bg-[#292A76] text-white  font-medium px-2 py-1 rounded-md shadow">
                  {data.status}
                </p>
                <div className="flex items-center gap-1">
                  {/* First 4 stars */}
                  {[...Array(Math.min(data.rating, 4))].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                  <p>({data.reviews})Reviews</p>

                  {/* Remaining stars count */}
                  {data.rating > 4 && (
                    <span className="text-gray-500 text-sm">
                      (+{data.rating - 4})
                    </span>
                  )}
                </div>
              </div>
              <p className="flex items-center gap-2 mb-[2%] ">
                <MapPin size={18} />
                <span className="text-[#636366]">{data?.location}</span>
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <h2 className="mb-[2%]">{data.price}</h2>
              <p className="text-[#636366]">{data.area}</p>
            </div>
          </div>
          <div className="">
            <h5 className="font-bold my-[2%]">Contact with us now</h5>
            <div className="p-4 bg-[#F2F2F2]  flex flex-col gap-3">
              {/* Avatar */}
              <div className="flex items-center gap-x-2">
                <div className="w-12 h-12 rounded-full bg-[#00CFAA] flex items-center justify-center font-semibold text-white text-lg">
                  {(() => {
                    const names = data.contact.agentName.split(" ");
                    const initials =
                      names[0][0] + (names[1] ? names[1][0] : "");
                    return initials.toUpperCase();
                  })()}
                </div>

                {/* Agent Name */}
                <div>
                  <p className="font-semibold">{data.contact.agentName}</p>
                  <p>{data.contact.phone}</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-2 mt-2">
                <button className="btn-header w-full">Call Now</button>
                <button className="btn-header bg-[#292A76] text-white border-none w-full">
                  Send a Message
                </button>
              </div>
            </div>
          </div>

          <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
            {/* Background Image */}
            <div className="absolute inset-0">
              <SEOImage
              fill
                src={"/try new template.jpg"} // replace with your image URL
                alt="Try New Template"
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative p-[4%] flex flex-col gap-4 text-white">
              {/* Title */}
              <div className="py-[10%]">
                <h2 className=" text-white">New template</h2>

                {/* Description */}
                <p className=" text-white my-[4%]">
                  Advertise your real estate to a wider audience with our
                  landing page.
                </p>
                {/* <div>
                  <Link href={""} className="btn-slider ">
                    Try It Now
                  </Link>
                </div> */}
              </div>

              {/* Bottom Images */}
              <div className="flex items-center justify-center gap-2 mt-4">
                {[...Array(3)].map((_, idx) => (
                  <SEOImage
                    key={idx}
                    height={100}
                    width={1000}
                    src="/assets/img/HomeBanner/Front Elevation S1 - Pixel Perfects Solutions.webp"
                    alt={`/assets/img/HomeBanner/Front Elevation S${idx + 1}`}
                    className="w-24 h-40 object-cover rounded"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
