import React from "react";
import MarqueeClients from "@/components/home-page/MarqueeClients";

const ClientCard = ({ data, lang }) => {
  const translations = {
    en: {
      trustedTitle: "Trusted by the best",
      trustedDesc:
        "Agents across numerous respected brands use our service to enhance and improve their listing photos.",
      stats: [
        { value: "25,000+", label: "Trusted customers globally" },
        { value: "750,000+", label: "Images delivered" },
        { value: "12+", label: "Countries served" },
      ],
    },

    es: {
      trustedTitle: "Confiado por los mejores",
      trustedDesc:
        "Agentes de numerosas marcas reconocidas usan nuestro servicio para mejorar y optimizar sus fotos de listado.",
      stats: [
        { value: "25,000+", label: "Clientes de confianza en todo el mundo" },
        { value: "750,000+", label: "Imágenes entregadas" },
        { value: "12+", label: "Países atendidos" },
      ],
    },
  };

  const t = translations[lang] || translations.en;

  return (
    <section
      className="
        container-global 
        overflow-hidden
        lg:px-[2%]
        px-[1rem]

        rounded-2xl 
        border-2 border-white 
        shadow-[0px_4px_16px_rgba(0,0,0,0.06)]
        bg-gradient-to-b from-[rgba(35,156,144,0.1)] to-[rgba(11,62,161,0.1)]
      "
    >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center ">
          <div className="md:w-1/2 text-center md:text-left">
            <h2>{t.trustedTitle}</h2>

            <p className=" my-[1rem] lg:my-[2%]">{t.trustedDesc}</p>
          </div>

          <div className="md:w-1/2 w-full overflow-hidden">
            {[...Array(2)].map((_, i) => (
              <MarqueeClients
                key={i} issubservice={true}
                clients={data?.OurClients?.ClientLogo?.slice(
                  i * 14,
                  (i + 1) * 14
                )}
              />
            ))}
          </div>
        </div>

        <div
          className="
            bg-[rgba(255,255,255,0.5)]
           mt-[2rem] lg:mt-[4%] p-[2%] rounded-xl 
            flex flex-col md:flex-row justify-around  text-center
          "
        >
          {t.stats.map((item, index) => (
            <div key={index} className="my-[1rem] lg:my-0">
              <h3 className=" mb-[0.5rem] lg:mb-[1%]">{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
    </section>
  );
};

export default ClientCard;
