import "./helpcontent.css";
import { AnimatedCard } from "../Cards/AnimatedCard";
import { ButtonCallALawyer } from "../ButtonCall";
import { useAnimateOnView } from "@/hooks/useAnimateOnView";

export const HelpContent = () => {
  const content = [
    {
      title: "ASSESSORIA JURÍDICA ESPECIALIZADA",
      description:
        "Assessoria jurídica para te ajudar a recuperar os valores bloqueados.",
    },
    {
      title: "ANÁLISE OBJETIVA DO CASO",
      description:
        "Identificamos a origem da dívida e explicamos detalhadamente a melhor estratégia para sua defesa.",
    },
    {
      title: "ATUAÇÃO ÁGIL E EFICAZ",
      description:
        "Atuação rápida e estratégica para proteger seus direitos e minimizar prejuízos.",
    },
    {
      title: "NEGOCIAÇÃO DA DÍVIDA",
      description:
        "Negociação da dívida para conseguir melhores condições de pagamento.",
    },
  ];

  const titleRef = useAnimateOnView<HTMLHeadingElement>();
  const buttonRef = useAnimateOnView<HTMLButtonElement>();

  return (
    <>
      <div className="main-content">
        <h2 className="main-content-title title" ref={titleRef}>
          COMO PODEMOS TE AJUDAR
        </h2>
        <div className="cards-grid">
          {content.map((item, index) => (
            <AnimatedCard key={index}>
              <h3 className="card-item-title">{item.title}</h3>
              <p className="card-item-description">{item.description}</p>
            </AnimatedCard>
          ))}
        </div>
        <ButtonCallALawyer ref={buttonRef} />
      </div>
    </>
  );
};
