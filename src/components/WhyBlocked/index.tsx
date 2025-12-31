"use client";
import { useAnimateOnView } from "@/hooks/useAnimateOnView";
import { Card } from "../Card";
import "./whyblocked.css";
export const WhyBlocked = () => {
  const whyBlockedRef = useAnimateOnView<HTMLDivElement>();

  return (
    <div ref={whyBlockedRef} className="why-blocked">
      <h2 className="why-blocked-title">PORQUE A SUA CONTA FOI BLOQUEADA?</h2>

      <Card uniqueContent="O bloqueio de ativos financeiros acontece por conta de uma decisão judicial em um processo de execução devido a alguma dívida que você não tenha quitado." />
    </div>
  );
};
