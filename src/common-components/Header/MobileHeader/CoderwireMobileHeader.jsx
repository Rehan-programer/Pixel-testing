

"use client"
import { getTranslations } from '@/lib/i18nLoader';
import { useHeaderLogic } from '@/utils/useHeaderLogic';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import MobileMenu from './CoderwireMobileMenu';
import CurrencySelectorModal from '@/common-components/CurrencySelector';

export const CoderwireMobileHeader = ({lang}) => {
    const Sectiondata = getTranslations(lang, "header");
  
    const headerLogic = useHeaderLogic({ lang, Sectiondata });
  
    const {
      screenScrolled,
      isAtTop,setFilteredData,
      pathnames,
      pathname,
    } = headerLogic;
      const isHomePage = pathnames.includes(pathname);
  return (
<div
  className={`py-2 md:py-3 ${
    isHomePage
      ? isAtTop || !screenScrolled
        ? "bg-black/10 backdrop-blur-lg shadow-none"
        : "bg-white shadow-md"
      : "bg-white shadow-md"
  }`}
>
      <div className={`container-global items-center !my-0 !p-0 grid grid-cols-4 `}>
        <div className="col-span-2 md:col-span-1">
          <Link href="/" title='Pixel Perfects Solutions LLC'>
                       <Image
                      src={
                            isHomePage
                              ? isAtTop || !screenScrolled
                                ? "/Header LOGO white.webp"
                                : "/Header LOGO .webp"
                              : "/Header LOGO .webp"
                          }
                          alt="Pixel Perfects Solutions LLC"
                          title="Pixel Perfects Solutions LLC"
                          width={160}
                          height={60}
                          className="w-[100%] "
                          priority
                        />
          </Link>
        </div>
       
        <div className="col-span-2 md:col-span-3 items-center flex  justify-end z-[4500]">
                 <div >
            <CurrencySelectorModal  home={isHomePage} scrolled={!isAtTop || screenScrolled} />
            </div>
          <MobileMenu Sectiondata={Sectiondata} setFilteredData={setFilteredData} home={isHomePage} scrolled={!isAtTop || screenScrolled}/>
        </div>
      </div>
    </div>

  )
}
