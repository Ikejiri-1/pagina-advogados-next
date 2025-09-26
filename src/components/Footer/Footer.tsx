import Image from "next/image";
import logo from "../../assets/logo-caios.png";
import bg from "../../assets/bg.png";
import "./Footer.css";

export function Footer() {
  return (
    <footer
      className="footer-container"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      {/* Logo */}
      <div className="logo-footer">
        <figure>
          <Image src={logo} alt="Logo dos advogados" className="image-footer" />
        </figure>
        <p className="">texto</p>
      </div>

      {/* Endereço */}
      <div className="infos">
        <h3 className="text-lg font-semibold">Endereço</h3>
        <p className="street">Rua X</p>
        <p className="neighborhood">Bairro Y</p>
        <p className="CEP">01234-567</p>
      </div>

      {/* Contato */}
      <div className="infos">
        <h3 className="text-lg font-semibold">Contato</h3>
        <p>(11) 1234-5678</p>
        <p>0X7oD@example.com</p>
      </div>

      {/* Redes Sociais */}
      <div className="infos">
        <h3 className="text-lg font-semibold">Redes Sociais</h3>
        <div className="flex gap-2">
          <p>Face</p>
          <p>Insta</p>
          <p>Linkedin</p>
        </div>
      </div>
    </footer>
  );
}
