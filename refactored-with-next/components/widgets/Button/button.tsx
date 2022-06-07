import { ButtonType } from "@/types";

export const Button = ({ variant, customClass }: ButtonType) => {
  return (
    <button
      className={`w-60 py-2 bg-brand-500 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:bg-white hover:text-brand-500 hover:shadow-xl ${customClass}`}
    >
      {variant == "budget" ? "Solicitar orçamento" : "Ver mais serviços"}
    </button>
  );
};
