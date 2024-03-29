import { Container } from "@components/layouts";
import { Button, Logo, MenuToggler } from "@components/widgets";
import c from "clsx";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHomepage = useRouter().pathname === "/";
  const isAboutPage = useRouter().pathname.includes("/sobre");

  function toggleMenu() {
    setIsMobileMenuOpen((prev) => {
      if (prev) {
        document &&
          document.body.classList.remove(
            "overflow-y-hidden",
            "lg:overflow-y-auto",
          );
        return !prev;
      }

      document &&
        document.body.classList.add("overflow-y-hidden", "lg:overflow-y-auto");
      return !prev;
    });
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
            className="lg:hidden hover:text-primary-500 uppercase transition-colors"
            onClick={toggleMenu}
          >
            <NextLink href="/">Início</NextLink>
          </li>

          <li
            className="hover:text-primary-500 uppercase transition-colors"
            onClick={isHomepage ? undefined : toggleMenu}
          >
            {isHomepage ? (
              <Link
                to="servicos"
                onClick={toggleMenu}
                smooth
                className="cursor-pointer"
              >
                Serviços
              </Link>
            ) : (
              <NextLink href="/?scroll_to=servicos">Serviços</NextLink>
            )}
          </li>

          <li
            className="hover:text-primary-500 uppercase transition-colors"
            onClick={isAboutPage ? undefined : toggleMenu}
          >
            {isAboutPage ? (
              <Link
                to="trabalhos"
                onClick={toggleMenu}
                smooth
                className="cursor-pointer"
              >
                Trabalhos
              </Link>
            ) : (
              <NextLink href="/sobre?scroll_to=trabalhos">Trabalhos</NextLink>
            )}
          </li>

          <li
            className="hover:text-primary-500 uppercase transition-colors"
            onClick={toggleMenu}
          >
            <NextLink href="/sobre">Sobre</NextLink>
          </li>

          <li
            className="hover:text-primary-500 uppercase transition-colors"
            onClick={toggleMenu}
          >
            <NextLink href="/orcamento">
              <Button>Solicitar orçamento</Button>
            </NextLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
};
