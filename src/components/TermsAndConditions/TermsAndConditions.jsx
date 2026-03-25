import Link from "next/link";
import React from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";
import { Circle } from "lucide-react";

const TermsAndConditions = ({ data }) => {
  return (
    <div className="flex   lg:gap-6 justify-between container-global">
      {/* Main Content - Scrollable */}
      <div className=" w-[100%] lg:w-3/5">
        <div className="mb-[1%]">
          <h6 className="font-bold">{data.date}</h6>
          <p className="">{data.para1}</p>
        </div>

        {data.Policydata.map((section,index) => (
          <div key={index} id={section.heading} className="mt-[1%]">
            <h3  className="my-[2%]">
              {section.heading}
            </h3>

            {section.detail.map((item, idx) => (
              <React.Fragment key={item}>
              {item.para && <p className="my-[0.5rem] lg:my-[0.5%]">{item.para}</p>}
              {item?.list &&
                  <div  className=" mb-[1%] flex flex-col lg:gap-1">
                    {item?.list?.map((point) => (
                      <p
                        key={point}
                        className="flex items-start text-left lg:gap-x-[1%] text-gray-700"
                      >
                        <Circle className="size-2 mt-[0.6%]" fill="#00cfaa"/>
                        {point}
                      </p>
                    ))}
                  </div>
              }

              {item.table &&
              
                  <table
                    className="w-full border mt-4 border-collapse"
                  >
                    <tbody>
                      {item.table.map((row, i) => (
                        <tr key={i} className="border mb-[1%]">
                          <td className="border p-3     w-[14%]">
                            <h6 className="font-bold">{row.title}</h6>
                          </td>
                          <td className="border p-3">
                            <p>{row.desc}</p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
              }
                 {item.contacts &&  <div  className="mt-4">
                    {item.contacts.map((c, i) => (
                      <p key={i} >
                        <strong>{c.label}:</strong>{" "}
                        {c.type === "email" ? (
                          <Link title={`mailto:${c.value}`}
                            href={`mailto:${c.value}`}
                            className="text-emerald-500"
                          >
                            {c.value}
                          </Link>
                        ) : (
                          <Link
                            href={`tel:${c.value}`}
                            title={`tel:${c.value}`}
                            className="text-emerald-500"
                          >
                            {c.value}
                          </Link>
                        )}
                      </p>
                    ))}
                  </div>}
                             </React.Fragment>
            ))}
          </div>
        ))}
      </div>

      {/* Sidebar - Fixed */}
      <div className=" hidden lg:block min-w-[350px] lg:w-1/4 relative ">
        <div
          className=" rounded-md p-4 sticky top-22 shadow-2xl border-1 border-[#00CFAA]"
          style={{
            backgroundColor: "rgb(244, 250, 255)",
          }}
        >
          <h3 className="font-semibold mb-4 text-center">Table of Contents</h3>

          <div className="flex gap-1">
            {/* LEFT SIDE VERTICAL LINE */}
           

            {/* CONTENT LIST */}
            <div className="flex flex-col">
              {data?.Policydata?.map((section,index) => (
                <p key={index} className="flex items-center gap-2 my-2">
                 
                  <Link title={section.heading}
                    href={`#${section.heading}`}
                  >
                   <span title={section.heading} className="text-[#00CFAA]">{index+1} -</span> {section.heading}
                  </Link>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden w-[8%] -ml-[1rem] md:ml-0  mt-[-1rem] ">
        <Sidebar data={data}/>
      </div>
    </div>
  );
};

export default TermsAndConditions;
