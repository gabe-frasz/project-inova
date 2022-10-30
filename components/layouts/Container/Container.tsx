import { Slot } from "@radix-ui/react-slot";
import c from "clsx";
import { ReactNode } from "react";

interface ContainerProps {
  className?: string;
  asChild?: boolean;
  children: ReactNode;
}

export const Container = ({ className, asChild, children }: ContainerProps) => {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp className={c(className, "max-w-[1920px] mx-auto px-8 lg:px-[100px]")}>
      {children}
    </Comp>
  );
};
