"use client";

import { useAnimateOnView } from "@/hooks/useAnimateOnView";
import { ButtonCallALawyer } from "../ButtonCall";
import { AnimatedCard } from "../Cards/AnimatedCard";
import "./blockorigins.css";

export const BlockOriginsQuestions = () => {
  const content = [
    {
      title: "EXECUÇÕES FISCAIS",
      description:
        "A União, Estados ou Municípios podem bloquear ativos financeiros quando cobrarem tributos judicialmente.",
    },
    {
      title: "AÇÕES TRABALHISTAS",
      description:
        "Valores que surgiram numa ação trabalhista podem ser cobrados judicialmente através de uma ação de execução.",
    },
    {
      title: "PROCESSOS CÍVEIS",
      description:
        "Débitos oriundos de ações cíveis também podem ser cobrados por meio de uma ação de execução.",
    },
    {
      title: "MEDIDAS CAUTELARES CRIMINAIS",
      description:
        "Em investigações que envolvem valores pode haver bloqueio preventivo para preservar provas e/ou restituir a vítima.",
    },
  ];

  const blockTitleRef = useAnimateOnView<HTMLHeadingElement>();

  const infoTopRef = useAnimateOnView<HTMLHeadingElement>({
    threshold: 0.4,
  });

  const infoBottomRef = useAnimateOnView<HTMLHeadingElement>({
    threshold: 0.4,
  });

  const buttonRef = useAnimateOnView<HTMLButtonElement>();
  return (
    <section className="block-origins">
      <h2 ref={blockTitleRef} className="block-title">
        QUAIS AS POSSÍVEIS ORIGENS DOS BLOQUEIOS?
      </h2>

      <h3 ref={infoTopRef} className="info-text">
        Entender a origem do bloqueio ajuda a preparar o pedido de liberação dos
        valores.
      </h3>

      <div className="cards-grid">
        {content.map((item, index) => (
          <AnimatedCard key={index}>
            <h3 className="card-item-title">{item.title}</h3>
            <p className="card-item-description">{item.description}</p>
          </AnimatedCard>
        ))}
      </div>

      <h3 ref={infoBottomRef} className="info-text">
        ATENÇÃO AO PRAZO! Cada caso tem suas particularidades, mas é essencial
        agir rapidamente para evitar que ativos impenhoráveis fiquem retidos por
        longos períodos
      </h3>

      <ButtonCallALawyer ref={buttonRef} />
    </section>
  );
};
