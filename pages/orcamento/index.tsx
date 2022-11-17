import { Head } from "@components/config";
import { Container } from "@components/layouts";
import { Button, Heading, InputField, Text } from "@components/widgets";
import { NextPage } from "next";

const Budget: NextPage = () => {
  return (
    <>
      <Head title="INOVA | Orçamento" />

      <div className="max-w-[1920px] min-h-[calc(100vh-120px)] mx-auto flex">
        <section className="relative flex-[1.4] hidden lg:block bg-budget-banner bg-cover bg-no-repeat">
          <Container className="absolute top-0 left-0 w-full h-full bg-gradient z-0">
            <Heading className="mt-28 mb-6 text-secondary-500 z-10">
              Encontre suas soluções
            </Heading>

            <Text asChild>
              <p className="z-10">
                Entre em contato conosco! Preencha o formulário ao lado com
                algumas informações importantes que vamos entrar em contato em
                breve para iniciarmos nossa parceria.
              </p>
            </Text>
          </Container>
        </section>

        <Container asChild>
          <main className="flex-1 lg:mb-20 pt-12 flex flex-col justify-center">
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

            <form action="" className="py-14 flex flex-col gap-[10px]">
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

                <InputField.Input type="text" name="serviço" required />
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
