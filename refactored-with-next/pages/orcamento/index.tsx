import { Button } from "@components/widgets";
import type { NextPage } from "next";

const Budget: NextPage = () => {
  return (
    <div className="flex-1 flex flex-col justify-center border-t border-b border-black border-opacity-60">
      <form
        action="https://formsubmit.co/gabrielvitor.frasao@gmail.com"
        method="post"
        className="container mx-auto px-4 py-20 flex flex-col items-center gap-4"
      >
        <legend>
          <h1 className="mb-16 text-lg lg:text-2xl text-center">
            Formulário de orçamento
          </h1>
        </legend>

        <input
          type="hidden"
          name="_autoresponse"
          value="Recebemos sua mensagem. Agradecemos pelo contato e em breve responderemos!"
        />

        <div className="w-full flex flex-col lg:flex-row gap-4">
          <label>
            Nome <br />
            <input type="text" name="nome" required autoFocus />
          </label>

          <label>
            Empresa/Condomínio <br />
            <input type="text" name="empresa/condominio" required />
          </label>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-4">
          <div className="w-full flex flex-col lg:flex-row gap-4">
            <label>
              Whatsapp <br />
              <input type="number" name="whatsapp" required />
            </label>

            <label>
              Email <br />
              <input type="email" name="email" required />
            </label>
          </div>

          <label>
            Como chegou ao nosso site <br />
            <select name="como_chegou_ao_site">
              <option value=""></option>
            </select>
          </label>
        </div>

        <label>
          Descrição <br />
          <textarea name="descriçao"></textarea>
        </label>

        <Button type="submit" variant="budget" />

        <style jsx>{`
          input,
          textarea,
          select {
            width: 100%;
            height: 45px;
            background: whitesmoke;
            text-indent: 1rem;
            border: 2px solid #db3609;
            border-radius: 7px;
          }

          textarea {
            height: 120px;
          }

          label {
            width: 100%;
            display: block;
            font-size: 14px;
          }

          @media (min-width: 1024px) {
            label {
              font-size: 16px;
            }
          }
        `}</style>
      </form>
    </div>
  );
};

export default Budget;
