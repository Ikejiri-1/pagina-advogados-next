import { MainImage } from "@/components/MainImage/MainImage";
import balanca from "../../assets/balanca.png";
import "./direito.css";
import { Accordion } from "@/components/Accordion/Accordion";

const AccordionItems = [
  {
    id: 1,
    title: "Teste",
    text: "alguma coisa",
  },
  {
    id: 2,
    title: "Teste",
    text: "alguma coisa",
  },
  {
    id: 3,
    title: "Teste",
    text: "alguma coisa",
  },
  {
    id: 4,
    title: "Teste",
    text: "alguma coisa",
  },
  {
    id: 5,
    title: "Teste",
    text: "alguma coisa",
  },
];
export default function Direito1() {
  return (
    <>
      <MainImage img={balanca} alt="Direito 1" title="Direito 1"></MainImage>
      <div className="content-container">
        <h1>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </h1>
      </div>
      <div className="accordion-container">
        <Accordion AccordionItems={AccordionItems} />
      </div>
    </>
  );
}
