import React from "react";
import Image from "next/image";
import SEOImage from "@/common-components/SeoImage/SeoImage";

export default function ContactBanner({ lang }) {
  const content = {
    en: {
      heading: "Please Contact Us and our expert team will answer your questions",
      headingHighlight: "Contact Us",
      paragraph:
        "We provide estimates at phone, email, or at your home. The estimate is completely free! Fill out the form, Call us +1 9294936583 or orders@pxlperfects.com and leave your telephone number and home address.",
    },
    es: {
      heading: "Por favor contáctenos y nuestro equipo de expertos responderá a sus preguntas",
      headingHighlight: "Contáctenos",
      paragraph:
        "Proporcionamos estimaciones por teléfono, correo electrónico o en su domicilio. ¡La estimación es completamente gratuita! Complete el formulario, llame al +1 9294936583 o envíe un correo a orders@pxlperfects.com y deje su número de teléfono y dirección.",
    },
  };

  const text = lang === "es" ? content.es : content.en;

  return (
    <section className="overflow-x-hidden"
      style={{
        background:
          "linear-gradient(90deg, rgb(13, 21, 131) 0%, rgb(129, 240, 219) 0%, rgb(255, 255, 255) 100%)",
      }}
    >
      <div className="container-global pt-0 lg:p-0 flex flex-col-reverse lg:flex-row  items-center justify-between">
        <div className="lg:w-1/2">
          <h1 className="text-white mb-[2%]">
            {text.heading.split(text.headingHighlight)[0]}
            <span className="text-[#292a76]">{text.headingHighlight}</span>
            {text.heading.split(text.headingHighlight)[1]}
          </h1>

          <p className="text-white">{text.paragraph}</p>
        </div>

        <div className="relative mb-[2rem] lg:mb-0 mt-[-2%] w-[50%] lg:w-[30%] ">
          <div className="transform translate-x-28 md:translate-x-52 lg:translate-x-[50%]">
            <SEOImage
              src="/contact banner.png"
              alt={"Contact Us Page"}
              width={400}
              height={400}
              className="object-contain w-full h-[60vh]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
