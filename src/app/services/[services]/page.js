import { findAllSubServices } from "@/_api/subServices";
import IncludesPoints from "@/components/services/dynamic/IncludePoints";
import Pricing from "@/components/services/dynamic/Pricing";
import PropertyExamplesCarousel from "@/components/services/dynamic/PropertyExamplesCarousel";
import ServiceBanner from "@/components/services/dynamic/ServiceBanner/ServiceBanner";
import Faqs from "@/components/photography-guide/Faqs";
import { cookies } from "next/headers";
import { getTranslations } from "@/lib/i18nLoader";
import ChooseCard from "@/components/services/dynamic/ChooseCard/ChooseCard";
import ClientCard from "@/components/services/dynamic/ClientCard";
import { FirstTimeData } from "@/components/services/dynamic/FirstTimeData";
import FirstTime from "@/components/photography-guide/FirstTime";
import Testimonials from "@/common-components/Testimonials/Testimonials";
import ContactUsFormCard from "@/common-components/ContactForms/ContactUsFormCard";
import ContactCards from "@/common-components/ContactForms/ContactCards";
import RelatedServiceId from "../../../components/services/dynamic/RelatedSeriveId";
import SchemaInjector from "@/lib/Schema/SchemaInjector";

export async function generateMetadata({ params }) {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "en";
  const { services } = params;

  let allSubServices = [];
  try {
    allSubServices = await findAllSubServices(lang);
  } catch (err) {
    return {};
  }

  const data = allSubServices.find((sub) => {
    const urlParts = sub.link.split("/");
    return urlParts[urlParts.length - 1] === services;
  });


  if (!data) return {};

  const sitemap = data?.sitemap || {};
  const isES = lang === "es";

  const title =
    sitemap?.metaTitle ||
    data?.seoTitle ||
    `${data?.subName || "Service"} | Pixel Perfects Solutions`;

  const description =
    sitemap?.metaDescription ||
    data?.seoDescription ||
    data?.subDescription ||
    (isES
      ? "Servicio profesional de marketing inmobiliario ofrecido por Pixel Perfects Solutions."
      : "Professional real estate marketing service provided by Pixel Perfects Solutions.");

  const url =
    sitemap?.canonical ||
    `https://www.pxlperfects.com/services/${services}`;

  const image =
    sitemap?.image ||
    data?.bannerImage ||
    data?.servicespropertexamples?.images?.[0]?.Afterimg ||
    "https://www.pxlperfects.com/og/services.png";

  return {
    title,
    description,
    keywords: [
      data?.subName,
      ...(data?.keywords || []),
      ...(data?.secondaryKeywords || []),
      "real estate marketing",
      "virtual staging",
      "image editing services",
      "pixel perfects solutions",
    ],
    authors: [{ name: data.author || "Pixel Perfects Solutions LLC" }],
    publisher: data.publisher || "Pixel Perfects Solutions LLC",
    robots: {
      index: sitemap?.index ?? true,
      follow: sitemap?.follow ?? true,
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [
        {
          url: sitemap?.openGraph?.image || image,
          width: sitemap?.openGraph?.width || 1200,
          height: sitemap?.openGraph?.height || 630,
        },
      ],
    },
    twitter: {
      card: sitemap?.card || "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function DynamicServicesPage({ params }) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en";
  const homePageData = getTranslations(lang, "homePageBanner");
  const { services } = await params;

  let allSubServices = [];
  try {
    allSubServices = await findAllSubServices(lang);
  } catch (err) {
    console.error("Failed to fetch subservices:", err);
    return (
      <div className="py-20 text-center text-red-600 text-3xl">
        Failed to fetch service data
      </div>
    );
  }

  const data = allSubServices.find((sub) => {
    const urlParts = sub.link.split("/");
    return urlParts[urlParts.length - 1] === services;
  });
  console.log("data" , data);
  

  if (!data) {
    return (
      <div className="py-20 text-center text-red-600 text-3xl">
        Service not found
      </div>
    );
  }

  const relatedServiceData = allSubServices.find(
    (sub) => sub.id === data.relatedServiceId
  );

  const finalFirstTimeData = FirstTimeData[lang] || FirstTimeData["en"];
  const subname = data.subName;

  return (
    <>
      <SchemaInjector page="serviceDetail" data={data} lang={lang} />

      {data && Object.keys(data).length > 0 && (
        <ServiceBanner lang={lang} data={data} />
      )}

      {Array.isArray(data?.includespoints) &&
        data?.includespoints.length > 0 && (
          <IncludesPoints data={data} />
        )}

      {data?.servicespropertexamples &&
        Array.isArray(data?.servicespropertexamples?.images) &&
        data.servicespropertexamples?.images?.some(
          (img) => img?.Beforeimg || img?.Afterimg
        ) && (
          <PropertyExamplesCarousel
            data={data?.servicespropertexamples}
            subname={subname}
            lang={lang}
          />
        )}

      {Array.isArray(data?.pricedetail) && data?.pricedetail.length > 0 && (
        <Pricing data={data.pricedetail} subname={subname} lang={lang} />
      )}

      {relatedServiceData && Object.keys(relatedServiceData).length > 0 && (
        <RelatedServiceId data={relatedServiceData} />
      )}

      {Array.isArray(relatedServiceData?.pricedetail) &&
        relatedServiceData?.pricedetail.length > 0 && (
          <Pricing
            data={relatedServiceData?.pricedetail}
            subname={relatedServiceData.subName}
            lang={lang}
          />
        )}

      <ClientCard data={homePageData} lang={lang} />

      {Array.isArray(data?.faqs) && data?.faqs.length > 0 && (
        <Faqs data={data} lang={lang} subname={subname} />
      )}

      <FirstTime subname={subname} data={finalFirstTimeData} />

      {data?.choosecomponent && (
        <ChooseCard data={data?.choosecomponent} />
      )}

      <Testimonials lang={lang} hidebutton={false} />
      <ContactUsFormCard id="signin-component" lang={lang} />
      <ContactCards lang={lang} />
    </>
  );
}