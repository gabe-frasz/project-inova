import { Button } from "@components/widgets";

export const Budget = () => {
  return (
    <>
      <p className="mb-4">Faça já seu orçamento!</p>

      <Button variant="budget" reverse customClass="text-brand-500" />
    </>
  );
};
