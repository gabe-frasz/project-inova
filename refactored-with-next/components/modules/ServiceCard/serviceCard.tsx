import { ServicesType } from "@/types";
import Link from "next/link";

export const ServiceCard = (props: ServicesType) => {
  return (
    <Link href={`/servicos/${props.id}`}>
      <div>
        <h3>{props.name}</h3>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={props.image} alt={props.name} />

        <a>Ver mais</a>
      </div>
    </Link>
  );
};
