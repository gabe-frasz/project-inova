import c from "clsx";
import { SVGAttributes } from "react";

interface SliderArrowProps extends SVGAttributes<HTMLOrSVGElement> {
  direction: "right" | "left";
}

export const SliderArrow = ({ direction }: SliderArrowProps) => {
  return (
    <svg
      width="47"
      height="47"
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={c({
        "rotate-180": direction === "right",
      })}
    >
      <path
        d="M22.1289 30.3063L15.2074 23.3848L22.1289 16.4633"
        stroke="white"
        strokeWidth="3.16818"
        strokeLinecap="square"
        strokeLinejoin="bevel"
      />
      <path
        d="M31.0488 23.3243H17.2058"
        stroke="white"
        strokeWidth="3.16818"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <rect
        x="-2.21772"
        y="2.21772"
        width="41.8199"
        height="41.8199"
        transform="matrix(-1 0 0 1 41.8204 0.199951)"
        stroke="white"
        strokeWidth="4.43545"
      />
    </svg>
  );
};
