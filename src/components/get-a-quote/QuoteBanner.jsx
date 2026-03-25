import SEOImage from "@/common-components/SeoImage/SeoImage";
import Image from "next/image";
import React from "react";

const QuoteBanner = ({ lang }) => {
  // ---------------------------
  // LANGUAGE TEXT VARIABLES
  // ---------------------------
  const textContent = {
    en: {
      titleTop: "Get Your Customized",
      titleBottom: "Quote Today",
      description:
        "Ready to see how Pixel Perfects can elevate your real estate visuals? Simply share your project details — whether you need virtual staging, photo editing, or a full service — and our experts will craft a personalized quote just for you. With fast turnaround, transparent pricing, and unlimited revisions, we make it easy to bring your vision to life. Fill out the form below, and let's get started!",
    },
    es: {
      titleTop: "Obtén Tu",
      titleBottom: "Cotización Hoy",
      description:
        "¿Listo para ver cómo Pixel Perfects puede mejorar tus imágenes inmobiliarias? Solo comparte los detalles de tu proyecto — ya sea staging virtual, edición de fotos o un servicio completo — y nuestros expertos crearán una cotización personalizada para ti. Con entrega rápida, precios transparentes y revisiones ilimitadas, hacemos que tu visión cobre vida fácilmente. ¡Completa el formulario y comencemos!",
    },
  };

  // ---------------------------
  // SELECT TEXT BASED ON LANGUAGE
  // ---------------------------
  const text = lang === "es" ? textContent.es : textContent.en;
const iconAlts = lang === "es"
  ? [
      "Icono de servicio de staging virtual inmobiliario - Pixel Perfects Solutions LLC",
      "Icono de espacio de trabajo de diseño virtual - Pixel Perfects Solutions LLC",
      "Icono de edición de fotos y mejora de imágenes - Pixel Perfects Solutions LLC"
    ]
  : [
      "Real estate virtual staging service icon - Pixel Perfects Solutions LLC",
      "Virtual staging design workspace icon - Pixel Perfects Solutions LLC",
      "Photo editing and image enhancement service icon - Pixel Perfects Solutions LLC"
    ];


  return (
    <div className="bg-[#2C3C77]">
      <div className="container-global flex flex-col lg:flex-row items-center justify-between space-y-8 md:space-y-0">

        {/* Left Section */}
        <div className="w-full lg:w-[40%] text-center md:text-left">
          <h1 className="text-white">
            {text.titleTop} <br />
            <span className="text-[#00CFAA]">{text.titleBottom}</span>
          </h1>

          <p className="text-white my-[4%]">{text.description}</p>

          {/* Icons */}
          <div className=" hidden  lg:flex space-x-5 justify-center md:justify-start items-center">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="border border-white p-[1.5%] flex items-center rounded-[6px] hover:bg-white hover:bg-opacity-10 transition duration-300"
                style={{
                  width: "clamp(1rem, 3vw, 4rem)",
                  height: "clamp(1rem, 3vw, 4rem)",
                }}
              >
                  <SEOImage
      src={`/icon${index + 1}.png`}
      alt={iconAlts[index]}
      width={30}
      height={30}
    />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Image */}
        <div className="hidden lg:block lg:w-[22%]">
          <div className="relative">
            <SEOImage
              src="/get a quote.png"
              alt="Person working"
              className="w-full h-auto rounded-lg shadow-lg"
              layout="responsive"
              width={300}
              height={400}
            />
          </div>
        </div>

        {/* Mobile Section */}
        <div className="flex lg:hidden items-start w-full justify-between">
          <div className="flex space-x-2 md:space-x-6 justify-center items-center">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="border border-white p-[1.5%] flex items-center justify-center rounded-[6px] hover:bg-white hover:bg-opacity-10 transition duration-300"
                style={{
                  width: "clamp(4rem, 3vw, 4rem)",
                  height: "clamp(4rem, 3vw, 4rem)",
                }}
              >
                    <SEOImage
      src={`/icon${index + 1}.png`}
      alt={iconAlts[index]}
      width={40}
      height={40}
    />
              </div>
            ))}
          </div>

          <div className="block">
            <SEOImage
              src="/get a quote.png"
              alt={"Get A QUote"}
              className="w-full h-auto rounded-lg shadow-lg"
              layout="responsive"
              width={300}
              height={400}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default QuoteBanner;
