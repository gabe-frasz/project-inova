import { Slot } from "@radix-ui/react-slot";
import c from "clsx";
import { ReactNode } from "react";

interface HeadingProps {
  className?: string;
  asChild?: boolean;
  children: ReactNode;
}

export const Heading = ({
  className = "",
  asChild = false,
  children,
}: HeadingProps) => {
  const Comp = asChild ? Slot : "h2";

  return (
    <Comp className={c("text-4xl lg:text-5xl font-bold uppercase", className)}>
      {children}
    </Comp>
  );
};
