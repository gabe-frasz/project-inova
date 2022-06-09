import { ReactNode } from "react";
import { MyHead, Header, Footer } from "@components/layout";

export const Template = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <MyHead />

      <Header />

      <main className="flex-1 flex flex-col">{children}</main>

      <Footer />
    </div>
  );
};
