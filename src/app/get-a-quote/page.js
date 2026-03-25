import React from "react";
import { cookies } from "next/headers";
import QuoteBanner from "@/components/get-a-quote/QuoteBanner";
import QuoteForm from "@/components/get-a-quote/QuoteForm";
import Industries from "@/components/home-page/IndustriesWeCover/Industries";
import SchemaInjector from "@/lib/Schema/SchemaInjector";
import { generateSEOMetadata } from "@/lib/SeoConfig/GenerateSeoMetadata";
import { findAllService } from "@/_api/mainservice";
import { findAllSubServices } from "@/_api/subServices";


export async function generateMetadata() {
  return await generateSEOMetadata("getQuote");
}


export default async function GetAQuote() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en";
        const mainServices = await findAllService(lang);
    const subServices = await findAllSubServices(lang);
  return (
    <>
     <SchemaInjector page={"quote"} />
     <QuoteBanner lang={lang}/>
     <QuoteForm lang={lang} />
           <Industries lang={lang}  mainServices={mainServices} subServices={subServices}/>
       
    </>
  );
}
