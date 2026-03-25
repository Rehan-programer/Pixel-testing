
import SectionHeader from "@/common-components/SectionHeader";

export default function ShootScene({ data }) {
  const interiorTips = data.detail.slice(1, 5); 
  const exteriorTips = data.detail.slice(6); 
const InfoBox = ({ titleHTML, tips }) => (
  <div className="bg-white rounded-xl shadow-lg p-[4%]">
    <h3
      dangerouslySetInnerHTML={{ __html: titleHTML }}
      className="lg:mb-[2%]"
    />

    {tips.map((tip, idx) => (
      <p key={idx} className="flex items-start gap-x-2 mt-[2%]">
        <svg
          className="w-2 h-2 flex-shrink-0 text-[#0ccfaa] mt-[0.25rem]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2" />
        </svg>
        {tip}
      </p>
    ))}
  </div>
);

  return (
    <section className="container-global">
      <div className="text-center ">
        <SectionHeader title={data.head} description={data.para} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">

       <InfoBox titleHTML={data.detail[0]} tips={interiorTips} />

<InfoBox titleHTML={data.detail[5]} tips={exteriorTips} />

      </div>
    </section>
  );
}
