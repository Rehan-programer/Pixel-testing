"use client";
import { useRef, useState, useEffect } from "react";
import * as Yup from "yup";

export function useContactForm(pathname, relatedData) {
  const [responseMessage, setResponseMessage] = useState("");
  const msgTimerRef = useRef(null);

  const clearMsgTimer = () => {
    if (msgTimerRef.current) {
      clearTimeout(msgTimerRef.current);
      msgTimerRef.current = null;
    }
  };

  useEffect(() => {
    return () => clearMsgTimer();
  }, []);

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),

  lastName: Yup.string().required("Last Name is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  phone: Yup.string().required("Phone Number is required"),

  serviceType: Yup.string().required("Service Type is required"),

  serviceTypeSecond: Yup.string(), // optional

  propertyType: Yup.string().required("Property Type is required"),

  numberOfSpaces: Yup.number()
    .typeError("Number of Spaces must be a number")
    .required("Number of Spaces is required"),

  numberOfImages: Yup.number()
    .typeError("Number of Images must be a number")
    .required("Number of Images is required"),
});

  const initialValues = {
    firstName: "",
    lastName: "",
    serviceType: "",
    serviceTypeSecond: "",
    email: "",
    phone: "",
    propertyType: "",
    numberOfSpaces: "",
    numberOfImages: "",
  };

const sendEmail = async (values, { setSubmitting, resetForm }) => {
  try {
    const res = await fetch(
      "https://hook.us2.make.com/ndq2bd2q5jm48gqpqjr3dpcadfqxszye",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: values.firstName,
          lastName: values.lastName,
          emailAddress: values.email,
          phoneNumber: values.phone,
          serviceType: values.serviceType,
          serviceTypeSecond: values.serviceTypeSecond,
          propertyType: values.propertyType,
          numberOfSpaces: values.numberOfSpaces,
          numberOfImages: values.numberOfImages,
        }),
      }
    );

    if (!res.ok) throw new Error("Webhook failed");

    setResponseMessage("Thank you! Your form has been submitted.");
    resetForm();

    // Clear previous timer if any
    if (msgTimerRef.current) clearTimeout(msgTimerRef.current);

    // Start new timer
    msgTimerRef.current = setTimeout(() => {
      setResponseMessage(""); // reset after 4s
      msgTimerRef.current = null; // clear ref
    }, 4000);

  } catch (error) {
    console.error(error);
    setResponseMessage("Something went wrong. Please try again.");
  } finally {
    setSubmitting(false);
  }
};

  return {
    initialValues,
    validationSchema,
    sendEmail,
    responseMessage,
  };
}