"use client";

import { forwardRef } from "react";
import "./buttoncall.css";
import Link from "next/link";
import { whatsappLink } from "@/utils/linkWpp";

export const ButtonCallALawyer = forwardRef<HTMLButtonElement>(
  function ButtonCallALawyer(_, ref) {
    const phone = "12981131591";
    const message = "Ola, gostaria de saber mais!";
    return (
      <button ref={ref} className="button-call">
        <Link href={whatsappLink(phone, message)}>Fale com um advogado</Link>
      </button>
    );
  }
);
