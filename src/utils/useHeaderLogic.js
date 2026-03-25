"use client";
import { useState, useEffect, useContext, useRef } from "react";
import { CurrencyContext } from "./useRootLayout";
import { usePathname } from "next/navigation";

export const useHeaderLogic = ({ Sectiondata, lang }) => {
  const [screenScrolled, setScreenScrolled] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [isServicesClicked, setIsServicesClicked] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [open, setOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const tabRefs = useRef({});
  const [filteredData, setFilteredData] = useState([]);
const pathname=usePathname()
  const { currency, currencies, handleCurrencyChange } =
    useContext(CurrencyContext);
useEffect(() => {
  if (open ) {
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarWidth}px`; // prevent layout shift
  } else {
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px";
  }

  // cleanup on unmount
  return () => {
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px";
  };
}, [open]);
  useEffect(() => {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (isServicesClicked) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;

      const header = document.querySelector("header");
      if (header) header.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "0px";

      const header = document.querySelector("header");
      if (header) header.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "0px";
      const header = document.querySelector("header");
      if (header) header.style.paddingRight = "0px";
    };
  }, [isServicesClicked]);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 150;
      setScreenScrolled(isScrolled);
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const paths =
    lang === "es"
      ? [
          { title: "Home Staging Virtual y Renovación" },
          { title: "Edición de Imágenes" },
          { title: "Más Servicios" },
          { title: "Explorar" },
          { title: "Recursos" },
          { title: "Información y Contacto" },
        ]
      : [
          { title: "Virtual Staging & Renovation" },
          { title: "Image Editing" },
          { title: "More Services" },
          { title: "Explore" },
          { title: "Resources" },
          { title: "Info & Contact" },
        ];

  // 🔵 Handle Filter
  const handleFilterData = (title) => {
  // const moreServicesMap = {
  //   en: {
  //     title: "More Services",
  //     items: ["Renders", "Floor Plan", "Video Editing"],
  //   },
  //   es: {
  //     title: "Más Servicios",
  //     items: ["Renderizados", "Planos de Planta", "Edición de Video"], // keep "Renders" if same
  //   },
  // };
  // const langKey = lang === "es" ? "es" : "en";
  const data =
       Sectiondata?.find((item) =>
          item.labelName===title
        )
        setFilteredData(data)

  
//     const rect = tabRefs.current[title]?.getBoundingClientRect();

//     if (rect) {

//   const offsetMap = {
//   en: {
//     Resources: -450,
//     Explore: -350,
//     "More Services": -250,
//   },
//   es: {
//     Recursos: -450,
//     Explorar: -350,
//     "Más Servicios": -250,
//   },
// };

// // 🔵 Usage inside handleFilterData
// const langKey = lang === "es" ? "es" : "en";

// let left = rect.left + window.scrollX;
// if (offsetMap[langKey][title.trim()]) {
//   left = left + offsetMap[langKey][title.trim()];
// }
//       requestAnimationFrame(() => {
//         setDropdownPosition({
//           top: rect.bottom + window.scrollY,
//           left,
//         });
//       });
//     }
  };
  const handleFilteredData= Sectiondata?.find((item) =>
          item.labelName===filteredData
        )

  const pathnames = [
    "/free-trial",
    "/about-us",
    "/partnerships",
    "/property-manager",
    "/architects",
    "/builders",
    "/interior-designers",
    "/photographers",
    "/realtors",
    "/gallery",
  ];


const handleAccordionChange = (panel) => () => {
  setExpanded(expanded === panel ? false : panel);
};

  return {
    screenScrolled,filteredData,
    isAtTop,
    currency,
    currencies,
    handleCurrencyChange,
    pathnames, open, setOpen,
    handleFilterData,
    paths,pathname,
    handleAccordionChange,
    expanded,
    tabRefs,
    setIsServicesClicked,
    setDropdownPosition,
    isServicesClicked,setFilteredData,
    dropdownPosition,
    Sectiondata,handleFilteredData,
    
  };
};
