import { ButtonType } from "@/types";

export const Button = ({
  variant,
  reverse,
  toggleButton,
  showMore,
  customClass,
}: ButtonType) => {
  if (variant === "view-more") {
    return (
      <button
        onClick={toggleButton}
        className={`w-60 py-2 ${
          reverse
            ? "bg-white text-black hover:text-brand-500"
            : "bg-brand-500 text-white hover:bg-white hover:text-brand-500"
        } text-sm lg:text-base rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${customClass}`}
      >
        {showMore ? "Ver menos" : "Veja mais serviços"}
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
      {variant == "budget" ? "Solicitar orçamento" : "Veja mais serviços"}
    </button>
  );
};
