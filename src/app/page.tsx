// import { Cards } from "@/components/Cards/Cards";
"use client";
import "./page.css";
import { MainImage } from "@/components/MainImage/MainImage";
import img from "../assets/wpaper.webp";
import lawyers from "../assets/advogados.png";
import { HelpContent } from "@/components/HelpContent";
import { BlockOriginsQuestions } from "@/components/BlockOriginsQuestion";
import { WhyBlocked } from "@/components/WhyBlocked";
import { WhyIsPossible } from "@/components/WhyIsPossible";
import { AboutUs } from "@/components/AboutUs";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { WppButton } from "@/components/WppButton";

export default function Home() {
  const imageRef = useRef<HTMLDivElement>(null);

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

    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="flex flex-col items-center gap-4 mt-12">
      <WppButton />
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
      <div className="content-section">
        <HelpContent />

        <WhyBlocked />

        <BlockOriginsQuestions />

        <WhyIsPossible />
      </div>
      <div className="image-container">
        <figure ref={imageRef} className="image-animate">
          <Image
            src={lawyers}
            alt="Foto dos advogados Caio Ikejiri e Caio Alves utilizando terno"
            width={400}
            className="img-lawyers"
          />
          <div className="names">
            <p>Caio Ikejiri</p>
            <p>Caio Alves</p>
          </div>
        </figure>
        <AboutUs />
      </div>
    </section>
  );
}
