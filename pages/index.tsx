import { Container } from "@components/layouts";
import { Button, Heading, SliderArrow, Text } from "@components/widgets";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Container asChild>
        <main className="relative min-h-[700px] h-[calc(100vh-102px)] lg:h-[calc(100vh-120px)] flex flex-col justify-center bg-home-banner bg-cover bg-bottom overflow-x-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient z-0" />

          <Heading className="mb-6 text-secondary-500 z-10">
            Soluções inovadoras para sua empresa.
          </Heading>

          <Text className="mb-12 z-10" asChild>
            <p>
              A <strong className="font-medium uppercase">INOVA</strong> é uma
              empresa de trabalhos em altura, com tecnologias e estratégias que
              permitem uma inovadora solução.
            </p>
          </Text>

          <Button className="z-10" asChild>
            <Link href="/orçamento">Solicitar orçamento</Link>
          </Button>
        </main>
      </Container>

      <Container asChild>
        <section className="min-h-[476px] lg:min-h-[893px] flex flex-col justify-center items-center">
          <Heading className="mb-6 text-secondary-500">Serviços</Heading>

          <Text className="mb-24 text-center">
            Veja a seguir todos os serviços oferecidos pela INOVA
          </Text>

          <Splide
            hasTrack={false}
            options={{ drag: true, width: "100%" }}
            className="w-full flex"
          >
            <div className="splide__arrows">
              <button className="splide__arrow splide__arrow--prev">
                <SliderArrow direction="left" />
              </button>
            </div>

            <SplideTrack className="flex-1">
              <SplideSlide>ai toma</SplideSlide>

              <SplideSlide>ai toma dnv</SplideSlide>
            </SplideTrack>

            <div className="splide__arrows">
              <button className="splide__arrow splide__arrow--next">
                <SliderArrow direction="right" />
              </button>
            </div>
          </Splide>
        </section>
      </Container>

      <Container asChild>
        <section className="relative min-h-[514px] lg:min-h-[609px] flex flex-col justify-center lg:items-end bg-about-banner bg-bottom">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient z-0" />

          <div className="max-w-[397px] text-start z-10">
            <Heading className="mb-6 text-base-content z-10">
              Sobre a INOVA
            </Heading>

            <Text className="mb-12 z-10" asChild>
              <p>
                Veja mais sobre as soluções da INOVA Alpim, veja resultados e os
                processos dos serviços oferecidos.
              </p>
            </Text>

            <Button asChild>
              <Link href="/sobre" className="block z-10">
                Ver sobre
              </Link>
            </Button>
          </div>
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
            src="/images/example-banner.png"
            alt="banner - exemplo de serviço"
            className="w-full h-[292px] mb-12 hidden lg:block object-cover"
          />

          <Button asChild>
            <Link href="/orçamento">Solicitar orçamento</Link>
          </Button>
        </section>
      </Container>
    </>
  );
};

export default Home;
