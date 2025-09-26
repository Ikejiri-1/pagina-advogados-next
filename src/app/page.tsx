import { Carousel } from "@/components/Carousel/Carousel";
import balanca from "../assets/balanca.png";
import areasAtuacao from "../assets/areas-atuacao.png";
import { Cards } from "@/components/Cards/Cards";
import "./page.css";
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
export default function Home() {
  return (
    <section className="flex flex-col items-center gap-4 mt-12">
      <Carousel carouselItems={carouselItems} />
      <div className="cards">
        <Cards />
      </div>
    </section>
  );
}
