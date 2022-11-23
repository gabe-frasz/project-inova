/* eslint-disable @next/next/no-img-element */
import { Head } from "@components/config";
import { Container } from "@components/layouts";
import { Button, Heading, Text } from "@components/widgets";
import { aboutSliderImages } from "@core/utils";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import c from "clsx";
import { NextPage } from "next";
import Link from "next/link";

const About: NextPage = () => {
  return (
    <>
      <Head title="INOVA | Sobre" />

      <Container asChild>
        <main className="min-h-[492px] py-14 flex flex-col justify-center">
          <Heading className="mb-6 text-secondary-500">Sobre a INOVA</Heading>

          <div className="flex flex-col gap-5">
            <Text asChild>
              <p>
                Aqui na INOVA Alpim atuamos nas áreas de Trabalho em Altura,
                Elétrica, Para- raios, Limpeza de Fachada, Limpeza de Vidros,
                Vedação, Calafetação e pintura.
              </p>
            </Text>

            <Text asChild>
              <p>
                Buscamos sempre uma solução completa para nossos clientes, com
                qualidade e seriedade. Para que nossos clientes tenham a
                tranquilidade de estarem acompanhados por profissionais
                atualizados e que amam seu propósito de trabalhar na INOVA.
              </p>
            </Text>

            <Text asChild>
              <p>
                Juntos tornamos nosso mundo mais verde e saudável, e nossa vida
                mais segura e saudável.
              </p>
            </Text>
          </div>
        </main>
      </Container>

      <section className="min-h-[605px] lg:min-h-[800px] flex flex-col justify-center items-center bg-primary-500 overflow-x-hidden">
        <Container className="mb-20 lg:mb-24 flex flex-col lg:flex-row lg:items-center lg:gap-36">
          <Heading className="mb-6 lg:mb-0 text-center">
            Trabalhos realizados
          </Heading>

          <Text className="text-center">
            Veja os trabalhos realizados pela INOVA.
          </Text>
        </Container>

        <Splide
          hasTrack={false}
          options={{
            arrows: false,
            autoplay: true,
            autoWidth: true,
            breakpoints: {
              1024: {
                gap: 32,
              },
            },
            drag: false,
            easing: "linear",
            gap: 50,
            interval: 1000,
            speed: 100000,
            type: "loop",
          }}
        >
          <SplideTrack>
            {aboutSliderImages.map(({ id, url }) => (
              <SplideSlide key={id}>
                <img
                  src={url}
                  alt="Serviços INOVA"
                  className="w-[190px] h-[245px] lg:w-[300px] lg:h-[450px] object-cover"
                />
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>
      </section>

      <Container asChild>
        <section className="pt-24 flex flex-col items-center">
          <Heading className="mb-6 lg:mb-12 text-secondary-500 text-center">
            Veja mais sobre os trabalhos da inova
          </Heading>

          <Text asChild>
            <p className="mb-12 lg:mb-36 text-center">
              Através de seu Instagram a INOVA está sempre em contato
              compartilhando os trabalhos realizados, soluções e novidades
              dentro da empresa.
            </p>
          </Text>

          <figure className="relative mb-12">
            <img
              src="/images/about-rectangle.png"
              alt="Representações de serviços da INOVA"
              className="hidden lg:block"
            />

            {/* orange blocks */}
            <ul>
              <li
                className={c(
                  "w-full mb-6 px-4 py-7 bg-primary-500 bg-primary-gradient-to-l animate-dance",
                  "lg:absolute lg:top-[350px] lg:-right-1/4 lg:w-[570px] lg:bg-transparent lg:text-end",
                )}
              >
                <Text asChild>
                  <h3 className="lg:max-w-[463px] mb-4 text-sm lg:text-sm lg:inline-block uppercase">
                    Acompanhe nossos trabalhos de perto
                  </h3>
                </Text>

                <Text className="lg:max-w-[463px] lg:inline-block">
                  Veja os processos de nossos trabalhos, inovações e projeção no
                  mercado.
                </Text>
              </li>

              <li
                className={c(
                  "w-full px-4 py-7 bg-primary-500 bg-primary-gradient-to-r animate-dance animation-reverse animation-delay-500",
                  "lg:absolute lg:top-[950px] lg:-left-1/4 lg:w-[570px] lg:bg-transparent",
                )}
              >
                <Text asChild>
                  <h3 className="lg:max-w-[463px] mb-4 text-sm lg:text-sm uppercase">
                    Compreenda mais sobre nossas soluções através de nossos
                    conteúdos.
                  </h3>
                </Text>

                <Text className="lg:max-w-[397px] block">
                  Produção de conteúdo apresentando e destrinchando nossas
                  soluções em meio aos problemas de nossos clientes.
                </Text>
              </li>

              <style jsx>{`
                @media (min-width: 1024px) {
                  .animate-dance {
                    animation: dance 10s ease infinite;
                  }
                }
                .animation-reverse {
                  animation-direction: reverse;
                }
                .animation-delay-500 {
                  animation-delay: 500ms;
                }

                @keyframes dance {
                  0%,
                  100% {
                    transform: translate(0px, 0px);
                  }
                  25% {
                    transform: translate(5px, -10px);
                  }
                  50% {
                    transform: translate(10px, 20px);
                  }
                  75% {
                    transform: translate(-5px, -20px);
                  }
                }
              `}</style>
            </ul>
          </figure>

          <Button asChild>
            <a href="https://www.instagram.com/inovaalpin">Instagram INOVA</a>
          </Button>
        </section>
      </Container>

      <Container asChild>
        <section className="min-h-[566px] lg:min-h-[992px] flex flex-col justify-center items-center">
          <Heading className="mb-6 text-center text-secondary-500">
            Vamos trabalhar em novas soluções?
          </Heading>

          <Text asChild>
            <p className="mb-12 text-center">
              Entre em contato para iniciar um serviço, estamos ansiosos para
              inovar através de soluções para sua empresa.
            </p>
          </Text>

          <img
            src="/images/service-limpeza-de-caixa-dagua.png"
            alt="banner - exemplo de serviço"
            className="w-full h-[292px] mb-12 hidden lg:block object-cover"
          />

          <Button asChild>
            <Link href="/orcamento">Solicitar orçamento</Link>
          </Button>
        </section>
      </Container>
    </>
  );
};

export default About;
