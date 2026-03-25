import { findAllService } from "@/_api/mainservice";
import { findAllSubServices } from "@/_api/subServices";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";

export function useServicesHooks(
  lang,
  initialMainServices = [],
  initialSubServices = []
) {

  // 🔥 Main Services
  const {
    data: MainService = initialMainServices,
    isLoading: mainLoading,
  } = useQuery({
    queryKey: ["get-all-MainServices", lang],
    queryFn: () => findAllService(lang),
    enabled: !!lang,
    initialData: initialMainServices,
  });

  // 🔥 Sub Services
  const {
    data: subService = initialSubServices,
    isLoading: subLoading,
  } = useQuery({
    queryKey: ["get-all-subservice", lang],
    queryFn: () => findAllSubServices(lang),
    enabled: !!lang,
    initialData: initialSubServices,
  });

  const isLoading = mainLoading || subLoading;

  // 🔥 Selected Category
  const [selectedCategory, setSelectedCategory] = useState(
    initialMainServices?.[0]?.id
  );

  useEffect(() => {
    if (MainService.length > 0 && !selectedCategory) {
      setSelectedCategory(MainService[0].id);
    }
  }, [MainService, selectedCategory]);

  const handleSelectChange = (value) => setSelectedCategory(value);

  // 🔥 Selected Main Service
  const selectedMainService =
    MainService.find((item) => item.id === selectedCategory) || {};

  const selectedLabel = selectedMainService.name || "";

  // 🔥 Filtered Services
  const filteredServices =
    subService?.filter(
      (service) => service.mainServiceId === selectedCategory
    ) || [];

  // 🔥 Mobile Dropdown
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