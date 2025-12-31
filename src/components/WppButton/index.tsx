import { whatsappLink } from "@/utils/linkWpp";
import Link from "next/link";
import "./wppbutton.css";
import wpp from "../../assets/whatsapp.png";
import Image from "next/image";
export const WppButton = () => {
  const phone = "12981131591";
  const message = "Ola, gostaria de saber mais!";
  return (
    <div className="wpp-button">
      <Link href={whatsappLink(phone, message)}>
        <Image src={wpp} alt="Ícone do WhatsApp" />
      </Link>
    </div>
  );
};
