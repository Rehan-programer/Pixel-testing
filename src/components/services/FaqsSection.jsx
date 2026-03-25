// "use client";
// import React, { useState, useEffect, useRef } from "react";
// // import { useQuery } from "@tanstack/react-query";
// // import { findAllService } from "@/_api/mainservice";
// // import { findAllSubServices } from "@/_api/subServices";
// import { ArrowRight, ArrowUp, CircleArrowRight } from "lucide-react";
// import SectionHeader from "@/common-components/SectionHeader";

// const FaqsSection = ({ lang ,initialMainServices=[],initialSubServices=[]}) => {
//    const mainServices=initialMainServices
//    const subServices=initialSubServices
// const [selectedCategory, setSelectedCategory] = useState(
//   mainServices?.[0]?.id || null
// );

// const [selectedSubCategory, setSelectedSubCategory] = useState(() => {

//   if (!mainServices?.length || !subServices?.length) return null;

//   const firstMainId = mainServices[0].id;

//   const filteredSubs = subServices.filter(
//     (sub) => sub.mainServiceId === firstMainId
//   );

//   return filteredSubs?.[0]?.id || null;
// });
//   const [openFaq, setOpenFaq] = useState(null);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const ref = useRef(null);

//   // const { data: subServices = [], isLoading: subLoading } = useQuery({
//   //   queryKey: ["get-all-subservice", lang],
//   //   queryFn: () => findAllSubServices(lang),
//   //   enabled: !!lang,
//   // });

//   // const { data: mainServices = [], isLoading: mainLoading } = useQuery({
//   //   queryKey: ["get-all-MainServices", lang],
//   //   queryFn: () => findAllService(lang),
//   //   enabled: !!lang,
//   // });

//   useEffect(() => {
//     if (mainServices.length > 0 && subServices.length > 0) {
//       const firstMain = mainServices[0];
//       setSelectedCategory(firstMain.id);

//       const filteredSubs = subServices.filter(
//         (sub) => sub.mainServiceId === firstMain.id
//       );

//       setSelectedSubCategory(filteredSubs[0]?.id || null);
//     }
//   }, [mainServices, subServices]);

//   useEffect(() => {
//     if (selectedCategory) {
//       const filteredSubs = subServices.filter(
//         (sub) => sub.mainServiceId === selectedCategory
//       );
//       setSelectedSubCategory(filteredSubs[0]?.id);
//       setOpenFaq(null);
//     }
//   }, [selectedCategory, subServices]);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (ref.current && !ref.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [ref]);

//   // if (mainLoading || subLoading)
//   //   return <p className="text-center">Loading...</p>;

//   const filteredSubServices = subServices.filter(
//     (service) => service.mainServiceId === selectedCategory
//   );

//   const selectedSubService = subServices.find(
//     (item) => item.id === selectedSubCategory
//   );
//   const subServiceFaqs = selectedSubService?.faqs || [];

//   const toggleFaq = (faqId) =>
//     setOpenFaq((prev) => (prev === faqId ? null : faqId));

//   return (
//     <section className="container-global">
//       <div className="text-center ">
//         <SectionHeader title="Our FAQs" showBorder={true} />
//       </div>
//       <div className=" flex flex-col lg:flex-row">
//         {/* Left Column */}
//         <div className="hidden lg:block  lg:w-1/3 border-r-1 rounded">
//           {mainServices.map((item) => {
//             const isMainActive = item.id === selectedCategory;
//             return (
//               <div key={item.id} className="mb-[2%]    ">
//                 <div
//                   onClick={() => setSelectedCategory(item.id)}
//                   className={`group flex justify-between  shadow-xs transition-all duration-300  items-center cursor-pointer p-[3%] ${isMainActive
//                     ? "bg-[#cde5ff] text-[#0ccfaa]  py-[4%]"
//                     : "bg-white hover:text-[#0ccfaa]"
//                     }`}
//                 >
//                   <p
//                     className={`transition-colors   font-bold duration-200 group-hover:text-green-600${isMainActive
//                       ? "bg-[#cde5ff] text-[#0ccfaa] "
//                       : "bg-white hover:text-[#0ccfaa]"
//                       }`}
//                   >
//                     {item.name}
//                   </p>
//                   <CircleArrowRight
//                     className={`w-7 h-7  transition-all duration-600 ${isMainActive
//                       ? "rotate-0 text-[#0ccfaa]"
//                       : "rotate-50 text-[#292a76]"
//                       }`}
//                   />
//                 </div>

//                 {isMainActive && (
//                   <ul
//                     className={`
//     transition-all px-2 duration-800 ease-in-out
//        max-h-96 opacity-100 py-2
//     ${filteredSubServices.length > 6
//                         ? "grid grid-cols-2 gap-2"
//                         : "flex flex-col"
//                       }

//   `}
//                   >

