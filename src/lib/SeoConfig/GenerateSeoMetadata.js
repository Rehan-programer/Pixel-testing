import { cookies } from "next/headers";
import { seoConfig } from "./SeoConfig";

export async function generateSEOMetadata(pageKey) {

  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en";

  // Get page data
  const pageSEO = seoConfig[pageKey];

  // Get language data (fallback to EN)
  const data = pageSEO?.[lang] || pageSEO?.en;

  if (!data) return {};

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,

    authors: [{ name: data.author || "Pixel Perfects Solutions LLC" }],
    publisher: data.publisher || "Pixel Perfects Solutions LLC",

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: data.canonical,
      languages: {
        en: pageSEO.en.canonical,
        es: pageSEO.es.canonical,
      },
    },

    openGraph: {
      title: data.title,
      description: data.description,
      url: data.canonical || "https://www.pxlperfects.com",
      siteName: "Pixel Perfects Solutions",
      locale: data.locale,
  type: data.type?.toLowerCase() || "website",
      images: [
        {
          url: data.ogImage,
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [data.twitterImage],
    },
  };
}