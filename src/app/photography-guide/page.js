import Banner from "@/components/photography-guide/Banner";
import { getTranslations } from "../../lib/i18nLoader";
import { cookies } from "next/headers";
import AdvantagePhotography from "@/components/photography-guide/AdvantagePhotography";
import PrepTheScene from "@/components/photography-guide/PrepTheScene";
import PhotographyTips from "@/components/photography-guide/PhotographyTips";
import ShootScene from "@/components/photography-guide/ShootScene";
import PhotosAreTaken from "@/components/photography-guide/PhotosAreTaken";
import Benefits from "@/components/photography-guide/Benefits";
import FirstTime from "@/components/photography-guide/FirstTime";
import CeoCard from "@/components/photography-guide/CeoCard";
import ImageFilter from "@/components/photography-guide/ImageFilter";
import Faqs from "@/components/photography-guide/Faqs";
import { generateSEOMetadata } from "@/lib/SeoConfig/GenerateSeoMetadata";
import SchemaInjector from "@/lib/Schema/SchemaInjector";
export async function generateMetadata() {
  return await generateSEOMetadata("photography-guide");
}
export default async function photographyGuide() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en";
  const photographyguidePageData = getTranslations(lang, "photographyguide");
  const homepagebannerData = getTranslations(lang, "homePageBanner");
  const filteredBannerData = homepagebannerData?.BannerData.slice(3)


  return (
    <>
    <SchemaInjector page={"photography-guide"} />
      <Banner data={photographyguidePageData.BannerData} />
      <AdvantagePhotography data={photographyguidePageData.AdvantagePhotographyData} />
      <PhotographyTips data={photographyguidePageData.PhotographyTipsData} />
      <PrepTheScene data={photographyguidePageData.PrepTheSceneData} />
      <ShootScene data={photographyguidePageData.ShootSceneData} />
      <PhotosAreTaken data={photographyguidePageData.PhotosAreTakenData} />
      <ImageFilter data={filteredBannerData} />
      <Benefits data={photographyguidePageData.Benefitsdata} />
      <FirstTime isContactLink={true} data={photographyguidePageData.FirstTime} />
      <Faqs data={photographyguidePageData?.FaqsData}  />
      <CeoCard data={photographyguidePageData?.CeoCard} />
    </>
  );
}
