import c from "clsx";
import { ButtonHTMLAttributes } from "react";

interface MenuTogglerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isMobileMenuOpen: boolean;
}

export const MenuToggler = ({
  isMobileMenuOpen,
  ...props
}: MenuTogglerProps) => {
  return (
    <button className="lg:hidden z-30" {...props}>
      <svg
        width="31"
        height="30"
        viewBox="0 0 31 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={c("transition-transform duration-300", {
          "rotate-90": isMobileMenuOpen,
        })}
      >
        <rect
          x="1.48425"
          y="1.43836"
          width="27.1233"
          height="27.1233"
          stroke="#EB5E28"
          strokeWidth="2.87671"
        />
        <rect
          x="7.6582"
          y="7.61206"
          width="3.71325"
          height="14.853"
          fill="#EB5E28"
          className={c({
            "-rotate-45 translate-y-[11px] -translate-x-[3px] transition-transform duration-500":
              isMobileMenuOpen,
          })}
        />
        <rect
          x="13.2275"
          y="7.61206"
          width="3.71325"
          height="14.853"
          fill="#EB5E28"
          className={c({
            "opacity-0 transition-opacity": isMobileMenuOpen,
          })}
        />
        <rect
          x="18.7979"
          y="7.61206"
          width="3.71325"
          height="14.853"
          fill="#EB5E28"
          className={c({
            "rotate-45 -translate-y-[11px] translate-x-[11px] transition-transform duration-500":
              isMobileMenuOpen,
          })}
        />
      </svg>
    </button>
  );
};
