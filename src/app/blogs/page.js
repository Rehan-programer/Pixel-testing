import { findAllBlogPosts } from "../../_api/blog-post";
import { cookies } from "next/headers";
import BlogBanner from "@/components/blog/BlogBanner";
import BlogsPost from "@/components/blog/BlogsPost";
import Link from "next/link";
import SchemaInjector from "@/lib/Schema/SchemaInjector";
import { seoConfig } from "@/lib/SeoConfig/SeoConfig";
import { generateSEOMetadata } from "@/lib/SeoConfig/GenerateSeoMetadata";

export async function generateMetadata() {
  return generateSEOMetadata("blog");
}

export default async function BlogPage() {

  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en";

  let blogs = [];

  try {
    blogs = await findAllBlogPosts(lang);
  } catch (err) {
    console.error("Failed to fetch blogs:", err);
  }

  return (
    <>
    <SchemaInjector  page={"blog"}/>
      <BlogBanner lang={lang} />

      {/* EMPTY STATE */}
      {!blogs || blogs.length === 0 ? (

        <div className="container-global py-20 flex flex-col items-center justify-center text-center">

          {/* ICON */}
          <div className="w-20 h-20 mb-6 rounded-full bg-[#e8f7f5] flex items-center justify-center">
            <svg
              width="36"
              height="36"
              fill="none"
              stroke="#00cfaa"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 19h16M4 5h16M4 12h16" />
            </svg>
          </div>

          {/* TITLE */}
          <h2 className="text-3xl font-bold text-[#292a76] mb-3">
            No Blogs Yet
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-500 max-w-md mb-8">
            Looks like there are no blog posts available right now.
            Start creating your first blog to engage your audience.
          </p>

          {/* CTA BUTTON */}
          <Link title="Create New Blog"
             href="https://portal.pxlperfects.com/dashboard/blogs/new"
            target="_blank"
            className="px-6 py-3 bg-[#00cfaa] text-white rounded-lg font-semibold
                       hover:bg-[#00b89a] transition-all shadow-md"
          >
            Create New Blog
          </Link>

        </div>

      ) : (

        <BlogsPost data={blogs} lang={lang} />

      )}

    </>
  );
}