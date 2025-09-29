"use client";

import Image from "next/image";
import logo from "../../assets/logo.png";
import bg from "../../assets/bg.png";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./Header.css";

const links = [
  { id: 1, name: "Áreas de atuação", link: "/areas-de-atuacao" },
  { id: 2, name: "Equipe", link: "/equipe" },
  { id: 3, name: "Contato", link: "/contato" },
  { id: 4, name: "Portal de conteúdo", link: "/portal-de-conteudo" },
];

export function Header() {
  const pathname = usePathname();
  return (
    <header
      className="header-container"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      {/* Logo */}
      <div className="mt-4 md:mt-0">
        <Link href="/">
          <figure className="logo">
            <Image src={logo} alt="Logo dos advogados" />
          </figure>
        </Link>
      </div>

      {/* Menu */}
      <nav>
        <ul className="links-list">
          {links.map((link) => {
            const isActive = pathname === link.link;
            return (
              <li key={link.id}>
                <Link
                  href={link.link}
                  className={`text-[#1f2070] font-regular links-header ${
                    isActive ? "text-red-500" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
