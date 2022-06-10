import { ListItemType } from "@/types";
import { nanoid } from "nanoid";

export const ListItem = ({ content }: ListItemType) => {
  if (typeof content === "string") {
    return <li>{content}</li>;
  }

  const [values] = Object.values(content);
  const [key] = Object.keys(content);

  console.log(values);

  return (
    <>
      <li>{key}</li>
      <ul className="ml-8 lg:ml-16 list-[circle]">
        {values.map((item) => (
          <li key={nanoid()}>{item}</li>
        ))}
      </ul>
    </>
  );
};
