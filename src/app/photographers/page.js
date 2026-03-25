import { getTranslations } from "../../lib/i18nLoader";
import { cookies } from "next/headers";
import Banner from "@/components/about-us/Banner";
import Benefits from "@/components/partnership/Benefits";
import ContactCards from "@/common-components/ContactForms/ContactCards";
import ContactUsFormCard from "@/common-components/ContactForms/ContactUsFormCard";
import Testimonials from "@/common-components/Testimonials/Testimonials";
import TestimonialsClients from "@/components/testimonial/TestimonialsClients";
import ServiceGrid from "@/components/partnership/ServiceGrid";
import PhotoHelp from "@/components/photographers/PhotoHelp";
import BeforeAfter from "@/components/photographers/BeforeAfter";
import SchemaInjector from "@/lib/Schema/SchemaInjector";
import { generateSEOMetadata } from "@/lib/SeoConfig/GenerateSeoMetadata";
export async function generateMetadata() {
  return await generateSEOMetadata("photographer");
}
export default async function photographers() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en";
  const photographersPageData = getTranslations(lang, "photographer");
  const partnerPageData = getTranslations(lang, "partnership");
   const explorePageData = getTranslations(lang, "explore");
  
    const partnershipsData = explorePageData.find(
    (item) => item.labelName === "photographers"
  );

  return (
    <><SchemaInjector page={"photographer"} />
      <Banner lang={lang} data={photographersPageData.BannerData} />
      <Benefits lang={lang} data={photographersPageData.Benefitsdata} />
      <PhotoHelp data={photographersPageData.PhotoHelp}/>
      <BeforeAfter data={photographersPageData.BeforeAfterData} lang={lang} />
      <ServiceGrid lang={lang} data={partnershipsData ?.fields || []} />
      <Testimonials lang={lang} hidebutton={false} />
       <TestimonialsClients
        lang={lang}
        data={partnerPageData.testimonialsClientsInformation}
      />
      <ContactUsFormCard id="signin-component" lang={lang} />
      <ContactCards lang={lang} />
    </>
  );
}
