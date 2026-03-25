import React from "react";
import { getTranslations } from "../../lib/i18nLoader";
import { cookies } from "next/headers";
import TermsBanner from "@/components/TermsAndConditions/TermsBanner";
import ReturnPolicy from "@/components/refundpolicy/ReturnPolicy";
import ContactUsFormCard from "@/common-components/ContactForms/ContactUsFormCard";
import SchemaInjector from "@/lib/Schema/SchemaInjector";
import { generateSEOMetadata } from "@/lib/SeoConfig/GenerateSeoMetadata";


export async function generateMetadata() {
  return await generateSEOMetadata("return-refund");
}


export default async function ReturnRefundPolicy() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en";
   const refundpolicyPageData = getTranslations(lang, "refundpolicy");
  return (
    <>
      <SchemaInjector  page="return-refund"/>
    <TermsBanner data={refundpolicyPageData}/>
   <ReturnPolicy data={refundpolicyPageData} />
    <ContactUsFormCard id="signin-component" lang={lang} />
       
    </>
  );
}
