"use client";

import Script from "next/script";

export default function OpenForm() {

  const openForm = () => {
    window.Tally.openPopup("VL090N");
  };

  return (
    <>
      {/* <button onClick={openForm}>Contact Us</button> */}

      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
      />
    </>
  );
}