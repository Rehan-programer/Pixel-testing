import enHomePageBanner from "../locales/en/homePageBanner.json";
import esHomePageBanner from "../locales/es/homePageBanner.json";

import engallery from "../locales/en/gallery.json";

import enOtherEdits from "../locales/en/otheredits.json";
import esOtherEdits from "../locales/es/otheredits.json";

import enService from "../locales/en/service.json";
import esService from "../locales/es/service.json";

import enTestimonial from "../locales/en/testimonial.json";
import esTestimonial from "../locales/es/testimonial.json";

import enPartnership from "../locales/en/partnership.json";
import esPartnership from "../locales/es/partnership.json";

import enPhotographer from "../locales/en/photographer.json";
import esPhotographer from "../locales/es/photographer.json";

import enFreeTrial from "../locales/en/freetrial.json";
import esFreeTrial from "../locales/es/freetrial.json";

import enPhotographyGuide from "../locales/en/photographyguide.json";
import esPhotographyGuide from "../locales/es/photographyguide.json";

import enPropertyManager from "../locales/en/propertymanager.json";
import esPropertyManager from "../locales/es/propertymanager.json";


import enArchitects from "../locales/en/architects.json";
import esArchitects from "../locales/es/architects.json";


import enBuilders from "../locales/en/builders.json";
import esBuilders from "../locales/es/builders.json";


import enRealtors from "../locales/en/realtors.json";
import esRealtors from "../locales/es/realtors.json";


import enInteriorDesigners from "../locales/en/interiordesigners.json";
import esInteriorDesigners from "../locales/es/interiordesigners.json";

import enAbout from "../locales/en/about.json";
import esAbout from "../locales/es/about.json";

import enTermCondition from "../locales/en/termscondition.json";
import esTermCondition from "../locales/es/termscondition.json";

import enPrivacy from "../locales/en/privacypolicy.json";
import esPrivacy from "../locales/es/privacypolicy.json";

import enServicePolicy from "../locales/en/servicepolicy.json";
import esServicePolicy from "../locales/es/servicepolicy.json";

import enRefundPolicy from "../locales/en/refundpolicy.json";
import esRefundPolicy from "../locales/es/refundpolicy.json";

import enFooter from "../locales/en/footer.json";
import esFooter from "../locales/es/footer.json";

import enHeader from "../locales/en/header.json";
import esHeader from "../locales/es/header.json";

import enPopularServices from "../locales/en/popularservices.json";
import esPopularServices from "../locales/es/popularservices.json";

import enExplore from "../locales/en/explore.json";
import esExplore from "../locales/es/explore.json";


export const resources = {
  en: { 
    homePageBanner: enHomePageBanner,
    otheredits: enOtherEdits,
    service: enService,
    testimonial: enTestimonial,
    partnership: enPartnership,
    photographer: enPhotographer,
    freetrial: enFreeTrial,
    photographyguide: enPhotographyGuide,
    "property-manager": enPropertyManager,
    architects: enArchitects,
    builders: enBuilders,
    realtors: enRealtors,
    "interior-designers": enInteriorDesigners,
    about: enAbout,
    termscondition: enTermCondition,
    privacypolicy: enPrivacy,
    servicepolicy: enServicePolicy,
    refundpolicy: enRefundPolicy,
    footer: enFooter,
    header: enHeader,
    popularservices: enPopularServices,
    explore: enExplore,
    gallery: engallery
  },
  es: { 
    homePageBanner: esHomePageBanner,
    otheredits: esOtherEdits,
    service: esService,
    testimonial: esTestimonial,
    partnership: esPartnership,
    photographer: esPhotographer,
    freetrial: esFreeTrial,
    photographyguide: esPhotographyGuide,
    "property-manager": esPropertyManager,
    architects: esArchitects,
    builders: esBuilders,
    realtors: esRealtors,
    "interior-designers": esInteriorDesigners,
    about: esAbout,
    termscondition: esTermCondition,
    privacypolicy: esPrivacy,
    servicepolicy: esServicePolicy,
    refundpolicy: esRefundPolicy,
    footer: esFooter,
    header: esHeader,
    popularservices: esPopularServices,
    explore: esExplore,
    
  }
};

export function getTranslations(lang = "en", section) {
  return resources[lang][section];
}
