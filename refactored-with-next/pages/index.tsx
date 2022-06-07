import { Button } from "@components/widgets";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <section>
        <div className="w-full h-full flex items-center text-white bg-gradient-to-b from-transparent to-[#db360999]">
          <div className="container mx-auto px-4 text-center lg:text-left">
            <h2 className="mb-6 text-2xl lg:text-4xl">Inovando em soluções.</h2>

            <p className="max-w-[500px] mb-6 mx-auto lg:mx-0 lg:text-xl">
              Trabalhos em altura não precisam ser um problema do tamanho do seu
              prédio!
            </p>

            <Button variant="budget" customClass="lg:hidden" />
          </div>
        </div>

        <style jsx>{`
          section {
            height: calc(100vh - 100px);
            background: url("/images/banner.png") no-repeat right bottom;
            background-size: cover;
          }
        `}</style>
      </section>

      <section>Serviços</section>

      <section>Sobre</section>
    </>
  );
};

export default Home;
