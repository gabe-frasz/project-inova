import { ServicesType } from "@/types";
import Link from "next/link";

export const ServiceCard = (props: ServicesType & { hidden?: boolean }) => {
  return (
    <Link href={`/servicos/${props.id}`}>
      <div
        className={`group w-[250px] md:w-[300px] h-fit py-4 bg-white text-black rounded-3xl transition-all duration-200 cursor-pointer hover:scale-105 ${
          props.hidden
            ? "fixed invisible opacity-0 scale-75 pointer-events-none"
            : ""
        }`}
      >
        <h3 className="w-[45%] mx-auto text-xl font-text">{props.name}</h3>

        <div className="relative h-[210px] my-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={props.image}
            alt={props.name}
            className="absolute w-full h-full top-0 right-0 object-cover"
          />
          <div className="h-full bg-gradient-to-b from-transparent to-brand-500 opacity-40 z-10"></div>
        </div>

        <p className="transition-colors group-hover:text-brand-500">Ver mais</p>
      </div>
    </Link>
  );
};
