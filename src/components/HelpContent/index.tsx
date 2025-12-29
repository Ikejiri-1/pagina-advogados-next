import { useEffect, useRef } from "react";
import "./helpcontent.css";

export const HelpContent = () => {
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
      { threshold: 0.3 }
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
        <ul className="help-content animate-left" ref={listRef}>
          <li>
            <span>
              Assessoria jurídica para te ajudar a recuperar os valores
              bloqueados
            </span>
          </li>
          <li>
            <span>
              Análise objetiva do seu caso, identificando a origem da dívida e
              explicando detalhadamente a melhor estratégia para sua defesa
            </span>
          </li>
          <li>
            <span>Atuação ágil e eficaz</span>
          </li>
          <li>
            <span>
              Negociação da dívida para conseguir melhores condições de
              pagamento
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};
