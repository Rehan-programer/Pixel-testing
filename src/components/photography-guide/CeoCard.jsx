import React from "react";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import SectionHeader from "@/common-components/SectionHeader";
import Link from "next/link";
import SEOImage from "@/common-components/SeoImage/SeoImage";

export default function CeoCard({ data }) {
  return (
    <>
        <div className="text-center ">
          <SectionHeader title=" Tags : Real Estate Photography" />
        </div>

        <section
          className="container-global w-full md:w-[60%] lg:w-[36%] mx-auto rounded-2xl px-[4%] py-[3%] my-[2rem] lg:my-[2%] border-gray-500 shadow-md flex flex-col md:flex-row items-center gap-2"
          style={{
            background:
              "linear-gradient(135deg, rgb(205, 229, 255) 0%, rgb(255, 255, 255) 50%, rgb(169, 252, 237) 100%)",
          }}
        >
          <div className="flex justify-center md:justify-start w-full md:w-auto">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg">
              <SEOImage
                src={data?.profilePhoto}
                alt={data?.personName}
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-semibold">{data?.personName}</h4>
            <p>{data?.personDetail}</p>

            <div className="flex justify-center md:justify-start gap-2 mt-[2%]">
              {data?.icons?.map((iconData, index) => (
                <Link title={iconData.icon}
                  key={index}
                  href={iconData?.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full flex justify-center items-center text-white hover:scale-110 transition-transform duration-200"
                  style={{ background: iconData?.background }}
                >
                  {iconData.icon === "Instagram" && <FaInstagram size={18} />}
                  {iconData.icon === "Facebook" && <FaFacebookF size={18} />}
                  {iconData.icon === "LinkedIn" && <FaLinkedinIn size={18} />}
                </Link>
              ))}
            </div>
          </div>
        </section>
    </>
  );
}
