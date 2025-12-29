import { Card } from "../Card";

export const BlockAccQuestion = () => {
  return (
    <>
      <div>
        <h3 className="title">POR QUE A SUA CONTA FOI BLOQUEADA?</h3>
        <Card
          title="Sua conta bancária foi bloqueada por uma decisão judicial?"
          content={[
            "conteúdo aleatório 1",
            "conteúdo aleatório 2",
            "conteúdo aleatório 3",
          ]}
        />
      </div>
    </>
  );
};
