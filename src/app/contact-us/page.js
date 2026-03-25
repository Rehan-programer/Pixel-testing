import React from "react";
import { cookies } from "next/headers";
import ContactBanner from "@/components/contact-us/ContactBanner";
import ContactCards from "@/common-components/ContactForms/ContactCards";
import ContactUsFormCard from "@/common-components/ContactForms/ContactUsFormCard";
import FaqSection from "../../components/services/FaqsSection";
import Testimonials from "@/common-components/Testimonials/Testimonials";
import GoogleMap from "@/common-components/GoogleMap";
import { findAllSubServices } from "@/_api/subServices";
import { findAllService } from "@/_api/mainservice";
import SchemaInjector from "@/lib/Schema/SchemaInjector";
import { generateSEOMetadata } from "@/lib/SeoConfig/GenerateSeoMetadata";
import OpenForm from "@/common-components/OpenForm";


export async function generateMetadata() {
  return await generateSEOMetadata("contact");
}

export default async function Contact() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en";
  const mainServices = await findAllService(lang);
  const subServices = await findAllSubServices(lang);
  return (
    <>
      <SchemaInjector page={"contact-us"} />
      <OpenForm />
      <ContactBanner lang={lang} />
      <ContactUsFormCard id="signin-component" lang={lang} />
      <ContactCards lang={lang} />
      <FaqSection lang={lang} initialMainServices={mainServices}
        initialSubServices={subServices} />
      <Testimonials lang={lang} hidebutton={false} />
      <GoogleMap height="400px" />

    </>
  );
}
