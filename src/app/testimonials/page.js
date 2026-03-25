import { getTranslations } from "../../lib/i18nLoader";
import { cookies } from "next/headers";
import React from "react";
import TestimonialsRating from "@/components/testimonial/TestimonialsRating";
import TestimonialsClients from "@/components/testimonial/TestimonialsClients";
import Testimonials from "@/common-components/Testimonials/Testimonials";
import TestimonialsGrid from "@/components/testimonial/TestimonialGrid";

export default async function Testimonial({ searchParams }) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en";

  const testimonialsPageData = getTranslations(lang, "testimonial");

  return (
    <>
      <TestimonialsRating
        lang={lang}
        data={testimonialsPageData.TestimonialsRatingData}
      />
      <Testimonials lang={lang} hidebutton={true} />
      <TestimonialsClients
        lang={lang}
        data={testimonialsPageData.testimonialsClientsInformation}
      />
      <TestimonialsGrid lang={lang} searchParams={searchParams} />
    </>
  );
}
