import { ServicesType } from "@/types";
import { ServiceCard } from "@components/modules";
import { Button } from "@components/widgets";
import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import data from "../public/data.json";

const Home: NextPage = () => {
  const [showMoreServices, setShowMoreServices] = useState(false);

  function toggleButton() {
    setShowMoreServices(!showMoreServices);
  }

  return (
    <>
      <section>
        <div className="w-full h-full flex items-center text-white bg-gradient-to-b from-transparent to-[#db360999]">
          <div className="container mx-auto px-4 text-center lg:text-left">
            <h2 className="mb-6 text-2xl lg:text-4xl">Inovando em soluções.</h2>

            <p className="mb-6 mx-auto lg:mx-0 lg:text-xl">
              Trabalhos em altura não precisam ser um problema do tamanho do seu
              prédio!
            </p>

            <Link href="/orcamento">
              <a>
                <Button variant="budget" customClass="lg:hidden" />
              </a>
            </Link>
          </div>
        </div>

        <style jsx>{`
          section {
            height: calc(100vh - 72px);
            background: url("/images/banner.png") no-repeat right bottom;
            background-size: cover;
          }
        `}</style>
      </section>

      <section className="-mt-16 pt-28 pb-20 bg-brand-500 text-white text-center rounded-t-[50px]">
        <div className="container mx-auto px-4">
          <h2 id="servicos" className="mb-3 text-lg lg:text-4xl">
            Serviços
          </h2>

          <p className="text-sm lg:text-base">
            Veja os serviços oferecidos pela INOVA.
          </p>

          <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            {data.services.map((service, index) => {
              if (index < 3)
                return (
                  <ServiceCard
                    key={service.id}
                    {...(service as ServicesType)}
                  />
                );
            })}

            {data.services.map((service, index) => {
              if (index >= 3)
                return (
                  <ServiceCard
                    key={service.id}
                    {...(service as ServicesType)}
                    hidden={!showMoreServices}
                  />
                );
            })}
          </div>

          <Button
            variant="view-more"
            reverse
            toggleButton={toggleButton}
            showMore={showMoreServices}
          />
        </div>
      </section>

      <section className="h-[200px] lg:h-[523px] bg-black text-white text-center overflow-x-hidden">
        <div className="relative container h-full mx-auto px-4 flex flex-col justify-center">
          <h2 className="mb-6 lg:mb-9 text-lg lg:text-4xl">Sobre INOVA</h2>

          <p className="w-3/4 mx-auto text-[10px] lg:text-lg">
            Aqui no Grupo Inova atuamos na área de Trabalho em Altura, Elétrica,
            Para- raios, Limpeza de Fachada, Limpeza de Vidros, Vedação,
            Calafetação e pintura. <br /> Atendemos todos os clientes com uma
            solução inteligente e econômica!
          </p>

          <svg
            viewBox="0 0 537 523"
            fill="none"
            className="absolute top-0 -right-4 lg:right-0 w-[217px] h-[200px] lg:w-[537px] lg:h-[523px] opacity-10"
          >
            <path
              d="M13.6393 0H102.49C104.828 0 106.777 0.389672 108.725 1.55876L411.129 159.775C420.092 164.451 431.393 157.827 431.393 147.694V13.6393C431.393 6.23512 437.628 0 445.032 0H523.361C530.765 0 537 6.23512 537 13.6393V508.552C537 515.957 530.765 522.192 523.361 522.192H445.422C438.017 522.192 431.782 515.957 431.782 508.552V291.102C431.782 286.036 429.054 281.36 424.378 279.022L125.872 123.923C116.909 119.247 105.607 125.872 105.607 136.004V508.942C105.607 516.346 99.3723 522.581 91.9681 522.581H13.6393C6.23514 522.581 0 516.346 0 508.942V14.0291C0 6.23515 6.23514 0 13.6393 0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>
    </>
  );
};

export default Home;
