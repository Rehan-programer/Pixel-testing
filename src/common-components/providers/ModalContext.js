"use client";
import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [openContactModal, setOpenContactModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false); // ✅ Add dialog state
  const [relatedData, setRelatedData] = useState({
    fieldName: "",
    itemPoints: [],
  }); 
  return (
    <ModalContext.Provider
      value={{
        openContactModal,
        setOpenContactModal,
        selectedItem,
        setSelectedItem,
        dialogOpen,
        relatedData,
        setRelatedData,
        setDialogOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
