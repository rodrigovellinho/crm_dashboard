import { ComponentProps } from "react";

interface InputRootProps extends ComponentProps<"div"> {}

const InputRoot = (props: InputRootProps) => {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg py-2"
      {...props}
    ></div>
  );
};

export default InputRoot;
