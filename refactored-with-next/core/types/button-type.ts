export type ButtonType = {
  variant: "budget" | "view-more";
  reverse?: boolean;
  toggleButton?: () => void;
  showMore?: boolean;
  customClass?: string;
};
