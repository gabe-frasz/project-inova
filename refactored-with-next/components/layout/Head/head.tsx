import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const MyHead = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (router.pathname) {
      case "/":
        setTitle("INOVA | Início");
        break;

      case "/contato":
        setTitle("INOVA | Contato");
        break;

      case "/orcamento":
        setTitle("INOVA | Orçamento");
        break;

      case "/sobre":
        setTitle("INOVA | Sobre");
        break;

      default:
        setTitle("INOVA");
        break;
    }
  }, [router.pathname]);

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="description" content="INOVA" />
      <meta name="keywords" content="trabalhos em altura" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <link rel="shortcut icon" href="favicon.ico" type="image/png" />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="icons/Applefiveicon 57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="icons/Applefiveicon 180.png"
      />
    </Head>
  );
};
