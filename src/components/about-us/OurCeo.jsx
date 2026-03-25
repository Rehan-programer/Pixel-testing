import Link from "next/link";
import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import SEOImage from "@/common-components/SeoImage/SeoImage";

const SocialIcons = [
  {
    name: "Instagram",
    background: "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)",
    link: "https://www.instagram.com/pixel.perfects.solutions",
    icon: <FaInstagram className="w-4 h-4 " />,
  },
  {
    name: "Facebook",
    background: "linear-gradient(45deg, #1877F2, #3b5998)",
    link: "https://www.facebook.com/pixel.perfects.solutions",
    icon: <FaFacebookF className="w-4 h-4 " />,
  },
  {
    name: "LinkedIn",
    background: "linear-gradient(45deg, #0077b5, #0a66c2)",
    link: "https://www.linkedin.com/company/pixel-perfects",
    icon: <FaLinkedinIn className="w-4 h-4 " />,
  },
];

const OurCeo = ({ data }) => {
  return (
    <div className="bg-[#E0F7FF] container-global p-[0.8rem] lg:p-2 rounded-xl shadow-lg flex flex-col lg:flex-row items-stretch space-y-4 lg:space-y-0 my-8">
      {/* Left Image & Social Icons */}
      <div className="flex md:hidden lg:flex flex-col lg:w-[24%] xl:w-[20%]   w-full items-center bg-[#22e0bd3d] p-[0.8rem] lg:p-[1%]">
        <div className="relative w-[100%] 2xl:h-[14rem] lg:h-[14vw] h-[20rem]">
          <SEOImage
            src={data?.img}
            alt={data?.imgname}
            fill
            className="rounded-lg object-cover"
          />
        </div>

        <div className="flex space-x-4 mt-4">
          {SocialIcons.map((item, idx) => (
            <Link
              key={idx} title={item.name}
              href={item.link}
              className="flex items-center justify-center text-white p-2 rounded-full transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,0,0,0.3)]"
              style={{ background: item.background }}
              aria-label={item.name}
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>

      {/* Right Content */}
      <div className="bg-white flex-1 lg:w-[80%] w-full text-left p-4 flex flex-col justify-between -mt-4 lg:mt-0">
        <div className="flex  lg:flex-col justify-between">
          <div >

          <h2 >{data?.name}</h2>
          <p className="my-[1%]">{data?.designation}</p>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 ">
            {data?.socialdetails?.map((item, idx) => (
              <div key={idx} className="flex flex-col ">
                <h4 className="font-semibold mb-1">{item.name}</h4>
                {item.link1 && (
                  <h3 className="flex items-center space-x-2">
                    {item.icon === "email" && <MdEmail />}
                    {item.icon === "phone" && <MdPhone />}
                    <p>
                      <Link  title={
                          item.icon === "email"
                            ? `mailto:${item.link1}`
                            : `tel:${item.link1}`
                        }
                        href={
                          item.icon === "email"
                            ? `mailto:${item.link1}`
                            : `tel:${item.link1}`
                        }
                        className="hover:underline"
                      >
                        {item.link1}
                      </Link>
                    </p>
                  </h3>
                )}
                {item.link2 && (
                  <h3 className="flex items-center space-x-2">
                    {item.icon === "email" && <MdEmail />}
                    {item.icon === "phone" && <MdPhone />}
                    <p>
                      <Link title={
                          item.icon === "email"
                            ? `mailto:${item.link2}`
                            : `tel:${item.link2}`
                        }
                        href={
                          item.icon === "email"
                            ? `mailto:${item.link2}`
                            : `tel:${item.link2}`
                        }
                        className="hover:underline"
                      >
                        {item.link2}
                      </Link>
                    </p>
                  </h3>
                )}
              </div>
            ))}
          </div>
          <div>

          </div>
          </div>
                        <div className="hidden md:block lg:hidden relative w-[50%] h-[16rem]">
          <SEOImage
            src={data?.img}
            alt={data?.imgname}
            fill
            className="rounded-lg object-cover"
          />
        </div>

        <p className="mt-[2%] lg:w-[80%] hidden lg:block" >"{data?.para}"</p>
        <p className="mt-[4%] lg:w-[80%] hidden lg:hidden" >"{data?.para}"</p>

          
        </div>

      </div>
    </div>
  );
};

export default OurCeo;
