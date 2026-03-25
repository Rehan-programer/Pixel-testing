"use client";

export default function GoogleMap({ height = "400px" }) {
  return (
    <div className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.167665261537!2d-106.95752898775811!3d44.79777157753526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fabc2a66677f%3A0x8f85bd068d1afb8a!2s30%20N%20Gould%20St%2C%20Sheridan%2C%20WY%2082801%2C%20USA!5e0!3m2!1sen!2s!4v1723127184144!5m2!1sen!2s"
        width="100%"
        height={height}
        loading="lazy"
        allowFullScreen=""
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow-lg border-0"
      ></iframe>
    </div>
  );
}
