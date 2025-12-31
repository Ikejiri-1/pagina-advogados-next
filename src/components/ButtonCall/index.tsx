"use client";

import { forwardRef } from "react";
import "./buttoncall.css";
import Link from "next/link";
import { whatsappLink } from "@/utils/linkWpp";

export const ButtonCallALawyer = forwardRef<HTMLButtonElement>(
  function ButtonCallALawyer(_, ref) {
    return (
      <button ref={ref} className="button-call">
        <Link href={whatsappLink}>Fale com um advogado</Link>
      </button>
    );
  }
);
