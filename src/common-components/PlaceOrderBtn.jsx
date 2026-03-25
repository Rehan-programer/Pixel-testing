import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";

export default async function PlaceOrderBtn({ subname }) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en";
  const PORTAL = process.env.NEXT_PUBLIC_PORTAL;

  return (
    <div className="">
      <Link
        href={`${PORTAL}${subname}`}
        target="_blank" title={lang === "en" ? "Place an Order" : "Hacer un pedido"}
        rel="noopener noreferrer"
        className="btn-slider"
      >
        {lang === "en" ? "Place an Order" : "Hacer un pedido"}
      </Link>
    </div>
  );
}
