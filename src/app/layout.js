import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import ClientWrapper from "@/utils/ClientLayout";
import { cookies } from "next/headers";
import { getTranslations } from "@/lib/i18nLoader";
import ReactQueryProvider from "../common-components/providers/ReactQueryProvider";
import { ModalProvider } from "../common-components/providers/ModalContext";
import ContactModel from "@/common-components/ContactModel";
import { Analytics } from "@vercel/analytics/next";
import Scripts from "../lib/Scripts/Scripts"; // <-- optimized global scripts

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "Pixel Perfects Solutions",
  description:
    "High-performance Tailwind + Next.js 14 application optimized for SEO and Core Web Vitals.",
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en";
  const globalData = getTranslations(lang, "global");
  const languages = ["en", "es", "fr"];

  return (
    <html
      lang={lang}
      translate="no"
      className={`${inter.variable} font-sans scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <meta name="google" content="notranslate" />
        <meta httpEquiv="Content-Language" content={lang} />

        {languages.map((l) => (
          <link
            key={l}
            rel="alternate"
            href={`https://www.pxlperfects.com/${l}`}
            hrefLang={l}
          />
        ))}
        <link rel="alternate" href="https://www.pxlperfects.com/" hrefLang="x-default" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://firebasestorage.googleapis.com" />
        <link rel="dns-prefetch" href="https://firebasestorage.googleapis.com" />
      </head>

      <body className="antialiased bg-white text-[#1a1a1a]">
        <ClientWrapper lang={lang}>
          <ReactQueryProvider>
            <ModalProvider>
              <ContactModel />
              <LanguageProvider>{children}</LanguageProvider>
            </ModalProvider>
          </ReactQueryProvider>
        </ClientWrapper>

        {/* Global scripts */}
        <Scripts />

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}