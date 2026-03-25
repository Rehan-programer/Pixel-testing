
import React from "react";
import { Settings, Wand2, PlaySquare, PenTool, Clock4, Copyright } from "lucide-react";
const Launching = ({data}) => {
  const iconMap = {
  SettingsSuggestIcon: (
    <Settings className="w-[2rem] h-[2rem] lg:w-[clamp(1rem,1.6vw,2rem)] lg:h-[clamp(1rem,1.6vw,2rem)] text-[#00cfaa]" />
  ),
  AutoFixHighIcon: (
    <Wand2 className="w-[2rem] h-[2rem] lg:w-[clamp(1rem,1.6vw,2rem)] lg:h-[clamp(1rem,1.6vw,2rem)] text-[#00cfaa]"/>
  ),
  SubscriptionsIcon: (
    <PlaySquare className="w-[2rem] h-[2rem] lg:w-[clamp(1rem,1.6vw,2rem)] lg:h-[clamp(1rem,1.6vw,2rem)] text-[#00cfaa]"/>
  ),
  DesignServicesIcon: (
    <PenTool className="w-[2rem] h-[2rem] lg:w-[clamp(1rem,1.6vw,2rem)] lg:h-[clamp(1rem,1.6vw,2rem)] text-[#00cfaa]"/>
  ),
  "24Hours": (
    <Clock4 className="w-[2rem] h-[2rem] lg:w-[clamp(1rem,1.6vw,2rem)] lg:h-[clamp(1rem,1.6vw,2rem)] text-[#00cfaa]"/>
  ),
  Copyright: (
    <Copyright className="w-[2rem] h-[2rem] lg:w-[clamp(1rem,1.6vw,2rem)] lg:h-[clamp(1rem,1.6vw,2rem)] text-[#00cfaa]"/>
  ),
};


  return (
    <section className="flex flex-wrap justify-center gap-4 ">
      {data?.map((item, index) => (
        <div
          key={index}
          className="w-full   md:w-[31%] text-center p-[1%] border-2 border-transparent 
                     rounded-[0.6rem] transition-all duration-500  lg:mt-[1%]   hover:border-[#00cfaa] hover:-translate-y-[10px] hover:shadow-[-8.8px_19.2px_56.8px_0_#00418e]"
        >
          <div className="flex justify-center">{iconMap[item.icon]}</div>
          <h4 className="font-bold   my-[1%]">
            {item.title}
          </h4>
          <div className="w-[20%] h-[2px] bg-orange-400 mx-auto mb-[1%]"></div>
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
};

export default Launching;
