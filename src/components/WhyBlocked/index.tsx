"use client";
import { Card } from "../Card";
import "./whyblocked.css";
import { useRef, useEffect } from "react";

export const WhyBlocked = () => {
  const whyBlockedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (whyBlockedRef.current) {
      observer.observe(whyBlockedRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={whyBlockedRef} className="why-blocked">
      <h2 className="why-blocked-title">PORQUE A SUA CONTA FOI BLOQUEADA?</h2>

      <Card uniqueContent="O bloqueio de ativos financeiros acontece por conta de uma decisão judicial em um processo de execução devido a alguma dívida que você não tenha quitado." />
    </div>
  );
};
