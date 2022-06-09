import { ServicesType } from "@/types";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import data from "../../../public/data.json";

const Services: NextPage = () => {
  const { serviceId } = useRouter().query;

  const service = data.services.filter(
    (service) => service.id === Number(serviceId)
  );

  return <div>{service[0].name}</div>;
};

export default Services;
