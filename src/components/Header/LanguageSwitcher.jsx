"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LanguageSwitcher({open,full}) {
  const router = useRouter();
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const cookieLang = document.cookie
      .split("; ")
      .find((row) => row.startsWith("lang="))
      ?.split("=")[1];
    if (cookieLang) setLang(cookieLang);
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "es" : "en";
    document.cookie = `lang=${newLang}; path=/; max-age=31536000`;
    setLang(newLang);
    router.refresh();
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`btn-slider ${open || full?"w-full text-[1rem]":""}`}
    >
      {lang === "en" ? "Español" : "English"}
    </button>
  );
}
