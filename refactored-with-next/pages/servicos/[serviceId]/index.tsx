import { ServicesType } from "@/types";
import type { NextPage } from "next";
import data from "../../../public/data.json";
import { nanoid } from "nanoid";
import { Budget, ListItem } from "@components/modules";
import Head from "next/head";

const Services = ({ service }: { service: ServicesType }) => {
  console.log(service);

  return (
    <div className="flex-1 py-20 flex flex-col justify-center border-t border-b border-black border-opacity-50">
      <Head>
        <title>INOVA | {service.name}</title>
      </Head>

      <div className="container mx-auto px-4 flex flex-col justify-center items-center">
        <h1 className="text-lg lg:text-3xl text-center">{service.name}</h1>

        <section className="w-full max-w-[800px] my-8 p-8 lg:p-16 bg-brand-500 text-white text-sm lg:text-base rounded-xl">
          <ul className="w-fit mx-auto list-disc list-inside">
            {service.details.map((item) => (
              <ListItem key={nanoid()} content={item} />
            ))}
          </ul>
        </section>

        <Budget variant="orange" />
      </div>
    </div>
  );
};

export default Services;

export const getStaticPaths = async () => {
  const paths = data.services.map((service) => ({
    params: { serviceId: service.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: {
  params: { serviceId: string };
}) => {
  const service = data.services.filter(
    (service) => service.id.toString() === context.params.serviceId
  );

  return {
    props: {
      service: service[0],
    },
  };
};
