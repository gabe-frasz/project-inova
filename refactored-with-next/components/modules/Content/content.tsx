export const Content = (props: { variant: "contact" | "about" }) => {
  if (props.variant === "about") {
    return (
      <>
        <h1 className="text-xl lg:text-4xl">Sobre</h1>

        <p className="max-w-[850px] my-8 text-sm lg:text-base">
          Trabalhos em altura não precisa ser um problema do tamanho do seu
          prédio! Conte com a gente no que precisar dos nossos serviços, e tenha
          a tranquilidade de estar acompanhado por profissionais atualizados e
          que amam seu propósit de trabalhar com qualidade e seriedade para os
          nossos clientes.
        </p>

        <p className="max-w-[850px] text-sm lg:text-base">
          Aqui no Grupo Inova atuamos nas áreas de Trabalho em Altura, Elétrica,
          Para-raios, Limpeza de Fachada, Limpeza de Vidros, Vedação,
          Calafetação e pintura. Atendemos todos os clientes com uma solução
          inteligente e econômica!
        </p>
      </>
    );
  }

  return (
    <>
      <h1 className="text-xl lg:text-4xl">Contato</h1>

      <p className="my-8 text-sm lg:text-base">
        Entre em contato conosco através dos links abaixo.
      </p>

      <div className="flex flex-col gap-2">
        <a
          href="mailto:inovainstalar@gmail.com"
          className="underline underline-offset-2"
        >
          inovainstalar@gmail.com
        </a>

        <a href="tel:(11) 9 4025-2057" className="underline underline-offset-2">
          (11) 9 4025-2057
        </a>
      </div>
    </>
  );
};
