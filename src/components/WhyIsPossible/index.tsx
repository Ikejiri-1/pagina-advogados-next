"use client";
import { Card } from "../Card";
import "./whyispossible.css";
import { useRef, useEffect } from "react";

export const WhyIsPossible = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="why-is-possible">
      <h2 className="why-title">
        PORQUE É POSSÍVEL REAVER OS VALORES BLOQUEADOS?
      </h2>

      <div className="card-wrapper">
        <Card
          title="A lei protege certas verbas e alguns bens do devedor. Isso por conta do direito à vida digna da pessoa"
          subtitle="É possível pedir a liberação nos seguintes casos:"
          content={[
            "VERBAS IMPENHORÁVEIS: Salários, aposentadoria, pensão alimentícia, benefícios sociais etc;",
            "VALORES ACIMA DO VALOR DA DÍVIDA: o valor excedente deverá ser liberado (porém, se todo valor for verba impenhorável, buscamos a liberação total);",
            "COMPROMETIMENTO DA SUBSISTÊNCIA: o credor não pode bloquear todos os bens e valores do devedor a ponto de prejudicar a subsistência dele, pois isso seria uma grave violação do princípio da dignidade da pessoa humana;",
            "COMPROMETIMENTO DA ATIVIDADE EMPRESARIAL: se os valores bloqueados comprometerem o funcionamento da empresa de empresários individuais e empresas de pequeno porte.",
          ]}
        />
      </div>
    </div>
  );
};
