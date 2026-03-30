import { cookies } from "next/headers";
import { getTranslations } from "@/lib/i18nLoader";
import Script from "next/script";

import HomePageBanner from "@/components/home-page/HomePageBanner";
import DashBoardPortal from "@/components/home-page/DashboardPortal";
import OurClients from "@/components/home-page/OurClients";
import Launching from "@/components/home-page/Launching";
import WhatAreTheBenefits from "@/components/home-page/WhatAreTheBenefits";
import WhyNeed from "@/components/home-page/WhyNeed";
import OurServices from "@/components/home-page/OurServices/OurServices";
import Industries from "@/components/home-page/IndustriesWeCover/Industries";
import Vision from "@/components/home-page/Vision";
import ServicePricing from "@/components/home-page/ServicePricing/ServicePricing";
import Testimonials from "@/common-components/Testimonials/Testimonials";
import ContactUsFormCard from "@/common-components/ContactForms/ContactUsFormCard";
import ContactCards from "@/common-components/ContactForms/ContactCards";
import SchemaInjector from "@/lib/Schema/SchemaInjector";
import { generateSEOMetadata } from "@/lib/SeoConfig/GenerateSeoMetadata";

export async function generateMetadata() {
  return await generateSEOMetadata("home");
}

export default async function Home() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en";
  const homePageData = getTranslations(lang, "homePageBanner");

  return (
    <>
      {/* Schema for SEO */}
      <SchemaInjector page={"mainhome"} />

      {/* Homepage content */}
      <HomePageBanner data={homePageData} heading="home banner" lang={lang} />
      <DashBoardPortal data={homePageData?.PortalData} />
      <div className="container-global p-[0]">
        <OurClients data={homePageData?.OurClients} />
        <Launching data={homePageData?.LaunchingData} />
      </div>
      <OurServices data={homePageData?.OurServices} lang={lang} />
      <WhatAreTheBenefits data={homePageData.Benefits} lang={lang} />
      <WhyNeed data={homePageData.WhyNeed} />
      <Industries lang={lang} />
      <Vision data={homePageData.visionData} />
      <ServicePricing lang={lang} data={homePageData.ServicePricingData} />
      <Testimonials lang={lang} />
      <ContactUsFormCard lang={lang} />
      <ContactCards />

      {/* Trustpilot widget (homepage only) */}
      <Script
        src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="lazyOnload"
      />
    </>
  );
}