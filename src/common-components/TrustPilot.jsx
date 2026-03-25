import Script from "next/script";
import React, { useEffect } from "react";

const TrustPilot = () => {

  useEffect(() => {
    if (window.Trustpilot) {
      window.Trustpilot.loadFromElement(
        document.getElementById("trustpilot-widget"),
        true
      );
    }
  }, []);

  return (
    <>
      {/* TRUSTPILOT SCRIPT */}
      <Script
        src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="afterInteractive"
      />

      <div
        id="trustpilot-widget"
        data-locale="en-US"
        data-template-id="56278e9abfbbba0bdcd568bc"
        data-businessunit-id="67657118b09abb02c4060324"
        data-style-height="52px"
        data-style-width="100%"
        className="trustpilot-widget fixed bottom-0  z-9999 mt-[2rem] lg:mt-[2vw] ml-[-2rem] lg:ml-0"
      
      >
        <a  title="Trustpilot"
          href="https://www.trustpilot.com/review/pxlperfects.com"
          target="_blank"
          rel="noopener"
        >
          Trustpilot
        </a>
      </div>
    </>
  );
};

export default TrustPilot;
