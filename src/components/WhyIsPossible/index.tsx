"use client";
import { AnimatedCard } from "../Cards/AnimatedCard";
import "./whyispossible.css";
import { useRef, useEffect } from "react";

const content = [
  {
    title: "VERBAS IMPENHORÁVEIS",
    description:
      "Salários, aposentadoria, pensão alimentícia, benefícios sociais etc.",
  },
  {
    title: "VALORES ACIMA DO VALOR DA DÍVIDA",
    description:
      "O valor excedente deverá ser liberado. Porém, se todo o valor for verba impenhorável, buscamos a liberação total.",
  },
  {
    title: "COMPROMETIMENTO DA SUBSISTÊNCIA",
    description:
      "O credor não pode bloquear todos os bens e valores do devedor a ponto de prejudicar sua subsistência, pois isso configura grave violação do princípio da dignidade da pessoa humana.",
  },
  {
    title: "COMPROMETIMENTO DA ATIVIDADE EMPRESARIAL",
    description:
      "Se os valores bloqueados comprometerem o funcionamento da empresa de empresários individuais ou de empresas de pequeno porte.",
  },
];

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
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="why-is-possible">
      <h2 className="why-title">
        PORQUE É POSSÍVEL REAVER OS VALORES BLOQUEADOS?
      </h2>

      <div className="cards-grid">
        {content.map((item, index) => (
          <AnimatedCard key={index}>
            <h3 className="card-item-title">{item.title}</h3>
            <p className="card-item-description">{item.description}</p>
          </AnimatedCard>
        ))}
      </div>
    </div>
  );
};
