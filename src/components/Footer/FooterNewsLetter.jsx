"use client";
import React from "react";
import { useFooterLogic } from "@/utils/useFooterLogics";
import ThankYouDialogForm from "@/common-components/ThankYouDialogForm";

const MainPageNewsLetter = ({lang}) => {

  const {
    dialogOpen,
    setDialogOpen,
    email,
    setEmail,
    errorMessage,
    handleSendMail,
    isLoading,
  } = useFooterLogic({ lang });

  return (
    <>
      <div className="flex justify-start  gap-2 mt-2">
        <input
          type="email"
          id="subscribe-email"
          name="email"
          placeholder="john@gmail.com"
          required
          className="placeholder-gray-500 border border-[#292a76] rounded-md px-3 py-2 text-sm w-full outline-none "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={() => handleSendMail(email)}
          disabled={isLoading}
          className={`btn-fullblue transition-colors duration-200 
           
          `}
        >
          {isLoading ? (
            <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          ) : lang === "es" ? (
            "Suscribirse"
          ) : (
            "Subscribe"
          )}
        </button>
      </div>
      {errorMessage && (
        <p className="text-red-600 text-sm mt-1 text-left">{errorMessage}</p>
      )}
      <ThankYouDialogForm lang={lang} dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />
    </>
  );
};

export default MainPageNewsLetter;
