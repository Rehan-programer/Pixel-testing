import Image from "next/image";

const SEOImage = ({
  alt,
  title,
  branding = true,
  ...props
}) => {

  const brandText = "Pixel Perfects Solutions LLC";

  const finalAlt = branding
    ? `${alt || "Services"} - ${brandText}`
    : alt;

  const finalTitle = branding
    ? `${title || alt || "Services"} - ${brandText}`
    : title;

  return (
    <Image
      {...props}
      alt={finalAlt}
      title={finalTitle}
    />
  );
};

export default SEOImage;
