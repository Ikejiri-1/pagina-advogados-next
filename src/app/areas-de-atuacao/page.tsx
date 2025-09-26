import { Accordion } from "@/components/Accordion/Accordion";

const AccordionItems = [
  { id: 1, title: "Teste", text: "alguma coisa" },
  { id: 2, title: "Teste", text: "alguma coisa" },
  { id: 3, title: "Teste", text: "alguma coisa" },
  { id: 4, title: "Teste", text: "alguma coisa" },
  { id: 5, title: "Teste", text: "alguma coisa" },
];

export default function AreasDeAtuacao() {
  return (
    <>
      <Accordion AccordionItems={AccordionItems} />
    </>
  );
}
