import React from "react";
import { getTranslations } from "../../lib/i18nLoader";
import { cookies } from "next/headers";
import TermsAndConditions from "@/components/TermsAndConditions/TermsAndConditions";
import TermsBanner from "@/components/TermsAndConditions/TermsBanner";
import SchemaInjector from "@/lib/Schema/SchemaInjector";
import { generateSEOMetadata } from "@/lib/SeoConfig/GenerateSeoMetadata";


export async function generateMetadata() {
  return await generateSEOMetadata("service-policy");
}


export default async function ServicePolicy() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en";
   const servicepolicyPageData = getTranslations(lang, "servicepolicy");
  return (
    <>
      <SchemaInjector  page="servicePolicy" />
    <TermsBanner data={servicepolicyPageData}/>
   <TermsAndConditions data={servicepolicyPageData} />
       
    </>
  );
}
