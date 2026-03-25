import { findAllService } from "@/_api/mainservice";
import { findAllSubServices } from "@/_api/subServices";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";

export function useServicesHooks(lang) {
  // ✅ Ab yeh client side fetch karega — __NEXT_DATA__ mein nahi jayega
  const {
    data: subService = [],
    isLoading: subLoading,
  } = useQuery({
    queryKey: ["get-all-subservice", lang],
    queryFn: () => findAllSubServices(lang),
    enabled: !!lang,
  });

  const {
    data: MainService = [],
    isLoading: mainLoading,
  } = useQuery({
    queryKey: ["get-all-MainServices", lang],
    queryFn: () => findAllService(lang),
    enabled: !!lang,
  });

  // ✅ Real loading state — fake timer hata diya
  const isLoading = subLoading || mainLoading;

  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    if (MainService.length > 0 && !selectedCategory) {
      setSelectedCategory(MainService[0].id);
    }
  }, [MainService, selectedCategory]);

  const handleSelectChange = (value) => setSelectedCategory(value);

  const selectedMainService = MainService.find((item) => item.id === selectedCategory) || {};
  const selectedLabel = selectedMainService.name || "";
  const filteredServices = subService?.filter(
    (service) => service.mainServiceId === selectedCategory
  ) || [];

  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
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
    setOpen,
    isLoading,
    ref,
  };
}