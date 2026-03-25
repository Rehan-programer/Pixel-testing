// import { findAllService } from "@/_api/mainservice";
// import { findAllSubServices } from "@/_api/subServices";
// import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";

export function useServicesHooks(
  lang,
  initialMainServices=[],
  initialSubServices=[]
) {
  // const {
  //   data: subService = [],
  //   isLoading: subLoading,
  //   error: subError,
  // } = useQuery({
  //   queryKey: ["get-all-subservice", lang],
  //   queryFn: () => findAllSubServices(lang),
  //   enabled: !!lang,
  // });
  // const {
  //   data: MainService = [],
  //   isLoading: mainLoading,
  //   error: mainError,
  // } = useQuery({
  //   queryKey: ["get-all-MainServices", lang],
  //   queryFn: () => findAllService(lang),
  //   enabled: !!lang,
  // }); 
 
   const MainService=initialMainServices
   const subService=initialSubServices
 const [selectedCategory, setSelectedCategory] = useState(MainService[0]?.id);
 const [isLoading, setIsLoading] = React.useState(true);
React.useEffect(() => {
  setIsLoading(true);

  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 1000); // smooth feel (300-500ms best)

  return () => clearTimeout(timer);
}, [selectedCategory]);
  useEffect(() => {
    if (MainService.length > 0 && !selectedCategory) {
      setSelectedCategory(MainService[0].id);
    }
  }, [MainService, selectedCategory]);

  const handleSelectChange = (value) => {
    setSelectedCategory(value);
  };
  const selectedMainService =
    MainService.find((item) => item.id === selectedCategory) || {};
  const selectedLabel = selectedMainService.name || "";
  const filteredServices =
    subService?.filter(
      (service) => service.mainServiceId === selectedCategory
    ) || [];

    filteredServices
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return {
    lang,
    subService,
    MainService,
    selectedCategory,
    selectedMainService, 
    handleSelectChange,
    selectedLabel,
    filteredServices,
    open,
    setOpen,isLoading,
    ref,
    // subLoading,
    // mainLoading,
    // subError,
    // mainError,
  };
}
