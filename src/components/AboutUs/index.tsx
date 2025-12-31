"use client";
import "./aboutus.css";
import { useEffect, useRef } from "react";

export const AboutUs = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={aboutRef} className="about-us">
      <h2 className="about-us-title">QUEM SOMOS?</h2>

      <ul className="about-us-list">
        <li>
          <span>
            Especializados na defesa de executados, oferecemos atendimento
            virtual em todo território nacional.
          </span>
        </li>
        <li>
          <span>
            Somos comprometidos com a qualidade no atendimento de nossos
            clientes e com a transparência em cada etapa. Trabalhamos de maneira
            criteriosa, cuidando das peculiaridades de cada caso.
          </span>
        </li>
        <li>
          <span>
            Nosso foco é proporcionar resultados a nível de excelência. Buscamos
            sempre a melhor solução, a melhor estratégia de defesa e os melhores
            acordos possíveis.
          </span>
        </li>
        <li>
          <span>Conte conosco!</span>
        </li>
      </ul>
    </div>
  );
};
