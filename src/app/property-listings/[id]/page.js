
import { cookies } from "next/headers";

import { findAllProperties } from "@/_api/propertylistingapi";
import PropertyDetail from "@/components/propertylisitng-dynamic/PropertyDetail";
import GalleryWithLightbox from "@/components/GalleryWithLightbox";
import SchemaInjector from "@/lib/Schema/SchemaInjector";

export async function generateMetadata({ params }) {

  const { id } = await params;

  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en";

  let alldetails = [];

  try {
    alldetails = await findAllProperties(lang);
  } catch (error) {
    return {};
  }

  const propertydata = alldetails.find((item) => item.id === id);

  if (!propertydata) return {};

  const isES = lang === "es";

  const title =
    propertydata?.title ||
    (isES
      ? "Listado de Propiedad | Pixel Perfects Solutions"
      : "Property Listing | Pixel Perfects Solutions");

  const description =
    propertydata?.description ||
    (isES
      ? "Explora propiedades inmobiliarias mejoradas con virtual staging."
      : "Explore professionally enhanced real estate property listings.");

  const url = `https://www.pxlperfects.com/property-listings/${id}`;

  return {

    title,

    description,
  keywords: [
    propertydata?.title,
    propertydata?.city,
    propertydata?.state,
    "real estate listing",
    "virtual staging property",
    "real estate marketing",
    "property visualization",
    "pixel perfects solutions",
    ...(propertydata?.keywords || []), // ⭐ if API has keywords
  ].filter(Boolean),

    alternates: {
      canonical: url,
    },
   authors: [{ name: propertydata.author || "Pixel Perfects Solutions LLC" }],
    publisher: propertydata.publisher || "Pixel Perfects Solutions LLC",

    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [
        {
          url:
            propertydata?.images?.[0]?.url ||
            "https://www.pxlperfects.com/images/default-property.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        propertydata?.images?.[0]?.url ||
          "https://www.pxlperfects.com/images/default-property.jpg",
      ],
    },
  };
}
export default async function PropertyDetailsPage({ params }) {
  const { id } =await params;

  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en";

  let alldetails = [];
  try {
    alldetails = await findAllProperties(lang);
  } catch (error) {
    return <div className="text-center text-red-500">Failed to load blog</div>;
  }

  const propertydata = alldetails.find((item) => item.id === id);

  if (!propertydata) {
    return (
      <div className="py-20 text-center text-red-600 text-3xl">
        property not found
      </div>
    );
  }

  return (
    <>   <SchemaInjector  page="propertyDetail"
       data={propertydata}
       lang={lang} />
        
    <PropertyDetail data={propertydata} />
     <GalleryWithLightbox images={propertydata} />
    </>
  );
}
