import Link from "next/link";
import Image from "next/image";
import { Plus } from "lucide-react";
import SEOImage from "@/common-components/SeoImage/SeoImage";

export default function BlogBanner({ lang }) {

  const isES = lang === "es";
const BLOG_BANNER_TEXT = {
  en: {
    titleStart: "Manage &",
    titleHighlight: "Discover Blogs",
    titleEnd: "Effortlessly",
    desc:
      "Create, edit, and explore blogs with ease. Stay on top of your content — all in one streamlined dashboard designed for productivity and control.",
    button: "Create New Blog",
  },

  es: {
    titleStart: "Gestiona y",
    titleHighlight: "Descubre Blogs",
    titleEnd: "Fácilmente",
    desc:
      "Crea, edita y explora blogs fácilmente. Mantente al día con tu contenido — todo en un panel optimizado diseñado para productividad y control.",
    button: "Crear Nuevo Blog",
  },
};
  const t = BLOG_BANNER_TEXT[lang] || BLOG_BANNER_TEXT.en;

  return (
 <div className="mt-[6%] px-[2%] rounded-xl container-global
      relative overflow-hidden
      bg-[linear-gradient(135deg,#EAF1FF_0%,#E7FFF7_100%)]">

      <div className="grid grid-cols-12 items-center gap-x-4">

        {/* LEFT SIDE */}
        <div className="col-span-12 md:col-span-7">

          <h1 className="font-extrabold text-[#292a76]">
            {t.titleStart}{" "}
            <span className="text-[#00cfaa]">{t.titleHighlight}</span>{" "}
            {t.titleEnd}
          </h1>

          <p className="text-[#292a76] w-[80%] my-[2%]">
            {t.desc}
          </p>

          <Link title={t.button}
            className="inline-flex items-center gap-x-2 btn-fullblue py-[0.8rem]"
            href="https://portal.pxlperfects.com/dashboard/blogs/new"
            target="_blank"
          >
            <Plus className="size-[1rem] lg:size-[1vw] 2xl:size-[1rem] text-white"/>
            {t.button}
          </Link>

        </div>

        {/* RIGHT SIDE */}
        <div className="hidden sm:block md:block col-span-11.5 sm:col-span-6 md:col-span-3 z-20 mt-[4%]">
          <SEOImage
            src="/blogbanner.webp"
            width={600}
            height={600}
            alt="blog banner"
            className="w-[10rem] lg:w-[80%] z-10"
          />
        </div>

      </div>

      {/* BACKGROUND IMAGES */}
      <SEOImage
        src="/pixelCliparts.png" width={200} height={200}
        alt="pixel eclipse" title="pixel eclipse"
        className="hidden md:block absolute w-[30%] -top-[40%] -right-[10%] z-0"
      />

      <SEOImage
        width={200}
        height={200}
        src="/line banner.svg"
        alt="line"
        className="hidden md:block absolute w-[30%] top-[15%] right-[-1%]"
      />

    </div>
  );
}
