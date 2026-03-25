
import { cookies } from "next/headers";

import { getTranslations } from "@/lib/i18nLoader";
import BlogDetails from "@/components/blog/BlogDetails";
import { findAllBlogPosts } from "@/_api/blog-post";
import SchemaInjector from "@/lib/Schema/SchemaInjector";
import BlogsComments from "@/common-components/BlogsComments";


export async function generateMetadata({ params }) {

  const { id } =await params;

  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en";

  const allBlogs = await findAllBlogPosts(lang);
  const blogdata = allBlogs.find((item) => item.id === id);

  if (!blogdata) {
    return { title: "Blog Not Found" };
  }

  const canonicalURL = `https://www.pxlperfects.com/blogs/${blogdata.id}`;

  return {
    title: blogdata.seoTitle || blogdata.title,

    description:
      blogdata.seoDescription || blogdata.shortDes,

    alternates: {
      canonical: canonicalURL,
    },
   authors: [{ name: blogdata.author || "Muhammad Faizan Islam" }],
    publisher: blogdata.publisher || "Pixel Perfects Solutions LLC",
  keywords: [
    blogdata.title,
    blogdata.category,
    "real estate marketing blog",
    "virtual staging tips",
    "real estate photo editing",
    "property marketing insights",
    "pixel perfects solutions",
    ...(blogdata.seoKeywords || []), // ⭐ if API has custom keywords
  ].filter(Boolean),
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: blogdata.seoTitle || blogdata.title,
      description:
        blogdata.seoDescription || blogdata.shortDes,
      type: "article",
      url: canonicalURL,
      siteName: "Pixel Perfects Solutions",
      images: [
        {
          url: blogdata.coverImg,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: blogdata.seoTitle || blogdata.title,
      description:
        blogdata.seoDescription || blogdata.shortDes,
      images: [blogdata.coverImg],
    },

  };
}
export default async function BlogDetailPage({ params }) {
  const { id } = await params;

  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en";
  const populardata = getTranslations(lang, "popularservices");

  let allBlogs = [];
  try {
    allBlogs = await findAllBlogPosts(lang);
  } catch (error) {
    return <div className="text-center text-red-500">Failed to load blog</div>;
  }

  const blogdata = allBlogs.find((item) => item.id === id);

  if (!blogdata) {
    return (
      <div className="py-20 text-center text-red-600 text-3xl">
        Blog not found
      </div>
    );
  }

  
  return (
    <>
        <SchemaInjector  page="blogDetail"
   data={blogdata}
   lang={lang} />
    
    <BlogDetails populardata={populardata} blogdata={blogdata} lang={lang} />
    </>
  );
}
