"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "animate.css";
import SEOImage from "@/common-components/SeoImage/SeoImage";

const labelMap = {
  en: {
    imageEditing: "Image Editing",
    realEstate: "Residential Real Estate",
    infoContact: "Info & Contact",
    renders: "Renders",
    floorPlan: "Floor Plan",
    videoEditing: "Video Editing",
    explore: "Explore",
    resources: "Resources",
  },
  es: {
    imageEditing: "Edición de Imágenes",
    realEstate: "Home Staging Virtual y Renovación",
    infoContact: "Información y Contacto",
    renders: "Renderizados",
    floorPlan: "Planos de Planta",
    videoEditing: "Edición de Video",
    explore: "Explorar",
    resources: "Recursos",
  },
};

const PageContent = ({ data, setIsServicesClicked, position ,lang }) => {
  const labels = labelMap[lang] || labelMap.en;

  const isImageEditingOrRealEstate = data?.some(
    (tab) =>
      tab.labelName === labels.imageEditing ||
      tab.labelName === labels.realEstate ||
      tab.labelName === labels.infoContact
  );

  return (
    <div
      id="navbar"       key={data?.map((tab) => tab.labelName).join("-")}
      className="animate__animated animate__fadeInDown fixed z-[1000]"
      style={{
        top: "2.5vw",
        left: `${position?.left || 0}px`,
        "--animate-duration": "1.2s",
        maxWidth: "800px",
      }}
    >
      <div
        className={`flex flex-wrap bg-white bg-[url('/assets/img/home/bg_blog_test.webp')] bg-cover bg-center rounded-[clamp(0.3rem,0.5vw,1rem)] p-[clamp(0.4rem,0.6vw,1rem)] pt-[clamp(0.5rem,1vw,1.5rem)] ${
          isImageEditingOrRealEstate
            ? "w-[clamp(18rem,19.5vw,25rem)]"
            : "w-full"
        }`}
      >
        {data.slice(0, 3)?.map((tab, index) => {
          if ([labels.renders, labels.explore, labels.resources].includes(tab.labelName)) {
            return (
              <div className="w-full" key={index}>
                <h5 
                  className={`${
                    [labels.explore, labels.resources].includes(tab.labelName)
                      ? "hidden"
                      : "block"
                  } border-l-[0.27vw]  border-[#00cfaa] my-[clamp(0.3rem,0.5vw,1rem)] pl-[clamp(0.4rem,0.6vw,1rem)] ml-[clamp(0.2rem,0.3vw,0.5rem)] font-bold`}
                >
                  {tab.labelName}
                </h5>

                <div className="flex flex-wrap gap-x-[2%]">
                  {tab.fields?.map((list, idx) => (
                    <div key={idx} className="w-[48%] py-[0.5vh]">
                      <Link title={list.fieldName}
                        href={list.fieldRoute}
                        scroll={true}
                        onClick={() => setIsServicesClicked(false)}
                        className="flex items-center rounded-[clamp(0.2rem,0.34vw,0.5rem)] pl-[clamp(0.2rem,0.3vw,0.5rem)] py-[0.5vh] hover:bg-[#cde5ff] transition-all"
                      >
                        <div className="flex items-center">
                          <div className="bg-[#a9fced] rounded-[clamp(0.3rem,0.4vw,0.6rem)] p-[clamp(0.2rem,0.3vw,0.4rem)]">
                            <div className="relative w-[clamp(1rem,1.8vw,2.5rem)] aspect-square">
                              <SEOImage
                                src={list.icon}
                                alt={list.fieldName}
                                fill
                                className="object-contain"
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="pl-[clamp(0.3rem,0.7vw,1rem)]">
                            <h5 className="font-bold">
                              {list.fieldName}
                            </h5>
                            <p>
                              {list.hoverDetail}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          // Default layout
          return (
            <div
              key={index}
              className={`w-full ${
                [labels.imageEditing, labels.realEstate].includes(tab.labelName)
                  ? "md:w-full"
                  : "md:w-1/2"
              }`}
              onClick={() => setIsServicesClicked(false)}
            >
              <div className="ml-[clamp(0.2rem,0.3vw,0.5rem)]">
                <h5
                  className={`${
                    [labels.renders, labels.floorPlan, labels.videoEditing].includes(tab.labelName)
                      ? "block"
                      : "hidden"
                  } border-l-[0.27vw] border-[#00cfaa] my-[clamp(0.3rem,0.5vw,1rem)] pl-[clamp(0.4rem,0.6vw,1rem)] font-bold`}
                >
                  {tab.labelName}
                </h5>

                {tab.fields.slice(0, 5)?.map((list, idx) => (
                  <Link title={list.fieldName}
                    href={list.fieldRoute}
                    key={idx}
                    scroll={true}
                    className="flex items-center rounded-[clamp(0.2rem,0.34vw,0.5rem)] hover:bg-[#cde5ff] transition-all w-[clamp(14rem,18vw,20rem)] pl-[clamp(0.2rem,0.3vw,0.5rem)] ml-[clamp(-0.4rem,-0.3vw,-0.2rem)] py-[0.5vh] my-[0.7vh]"
                  >
                    <div className="bg-[#a9fced] rounded-[clamp(0.3rem,0.4vw,0.6rem)] p-[clamp(0.2rem,0.3vw,0.4rem)]">
                      <div className="relative w-[clamp(1rem,1.8vw,2.5rem)] aspect-square">
                        <SEOImage
                          src={list.icon}
                          alt={list.fieldName}
                          fill
                          className="object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="pl-[clamp(0.3rem,0.7vw,1rem)]">
                      <h5 className="font-bold">
                        {list.fieldName}
                      </h5>
                      <p >{list.hoverDetail}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PageContent;
