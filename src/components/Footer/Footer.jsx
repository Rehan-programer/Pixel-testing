import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react"; // You can use heroicons/lucide
import MainPageNewsLetter from "./FooterNewsLetter";
import { getTranslations } from "@/lib/i18nLoader";
import SEOImage from "@/common-components/SeoImage/SeoImage";

const icons = {
  Facebook: <Facebook className="text-white w-5 h-5 md:w-[clamp(0.9rem,1.2vw,1.5rem)]" />,
  Instagram: <Instagram className="text-white w-5 h-5 md:w-[clamp(0.9rem,1.2vw,1.5rem)]" />,
  LinkedIn: <Linkedin className="text-white w-5 h-5 md:w-[clamp(0.9rem,1.2vw,1.5rem)]" />,
};

export default function Footer({ lang }) {
      const footerData = getTranslations(lang, "footer");
    
  return (
    <div className="relative mt-0 lg:mt-[6%]  pb-[2rem] lg:pb-0 bg-[#F6F7F8]">
      {/* Decorative Image */}
      <SEOImage branding={true}
        src="/footer clip arts.svg"
        alt="Footer ClipArts"
        width={1200}
        height={200}
        className="w-[100%] h-[100%] z-10 absolute hidden lg:block lg:top-[-60%]  select-none pointer-events-none"
      />

      {/* Background pattern */}
      <div
        id="footer"
        className=" bg-[url('/PatternLight.png')] bg-no-repeat bg-cover bg-center relative z-[1]"
      >
        <div className="flex flex-wrap justify-between container-global pb-[1%]">

          {/* LEFT COLUMN */}
          <div className="w-[100%] lg:w-[30%] mt-4 lg:mt-[1%] text-center lg:text-left">
            <Link href="/" title="Pixel Perfects Solutions LLC" prefetch={false}>
              <Image
                src="/Header LOGO .webp"
                alt="Pixel Perfects Solutions LLC"
                title="Pixel Perfects Solutions LLC"
                width={250}
                height={1050}
                className="mx-auto w-[60%] lg:mx-0  md:w-[40%]"
              />
            </Link>

            <p className="my-4 lg:my-[4%] ">
              {lang === "es"
                ? "Ofrecemos soluciones de marketing inmobiliario de primer nivel, incluyendo puesta en escena virtual, renders 3D y fotografía de alta calidad. Nuestros servicios ayudan a agentes inmobiliarios, corredores y fotógrafos a mostrar las propiedades de la mejor manera posible."
                : "We provide top-tier real estate marketing solutions, including virtual staging, 3D renders, and high-quality photography. Our services help realtors, brokers, and photographers showcase properties in the best possible way."}
            </p>

            <div className="flex justify-center lg:justify-start gap-3">
              {footerData?.socialIconsMainHomePage?.map((item, i) => (
                <Link 
                  key={i}  title={`Go to ${item.name}`}
                  href={item.link}
                  target="_blank"
                  aria-label={`Go to ${item.name}`}
                  className="bg-[#292a76] rounded-full p-2 lg:p-[1%] flex items-center justify-center size-[2rem] lg:size-[clamp(2rem,4vw,2.5rem)]"
                >
                  {icons[item.icon] || <span>{item.icon}</span>}
                </Link>
              ))}
            </div>
          </div>

          {/* MIDDLE COLUMN */}
          <div className="w-[100%] md:w-[40%] flex flex-wrap justify-between lg:justify-around">
            {footerData?.footerInformation?.map((item, i) =>
              i === 1 || i === 4 || i === 5 ? null : (
                <div key={i} className={`w-[45%] ${item.heading === "Resources" ? "w-full md:w-[45%]" : ""} md:w-auto mt-4 lg:mt-0`}>
                  <h4 className="border-l-4 border-[#00cfaa] pl-2 font-bold ">
                    {item.heading}
                  </h4>
                  {item.subheadings?.map((sub, j) => (
                    <Link
                      key={j} title={sub.name}
                      href={sub.link}
                      prefetch={false}
                      className="block mt-2 "
                    >
                      <p className="hover:text-[#00cfaa] duration-300"> {sub.name}</p>
                    </Link>
                  ))}
                </div>
              )
            )}
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-[100%] md:w-[55%] lg:w-[25%]">
            <div className="flex justify-between gap-8 flex-wrap sm:flex-nowrap">
              {footerData?.footerInformation.slice(4, 6)?.map((item, i) => (
                <div key={i} className="w-[45%] mt-4 lg:mt-0">
                  <h4 className="border-l-4 border-[#00cfaa] pl-2 font-bold ">
                    {item.heading}
                  </h4>
                  {item.subheadings?.map((sub, j) => (
              <Link
                      key={j}
                      href={sub.link} title={sub.name}
                      prefetch={false}
                      className="block mt-2 "
                    >
                      <p className="hover:text-[#00cfaa] duration-300"> {sub.name}</p>
                    </Link>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-6 text-center md:text-left">
              <h4 className="font-bold ">
                {lang === "es" ? "Boletín" : "Newsletter"}
              </h4>
              <MainPageNewsLetter />
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="w-full text-center mt-[2%] ">
            <p className="text-gray-700 text-sm">
              © {new Date().getFullYear()}{" "}
              <Link title="Dotera"
                href="https://www.dotera.co/"
                className="underline text-[#292A76] font-bold"
              >
                Dotera
              </Link>{" "}
              {lang === "es" ? " por " : " by "}
              <Link title=" Pixel Perfects Solution LLCs"
                href="https://www.pxlperfects.com/"
                className="underline text-[#292A76] font-bold"
              >
                Pixel Perfects Solutions LLC
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
