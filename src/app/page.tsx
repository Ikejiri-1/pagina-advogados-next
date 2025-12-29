// import { Cards } from "@/components/Cards/Cards";
import "./page.css";
import { MainImage } from "@/components/MainImage/MainImage";
import img from "../assets/wpaper.webp";

export default function Home() {
  return (
    <section className="flex flex-col items-center gap-4 mt-12">
      <MainImage
        img={img}
        alt="Balanca"
        title="
          Sua conta bancária está sendo bloqueada por uma decisão judicial?
       "
        description="Conte com a nossa assessoria especializada em liberação de valores bloqueados"
        button={true}
        buttonText="FALE COM UM ADVOGADO"
      />

      {/* <div className="cards">
        <Cards />
      </div> */}
      <div className="main-content">
        <h2 className="main-content-title">COMO PODEMOS TE AJUDAR</h2>
      </div>
    </section>
  );
}
