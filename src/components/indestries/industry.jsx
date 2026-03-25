import Banner from "@/components/about-us/Banner";
import ContactCards from "@/common-components/ContactForms/ContactCards";
import ContactUsFormCard from "@/common-components/ContactForms/ContactUsFormCard";
import Testimonials from "@/common-components/Testimonials/Testimonials";
import ChooseBenefits from "@/components/free-trial/ChooseBenefits";
import FirstTime from "@/components/photography-guide/FirstTime";
import ServiceGrid from "@/components/partnership/ServiceGrid";
import PropertyServices from "./PropertyService";
export default function IndustryPage({ lang, data, industryexplore }) {
  return (
    <>
      <Banner lang={lang} data={data.BannerData} />

      <PropertyServices data={data?.PropertyService} lang={lang} />
      <ChooseBenefits lang={lang} data={data.ChooseBenfits} />

      <FirstTime data={data.FirstTime} />
      <ServiceGrid lang={lang} data={industryexplore?.fields || []} />

      <Testimonials lang={lang} hidebutton={false} />

      <ContactUsFormCard id="signin-component" lang={lang} />

      <ContactCards lang={lang} />
    </>
  );
}
