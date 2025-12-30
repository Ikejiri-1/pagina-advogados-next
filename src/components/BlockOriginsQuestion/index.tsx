"use client";

import { Card } from "../Card";
import "./blockorigins.css";
import { useEffect, useRef } from "react";

export const BlockOriginsQuestions = () => {
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

      <div ref={cardRef} className="card-wrapper">
        <Card
          title="Sua conta bancária foi bloqueada por uma decisão judicial?"
          subtitle="Entender a origem do bloqueio ajuda a preparar o pedido de liberação dos valores:"
          content={[
            "EXECUÇÕES FISCAIS: A União, Estados ou Municípios podem bloquear ativos financeiros quando cobrarem os tributos judicialmente;",
            "AÇÕES TRABALHISTAS: Valores que surgiram numa ação trabalhista podem ser cobrados judicialmente através de uma ação de execução;",
            "PROCESSOS CÍVEIS: Débitos oriundos de ações cíveis também podem ser cobrados por meio de uma ação de execução;",
            "MEDIDAS CAUTELARES CRIMINAIS: Em investigações que envolvam valores poderá haver bloqueio preventivo para preservar provas e/ou restituir a vítima.",
          ]}
          subcontent="Cada caso tem suas particularidades, mas em todos é necessário agir o mais rápido possível para evitar que ativos impenhoráveis fiquem retidos por longos períodos."
        />
      </div>
    </section>
  );
};
