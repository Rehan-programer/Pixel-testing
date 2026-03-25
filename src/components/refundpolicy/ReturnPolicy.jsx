import SEOImage from "@/common-components/SeoImage/SeoImage";
import Image from "next/image";
import Link from "next/link";
import React from "react";



const ReturnPolicy = ({ data }) => {
  return (
    <div className="flex lg:flex-row flex-col container-global justify-between ">
      {/* LEFT CONTENT */}
      <div className=" lg:w-[50%]">
        {data.detail.map((section, idx) => (
          <div key={idx} className=" mb-[1rem] lg:mb-[2%]">
            {section.head && <h3>{section.head}</h3>}

            {section.info && <p className="mt-2">{section.info}</p>}

            {section.para && (
              <div className=" mt-2">
                <p>{section.para}</p>
              </div>
            )}
            {section.list && (
              <div className="ml-2 space-y-4 mt-3">
                {section.list.map((item, i) => (
                  <div key={i}>
                    {/* Dot + Heading on same line */}
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-1 h-1 flex-shrink-0 text-[#292A76]"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"
                        ></path>
                      </svg>

                      <h6 className="font-bold">{item.title}</h6>
                    </div>

                    <p className=" mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {section.contacts && (
              <div className="mt-3 space-y-2">
                {section.contacts.map((c, i) => (
                  <div key={i} className="flex items-center gap-2">
                    {" "}
                    <svg
                      className="w-1 h-1 flex-shrink-0 text-[#292A76] "
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"
                      ></path>
                    </svg>
                    <p>
                      <strong>{c.label}:</strong>{" "}
                      {c.type === "email" ? (
                        <Link title="Email" href={`mailto:${c.value}`}>{c.value}</Link>
                      ) : (
                        <Link title="Phone" href={`tel:${c.value}`}>{c.value}</Link>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className=" lg:w-[50%]">
        <SEOImage
          src="/assets/img/returnpolicy.webp"
          alt="Return Refund Policy"
          width={1000}
          height={1000}
          className="h-full w-full object-contain object-center"
        />
      </div>
    </div>
  );
};

export default ReturnPolicy;
