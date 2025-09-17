import { Accordion } from "@/components/Accordion/Accordion";
import { Cards } from "@/components/Cards/Cards";
import { Carousel } from "@/components/Carousel/Carousel";
import balanca from "../../assets/balanca.png";
import areasAtuacao from "../../assets/areas-atuacao.png";
const AccordionItems = [
  { id: 1, title: "Teste", text: "alguma coisa" },
  { id: 2, title: "Teste", text: "alguma coisa" },
  { id: 3, title: "Teste", text: "alguma coisa" },
  { id: 4, title: "Teste", text: "alguma coisa" },
  { id: 5, title: "Teste", text: "alguma coisa" },
];
const carouselItems = [
  {
    id: 1,
    img: balanca,
    alt: "imagem de uma balança dourada",
    title: "Teste",
  },
  {
    id: 2,
    img: areasAtuacao,
    alt: "imagem de uma balança dourada realista com um martelo na frente e livros atrás",
    title: "Teste",
  },
];
export default function AreasDeAtuacao() {
  return (
    <>
      <Accordion AccordionItems={AccordionItems} />
      <Cards></Cards>
      <Carousel carouselItems={carouselItems} />
    </>
  );
}
