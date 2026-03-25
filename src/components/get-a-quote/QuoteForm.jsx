"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";
import ContactUsFormFileUpload from "../../common-components/ContactForms/ContactUsFormUpload";
import { useContactForm } from "../../utils/ContactFormHooks";
import { useModal } from "@/common-components/providers/ModalContext";
import Link from "next/link";

export default function QuoteForm({ lang = "en" }) {
  const pathname = usePathname();
  const { relatedData, openContactModal } = useModal();

  const {
    initialValues,
    validationSchema,
    sendEmail,
    responseMessage,
    resetFileUpload,
    isUploading,
    setIsUploading,
  } = useContactForm(pathname, relatedData);

  // const textFields = [
  //   {
  //     id: "fullName",
  //     label: lang === "es" ? "Nombre completo" : "Full Name",
  //     placeholder: lang === "es" ? "Nombre completo" : "Full Name",
  //   },
  //   {
  //     id: "phone",
  //     label: lang === "es" ? "Número de teléfono" : "Phone Number",
  //     placeholder: lang === "es" ? "Número de teléfono" : "Phone Number",
  //   },
  //   {
  //     id: "email",
  //     label: lang === "es" ? "Dirección de correo" : "Email Address",
  //     placeholder: lang === "es" ? "Correo electrónico" : "Email",
  //     type: "email",
  //   },
  //   {
  //     id: "description",
  //     label: lang === "es" ? "Detalles del proyecto" : "Project Detail",
  //     placeholder: lang === "es" ? "Descripción" : "Description",
  //   },
  // ];
  const textFields = [
    { id: "firstName", label: lang === "es" ? "Nombre" : "First Name", placeholder: lang === "es" ? "Nombre" : "First Name" },
    { id: "lastName", label: lang === "es" ? "Apellido" : "Last Name", placeholder: lang === "es" ? "Apellido" : "Last Name" },
    { id: "email", label: lang === "es" ? "Correo electrónico" : "Email", placeholder: lang === "es" ? "Correo electrónico" : "Email", type: "email" },
    { id: "phone", label: lang === "es" ? "Número de teléfono" : "Phone Number", placeholder: lang === "es" ? "Número de teléfono" : "Phone Number" },
    { id: "serviceType", label: lang === "es" ? "Tipo de servicio" : "Service Type", placeholder: lang === "es" ? "Tipo de servicio" : "Service Type" },
    { id: "serviceTypeSecond", label: lang === "es" ? "Segundo tipo de servicio" : "Service Type Second", placeholder: lang === "es" ? "Segundo tipo de servicio" : "Service Type Second" },
    { id: "propertyType", label: lang === "es" ? "Tipo de propiedad" : "Property Type", placeholder: lang === "es" ? "Tipo de propiedad" : "Property Type" },
    { id: "numberOfSpaces", label: lang === "es" ? "Número de espacios" : "Number of Spaces", placeholder: lang === "es" ? "Número de espacios" : "Number of Spaces" },
    { id: "numberOfImages", label: lang === "es" ? "Número de imágenes" : "Number of Images", placeholder: lang === "es" ? "Número de imágenes" : "Number of Images" },
  ];

  const socialLinks = [
    {title:"Instagram",
      href: "https://www.instagram.com/pixel.perfects.solutions",
      icon: <FaInstagram size={24} />,
    },
     {title:"Facebook",
      href: "https://www.facebook.com/pixel.perfects.solutions",
      icon: <FaFacebook size={24} />,
    },
     {title:"Linkedin",
      href: "https://www.linkedin.com/company/pixel-perfects",
      icon: <FaLinkedin size={24} />,
    },
  ];

  const contactInfo = [
    {
      href: "https://maps.app.goo.gl/fhsb5ooAdaZJ2bSz5",
      icon: (
        <svg
          className="w-6 h-6 text-[#2C3C77]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 1.74.5 3.37 1.41 4.84.95 1.54 2.2 2.86 3.16 4.4.47.75.81 1.45 1.17 2.26.26.55.47 1.5 1.26 1.5s1-.95 1.25-1.5c.37-.81.7-1.51 1.17-2.26.96-1.53 2.21-2.85 3.16-4.4C18.5 12.37 19 10.74 19 9c0-3.87-3.13-7-7-7m0 9.75c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5" />
        </svg>
      ),
      text: "30 N, Gould St, Sheridan, Wyoming",
    },
    {
      href: "tel:+19294936583",
      icon: (
        <svg
          className="w-6 h-6 text-[#2C3C77]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M20 15.45c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.4 8.5 5.2 8.5 3.95c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1M5.03 4.95h1.5c.07.88.22 1.75.45 2.58l-1.2 1.21c-.4-1.21-.66-2.47-.75-3.79M19 18.92c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45zM18 5.95v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
        </svg>
      ),
      text: "+1 9294936583",
    },
    {
      href: "mailto:orders@pxlperfects.com",
      icon: (
        <svg
          className="w-6 h-6 text-[#2C3C77]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0-8 5-8-5zm0 12H4V8l8 5 8-5z" />
        </svg>
      ),
      text: "orders@pxlperfects.com",
    },
  ];

  return (
    <div
      className={`
    ${
      !openContactModal
        ? "container-global   bg-white p-0 shadow-2xl rounded-b-2xl lg:rounded-tl-2xl lg:rounded-bl-2xl my-[2rem] lg:my-[3%]"
        : " "
    }`}
    >
      <div className={`${!openContactModal ? "flex flex-col lg:flex-row lg:gap-x-[2%]" : "flex flex-col md:flex-row md:gap-x-[2%]"}`}>
        {/* LEFT SIDE */}
        <div className={`${!openContactModal ? "bg-[#2C3C77] p-[1rem] lg:p-[2%] lg:w-[50%] rounded-t-2xl md:rounded-2xl  lg:rounded-tl-2xl lg:rounded-tr-[0px] lg:rounded-br-[0px]  lg:rounded-bl-2xl " : "md:w-[50%] bg-[#2C3C77] p-[1rem] md:p-[2%] rounded-2xl  md:rounded-tl-2xl md:rounded-tr-[0px] md:rounded-br-[0px] md:rounded-bl-2xl"}`}>
          <h1 className="text-white">
            {lang === "es" ? "Obtén un " : "Get a "}
            <span className="text-[#00CFAA]">
              {lang === "es" ? "Presupuesto" : "Quote"}
            </span>
          </h1>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={sendEmail}
          >
            {({ isSubmitting, setFieldValue, values }) => (
              <Form className="">
                <div className={"grid grid-cols-1 lg:grid-cols-2 gap-[2%] "}>
                  {textFields.map((field, index) => (
                    <div key={index}
                      className={`  ${
                        field.id === "email" || field.id === "numberOfImages" || field.id==="phone"? "col-span-2" : "col-span-1"
                      }`}
                    >
                      <label className="input-wrapper relative">
                        <Field
                          name={field.id}
                          placeholder=" "
                          type={field.type || "text"}
                          className="floating-input mb-[0.5rem] lg:mb-[2%] input-wrapper"
                        />
                        <span className="floating-label text-body1">
                          {field.label}
                        </span>
                        <ErrorMessage
                          name={field.id}
                          component="p"
                          className="text-[#F80026] text-body2"
                        />
                      </label>
                    </div>
                  ))}
                </div>

                {/* File Upload */}
                {/* <ContactUsFormFileUpload
                  contact={false}
                  lang={lang}
                  setFieldValue={setFieldValue}
                  resetFileUpload={resetFileUpload}
                  setIsUploading={setIsUploading}
                /> */}

                {/* Submit / Response */}
                <div className="mt-[0.5rem] lg:mt-[4vw]">
                  {responseMessage ? (
                    <p
                      className={`font-bold text-center ${
                        responseMessage.includes("Thank you")
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {responseMessage}
                    </p>
                  ) : (
                    <button
                      type="submit"
                    disabled={
  !(
    values.firstName &&
    values.lastName &&
    values.email &&
    values.phone &&
    values.serviceType &&
    values.propertyType &&
    values.numberOfSpaces &&
    values.numberOfImages
  ) || isUploading
}
                      className={`btn-slider flex items-center justify-center gap-2 w-full mt-[4%] rounded-md transition-all duration-300 ${
                         !(
    values.firstName &&
    values.lastName &&
    values.email &&
    values.phone &&
    values.serviceType &&
    values.propertyType &&
    values.numberOfSpaces &&
    values.numberOfImages
  ) || isUploading
                          ? "bg-transparent !cursor-not-allowed border-2 border-[#999] text-[#999]"
                          : ""
                      }`}
                      aria-label="Send message to support team"
                    >
                      {isSubmitting ? (
                        <span className="loader border-t-transparent border-white border-4 rounded-full w-5 h-5 animate-spin"></span>
                      ) : lang === "es" ? (
                        "Enviar mensaje"
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>

        {/* RIGHT SIDE */}
        <div
          className={`${
            !openContactModal
              ? "p-[1rem] block md:hidden lg:block lg:p-[2%] lg:w-[50%] rounded-b-2xl lg:rounded-tr-2xl lg:rounded-br-2xl lg:rounded-bl-[0px]"
              : "hidden md:block md:w-[50%] p-[1rem]  lg:p-[2%]"
          }`}
        >
          <p className="mb-4">
            {lang === "es"
              ? "Cuéntanos sobre los requisitos, objetivos y plazos de tu proyecto, y nuestro equipo dedicado elaborará un presupuesto personalizado y competitivo adaptado a tus necesidades."
              : "Tell us about your project requirements, goals, and timeline, and our dedicated team will craft a personalized, competitive quote tailored to your needs."}
          </p>

          <div className="rounded-lg overflow-hidden mb-[2%]">
            <iframe
              title="office-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.167665261537!2d-106.95752898775811!3d44.79777157753526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fabc2a66677f%3A0x8f85bd068d1afb8a!2s30%20N%20Gould%20St%2C%20Sheridan%2C%20WY%2082801%2C%20USA!5e0!3m2!1sen!2s!4v1723127184144!5m2!1sen!2s"
              className="w-full m-auto lg:h-[18vw] border-0"
              loading="lazy"
              style={{ outline: "none" }}
            />
          </div>

          <div className="mb-[8%]">
            {contactInfo.map((item, index) => (
              <Link
                key={index} title={item.text}
                href={item.href}
                className="flex items-center gap-3 mb-2"
              >
                {item.icon}
                <p>{item.text}</p>
              </Link>
            ))}
          </div>

          <div className="mt-4 flex items-center space-x-3">
            {socialLinks.map((item, index) => (
              <Link title={item.title}
                key={index}
                href={item.href}
                className="flex items-center gap-3 text-[#2C3C77]"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
