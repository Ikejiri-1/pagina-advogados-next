import Image from "next/image";
import logo from "../../assets/logo-caios.png";
import bg from "../../assets/bg.png";

export function Footer() {
  return (
    <footer
      className="w-full h-[50vh] bg-cover bg-center grid grid-cols-1 md:grid-cols-4 gap-4 p-16 justify-items-center items-start"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      {/* Logo */}
      <div className="flex flex-col items-center md:items-start gap-4">
        <figure className="w-[280px] h-[240px] relative">
          <Image
            src={logo}
            alt="Logo dos advogados"
            fill
            style={{ objectFit: "contain" }}
          />
        </figure>
        <p className="text-black text-center md:text-left">texto</p>
      </div>

      {/* Endereço */}
      <div className="flex flex-col gap-2 pt-12 text-black">
        <h3 className="text-lg font-semibold">Endereço</h3>
        <p className="street">Rua X</p>
        <p className="neighborhood">Bairro Y</p>
        <p className="CEP">01234-567</p>
      </div>

      {/* Contato */}
      <div className="flex flex-col gap-2 pt-12 text-black">
        <h3 className="text-lg font-semibold">Contato</h3>
        <p>(11) 1234-5678</p>
        <p>0X7oD@example.com</p>
      </div>

      {/* Redes Sociais */}
      <div className="flex flex-col gap-2 pt-12 text-black">
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
