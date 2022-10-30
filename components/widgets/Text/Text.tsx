import { Slot } from "@radix-ui/react-slot";
import c from "clsx";
import { ReactNode } from "react";

interface TextProps {
  className?: string;
  asChild?: boolean;
  children: ReactNode;
}

export const Text = ({
  className = "",
  asChild = false,
  children,
}: TextProps) => {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp className={c("text-sm lg:text-base font-medium", className)}>
      {children}
    </Comp>
  );
};
