import React from "react";
import { getTranslations } from "../../lib/i18nLoader";
import { cookies } from "next/headers";
import ContactCards from "@/common-components/ContactForms/ContactCards";
import ContactUsFormCard from "@/common-components/ContactForms/ContactUsFormCard";
import Testimonials from "@/common-components/Testimonials/Testimonials";
import ServicesBanner from "@/components/services/ServicesBanner";
import SchemaInjector from "@/lib/Schema/SchemaInjector";
import { generateSEOMetadata } from "@/lib/SeoConfig/GenerateSeoMetadata";

import BeforeAfter from "@/components/services/BeforeAfter";
import FaqSection from "@/components/services/FaqsSection";

export async function generateMetadata() {
  return await generateSEOMetadata("services");
}

export default async function Services() {

  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en";

  const servicesPageData = getTranslations(lang, "service");

  return (
    <>
      <SchemaInjector page="services" lang={lang} />

      <ServicesBanner
        lang={lang}
        data={servicesPageData?.serviceBanner}
      />

      <BeforeAfter lang={lang} />

      <FaqSection lang={lang} />

      <Testimonials lang={lang} hidebutton={false} />

      <ContactUsFormCard id="signin-component" lang={lang} />

      <ContactCards lang={lang} />
    </>
  );
}