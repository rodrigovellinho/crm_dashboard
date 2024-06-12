import { InputHTMLAttributes, forwardRef } from "react";

interface InputControlProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputControl = forwardRef<HTMLInputElement, InputControlProps>(
  ({ type, name, ...rest }, ref) => {
    return (
      <input
        type={type}
        name={name}
        ref={ref}
        {...rest}
        className="flex-1 border-2 bg-transparent p-1 text-zinc-900 placeholder-zinc-600"
      />
    );
  },
);

export default InputControl;
