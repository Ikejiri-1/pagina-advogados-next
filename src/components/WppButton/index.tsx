import { whatsappLink } from "@/utils/linkWpp";
import Link from "next/link";
import "./wppbutton.css";
import wpp from "../../../public/assets/whatsapp.png";
import Image from "next/image";
export const WppButton = () => {
  const phone = "12981131591";
  const message =
    "Olá, tudo bem? \n Estou com minha conta bancária bloqueada e preciso de ajuda.";
  return (
    <div className="wpp-button">
      <Link href={whatsappLink(phone, message)}>
        <Image src={wpp} alt="Ícone do WhatsApp" className="wpp-img" />
      </Link>
    </div>
  );
};
