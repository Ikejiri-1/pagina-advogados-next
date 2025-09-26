import { cards } from "@/utils/cards";
import Link from "next/link";

export function Cards() {
  return (
    <ul className="flex flex-wrap justify-center gap-4 p-0">
      {cards.map((card) => (
        <li key={card.id} className="list-none">
          <Link
            href={card.path}
            className="relative flex items-center justify-center w-100 h-72 bg-red-500 rounded-xl shadow-lg transform transition-transform duration-400 hover:-translate-y-2 text-center no-underline overflow-hidden"
          >
            {/* Imagem de fundo */}
            <div
              className={`absolute inset-0 bg-center bg-contain bg-no-repeat opacity-0 transition-opacity duration-600 hover:opacity-100`}
              style={{ backgroundImage: "url(../assets/balanca.png)" }}
            ></div>

            {/* Conteúdo do card */}
            <h2 className="relative z-10 text-white text-lg font-medium px-2">
              {card.title}
            </h2>
          </Link>
        </li>
      ))}
    </ul>
  );
}
