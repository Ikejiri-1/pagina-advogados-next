import { cards } from "@/utils/cards";
import Link from "next/link";
import "./Cards.css";

export function Cards() {
  return (
    <ul className="card-list_container">
      {cards.map((card) => (
        <li key={card.id} className="list-none card-list_item">
          <Link href={card.path} className="list-link">
            {/* Conteúdo do card */}
            <h2 className="card-title">{card.title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
}
