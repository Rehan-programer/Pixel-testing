import ServiceCardClient from "./ServiceGridClient";

export default function ServiceCard({ service, mobile = false }) {

  if (!service) return null;

  return (
    <ServiceCardClient
      service={service}
      mobile={mobile}
    />
  );
}