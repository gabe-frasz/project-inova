import { Slot } from "@radix-ui/react-slot";
import c from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary";
  className?: string;
  asChild?: boolean;
  children: ReactNode;
}

export const Button = ({
  variant = "default",
  className = "",
  asChild = false,
  children,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      {...props}
      className={c(
        "w-fit min-w-[189px] px-4 py-2 text-sm text-center font-semibold uppercase border-2 border-transparent outline-none transition-colors",
        "lg:px-6 lg:py-3 lg:text-base",
        "hover:bg-transparent",
        "focus:ring-2 focus:ring-offset-2 focus:ring-offset-base-300",
        {
          "bg-primary-500 text-primary-content ring-primary-500 hover:text-primary-500 hover:border-primary-500":
            variant === "default",
          "bg-secondary-500 text-secondary-content ring-secondary-500 hover:text-secondary-500 hover:border-secondary-500":
            variant === "secondary",
        },
        className,
      )}
    >
      {children}
    </Comp>
  );
};
