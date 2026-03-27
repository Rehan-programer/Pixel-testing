"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import SEOImage from "@/common-components/SeoImage/SeoImage";

const MarqueeClients = ({ clients, issubservice }) => {
  return (
    <>
      {/* Normal JS version */}
      <Marquee pauseOnHover={true} direction="left" gradient={false} speed={40}>
        {clients?.map((client, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-white
                     border border-[#e6e6e6] 
                     rounded-[clamp(0.5rem,0.8vw,1rem)]
                     shadow-[0_4px_19px_rgba(0,0,0,0.04)]
                     p-[clamp(1rem,1.8vw,2.2rem)]
                     h-[4rem] md:h-[clamp(6rem,8vw,10rem)]
                     mx-[clamp(0.4rem,0.5vw,0.8rem)]
                     my-[2%] sm:my-[0.5rem] md:my-[1.5%]"
          >
            <SEOImage
              src={`/assets/img/about/clients/${client.logoUrl}.webp`}
              alt={client.logoUrl}
              title={client.logoUrl}
              width={100}
              height={60}
              branding={true}
              className="w-[clamp(3rem,5vw,6rem)] h-auto object-contain"
              loading="lazy"
              decoding="async"
              quality={50}
              sizes="(max-width:768px) 48px, (max-width:1200px) 72px, 96px"
            />
          </div>
        ))}
      </Marquee>
      {/* NOSCRIPT fallback */}
      <noscript>
        <div class="flex flex-wrap justify-center gap-3">
          {clients.slice(0, issubservice ? 3 : 6)?.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white
                         border border-[#e6e6e6] mt-[1rem]
                         rounded-[clamp(0.5rem,0.8vw,1rem)]
                         shadow-[0_4px_19px_rgba(0,0,0,0.04)]
                         p-[clamp(1rem,1.8vw,2.2rem)]
                         h-[4rem] md:h-[clamp(6rem,8vw,10rem)]"
            >
              {/* NOTE: noscript me Next/Image nahi chalega */}
              <img
                src={`/assets/img/about/clients/${client.logoUrl}.webp`}
                alt={client.logoUrl}
                class="w-[clamp(3rem,5vw,6rem)] h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </noscript>
    </>
  );
};

export default MarqueeClients;
