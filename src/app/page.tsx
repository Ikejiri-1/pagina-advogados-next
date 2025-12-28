import { Cards } from "@/components/Cards/Cards";
import "./page.css";
import { MainImage } from "@/components/MainImage/MainImage";
import img from "../assets/wpaper.webp";

export default function Home() {
  return (
    <section className="flex flex-col items-center gap-4 mt-12">
      <MainImage img={img} alt="Balanca" title="Balanca" />
      <div className="cards">
        <Cards />
      </div>
    </section>
  );
}
