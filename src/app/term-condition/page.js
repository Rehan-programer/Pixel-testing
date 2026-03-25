import React from "react";
import { getTranslations } from "../../lib/i18nLoader";
import { cookies } from "next/headers";
import TermsAndConditions from "@/components/TermsAndConditions/TermsAndConditions";
import TermsBanner from "@/components/TermsAndConditions/TermsBanner";
import { generateSEOMetadata } from "@/lib/SeoConfig/GenerateSeoMetadata";
import SchemaInjector from "@/lib/Schema/SchemaInjector";



export async function generateMetadata() {
  return await generateSEOMetadata("termsConditions");
}

export default async function TermsAndCondition() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en";
   const termsandconditionPageData = getTranslations(lang, "termscondition");
  return (
    <>
    <SchemaInjector page={"terms-condition"}/>
    <TermsBanner data={termsandconditionPageData}/>
   <TermsAndConditions data={termsandconditionPageData} />
    </>
  );
}
