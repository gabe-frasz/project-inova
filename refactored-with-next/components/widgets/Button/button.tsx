import { ButtonType } from "@/types";
import { useState } from "react";

export const Button = ({ variant, reverse, customClass }: ButtonType) => {
  const [toggleButton, setToggleButton] = useState(false);

  if (variant === "view-more") {
    return (
      <button
        onClick={() => setToggleButton(!toggleButton)}
        className={`w-60 py-2 ${
          reverse
            ? "bg-white text-black hover:text-brand-500"
            : "bg-brand-500 text-white hover:bg-white hover:text-brand-500"
        } text-sm lg:text-base rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${customClass}`}
      >
        {toggleButton ? "Ver mais serviços" : "Ver menos"}
      </button>
    );
  }

  return (
    <button
      className={`w-60 py-2 ${
        reverse
          ? "bg-white text-black hover:text-brand-500"
          : "bg-brand-500 text-white hover:bg-white hover:text-brand-500"
      } text-sm lg:text-base rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${customClass}`}
    >
      {variant == "budget" ? "Solicitar orçamento" : "Ver mais serviços"}
    </button>
  );
};
