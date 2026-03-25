"use client";
import React from "react";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { usePathname } from "next/navigation";
import { useContactForm } from "@/utils/ContactFormHooks";
import { useModal } from "@/common-components/providers/ModalContext";
import ContactUsFormFileUpload from "./ContactUsFormUpload";
import { ArrowRight, ArrowUpFromDot } from "lucide-react";
import SEOImage from "../SeoImage/SeoImage";

const ContactUsFormCard = ({ id, heading, lang }) => {
  const pathname = usePathname();
  const { relatedData } = useModal();
  const {
    initialValues,
    validationSchema,
    sendEmail,
    responseMessage,
    resetFileUpload,
    setIsUploading,
    isUploading,
  } = useContactForm(pathname, relatedData);

  const textFields = [
    {
      id: "firstName",
      label: "First Name",
      placeholder: "First Name",
    },
    {
      id: "lastName",
      label: "Last Name",
      placeholder: "Last Name",
    },
    {
      id: "serviceType",
      label: "Service Type",
      placeholder: "Service Type",
    },
    {
      id: "serviceTypeSecond",
      label: "Service Type (Second)",
      placeholder: "Second Service",
    },
    {
      id: "email",
      label: "Email Address",
      placeholder: "Email",
      type: "email",
    },
    {
      id: "phone",
      label: "Phone Number",
      placeholder: "Phone Number",
    },
    {
      id: "propertyType",
      label: "Property Type",
      placeholder: "Property Type",
    },
    {
      id: "numberOfSpaces",
      label: "Number of Spaces",
      placeholder: "Number of Spaces",
    },
    {
      id: "numberOfImages",
      label: "Number of Images",
      placeholder: "Number of Images",
    }
  ];

  return (
    <div
      id={id}
      className="relative container-global p-0 lg:py-[3%] w-full flex justify-center"
    >
      <div className="hidden lg:block lg:ml-[-25%]  w-[60%] md:w-[50%] lg:w-[45%]">
        <SEOImage branding={true}
          src="/contatct Form Card.png"
          alt="Contact Us"
          width={800}
          height={800}
          className="w-full h-auto"
          loading="lazy"
        />
      </div>
      {/* Form Card */}
      <div
        className="  lg:absolute lg:top-[15%]  lg:left-1/2 left-0 w-[96%] md:w-[60%] lg:w-[45%] bg-white shadow-[0_20px_20px_#00000029] 
        p-[1rem] lg:p-[2%] my-[2rem] md:mt-0 rounded-[1rem] lg:rounded-[0_2vw_2vw_0] lg:mx-auto"
      >
        <h1 className="text-center lg:text-left">
          {heading ? heading : "Contact Us"}
        </h1>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={sendEmail}
          validateOnBlur={true}
          validateOnChange={true}
        >
          {({ isSubmitting, isValid }) => {
const isDisabled = !isValid || isSubmitting || isUploading;
           return(
            <Form>
              <div className="flex flex-wrap gap-x-[6%]">
                {textFields.map((item, index) => (
                  <div
                    key={index}
                    className="relative w-[46%] mt-[2.5rem] lg:mt-[6%] flex flex-col"
                  >
                    <h6 htmlFor={item.id} className="font-bold  mb-[2%]">
                      {item.label}
                    </h6>

                    <Field
                      type={item.type || "text"}
                      name={item.id}
                      placeholder={item.placeholder}
                      className="
  border border-[#e8f4ff] rounded-md py-[0.5rem] px-[0.5rem] lg:py-[2%] lg:px-[4%] w-full
  focus:ring-1 focus:ring-[#00cfaa] outline-none
  text-[clamp(12px,0.8vw,16px)]
  placeholder:text-[clamp(10px,0.65vw,12px)]
  placeholder:text-[#9b9b9b]
"
                    />

                    <div className="absolute bottom-[-40%] text-[0.65rem] xl:text-[clamp(0.6rem,0.65vw,1rem)] lg:text-[0.45rem]  text-red-600">
                      <ErrorMessage name={item.id} />
                    </div>
                  </div>
                ))}

                {/* File Upload */}
                {/* <div className="w-full mt-[3rem] lg:mt-[6%]">
                  <ContactUsFormFileUpload
                    contact="Contact Us"
                    lang={lang}
                    setFieldError={setFieldError}
                    resetFileUpload={resetFileUpload}
                    setFieldValue={setFieldValue}
                    setIsUploading={setIsUploading}
                  />
                </div> */}

                {/* Submit Section */}
                {/* <div className="w-full mt-[2rem] lg:mt-[4%] flex justify-start">
                  {responseMessage ? (
                    <p
                      className={`font-bold  ${responseMessage.includes("Thank you")
                        ? "text-green-600"
                        : "text-red-600"
                        }`}
                    >
                      {responseMessage}
                    </p>
                  ) : (
                    <button
                      type="submit"
                      disabled={!isValid || isSubmitting || isUploading}
                      className={`btn-fullblue flex items-center justify-center gap-2 mt-[4%] w-[62%] md:w-[50%] xl:w-[12vw] 2xl:w-[10vw]
  rounded-md transition-all duration-300 ${!isValid || isSubmitting || isUploading
                          ? "bg-transparent !cursor-not-allowed border-2 border-[#999] text-[#999]"
                          : ""
                        }`}
                    >
                      {isSubmitting ? (
                        <span className="loader border-t-transparent border-white border-4 rounded-full w-5 h-5 animate-spin"></span>
                      ) : (
                        <>
                          {lang === "es" ? "Enviar mensaje" : "Send Message"}
                          <ArrowRight className=" text-[clamp(0.9rem,1vw,1.2rem)]" />
                        </>
                      )}
                    </button>
                  )}
                </div> */}
                <div className="w-full mt-[2rem] lg:mt-[4%] flex flex-col items-start gap-2">

 
  <button
    type="submit"
  disabled={isDisabled}
    className={`btn-fullblue flex items-center justify-center gap-2 w-[62%] md:w-[50%] xl:w-[12vw] 2xl:w-[10vw]
    rounded-md transition-all duration-300 ${
     isDisabled
        ? "bg-transparent !cursor-not-allowed border-2 border-[#999] text-[#999]"
        : ""
    }`}
  >
    {isSubmitting ? (
      <span className="loader border-t-transparent border-white border-4 rounded-full w-5 h-5 animate-spin"></span>
    ) : (
      <>
        {lang === "es" ? "Enviar mensaje" : "Send Message"}
        <ArrowRight className="text-[clamp(0.9rem,1vw,1.2rem)]" />
      </>
    )}
  </button>
   {responseMessage && (
    <p
      className={`font-bold ${
        responseMessage.includes("Thank you")
          ? "text-green-600"
          : "text-red-600"
      }`}
    >
      {responseMessage}
    </p>
  )}

</div>
              </div>
            </Form>
          )}}
        </Formik>
      </div>
    </div>
  );
};

export default ContactUsFormCard;