//                     {filteredSubServices.map((sub) => (
//                       <li
//                         key={sub.id}
//                         onClick={() => setSelectedSubCategory(sub.id)}
//                         className={`cursor-pointer whitespace-nowrap inline-flex w-fit
//     rounded-md px-3 py-1 my-[1%] 
//     ${sub.id === selectedSubCategory
//                             ? "bg-[#cde5ff] text-[#292a76]"
//                             : "hover:bg-[#cde5ff] hover:text-[#0ccfaa]"
//                           }
//   `}
//                       >
//                         {sub.subName}
//                       </li>

//                     ))}
//                   </ul>
//                 )}
//               </div>
//             );
//           })}
//         </div>

//         {/* Mobile Dropdown */}
//         <div className="flex lg:hidden justify-center mb-2" ref={ref}>
//           <div className="relative w-full">
//             <button
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//               className={`w-full text-left border-2 border-[#00cfaa] text-[#00cfaa] py-[0.45rem] px-[1rem] ${dropdownOpen ? "rounded-t-[0.45rem]" : "rounded-[0.45rem]"
//                 } bg-transparent transition-all duration-300 flex items-center justify-between`}
//             >
//               <span
//                 className={`${selectedSubCategory ? "text-[#00cfaa]" : "text-gray-500"
//                   }`}
//               >
//                 {selectedSubService?.subName || "Select Sub Service"}
//               </span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className={`w-4 h-4
                  
//                   ml-2 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""
//                   }`}
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </button>

//             <div
//               className={` scrollbar-hide absolute max-h-[20rem] left-0 w-full bg-[#00cfaa] rounded-bl-[0.45rem] rounded-br-[0.45rem]
//     shadow-md overflow-y-auto z-[50]
//     transition-all duration-300 origin-top ${dropdownOpen
//                   ? "scale-y-100 opacity-100 visible"
//                   : "scale-y-0 opacity-0 invisible"
//                 }`}
//             >
//               {subServices.map((sub) => (
//                 <div
//                   key={sub.id}
//                   onClick={() => {
//                     setSelectedSubCategory(sub.id);
//                     setDropdownOpen(false);
//                   }}
//                   className={`p-[1rem] cursor-pointer transition-colors duration-150 ${selectedSubCategory === sub.id
//                     ? "bg-[#292a76] text-white font-medium"
//                     : "bg-[#00cfaa] text-white hover:bg-[#0bbd99]"
//                     }`}
//                 >
//                   {sub.subName}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="w-full bg-white shadow-inner">
//           {subServiceFaqs.length > 0 ? (
//             <ul>
//               {subServiceFaqs.map((faq, index) => {
//                 const isOpen = openFaq === index;
//                 return (
//                   <li
//                     key={index}
//                     className="border-b mb-[0.4%] border-gray-200 "
//                   >
//                     <div
//                       onClick={() => toggleFaq(index)}
//                       className={`flex justify-between items-center  py-[1rem] lg:py-[1%] cursor-pointer px-2 transition-all duration-200 ${isOpen
//                         ? "bg-[#cde5ff] text-[#292a76] font-semibold"
//                         : "bg-white hover:bg-[#eaf4ff]"
//                         }`}
//                     >
//                       <span>{faq.question}</span>
//                       <div
//                         className={` text-[#0ccfaa]  p-[0.2%]   transition-transform duration-400 ease-in-out
//       ${isOpen
//                             ? "rotate-0 bg-[#292a76] border border-[#292a76] text-white  rounded-full"
//                             : "rotate-[180deg] border rounded-full "
//                           }`}
//                       >
//                         <ArrowUp className="w-4 h-4" />
//                       </div>
//                     </div>
//                     <div
//                       className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
//                         }`}
//                     >
//                       <p
//                         className={` p-[0.8rem] lg:p-[1%] pt-0 mt-[-0.2%] rounded-b transition-all duration-200 ${isOpen ? "bg-[#cde5ff] text-gray-700" : "bg-white"
//                           }`}
//                       >
//                         {faq.answer}
//                       </p>
//                     </div>
//                   </li>
//                 );
//               })}
//             </ul>
//           ) : (
//             <p className="text-gray-500">Select a sub-service to see FAQs</p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FaqsSection;






import React from "react";
import { findAllService } from "@/_api/mainservice";
import { findAllSubServices } from "@/_api/subServices";
import FaqsClientSection from "./dynamic/ServiceBanner/FaqClient";

export default async function FaqSection({ lang }) {

  const mainServices = await findAllService(lang);
  const subServices = await findAllSubServices(lang);

  const initialMainServices = mainServices?.slice(0, 5);

  const firstMainId = initialMainServices?.[0]?.id;

  const initialSubServices = subServices
    ?.filter((item) => item.mainServiceId === firstMainId)
    .slice(0, 6);

  return (
    <FaqsClientSection
      lang={lang}
      initialMainServices={initialMainServices}
      initialSubServices={initialSubServices}
    />
  );
}
// f