
import Link from "next/link";
import React from "react";
import contactdata from "./ContactCardsData.json";
const ContactCards = ({background }) => {
  return (
    <div
      className="flex justify-center gap-[1%] container-global flex-col md:flex-row"
    >
      {contactdata?.map((item1, index) => (
        <div
          key={`${item1.country}-${index}`}
          className="pricingbox p-[2rem] lg:p-[4%] w-full mt-[1rem] lg:mt-0"
        >
          {/* Country */}
          <h3 className="inline-block border-b-2 pb-[2%] lg:pb-[2%]  border-orange-400">{item1.country}</h3>
          <h6 className="font-bold my-[2%]">{item1.company}</h6>

          {/* Address (Clickable if link exists) */}
          {item1.link ? (
            <Link title={"Place Order"}
              href={item1.link}
              target="_blank"
              className="no-underline"
            >
              <h5 className="mx-[clamp(0.3rem,0.5vw,0.7rem)]">
                {item1.address}
              </h5>
            </Link>
          ) : (
            <h5 className=" mx-[clamp(0.3rem,0.5vw,0.7rem)]">
              {item1.address}
            </h5>
          )}

          {/* Phone (tel link) */}
          {item1.phone && (
            <Link title={`tel:${item1.phone}`}
              href={`tel:${item1.phone}`}
              className="no-underline"
            >
              <h5 className="px-[clamp(0.3rem,0.5vw,0.7rem)]">
                {item1.phone}
              </h5>
            </Link>
          )}

          {/* Email */}
          <Link title={`orders@pxlperfects.com`}
            href="https://mail.google.com/mail/?view=cm&to=orders@pxlperfects.com"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <h5 className="px-[clamp(0.3rem,0.5vw,0.7rem)]">
              orders@pxlperfects.com
            </h5>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ContactCards;
