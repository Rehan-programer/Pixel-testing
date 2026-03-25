import { Star, Quote } from "lucide-react";
import { findAllTestamonials } from "../../_api/testimonials";
import Link from "next/link";
import Image from "next/image";
import SEOImage from "@/common-components/SeoImage/SeoImage";

export default async function TestimonialsGrid({ lang = "en", searchParams }) {
  const page = Number(searchParams?.page) || 1;
  const itemsPerPage = 8;

  const testimonials = await findAllTestamonials(lang);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = testimonials.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div id="testimonials" className="container-global ">
      {/* ----- Top Heading Section ----- */}
      <div className="text-center mb-[1rem] lg:mb-[2%]">
        <div className="flex items-center justify-center space-x-2">
          <div className="text-yellow-500 flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} fill="#facc15" stroke="#facc15" />
            ))}
          </div>
          <p className=" font-bold">
            {testimonials.length + 50}{" "}
            {lang === "en" ? "reviews & ratings" : "reseñas y valoraciones"}
          </p>
        </div>

        <p className="mt-[0.5rem] lg:mt-[1%]">
          {lang === "en" ? (
            <>
              Our customers love Pixel Perfects Solutions. <br />
              These are their exact words, shared exactly as they were given,
              without edits for grammar or spelling.
            </>
          ) : (
            <>
              Nuestros clientes aman Pixel Perfects Solutions. <br />
              Estas son sus palabras exactas, compartidas tal como fueron dadas,
              sin correcciones de gramática o ortografía.
            </>
          )}
        </p>
      </div>

      {/* ----- Testimonials Cards ----- */}
      <div className=" grid gap-4 md:grid-cols-2 lg:grid-cols-4 grid-cols-1  ">
        {currentItems.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-lg border border-gray-100 overflow-hidden "
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.3) 0px 5px 20px, rgba(0, 0, 0, 0.22) 0px 0px 0px",
            }}
          >
            <div className="flex items-center gap-x-2 p-[1rem] lg:p-[2%] ">
              {t.clientImage ? (
                <SEOImage
                  height={100}
                  width={1000}
                  src={t.clientImage}
                  alt={t.clientName}
                  className=" w-[4rem] h-[4rem] lg:w-[4vw] lg:h-[4vw] 2xl:h-14 2xl:w-14 rounded-full  object-cover"
                />
              ) : (
                <div className="w-[4rem] h-[4rem] lg:w-[4vw] lg:h-[4vw] 2xl:h-14 2xl:w-14 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">
                  {t.clientName.charAt(0).toUpperCase()}
                </div>
              )}

              <div>
                <h4 className=" font-semibold">{t.clientName}</h4>
                <div className="flex text-yellow-400">
                  {Array.from({ length: t.stars || 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="#facc15" stroke="#facc15" />
                  ))}
                </div>
              </div>
            </div>

            {t.images && (
              <div className="flex justify-center ">
                <SEOImage
                  height={500}
                  width={500}
                  src={t.images}
                  alt={t.clientName}
                  className="h-44 w-full object-cover"
                />
              </div>
            )}

            <div className=" p-[1rem] lg:p-[4%]">
              <Quote size={18} className="text-gray-400 mb-[0.5rem] lg:mb-[1%] opacity-70" />
              <p className="">
                {t.message.trim()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ----- Pagination ----- */}
      {totalPages > 1 && (
        <div className="flex justify-between  items-center gap-6 mt-[1.5rem] lg:mt-[2%]">
          <Link title="Previous"
            href={`?page=${page - 1}#testimonials`}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              page === 1
                ? "text-gray-400 bg-gray-300 pointer-events-none"
                : "bg-[#0ccfaa] text-white hover:bg-[#0abf9c]"
            }`}
          >
            Previous
          </Link>

          <p>
            {page} / {totalPages}
          </p>

          <Link title="Next"
            href={`?page=${page + 1}#testimonials`}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              page === totalPages
                ? "text-gray-400 bg-gray-300 pointer-events-none"
                : "bg-[#0ccfaa] text-white hover:bg-[#0abf9c]"
            }`}
          >
            Next
          </Link>
        </div>
      )}
    </div>
  );
}
