import {
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { Text } from "../Text";

interface InputFieldRootProps extends LabelHTMLAttributes<HTMLLabelElement> {}

const InputFieldRoot = ({ children, ...props }: InputFieldRootProps) => {
  return <label {...props}>{children}</label>;
};

interface InputFieldLabelProps extends HTMLAttributes<HTMLSpanElement> {}

const InputFieldLabel = ({ children, ...props }: InputFieldLabelProps) => {
  return (
    <Text {...props} className="block text-primary-500 uppercase">
      {children}
    </Text>
  );
};

interface InputFieldInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const InputFieldInput = ({ name, ...props }: InputFieldInputProps) => {
  return (
    <input
      {...props}
      name={name.toLowerCase()}
      className="w-full px-2 py-1 lg:py-3 bg-gray-800 border border-white focus:border-primary-500 outline-none transition-colors"
    />
  );
};

interface InputFielTextArea
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

const InputFielTextArea = ({ name, ...props }: InputFielTextArea) => {
  return (
    <textarea
      {...props}
      name={name.toLocaleLowerCase()}
      className="w-full min-h-[80px] lg:min-h-[137px] max-h-[300px] px-2 py-1 bg-gray-800 border border-white focus:border-primary-500 outline-none resize-y transition-colors"
    />
  );
};

export const InputField = {
  Root: InputFieldRoot,
  Label: InputFieldLabel,
  Input: InputFieldInput,
  TextArea: InputFielTextArea,
};
