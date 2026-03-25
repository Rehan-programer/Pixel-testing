import { cookies } from "next/headers";
import { getTranslations } from "@/lib/i18nLoader";
import IndustryPage from "../../components/indestries/industry";
import { notFound } from "next/navigation";
import { generateSEOMetadata } from "@/lib/SeoConfig/GenerateSeoMetadata";
import SchemaInjector from "@/lib/Schema/SchemaInjector";

const allowedIndustries = [
  "property-manager",
  "architects",
  "builders",
  "realtors",
  "interior-designers",
];

export async function generateMetadata({ params }) {

  const { industry } =await params;

  if (!allowedIndustries.includes(industry)) {
    return {};
  }

  return await generateSEOMetadata(industry);
}
export default async function DynamicIndustryPage({ params }) {
  const { industry } =await params;

  if (!allowedIndustries.includes(industry)) {
    notFound();
  }

  const lang = (await cookies()).get("lang")?.value || "en";

  const explorePageData = getTranslations(lang, "explore");
  const industryexplore = explorePageData.find(
    (item) => item.labelName === industry
  );

  const data = await getTranslations(lang, industry);

  if (!data) {
    return (
      <div className="py-20 text-center text-red-600 text-3xl">
        Industry page not found
      </div>
    );
  }
  return (
    <>
       <SchemaInjector  page={industry}/>
    <IndustryPage lang={lang} data={data} industryexplore={industryexplore} />
    </>
  );
}
