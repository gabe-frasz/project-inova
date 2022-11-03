import { Container } from "@components/layouts";
import { Button, Logo, MenuToggler } from "@components/widgets";
import { navbarOptions } from "@core/utils";
import c from "clsx";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMobileMenuOpen((prev) => !prev);
  }

  return (
    <Container className="flex justify-between items-center" asChild>
      <nav className="py-9">
        <Logo />

        <MenuToggler onClick={toggleMenu} isMobileMenuOpen={isMobileMenuOpen} />

        <ul
          className={c(
            // mobile menu
            "absolute top-0 right-0 w-screen h-screen flex flex-col justify-center items-center gap-6 bg-base-300 transition-opacity duration-300 z-20",
            // desktop menu
            "lg:relative lg:w-auto lg:h-auto lg:flex lg:flex-row lg:items-center lg:gap-[3.125rem] lg:opacity-100 lg:pointer-events-auto",
            {
              "opacity-100": isMobileMenuOpen,
              "opacity-0 pointer-events-none": !isMobileMenuOpen,
            },
          )}
        >
          <li
            className="lg:hidden hover:text-secondary-500 uppercase transition-colors"
            onClick={toggleMenu}
          >
            <Link href="/">Início</Link>
          </li>

          {navbarOptions.map(({ name, href }) => (
            <li
              key={name}
              className="hover:text-secondary-500 uppercase transition-colors"
              onClick={toggleMenu}
            >
              <Link href={href}>{name}</Link>
            </li>
          ))}

          <li
            className="hover:text-secondary-500 uppercase transition-colors"
            onClick={toggleMenu}
          >
            <Link href="/orcamento">
              <Button variant="secondary">Solicitar orçamento</Button>
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};
