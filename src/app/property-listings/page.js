import { cookies } from "next/headers";
import { findAllProperties } from "@/_api/propertylistingapi";
import Listingcards from "@/components/propertylisitng-dynamic/Listingcards";
import SchemaInjector from "@/lib/Schema/SchemaInjector";
import { generateSEOMetadata } from "@/lib/SeoConfig/GenerateSeoMetadata";

export async function generateMetadata() {
  return await generateSEOMetadata("propertyListing");
}
export default async function PropertyListingPage() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en";


  let allpropertylisting = [];
  try {
    allpropertylisting = await findAllProperties(lang);
  } catch (err) {
    console.error("Failed to fetch subservices:", err);
    return (
      <div className="py-20 text-center text-red-600 text-3xl">
        Failed to fetch service data
      </div>
    );
  }

  const data = allpropertylisting

  if (!data) {
    return (
      <div className="py-20 text-center text-red-600 text-3xl">
        Service not found
      </div>
    );
  }


  return (
    <>
    <SchemaInjector page={"propertyListings"} />
    <Listingcards data={data}/>
    </>
  );
}
