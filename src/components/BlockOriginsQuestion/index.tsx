"use client";

import { AnimatedCard } from "../Cards/AnimatedCard";
import "./blockorigins.css";
import { useEffect, useRef } from "react";

export const BlockOriginsQuestions = () => {
  const content = [
    {
      title: "ORIGEM DO BLOQUEIO",
      description:
        "Entender a origem do bloqueio ajuda a preparar o pedido de liberação dos valores.",
    },
    {
      title: "EXECUÇÕES FISCAIS",
      description:
        "A União, Estados ou Municípios podem bloquear ativos financeiros quando cobrarem tributos judicialmente.",
    },
    {
      title: "AÇÕES TRABALHISTAS",
      description:
        "Valores reconhecidos em ações trabalhistas podem ser cobrados judicialmente por meio de execução.",
    },
    {
      title: "PROCESSOS CÍVEIS",
      description:
        "Débitos oriundos de ações cíveis também podem ser cobrados por meio de uma ação de execução.",
    },
    {
      title: "MEDIDAS CAUTELARES CRIMINAIS",
      description:
        "Em investigações que envolvem valores, pode haver bloqueio preventivo para preservar provas e/ou restituir a vítima.",
    },
    {
      title: "ATENÇÃO AO PRAZO",
      description:
        "Cada caso tem suas particularidades, mas é essencial agir rapidamente para evitar que ativos impenhoráveis fiquem retidos por longos períodos.",
    },
  ];

  const blockTitleRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (blockTitleRef.current) observer.observe(blockTitleRef.current);
    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="block-origins">
      <h2 className="block-title" ref={blockTitleRef}>
        QUAIS AS POSSÍVEIS ORIGENS DOS BLOQUEIOS?
      </h2>

      <div className="cards-grid">
        {content.map((item, index) => (
          <AnimatedCard key={index}>
            <h3 className="card-item-title">{item.title}</h3>
            <p className="card-item-description">{item.description}</p>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
};
