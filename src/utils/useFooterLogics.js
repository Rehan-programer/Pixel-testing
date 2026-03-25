"use client";
import { useState, useContext } from "react";
import axios from "axios";
import { CurrencyContext } from "@/utils/useRootLayout";
import { createSubsribeQuote } from "@/_api/subscribe-api";

export const useFooterLogic = ({lang}) => {
    const { currency, currencies, handleCurrencyChange } = useContext(CurrencyContext);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false); // new state

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const handleSendMail = async (email) => {
      if (!isValidEmail(email)) {
        setErrorMessage("Please enter a valid email address.");
        return;
      }
    
      setIsLoading(true); // start loading
    
      const templateParams = { email };
    
      try {
        // ✅ Send to your backend API
        await createSubsribeQuote({ email });
    
        // ✅ Send to Google Sheet via Google Apps Script
        await axios.post(
          "https://script.google.com/macros/s/AKfycbx0oNsCZcg50Gay1M_YmUIB2mOi0PfbSfYyG0UkMlKpysXvgkJw-u6erahO8VCSu8vm2Q/exec",
          templateParams,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
    
        setDialogOpen(true);
        setErrorMessage("");
        setEmail("");
      } catch (error) {
        console.error("Error sending email:", error);
setErrorMessage(
  lang === "es"
    ? "Algo salió mal. Por favor, inténtalo de nuevo más tarde."
    : "Something went wrong. Please try again later."
);
      } finally {
        setIsLoading(false); // stop loading
      }
    };
    
  
 
      
  
      
    return {
        currency,
        currencies,
        handleCurrencyChange,
        dialogOpen,
        setDialogOpen,
        email,
        setEmail,
        errorMessage,
        handleSendMail,isLoading,
    };
};
