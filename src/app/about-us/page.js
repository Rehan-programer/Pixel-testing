import Testimonials from "@/common-components/Testimonials/Testimonials";
import Banner from "@/components/about-us/Banner";
import OurCeo from "@/components/about-us/OurCeo";
import OurMission from "@/components/about-us/OurMission";
import OurStory from "@/components/about-us/OurStory";
import WhatWeDo from "@/components/about-us/WhatWeDo";
import WhoWeAre from "@/components/about-us/WhoWeAre";
import WhyChooseUs from "@/components/about-us/WhyChooseUs";
import { getTranslations } from "@/lib/i18nLoader";
import SchemaInjector from "@/lib/Schema/SchemaInjector";
import { generateSEOMetadata } from "@/lib/SeoConfig/GenerateSeoMetadata";
import { cookies } from "next/headers";
import React from "react";
export async function generateMetadata() {
  return await generateSEOMetadata("about");
}

export default async function About() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en";
  const aboutPageData = getTranslations(lang, "about");
  return (
    <>  <SchemaInjector page={"about"} />
      <Banner data={aboutPageData.BannerData} />
      <OurStory data={aboutPageData.OurStoryData} />
      <OurCeo data={aboutPageData.OurCeoData} />
      <WhoWeAre data={aboutPageData.WhoWeAreData} />
      <WhatWeDo data={aboutPageData.WhatWeDoData} />
      <WhyChooseUs data={aboutPageData.WhyChooseUsData} />
      <OurMission data={aboutPageData.OurMissionData} />
      <WhyChooseUs data={aboutPageData.OurCoreValuesData} />
      <Testimonials lang={lang}/>
    </>
  );
}
