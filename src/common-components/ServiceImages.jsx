import Image from "next/image";
import ImageComparing from "./ImageComparing";
import SEOImage from "./SeoImage/SeoImage";

const ServiceImages = ({ data, subservice, photographer, lang }) => {

  const pick = (val) =>
    Array.isArray(val) ? (val.length > 0 ? val[0] : null) : val;

  const single = pick(data?.singleImage) || pick(data?.img);
  const videoUrl = pick(data?.videoUrl) || pick(data?.video);

  const beforeImage =
    pick(data?.leftImage) ||
    pick(data?.beforeImage) ||
    pick(data?.Beforeimg);

  const afterImage =
    pick(data?.rightImage) ||
    pick(data?.afterImage) ||
    pick(data?.Afterimg);

  const imageSrc = !subservice ? single : (single || afterImage);

  const AlterNativeTags = data?.project_title || data?.subName
  const getFileNameFromFirebaseURL = (url) => {
    try {
      const decoded = decodeURIComponent(url);
      const fileName = decoded.split("/o/")[1].split("?")[0].split("/").pop();
      return fileName.replace(/\.[^/.]+$/, ""); // remove extension
    } catch {
      return "";
    }
  };

  const AfterfileName = getFileNameFromFirebaseURL(afterImage);
  const BeforeFileName = getFileNameFromFirebaseURL(beforeImage);
  const SingleFileName = getFileNameFromFirebaseURL(single);


  return (
    <>
      {/* ✅ SINGLE IMAGE */}
      {
        beforeImage && afterImage ? (
          <ImageComparing
            afterImageTag={data?.AfterimgAlt || AfterfileName}
            beforeImageTag={data?.BeforeimgAlt || BeforeFileName}
            beforeImage={beforeImage}
            afterImage={afterImage}
            subName={data?.subName || data?.title}
            lang={lang}
          />
        ) : imageSrc ? (
          <div className="relative w-full h-[16rem] md:h-[29rem] lg:h-[clamp(18.5rem,27vw,33rem)]   2xl:h-[34rem] ">
            {/* <Image
            src={imageSrc}
         title={`${AlterNativeTags || SingleFileName || "Services"}-Pixel-Perfects-Solution-LLC`}   // ✅ add this
      alt={`${AlterNativeTags || SingleFileName || "Services"}-Pixel-Perfects-Solution-LLC`} 
            fill
            placeholder="blur" 

            blurDataURL="/blur-placeholder.png"
            quality={70}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            decoding="async"
            className="object-cover cursor-default"
          /> */}
            <SEOImage
              src={imageSrc} branding={true}
              alt={AlterNativeTags || SingleFileName}
              fill
              placeholder="blur"
              blurDataURL="/blur-placeholder.png"
              quality={70}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              decoding="async"
              className="object-cover cursor-default"
            />
            <noscript>
              <img
                src={imageSrc}
                title={`${AlterNativeTags || SingleFileName || "Services"}-Pixel-Perfects-Solution-LLC`}
                alt={`${AlterNativeTags || SingleFileName || "Services"}-Pixel-Perfects-Solution-LLC`}
                className="relative w-full h-[16rem] md:h-[29rem] lg:h-[clamp(18.5rem,27vw,33rem)]   2xl:h-[34rem]"
              />
            </noscript>
          </div>
        ) : videoUrl ? (
          // ✅ VIDEO
          <div className="bg-black cursor-default block">
            <video
              src={videoUrl}
              muted
              controls
              autoPlay
              loop
              playsInline
              className="w-full block md:h-[clamp(15rem,30vw,40rem)] xs:h-[clamp(15rem,30rem,50rem)] h-[15rem]"
            />
          </div>
        ) : (
          <p className="text-center text-gray-600 py-6">
            Aucun média disponible
          </p>
        )}
    </>
  );
};

export default ServiceImages;
