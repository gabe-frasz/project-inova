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
            "xl:relative xl:w-auto xl:h-auto xl:flex xl:flex-row xl:items-center xl:gap-[3.125rem] xl:opacity-100 xl:pointer-events-auto",
            {
              "opacity-100": isMobileMenuOpen,
              "opacity-0 pointer-events-none": !isMobileMenuOpen,
            },
          )}
        >
          {navbarOptions.map(({ name, href }) => (
            <li key={name} className="uppercase">
              <Link href={href}>{name}</Link>
            </li>
          ))}

          <li>
            <Button variant="secondary" className="px-4 py-2 text-sm" asChild>
              <Link href="/orçamento">Solicitar orçamento</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </Container>
  );
};
