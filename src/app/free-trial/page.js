import React from "react";
import { getTranslations } from "../../lib/i18nLoader";
import { cookies } from "next/headers";
import Banner from "@/components/about-us/Banner";
import ContactCards from "@/common-components/ContactForms/ContactCards";
import ContactUsFormCard from "@/common-components/ContactForms/ContactUsFormCard";
import Testimonials from "@/common-components/Testimonials/Testimonials";
import FreeTrial from "@/components/free-trial/FreeTrial";
import ChooseBenefits from "@/components/free-trial/ChooseBenefits";
import TestimonialsClients from "@/components/testimonial/TestimonialsClients";
import SchemaInjector from "@/lib/Schema/SchemaInjector";
import { generateSEOMetadata } from "@/lib/SeoConfig/GenerateSeoMetadata";

export async function generateMetadata() {
  return await generateSEOMetadata("freetrial");
}

export default async function Services() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en";
  const freetrialPageData = getTranslations(lang, "freetrial");
  return (
    <>
     <SchemaInjector page={"freetrial"} />
     <Banner lang={lang} data={freetrialPageData.BannerData} />
     <FreeTrial lang={lang} data={freetrialPageData.PartnerData} />
     <ChooseBenefits lang={lang} data={freetrialPageData?.ChooseBenfits}/>
      <TestimonialsClients
        lang={lang}
        data={freetrialPageData .testimonialsClientsInformation}
      />
    
       <Testimonials lang={lang} hidebutton={false} />
       <ContactUsFormCard id="signin-component" lang={lang} />
      <ContactCards lang={lang} />
    </>
  );
}
