import React from "react";
import { cookies } from "next/headers";
import { getTranslations } from "@/lib/i18nLoader";
import Images from "@/components/gallery/Images";
import AboutBanner from "@/components/about-us/Banner";
import { findAllGallery } from "@/_api/gallery";
import Link from "next/link";
import SchemaInjector from "@/lib/Schema/SchemaInjector";
import { generateSEOMetadata } from "@/lib/SeoConfig/GenerateSeoMetadata";


export async function generateMetadata() {
  return await generateSEOMetadata("gallery");
}


export default async function Gallery() {

  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en";

  const data = getTranslations(lang, "gallery");
  const gallerydata = await findAllGallery(lang);

  const hasGallery = gallerydata && gallerydata.length > 0;

  return (
    <>
     <SchemaInjector page={"gallery"} />
      <AboutBanner lang={lang} data={data?.BannerData} />

      {hasGallery ? (

        <Images data={gallerydata} />

      ) : (

        // ⭐ ENGAGING EMPTY STATE
        <div className="container-global mx-auto py-20 text-center">

          <div className="max-w-[600px] mx-auto">

            <h2 className="text-3xl font-bold text-[#292a76] mb-4">
              New Designs Coming Soon 🚀
            </h2>

            <p className="text-gray-600 mb-8">
              We are currently preparing stunning virtual staging designs for this category.
              Check back soon or explore our services to transform your space today.
            </p>

            <div className="flex gap-4 justify-center">

              <Link title="Explore Services"
                href="/services"
                className="bg-[#00cfaa] text-white px-6 py-3 rounded-md font-semibold hover:scale-105 transition"
              >
                Explore Services
              </Link>

              <Link title="Request Custom Design"
                href="/contact-us"
                className="border border-[#292a76] text-[#292a76] px-6 py-3 rounded-md font-semibold hover:bg-[#292a76] hover:text-white transition"
              >
                Request Custom Design
              </Link>

            </div>

          </div>

        </div>

      )}

    </>
  );
}
