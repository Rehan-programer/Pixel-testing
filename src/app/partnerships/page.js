import ContactCards from "@/common-components/ContactForms/ContactCards";
import ContactUsFormCard from "@/common-components/ContactForms/ContactUsFormCard";
import Banner from "@/components/about-us/Banner";
import Benefits from "@/components/partnership/Benefits";
import DataDetails from "@/components/partnership/DataDetails";
import Partner from "@/components/partnership/Partner";
import ServiceGrid from "@/components/partnership/ServiceGrid";
import TestimonialsClients from "@/components/testimonial/TestimonialsClients";
import { getTranslations } from "@/lib/i18nLoader";
import SchemaInjector from "@/lib/Schema/SchemaInjector";
import { generateSEOMetadata } from "@/lib/SeoConfig/GenerateSeoMetadata";
import { cookies } from "next/headers";
import React from "react";
export async function generateMetadata() {
  return await generateSEOMetadata("partnership");
}
export default async function PartnerShip() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en";
  const partnerPageData = getTranslations(lang, "partnership");
  const explorePageData = getTranslations(lang, "explore");

  const partnershipsData = explorePageData.find(
    (item) => item.labelName === "partnerships"
  );

  return (
    <>
     <SchemaInjector page={"partnerships"} />
      <Banner lang={lang} data={partnerPageData.BannerData} />
      <Benefits lang={lang} data={partnerPageData.Benefitsdata} />
      <Partner lang={lang} data={partnerPageData.PartnerData} />
      <TestimonialsClients
        lang={lang}
        data={partnerPageData.testimonialsClientsInformation}
      />
      <DataDetails lang={lang} data={partnerPageData.PartnerFillData} />

      <ServiceGrid lang={lang} data={partnershipsData?.fields || []} />
      <ContactUsFormCard id="signin-component" lang={lang}  />
      <ContactCards lang={lang} />
    </>
  );
}
