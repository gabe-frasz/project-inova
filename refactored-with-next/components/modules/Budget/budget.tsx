import { Button } from "@components/widgets";

export const Budget = ({ variant }: { variant?: "orange" | "white" }) => {
  return (
    <>
      <p className="mb-4">Faça já seu orçamento!</p>

      {variant === "orange" ? (
        <Button variant="budget" />
      ) : (
        <Button variant="budget" reverse customClass="text-brand-500" />
      )}
    </>
  );
};
