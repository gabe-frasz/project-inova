import { Budget, Content } from "@components/modules";
import type { NextPage } from "next";

const Contact: NextPage = () => {
  return (
    <div className="flex-1 flex flex-col bg-brand-500 text-white text-center">
      <div className="flex-1 container mx-auto px-4 py-16 flex flex-col justify-center items-center">
        <Content variant="contact" />

        <hr className="w-full my-16 border-t-2 opacity-50" />

        <Budget />
      </div>
    </div>
  );
};

export default Contact;
