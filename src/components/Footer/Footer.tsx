import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer-container">
      {/* Logo */}
      <div className="logo-footer">
        <figure className="image-footer"></figure>
      </div>

      {/* Endereço */}
      {/* <div className="infos">
        <h3 className="text-lg font-semibold">Endereço</h3>
        <p className="street">Rua X</p>
        <p className="neighborhood">Bairro Y</p>
        <p className="CEP">01234-567</p>
      </div> */}

      {/* Contato */}
      <div className="infos">
        <h3 className="text-lg font-semibold">Contatos</h3>
        <p>(12) 98113-1591</p>
        <p>caio.ikejiri@adv.oabsp.org.br</p>
        <p>caioalves@adv.oabsp.org.br</p>
        <p></p>
      </div>

      {/* Redes Sociais */}
      {/* <div className="infos">
        <h3 className="text-lg font-semibold">Redes Sociais</h3>
        <div className="flex gap-2">
          <p>Face</p>
          <p>Insta</p>
          <p>Linkedin</p>
        </div>
      </div> */}
    </footer>
  );
}
