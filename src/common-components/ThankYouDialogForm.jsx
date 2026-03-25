"use client";
import React, { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

const ThankYouDialogForm = ({lang, dialogOpen, setDialogOpen }) => {
  const [animate, setAnimate] = useState(false);

  // 🌍 Translations
  const translations = {
    en: {
      title: "Thank You!",
      message: "Thank you for submitting the form!",
      close: "Close",
    },
    es: {
      title: "¡Gracias!",
      message: "¡Gracias por enviar el formulario!",
      close: "Cerrar",
    },
  };
  const t = translations[lang] || translations.en;

  // 🔁 Trigger animation on open
  useEffect(() => {
    if (dialogOpen) {
      setAnimate(true);
    } else {
      // delay unmount animation
      const timer = setTimeout(() => setAnimate(false), 300);
      return () => clearTimeout(timer);
    }
  }, [dialogOpen]);

  if (!dialogOpen && !animate) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setDialogOpen(false)}
        className={`fixed inset-0 bg-opacity-50 backdrop-blur-xs z-40 transition-opacity duration-300 ${
          dialogOpen ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Dialog */}
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 transition-transform duration-300 ${
          dialogOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-90 translate-y-4"
        }`}
      >
        <div className="relative bg-gradient-to-br from-[#3E497A] to-[#232554] text-white rounded-2xl shadow-2xl p-8 w-[90%] sm:w-[400px] text-center animate-fade-in">
          {/* ✅ Success Icon */}
          <div className="flex justify-center mb-[2%]">
            <CheckCircle className="text-green-500 w-12 h-12 animate-pop" />
          </div>

          {/* ✅ Title */}
          <h2 className=" text-white">{t.title}</h2>

          {/* ✅ Message */}
          <p className=" text-white my-[4%] text-sm">{t.message}</p>

          {/* ✅ Close Button */}
          <button
            onClick={() => setDialogOpen(false)}
            className="bg-[#FF6B6B] hover:bg-[#FF4C4C] transition-colors duration-300 px-6 py-2 rounded-lg font-medium shadow-md"
          >
            {t.close}
          </button>
        </div>
      </div>

      {/* ✅ Custom Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes pop {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          80% {
            transform: scale(1.1);
            opacity: 1;
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-pop {
          animation: pop 0.5s ease-out;
        }
      `}</style>
    </>
  );
};

export default ThankYouDialogForm;
