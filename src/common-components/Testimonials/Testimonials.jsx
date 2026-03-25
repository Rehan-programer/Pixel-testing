// import TestimonialsSwiper from "./TestimonialsSwiper";

import { getTranslations } from "@/lib/i18nLoader";
import SectionHeader from "../SectionHeader";
import TestimonialsSwiper from "./TestimonialsSwiper";
import Link from "next/link";
import { findAllTestamonials } from "@/_api/testimonials";

export default async function Testimonials({ customer, hidebutton, islistingpage,lang }) {
      const sectionData = getTranslations(lang, "testimonial");
        const testimonial = await findAllTestamonials(lang);
  if (!sectionData) return null;

  return (
    <section className="container-global text-center">
      {/* ====== Heading Section ====== */}
        {customer ? (
          <h4 className=" font-bold mb-[0.5%]">
            {sectionData?.TestimonialsRatingData?.heading}
          </h4>
        ) : (
          <h2 className="border-b-4 border-[#292A76] inline-block pb-[0.5rem] mb-[1rem] lg:mb-[2%]">
            {sectionData?.TestimonialsRatingData?.heading}
          </h2>
        )}

        {customer && (
          <SectionHeader
            title={lang === "es" ? "Los clientes nos aman" : "Customers Love Us"}
          />
        )}
      <div
      >
        <TestimonialsSwiper islistingpage={islistingpage} lang={lang} testimonial={testimonial} />
         {!hidebutton && (
          <Link  title={lang === "es" ? "Ver Más" : "View More"}
            href="/testimonials"  
           
          >
            <button  className="btn-slider mt-[1rem] lg:mt-[1%] ">
            {lang === "es" ? "Ver Más" : "View More"}
            </button>

          </Link>
      )}
      </div>
    </section>
  );
};

