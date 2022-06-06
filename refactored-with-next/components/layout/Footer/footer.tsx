export const Footer = ({}) => {
  return (
    <footer className="text-brand-900">
      <div className="container mx-auto px-1 py-4 text-center">
        <div className="mb-6 flex justify-center items-center">
          <h2 className="mr-4 pr-4 block leading-[50px] text-3xl text-neutral-800 border-r-[3px] border-black">
            Contato
          </h2>

          <div className="mr-14 flex flex-col items-start">
            <a href="tel:(11)94025-2057">(11) 9 4025-2057</a>
            <a href="mailto:inovainstalar@gmail.com">inovainstalar@gmail.com</a>

            <style jsx>{`
              a {
                position: relative;
              }

              a::after {
                content: "";
                width: 0;
                height: 4px;
                display: block;
                position: absolute;
                bottom: 6px;
                background-color: #db360966;
                transition: all 0.3s ease;
                pointer-events: none;
              }

              a:hover::after {
                width: 100%;
              }
            `}</style>
          </div>

          <h1 className="text-4xl">INOVA</h1>
        </div>

        <p>
          &copy; Copyright 2022 INOVA, Todos Direitos Reservados. - Feito por{" "}
          <a href="https://www.encestudio.com" rel="noreferrer" target="_blank">
            Ence&nbsp;Studio
          </a>{" "}
          &amp;{" "}
          <a
            href="https://github.com/SlyCooper-n"
            rel="noreferrer"
            target="_blank"
          >
            Gabriel&nbsp;VS&nbsp;Frasão
          </a>
          .
        </p>
      </div>
    </footer>
  );
};
