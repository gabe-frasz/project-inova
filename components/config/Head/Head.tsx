import NextHead from "next/head";

interface HeadProps {
  title: string;
  description?: string;
}

export const Head = ({ title, description }: HeadProps) => {
  return (
    <NextHead>
      <title>{title}</title>

      <meta
        name="description"
        content={
          description ??
          "A INOVA é uma empresa de trabalhos em altura, com tecnologias e estratégias que permitem uma inovadora solução."
        }
      />
    </NextHead>
  );
};
