import { Head } from "@components/config";
import { Container } from "@components/layouts";
import { Button, Heading, InputField, Text } from "@components/widgets";
import { servicesInfo } from "@core/utils";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { NextPage } from "next";

import "@splidejs/react-splide/css/core";

const Budget: NextPage = () => {
  return (
    <>
      <Head title="INOVA | Orçamento" />

      <div className="max-w-[1920px] min-h-[calc(100vh-120px)] mx-auto mb-24 flex">
        <section className="relative flex-[1.4] hidden lg:block bg-budget-banner bg-cover bg-no-repeat">
          <Container className="absolute top-0 left-0 w-full h-full z-0">
            <Heading className="mt-28 mb-6 text-primary-500 z-10">
              Encontre suas soluções
            </Heading>

            <Text asChild>
              <p className="z-10 mb-20">
                Entre em contato conosco! Preencha o formulário ao lado com
                algumas informações importantes que vamos entrar em contato em
                breve para iniciarmos nossa parceria.
              </p>
            </Text>

            <Splide
              options={{
                arrows: false,
                autoplay: true,
                drag: false,
                interval: 5000,
                pagination: true,
                type: "loop",
              }}
              className="px-11 py-14 backdrop-blur-[2px] border-2 border-white/20"
            >
              <SplideSlide>
                <ul className="list-disc ml-6 flex flex-col gap-2">
                  <li>Processos especializados</li>
                  <li>Mais de 8 anos de atuação no mercado</li>
                  <li>Certificada em trabalhos industriais</li>
                  <li>Qualificação mundialmente reconhecida</li>
                </ul>
              </SplideSlide>

              <SplideSlide>
                <p className="flex h-full items-center">
                  Trabalho com reconhecimento internacional através de nossas
                  qualificações validadas mundialmente
                </p>
              </SplideSlide>
            </Splide>
          </Container>
        </section>

        <Container asChild>
          <main className="flex-1 pt-12 flex flex-col justify-center">
            <Heading className="lg:hidden mb-6 text-secondary-500 leading-[48px]">
              Encontre suas soluções
            </Heading>

            <Text className="lg:hidden" asChild>
              <p>
                Entre em contato conosco! Preencha o formulário abaixo com
                algumas informações importantes que vamos entrar em contato em
                breve para iniciarmos nossa parceria.
              </p>
            </Text>

            <Text asChild>
              <h2 className="hidden lg:block text-primary-500 text-xl font-semibold uppercase">
                Iniciar conversa
              </h2>
            </Text>

            <form
              action="https://formsubmit.co/contato@inovaalpin.com"
              method="POST"
              className="py-14 flex flex-col gap-[10px]"
            >
              <header>
                <input
                  type="hidden"
                  name="_subject"
                  value="Orçamento solicitado!"
                />

                <input type="hidden" name="_captcha" value="false" />

                <input type="hidden" name="_template" value="box" />
              </header>

              <InputField.Root>
                <InputField.Label>Nome</InputField.Label>

                <InputField.Input type="text" name="nome" required autoFocus />
              </InputField.Root>

              <div className="flex flex-col lg:flex-row gap-[10px] lg:gap-3">
                <InputField.Root className="flex-1">
                  <InputField.Label>Whatsapp</InputField.Label>

                  <InputField.Input type="number" name="whatsapp" required />
                </InputField.Root>

                <InputField.Root className="flex-1">
                  <InputField.Label>Email</InputField.Label>

                  <InputField.Input type="email" name="email" required />
                </InputField.Root>
              </div>

              <InputField.Root>
                <InputField.Label>Endereço</InputField.Label>

                <InputField.Input type="text" name="endereço" required />
              </InputField.Root>

              <InputField.Root>
                <InputField.Label>Serviço</InputField.Label>

                <InputField.Select name="serviço" required>
                  <option selected disabled>
                    Selecione um serviço
                  </option>

                  {servicesInfo.map(({ id, title }) => (
                    <InputField.Option
                      key={id}
                      value={title.toLowerCase().replaceAll(" ", "-")}
                    >
                      {title}
                    </InputField.Option>
                  ))}
                </InputField.Select>
              </InputField.Root>

              <InputField.Root className="mb-12">
                <InputField.Label>Descrição</InputField.Label>

                <InputField.TextArea name="descrição" />
              </InputField.Root>

              <Button type="submit" className="mx-auto">
                Enviar
              </Button>
            </form>
          </main>
        </Container>
      </div>
    </>
  );
};

export default Budget;
