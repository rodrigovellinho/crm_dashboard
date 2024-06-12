import { ComponentProps } from "react";

interface InputPrefixProps extends ComponentProps<"div"> {}

const InputPrefix = (props: InputPrefixProps) => {
  return <div {...props} />;
};

export default InputPrefix;
