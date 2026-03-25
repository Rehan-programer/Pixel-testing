"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { BedDouble, Bath, Crop, ChevronDown } from "lucide-react";
import SEOImage from "@/common-components/SeoImage/SeoImage";

export default function FloorPlans({ data }) {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-6 space-y-4">
      {data.floorPlans.map((plan, idx) => (
        <div key={idx} className="border rounded-lg overflow-hidden">
          <div
            onClick={() => toggleOpen(idx)}
            className="w-full flex items-center cursor-pointer justify-between bg-gray-100 p-4 font-semibold"
          >
            <div className="flex items-center gap-x-2">
              <ChevronDown
                size={18}
                color="#636366"
                strokeWidth={2}
                className={`transition-transform duration-300 ${
                  openIndex === idx ? "rotate-180" : "rotate-0"
                }`}
              />
              {plan.title}
            </div>
            <div className="flex items-center gap-4">
              {[
                { icon: BedDouble, value: plan.rooms },
                { icon: Bath, value: plan.bathrooms },
                { icon: Crop, value: plan.area },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-1">
                    <Icon size={18} color="#636366" strokeWidth={2} />
                    <p>{item.value}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div
            ref={(el) => (contentRefs.current[idx] = el)}
            className="transition-all duration-500 ease-in-out overflow-hidden"
            style={{
              maxHeight:
                openIndex === idx
                  ? `${contentRefs.current[idx]?.scrollHeight}px`
                  : "0px",
            }}
          >
            <div className="p-4 space-y-4">
              <div className="rounded-lg overflow-hidden">
                <SEOImage
                  src={plan.image}
                  alt={plan.title}
                  width={600}
                  height={400}
                  className="object-cover w-full"
                />
                <div className="p-3">
                  <p className="font-bold">Description</p>
                  <p className="mt-2">{plan.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
