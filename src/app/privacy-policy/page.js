import React from "react";
import { getTranslations } from "../../lib/i18nLoader";
import { cookies } from "next/headers";
import TermsAndConditions from "@/components/TermsAndConditions/TermsAndConditions";
import TermsBanner from "@/components/TermsAndConditions/TermsBanner";
import { generateSEOMetadata } from "@/lib/SeoConfig/GenerateSeoMetadata";
import SchemaInjector from "@/lib/Schema/SchemaInjector";


export async function generateMetadata() {
  return await generateSEOMetadata("privacyPolicy");
}


export default async function PrivacyPolicy() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en";
   const privacypolicyPageData = getTranslations(lang, "privacypolicy");
  return (
    <>
    <SchemaInjector page={"privacyPolicy"} />
    <TermsBanner data={privacypolicyPageData}/>
   <TermsAndConditions data={privacypolicyPageData} />
       
    </>
  );
}
