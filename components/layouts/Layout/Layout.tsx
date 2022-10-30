import { Footer, Navbar } from "@components/modules";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />

      {children}

      <Footer />
    </>
  );
};
