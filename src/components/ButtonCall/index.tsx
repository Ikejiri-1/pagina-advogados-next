"use client";

import { forwardRef } from "react";
import "./buttoncall.css";
import Link from "next/link";
import { whatsappLink } from "@/utils/linkWpp";

export const ButtonCallALawyer = forwardRef<HTMLButtonElement>(
  function ButtonCallALawyer(_, ref) {
    const phone = "12981131591";
    const message =
      "Olá, tudo bem? \n Estou com minha conta bancária bloqueada e preciso de ajuda.";
    return (
      <button ref={ref} className="button-call button-call-top">
        <Link href={whatsappLink(phone, message)}>Fale com um advogado</Link>
      </button>
    );
  },
);
