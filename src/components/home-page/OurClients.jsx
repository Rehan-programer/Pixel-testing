import MarqueeClients from "./MarqueeClients";

const OurClients = ({ data }) => {
  return (
    <section
      className="w-[96%] md:w-[80%] lg:w-[76%] mx-auto my-[1rem] lg:my-[3%] text-center 
             py-[1rem] md:py-[3%]  max-w-[1600px]
             rounded-[0.8rem] md:rounded-[1vw]
             shadow-[0_0.8rem_1rem_rgba(0,0,0,0.5)] md:shadow-[0_2rem_2rem_rgba(0,0,0,0.5)]
             bg-[linear-gradient(135deg,rgba(205,229,255,1)_0%,rgba(255,255,255,1)_50%,rgba(169,252,237,1)_100%)] 
             flex flex-col items-center justify-center"
    >
      {/* Title */}
      <h2
        className="w-[90%] md:w-[50%] mx-auto mb-[2%] md:mb-[1%] "
        dangerouslySetInnerHTML={{ __html: data?.title }}
      />

      {/* Description */}
      <p className="w-[90%] lg:w-[50%] mx-auto ">{data?.detail}</p>

      {/* Marquee Clients */}
      <div className="w-[90%] md:w-[96%] mx-auto mt-[2%] overflow-hidden">
        {[...Array(2)].map((_, i) => (
          <MarqueeClients
            key={i}
            clients={data?.ClientLogo?.slice(i * 14, (i + 1) * 14)}
          />
        ))}
      </div>
    </section>
  );
};

export default OurClients;
