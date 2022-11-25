import {
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  OptionHTMLAttributes,
  SelectHTMLAttributes,
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

interface InputFieldSelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
}

const InputFieldSelect = ({
  name,
  children,
  ...props
}: InputFieldSelectProps) => {
  return (
    <div className="relative group">
      <select
        name={name}
        className="w-full px-2 py-1 lg:py-3 bg-gray-800 border border-white focus:border-primary-500 outline-none transition-colors appearance-none"
        {...props}
      >
        {children}
      </select>

      <div className="absolute top-0 right-0 h-full aspect-square border-[6px] border-white pointer-events-none">
        <svg
          viewBox="0 0 47 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="-rotate-90 group-focus-within:rotate-90 transition-transform"
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
        </svg>
      </div>
    </div>
  );
};

interface InputFieldOptionProps
  extends OptionHTMLAttributes<HTMLOptionElement> {
  value: string | number | readonly string[];
}

const InputFieldOption = ({
  value,
  children,
  ...props
}: InputFieldOptionProps) => {
  return (
    <option value={value} {...props}>
      {children}
    </option>
  );
};

export const InputField = {
  Root: InputFieldRoot,
  Label: InputFieldLabel,
  Input: InputFieldInput,
  TextArea: InputFielTextArea,
  Select: InputFieldSelect,
  Option: InputFieldOption,
};
