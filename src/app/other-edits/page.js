import { findAllService } from "@/_api/mainservice";
import { findAllSubServices } from "@/_api/subServices";
import HomePageBanner from "@/components/home-page/HomePageBanner";
import { cookies } from "next/headers";
import ServiceGrid from "@/components/partnership/ServiceGrid";
import Testimonials from "@/common-components/Testimonials/Testimonials";
import ContactUsFormCard from "@/common-components/ContactForms/ContactUsFormCard";
import ContactCards from "@/common-components/ContactForms/ContactCards";
import TestimonialsClients from "@/components/testimonial/TestimonialsClients";
import { getTranslations } from "@/lib/i18nLoader";
import { generateSEOMetadata } from "@/lib/SeoConfig/GenerateSeoMetadata";
import SchemaInjector from "@/lib/Schema/SchemaInjector";


export async function generateMetadata() {
  return await generateSEOMetadata("otherEdits");
}

export default async function OtherEditsPage() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en";
    const testimonialsPageData = getTranslations(lang, "testimonial");

  const mainServices = await findAllService(lang);

  const mainService = mainServices.find(
    (s) =>
      s.name?.trim()?.toLowerCase() ===
      (lang === "en" ? "other edits" : "otras ediciones") 
  );

  if (!mainService) {
    return (
      <div className="py-10 text-center text-red-600 text-3xl">
        Other Edits main service not found
      </div>
    );
  }

  const allSubServices = await findAllSubServices(lang);

  const relatedSubservices = allSubServices.filter(
    (sub) => sub.mainServiceId === mainService.id
  );


  return (
   
   <> <SchemaInjector page={"otheredits"} />
    <HomePageBanner mainService={mainService} data={relatedSubservices} lang={lang} />
     <ServiceGrid lang={lang} data={relatedSubservices.filter(item => item.afterImage || item.beforeImage) || []}  />
      <Testimonials lang={lang} hidebutton={false} />
          <TestimonialsClients
              lang={lang}
              data={testimonialsPageData.testimonialsClientsInformation}
            />
        <ContactUsFormCard id="signin-component" lang={lang} />
         <ContactCards lang={lang} />
   </>
  );
}
