import Script from "next/script";

const Scripts = () => {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-NYDKZ1TY7P"
        strategy="afterInteractive"
      />

      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NYDKZ1TY7P', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      {/* Trustpilot (Lazy) */}
      <Script
        src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="lazyOnload"
      />

      {/* Segment (Lazy) */}
      <Script id="segment-script" strategy="lazyOnload">
        {`
          !function(){
            var analytics = window.analytics = window.analytics || [];
            if (!analytics.initialize)
            if (analytics.invoked) console.error("Segment snippet included twice.");
            else {
              analytics.invoked = true;
              analytics.methods = ["trackSubmit","trackClick","trackLink","trackForm",
              "pageview","identify","reset","group","track","ready","alias","debug",
              "page","screen","once","off","on","addSourceMiddleware","addIntegrationMiddleware",
              "setAnonymousId","addDestinationMiddleware","register"];
              analytics.factory = function(method){
                return function(){
                  var args = Array.prototype.slice.call(arguments);
                  args.unshift(method);
                  analytics.push(args);
                  return analytics;
                }
              };
              for (var i = 0; i < analytics.methods.length; i++) {
                analytics[analytics.methods[i]] = analytics.factory(analytics.methods[i]);
              }
              analytics.load = function(key){
                var script = document.createElement("script");
                script.async = true;
                script.src = "https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";
                document.head.appendChild(script);
              };
              analytics.load("5uU0DeaTBSFulRzQuLdNhIevh9c0yBuF");
              analytics.page();
            }
          }();
        `}
      </Script>

      {/* Tawk.to */}
      <Script id="tawkto-chat" strategy="lazyOnload">
        {`
          var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
          (function() {
            var s1 = document.createElement("script"),
                s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/6627d6b3a0c6737bd12f6ce8/1hs5ptbgt';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
          })();
        `}
      </Script>

      {/* Cloudflare Turnstile */}
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="lazyOnload"
      />

      {/* Google Ads (Lazy) */}
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9465101493236719"
        strategy="lazyOnload"
        crossOrigin="anonymous"
      />

      {/* Organization Schema */}
      <Script
        id="global-org-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Pixel Perfects Solutions",
            url: "https://www.pxlperfects.com",
            logo: "/Header LOGO .webp",
            email: "orders@pxlperfects.com"
          }),
        }}
      />
    </>
  );
};

export default Scripts;