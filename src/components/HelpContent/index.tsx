import { useEffect, useRef } from "react";
import "./helpcontent.css";
import { AnimatedCard } from "../Cards/AnimatedCard";

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
        "Negociação para buscar melhores condições de pagamento e soluções viáveis.",
    },
  ];

  const titleRef = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target); // 👈 para só este elemento
          }
        });
      },
      { threshold: 0.4 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (listRef.current) observer.observe(listRef.current);

    return () => observer.disconnect();
  }, []);
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
      </div>
    </>
  );
};
