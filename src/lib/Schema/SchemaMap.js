export const schemaMap = {
  "home": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/#homepage",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides virtual staging, 3D renders, floor plans, and image enhancement services for real estate professionals.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions delivers high-quality real estate marketing services including virtual staging, HDR editing, 3D renders, and more.",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.pxlperfects.com/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        email: "orders@pxlperfects.com",
        logo: "https://www.pxlperfects.com/images/logo.png",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },
    ],
  },
    "blog": {
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "CollectionPage",
      "@id": "https://www.pxlperfects.com/blog#webpage",
      url: "https://www.pxlperfects.com/blog",
      name: "Real Estate Marketing Blog | Pixel Perfects Solutions",
      description:
        "Explore virtual staging trends, AI real estate photo editing insights, and marketing strategies to help properties sell faster online.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.pxlperfects.com/#website",
      }
    },

    {
      "@type": "WebSite",
      "@id": "https://www.pxlperfects.com/#website",
      url: "https://www.pxlperfects.com/",
      name: "Pixel Perfects Solutions",
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://www.pxlperfects.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },

    {
      "@type": "Organization",
      "@id": "https://www.pxlperfects.com/#organization",
      name: "Pixel Perfects Solutions",
      url: "https://www.pxlperfects.com/",
      logo: "https://www.pxlperfects.com/images/logo.png",
      email: "orders@pxlperfects.com",
      sameAs: [
        "https://www.facebook.com/pixel.perfects.solutions/",
        "https://www.linkedin.com/company/pixel-perfects",
        "https://www.instagram.com/pixel.perfects.solutions/"
      ]
    }

  ]
},
 "blogDetail": (data, lang = "en") => {

    const canonical = `https://www.pxlperfects.com/blogs/${data.id}`;

    return {
      "@context": "https://schema.org",
      "@graph": [

        // WebPage
        {
          "@type": "WebPage",
          "@id": `${canonical}#webpage`,
          url: canonical,
          name: data.seoTitle || data.title,
          description: data.seoDescription || data.shortDes,
          inLanguage: lang === "es" ? "es-ES" : "en-US",
          isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        },

        // BlogPosting
        {
          "@type": "BlogPosting",
          "@id": `${canonical}#article`,
          headline: data.seoTitle || data.title,
          description: data.seoDescription || data.shortDes,
          image: [data.coverImg],
          datePublished: data.createdAt,
          dateModified: data.updatedAt || data.createdAt,

          author: {
            "@type": "Person",
            name: data.authorName,
          },

          publisher: {
            "@type": "Organization",
            "@id": "https://www.pxlperfects.com/#organization",
            name: "Pixel Perfects Solutions LLC",
            logo: {
              "@type": "ImageObject",
              url: "https://www.pxlperfects.com/images/logo.png",
            },
          },

          mainEntityOfPage: {
            "@id": `${canonical}#webpage`,
          },
        },

      ],
    };
  },
  "mainhome": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/#homepage",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides virtual staging, 3D renders, floor plans, and image enhancement services for real estate professionals.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions delivers high-quality real estate marketing services including virtual staging, HDR editing, 3D renders, and more.",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.pxlperfects.com/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        email: "orders@pxlperfects.com",
        logo: "https://www.pxlperfects.com/images/logo.png",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },
    ],
  },
  "about": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/about-us#webpage",
        url: "https://www.pxlperfects.com/about-us",
        name: "About Us – Pixel Perfects Solutions",
        description:
          "Learn more about Pixel Perfects Solutions, a leading real estate marketing company specializing in virtual staging, 3D visualization, and image enhancement.",
        inLanguage: "en-US",
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "About Us",
              item: "https://www.pxlperfects.com/about-us",
            },
          ],
        },
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
      },
      {
        "@type": "AboutPage",
        "@id": "https://www.pxlperfects.com/about-us#aboutpage",
        url: "https://www.pxlperfects.com/about-us",
        name: "About Us – Pixel Perfects Solutions",
        mainEntityOfPage: "https://www.pxlperfects.com/about-us",
        image:
          "https://firebasestorage.googleapis.com/v0/b/pixel-perfects-new.appspot.com/o/Remodel%20Structural%20Edits%2Fafter%2Fremodel%20structural%20edits%201%20after.webp?alt=media",
        inLanguage: "en-US",
      },
      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },
    ],
  },
  "gallery": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/gallery#webpage",
        url: "https://www.pxlperfects.com/gallery",
        name: "Gallery – Pixel Perfects Solutions",
        description:
          "A visual gallery showcasing Pixel Perfects Solutions' virtual staging, 3D renders, and property photo enhancements.",
        inLanguage: "en-US",
        mainEntityOfPage: "https://www.pxlperfects.com/gallery",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Gallery",
              item: "https://www.pxlperfects.com/gallery",
            },
          ],
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
      },
    ],
  },
  "builders": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/builders#webpage",
        url: "https://www.pxlperfects.com/builders",
        name: "Builders’ Marketing Solutions – Pixel Perfects Solutions",
        description:
          "Professional marketing services for builders including 3D architectural renders, virtual staging, and floor plans.",
        inLanguage: "en-US",
        mainEntityOfPage: "https://www.pxlperfects.com/builders",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Builders",
              item: "https://www.pxlperfects.com/builders",
            },
          ],
        },
      },
      {
        "@type": "Service",
        "@id": "https://www.pxlperfects.com/builders#service",
        name: "Builders’ Real Estate Marketing",
        serviceType: "Real Estate Marketing for Builders",
        provider: { "@id": "https://www.pxlperfects.com/#organization" },
        areaServed: "US",
        offers: {
          "@type": "Offer",
          url: "https://www.pxlperfects.com/builders",
          priceCurrency: "USD",
          price: "55.00",
          availability: "https://schema.org/InStock",
        },
        image:
          "https://firebasestorage.googleapis.com/v0/b/pixel-perfects-new.appspot.com/o/Remodel%20Structural%20Edits%2Fafter%2Fremodel%20structural%20edits%203%20after.webp?alt=media",
      },
      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
      },
    ],
  },
  "architects": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/architects#webpage",
        url: "https://www.pxlperfects.com/architects",
        name: "Architect Services – Pixel Perfects Solutions",
        description:
          "Explore virtual staging, editing tools, floor plans, and high-quality 3D renders tailored for architects.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        mainEntityOfPage: "https://www.pxlperfects.com/architects",
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Architects",
              item: "https://www.pxlperfects.com/architects",
            },
          ],
        },
      },
      {
        "@type": "Service",
        "@id": "https://www.pxlperfects.com/architects#service",
        name: "Architects’ Real Estate Marketing",
        serviceType: "Real Estate Marketing for Architects",
        provider: { "@id": "https://www.pxlperfects.com/#organization" },
        areaServed: "US",
        offers: {
          "@type": "Offer",
          url: "https://www.pxlperfects.com/architects",
          priceCurrency: "USD",
          price: "65.00",
          availability: "https://schema.org/InStock",
        },
        image:
          "https://www.pxlperfects.com/images/services/architects-3d-render.jpg",
      },
      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
      },
    ],
  },
  "realtors": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides high-quality virtual staging, 3D renders, and photo editing services tailored for realtors and property professionals.",
        inLanguage: "en-US",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/realtors#webpage",
        url: "https://www.pxlperfects.com/realtors",
        name: "Realtors Services – Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions offers advanced marketing tools for realtors including 3D renders, floor plans, virtual staging, and high-end property photo enhancements.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Realtors",
              item: "https://www.pxlperfects.com/realtors",
            },
          ],
        },
        mainEntityOfPage: "https://www.pxlperfects.com/realtors",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },
      {
        "@type": "Service",
        "@id": "https://www.pxlperfects.com/realtors#service",
        name: "Realtors’ Real Estate Marketing",
        serviceType: "Real Estate Marketing for Realtors",
        provider: { "@id": "https://www.pxlperfects.com/#organization" },
        areaServed: "US",
        offers: {
          "@type": "Offer",
          url: "https://www.pxlperfects.com/realtors",
          priceCurrency: "USD",
          price: "15.00",
          availability: "https://schema.org/InStock",
        },
        image:
          "https://www.pxlperfects.com/images/services/realtors-virtual-staging.jpg",
      },
    ],
  },
 "services": ( lang = "en") => {

  const isES = lang === "es";

  return {
    "@context": "https://schema.org",

    "@type": "Service",

    name: isES
      ? "Servicios de Marketing Inmobiliario"
      : "Real Estate Marketing Services",

    description: isES
      ? "Servicios profesionales incluyendo virtual staging, edición de imágenes, renders y video marketing."
      : "Professional real estate services including virtual staging, image editing, rendering, floor plans and video editing.",

    provider: {
      "@type": "Organization",
      name: "Pixel Perfects Solutions",
      url: "https://www.pxlperfects.com",
    },

    areaServed: {
      "@type": "Country",
      name: "United States"
    },

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services Catalog",
      itemListElement: [

        {
          "@type": "OfferCatalog",
          name: "Image Editing"
        },

        {
          "@type": "OfferCatalog",
          name: "Virtual Staging & Renovation"
        },

        {
          "@type": "OfferCatalog",
          name: "Renders"
        },

        {
          "@type": "OfferCatalog",
          name: "Floor Plans"
        },

        {
          "@type": "OfferCatalog",
          name: "Video Editing"
        }

      ]
    }

  };
},

  "contact-us": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions offers expert real estate marketing services including virtual staging, 3D renders, floor plans, image enhancement, and photo editing services.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },

      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Support",
          areaServed: "US",
        },
      },

      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/contact-us#webpage",
        url: "https://www.pxlperfects.com/contact-us",
        name: "Contact Us – Pixel Perfects Solutions",
        description:
          "Get in touch with Pixel Perfects Solutions for inquiries, support, or service information regarding virtual staging, 3D renders, photo editing, and real estate marketing services.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Contact Us",
              item: "https://www.pxlperfects.com/contact-us",
            },
          ],
        },
        mainEntityOfPage: "https://www.pxlperfects.com/contact-us",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },

      {
        "@type": "ContactPage",
        "@id": "https://www.pxlperfects.com/contact-us#contactpage",
        url: "https://www.pxlperfects.com/contact-us",
        name: "Contact Pixel Perfects Solutions",
        description:
          "Use our contact form or customer support details to reach Pixel Perfects Solutions for real estate marketing services, inquiries, or direct assistance.",
        contactType: "Customer Support",
        about: { "@id": "https://www.pxlperfects.com/#localbusiness" },
      },
    ],
  },
  "freetrial": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides virtual staging, photo editing, 3D renders, floor plans, and real estate marketing services to enhance property listings.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },

      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Support",
          areaServed: "US",
        },
      },

      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/free-trial#webpage",
        url: "https://www.pxlperfects.com/free-trial",
        name: "Free Trial – Pixel Perfects Solutions",
        description:
          "Sign up for a free trial and experience Pixel Perfects Solutions’ virtual staging, 3D renders, and premium real estate marketing services at no cost.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Free Trial",
              item: "https://www.pxlperfects.com/free-trial",
            },
          ],
        },
        mainEntityOfPage: "https://www.pxlperfects.com/free-trial",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },

      {
        "@type": "ContactPage",
        "@id": "https://www.pxlperfects.com/free-trial#contactpage",
        url: "https://www.pxlperfects.com/free-trial",
        name: "Free Trial Sign-Up",
        description:
          "Start your free trial with Pixel Perfects Solutions to explore virtual staging, 3D rendering, and property enhancement services.",
        contactType: "Free Trial Form",
        about: { "@id": "https://www.pxlperfects.com/#localbusiness" },
      },
    ],
  },

  "quote": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions offers premium real estate marketing services including virtual staging, 3D renders, floor plans, and high-end photo enhancements.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },

      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },

      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/get-a-quote#webpage",
        url: "https://www.pxlperfects.com/get-a-quote",
        name: "Get a Quote – Pixel Perfects Solutions",
        description:
          "Request a customized quote for virtual staging, 3D renders, HDR photo editing, and other real estate marketing services from Pixel Perfects Solutions.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Get a Quote",
              item: "https://www.pxlperfects.com/get-a-quote",
            },
          ],
        },
        mainEntityOfPage: "https://www.pxlperfects.com/get-a-quote",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },

      {
        "@type": "ContactPage",
        "@id": "https://www.pxlperfects.com/get-a-quote#contactpage",
        url: "https://www.pxlperfects.com/get-a-quote",
        name: "Quotation Request",
        description:
          "Submit your project details to receive a personalized quote for virtual staging, 3D rendering, and photo enhancement services from Pixel Perfects Solutions.",
        contactType: "Quotation Request Form",
        about: { "@id": "https://www.pxlperfects.com/#localbusiness" },
      },
    ],
  },

  "partnerships": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides professional virtual staging, 3D renders, HDR photo editing, and real estate marketing services for agents, brokerages, and business partners.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },

      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },

      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/partnerships#webpage",
        url: "https://www.pxlperfects.com/partnerships",
        name: "Partnerships – Pixel Perfects Solutions",
        description:
          "Explore partnership opportunities with Pixel Perfects Solutions. We collaborate with brokerages, real estate companies, and marketing agencies to deliver high-quality virtual staging and 3D rendering services.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Partnerships",
              item: "https://www.pxlperfects.com/partnerships",
            },
          ],
        },
        mainEntityOfPage: "https://www.pxlperfects.com/partnerships",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },

      {
        "@type": "ContactPage",
        "@id": "https://www.pxlperfects.com/partnerships#contactpage",
        url: "https://www.pxlperfects.com/partnerships",
        name: "Partnership Inquiry",
        description:
          "Contact Pixel Perfects Solutions to discuss long-term partnership opportunities in real estate marketing, including virtual staging, 3D rendering, and photo enhancement services.",
        contactType: "Business Partnership Inquiry",
        about: { "@id": "https://www.pxlperfects.com/#localbusiness" },
      },
    ],
  },

  "testimonials": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides premium real estate marketing services including virtual staging, 3D renders, HDR editing, and property enhancement.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },

      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },

      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/testimonials#webpage",
        url: "https://www.pxlperfects.com/testimonials",
        name: "Testimonials – Pixel Perfects Solutions",
        description:
          "Read real client testimonials and reviews about Pixel Perfects Solutions' virtual staging, 3D rendering, and real estate photo enhancement services.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Testimonials",
              item: "https://www.pxlperfects.com/testimonials",
            },
          ],
        },
        mainEntityOfPage: "https://www.pxlperfects.com/testimonials",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },

      {
        "@type": "ReviewPage",
        "@id": "https://www.pxlperfects.com/testimonials#reviewpage",
        url: "https://www.pxlperfects.com/testimonials",
        name: "Client Testimonials",
        description:
          "Client reviews and testimonials highlighting the quality and reliability of Pixel Perfects Solutions' real estate marketing services.",
        about: { "@id": "https://www.pxlperfects.com/#localbusiness" },
      },
    ],
  },

  "photographer": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides professional real estate marketing services including virtual staging, 3D rendering, floor plans, and advanced photo enhancement.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },

      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },

      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/photographers#webpage",
        url: "https://www.pxlperfects.com/photographers",
        name: "Photographers – Pixel Perfects Solutions",
        description:
          "A dedicated page for photographers to collaborate with Pixel Perfects Solutions in enhancing real estate visuals through virtual staging, retouching, and 3D rendering services.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Photographers",
              item: "https://www.pxlperfects.com/photographers",
            },
          ],
        },
        mainEntityOfPage: "https://www.pxlperfects.com/photographers",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },

      {
        "@type": "ContactPage",
        "@id": "https://www.pxlperfects.com/photographers#contactpage",
        url: "https://www.pxlperfects.com/photographers",
        name: "Photographer Collaboration",
        description:
          "Collaborate with Pixel Perfects Solutions to enhance real estate photography with professional virtual staging, retouching, and visual enhancement services.",
        contactType: "Photographer Collaboration",
        about: { "@id": "https://www.pxlperfects.com/#localbusiness" },
      },
    ],
  },

  "property-manager": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides high-quality real estate marketing services including virtual staging, 3D renders, floor plans, and HDR photo enhancement.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },

      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },

      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/property-manager#webpage",
        url: "https://www.pxlperfects.com/property-manager",
        name: "Property Manager Tools – Pixel Perfects Solutions",
        description:
          "Tools and real estate marketing services designed for property managers, including virtual staging, photo editing, and 3D visualization to help attract tenants faster.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Property Manager",
              item: "https://www.pxlperfects.com/property-manager",
            },
          ],
        },
        mainEntityOfPage: "https://www.pxlperfects.com/property-manager",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },

      {
        "@type": "Service",
        "@id": "https://www.pxlperfects.com/property-manager#service",
        name: "Real Estate Marketing for Property Managers",
        serviceType: "Real Estate Marketing Services",
        provider: { "@id": "https://www.pxlperfects.com/#organization" },
        areaServed: "US",
        url: "https://www.pxlperfects.com/property-manager",
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: "15.00",
          url: "https://www.pxlperfects.com/property-manager",
          availability: "https://schema.org/InStock",
        },
      },
    ],
  },

  "photography-guide": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides virtual staging, 360-degree renders, and complete real estate marketing services tailored for photographers, agents, and property professionals.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },

      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },

      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/photography-guide#webpage",
        url: "https://www.pxlperfects.com/photography-guide",
        name: "Photography Guide – Pixel Perfects Solutions",
        description:
          "Learn expert real estate photography tips to capture stunning property images. This guide covers lighting, framing, angles, and camera settings to improve your listing photos.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Photography Guide",
              item: "https://www.pxlperfects.com/photography-guide",
            },
          ],
        },
        mainEntityOfPage: "https://www.pxlperfects.com/photography-guide",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },

      {
        "@type": "Article",
        "@id": "https://www.pxlperfects.com/photography-guide#article",
        headline: "Real Estate Photography Guide",
        description:
          "A complete guide to capturing high-quality real estate photos, including lighting techniques, angle selection, staging tips, and professional image preparation.",
        author: { "@type": "Organization", name: "Pixel Perfects Solutions" },
        datePublished: "2025-01-01",
        url: "https://www.pxlperfects.com/photography-guide",
        mainEntityOfPage: {
          "@id": "https://www.pxlperfects.com/photography-guide#webpage",
        },
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },
    ],
  },

  "interior-designers": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions delivers expert virtual staging, 3D renders, and floor plans tailored for real estate and interior design professionals.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },

      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate & Interior Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },

      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/interior-designers#webpage",
        url: "https://www.pxlperfects.com/interior-designers",
        name: "Interior Designers Services – Pixel Perfects Solutions",
        description:
          "Explore Pixel Perfects’ specialized services for interior designers. Enhance your projects with realistic virtual staging, 3D renders, and professional floor plans.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Interior Designers",
              item: "https://www.pxlperfects.com/interior-designers",
            },
          ],
        },
        mainEntityOfPage: "https://www.pxlperfects.com/interior-designers",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },

      {
        "@type": "Service",
        "@id": "https://www.pxlperfects.com/interior-designers#service",
        name: "Interior Designers’ Real Estate Marketing",
        serviceType: "Real Estate & Interior Design Marketing",
        provider: { "@id": "https://www.pxlperfects.com/#organization" },
        areaServed: "US",
        offers: {
          "@type": "Offer",
          url: "https://www.pxlperfects.com/interior-designers",
          priceCurrency: "USD",
          price: "75.00",
          availability: "https://schema.org/InStock",
        },
      },
    ],
  },

  "otheredits": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Professional real-estate photo editing and virtual staging services.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.pxlperfects.com/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },

      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
          availableLanguage: "en-US",
        },
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        telephone: "+1-929-493-6583",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
      },

      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/other-edits#webpage",
        url: "https://www.pxlperfects.com/other-edits",
        name: "Other Photo Edits – Pixel Perfects Solutions",
        description:
          "Explore our full menu of photo-editing services: aerial editing, portrait retouching, grass landscaping, pool enhancements, snow removal, and more.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Other Photo Edits",
              item: "https://www.pxlperfects.com/other-edits",
            },
          ],
        },
      },

      {
        "@type": "Service",
        "@id": "https://www.pxlperfects.com/other-edits#service",
        name: "Other Photo Edits",
        url: "https://www.pxlperfects.com/other-edits",
        description:
          "Aerial editing, grass landscaping, pool enhancements, snow removal, TV screen replacement, blue-sky swaps, portrait retouching, and more.",
        provider: { "@id": "https://www.pxlperfects.com/#organization" },
        serviceType: "Photo Editing",
        areaServed: "US",
        image:
          "https://firebasestorage.googleapis.com/v0/b/pixel-perfects-new.appspot.com/o/Grass%20Landscaping%2Fafter%2Fgrass%20landscaping%201%20after.webp?alt=media&token=7a94120d-dcf6-44a3-b2cd-b2c60f2d64d8",
        offers: {
          "@type": "Offer",
          url: "https://www.pxlperfects.com/other-edits",
          priceCurrency: "USD",
          price: "15.00",
          availability: "https://schema.org/InStock",
          validFrom: "2024-08-26",
        },
        mainEntityOfPage: {
          "@id": "https://www.pxlperfects.com/other-edits#webpage",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "45",
        },
      },

      {
        "@type": "FAQPage",
        "@id": "https://www.pxlperfects.com/other-edits#faqs",
        mainEntity: [
          {
            "@type": "Question",
            name: "What kinds of photo edits are included?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We offer aerial editing, grass landscaping, pool and snow removal, TV screen & blue-sky replacements, portrait retouching, and more.",
            },
          },
          {
            "@type": "Question",
            name: "How much does each edit cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most single edits start at $15; complex multi-step edits may incur additional charges.",
            },
          },
        ],
      },
    ],
  },
  "allposts": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides expert real estate marketing services such as virtual staging, floor plans, and 3D renders for better property listings.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },

      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },

      {
        "@type": "CollectionPage",
        "@id": "https://www.pxlperfects.com/all-posts#webpage",
        url: "https://www.pxlperfects.com/all-posts",
        name: "All Blog Posts – Pixel Perfects Solutions",
        description:
          "Explore insights, tips, and updates on virtual staging, real estate marketing, and photo editing with blog articles from Pixel Perfects Solutions.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Blog",
              item: "https://www.pxlperfects.com/blog",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "All Posts",
              item: "https://www.pxlperfects.com/all-posts",
            },
          ],
        },
        mainEntityOfPage: "https://www.pxlperfects.com/all-posts",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },
    ],
  },

  "privacyPolicy": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides a comprehensive range of real estate marketing services, including virtual staging, 360-degree renders, and more, helping clients enhance their property listings.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },

      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },

      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/privacy-policy#webpage",
        url: "https://www.pxlperfects.com/privacy-policy",
        name: "Privacy Policy – Pixel Perfects Solutions",
        description:
          "This privacy policy outlines how Pixel Perfects Solutions collects, uses, and protects your personal data in compliance with global privacy regulations.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Privacy Policy",
              item: "https://www.pxlperfects.com/privacy-policy",
            },
          ],
        },
        mainEntityOfPage: "https://www.pxlperfects.com/privacy-policy",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },
    ],
  },
  "propertyListings": {
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "CollectionPage",
      "@id": "https://www.pxlperfects.com/property-listings#collection",
      url: "https://www.pxlperfects.com/property-listings",
      name: "Property Listings – Pixel Perfects Solutions",
      description:
        "Browse professionally enhanced property listings showcasing virtual staging and real estate photo editing.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.pxlperfects.com/#website"
      }
    },

    {
      "@type": "ItemList",
      "@id": "https://www.pxlperfects.com/property-listings#itemlist",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: 10, // 🔥 dynamic count recommended
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          url: "https://www.pxlperfects.com/property-listings/property-1"
        },
        {
          "@type": "ListItem",
          position: 2,
          url: "https://www.pxlperfects.com/property-listings/property-2"
        }
      ]
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.pxlperfects.com/property-listings#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.pxlperfects.com/"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Property Listings",
          item: "https://www.pxlperfects.com/property-listings"
        }
      ]
    }

  ]
},
"propertyDetail": (data = {}, lang = "en") => {

  const isES = lang === "es";

  const title =
    data?.title ||
    (isES
      ? "Listado de Propiedad | Pixel Perfects Solutions"
      : "Property Listing | Pixel Perfects Solutions");

  const description =
    data?.description ||
    (isES
      ? "Explora propiedades inmobiliarias mejoradas con virtual staging y marketing visual profesional."
      : "Explore professionally enhanced real estate property listings with virtual staging and visual marketing.");

  const url = `https://www.pxlperfects.com/${isES ? "es/" : ""}property-listings/${data?.id || ""}`;

  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",

    name: title,

    description: description,

    url: url,

    inLanguage: isES ? "es-US" : "en-US",

    image:
      data?.images?.map(img => img.url) ||
      ["https://www.pxlperfects.com/images/default-property.jpg"],

    address: {
      "@type": "PostalAddress",
      streetAddress: data?.address || "",
      addressLocality: data?.city || "",
      addressRegion: data?.state || "",
      addressCountry: data?.country || "US",
    },

    offers: {
      "@type": "Offer",
      price: data?.price || "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },

    publisher: {
      "@type": "Organization",
      name: "Pixel Perfects Solutions",
      url: "https://www.pxlperfects.com",
    },
  };
},

  "service-policy": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides a comprehensive range of real estate marketing services, including virtual staging, 360-degree renders, and more, helping clients enhance their property listings.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },

      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },

      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/service-policy#webpage",
        url: "https://www.pxlperfects.com/service-policy",
        name: "Service Policy – Pixel Perfects Solutions",
        description:
          "Our Service Policy outlines delivery timelines, revision processes, quality guarantees, and support standards for Pixel Perfects Solutions’ real estate marketing services.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Service Policy",
              item: "https://www.pxlperfects.com/service-policy",
            },
          ],
        },
        mainEntityOfPage: "https://www.pxlperfects.com/service-policy",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },

      {
        "@type": "CreativeWork",
        "@id": "https://www.pxlperfects.com/service-policy#policy",
        url: "https://www.pxlperfects.com/service-policy",
        name: "Service Policy",
        description:
          "Details on our service delivery expectations, revision policy, turnaround times, and customer satisfaction guarantees for all real estate marketing services.",
        about: {
          "@type": "Thing",
          name: "Pixel Perfects Solutions Service Standards",
        },
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
        mainEntityOfPage: "https://www.pxlperfects.com/service-policy",
      },
    ],
  },
  "terms-condition": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides a comprehensive range of real estate marketing services, including virtual staging, 360-degree renders, and more, helping clients enhance their property listings.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },

      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },

      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/terms-condition#webpage",
        url: "https://www.pxlperfects.com/terms-condition",
        name: "Terms and Conditions – Pixel Perfects Solutions",
        description:
          "Review the terms and conditions governing the use of Pixel Perfects Solutions' website and services, including liability limits, user obligations, and dispute resolution.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Terms and Conditions",
              item: "https://www.pxlperfects.com/terms-condition",
            },
          ],
        },
        mainEntityOfPage: "https://www.pxlperfects.com/terms-condition",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },

      {
        "@type": "CreativeWork",
        "@id": "https://www.pxlperfects.com/terms-condition#terms",
        name: "Terms and Conditions",
        url: "https://www.pxlperfects.com/terms-condition",
        about: {
          "@type": "Thing",
          name: "Terms and Conditions Agreement",
        },
        description:
          "Terms and conditions for use of Pixel Perfects Solutions' website, services, intellectual property, user responsibilities, and legal disclaimers.",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
        mainEntityOfPage: "https://www.pxlperfects.com/terms-condition",
      },
    ],
  },

  "return-refund": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides a comprehensive range of real estate marketing services, including virtual staging, 360-degree renders, and more, helping clients enhance their property listings.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },

      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },

      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/return-refund-policy#webpage",
        url: "https://www.pxlperfects.com/return-refund-policy",
        name: "Return & Refund Policy – Pixel Perfects Solutions",
        description:
          "Review Pixel Perfects Solutions' Return and Refund Policy, including eligibility criteria, timeframes, and steps for requesting a refund or correction.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Return & Refund Policy",
              item: "https://www.pxlperfects.com/return-refund-policy",
            },
          ],
        },
        mainEntityOfPage: "https://www.pxlperfects.com/return-refund-policy",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },

      {
        "@type": "CreativeWork",
        "@id": "https://www.pxlperfects.com/return-refund-policy#policy",
        name: "Return and Refund Policy",
        url: "https://www.pxlperfects.com/return-refund-policy",
        about: {
          "@type": "Thing",
          name: "Return and Refund Policy",
        },
        description:
          "Our Return and Refund Policy outlines eligibility rules, timelines, and procedures for requesting returns, refunds, or revisions for delivered real estate marketing services.",
        dateModified: "2025-05-14",
        mainEntityOfPage: "https://www.pxlperfects.com/return-refund-policy",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },
    ],
  },
  "serviceDetail": (data = {}, lang = "en") => {

  const isES = lang === "es";

  const slug = data?.link?.split("/").pop() || "";

  const serviceName =
    data?.subName || "Real Estate Service";

  const baseURL = "https://www.pxlperfects.com";

  const url = `${baseURL}/${isES ? "es/" : ""}services/${slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [

      // Website
      {
        "@type": "WebSite",
        "@id": `${baseURL}/#website`,
        url: baseURL,
        name: "Pixel Perfects Solutions",
      },

      // Organization
      {
        "@type": "Organization",
        "@id": `${baseURL}/#organization`,
        name: "Pixel Perfects Solutions",
        url: baseURL,
        logo: `${baseURL}/images/logo.png`,
      },

      // WebPage
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${serviceName} – Pixel Perfects Solutions`,
        description:
          data?.seoDescription ||
          "Professional real estate marketing services by Pixel Perfects Solutions.",
        inLanguage: isES ? "es-US" : "en-US",
        isPartOf: { "@id": `${baseURL}/#website` },

        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: baseURL,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: `${baseURL}/services`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: serviceName,
              item: url,
            },
          ],
        },

        publisher: { "@id": `${baseURL}/#organization` },
      },

      // Service Schema
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: serviceName,
        serviceType: serviceName,

        description:
          data?.seoDescription ||
          "Professional real estate marketing service.",

        provider: { "@id": `${baseURL}/#organization` },

        offers: {
          "@type": "Offer",
          url,
          priceCurrency: "USD",
          price: data?.pricedetail?.[0]?.price || "0",
          availability: "https://schema.org/InStock",
        },

        image:
          data?.servicespropertexamples?.images?.[0]?.Afterimg ||
          `${baseURL}/og/services.png`,

        mainEntityOfPage: url,
      },

    ],
  };
},
  "virtual-staging": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides a comprehensive range of real estate marketing services, including virtual staging, 360-degree renders, and more, helping clients enhance their property listings.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/services/virtual-staging#webpage",
        url: "https://www.pxlperfects.com/services/virtual-staging",
        name: "360° Virtual Staging – Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions offers comprehensive virtual staging services—including immersive 360° staging—to enhance property listings with professional interior design.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://www.pxlperfects.com/services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "360° Virtual Staging",
              item: "https://www.pxlperfects.com/services/virtual-staging",
            },
          ],
        },
        mainEntityOfPage:
          "https://www.pxlperfects.com/services/virtual-staging",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },
      {
        "@type": "Service",
        "@id": "https://www.pxlperfects.com/services/virtual-staging#service",
        name: "360° Virtual Staging",
        serviceType: "360° Virtual Staging",
        description:
          "We provide professional virtual staging to showcase properties with enhanced, visually appealing interior designs, including 360° immersive experiences.",
        provider: { "@id": "https://www.pxlperfects.com/#organization" },
        offers: {
          "@type": "Offer",
          url: "https://www.pxlperfects.com/services/virtual-staging",
          priceCurrency: "USD",
          price: "32.00",
          availability: "https://schema.org/InStock",
          validFrom: "2024-08-23",
        },
        image:
          "https://firebasestorage.googleapis.com/v0/b/pixel-perfects-new.appspot.com/o/Virtual%20Staging%2Fafter%2Fvirtual%20staging%203%20after.webp?alt=media",
        mainEntityOfPage:
          "https://www.pxlperfects.com/services/virtual-staging",
      },
    ],
  },
  "virtual-renovation": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides a comprehensive range of real estate marketing services, including virtual staging, 360-degree renders, and more, helping clients enhance their property listings.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },
      {
        "@type": "WebPage",
        "@id":
          "https://www.pxlperfects.com/services/virtual-renovation#webpage",
        url: "https://www.pxlperfects.com/services/virtual-renovation",
        name: "Virtual Renovation – Pixel Perfects Solutions",
        description:
          "Digital remodeling & enhancement of property photos. Show potential renovations with expert virtual renovation for real estate agents and developers.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://www.pxlperfects.com/services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Virtual Renovation",
              item: "https://www.pxlperfects.com/services/virtual-renovation",
            },
          ],
        },
        mainEntityOfPage:
          "https://www.pxlperfects.com/services/virtual-renovation",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },
      {
        "@type": "Service",
        "@id":
          "https://www.pxlperfects.com/services/virtual-renovation#service",
        name: "Virtual Renovation",
        serviceType: "Virtual Renovation",
        description:
          "Expert virtual renovation to digitally remodel and enhance property photos at $27 per image. Ideal for real estate agents and developers across the United States.",
        provider: { "@id": "https://www.pxlperfects.com/#organization" },
        areaServed: "US",
        offers: {
          "@type": "Offer",
          url: "https://www.pxlperfects.com/services/virtual-renovation",
          priceCurrency: "USD",
          price: "27.00",
          availability: "https://schema.org/InStock",
          validFrom: "2024-08-23",
        },
        image:
          "https://firebasestorage.googleapis.com/v0/b/pixel-perfects-new.appspot.com/o/Virtual%20Renovation%2Fafter%2FVirtual%20Renovation%201%20after.webp?alt=media",
        mainEntityOfPage:
          "https://www.pxlperfects.com/services/virtual-renovation",
      },
    ],
  },
  "restyling": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides a comprehensive range of real estate marketing services, including virtual staging, 360-degree renders, and more, helping clients enhance their property listings.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/services/restyling#webpage",
        url: "https://www.pxlperfects.com/services/restyling",
        name: "Restyling Services – Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides professional Restyling services to enhance the interior appeal of properties, making them more attractive and market-ready.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://www.pxlperfects.com/services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Restyling",
              item: "https://www.pxlperfects.com/services/restyling",
            },
          ],
        },
        mainEntityOfPage: "https://www.pxlperfects.com/services/restyling",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },
      {
        "@type": "Service",
        "@id": "https://www.pxlperfects.com/services/restyling#service",
        name: "Restyling",
        serviceType: "Restyling",
        description:
          "Professional Restyling services to enhance interior appeal and market readiness of property photos, perfect for real estate listings.",
        provider: { "@id": "https://www.pxlperfects.com/#organization" },
        areaServed: "US",
        offers: {
          "@type": "Offer",
          url: "https://www.pxlperfects.com/services/restyling",
          priceCurrency: "USD",
          price: "35.00",
          availability: "https://schema.org/InStock",
          validFrom: "2024-08-23",
        },
        image:
          "https://firebasestorage.googleapis.com/v0/b/pixel-perfects-new.appspot.com/o/Restyling%2FAfter%2FRestyling%201%20after.webp?alt=media",
        mainEntityOfPage: "https://www.pxlperfects.com/services/restyling",
      },
    ],
  },
  "remodel": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides a comprehensive range of real estate marketing services, including virtual staging, 360-degree renders, and more, helping clients enhance their property listings.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/services/remodel#webpage",
        url: "https://www.pxlperfects.com/services/remodel",
        name: "Remodel Structural Edits – Pixel Perfects Solutions",
        description:
          "Professional Remodel Structural Edits to showcase potential improvements and structural transformations in real estate listings.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://www.pxlperfects.com/services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Remodel Structural Edits",
              item: "https://www.pxlperfects.com/services/remodel",
            },
          ],
        },
        mainEntityOfPage: "https://www.pxlperfects.com/services/remodel",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },
      {
        "@type": "Service",
        "@id": "https://www.pxlperfects.com/services/remodel#service",
        name: "Remodel Structural Edits",
        serviceType: "Remodel Structural Edits",
        description:
          "Pixel Perfects Solutions provides professional Remodel Structural Edits services to enhance real estate listings by showcasing potential improvements and structural transformations.",
        provider: { "@id": "https://www.pxlperfects.com/#organization" },
        areaServed: "US",
        offers: {
          "@type": "Offer",
          url: "https://www.pxlperfects.com/services/remodel",
          priceCurrency: "USD",
          price: "23.00",
          availability: "https://schema.org/InStock",
          validFrom: "2024-08-26",
        },
        image:
          "https://firebasestorage.googleapis.com/v0/b/pixel-perfects-new.appspot.com/o/Remodel%20Structural%20Edits%2Fafter%2Fremodel%20structural%20edits%201%20after.webp?alt=media",
        mainEntityOfPage: "https://www.pxlperfects.com/services/remodel",
      },
    ],
  },
  "commercial-virtual-staging": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides a comprehensive range of real estate marketing services, including virtual staging, 360-degree renders, and more, helping clients enhance their property listings.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },
      {
        "@type": "WebPage",
        "@id":
          "https://www.pxlperfects.com/services/commercial-virtual-staging#webpage",
        url: "https://www.pxlperfects.com/services/commercial-virtual-staging",
        name: "Commercial Virtual Staging – Pixel Perfects Solutions",
        description:
          "Enhance your commercial property listings with professional virtual staging that transforms empty spaces into fully furnished, visually appealing environments.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://www.pxlperfects.com/services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Commercial Virtual Staging",
              item: "https://www.pxlperfects.com/services/commercial-virtual-staging",
            },
          ],
        },
        mainEntityOfPage:
          "https://www.pxlperfects.com/services/commercial-virtual-staging",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },
      {
        "@type": "Service",
        "@id":
          "https://www.pxlperfects.com/services/commercial-virtual-staging#service",
        name: "Commercial Virtual Staging",
        serviceType: "Commercial Virtual Staging",
        description:
          "Professional Commercial Virtual Staging services to showcase commercial spaces with high-impact, fully furnished visuals, perfect for retail, office, and hospitality listings.",
        provider: { "@id": "https://www.pxlperfects.com/#organization" },
        areaServed: "US",
        offers: {
          "@type": "Offer",
          url: "https://www.pxlperfects.com/services/commercial-virtual-staging",
          priceCurrency: "USD",
          price: "24.00",
          availability: "https://schema.org/InStock",
          validFrom: "2024-08-26",
        },
        image:
          "https://firebasestorage.googleapis.com/v0/b/pixel-perfects-new.appspot.com/o/Commercial%20Virtual%20Staging%2FAfter%2FCommercial%20Staging%203%20After.webp?alt=media",
        mainEntityOfPage:
          "https://www.pxlperfects.com/services/commercial-virtual-staging",
      },
    ],
  },
  "image-enhancement": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides a comprehensive range of real estate marketing services, including virtual staging, 360-degree renders, and more, helping clients enhance their property listings.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/services/image-enhancement#webpage",
        url: "https://www.pxlperfects.com/services/image-enhancement",
        name: "Image Enhancement – Pixel Perfects Solutions",
        description:
          "Enhance your real estate photos with professional HDR bracketing and single exposure services to achieve balanced, visually appealing images that attract buyers.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://www.pxlperfects.com/services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Image Enhancement",
              item: "https://www.pxlperfects.com/services/image-enhancement",
            },
          ],
        },
        mainEntityOfPage:
          "https://www.pxlperfects.com/services/image-enhancement",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },
      {
        "@type": "Service",
        "@id": "https://www.pxlperfects.com/services/image-enhancement#service",
        name: "HDR Bracketing and Single Exposure",
        serviceType: "HDR Bracketing and Single Exposure",
        description:
          "Professional HDR bracketing and single exposure photo enhancement services to produce balanced, vivid real estate images that stand out to potential buyers.",
        provider: { "@id": "https://www.pxlperfects.com/#organization" },
        areaServed: "US",
        offers: {
          "@type": "Offer",
          url: "https://www.pxlperfects.com/services/image-enhancement",
          priceCurrency: "USD",
          price: "1.60",
          availability: "https://schema.org/InStock",
          validFrom: "2024-08-26",
        },
        image:
          "https://firebasestorage.googleapis.com/v0/b/pixel-perfects-new.appspot.com/o/Single%20Exposure%2Fafter%2Fsingle%20exposure%202%20after.webp?alt=media",
        mainEntityOfPage:
          "https://www.pxlperfects.com/services/image-enhancement",
      },
    ],
  },
  "day-to-dusk": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides a comprehensive range of real estate marketing services, including virtual staging, 360-degree renders, and more, helping clients enhance their property listings.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/services/day-to-dusk#webpage",
        url: "https://www.pxlperfects.com/services/day-to-dusk",
        name: "Day to Dusk Photo Editing – Pixel Perfects Solutions",
        description:
          "Transform daytime property photos into stunning twilight scenes with Day to Dusk photo editing services, enhancing real estate listings and attracting more buyers.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://www.pxlperfects.com/services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Day to Dusk",
              item: "https://www.pxlperfects.com/services/day-to-dusk",
            },
          ],
        },
        mainEntityOfPage: "https://www.pxlperfects.com/services/day-to-dusk",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },
      {
        "@type": "Service",
        "@id": "https://www.pxlperfects.com/services/day-to-dusk#service",
        name: "Day to Dusk Photo Editing",
        serviceType: "Day to Dusk Photo Editing",
        description:
          "Pixel Perfects Solutions transforms daytime photos into captivating dusk scenes with expert photo editing, making listings more compelling for potential buyers.",
        provider: { "@id": "https://www.pxlperfects.com/#organization" },
        areaServed: "US",
        offers: {
          "@type": "Offer",
          url: "https://www.pxlperfects.com/services/day-to-dusk",
          priceCurrency: "USD",
          price: "4.00",
          availability: "https://schema.org/InStock",
          validFrom: "2024-08-26",
        },
        image:
          "https://firebasestorage.googleapis.com/v0/b/pixel-perfects-new.appspot.com/o/Day%20to%20Dusk%2FAfter%2FDay%20To%20Dusk%202%20After.webp?alt=media",
        mainEntityOfPage: "https://www.pxlperfects.com/services/day-to-dusk",
      },
    ],
  },
  "virtual-declutter": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides a comprehensive range of real estate marketing services, including virtual staging, 360-degree renders, and more, helping clients enhance their property listings.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/services/virtual-declutter#webpage",
        url: "https://www.pxlperfects.com/services/virtual-declutter",
        name: "Virtual Declutter – Pixel Perfects Solutions",
        description:
          "Remove unwanted items and clutter from real estate photos, presenting a clean and inviting space to potential buyers with our Virtual Declutter service.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://www.pxlperfects.com/services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Virtual Declutter",
              item: "https://www.pxlperfects.com/services/virtual-declutter",
            },
          ],
        },
        mainEntityOfPage:
          "https://www.pxlperfects.com/services/virtual-declutter",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },
      {
        "@type": "Service",
        "@id": "https://www.pxlperfects.com/services/virtual-declutter#service",
        name: "Virtual Declutter",
        serviceType: "Virtual Declutter",
        description:
          "Pixel Perfects Solutions removes unwanted items and clutter from real estate photos to showcase properties in their best light.",
        provider: { "@id": "https://www.pxlperfects.com/#organization" },
        areaServed: "US",
        offers: {
          "@type": "Offer",
          url: "https://www.pxlperfects.com/services/virtual-declutter",
          priceCurrency: "USD",
          price: "10.00",
          availability: "https://schema.org/InStock",
          validFrom: "2024-08-26",
        },
        image:
          "https://firebasestorage.googleapis.com/v0/b/pixel-perfects-new.appspot.com/o/Virtual%20Declutter%2Fafter%2FVirtual%20Declutter%201%20after.webp?alt=media",
        mainEntityOfPage:
          "https://www.pxlperfects.com/services/virtual-declutter",
      },
    ],
  },
  "item-removal": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides a comprehensive range of real estate marketing services, including virtual staging, 360° renders, and more, helping clients enhance their property listings.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },

      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },

      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/services/item-removal#webpage",
        url: "https://www.pxlperfects.com/services/item-removal",
        name: "Item Removal – Pixel Perfects Solutions",
        description:
          "Professional real estate photo item removal service to remove unwanted objects, clutter, or distractions from property images for clean, market-ready visuals.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://www.pxlperfects.com/services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Item Removal",
              item: "https://www.pxlperfects.com/services/item-removal",
            },
          ],
        },
        mainEntityOfPage: "https://www.pxlperfects.com/services/item-removal",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },

      {
        "@type": "Service",
        "@id": "https://www.pxlperfects.com/services/item-removal#service",
        name: "Item Removal",
        serviceType: "Real Estate Photo Item Removal",
        description:
          "Pixel Perfects Solutions specializes in removing unwanted items and clutter from real estate photos, enhancing property presentation and increasing buyer engagement.",
        provider: { "@id": "https://www.pxlperfects.com/#organization" },
        areaServed: "Worldwide",
        image:
          "https://firebasestorage.googleapis.com/v0/b/pixel-perfects-new.appspot.com/o/item%20removal%2Fafter%2Fitem%20removal%201%20after.webp?alt=media",
        offers: {
          "@type": "Offer",
          url: "https://www.pxlperfects.com/services/item-removal",
          priceCurrency: "USD",
          price: "3.00",
          availability: "https://schema.org/InStock",
          validFrom: "2024-08-26",
        },
        mainEntityOfPage: "https://www.pxlperfects.com/services/item-removal",
      },
    ],
  },
  "visualization": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides a comprehensive range of real estate marketing services, including virtual staging, 360° renders, and more, helping clients enhance their property listings.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },

      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },

      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/services/visualization#webpage",
        url: "https://www.pxlperfects.com/services/visualization",
        name: "Visualization – Pixel Perfects Solutions",
        description:
          "Get professional 3D visualization services that transform 2D floor plans into stunning, realistic 3D renders. Perfect for real estate developers, architects, and designers.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://www.pxlperfects.com/services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Visualization",
              item: "https://www.pxlperfects.com/services/visualization",
            },
          ],
        },
        mainEntityOfPage: "https://www.pxlperfects.com/services/visualization",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },

      {
        "@type": "Service",
        "@id": "https://www.pxlperfects.com/services/visualization#service",
        name: "Visualization",
        serviceType: "3D Visualization & Rendering",
        description:
          "Pixel Perfects Solutions specializes in transforming 2D layouts into high-quality 3D visualizations using 3ds Max—ideal for pre-construction marketing, architectural design, and real estate presentations.",
        provider: { "@id": "https://www.pxlperfects.com/#organization" },
        areaServed: "Worldwide",
        image:
          "https://firebasestorage.googleapis.com/v0/b/pixel-perfects-new.appspot.com/o/Visualization%2FVisualization%20S4.webp?alt=media",
        offers: {
          "@type": "Offer",
          url: "https://www.pxlperfects.com/services/visualization",
          priceCurrency: "USD",
          price: "50.00",
          availability: "https://schema.org/InStock",
          validFrom: "2024-08-26",
        },
        mainEntityOfPage: "https://www.pxlperfects.com/services/visualization",
      },
    ],
  },

  "360-renders": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides a comprehensive range of real estate marketing services, including virtual staging, 360° renders, 3D tours, and more to enhance property listings.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },

      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },

      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/services/360-renders#webpage",
        url: "https://www.pxlperfects.com/services/360-renders",
        name: "3D 360° Renders – Pixel Perfects Solutions",
        description:
          "Experience immersive 3D 360° renders for real estate marketing. Create high-quality virtual tours that engage buyers and showcase properties in a stunning, interactive format.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://www.pxlperfects.com/services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "3D 360° Renders",
              item: "https://www.pxlperfects.com/services/360-renders",
            },
          ],
        },
        mainEntityOfPage: "https://www.pxlperfects.com/services/360-renders",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },

      {
        "@type": "Service",
        "@id": "https://www.pxlperfects.com/services/360-renders#service",
        name: "3D 360° Renders",
        serviceType: "3D 360° Virtual Tour Renders",
        description:
          "Pixel Perfects Solutions creates immersive 3D 360° renders for real estate, providing highly detailed virtual tours that elevate property presentations and attract more buyers.",
        provider: { "@id": "https://www.pxlperfects.com/#organization" },
        areaServed: "Worldwide",
        image:
          "https://firebasestorage.googleapis.com/v0/b/pixel-perfects-new.appspot.com/o/3D%20360%20Renders%2F3D%20360%20Renders%20S1%20-%20Pixel%20Perfects%20Solution.webp?alt=media",
        offers: {
          "@type": "Offer",
          url: "https://www.pxlperfects.com/services/360-renders",
          priceCurrency: "USD",
          price: "70.00",
          availability: "https://schema.org/InStock",
          validFrom: "2024-08-26",
        },
        mainEntityOfPage: "https://www.pxlperfects.com/services/360-renders",
      },
    ],
  },
  "360-walkthrough":{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.pxlperfects.com/#website",
      "url": "https://www.pxlperfects.com/",
      "name": "Pixel Perfects Solutions",
      "description": "Pixel Perfects Solutions offers real estate marketing services including virtual staging, 360° walkthroughs, 360° renders, visualization, decluttering, and high-end editing.",
      "inLanguage": "en-US",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.pxlperfects.com/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://www.pxlperfects.com/#organization",
      "name": "Pixel Perfects Solutions",
      "url": "https://www.pxlperfects.com/",
      "logo": "https://www.pxlperfects.com/images/logo.png",
      "email": "orders@pxlperfects.com",
      "foundingDate": "2020-01-01",
      "founders": [
        { "@type": "Person", "name": "Muhammad Faizan Islam", "jobTitle": "CEO" },
        { "@type": "Person", "name": "Saulat Abbas", "jobTitle": "CTO" },
        { "@type": "Person", "name": "Azfar Abbas", "jobTitle": "CFO" }
      ],
      "sameAs": [
        "https://www.facebook.com/pixel.perfects.solutions/",
        "https://www.linkedin.com/company/pixel-perfects",
        "https://www.instagram.com/pixel.perfects.solutions/"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.pxlperfects.com/#localbusiness",
      "name": "Pixel Perfects Solutions | Real Estate Marketing",
      "image": "https://www.pxlperfects.com/images/logo.png",
      "url": "https://www.pxlperfects.com/",
      "priceRange": "$1–$100",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "30 N Gould ST STE N",
        "addressLocality": "Sheridan",
        "addressRegion": "Wyoming",
        "postalCode": "82801",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 44.797773,
        "longitude": -106.954933
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday","Tuesday","Wednesday","Thursday",
          "Friday","Saturday","Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "telephone": "+1-929-493-6583",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-929-493-6583",
        "contactType": "Customer Service",
        "areaServed": "US"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.pxlperfects.com/services/360-walkthrough#webpage",
      "url": "https://www.pxlperfects.com/services/360-walkthrough",
      "name": "360 Walkthrough – Pixel Perfects Solutions",
      "description": "Experience immersive virtual property walkthroughs with our 360 Walkthrough service. Perfect for real estate listings, allowing buyers to explore spaces interactively.",
      "inLanguage": "en-US",
      "isPartOf": { "@id": "https://www.pxlperfects.com/#website" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pxlperfects.com/" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.pxlperfects.com/services" },
          { "@type": "ListItem", "position": 3, "name": "360 Walkthrough", "item": "https://www.pxlperfects.com/services/360-walkthrough" }
        ]
      },
      "mainEntityOfPage": "https://www.pxlperfects.com/services/360-walkthrough",
      "publisher": { "@id": "https://www.pxlperfects.com/#organization" }
    },
    {
      "@type": "Service",
      "@id": "https://www.pxlperfects.com/services/360-walkthrough#service",
      "name": "360 Walkthrough",
      "serviceType": "360 Walkthrough",
      "description": "Pixel Perfects Solutions delivers immersive 360 walkthroughs allowing viewers to explore real estate properties interactively. Enhance engagement and buyer interest with smooth, high-resolution 360 tours.",
      "provider": { "@id": "https://www.pxlperfects.com/#organization" },
      "areaServed": "US",
      "offers": {
        "@type": "Offer",
        "url": "https://www.pxlperfects.com/services/360-walkthrough",
        "priceCurrency": "USD",
        "price": "85.00",
        "availability": "https://schema.org/InStock",
        "validFrom": "2024-08-26"
      },
      "image": "https://firebasestorage.googleapis.com/v0/b/pixel-perfects-new.appspot.com/o/3D%20360%20Renders%2F3D%20360%20Renders%20S3%20-%20Pixel%20Perfects%20Solution.webp?alt=media",
      "mainEntityOfPage": "https://www.pxlperfects.com/services/360-walkthrough"
    }
  ]
}
,
  "2d-floor-plan": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides real estate marketing services including virtual staging, photo enhancement, 360° renders, 2D & 3D floor plans, and more.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },

      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },

      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/services/2d-floor-plan#webpage",
        url: "https://www.pxlperfects.com/services/2d-floor-plan",
        name: "2D Floor Plan Services – Pixel Perfects Solutions",
        description:
          "Get professional 2D floor plans for real estate listings. Clear, accurate, and high-quality layouts designed to help buyers visualize property structure and flow.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://www.pxlperfects.com/services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "2D Floor Plan",
              item: "https://www.pxlperfects.com/services/2d-floor-plan",
            },
          ],
        },
        mainEntityOfPage: "https://www.pxlperfects.com/services/2d-floor-plan",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },

      {
        "@type": "Service",
        "@id": "https://www.pxlperfects.com/services/2d-floor-plan#service",
        name: "2D Floor Plan",
        serviceType: "2D Floor Plan Design",
        description:
          "Pixel Perfects Solutions produces accurate, clean, and high-resolution 2D floor plans for real estate marketing, ideal for listings, brochures, and property presentations.",
        provider: { "@id": "https://www.pxlperfects.com/#organization" },
        areaServed: "Worldwide",
        offers: {
          "@type": "Offer",
          url: "https://www.pxlperfects.com/services/2d-floor-plan",
          priceCurrency: "USD",
          price: "15.00",
          availability: "https://schema.org/InStock",
          validFrom: "2024-08-26",
        },
        image:
          "https://firebasestorage.googleapis.com/v0/b/pixel-perfects-new.appspot.com/o/2D%20Floor%20Plan%2FAfter%2F2D%20Floor%20Plan%201%20After.webp?alt=media",
        mainEntityOfPage: "https://www.pxlperfects.com/services/2d-floor-plan",
      },
    ],
  },

  "3d-floor-plan": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides real estate marketing services including virtual staging, 3D renders, 360° tours, floor plans, and more to enhance property listings.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },

      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },

      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/services/3d-floor-plan#webpage",
        url: "https://www.pxlperfects.com/services/3d-floor-plan",
        name: "3D Floor Plan Services – Pixel Perfects Solutions",
        description:
          "Professional 3D floor plans that help realtors, builders, and homeowners visualize interiors with realistic layouts, textures, and accurate proportions.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://www.pxlperfects.com/services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "3D Floor Plan",
              item: "https://www.pxlperfects.com/services/3d-floor-plan",
            },
          ],
        },
        mainEntityOfPage: "https://www.pxlperfects.com/services/3d-floor-plan",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },

      {
        "@type": "Service",
        "@id": "https://www.pxlperfects.com/services/3d-floor-plan#service",
        name: "3D Floor Plan",
        serviceType: "3D Floor Plan Design",
        description:
          "Pixel Perfects Solutions creates high-quality 3D floor plans that showcase the full layout of a property with realistic details, furniture, textures, and lighting to help buyers visualize spaces accurately.",
        provider: { "@id": "https://www.pxlperfects.com/#organization" },
        areaServed: "Worldwide",
        offers: {
          "@type": "Offer",
          url: "https://www.pxlperfects.com/services/3d-floor-plan",
          priceCurrency: "USD",
          price: "55.00",
          availability: "https://schema.org/InStock",
          validFrom: "2024-08-26",
        },
        image:
          "https://firebasestorage.googleapis.com/v0/b/pixel-perfects-new.appspot.com/o/3D%20Floor%20plan%2FAfter%2F3d%20Floor%20Plan%203%20After.webp?alt=media",
        mainEntityOfPage: "https://www.pxlperfects.com/services/3d-floor-plan",
      },
    ],
  },
  "real-estate-video": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides real estate marketing services including virtual staging, video production, photo editing, 3D renders, and more to enhance property listings.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },

      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "Worldwide",
        },
      },

      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/services/real-estate-video#webpage",
        url: "https://www.pxlperfects.com/services/real-estate-video",
        name: "Real Estate Video Services – Pixel Perfects Solutions",
        description:
          "Professional real estate video services that highlight a property's key features with cinematic visuals. Perfect for MLS listings, social media, and marketing campaigns.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://www.pxlperfects.com/services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Real Estate Video",
              item: "https://www.pxlperfects.com/services/real-estate-video",
            },
          ],
        },
        mainEntityOfPage:
          "https://www.pxlperfects.com/services/real-estate-video",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },

      {
        "@type": "Service",
        "@id": "https://www.pxlperfects.com/services/real-estate-video#service",
        name: "Real Estate Video",
        serviceType: "Real Estate Video Production",
        description:
          "Pixel Perfects Solutions produces high-quality real estate videos that showcase properties with cinematic shots, smooth transitions, and compelling storytelling to attract more buyers.",
        provider: { "@id": "https://www.pxlperfects.com/#organization" },
        areaServed: "Worldwide",
        offers: {
          "@type": "Offer",
          url: "https://www.pxlperfects.com/services/real-estate-video",
          priceCurrency: "USD",
          price: "75.00",
          availability: "https://schema.org/InStock",
          validFrom: "2024-08-26",
        },
        image:
          "https://firebasestorage.googleapis.com/v0/b/pixel-perfects-new.appspot.com/o/3D%20360%20Renders%2F3D%20360%20Renders%20S2%20-%20Pixel%20Perfects%20Solution.webp?alt=media",
        mainEntityOfPage:
          "https://www.pxlperfects.com/services/real-estate-video",
      },
    ],
  },
  "front-elevation": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides a comprehensive range of real estate marketing services including virtual staging, photo editing, renders, floor plans, and more to enhance property listings.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },

      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "Worldwide",
        },
      },

      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/services/front-elevation#webpage",
        url: "https://www.pxlperfects.com/services/front-elevation",
        name: "Front Elevation Rendering Services – Pixel Perfects Solutions",
        description:
          "Professional front elevation rendering services that transform architectural designs into realistic exterior visualizations. Ideal for real estate listings, builders, and architects.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://www.pxlperfects.com/services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Front Elevation Rendering",
              item: "https://www.pxlperfects.com/services/front-elevation",
            },
          ],
        },
        mainEntityOfPage:
          "https://www.pxlperfects.com/services/front-elevation",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },

      {
        "@type": "Service",
        "@id": "https://www.pxlperfects.com/services/front-elevation#service",
        name: "Front Elevation Rendering",
        serviceType: "Front Elevation Renders",
        description:
          "Pixel Perfects Solutions provides high-quality front elevation renders designed to present realistic, attractive exterior visuals. Perfect for architects, builders, and real estate professionals.",
        provider: { "@id": "https://www.pxlperfects.com/#organization" },
        areaServed: "Worldwide",
        offers: {
          "@type": "Offer",
          url: "https://www.pxlperfects.com/services/front-elevation",
          priceCurrency: "USD",
          price: "180.00",
          availability: "https://schema.org/InStock",
          validFrom: "2024-08-26",
        },
        image:
          "https://firebasestorage.googleapis.com/v0/b/pixel-perfects-new.appspot.com/o/Front%20Elevation%20Renders%2FFront%20Elevation%20S1%20-%20Pixel%20Perfects%20Solutions.webp?alt=media",
        mainEntityOfPage:
          "https://www.pxlperfects.com/services/front-elevation",
      },
    ],
  },
  "video-captions": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides a comprehensive range of real estate marketing services including virtual staging, renders, captioning, photo editing, and more.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },

      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "Worldwide",
        },
      },

      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/services/video-captions#webpage",
        url: "https://www.pxlperfects.com/services/video-captions",
        name: "Video Captioning Services – Pixel Perfects Solutions",
        description:
          "Professional video captioning and subtitling services designed to improve accessibility, engagement, and viewer retention. Accurate captions for real estate videos, marketing videos, and promotional content.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://www.pxlperfects.com/services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Video Captioning",
              item: "https://www.pxlperfects.com/services/video-captions",
            },
          ],
        },
        mainEntityOfPage: "https://www.pxlperfects.com/services/video-captions",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },

      {
        "@type": "Service",
        "@id": "https://www.pxlperfects.com/services/video-captions#service",
        name: "Video Captioning",
        serviceType: "Video Captioning Service",
        description:
          "Pixel Perfects Solutions provides accurate, high-quality video captioning and subtitling services to ensure accessibility, better communication, and improved engagement across all video platforms.",
        provider: { "@id": "https://www.pxlperfects.com/#organization" },
        areaServed: "Worldwide",
        offers: {
          "@type": "Offer",
          url: "https://www.pxlperfects.com/services/video-captions",
          priceCurrency: "USD",
          price: "25.00",
          availability: "https://schema.org/InStock",
          validFrom: "2024-08-26",
        },
        image:
          "https://www.pxlperfects.com/images/services/video-captions.webp",
        mainEntityOfPage: "https://www.pxlperfects.com/services/video-captions",
      },
    ],
  },
  "aerial-editing": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides professional real estate photo enhancement services including aerial editing, virtual staging, and more.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/services/aerial-editing#webpage",
        url: "https://www.pxlperfects.com/services/aerial-editing",
        name: "Aerial Editing – Pixel Perfects Solutions",
        description:
          "Enhance your drone photography with professional Aerial Editing services to improve clarity, color, and overall visual appeal.",
        inLanguage: "en-US",
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://www.pxlperfects.com/services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Aerial Editing",
              item: "https://www.pxlperfects.com/services/aerial-editing",
            },
          ],
        },
        mainEntityOfPage: "https://www.pxlperfects.com/services/aerial-editing",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },
      {
        "@type": "Service",
        "@id": "https://www.pxlperfects.com/services/aerial-editing#service",
        name: "Aerial Editing",
        serviceType: "Aerial Editing",
        description:
          "Pixel Perfects Solutions offers Aerial Editing to enhance drone and aerial property photos with color correction, sky enhancement, and clarity improvements.",
        provider: { "@id": "https://www.pxlperfects.com/#organization" },
        areaServed: "US",
        offers: {
          "@type": "Offer",
          url: "https://www.pxlperfects.com/services/aerial-editing",
          priceCurrency: "USD",
          price: "8.00",
          availability: "https://schema.org/InStock",
        },
        mainEntityOfPage: "https://www.pxlperfects.com/services/aerial-editing",
      },
    ],
  },
  "grass-landscaping": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides professional real estate photo enhancement services including grass landscaping, virtual staging, and more.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/services/grass-landscaping#webpage",
        url: "https://www.pxlperfects.com/services/grass-landscaping",
        name: "Grass Landscaping – Pixel Perfects Solutions",
        description:
          "Transform dead, patchy, or uneven lawns into lush, green landscapes with our professional Grass Landscaping service for real estate photos.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://www.pxlperfects.com/services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Grass Landscaping",
              item: "https://www.pxlperfects.com/services/grass-landscaping",
            },
          ],
        },
        mainEntityOfPage:
          "https://www.pxlperfects.com/services/grass-landscaping",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },
      {
        "@type": "Service",
        "@id": "https://www.pxlperfects.com/services/grass-landscaping#service",
        name: "Grass Landscaping",
        serviceType: "Grass Landscaping",
        description:
          "Pixel Perfects Solutions enhances real estate exterior photos by replacing dead or dull grass with realistic, lush greenery to boost curb appeal and attract buyers.",
        provider: { "@id": "https://www.pxlperfects.com/#organization" },
        areaServed: "US",
        offers: {
          "@type": "Offer",
          url: "https://www.pxlperfects.com/services/grass-landscaping",
          priceCurrency: "USD",
          price: "6.00",
          availability: "https://schema.org/InStock",
          validFrom: "2024-08-26",
        },
        image:
          "https://firebasestorage.googleapis.com/v0/b/pixel-perfects-new.appspot.com/o/Grass%20Landscaping%2FAfter%2FGrass%20Landscaping%202%20After.webp?alt=media",
        mainEntityOfPage:
          "https://www.pxlperfects.com/services/grass-landscaping",
      },
    ],
  },
  "remove-pool-covers": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides high-quality real estate photo editing services including pool cover removal, virtual staging, grass enhancement, and more.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },
      {
        "@type": "WebPage",
        "@id":
          "https://www.pxlperfects.com/services/remove-pool-covers#webpage",
        url: "https://www.pxlperfects.com/services/remove-pool-covers",
        name: "Remove Pool Covers – Pixel Perfects Solutions",
        description:
          "Remove pool covers from your real estate photos and reveal clean, attractive pools that elevate visual appeal and attract more buyers.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://www.pxlperfects.com/services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Remove Pool Covers",
              item: "https://www.pxlperfects.com/services/remove-pool-covers",
            },
          ],
        },
        mainEntityOfPage:
          "https://www.pxlperfects.com/services/remove-pool-covers",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },
      {
        "@type": "Service",
        "@id":
          "https://www.pxlperfects.com/services/remove-pool-covers#service",
        name: "Remove Pool Covers",
        serviceType: "Remove Pool Covers",
        description:
          "Pixel Perfects Solutions removes pool covers from exterior photos to reveal clean, clear swimming pools—enhancing curb appeal and increasing listing attractiveness.",
        provider: { "@id": "https://www.pxlperfects.com/#organization" },
        areaServed: "US",
        offers: {
          "@type": "Offer",
          url: "https://www.pxlperfects.com/services/remove-pool-covers",
          priceCurrency: "USD",
          price: "8.00",
          availability: "https://schema.org/InStock",
          validFrom: "2024-08-26",
        },
        image:
          "https://firebasestorage.googleapis.com/v0/b/pixel-perfects-new.appspot.com/o/Remove%20Pool%20Covers%2FAfter%2FRemove%20Pool%20Covers%201%20After.webp?alt=media",
        mainEntityOfPage:
          "https://www.pxlperfects.com/services/remove-pool-covers",
      },
    ],
  },
  "vehicle-removing": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides premium real estate photo editing services including vehicle removal, virtual staging, landscaping, and more.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/services/vehicle-removing#webpage",
        url: "https://www.pxlperfects.com/services/vehicle-removing",
        name: "Vehicle Removing – Pixel Perfects Solutions",
        description:
          "Remove vehicles from property photos to create clean, distraction-free real estate images that highlight the true beauty of your listing.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://www.pxlperfects.com/services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Vehicle Removing",
              item: "https://www.pxlperfects.com/services/vehicle-removing",
            },
          ],
        },
        mainEntityOfPage:
          "https://www.pxlperfects.com/services/vehicle-removing",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },
      {
        "@type": "Service",
        "@id": "https://www.pxlperfects.com/services/vehicle-removing#service",
        name: "Vehicle Removing",
        serviceType: "Vehicle Removing",
        description:
          "Pixel Perfects Solutions removes cars, trucks, and unwanted vehicles from real estate photos to deliver clean, professional images that enhance property appeal.",
        provider: { "@id": "https://www.pxlperfects.com/#organization" },
        areaServed: "US",
        offers: {
          "@type": "Offer",
          url: "https://www.pxlperfects.com/services/vehicle-removing",
          priceCurrency: "USD",
          price: "6.00",
          availability: "https://schema.org/InStock",
          validFrom: "2024-08-26",
        },
        image:
          "https://firebasestorage.googleapis.com/v0/b/pixel-perfects-new.appspot.com/o/vehicle%20removing%2Fafter%2Fvehicle%20removing%201%20after.webp?alt=media",
        mainEntityOfPage:
          "https://www.pxlperfects.com/services/vehicle-removing",
      },
    ],
  },
  "blue-sky-replacement": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides a comprehensive range of real estate marketing services, including virtual staging, photo editing, 360° renders, and more.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },
      {
        "@type": "WebPage",
        "@id":
          "https://www.pxlperfects.com/services/blue-sky-replacement#webpage",
        url: "https://www.pxlperfects.com/services/blue-sky-replacement",
        name: "Blue Sky Replacement – Pixel Perfects Solutions",
        description:
          "Make your exterior real estate photos stand out with our Blue Sky Replacement service. Replace dull, overcast skies with vibrant blue skies to enhance visual appeal.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://www.pxlperfects.com/services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Blue Sky Replacement",
              item: "https://www.pxlperfects.com/services/blue-sky-replacement",
            },
          ],
        },
        mainEntityOfPage:
          "https://www.pxlperfects.com/services/blue-sky-replacement",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },
      {
        "@type": "Service",
        "@id":
          "https://www.pxlperfects.com/services/blue-sky-replacement#service",
        name: "Blue Sky Replacement",
        serviceType: "Blue Sky Replacement",
        description:
          "Pixel Perfects Solutions enhances real estate photos by replacing dull or cloudy skies with clear, bright blue skies to significantly boost visual appeal.",
        provider: { "@id": "https://www.pxlperfects.com/#organization" },
        areaServed: "US",
        offers: {
          "@type": "Offer",
          url: "https://www.pxlperfects.com/services/blue-sky-replacement",
          priceCurrency: "USD",
          price: "5.00",
          availability: "https://schema.org/InStock",
          validFrom: "2024-08-26",
        },
        image:
          "https://firebasestorage.googleapis.com/v0/b/pixel-perfects-new.appspot.com/o/Other%20Edits%2FBlue%20Sky%20After.webp?alt=media",
        mainEntityOfPage:
          "https://www.pxlperfects.com/services/blue-sky-replacement",
      },
    ],
  },
  "tv-screen-replacement": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions offers high-end real estate marketing services including virtual staging, photo editing, floor plans, 360 renders, and more.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },
      {
        "@type": "WebPage",
        "@id":
          "https://www.pxlperfects.com/services/tv-screen-replacement#webpage",
        url: "https://www.pxlperfects.com/services/tv-screen-replacement",
        name: "TV Screen Replacement – Pixel Perfects Solutions",
        description:
          "Fix reflections, glare, or blank screens with our TV Screen Replacement service. We replace screens with clean, modern visuals to elevate your interior photos.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://www.pxlperfects.com/services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "TV Screen Replacement",
              item: "https://www.pxlperfects.com/services/tv-screen-replacement",
            },
          ],
        },
        mainEntityOfPage:
          "https://www.pxlperfects.com/services/tv-screen-replacement",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },
      {
        "@type": "Service",
        "@id":
          "https://www.pxlperfects.com/services/tv-screen-replacement#service",
        name: "TV Screen Replacement",
        serviceType: "TV Screen Replacement",
        description:
          "Pixel Perfects Solutions replaces TV screens in real estate photos with clean, modern, glare-free visuals to enhance property interiors and improve listing presentation.",
        provider: { "@id": "https://www.pxlperfects.com/#organization" },
        areaServed: "US",
        offers: {
          "@type": "Offer",
          url: "https://www.pxlperfects.com/services/tv-screen-replacement",
          priceCurrency: "USD",
          price: "5.00",
          availability: "https://schema.org/InStock",
          validFrom: "2024-08-26",
        },
        image:
          "https://firebasestorage.googleapis.com/v0/b/pixel-perfects-new.appspot.com/o/Other%20Edits%2FTV%20Screen%20After.webp?alt=media",
        mainEntityOfPage:
          "https://www.pxlperfects.com/services/tv-screen-replacement",
      },
    ],
  },
  "portrait-retouching": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions offers professional real estate marketing services including virtual staging, photo editing, 3D renders, floor plans, and more.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },
      {
        "@type": "WebPage",
        "@id":
          "https://www.pxlperfects.com/services/portrait-retouching#webpage",
        url: "https://www.pxlperfects.com/services/portrait-retouching",
        name: "Portrait Retouching – Pixel Perfects Solutions",
        description:
          "Transform headshots and personal photos with professional portrait retouching. Enhance lighting, skin tone, and overall clarity while keeping natural realism intact.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://www.pxlperfects.com/services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Portrait Retouching",
              item: "https://www.pxlperfects.com/services/portrait-retouching",
            },
          ],
        },
        mainEntityOfPage:
          "https://www.pxlperfects.com/services/portrait-retouching",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },
      {
        "@type": "Service",
        "@id":
          "https://www.pxlperfects.com/services/portrait-retouching#service",
        name: "Portrait Retouching",
        serviceType: "Portrait Retouching",
        description:
          "Pixel Perfects Solutions provides high-quality portrait retouching services that enhance facial features, improve lighting, smooth skin tones, and maintain natural aesthetics for professional headshots, branding photos, and personal portraits.",
        provider: { "@id": "https://www.pxlperfects.com/#organization" },
        areaServed: "US",
        offers: {
          "@type": "Offer",
          url: "https://www.pxlperfects.com/services/portrait-retouching",
          priceCurrency: "USD",
          price: "8.00",
          availability: "https://schema.org/InStock",
          validFrom: "2024-08-26",
        },
        image:
          "https://firebasestorage.googleapis.com/v0/b/pixel-perfects-new.appspot.com/o/Other%20Edits%2FPortrait%20Retouching%20After.webp?alt=media",
        mainEntityOfPage:
          "https://www.pxlperfects.com/services/portrait-retouching",
      },
    ],
  },
  "property-outline": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides a wide range of real estate marketing services, including virtual staging, image editing, property outlines, and more.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/services/property-outline#webpage",
        url: "https://www.pxlperfects.com/services/property-outline",
        name: "Property Outline – Pixel Perfects Solutions",
        description:
          "Highlight property boundaries clearly with professional property outline editing. Perfect for MLS listings, marketing brochures, and real estate ads.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://www.pxlperfects.com/services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Property Outline",
              item: "https://www.pxlperfects.com/services/property-outline",
            },
          ],
        },
        mainEntityOfPage:
          "https://www.pxlperfects.com/services/property-outline",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },
      {
        "@type": "Service",
        "@id": "https://www.pxlperfects.com/services/property-outline#service",
        name: "Property Outline",
        serviceType: "Property Outline",
        description:
          "Pixel Perfects Solutions provides high-quality property outline editing to clearly highlight land boundaries, building footprints, and property limits for real estate listings and marketing materials.",
        provider: { "@id": "https://www.pxlperfects.com/#organization" },
        areaServed: "US",
        offers: {
          "@type": "Offer",
          url: "https://www.pxlperfects.com/services/property-outline",
          priceCurrency: "USD",
          price: "8.00",
          availability: "https://schema.org/InStock",
          validFrom: "2024-08-26",
        },
        image:
          "https://firebasestorage.googleapis.com/v0/b/pixel-perfects-new.appspot.com/o/Other%20Edits%2FProperty%20Outline%20After.webp?alt=media",
        mainEntityOfPage:
          "https://www.pxlperfects.com/services/property-outline",
      },
    ],
  },
  "snow-removing": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides a comprehensive range of real estate marketing services including virtual staging, decluttering, photo editing, snow removal edits, and more.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/services/snow-removing#webpage",
        url: "https://www.pxlperfects.com/services/snow-removing",
        name: "Snow Removing – Pixel Perfects Solutions",
        description:
          "Enhance exterior property photos by removing snow from driveways, roofs, lawns, and pathways. Perfect for real estate listings requiring clean, weather-neutral visuals.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://www.pxlperfects.com/services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Snow Removing",
              item: "https://www.pxlperfects.com/services/snow-removing",
            },
          ],
        },
        mainEntityOfPage: "https://www.pxlperfects.com/services/snow-removing",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },
      {
        "@type": "Service",
        "@id": "https://www.pxlperfects.com/services/snow-removing#service",
        name: "Snow Removing",
        serviceType: "Snow Removing",
        description:
          "Pixel Perfects Solutions offers professional snow removal editing to clear snow from lawns, driveways, roofs, and exteriors for improved real estate presentation.",
        provider: { "@id": "https://www.pxlperfects.com/#organization" },
        areaServed: "US",
        offers: {
          "@type": "Offer",
          url: "https://www.pxlperfects.com/services/snow-removing",
          priceCurrency: "USD",
          price: "8.00",
          availability: "https://schema.org/InStock",
          validFrom: "2024-08-26",
        },
        image:
          "https://firebasestorage.googleapis.com/v0/b/pixel-perfects-new.appspot.com/o/Other%20Edits%2FSnow%20Removal%20After.webp?alt=media",
        mainEntityOfPage: "https://www.pxlperfects.com/services/snow-removing",
      },
    ],
  },
  "add-water-in-pool": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides a full range of real estate marketing services including virtual staging, photo editing, pool water adding, grass landscaping, sky replacement, and more.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/services/add-water-in-pool#webpage",
        url: "https://www.pxlperfects.com/services/add-water-in-pool",
        name: "Add Water In Pool – Pixel Perfects Solutions",
        description:
          "Enhance exterior photos by adding clean, realistic pool water. Perfect for empty or drained pools that need an appealing look for real estate marketing.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://www.pxlperfects.com/services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Add Water In Pool",
              item: "https://www.pxlperfects.com/services/add-water-in-pool",
            },
          ],
        },
        mainEntityOfPage:
          "https://www.pxlperfects.com/services/add-water-in-pool",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },
      {
        "@type": "Service",
        "@id": "https://www.pxlperfects.com/services/add-water-in-pool#service",
        name: "Add Water In Pool",
        serviceType: "Add Water In Pool",
        description:
          "Pixel Perfects Solutions provides professional photo editing to add crystal-clear water to empty or drained pools, improving real estate presentation and visual appeal.",
        provider: { "@id": "https://www.pxlperfects.com/#organization" },
        areaServed: "US",
        offers: {
          "@type": "Offer",
          url: "https://www.pxlperfects.com/services/add-water-in-pool",
          priceCurrency: "USD",
          price: "8.00",
          availability: "https://schema.org/InStock",
          validFrom: "2024-08-26",
        },
        image:
          "https://firebasestorage.googleapis.com/v0/b/pixel-perfects-new.appspot.com/o/Other%20Edits%2FAdd%20Water%20In%20Pool%20After.webp?alt=media",
        mainEntityOfPage:
          "https://www.pxlperfects.com/services/add-water-in-pool",
      },
    ],
  },
  "wires-removing": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides a full range of real estate marketing services including virtual staging, sky replacement, wires removing, grass landscaping, pool water addition, and more.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pxlperfects.com/services/wires-removing#webpage",
        url: "https://www.pxlperfects.com/services/wires-removing",
        name: "Wires Removing – Pixel Perfects Solutions",
        description:
          "Remove distracting electric wires, poles, and cables from real estate photos to achieve a clean and professional look. Ideal for enhancing curb appeal and presentation.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://www.pxlperfects.com/services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Wires Removing",
              item: "https://www.pxlperfects.com/services/wires-removing",
            },
          ],
        },
        mainEntityOfPage: "https://www.pxlperfects.com/services/wires-removing",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },
      {
        "@type": "Service",
        "@id": "https://www.pxlperfects.com/services/wires-removing#service",
        name: "Wires Removing",
        serviceType: "Wires Removing",
        description:
          "Pixel Perfects Solutions professionally removes distracting wires, poles, and overhead cables from property images to create clean, polished, and visually appealing real estate photos.",
        provider: { "@id": "https://www.pxlperfects.com/#organization" },
        areaServed: "US",
        offers: {
          "@type": "Offer",
          url: "https://www.pxlperfects.com/services/wires-removing",
          priceCurrency: "USD",
          price: "5.00",
          availability: "https://schema.org/InStock",
          validFrom: "2024-08-26",
        },
        image:
          "https://firebasestorage.googleapis.com/v0/b/pixel-perfects-new.appspot.com/o/Other%20Edits%2FWires%20Removing%20After.webp?alt=media",
        mainEntityOfPage: "https://www.pxlperfects.com/services/wires-removing",
      },
    ],
  },
  "add-fireplace-flame": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.pxlperfects.com/#website",
        url: "https://www.pxlperfects.com/",
        name: "Pixel Perfects Solutions",
        description:
          "Pixel Perfects Solutions provides high-quality real estate marketing services including virtual staging, sky replacement, fireplace flame addition, item removal, grass landscaping, and more.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.pxlperfects.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.pxlperfects.com/#organization",
        name: "Pixel Perfects Solutions",
        url: "https://www.pxlperfects.com/",
        logo: "https://www.pxlperfects.com/images/logo.png",
        email: "orders@pxlperfects.com",
        foundingDate: "2020-01-01",
        founders: [
          { "@type": "Person", name: "Muhammad Faizan Islam", jobTitle: "CEO" },
          { "@type": "Person", name: "Saulat Abbas", jobTitle: "CTO" },
          { "@type": "Person", name: "Azfar Abbas", jobTitle: "CFO" },
        ],
        sameAs: [
          "https://www.facebook.com/pixel.perfects.solutions/",
          "https://www.linkedin.com/company/pixel-perfects",
          "https://www.instagram.com/pixel.perfects.solutions/",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.pxlperfects.com/#localbusiness",
        name: "Pixel Perfects Solutions | Real Estate Marketing",
        image: "https://www.pxlperfects.com/images/logo.png",
        url: "https://www.pxlperfects.com/",
        priceRange: "$1–$100",
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould ST STE N",
          addressLocality: "Sheridan",
          addressRegion: "Wyoming",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.797773,
          longitude: -106.954933,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        telephone: "+1-929-493-6583",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-929-493-6583",
          contactType: "Customer Service",
          areaServed: "US",
        },
      },
      {
        "@type": "WebPage",
        "@id":
          "https://www.pxlperfects.com/services/add-fireplace-flame#webpage",
        url: "https://www.pxlperfects.com/services/add-fireplace-flame",
        name: "Add Fireplace Flame – Pixel Perfects Solutions",
        description:
          "Add a warm and inviting fireplace flame to interior real estate photos. Enhance ambiance, coziness, and overall visual appeal with realistic flame rendering.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://www.pxlperfects.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.pxlperfects.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://www.pxlperfects.com/services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Add Fireplace Flame",
              item: "https://www.pxlperfects.com/services/add-fireplace-flame",
            },
          ],
        },
        mainEntityOfPage:
          "https://www.pxlperfects.com/services/add-fireplace-flame",
        publisher: { "@id": "https://www.pxlperfects.com/#organization" },
      },
      {
        "@type": "Service",
        "@id":
          "https://www.pxlperfects.com/services/add-fireplace-flame#service",
        name: "Add Fireplace Flame",
        serviceType: "Add Fireplace Flame",
        description:
          "Pixel Perfects Solutions adds realistic fireplace flames to interior property photos, enhancing warmth and visual appeal. Ideal for creating cozy, inviting atmosphere in living areas.",
        provider: { "@id": "https://www.pxlperfects.com/#organization" },
        areaServed: "US",
        offers: {
          "@type": "Offer",
          url: "https://www.pxlperfects.com/services/add-fireplace-flame",
          priceCurrency: "USD",
          price: "4.00",
          availability: "https://schema.org/InStock",
          validFrom: "2024-08-26",
        },
        image:
          "https://firebasestorage.googleapis.com/v0/b/pixel-perfects-new.appspot.com/o/Other%20Edits%2FAdd%20Fireplace%20Flame%20After.webp?alt=media",
        mainEntityOfPage:
          "https://www.pxlperfects.com/services/add-fireplace-flame",
      },
    ],
  },
};
