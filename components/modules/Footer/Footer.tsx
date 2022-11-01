import { Container } from "@components/layouts";
import { Logo, SocialIcon, Text } from "@components/widgets";
import { navbarOptions } from "@core/utils";
import Link from "next/link";

export const Footer = () => {
  return (
    <Container asChild>
      <footer className="min-h-[252px] lg:min-h-[268px] flex justify-center items-center lg:justify-between border-t-2 border-t-primary-500">
        {/* logo and social icons */}
        <div className="lg:mr-auto flex flex-col items-center lg:items-start">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <Link href="/" className="mb-6 lg:mr-6">
              <Logo length="short" />
            </Link>

            <Text className="lg:max-w-[186px] mb-6 text-sm lg:text-sm text-center lg:text-start text-secondary-500 uppercase">
              Soluções inovadoras para sua empresa.
            </Text>
          </div>

          <div className="flex gap-5">
            <Link href="">
              <SocialIcon type="facebook" />
            </Link>

            <Link href="">
              <SocialIcon type="instagram" />
            </Link>
          </div>

          <Text className="mt-5 hidden lg:block text-sm lg:text-sm">
            INOVA Copywriting 2022 - desenvolvido por{" "}
            <a href="https://encestudio.com">Ence</a> e{" "}
            <a href="https://www.linkedin.com/gabriel-vs-frasao">
              Gabriel VS Frasão
            </a>
          </Text>
        </div>

        {/* navigation */}
        <nav className="ml-12 mr-24 hidden lg:block">
          <ul className="flex flex-col gap-5">
            {navbarOptions.map(({ name, href }) => (
              <li key={name}>
                <Link
                  href={href}
                  className="text-sm lg:text-sm uppercase hover:text-secondary-500 transition-colors"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* contact info */}
        <address className="hidden lg:block not-italic">
          <Text asChild>
            <h3 className="mb-6 lg:text-[14px] text-primary-500 font-semibold uppercase">
              Contato
            </h3>
          </Text>

          <div className="flex flex-col gap-[10px]">
            <Text asChild>
              <a
                href="mailto:contato@inovaalpin.com"
                className="lg:text-[14px] hover:text-primary-500 transition-colors"
              >
                contato@inovaalpin.com
              </a>
            </Text>

            <Text asChild>
              <a
                href="tel:(11) 94025-2057"
                className="lg:text-[14px] hover:text-primary-500 transition-colors"
              >
                (11) 94025-2057
              </a>
            </Text>

            <Text asChild>
              <h4 className="w-[238px] lg:text-[14px] uppercase">
                Entre em contato conosco para realizar um serviço!
              </h4>
            </Text>
          </div>
        </address>
      </footer>
    </Container>
  );
};
