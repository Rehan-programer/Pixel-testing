"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
export const useLanguage = () => useContext(LanguageContext);
