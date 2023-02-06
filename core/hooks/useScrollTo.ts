import { useRouter } from "next/router";
import { useEffect } from "react";
import { scroller } from "react-scroll";

export const useScrollTo = () => {
  const { scroll_to } = useRouter().query;

  useEffect(() => {
    scroller.scrollTo(scroll_to as string, {
      smooth: true,
      delay: 400,
    });
  }, [scroll_to]);
};
