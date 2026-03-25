"use client";
import SectionHeader from "@/common-components/SectionHeader";
import React, { useState, useRef } from "react";
import { ArrowUp } from "lucide-react";

const Faqs = ({ data , subname }) => {
  const [openId, setOpenId] = useState(null);
  const contentRefs = useRef([]);

  const toggleAnswer = (id) => {
    setOpenId(openId === id ? null : id);
  };


  return (
    <section className="container-global ">
      <div className="text-center ">
        <p className="font-bold mb-[1%]">How Can We Help You </p>
        <SectionHeader title={data?.title || `${subname} Experts`}/>
      </div>
        {data?.faqs?.length > 0 || data?.questions?.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {(data?.faqs || data?.questions).map((faq, index) => {
              const isOpen = openId === index;
              return (
                <div key={index} >
                  {/* Question Header */}
                  <div
                    onClick={() => toggleAnswer(index)}
                    className={`flex justify-between border-b border-gray-200 items-center cursor-pointer    transition-all duration-400 ${
                      isOpen
                        ? "bg-[#cde5ff] text-[#000] border-b-0 font-semibold px-4 pt-4 pb-2 "
                        : "bg-white hover:bg-[#eaf4ff] px-4 py-4"
                    }`}
                  >
                    <h6>{faq.question}</h6>
                    <div
                      className={`p-1 transition-transform duration-300 ease-in-out ${
                        isOpen
                          ? "rotate-0 bg-[#292a76] border border-[#292a76] text-white rounded-full"
                          : "rotate-180 border-1 border-[#00CFAA]  rounded-full"
                      }`}
                    >
                      <ArrowUp className={`w-4 h-4 ${isOpen ? "text-white" : "text-[#00CFAA]"}`} />
                    </div>
                  </div>

                  {/* Answer */}
                  <div
                    ref={(el) => (contentRefs.current[index] = el)}
                    style={{
                      maxHeight: isOpen
                        ? `${contentRefs.current[index]?.scrollHeight}px`
                        : "0px",
                    }}
                    className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
                  >
                    <p
                      className={` px-3 pb-4  mt-0 rounded-b bg-[#cde5ff] `}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className=" px-4 py-3">No FAQs available.</p>
        )}
    </section>
  );
};

export default Faqs;
