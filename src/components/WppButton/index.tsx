import { whatsappLink } from "@/utils/linkWpp";
import Link from "next/link";
import "./wppbutton.css";
import wpp from "../../assets/whatsapp.png";
import Image from "next/image";
export const WppButton = () => {
  return (
    <div className="wpp-button">
      <Link href={whatsappLink}>
        <Image src={wpp} alt="Ícone do WhatsApp" />
      </Link>
    </div>
  );
};
